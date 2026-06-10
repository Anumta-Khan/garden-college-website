import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Sparkles,
  Calendar,
  Quote,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import hero from "@/assets/hero-campus.jpg";
import library from "@/assets/facility-library.jpg";
import lab from "@/assets/facility-lab.jpg";
import science from "@/assets/facility-science.jpg";
import principal from "@/assets/principal.jpg";
import { SectionHeader, Reveal } from "@/components/Section";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garden College — A modern independent school in Magill, SA" },
      {
        name: "description",
        content:
          "Discover Garden College: world-class facilities, dedicated teachers, and a community where every student belongs.",
      },
      { property: "og:title", content: "Garden College" },
      {
        property: "og:description",
        content: "A modern independent school where curiosity meets care.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 40, suffix: "+", label: "Years of Excellence" },
  { value: 1200, suffix: "+", label: "Students Enrolled" },
  { value: 98, suffix: "%", label: "Graduation Rate" },
  { value: 120, suffix: "+", label: "Expert Faculty" },
];

const facilities = [
  {
    img: library,
    title: "Modern Library",
    desc: "Over 25,000 books, quiet study pods, and digital archives.",
  },
  {
    img: lab,
    title: "Computer Labs",
    desc: "Latest hardware, coding & robotics tools for every student.",
  },
  {
    img: science,
    title: "Science Labs",
    desc: "Hands-on experiments in fully-equipped chemistry & biology labs.",
  },
];

const teachers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Head of Science",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Mr. James O'Connor",
    role: "Head of Humanities",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Ms. Priya Nair",
    role: "Head of Mathematics",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Mr. Daniel Lee",
    role: "Director of Sport",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
];

const news = [
  {
    date: "Oct 14, 2026",
    tag: "Achievement",
    title: "Garden College tops state in STEM Olympiad",
    excerpt:
      "Our Year 11 team brought home gold in the South Australian STEM championships.",
  },
  {
    date: "Oct 02, 2026",
    tag: "Event",
    title: "Annual Arts Festival returns this November",
    excerpt:
      "Three nights of music, drama and visual arts curated by our talented students.",
  },
  {
    date: "Sep 21, 2026",
    tag: "Community",
    title: "New community garden opens on the South Lawn",
    excerpt:
      "A living classroom where students grow vegetables for the local food bank.",
  },
];

const testimonials = [
  {
    name: "Emily R.",
    role: "Parent",
    quote:
      "The teachers know my daughter as a person, not just a student. That changes everything.",
  },
  {
    name: "Mark T.",
    role: "Alumni '19",
    quote:
      "Garden College gave me the confidence and the curiosity I still carry today.",
  },
  {
    name: "Anika S.",
    role: "Year 12",
    quote:
      "I've found mentors, friends, and a place where I can be fully myself.",
  },
];

const faqPreview = [
  {
    q: "When are applications open?",
    a: "Applications for the next academic year open in March. We accept rolling enrolments based on availability.",
  },
  {
    q: "Do you offer scholarships?",
    a: "Yes — academic, music, sport and community scholarships are reviewed annually.",
  },
  {
    q: "What year levels do you teach?",
    a: "We offer Reception through Year 12 in a single, supportive campus.",
  },
];

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    // ⚡ faster animation for big numbers
    const duration = value > 500 ? 700 : 1200;

    const increment = Math.max(1, Math.floor(value / (duration / 16)));

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(start);
    }, 16); // ~60fps smooth

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-dvh flex items-center overflow-hidden">
        <motion.img
          src={hero}
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />

        <div className="container-x relative z-10 text-primary-foreground pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-sm mb-6">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Enrolments open
              for 2027
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
              Where curiosity{" "}
              <span className="gradient-text">blossoms</span>.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              A modern, independent school in the heart of Magill — shaping
              confident, compassionate learners for over forty years.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn-primary">
                  Book a Tour <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/about"
                  className="btn-outline text-primary-foreground"
                >
                  Discover Garden
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4">
              Welcome to Garden
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              An education rooted in{" "}
              <span className="gradient-text">
                care, courage and curiosity.
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For over forty years, Garden College has been a place where
              students are known by name, challenged by ideas, and supported in
              becoming their best selves.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-semibold text-primary hover:text-gold transition-colors"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={library}
                className="rounded-2xl shadow-[var(--shadow-card)] aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
              />
              <img
                src={science}
                className="rounded-2xl shadow-[var(--shadow-card)] aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center hover:scale-110 transition-transform duration-300"
            >
              <div className="font-display text-5xl md:text-6xl font-bold gradient-text">
  <Counter value={s.value} suffix={s.suffix} />
</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">
  {s.label}
</div>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Facilities"
            title="Spaces built for learning"
            sub="From quiet study to lively labs."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <Link
                  to="/facilities"
                  className="group block rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={f.img}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{f.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <SectionHeader
            eyebrow="Faculty"
            title="Meet our educators"
            sub="Experts who care deeply."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="group hover:-translate-y-3 transition-all duration-500">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-[var(--shadow-card)]">
                    <img
                      src={t.img}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="mt-4">
                    <h3 className="font-display text-lg font-semibold">
                      {t.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeader eyebrow="Latest" title="News & events" />

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.08}>
                <article className="group rounded-2xl border bg-card p-6 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {n.date}
                    <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      {n.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold mt-3">
                    {n.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {n.excerpt}
                  </p>

                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-gold"
                  >
                    Read more{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 md:p-16 hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Visit our campus
            </h2>

            <p className="mt-4 text-primary-foreground/80">
              We’d love to show you around.
            </p>

            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="btn-primary">
                Book a tour
              </Link>
              <Link to="/about" className="btn-outline text-primary-foreground">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <SectionHeader
            eyebrow="Voices"
            title="What people say"
            center
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="rounded-2xl bg-card p-8 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
                  <Quote className="h-8 w-8 text-gold" />
                  <p className="mt-4 italic">"{t.quote}"</p>
                  <div className="mt-6 border-t pt-4">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              eyebrow="FAQs"
              title="Have questions?"
            />
            <Link to="/faq" className="btn-outline text-foreground">
              See all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {faqPreview.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { Icon: MapPin, label: "Visit", value: "Campus Address" },
            { Icon: Phone, label: "Call", value: "Phone Number" },
            { Icon: Mail, label: "Email", value: "Email Address" },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-6 rounded-2xl border bg-card hover:-translate-y-2 hover:shadow-[var(--shadow-card)] transition-all duration-500"
            >
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <div className="text-xs uppercase">{label}</div>
                <div className="font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-card overflow-hidden hover:border-gold transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between p-5 hover:bg-accent/40 transition-colors"
      >
        <span className="font-semibold">{q}</span>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <motion.div animate={{ height: open ? "auto" : 0 }} className="overflow-hidden">
        <p className="px-5 pb-5 text-muted-foreground">{a}</p>
      </motion.div>
    </div>
  );
}