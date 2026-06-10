import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeader } from "@/components/Section";
import { Award, Heart, Globe, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Garden College" },
      { name: "description", content: "Forty years of nurturing students at Garden College, Magill SA." },
      { property: "og:title", content: "About Garden College" },
      { property: "og:description", content: "Our story, achievements and academic excellence." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "1985", title: "Founded", text: "Garden College opens its doors with just 86 students and a bold vision for personalised education." },
  { year: "1994", title: "Senior Campus", text: "We extend through Year 12, with our first graduating cohort heading to top Australian universities." },
  { year: "2003", title: "Science Wing", text: "A purpose-built science precinct opens, doubling our STEM capacity." },
  { year: "2014", title: "International Partnerships", text: "Exchange programs launch with schools in Japan, France and Singapore." },
  { year: "2022", title: "New Library", text: "A landmark three-storey library becomes the academic heart of campus." },
  { year: "Today", title: "Looking Forward", text: "1,200 students. 120+ teachers. One unwavering commitment to every child." },
];

const achievements = [
  { Icon: Award, n: "120+", l: "Academic awards in 2025" },
  { Icon: Heart, n: "40 yrs", l: "Of community partnership" },
  { Icon: Globe, n: "12", l: "International exchanges" },
  { Icon: Sparkles, n: "98%", l: "University placement rate" },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Garden College" title="Forty years. One purpose." sub="To know every student, and help them become their best self — in mind, body and character." />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionHeader eyebrow="Our story" title="A school built around the student." />
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>Founded in 1985 by a group of educators who believed school should feel like a second home, Garden College has grown from a small community of 86 students into one of South Australia's most respected independent schools.</p>
              <p>What hasn't changed is our philosophy: small classes, deep relationships, and an unwavering belief that every child has something remarkable to offer.</p>
              <p>Today our students go on to careers in medicine, the arts, technology, sport and public service — but ask any of them what they remember most, and they'll talk about the people.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-5">
              {achievements.map(({ Icon, n, l }) => (
                <div key={l} className="rounded-2xl border p-6 bg-card text-center">
                  <Icon className="h-7 w-7 mx-auto text-gold" />
                  <div className="font-display text-3xl font-bold mt-3">{n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="Timeline" title="Our journey" center />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                    <div className="font-display text-3xl font-bold gradient-text">{t.year}</div>
                    <h3 className="font-display text-xl font-semibold mt-1">{t.title}</h3>
                  </div>
                  <div className="absolute left-2 md:left-1/2 top-2 h-5 w-5 rounded-full bg-gold ring-4 ring-background md:-translate-x-1/2" />
                  <p className="text-muted-foreground mt-2 md:mt-1">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
