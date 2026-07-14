import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name} — built with React, R3F & Tailwind
        </p>
        <div className="flex gap-5 font-mono text-xs text-muted">
          <a href={profile.socials.github} className="hover:text-mint transition-colors">github</a>
          <a href={profile.socials.linkedin} className="hover:text-mint transition-colors">linkedin</a>
          <a href={profile.socials.fiverr} className="hover:text-mint transition-colors">fiverr</a>
          <a href={profile.socials.upwork} className="hover:text-mint transition-colors">upwork</a>
        </div>
      </div>
    </footer>
  );
}
