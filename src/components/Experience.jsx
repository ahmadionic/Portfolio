import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <p className="prompt-label font-mono text-sm text-muted mb-4">git log --oneline --graph</p>
      <h2 className="font-display text-3xl font-semibold mb-10">Commit history</h2>

      <div className="relative pl-8 border-l border-line">
        {experience.map((item, i) => (
          <motion.div
            key={item.title + item.org}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[41px] top-1 w-3.5 h-3.5 rounded-full bg-mint border-4 border-void" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-semibold text-lg">{item.title}</h3>
              <span className="font-mono text-xs text-faint">{item.date}</span>
            </div>
            <p className="font-mono text-sm text-blueprint mt-0.5">{item.org}</p>
            <p className="text-muted text-sm mt-2 max-w-xl leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
