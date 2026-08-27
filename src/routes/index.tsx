import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Droplets,
  Flame,
  Landmark,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Quote as QuoteIcon,
  Ruler,
  ShieldCheck,
  Sun,
  Timer,
} from "lucide-react";

import { Nav } from "@/components/kg/Nav";
import { QuoteForm } from "@/components/kg/Quote";
import { Counter, CTAButton, Reveal, SectionLabel } from "@/components/kg/primitives";

import heroRoof from "@/assets/hero-roof.jpg";
import systemTpo from "@/assets/system-tpo.jpg";
import systemEpdm from "@/assets/system-epdm.jpg";
import systemPvc from "@/assets/system-pvc.jpg";
import breakWide from "@/assets/break-wide.jpg";
import government from "@/assets/government.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import mapTexture from "@/assets/map-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KGBuild — Commercial Roofing Contractor | Phoenix, AZ" },
      {
        name: "description",
        content:
          "KGBuild installs TPO, EPDM and PVC commercial roofing systems across Arizona, Nevada, California, Utah, Texas and nationwide. Licensed & insured. Government project experience.",
      },
      { property: "og:title", content: "KGBuild — Commercial Roofing Built Above, Built To Last" },
      {
        property: "og:description",
        content:
          "Commercial roofing systems engineered for performance. TPO, EPDM and PVC installation across the Southwest and out of state.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const SYSTEMS = [
  {
    id: "TPO",
    image: systemTpo,
    icon: Sun,
    title: "TPO",
    full: "Thermoplastic Polyolefin",
    copy: "Heat-welded, highly reflective single-ply membrane built for punishing desert sun and large uninterrupted roof planes.",
    points: ["Hot-air welded seams", "High solar reflectance", "Efficient large-deck coverage"],
  },
  {
    id: "EPDM",
    image: systemEpdm,
    icon: Droplets,
    title: "EPDM",
    full: "Ethylene Propylene Diene Monomer",
    copy: "Proven rubber membrane with exceptional elasticity and weathering performance for demanding long-service roofs.",
    points: ["Elastic across temperature swings", "Ballasted or fully adhered", "Straightforward maintenance"],
  },
  {
    id: "PVC",
    image: systemPvc,
    icon: Flame,
    title: "PVC",
    full: "Polyvinyl Chloride",
    copy: "Chemical- and grease-resistant membrane specified where kitchen exhaust, industrial output, or fire performance matter.",
    points: ["Chemical & grease resistant", "Welded watertight seams", "Strong fire performance"],
  },
];

const PROJECTS = [
  {
    image: project1,
    type: "Industrial",
    title: "Distribution Center Re-Roof",
    meta: "TPO membrane · Placeholder project entry",
  },
  {
    image: project2,
    type: "Retail",
    title: "Shopping Center Roof Replacement",
    meta: "PVC membrane · Placeholder project entry",
  },
  {
    image: project3,
    type: "Institutional",
    title: "Campus Facility Roofing",
    meta: "EPDM membrane · Placeholder project entry",
  },
];

const REELS = [
  { url: "https://www.facebook.com/reel/1373180294396280", label: "Field Reel 01", note: "Membrane installation" },
  { url: "https://www.facebook.com/reel/1387079893559715", label: "Field Reel 02", note: "Crew on deck" },
  { url: "https://www.facebook.com/reel/1073439835180749", label: "Field Reel 03", note: "System detailing" },
];

