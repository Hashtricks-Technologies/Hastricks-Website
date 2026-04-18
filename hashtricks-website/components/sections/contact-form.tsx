"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("submitting");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setStatus("success");
      reset({ honeypot: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("honeypot")}
      />

      <Field label="Name" error={errors.name?.message}>
        <Input {...register("name")} placeholder="Your name" />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <Input type="email" {...register("email")} placeholder="you@company.com" />
      </Field>
      <Field label="Company" error={errors.company?.message}>
        <Input {...register("company")} placeholder="Your company" />
      </Field>
      <Field label="Service you're interested in" error={errors.service?.message}>
        <select
          className="flex h-10 w-full rounded-md border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 px-3 text-sm text-[var(--color-neutral)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          {...register("service")}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Project brief" error={errors.message?.message}>
        <Textarea
          rows={5}
          {...register("message")}
          placeholder="Tell us what you're trying to build, and any constraints."
        />
      </Field>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-[var(--color-accent)]">
          Thanks — we&apos;ll get back to you within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Email us directly or try WhatsApp.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-[var(--color-neutral)]/80">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
