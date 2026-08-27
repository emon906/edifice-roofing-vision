import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const FIELD =
  "w-full border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-steel focus:border-amber-brand focus:outline-none transition-colors";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [
      `Name: ${fd.get("name")}`,
      `Company: ${fd.get("company")}`,
      `Phone: ${fd.get("phone")}`,
      `Email: ${fd.get("email")}`,
      `Location: ${fd.get("location")}`,
      `System: ${fd.get("system")}`,
      "",
      `${fd.get("message")}`,
    ].join("\n");
    const url = `mailto:kgb.roofing@gmail.com?subject=${encodeURIComponent(
      "Commercial Roofing Quote Request — KGBuild",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input name="name" required placeholder="Full name" className={FIELD} />
      <input name="company" placeholder="Company" className={FIELD} />
      <input name="phone" placeholder="Phone" className={FIELD} />
      <input name="email" type="email" required placeholder="Email" className={FIELD} />
      <input name="location" placeholder="Project location (city, state)" className={FIELD} />
      <select name="system" defaultValue="" className={FIELD}>
        <option value="" disabled>
          Roofing system
        </option>
        <option>TPO</option>
        <option>EPDM</option>
        <option>PVC</option>
        <option>Not sure yet</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Scope, square footage, timeline…"
        className={`${FIELD} sm:col-span-2`}
      />
      <button
        type="submit"
        className="group sm:col-span-2 inline-flex items-center justify-center gap-3 bg-amber-brand px-8 py-4 text-xs font-semibold tracking-[0.22em] text-primary-foreground uppercase transition-colors hover:bg-foreground"
      >
        {sent ? "Opening your email…" : "Send Request"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="sm:col-span-2 text-xs text-steel">
        Prefer to talk? Call{" "}
        <a href="tel:+13236965188" className="text-amber-brand hover:underline">
          +1 323-696-5188
        </a>{" "}
        or email{" "}
        <a href="mailto:kgb.roofing@gmail.com" className="text-amber-brand hover:underline">
          kgb.roofing@gmail.com
        </a>
        .
      </p>
    </form>
  );
}
