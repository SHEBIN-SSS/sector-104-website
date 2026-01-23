"use client";
import { motion } from "framer-motion";

export default function PartyLights() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          initial={{
            x: Math.random() * 360,
            y: Math.random() * 700,
            opacity: 0.3,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
