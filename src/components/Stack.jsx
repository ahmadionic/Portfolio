import { motion } from "framer-motion";
import { stack } from "../data";

export default function Stack() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-24">
      <p className="prompt-label font-mono text-sm text-muted mb-4">kubectl get skills -o wide</p>
      <h2 className="font-display text-3xl font-semibold mb-10">Tooling I run in production</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group border border-line rounded-xl bg-surface/60 backdrop-blur-md p-4 flex items-center justify-between hover:border-mint/50 hover:shadow-[0_0_24px_-8px_rgba(0,229,160,0.35)] transition-all"
          >
            <span className="font-medium text-ink">{item.name}</span>
            <span className="font-mono text-xs text-faint group-hover:text-mint transition-colors">
              {item.category}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
