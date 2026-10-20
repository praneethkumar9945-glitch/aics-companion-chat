import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/aics-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AICS — AI Summit | Register Now" },
      { name: "description", content: "AICS is an AI summit for students, builders and innovators. Talks, workshops and networking." },
      { property: "og:title", content: "AICS — AI Summit" },
      { property: "og:description", content: "Talks, hands-on workshops and networking at the AICS AI Summit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["About", "#about"],
  ["Tracks", "#tracks"],
  ["Speakers", "#speakers"],
  ["Agenda", "#agenda"],
  ["Register", "#register"],
];

const tracks = [
  { n: "01", t: "Generative AI", d: "LLMs, diffusion models and the creative frontier." },
  { n: "02", t: "AI Agents & Automation", d: "Autonomous systems that plan, act and deliver." },
  { n: "03", t: "Computer Vision", d: "Machines that see, understand and react." },
  { n: "04", t: "Responsible AI", d: "Ethics, safety and building AI people can trust." },
];

const agenda = [
  ["Opening", "Welcome & keynote address"],
  ["Morning", "Talks across the four tracks"],
  ["Afternoon", "Hands-on workshops & live demos"],
  ["Evening", "Panel, awards & networking"],
];

const words = ["Machine Learning", "Neural Networks", "LLMs", "Robotics", "Agents", "Vision", "Data Science", "Ethics"];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            <span className="text-gradient">AICS</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>
            ))}
          </nav>
          <a href="#register" className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105">
            Get pass
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end">
        <img src={hero} alt="AICS summit stage with a glowing neural network" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
          <div className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="relative flex h-2 w-2"><span className="animate-pulse-ring absolute inset-0 rounded-full bg-lime" /><span className="relative h-2 w-2 rounded-full bg-lime" /></span>
            Registrations open · Dates announcing soon
          </div>
          <h1 className="animate-rise text-[clamp(64px,14vw,200px)] font-bold leading-[0.85] tracking-tighter" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">AICS</span>
          </h1>
          <p className="animate-rise mt-4 font-display text-[clamp(22px,3vw,40px)] font-medium" style={{ animationDelay: "0.25s" }}>
            The AI Summit for the next generation of builders.
          </p>
          <p className="animate-rise mt-4 max-w-xl text-muted-foreground" style={{ animationDelay: "0.4s" }}>
            A day of keynotes, live demos and hands-on workshops exploring where artificial intelligence goes next.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.55s" }}>
            <a href="#register" className="rounded-full bg-gradient-brand px-8 py-4 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105">Register now →</a>
            <a href="#about" className="glass rounded-full px-8 py-4 font-medium transition-colors hover:bg-secondary">Explore summit</a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border py-5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-2xl text-muted-foreground">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-12">{w}<span className="text-lime">✦</span></span>
          ))}
        </div>
      </div>

      {/* About + stats */}
      <section id="about" className="grid-bg relative py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">About AICS</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Where curious minds meet <span className="text-gradient">intelligent machines.</span></h2>
          </div>
          <p className="self-end text-lg text-muted-foreground">
            AICS brings together students, researchers and industry builders to learn, share and create with AI. Expect bold ideas, practical sessions and people who want to build the future.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {[["4", "Tracks"], ["1", "Full day"], ["∞", "Ideas"], ["Live", "Workshops"]].map(([v, l]) => (
            <div key={l} className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="text-gradient font-display text-5xl font-bold">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Tracks</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Four ways into AI.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {tracks.map((t) => (
              <div key={t.n} className="group glass relative overflow-hidden rounded-3xl p-8 transition-all hover:shadow-glow">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-40" />
                <span className="font-display text-sm text-lime">{t.n}</span>
                <h3 className="mt-6 text-2xl font-bold">{t.t}</h3>
                <p className="mt-2 text-muted-foreground">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Speakers</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Lineup revealing soon.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Keynote", "Host", "Panelist", "Workshop lead"].map((r) => (
              <div key={r} className="glass flex aspect-[3/4] flex-col justify-end rounded-3xl p-6">
                <div className="mb-auto flex h-20 w-20 items-center justify-center rounded-full border border-border font-display text-3xl text-muted-foreground animate-pulse-ring">?</div>
                <p className="text-xs uppercase tracking-widest text-lime">{r}</p>
                <p className="mt-1 font-display text-xl font-bold">To be announced</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Agenda</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">The day at a glance.</h2>
          <ol className="mt-12 border-l border-border">
            {agenda.map(([when, what]) => (
              <li key={when} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-brand shadow-glow" />
                <p className="text-sm uppercase tracking-widest text-muted-foreground">{when}</p>
                <p className="mt-1 font-display text-2xl font-bold">{what}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-muted-foreground">Exact timings, date and venue will be shared soon.</p>
        </div>
      </section>

      <Register />

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted-foreground">
          <span className="font-display text-lg font-bold text-gradient">AICS</span>
          <span>© {new Date().getFullYear()} AICS AI Summit</span>
        </div>
      </footer>
    </div>
  );
}

const field = "w-full rounded-xl border border-input bg-background/60 px-4 py-3 outline-none transition focus:border-primary focus:shadow-glow";

function Register() {
  const [done, setDone] = useState<string | null>(null);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = new FormData(e.currentTarget).get("name") as string;
    setDone(name);
  }
  return (
    <section id="register" className="relative py-28">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Register</p>
          <h2 className="mt-4 text-4xl font-bold">Claim your AICS pass.</h2>
          {done ? (
            <div className="mt-8 rounded-2xl border border-accent p-6">
              <p className="font-display text-2xl font-bold text-gradient">Thanks, {done}!</p>
              <p className="mt-2 text-muted-foreground">Your details look good. Online registration saving isn't connected yet, so please keep an eye out for official confirmation.</p>
              <button onClick={() => setDone(null)} className="mt-4 text-sm text-primary underline">Register another student</button>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 grid gap-4 md:grid-cols-2">
              <input name="name" required minLength={2} placeholder="Full name" className={field} />
              <input name="email" type="email" required placeholder="Email" className={field} />
              <input name="phone" type="tel" required pattern="[0-9+\s-]{7,15}" placeholder="Phone" className={field} />
              <input name="college" required placeholder="College / University" className={field} />
              <select name="track" required defaultValue="" className={`${field} md:col-span-2`}>
                <option value="" disabled>Track you're most excited about</option>
                {tracks.map((t) => <option key={t.n}>{t.t}</option>)}
              </select>
              <button type="submit" className="rounded-full bg-gradient-brand py-4 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] md:col-span-2">
                Register for AICS →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
