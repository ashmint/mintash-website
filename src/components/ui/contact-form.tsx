"use client";

import { useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

function encodeFormData(formData: FormData) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      searchParams.append(key, value);
    }
  }

  return searchParams.toString();
}

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      form.reset();
      setSubmissionState("success");
    } catch (error) {
      console.error(error);
      setSubmissionState("error");
    }
  }

  const isSubmitting = submissionState === "submitting";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-bot-field">Leave this field empty</label>
        <input id="contact-bot-field" name="bot-field" type="text" tabIndex={-1} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Full Name</span>
          <input
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-12 rounded-2xl border border-white/8 bg-slate-950/55 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/30"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Work Email</span>
          <input
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            placeholder="name@company.com"
            className="h-12 rounded-2xl border border-white/8 bg-slate-950/55 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/30"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Organization</span>
          <input
            name="organization"
            type="text"
            required
            autoComplete="organization"
            placeholder="Company or institution"
            className="h-12 rounded-2xl border border-white/8 bg-slate-950/55 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/30"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            className="h-12 rounded-2xl border border-white/8 bg-slate-950/55 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/30"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-200">Area of Interest</span>
        <select
          name="interest"
          defaultValue="On-Premise AI Infrastructure"
          className="h-12 rounded-2xl border border-white/8 bg-slate-950/55 px-4 text-sm text-white outline-none transition-colors focus:border-cyan-300/30"
        >
          <option>On-Premise AI Infrastructure</option>
          <option>Rack-to-API Solutions</option>
          <option>AI Labs & Enterprise Deployment</option>
          <option>AiDaptiv Platform</option>
          <option>Enterprise Memory</option>
          <option>General Inquiry</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-200">Project Details</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us about your deployment goals, workloads, team size, or infrastructure needs."
          className="min-h-[148px] rounded-[1.5rem] border border-white/8 bg-slate-950/55 px-4 py-3 text-sm leading-7 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/30"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-slate-400">
          Send your enquiry and Mintash will follow up with the right next step.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,#eff6ff_0%,#a5f3fc_32%,#60a5fa_100%)] px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(96,165,250,0.26)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>

      {submissionState === "success" || submissionState === "error" ? (
        <p
          aria-live="polite"
          className={
            submissionState === "error"
              ? "text-sm text-rose-200"
              : "text-sm text-cyan-100"
          }
        >
          {submissionState === "success"
            ? "Thanks. Your enquiry has been submitted."
            : "Something went wrong while sending your enquiry. Please try again."}
        </p>
      ) : null}
    </form>
  );
}
