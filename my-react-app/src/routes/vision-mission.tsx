import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeader } from "@/components/Section";
import { Eye, Target, Heart, Compass, Users, Lightbulb, ShieldCheck, Sprout } from "lucide-react";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Garden College" },
      { name: "description", content: "Our vision, mission, core values and strategic goals." },
      { property: "og:title", content: "Vision & Mission — Garden College" },
      { property: "og:description", content: "What guides us — vision, mission, values and strategy." },
    ],
  }),
  component: VM,
});

const values = [
  { Icon: Heart, t: "Care", d: "We see and value every person in our community." },
  { Icon: Lightbulb, t: "Curiosity", d: "We ask better questions to find better answers." },
  { Icon: ShieldCheck, t: "Integrity", d: "We do the right thing, especially when it's hard." },
  { Icon: Sprout, t: "Growth", d: "We believe in progress, not perfection." },
];

const goals = [
  { n: "01", t: "Future-ready learning", d: "Embed critical thinking, digital fluency and creativity in every subject." },
  { n: "02", t: "Wellbeing first", d: "Treat student wellbeing as the foundation of academic success." },
  { n: "03", t: "Global perspective", d: "Equip students to live and lead in an interconnected world." },
  { n: "04", t: "Inclusive community", d: "Make Garden a place where every family feels they belong." },
];

function VM() {
  return (
    <>
      <PageHero eyebrow="Vision & Mission" title="What guides everything we do." />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl p-10 bg-primary text-primary-foreground h-full">
              <Eye className="h-10 w-10 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-6">Our Vision</h2>
              <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">
                A community of confident, curious learners who lead with kindness and contribute to a better world.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl p-10 bg-card border h-full">
              <Target className="h-10 w-10 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-6">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                To deliver a holistic education that nurtures intellect, character and creativity — knowing each student personally and preparing them thoroughly for life beyond school.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="Core values" title="Four ideas. One culture." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="rounded-2xl p-7 bg-card border h-full hover:border-gold transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center"><Icon className="h-6 w-6 text-primary" /></div>
                  <h3 className="font-display text-xl font-semibold mt-5">{t}</h3>
                  <p className="text-muted-foreground mt-2">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeader eyebrow="Strategy 2026—2030" title="Our strategic goals" />
          <div className="grid md:grid-cols-2 gap-6">
            {goals.map((g, i) => (
              <Reveal key={g.n} delay={i * 0.08}>
                <div className="group rounded-2xl p-8 border bg-card flex gap-6 hover:shadow-[var(--shadow-card)] transition-shadow">
                  <div className="font-display text-5xl font-bold gradient-text shrink-0">{g.n}</div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{g.t}</h3>
                    <p className="text-muted-foreground mt-2">{g.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
