"use client";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="px-6 md:px-16 py-12">

      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary text-center mb-12"
      >
        Upcoming Events
      </motion.h2>

      {/* Event Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-grayDark rounded-2xl p-6 md:p-10 shadow-xl"
      >

        {/* Event Name */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
          RAAGAM
        </h3>

        <p className="text-center text-gray-300 text-lg mb-8">
          A Valentine Special Musical Night
        </p>

        {/* Posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            "/upcoming-events/raagam/poster1.PNG",
            "/upcoming-events/raagam/poster2.PNG",
            "/upcoming-events/raagam/poster3.PNG",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`RAAGAM Poster ${index + 1}`}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl shadow-lg cursor-pointer object-cover"
            />
          ))}
        </div>

        {/* Get Tickets Button */}
        <div className="flex justify-center">
          <motion.a
            href="https://events.kilikood.ca/event/raagam/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAPZzqFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafVPsnr0DacO8muIHNgSoL_-PxWkbIojygp1PIuN2yDgLz1oHyiI86T-8tRFg_aem_i6kSpXzJllUK2fGtOkKpeQ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-dark px-10 py-4 rounded-full font-semibold text-lg"
          >
            Get Tickets
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}