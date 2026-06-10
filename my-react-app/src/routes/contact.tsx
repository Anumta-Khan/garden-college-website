import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/Section";
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Garden College" },
      { name: "description", content: "Get in touch, book a tour or apply. We'd love to hear from you." },
      { property: "og:title", content: "Contact Garden College" },
      { property: "og:description", content: "Visit, call or write — we'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Get in touch" title="We'd love to hear from you." sub="Whether you're booking a tour or just have a question — drop us a line." />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <Reveal>
            <div className="space-y-6">
              <ContactCard Icon={MapPin} label="Visit us" value="185 Fisher Street, Magill SA 5072, Australia" />
              <ContactCard Icon={Phone} label="Call us" value="(08) 8332 3000" />
              <ContactCard Icon={Mail} label="Write to us" value="info@gardencollege.sa.edu.au" />

              <div className="rounded-2xl border bg-card p-6">
                <div className="font-semibold mb-3">Follow Garden</div>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" aria-label="Social" className="h-10 w-10 rounded-full bg-accent flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false), 4000); }}
              className="rounded-3xl border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] space-y-5"
            >
              <h2 className="font-display text-3xl font-bold">Send a message</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Subject" name="subject" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Message</label>
                <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:border-gold" />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {sent ? "Thank you — we'll be in touch." : <>Send message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[16/9] border">
            <iframe
              title="Garden College location"
              src="https://www.google.com/maps?q=185+Fisher+Street,+Magill+SA+5072&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ Icon, label, value }: { Icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex gap-4 p-6 rounded-2xl border bg-card">
      <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0"><Icon className="h-5 w-5 text-primary" /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-1.5">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:border-gold" />
    </div>
  );
}
