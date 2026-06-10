import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/Section";
import { Award, Mail, Quote } from "lucide-react";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/principal")({
  head: () => ({
    meta: [
      { title: "Principal's Message — Garden College" },
      { name: "description", content: "A message from Dr. Helena Sato, Principal of Garden College." },
      { property: "og:title", content: "Principal's Message" },
      { property: "og:description", content: "Leadership and vision from our Principal." },
    ],
  }),
  component: Principal,
});

const achievements = [
  "PhD in Educational Leadership, University of Melbourne",
  "Fulbright Scholar, 2008",
  "20+ years in independent education",
  "Board member, Association of Heads of Independent Schools",
];

function Principal() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="A message from the Principal" />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <img src={principal} alt="Dr. Helena Sato" width={800} height={1024} className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/5] object-cover" />
              <div className="mt-6">
                <div className="font-display text-2xl font-bold">Dr. Helena Sato</div>
                <div className="text-sm text-muted-foreground">Principal, Garden College</div>
                <a href="mailto:principal@gardencollege.sa.edu.au" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-primary hover:text-gold">
                  <Mail className="h-4 w-4" /> principal@gardencollege.sa.edu.au
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Quote className="h-12 w-12 text-gold" />
            <div className="space-y-5 mt-4 text-lg text-foreground/85 leading-relaxed">
              <p className="font-display text-2xl text-foreground">Welcome to Garden College — a school I am incredibly proud to lead.</p>
              <p>When families ask me what makes Garden different, my answer is always the same: it's the people. Walk through our campus on any given morning and you'll see teachers who know every student by name, students who care for one another, and parents who feel genuinely part of a community.</p>
              <p>We're a school that takes academic excellence seriously — our results speak to that. But we're equally serious about character. We believe a good education shapes who you become, not just what you know.</p>
              <p>In a rapidly changing world, we are committed to preparing our students for jobs that don't yet exist, problems that will require new thinking, and a life that asks for resilience, empathy and courage. We do this through small classes, deep relationships, and a curriculum that values curiosity as much as content.</p>
              <p>Whether you are a prospective family exploring schools, a current parent, or a member of our wider community, thank you for being part of Garden College. I'd love to welcome you to campus.</p>
            </div>

            <div className="mt-12 rounded-2xl border bg-card p-8">
              <h3 className="font-display text-xl font-semibold flex items-center gap-2"><Award className="h-5 w-5 text-gold" /> About Dr. Sato</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold mt-2.5 shrink-0" />{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
