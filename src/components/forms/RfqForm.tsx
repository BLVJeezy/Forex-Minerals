"use client";

import { useId, useState } from "react";

import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Dictionary;
};

type Status = "idle" | "submitting" | "success" | "error" | "not_configured";

const REQUIRED_FIELDS = ["company", "fullName", "email", "material"] as const;

/**
 * B2B request-for-quote interface.
 *
 * Structured as a procurement enquiry rather than a contact form: company
 * identity, material, volume, loading point, destination, frequency and
 * schedule. Submissions are posted to /api/rfq.
 */
export function RfqForm({ locale, content }: Props) {
  const { rfq } = content;
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [material, setMaterial] = useState("");

  const field = (name: string) => `${formId}-${name}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, string> = {};
    for (const name of REQUIRED_FIELDS) {
      if (!String(data.get(name) ?? "").trim()) {
        nextErrors[name] = rfq.validation.required;
      }
    }
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      nextErrors.email = rfq.validation.email;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = document.getElementById(field(Object.keys(nextErrors)[0]));
      first?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(data.entries()),
          locale,
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setMaterial("");
        return;
      }

      const payload = await response.json().catch(() => null);
      setStatus(payload?.status === "not_configured" ? "not_configured" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border-l-2 border-gold-500 bg-steel-50 p-8 lg:p-10"
      >
        <h3 className="fx-display text-[1.375rem] text-navy-700">
          {rfq.successTitle}
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-700">
          {rfq.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-12">
      {/* Company */}
      <Fieldset legend={rfq.sections.company}>
        <Field
          id={field("company")}
          name="company"
          label={rfq.fields.company}
          placeholder={rfq.placeholders.company}
          required
          requiredLabel={rfq.required}
          error={errors.company}
          autoComplete="organization"
        />
        <Field
          id={field("fullName")}
          name="fullName"
          label={rfq.fields.fullName}
          placeholder={rfq.placeholders.fullName}
          required
          requiredLabel={rfq.required}
          error={errors.fullName}
          autoComplete="name"
        />
        <Field
          id={field("role")}
          name="role"
          label={rfq.fields.role}
          placeholder={rfq.placeholders.role}
          optionalLabel={rfq.optional}
          autoComplete="organization-title"
        />
        <Field
          id={field("email")}
          name="email"
          type="email"
          label={rfq.fields.email}
          placeholder={rfq.placeholders.email}
          required
          requiredLabel={rfq.required}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id={field("phone")}
          name="phone"
          type="tel"
          label={rfq.fields.phone}
          placeholder={rfq.placeholders.phone}
          optionalLabel={rfq.optional}
          autoComplete="tel"
        />
      </Fieldset>

      {/* Requirement */}
      <Fieldset legend={rfq.sections.need}>
        <div className="sm:col-span-2">
          <Label
            htmlFor={field("material")}
            required
            requiredLabel={rfq.required}
          >
            {rfq.fields.material}
          </Label>
          <select
            id={field("material")}
            name="material"
            required
            value={material}
            onChange={(event) => setMaterial(event.target.value)}
            aria-invalid={errors.material ? true : undefined}
            aria-describedby={errors.material ? `${field("material")}-error` : undefined}
            className={inputClass(Boolean(errors.material))}
          >
            <option value="">—</option>
            {rfq.materials.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.material ? (
            <ErrorText id={`${field("material")}-error`}>{errors.material}</ErrorText>
          ) : null}
        </div>

        {material === "autre" ? (
          <Field
            id={field("materialOther")}
            name="materialOther"
            label={rfq.fields.materialOther}
            className="sm:col-span-2"
          />
        ) : null}

        <div>
          <Label htmlFor={field("volume")} optionalLabel={rfq.optional}>
            {rfq.fields.volume}
          </Label>
          <div className="flex items-stretch">
            <input
              id={field("volume")}
              name="volume"
              type="number"
              min={0}
              inputMode="numeric"
              placeholder={rfq.placeholders.volume}
              className={cn(inputClass(false), "border-r-0")}
            />
            <span className="flex items-center whitespace-nowrap border border-steel-200 bg-steel-50 px-4 text-[0.8125rem] text-steel-600">
              {rfq.fields.volumeUnit}
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor={field("frequency")} optionalLabel={rfq.optional}>
            {rfq.fields.frequency}
          </Label>
          <select
            id={field("frequency")}
            name="frequency"
            defaultValue=""
            className={inputClass(false)}
          >
            <option value="">—</option>
            {rfq.frequencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </Fieldset>

      {/* Logistics */}
      <Fieldset legend={rfq.sections.logistics}>
        <Field
          id={field("loadingPlace")}
          name="loadingPlace"
          label={rfq.fields.loadingPlace}
          placeholder={rfq.placeholders.loadingPlace}
          optionalLabel={rfq.optional}
        />
        <Field
          id={field("destination")}
          name="destination"
          label={rfq.fields.destination}
          placeholder={rfq.placeholders.destination}
          optionalLabel={rfq.optional}
        />
      </Fieldset>

      {/* Schedule */}
      <Fieldset legend={rfq.sections.schedule}>
        <Field
          id={field("startDate")}
          name="startDate"
          type="date"
          label={rfq.fields.startDate}
          optionalLabel={rfq.optional}
        />
        <Field
          id={field("duration")}
          name="duration"
          label={rfq.fields.duration}
          placeholder={rfq.placeholders.duration}
          optionalLabel={rfq.optional}
        />
      </Fieldset>

      {/* Extra */}
      <Fieldset legend={rfq.sections.extra}>
        <div className="sm:col-span-2">
          <Label htmlFor={field("message")} optionalLabel={rfq.optional}>
            {rfq.fields.message}
          </Label>
          <textarea
            id={field("message")}
            name="message"
            rows={5}
            placeholder={rfq.placeholders.message}
            className={cn(inputClass(false), "resize-y")}
          />
        </div>
      </Fieldset>

      {status === "error" || status === "not_configured" ? (
        <div
          role="alert"
          className="border-l-2 border-gold-600 bg-steel-50 p-6"
          data-placeholder={status === "not_configured" ? "true" : undefined}
        >
          <p className="font-semibold text-navy-700">{rfq.errorTitle}</p>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-steel-700">
            {status === "not_configured" ? rfq.devNotice : rfq.errorBody}
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-5 border-t border-steel-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-[0.75rem] leading-relaxed text-steel-500">
          {rfq.formNote}
        </p>
        <Button type="submit" disabled={status === "submitting"} withArrow>
          {status === "submitting" ? rfq.submitting : rfq.submit}
        </Button>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */

function inputClass(hasError: boolean) {
  return cn(
    "mt-2 w-full border bg-white px-4 py-3 text-[0.9375rem] text-navy-700 transition-colors duration-200 placeholder:text-steel-400",
    hasError
      ? "border-gold-600"
      : "border-steel-200 hover:border-steel-300 focus:border-navy-700",
  );
}

function Fieldset({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="mb-6 w-full border-b border-steel-200 pb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold-700">
        {legend}
      </legend>
      <div className="grid gap-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Label({
  htmlFor,
  children,
  required,
  requiredLabel,
  optionalLabel,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  requiredLabel?: string;
  optionalLabel?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-baseline gap-2 text-[0.8125rem] font-medium text-navy-700"
    >
      {children}
      {required ? (
        <span className="text-[0.6875rem] font-normal text-gold-700">
          {requiredLabel}
        </span>
      ) : optionalLabel ? (
        <span className="text-[0.6875rem] font-normal text-steel-600">
          {optionalLabel}
        </span>
      ) : null}
    </label>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 text-[0.75rem] text-gold-700">
      {children}
    </p>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
  requiredLabel,
  optionalLabel,
  error,
  autoComplete,
  className,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  requiredLabel?: string;
  optionalLabel?: string;
  error?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label
        htmlFor={id}
        required={required}
        requiredLabel={requiredLabel}
        optionalLabel={optionalLabel}
      >
        {label}
      </Label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(Boolean(error))}
      />
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </div>
  );
}
