import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  {
    label: "About",
    children: [
      { to: "/about", label: "About Us" },
      { to: "/vision-mission", label: "Vision & Mission" },
      { to: "/principal", label: "Principal's Message" },
    ],
  },
  { to: "/faculty", label: "Faculty" },
  { to: "/facilities", label: "Facilities" },
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/downloads", label: "Downloads" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl shadow-lg group-hover:scale-105 transition-transform">
  <img
    src={logo}
    alt="Garden College Logo"
    className="h-full w-full object-cover"
  />
</span>
          <span className="flex flex-col leading-tight">
            <span
  className={`font-display text-lg font-bold ${
    scrolled ? "text-foreground" : "text-white"
  }`}
>
  Garden College
</span>

<span
  className={`text-[10px] uppercase tracking-[0.2em] ${
    scrolled ? "text-muted-foreground" : "text-white/80"
  }`}
>
  Excellence in Learning
</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDrop(item.label)}
                onMouseLeave={() => setDrop(null)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
  scrolled
    ? "text-foreground hover:text-foreground"
    : "text-white hover:text-white"
}`}>
                  {item.label} <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {drop === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 top-full pt-2 w-56"
                    >
                      <div className="bg-card rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block px-3 py-2 rounded-lg text-sm hover:bg-accent hover:text-accent-foreground"
                            activeProps={{ className: "bg-accent text-accent-foreground" }}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 text-sm font-medium transition-colors relative ${
  scrolled
    ? "text-foreground hover:text-foreground"
    : "text-white hover:text-white"
}`}
                activeProps={{
  className:
    "after:absolute after:left-3 after:right-3 after:bottom-0 after:h-0.5 after:bg-gold after:rounded-full"
}}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link to="/contact" className="btn-primary ml-3 !py-2 !px-5 text-sm">Apply Now</Link>
        </nav>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-accent"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t overflow-hidden"
          >
            <nav className="container-x py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="py-1">
                    <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</div>
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} className="block px-5 py-2.5 rounded-lg text-sm hover:bg-accent">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent"
                    activeProps={{ className: "bg-accent text-accent-foreground" }}
                    activeOptions={{ exact: true }}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/contact" className="btn-primary mt-3 !py-2.5 text-sm">Apply Now</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
