import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-gold-foreground">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="font-display text-xl font-bold">Garden College</span>
          </Link>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Nurturing curious minds and compassionate hearts since 1985. A place where students thrive academically and personally.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[["/about","About"],["/faculty","Faculty"],["/facilities","Facilities"],["/news","News & Events"],["/gallery","Gallery"],["/downloads","Downloads"]].map(([to,label]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>185 Fisher Street, Magill SA 5072, Australia</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>(08) 8332 3000</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>info@gardencollege.sa.edu.au</span></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-primary-foreground/70 mb-4">Get college updates and news in your inbox.</p>
          <form className="flex gap-2" onSubmit={(e)=>{e.preventDefault();}}>
            <input type="email" required placeholder="Your email" aria-label="Email" className="flex-1 px-4 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold" />
            <button className="h-10 w-10 rounded-full bg-gold text-gold-foreground flex items-center justify-center hover:scale-105 transition-transform" aria-label="Subscribe"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Garden College. All rights reserved. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
