import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { FileText, Download, Search, FileSpreadsheet, FileImage } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Garden College" },
      { name: "description", content: "Download admission forms, newsletters, the prospectus and more." },
      { property: "og:title", content: "Downloads" },
      { property: "og:description", content: "Forms, newsletters, calendars and policies." },
    ],
  }),
  component: Downloads,
});

const cats = ["All", "Admission Forms", "Newsletters", "Prospectus", "Academic Calendar", "Policies"] as const;

const files = [
  { name: "2027 Enrolment Form", cat: "Admission Forms", type: "PDF", size: "240 KB" },
  { name: "Scholarship Application", cat: "Admission Forms", type: "PDF", size: "180 KB" },
  { name: "International Student Form", cat: "Admission Forms", type: "DOCX", size: "95 KB" },
  { name: "October 2026 Newsletter", cat: "Newsletters", type: "PDF", size: "1.4 MB" },
  { name: "September 2026 Newsletter", cat: "Newsletters", type: "PDF", size: "1.2 MB" },
  { name: "Garden College Prospectus 2027", cat: "Prospectus", type: "PDF", size: "8.2 MB" },
  { name: "Senior School Handbook", cat: "Prospectus", type: "PDF", size: "3.5 MB" },
  { name: "Academic Calendar 2027", cat: "Academic Calendar", type: "PDF", size: "320 KB" },
  { name: "Term Dates 2026", cat: "Academic Calendar", type: "PDF", size: "120 KB" },
  { name: "Code of Conduct", cat: "Policies", type: "PDF", size: "280 KB" },
  { name: "Anti-Bullying Policy", cat: "Policies", type: "PDF", size: "210 KB" },
  { name: "Privacy Policy", cat: "Policies", type: "PDF", size: "150 KB" },
];

const iconFor = (t: string) => t === "DOCX" ? FileText : t === "XLSX" ? FileSpreadsheet : t === "JPG" ? FileImage : FileText;

function Downloads() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<typeof cats[number]>("All");
  const filtered = useMemo(() => files.filter(f =>
    (cat === "All" || f.cat === cat) &&
    (q === "" || f.name.toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  return (
    <>
      <PageHero eyebrow="Resources" title="Downloads" sub="Forms, newsletters, calendars and policies — all in one place." />

      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents…" className="w-full pl-11 pr-4 py-3 rounded-full border bg-card focus:outline-none focus:border-gold" />
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map(c => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-accent/70"}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((f) => {
              const Icon = iconFor(f.type);
              return (
                <div key={f.name} className="flex items-center gap-4 p-5 rounded-2xl border bg-card hover:border-gold transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0"><Icon className="h-5 w-5 text-primary" /></div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{f.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.cat} · {f.type} · {f.size}</div>
                  </div>
                  <button className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors shrink-0" aria-label={`Download ${f.name}`}><Download className="h-4 w-4" /></button>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && <p className="text-center text-muted-foreground py-16">No documents match your search.</p>}
        </div>
      </section>
    </>
  );
}
