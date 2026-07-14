import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto"
    >
      {/* animated glow ring */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-mint/40 via-blueprint/30 to-transparent blur-2xl animate-pulse" />

      {/* glass card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative w-full h-full rounded-full border-2 border-mint/50 bg-surface/60 backdrop-blur-md shadow-[0_0_60px_-10px_rgba(0,229,160,0.45)] overflow-hidden"
      >
        {!imgError ? (
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-2 to-void">
            <span className="font-display text-5xl font-semibold text-mint">
              {profile.initials}
            </span>
          </div>
        )}
        {/* subtle inner ring */}
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-mint/30" />
      </motion.div>

      {/* status dot */}
      <span className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-mint border-4 border-void animate-pulse" />
    </motion.div>
  );
}
