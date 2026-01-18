"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PartyLights() {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    const generatedLights = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setLights(generatedLights);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lights.map((light, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary opacity-70"
          initial={{ x: light.x, y: light.y }}
          animate={{
            y: [light.y, light.y - 200, light.y],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}