"use client";
import { motion } from "framer-motion";
import BackgroundVideo from "../components/BackgroundVideo";
import PartyLights from "../components/PartyLights";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">

      <BackgroundVideo />
      <PartyLights />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Sector <span className="text-yellow-400">104</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-200 text-lg mb-8"
        >
          Unforgettable nights.  
          Massive crowds.  
          Epic musical journeys.
        </motion.p>

        <motion.a
          href="/events"
          whileTap={{ scale: 0.95 }}
          className="block bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg"
        >
          Explore Events
        </motion.a>
      </div>
    </section>
  );
}