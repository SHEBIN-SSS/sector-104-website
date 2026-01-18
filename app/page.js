"use client";
import { motion } from "framer-motion";
import BackgroundVideo from "../components/BackgroundVideo";
import PartyLights from "../components/PartyLights";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Background Video */}
      <BackgroundVideo />

      {/* Party lights */}
      <PartyLights />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Canada’s{" "}
          <span className="text-primary">Next-Gen</span>{" "}
          Party Experience
        </motion.h1>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg md:text-xl text-center"
        >
        Where unforgettable nights, massive crowds, and epic journeys
        of sound, lights, and energy come alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="/events"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="bg-primary text-dark px-6 py-3 font-semibold rounded"
          >
            Upcoming Events
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary px-6 py-3 rounded hover:bg-primary hover:text-dark"
          >
            Book Your City
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}