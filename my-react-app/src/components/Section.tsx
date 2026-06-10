import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, sub, center = false }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl mb-12 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3">
        <span className="h-px w-8 bg-gold" />{eyebrow}
      </div>}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ title, sub, eyebrow }: { title: string; sub?: string; eyebrow?: string }) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-gradient-to-br from-primary via-primary to-[oklch(0.22_0.06_260)] text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 60%, var(--gold) 0%, transparent 35%)" }} />
      <div className="container-x relative">
        {eyebrow && <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4">{eyebrow}</div>}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl">{title}</h1>
        {sub && <p className="mt-6 text-lg md:text-xl text-primary-foreground/75 max-w-2xl leading-relaxed">{sub}</p>}
      </div>
    </section>
  );
}
