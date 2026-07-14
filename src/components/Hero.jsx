import { Suspense } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiFiverr, SiUpwork } from "react-icons/si";
import ClusterScene from "./ClusterScene";
import ProfileCard from "./ProfileCard";
import FloatingIcons from "./FloatingIcons";
import TypedTerminal from "./TypedTerminal";
import { profile, stats } from "../data";

const socialIcons = [
  { Icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { Icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { Icon: SiFiverr, href: profile.socials.fiverr, label: "Fiverr" },
  { Icon: SiUpwork, href: profile.socials.upwork, label: "Upwork" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ClusterScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-amber border border-amber/40 bg-amber/5 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            open to work
          </span>

          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-6 leading-[1.05] tracking-tight">
            {profile.name}
          </h1>
          <p className="font-mono text-mint text-lg md:text-xl mt-3">{profile.role}</p>
          <p className="text-muted mt-5 max-w-md leading-relaxed">{profile.tagline}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#work"
              className="font-mono text-sm px-5 py-3 bg-mint text-void rounded-lg font-medium hover:bg-mint/90 transition-colors shadow-[0_0_30px_-8px_rgba(0,229,160,0.6)]"
            >
              view_projects →
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="font-mono text-sm px-5 py-3 border border-line-bright text-ink rounded-lg hover:border-mint hover:text-mint transition-colors"
            >
              download_resume.pdf
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-10 max-w-md">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-line bg-surface/60 backdrop-blur-sm px-3 py-3 text-center"
              >
                <div className="font-display text-xl font-semibold text-mint">{s.value}</div>
                <div className="font-mono text-[10px] text-muted mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3 mt-8">
            {socialIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-line bg-surface/60 backdrop-blur-sm flex items-center justify-center text-muted hover:text-mint hover:border-mint/60 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="relative">
            <ProfileCard />
            <FloatingIcons />
          </div>
          <TypedTerminal />
        </motion.div>
      </div>
    </section>
  );
}
