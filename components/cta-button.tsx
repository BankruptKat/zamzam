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
      ? "border-transparent bg-gradient-to-r from-[#b25f40] to-[#d27a5a] text-white shadow-[0_12px_38px_rgba(178,95,64,0.38)] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(178,95,64,0.44)] focus-visible:ring-[#d27a5a]"
      : "glass-panel text-white hover:-translate-y-0.5 hover:bg-white/10 focus-visible:ring-[#b7c4ff]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 ${classes}`}
    >
      {label}
    </Link>
  );
}
