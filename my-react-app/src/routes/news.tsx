import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/Section";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Garden College" },
      { name: "description", content: "Stay up to date with the latest from Garden College." },
      { property: "og:title", content: "News & Events" },
      { property: "og:description", content: "Latest news, events and stories from our community." },
    ],
  }),
  component: News,
});

const events = [
  { date: "Oct 14, 2026", tag: "Achievement", title: "Garden College tops state in STEM Olympiad", excerpt: "Our Year 11 team brought home gold in the South Australian STEM championships, beating 60 other schools.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=700&fit=crop" },
  { date: "Oct 02, 2026", tag: "Event", title: "Annual Arts Festival returns this November", excerpt: "Three nights of music, drama and visual arts curated entirely by our students — opening night Nov 15.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=700&fit=crop" },
  { date: "Sep 21, 2026", tag: "Community", title: "New community garden opens on the South Lawn", excerpt: "A living classroom where students grow seasonal vegetables, with first harvest donated to the local food bank.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=700&fit=crop" },
];

function News() {
  return (
    <>
      <PageHero eyebrow="Latest" title="News & events" sub="Stories, milestones and what's happening at Garden." />

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <article className="grid lg:grid-cols-2 gap-10 mb-20 group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={events[0].img} alt={events[0].title} width={1200} height={700} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-bold w-fit">FEATURED</span>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-3">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {events[0].date}</span>
                  <span>·</span><span>{events[0].tag}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">{events[0].title}</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{events[0].excerpt}</p>
                <button className="inline-flex items-center gap-2 mt-6 font-semibold text-primary hover:text-gold w-fit">Read more <ArrowRight className="h-4 w-4" /></button>
              </div>
            </article>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {events.slice(1).map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <article className="rounded-2xl border bg-card overflow-hidden h-full group hover:border-gold transition-colors">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={e.img} alt={e.title} width={1200} height={700} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {e.date}</span>
                      <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-semibold">{e.tag}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold mt-3">{e.title}</h3>
                    <p className="mt-2 text-muted-foreground">{e.excerpt}</p>
                    <button className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-gold">Read more <ArrowRight className="h-3.5 w-3.5" /></button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