const STATES = [
  { code: "AZ", name: "Arizona", note: "Home base — Phoenix" },
  { code: "NV", name: "Nevada", note: "Las Vegas corridor" },
  { code: "CA", name: "California", note: "Southern California" },
  { code: "UT", name: "Utah", note: "Wasatch Front" },
  { code: "TX", name: "Texas", note: "Statewide reach" },
  { code: "US", name: "Out of State", note: "Nationwide capability" },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* 1. HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroRoof}
              alt="Aerial view of a commercial flat roof at sunset in the Arizona desert"
              width={1920}
              height={1200}
              className="h-full w-full object-cover motion-pan"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,transparent_55%)] opacity-80" />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pt-32 pb-16 sm:px-8 lg:pb-24">
            <Reveal>
              <SectionLabel index="01">Phoenix, Arizona · Commercial Roofing</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display mt-8 text-[clamp(2.75rem,10vw,9.5rem)]">
                Built Above.
                <br />
                <span className="text-amber-brand">Built To Last.</span>
              </h1>
            </Reveal>
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <Reveal delay={220}>
                <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
                  Commercial roofing systems engineered for performance.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <CTAButton href="#quote">Request a Quote</CTAButton>
                  <CTAButton href="#projects" variant="ghost">
                    Explore Our Work
                  </CTAButton>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="glass grid grid-cols-2 divide-x divide-white/10 px-6 py-5 sm:px-8">
                  <div className="pr-6">
                    <div className="flex items-center gap-2 text-amber-brand">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">Licensed</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">& Fully Insured</p>
                  </div>
                  <div className="pl-6">
                    <div className="flex items-center gap-2 text-amber-brand">
                      <Landmark className="h-4 w-4" />
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">Government</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">Project Experience</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. INTRO + STATS */}
        <section id="about" className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <Reveal>
                <SectionLabel index="02">Who We Are</SectionLabel>
                <h2 className="display mt-8 text-[clamp(2rem,5vw,4.25rem)]">
                  A commercial roofing
                  <br />
                  contractor built around
                  <br />
                  <span className="text-amber-brand">execution.</span>
                </h2>
              </Reveal>
              <Reveal delay={140} className="lg:pt-24">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  KGBuild is a Phoenix-based commercial roofing company delivering single-ply membrane
                  systems for industrial, retail, institutional and government facilities. We work on
                  live buildings — warehouses that cannot stop shipping, stores that cannot stop
                  trading, public facilities that cannot stop operating.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Every scope is documented, sequenced and installed to manufacturer specification, with
                  crews that stay on site until the detail is right. Licensed, insured, and equipped for
                  large-scale work across the Southwest and beyond.
                </p>
              </Reveal>
            </div>

            <div className="mt-20 grid grid-cols-2 border-t border-border lg:grid-cols-4">
              {[
                { label: "States Served", to: 5, suffix: "+", icon: MapPin },
                { label: "Membrane Systems", to: 3, suffix: "", icon: Ruler },
                { label: "Response Target", to: 24, suffix: "h", icon: Timer },
                { label: "Licensed & Insured", to: 100, suffix: "%", icon: BadgeCheck },
              ].map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 90}
                  className="group border-b border-border p-6 transition-colors duration-500 hover:bg-white/[0.03] sm:p-8 lg:border-r lg:border-b-0 lg:last:border-r-0"
                >
                  <s.icon className="h-5 w-5 text-amber-brand" />
                  <div className="display mt-6 text-[clamp(2.5rem,6vw,4rem)] text-foreground">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-steel uppercase">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-xs text-steel">
              Figures shown are operational indicators, presented as placeholders for easy replacement
              with verified company data.
            </p>
          </div>
        </section>

        {/* 3. SYSTEMS */}
        <section id="systems" className="relative border-t border-border bg-ink">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <Reveal>
              <SectionLabel index="03">Roofing Systems</SectionLabel>
              <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,5vw,4.25rem)]">
                Three membranes. One standard of install.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
              {SYSTEMS.map((s, i) => (
                <Reveal key={s.id} delay={i * 120} className="group relative bg-ink">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.full} commercial roofing installation`}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[35%] transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <s.icon className="h-5 w-5 text-amber-brand" />
                      <h3 className="display mt-4 text-5xl">{s.title}</h3>
                      <p className="mt-1 text-xs tracking-[0.2em] text-steel uppercase">{s.full}</p>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-muted-foreground">{s.copy}</p>
                    <ul className="mt-6 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                          <span className="mt-2 h-px w-4 shrink-0 bg-amber-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#quote"
                      className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-amber-brand uppercase"
                    >
                      Spec this system
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CINEMATIC BREAK */}
        <section className="relative h-[70vh] min-h-[420px] overflow-hidden border-y border-border">
          <img
            src={breakWide}
            alt="Aerial view of a large warehouse rooftop at golden hour"
            width={1920}
            height={1088}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover motion-pan"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
            <Reveal>
              <p className="eyebrow">Field Footage</p>
              <p className="display mx-auto mt-6 max-w-4xl text-[clamp(1.75rem,5vw,4.5rem)]">
                Roofs are not finished at the seam.
                <br />
                <span className="text-amber-brand">They are finished at the detail.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 5. PROJECTS */}
        <section id="projects" className="bg-background">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <Reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <SectionLabel index="05">Commercial Projects</SectionLabel>
                <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,5vw,4.25rem)]">
                  Work at building scale
                </h2>
              </div>
              <p className="max-w-sm text-sm text-steel">
                Project entries below are visual placeholders, structured so real KGBuild project
                photography and details can drop straight in.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 110} className="group relative overflow-hidden bg-background">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent" />
                    <span className="absolute top-5 left-5 border border-white/25 bg-black/30 px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-foreground uppercase backdrop-blur">
                      {p.type}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="display text-2xl">{p.title}</h3>
                      <p className="mt-2 text-xs tracking-[0.16em] text-steel uppercase">{p.meta}</p>
                    </div>
                    <span className="absolute right-5 bottom-6 grid h-10 w-10 place-items-center border border-amber-brand/60 text-amber-brand opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. GOVERNMENT */}
        <section id="government" className="relative overflow-hidden border-y border-border bg-ink">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[640px]">
              <img
                src={government}
                alt="Government civic building illuminated at night"
                width={1600}
                height={1008}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-ink/20" />
            </div>
            <div className="flex items-center px-5 py-20 sm:px-8 lg:px-20 lg:py-32">
              <Reveal>
                <SectionLabel index="06">Government & Large Scale</SectionLabel>
                <h2 className="display mt-8 text-[clamp(2rem,4.5vw,3.75rem)]">
                  Built for public work and prime-contract scale
                </h2>
                <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                  Public and institutional roofing carries documentation, safety and scheduling demands
                  that ordinary jobs do not. KGBuild is structured for that environment — licensed and
                  insured, comfortable with submittals, phased occupied-building work, and coordination
                  with facility teams and general contractors.
                </p>
                <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2">
                  {[
                    { icon: Landmark, t: "Government Projects", d: "Public facility experience" },
                    { icon: ShieldCheck, t: "Licensed & Insured", d: "Documentation on request" },
                    { icon: Building2, t: "Occupied Buildings", d: "Phased, low-disruption sequencing" },
                    { icon: Ruler, t: "Large Decks", d: "Multi-acre roof planes" },
                  ].map((f) => (
                    <li key={f.t} className="bg-ink p-6">
                      <f.icon className="h-5 w-5 text-amber-brand" />
                      <p className="mt-4 text-sm font-semibold tracking-[0.14em] uppercase">{f.t}</p>
                      <p className="mt-1 text-sm text-steel">{f.d}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 7. WHY */}
        <section id="why" className="bg-background">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <Reveal>
              <SectionLabel index="07">Why KGBuild</SectionLabel>
              <h2 className="display mt-8 max-w-4xl text-[clamp(2rem,5vw,4.25rem)]">
                The difference is in how the work is run
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Single-ply specialists",
                  d: "TPO, EPDM and PVC are what we do daily — not a side service bolted onto residential work.",
                },
                {
                  n: "02",
                  t: "Manufacturer-spec installs",
                  d: "Seams, terminations and flashings installed to system specification so warranties hold.",
                },
                {
                  n: "03",
                  t: "Business-hours discipline",
                  d: "Sequencing planned around your operations, deliveries and tenant access.",
                },
                {
                  n: "04",
                  t: "Documented scope",
                  d: "Clear scope, clear pricing, clear progress reporting from tear-off to close-out.",
                },
                {
                  n: "05",
                  t: "Multi-state mobilization",
                  d: "Equipped to mobilize across the Southwest and out of state for portfolio work.",
                },
                {
                  n: "06",
                  t: "Safety first, always",
                  d: "Licensed and insured crews working to fall-protection and site safety standards.",
                },
              ].map((f, i) => (
                <Reveal
                  key={f.n}
                  delay={i * 80}
                  className="group relative bg-background p-8 transition-colors duration-500 hover:bg-white/[0.03] lg:p-10"
                >
                  <span className="font-mono text-xs tracking-[0.3em] text-amber-brand">{f.n}</span>
                  <h3 className="display mt-6 text-2xl">{f.t}</h3>
                  <p className="mt-4 text-muted-foreground">{f.d}</p>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-amber-brand transition-all duration-700 group-hover:w-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. COVERAGE */}
        <section id="coverage" className="relative overflow-hidden border-y border-border bg-ink">
          <img
            src={mapTexture}
            alt=""
            aria-hidden="true"
            width={1600}
            height={1008}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90" />
          <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <Reveal>
              <SectionLabel index="08">Service Areas</SectionLabel>
              <h2 className="display mt-8 max-w-4xl text-[clamp(2rem,5vw,4.25rem)]">
                Rooted in Phoenix.
                <br />
                <span className="text-amber-brand">Mobilized nationwide.</span>
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {STATES.map((s, i) => (
                <Reveal
                  key={s.code}
                  delay={i * 70}
                  className="group relative bg-ink/80 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-amber-brand/10"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="display text-6xl text-foreground/90 transition-colors group-hover:text-amber-brand">
                      {s.code}
                    </span>
                    <MapPin className="h-5 w-5 shrink-0 text-amber-brand" />
                  </div>
                  <p className="mt-6 text-sm font-semibold tracking-[0.18em] uppercase">{s.name}</p>
                  <p className="mt-1 text-sm text-steel">{s.note}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mt-10 max-w-2xl text-muted-foreground">
                Working outside these states? KGBuild travels for qualifying commercial and portfolio
                projects — tell us the location and scope and we will confirm mobilization.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 9. GALLERY / REELS */}
        <section id="gallery" className="bg-background">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <Reveal>
              <SectionLabel index="09">Video & Project Gallery</SectionLabel>
              <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,5vw,4.25rem)]">
                From the roof deck
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                Field reels published on the KGBuild Facebook page. Select a reel to watch the full clip.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
              {REELS.map((r, i) => (
                <Reveal key={r.url} delay={i * 110} className="bg-background">
                  <div className="relative aspect-[9/12] w-full overflow-hidden bg-ink">
                    <iframe
                      title={`KGBuild ${r.label}`}
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                        r.url,
                      )}&show_text=false&width=320&t=0`}
                      className="absolute inset-0 h-full w-full"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      loading="lazy"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="min-w-0">
                      <span className="display block text-2xl">{r.label}</span>
                      <span className="mt-1 block text-xs tracking-[0.18em] text-steel uppercase">
                        {r.note}
                      </span>
                    </span>
                    <PlayCircle className="h-6 w-6 shrink-0 text-amber-brand transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10. TESTIMONIALS */}
        <section className="border-y border-border bg-ink">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <Reveal>
              <SectionLabel index="10">Client Feedback</SectionLabel>
              <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,5vw,4.25rem)]">
                What clients tell us
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
              {[
                {
                  q: "Placeholder testimonial — reserved for a verified client quote about schedule performance on an occupied facility.",
                  r: "Client name",
                  o: "Facility type · State",
                },
                {
                  q: "Placeholder testimonial — reserved for a verified client quote about install quality and detailing standards.",
                  r: "Client name",
                  o: "Facility type · State",
                },
                {
                  q: "Placeholder testimonial — reserved for a verified client quote about communication and close-out documentation.",
                  r: "Client name",
                  o: "Facility type · State",
                },
              ].map((t, i) => (
                <Reveal key={i} delay={i * 110} className="bg-ink p-8 lg:p-10">
                  <QuoteIcon className="h-7 w-7 text-amber-brand" />
                  <p className="mt-8 text-lg leading-relaxed text-foreground/90">{t.q}</p>
                  <div className="mt-10 border-t border-border pt-6">
                    <p className="text-sm font-semibold tracking-[0.16em] uppercase">{t.r}</p>
                    <p className="mt-1 text-sm text-steel">{t.o}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-xs text-steel">
              Testimonial content is placeholder copy intended for replacement with real, attributed
              client feedback.
            </p>
          </div>
        </section>

        {/* 11. QUOTE */}
        <section id="quote" className="relative overflow-hidden bg-background">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:py-36">
            <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
              <Reveal>
                <SectionLabel index="11">Request a Quote</SectionLabel>
                <h2 className="display mt-8 text-[clamp(2.25rem,6vw,5.5rem)]">
                  Let's get on
                  <br />
                  your roof.
                </h2>
                <p className="mt-8 max-w-md text-lg text-muted-foreground">
                  Send the building location, roof size and system preference. We will follow up to
                  schedule an inspection and prepare a scoped proposal.
                </p>
                <div className="mt-12 space-y-px bg-border">
                  <a
                    href="tel:+13236965188"
                    className="group flex items-center gap-5 bg-background p-6 transition-colors hover:bg-white/[0.03]"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-amber-brand" />
                    <span className="min-w-0">
                      <span className="block text-[11px] tracking-[0.24em] text-steel uppercase">Call</span>
                      <span className="display block truncate text-2xl">+1 323-696-5188</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-steel transition-colors group-hover:text-amber-brand" />
                  </a>
                  <a
                    href="mailto:kgb.roofing@gmail.com"
                    className="group flex items-center gap-5 bg-background p-6 transition-colors hover:bg-white/[0.03]"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-amber-brand" />
                    <span className="min-w-0">
                      <span className="block text-[11px] tracking-[0.24em] text-steel uppercase">Email</span>
                      <span className="display block truncate text-2xl">kgb.roofing@gmail.com</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-steel transition-colors group-hover:text-amber-brand" />
                  </a>
                  <div className="flex items-center gap-5 bg-background p-6">
                    <MapPin className="h-5 w-5 shrink-0 text-amber-brand" />
                    <span className="min-w-0">
                      <span className="block text-[11px] tracking-[0.24em] text-steel uppercase">Based in</span>
                      <span className="display block text-2xl">Phoenix, Arizona</span>
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="glass p-6 sm:p-10">
                  <p className="eyebrow">Project Inquiry</p>
                  <div className="mt-8">
                    <QuoteForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 12. FOOTER */}
        <footer className="border-t border-border bg-ink">
          <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
              <div>
                <a href="#top" className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-amber-brand text-primary-foreground display text-lg">
                    K
                  </span>
                  <span className="display text-2xl">
                    KG<span className="text-amber-brand">Build</span>
                  </span>
                </a>
                <p className="mt-6 max-w-sm text-muted-foreground">
                  Commercial roofing systems engineered for performance. TPO, EPDM and PVC installation
                  for industrial, retail, institutional and government facilities.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="border border-border px-4 py-2 text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    Licensed & Insured
                  </span>
                  <span className="border border-border px-4 py-2 text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    Government Projects
                  </span>
                </div>
              </div>

              <div>
                <p className="eyebrow">Navigate</p>
                <ul className="mt-6 space-y-3">
                  {[
                    ["#about", "About"],
                    ["#systems", "Roofing Systems"],
                    ["#projects", "Projects"],
                    ["#government", "Government"],
                    ["#coverage", "Service Areas"],
                    ["#gallery", "Gallery"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="text-muted-foreground transition-colors hover:text-amber-brand"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">Contact</p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="tel:+13236965188"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-amber-brand"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-amber-brand" />
                      +1 323-696-5188
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:kgb.roofing@gmail.com"
                      className="flex min-w-0 items-center gap-3 text-muted-foreground transition-colors hover:text-amber-brand"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-amber-brand" />
                      <span className="truncate">kgb.roofing@gmail.com</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-amber-brand" />
                    Phoenix, Arizona
                  </li>
                </ul>
                <p className="mt-6 text-sm text-steel">
                  Serving AZ · NV · CA · UT · TX and out of state.
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} KGBuild. All rights reserved.</p>
              <p className="tracking-[0.24em] uppercase">Built Above. Built To Last.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
