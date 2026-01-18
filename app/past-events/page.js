"use client";
import { motion } from "framer-motion";

const images = [
  "/past-events/event1.jpg",
  "/past-events/event2.jpg",
  "/past-events/event3.jpg",
  "/past-events/event4.jpg",
];

export default function PastEvents() {
  return (
    <section className="px-6 md:px-16 py-12">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary text-center mb-10"
      >
        Past Events
      </motion.h2>

      {/* Poster */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-16"
      >
        <img
          src="/past-events/poster.PNG"
          alt="Sector 104 Past Event Poster"
          className="rounded-xl shadow-xl max-w-full md:max-w-3xl"
        />
      </motion.div>

      {/* Gallery Heading */}
      <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl font-semibold text-center mb-8
           after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-3"
      >
      EVENT HIGHLIGHTS
      </motion.h3>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Past event ${index + 1}`}
            whileHover={{ scale: 1.03 }}
            className="w-full rounded-xl break-inside-avoid cursor-pointer shadow-lg"
          />
        ))}
      </div>

    </section>
  );
}