"use client";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="px-4 pt-20 pb-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
        Upcoming Event
      </h2>

      <div className="bg-gray-900 rounded-2xl p-4">
        <h3 className="text-2xl font-bold text-center">
          RAAGAM
        </h3>
        <p className="text-center text-gray-400 mb-6">
          A Valentine Special Musical Night
        </p>

        <div className="flex gap-4 overflow-x-scroll pb-4">
          {["poster1", "poster2", "poster3"].map((p, i) => (
            <img
              key={i}
              src={`/upcoming-events/raagam/${p}.PNG`}
              className="w-64 rounded-xl"
            />
          ))}
        </div>

        <a
          href="https://YOUR-TICKET-LINK"
          target="_blank"
          className="block mt-6 bg-yellow-400 text-black text-center py-4 rounded-full font-semibold"
        >
          Get Tickets
        </a>
      </div>
    </section>
  );
}