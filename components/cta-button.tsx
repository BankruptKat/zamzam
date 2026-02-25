import Link from "next/link";

type CtaButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function CtaButton({
  href,
  label,
  variant = "primary",
}: CtaButtonProps) {
  const classes =
    variant === "primary"
      ? "border-transparent bg-gradient-to-r from-[#b25f40] to-[#d27a5a] text-neutral-50 shadow-[0_8px_24px_rgba(178,95,64,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(178,95,64,0.36)] focus-visible:ring-[#d27a5a]"
      : "border-slate-300/80 bg-white/90 text-slate-800 shadow-[0_6px_18px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:bg-white hover:border-slate-400/70 dark:border-white/15 dark:bg-white/5 dark:text-neutral-100 dark:shadow-none dark:hover:bg-white/8 dark:hover:border-white/20 focus-visible:ring-[#b7c4ff]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 ${classes}`}
    >
      {label}
    </Link>
  );
}
