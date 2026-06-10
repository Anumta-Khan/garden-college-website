import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Garden College" },
      { name: "description", content: "Answers to the questions families ask us most often." },
      { property: "og:title", content: "FAQ" },
      { property: "og:description", content: "Frequently asked questions about Garden College." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQ,
});

const faqs = [
  { q: "When are applications open for 2027?", a: "Applications for the 2027 academic year are open now. We accept rolling enrolments based on availability — earlier applications give the best chance of placement." },
  { q: "Do you offer scholarships and financial assistance?", a: "Yes. Academic, music, sport and community scholarships are offered annually. Need-based financial assistance is also available — contact our enrolments team for a confidential conversation." },
  { q: "What year levels does Garden College teach?", a: "We are a Reception to Year 12 school, all on one welcoming campus in Magill." },
  { q: "How many students are in each class?", a: "Class sizes average 18 students in junior years and 22 in senior years, allowing teachers to really know every child." },
  { q: "What does the school day look like?", a: "The school day runs from 8:30am to 3:15pm, with extended care and co-curricular activities available before and after these times." },
  { q: "Is there a school bus service?", a: "Yes — we run routes to the eastern and northeastern suburbs of Adelaide. A full route list is on our Downloads page." },
  { q: "Do you welcome international students?", a: "Absolutely. We are CRICOS-registered and host students from over 12 countries each year. Visit our admissions team for visa and homestay information." },
  { q: "How do I arrange a campus tour?", a: "Personalised tours run every Tuesday and Thursday during term. Book through our Contact page or call our enrolments office on (08) 8332 3000." },
];

function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" sub="Eight quick answers to the things families ask most often." />

      <section className="py-16">
        <div className="container-x max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={f.q} {...f} idx={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className="border rounded-2xl bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-accent/30 transition-colors">
        <span className="font-display text-lg font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180 text-gold" : ""}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}
