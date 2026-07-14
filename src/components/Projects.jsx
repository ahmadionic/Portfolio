import { motion } from "framer-motion";
import { featuredProject, otherProjects } from "../data";

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <p className="prompt-label font-mono text-sm text-muted mb-4">kubectl get deployments</p>
      <h2 className="font-display text-3xl font-semibold mb-10">Deployed work</h2>

      {/* Featured: CafeFresco */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border border-line rounded-xl bg-surface/60 backdrop-blur-md overflow-hidden hover:border-mint/40 transition-colors"
      >
        <div className="p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            <span className="font-mono text-xs text-mint uppercase tracking-wide">
              {featuredProject.status}
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold">{featuredProject.name}</h3>
          <p className="font-mono text-sm text-blueprint mt-1">{featuredProject.subtitle}</p>
          <p className="text-muted leading-relaxed mt-4 max-w-3xl">
            {featuredProject.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
            {featuredProject.highlights.map((h) => (
              <div
                key={h.label}
                className="border border-line rounded-lg px-4 py-3 bg-void/40 backdrop-blur-sm"
              >
                <div className="font-mono text-xs text-amber">{h.label}</div>
                <div className="text-sm text-ink mt-1">{h.detail}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {featuredProject.links.repo && (
              <a
                href={featuredProject.links.repo}
                className="font-mono text-sm text-mint hover:underline"
              >
                view_source →
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Other projects */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {otherProjects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-line rounded-xl p-6 bg-surface/60 backdrop-blur-md hover:border-blueprint/50 hover:-translate-y-1 transition-all"
          >
            <h4 className="font-display text-lg font-semibold">{p.name}</h4>
            <p className="text-muted text-sm mt-2 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-blueprint border border-blueprint/30 rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
