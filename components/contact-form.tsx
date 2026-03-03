"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  message: string;
};

const serviceOptions = [
  "Driveways (concrete & masonry)",
  "Concrete work",
  "Brick work",
  "Chimney repair",
  "Masonry restoration",
  "Stair block construction",
];

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    reset,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ shouldFocusError: true });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");

    let response: Response;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      setStatus("error");
      return;
    }

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset();
    setFocus("name");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("glass-panel space-y-4 rounded-3xl p-6 md:p-8", className)}
      noValidate
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-[#1f2937] dark:text-white/90">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="w-full min-h-[48px] rounded-xl border border-slate-200/70 bg-white/85 px-4 py-3 text-[16px] text-[#0d1528] placeholder:text-slate-500 focus:border-[#d27a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] md:min-h-0 md:py-2.5 md:text-sm dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/45"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name", { required: "Name is required." })}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-sm text-[#9f2b1f]">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-[#1f2937] dark:text-white/90">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className="w-full min-h-[48px] rounded-xl border border-slate-200/70 bg-white/85 px-4 py-3 text-[16px] text-[#0d1528] placeholder:text-slate-500 focus:border-[#d27a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] md:min-h-0 md:py-2.5 md:text-sm dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/45"
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone", { required: "Phone is required." })}
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1 text-sm text-[#9f2b1f]">
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#1f2937] dark:text-white/90">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          className="w-full min-h-[48px] rounded-xl border border-slate-200/70 bg-white/85 px-4 py-3 text-[16px] text-[#0d1528] placeholder:text-slate-500 focus:border-[#d27a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] md:min-h-0 md:py-2.5 md:text-sm dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/45"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter a valid email address.",
            },
          })}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-sm text-[#9f2b1f]">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="serviceNeeded"
          className="mb-1 block text-sm font-semibold text-[#1f2937] dark:text-white/90"
        >
          Service Needed
        </label>
        <select
          id="serviceNeeded"
          autoComplete="off"
          className="w-full min-h-[48px] rounded-xl border border-slate-200/70 bg-white/95 px-4 py-3 text-[16px] text-[#0d1528] [color-scheme:light] focus:border-[#d27a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] md:min-h-0 md:py-2.5 md:text-sm dark:border-white/15 dark:bg-[#111722] dark:text-white dark:[color-scheme:dark]"
          aria-invalid={errors.serviceNeeded ? "true" : "false"}
          aria-describedby={errors.serviceNeeded ? "service-error" : undefined}
          {...register("serviceNeeded", { required: "Please choose a service." })}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceNeeded ? (
          <p id="service-error" className="mt-1 text-sm text-[#9f2b1f]">
            {errors.serviceNeeded.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-[#1f2937] dark:text-white/90">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          autoComplete="off"
          className="w-full min-h-[48px] rounded-xl border border-slate-200/70 bg-white/85 px-4 py-3 text-[16px] text-[#0d1528] placeholder:text-slate-500 focus:border-[#d27a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] md:min-h-0 md:py-2.5 md:text-sm dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/45"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            required: "Please share your project details.",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters.",
            },
          })}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-[#9f2b1f]">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-5 text-[16px] font-semibold text-white shadow-[0_14px_34px_rgba(178,95,64,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(178,95,64,0.44)] md:min-h-12 md:text-sm disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Request a Quote"}
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-green-700 dark:text-green-300" role="status" aria-live="polite">
          Thank you. Your message was sent successfully.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm font-medium text-[#f4b49a]" role="status" aria-live="polite">
          We could not send your request right now. Please call us directly.
        </p>
      ) : null}
    </form>
  );
}
