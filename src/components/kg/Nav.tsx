import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#systems", label: "Systems" },
  { href: "#projects", label: "Projects" },
  { href: "#government", label: "Government" },
  { href: "#coverage", label: "Coverage" },
  { href: "#gallery", label: "Gallery" },
  { href: "#quote", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:py-5">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-amber-brand text-primary-foreground display text-lg">
            K
          </span>
          <span className="display truncate text-xl tracking-tight sm:text-2xl">
            KG<span className="text-amber-brand">Build</span>
          </span>
        </a>

        <nav className="hidden justify-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber-brand transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+13236965188"
            className="hidden items-center gap-2 text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:text-amber-brand md:flex"
          >
            <Phone className="h-3.5 w-3.5 text-amber-brand" />
            +1 323-696-5188
          </a>
          <a
            href="#quote"
            className="hidden bg-amber-brand px-6 py-3 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-foreground sm:inline-block"
          >
            Request a Quote
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-4 sm:px-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 display text-2xl text-foreground transition-colors hover:text-amber-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-5 bg-amber-brand py-4 text-center text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
