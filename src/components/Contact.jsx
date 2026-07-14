import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { profile } from "../data";

const socialLinks = [
  { Icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { Icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { Icon: SiFiverr, href: profile.socials.fiverr, label: "Fiverr" },
  { Icon: SiUpwork, href: profile.socials.upwork, label: "Upwork" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    // Functional default: opens the visitor's email client pre-filled.
    // Swap this for emailjs.sendForm(...) once you have an EmailJS
    // service/template/public key — see README.md.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    e.target.reset();
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <p className="prompt-label font-mono text-sm text-muted mb-4">kubectl port-forward contact 443</p>
      <h2 className="font-display text-3xl font-semibold mb-4">Let's ship something</h2>
      <p className="text-muted max-w-lg mb-10">
        Open to freelance infrastructure work and full-time DevOps roles. Reach out directly
        or use the form below.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            required
            name="name"
            placeholder="name"
            className="font-mono text-sm bg-surface/70 backdrop-blur-sm border border-line rounded-lg px-4 py-3 outline-none focus:border-mint transition-colors"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="email"
            className="font-mono text-sm bg-surface/70 backdrop-blur-sm border border-line rounded-lg px-4 py-3 outline-none focus:border-mint transition-colors"
          />
          <textarea
            required
            name="message"
            placeholder="message"
            rows={5}
            className="font-mono text-sm bg-surface/70 backdrop-blur-sm border border-line rounded-lg px-4 py-3 outline-none focus:border-mint transition-colors resize-none"
          />
          <button
            type="submit"
            className="font-mono text-sm px-5 py-3 bg-mint text-void rounded-lg font-medium hover:bg-mint/90 transition-colors w-fit shadow-[0_0_30px_-8px_rgba(0,229,160,0.6)]"
          >
            {status === "sent" ? "opening mail client ✓" : "send_message()"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="border border-line rounded-xl bg-surface/60 backdrop-blur-md p-6 font-mono text-sm h-fit"
        >
          <div className="text-muted">$ cat contact.json</div>
          <pre className="text-ink mt-3 whitespace-pre-wrap leading-relaxed">
{`{
  "email": "${profile.email}",
  "location": "${profile.location}",
  "status": "open_to_work"
}`}
          </pre>
          <div className="flex gap-3 mt-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-line bg-void/40 flex items-center justify-center text-muted hover:text-mint hover:border-mint/60 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
