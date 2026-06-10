import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Garden College" },
      { name: "description", content: "Moments from learning, teaching and play at Garden College." },
      { property: "og:title", content: "Gallery" },
      { property: "og:description", content: "Photos of our students, teachers and campus life." },
    ],
  }),
  component: Gallery,
});

const categories = ["All", "Reading", "Teaching", "Playing"] as const;

const images = [
  { cat: "Reading", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop" },
  { cat: "Reading", src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop" },
  { cat: "Reading", src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop" },
  { cat: "Reading", src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop" },
  { cat: "Reading", src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop" },
  { cat: "Teaching", src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop" },
  { cat: "Teaching", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop" },
  { cat: "Teaching", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop" },
  { cat: "Teaching", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" },
  { cat: "Teaching", src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop" },
  { cat: "Playing", src: "https://images.unsplash.com/photo-1602185793674-3c0a02e0fef5?w=800&h=600&fit=crop" },
  { cat: "Playing", src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&h=600&fit=crop" },
  { cat: "Playing", src: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=800&h=600&fit=crop" },
  { cat: "Playing", src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop" },
  { cat: "Playing", src: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&h=600&fit=crop" },
];

function Gallery() {
  const [cat, setCat] = useState<typeof categories[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = cat === "All" ? images : images.filter(i => i.cat === cat);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Life at Garden, in pictures." />

      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-accent/70"}`}>{c}</button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                onClick={() => setLightbox(img.src)}
                className={`relative overflow-hidden rounded-xl group ${i % 7 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <img src={img.src} alt={img.cat} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white p-2" aria-label="Close"><X className="h-6 w-6" /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
