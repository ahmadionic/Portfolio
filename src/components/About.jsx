import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="prompt-label font-mono text-sm text-muted mb-4"
      >
        cat about.md
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-10"
      >
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl font-semibold mb-4">
            I build the infrastructure that lets applications ship without fear.
          </h2>
          <p className="text-muted leading-relaxed">
            I'm a DevOps engineer based in Lahore, Pakistan, finishing my B.S. in
            Information Technology at the University of Okara. My focus is turning
            fragile, manual deployments into repeatable, observable systems —
            containerizing applications with <span className="text-ink">Docker</span>,
            orchestrating them on <span className="text-ink">Kubernetes</span>, and
            defining infrastructure as code with <span className="text-ink">Terraform</span>{" "}
            so environments are reproducible instead of hand-built.
          </p>
          <p className="text-muted leading-relaxed mt-4">
            On the delivery side, I wire up <span className="text-ink">CI/CD</span> pipelines
            with <span className="text-ink">GitHub Actions</span>, manage traffic with{" "}
            <span className="text-ink">Nginx</span>, and run workloads on{" "}
            <span className="text-ink">AWS</span> and <span className="text-ink">Linux</span>{" "}
            hosts. Once something is live, I keep it observable —{" "}
            <span className="text-ink">monitoring</span> with Prometheus and Grafana so
            issues surface before users notice them.
          </p>
          <p className="text-muted leading-relaxed mt-4">
            Alongside project work, I train developers on modern software workflows and
            take on freelance <span className="text-ink">infrastructure automation</span> work
            through Fiverr and Upwork.
          </p>
        </div>
        <div className="border border-line rounded-xl bg-surface/60 backdrop-blur-md p-6 font-mono text-sm h-fit">
          <div className="text-muted mb-3">$ cat location.txt</div>
          <div className="text-ink mb-4">Lahore, Pakistan</div>
          <div className="text-muted mb-3">$ cat education.txt</div>
          <div className="text-ink">B.S. Information Technology</div>
          <div className="text-faint">University of Okara</div>
        </div>
      </motion.div>
    </section>
  );
}
