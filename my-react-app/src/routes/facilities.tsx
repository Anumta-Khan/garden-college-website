import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeader } from "@/components/Section";
import { BookOpen, Monitor, FlaskConical, PresentationIcon, Trophy, Trees, Palette, HeartHandshake } from "lucide-react";
import library from "@/assets/facility-library.jpg";
import lab from "@/assets/facility-lab.jpg";
import science from "@/assets/facility-science.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Garden College" },
      { name: "description", content: "Explore our library, labs, classrooms and sporting facilities." },
      { property: "og:title", content: "Facilities" },
      { property: "og:description", content: "World-class spaces for every kind of learner." },
    ],
  }),
  component: Facilities,
});

const items = [
  { Icon: BookOpen, t: "Library", d: "A three-storey learning hub with 25,000+ books, quiet study pods and a research collection.", img: library },
  { Icon: Monitor, t: "Computer Lab", d: "iMac and Windows workstations with industry-standard software for design, coding and media.", img: lab },
  { Icon: FlaskConical, t: "Science Labs", d: "Three dedicated labs for chemistry, biology and physics — fully equipped for senior practical work.", img: science },
  { Icon: PresentationIcon, t: "Smart Classrooms", d: "Every room features interactive displays and flexible furniture designed for collaboration." },
  { Icon: Trophy, t: "Sports Facilities", d: "Indoor multi-sport stadium, gymnasium and 25m heated swimming pool." },
  { Icon: Trees, t: "Playgrounds", d: "Generous outdoor spaces with shaded play areas, sports fields and a community garden." },
  { Icon: Palette, t: "Activity Rooms", d: "Dance studio, drama theatre, music practice rooms and visual arts studio." },
  { Icon: HeartHandshake, t: "Student Support", d: "Counselling, learning support and careers guidance staffed by qualified specialists." },
];

function Facilities() {
  return (
    <>
      <PageHero eyebrow="Campus" title="Facilities designed for discovery." sub="Beautiful, modern spaces — but more importantly, spaces that are well used." />

      <section className="py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((f, i) => (
              <Reveal key={f.t} delay={(i % 6) * 0.06}>
                <article className="rounded-2xl border bg-card overflow-hidden h-full hover:shadow-[var(--shadow-card)] transition-shadow">
                  {f.img && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={f.img} alt={f.t} width={1024} height={640} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center"><f.Icon className="h-6 w-6 text-primary" /></div>
                    <h3 className="font-display text-xl font-semibold mt-4">{f.t}</h3>
                    <p className="text-muted-foreground mt-2">{f.d}</p>
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
