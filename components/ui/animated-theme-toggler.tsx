"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type AnimatedThemeTogglerProps = React.ComponentPropsWithoutRef<"button"> & {
  duration?: number;
};

type StartViewTransition = (
  callback: () => void,
) => {
  ready: Promise<unknown>;
};

export function AnimatedThemeToggler({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) {
  const [isDark, setIsDark] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;
    const nextThemeDark = !document.documentElement.classList.contains("dark");

    const applyTheme = () => {
      flushSync(() => {
        setIsDark(nextThemeDark);
        document.documentElement.classList.toggle("dark", nextThemeDark);
        localStorage.setItem("theme", nextThemeDark ? "dark" : "light");
      });
    };

    const docWithTransition = document as Document & { startViewTransition?: StartViewTransition };
    if (!docWithTransition.startViewTransition) {
      applyTheme();
      return;
    }
    try {
      const vt = docWithTransition.startViewTransition(applyTheme);
      await vt.ready;

      // Keep theme switch stable even if view-transition animation is unsupported.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top),
      );

      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        } as KeyframeAnimationOptions,
      );
    } catch {
      applyTheme();
    }
  }, [duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]",
        className,
      )}
      {...props}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
