import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/Section";
import { Mail, Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — Garden College" },
      { name: "description", content: "Meet the educators who make Garden College special." },
      { property: "og:title", content: "Our Faculty" },
      { property: "og:description", content: "Search and meet our teaching staff." },
    ],
  }),
  component: Faculty,
});

const departments = ["All", "Science", "Mathematics", "Humanities", "Languages", "Arts", "Sport"] as const;

const faculty = [
  { name: "Dr. Sarah Mitchell", role: "Head of Science", dept: "Science", qual: "PhD Chemistry, ANU", subj: "Chemistry, Biology", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces", email: "s.mitchell@gardencollege.sa.edu.au" },
  { name: "Mr. James O'Connor", role: "Head of Humanities", dept: "Humanities", qual: "MA History, UniMelb", subj: "History, Politics", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces", email: "j.oconnor@gardencollege.sa.edu.au" },
  { name: "Ms. Priya Nair", role: "Head of Mathematics", dept: "Mathematics", qual: "MSc Mathematics, UoA", subj: "Specialist Maths", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces", email: "p.nair@gardencollege.sa.edu.au" },
  { name: "Mr. Daniel Lee", role: "Director of Sport", dept: "Sport", qual: "BEd (PE), Flinders", subj: "PE, Health", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces", email: "d.lee@gardencollege.sa.edu.au" },
  { name: "Mme. Claire Dubois", role: "Languages Coordinator", dept: "Languages", qual: "MA French, Sorbonne", subj: "French, Spanish", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces", email: "c.dubois@gardencollege.sa.edu.au" },
  { name: "Mr. Alex Park", role: "Visual Arts Lead", dept: "Arts", qual: "MFA, RMIT", subj: "Art, Design", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces", email: "a.park@gardencollege.sa.edu.au" },
  { name: "Ms. Olivia Tran", role: "Physics Teacher", dept: "Science", qual: "BSc(Hons) Physics", subj: "Physics", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces", email: "o.tran@gardencollege.sa.edu.au" },
  { name: "Mr. Henry Walsh", role: "English Teacher", dept: "Humanities", qual: "BA(Hons) English", subj: "English, Literature", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces", email: "h.walsh@gardencollege.sa.edu.au" },
  { name: "Ms. Naomi Cole", role: "Music Director", dept: "Arts", qual: "MMus, Adelaide", subj: "Music, Choir", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=faces", email: "n.cole@gardencollege.sa.edu.au" },
];

function Faculty() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState<typeof departments[number]>("All");

  const filtered = useMemo(() => faculty.filter(f =>
    (dept === "All" || f.dept === dept) &&
    (q === "" || (f.name + f.role + f.subj).toLowerCase().includes(q.toLowerCase()))
  ), [q, dept]);

  return (
    <>
      <PageHero eyebrow="Our Faculty" title="Educators who care." sub="Search by name, subject or department." />

      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search faculty…" className="w-full pl-11 pr-4 py-3 rounded-full border bg-card focus:outline-none focus:border-gold" />
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map(d => (
                <button key={d} onClick={() => setDept(d)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${dept === d ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-accent/70"}`}>{d}</button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((f, i) => (
              <Reveal key={f.name} delay={(i % 6) * 0.05}>
                <article className="rounded-2xl border bg-card overflow-hidden group hover:border-gold transition-colors">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={f.img} alt={f.name} width={400} height={400} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent text-xs font-semibold text-accent-foreground">{f.dept}</span>
                    <h3 className="font-display text-xl font-bold mt-3">{f.name}</h3>
                    <p className="text-sm text-gold font-semibold">{f.role}</p>
                    <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                      <div><dt className="inline font-semibold text-foreground/80">Qualifications: </dt><dd className="inline">{f.qual}</dd></div>
                      <div><dt className="inline font-semibold text-foreground/80">Subjects: </dt><dd className="inline">{f.subj}</dd></div>
                    </dl>
                    <a href={`mailto:${f.email}`} className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:text-gold"><Mail className="h-3.5 w-3.5" /> Contact</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && <p className="text-center text-muted-foreground py-16">No faculty match your search.</p>}
        </div>
      </section>
    </>
  );
}
