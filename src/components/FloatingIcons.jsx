import { motion } from "framer-motion";
import {
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGithubactions,
  SiNginx,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const icons = [
  { Icon: SiDocker, color: "#4c8dff", angle: 0 },
  { Icon: SiKubernetes, color: "#00e5a0", angle: 32.7 },
  { Icon: FaAws, color: "#ffb454", angle: 65.4 },
  { Icon: SiGithub, color: "#e6eaf0", angle: 98.1 },
  { Icon: SiReact, color: "#4c8dff", angle: 130.9 },
  { Icon: SiNodedotjs, color: "#00e5a0", angle: 163.6 },
  { Icon: SiMongodb, color: "#00e5a0", angle: 196.3 },
  { Icon: SiGithubactions, color: "#4c8dff", angle: 229 },
  { Icon: SiNginx, color: "#ffb454", angle: 261.7 },
  { Icon: SiPrometheus, color: "#ff6b6b", angle: 294.4 },
  { Icon: SiGrafana, color: "#ffb454", angle: 327.1 },
];

// Positions each icon on a fixed point around a circle, then layers a slow
// independent float so the ring feels alive without actually spinning
// (spinning icons around a face-forward avatar reads as chaotic, not premium).
export default function FloatingIcons() {
  const radius = 150; // px, tuned for the 256px ProfileCard

  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      {icons.map(({ Icon, color, angle }, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-xl border border-line-bright bg-surface/70 backdrop-blur-md flex items-center justify-center shadow-lg"
            style={{ x, y }}
            animate={{ y: [y - 8, y + 8, y - 8] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          >
            <Icon size={18} color={color} />
          </motion.div>
        );
      })}
    </div>
  );
}
