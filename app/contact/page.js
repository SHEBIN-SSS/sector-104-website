"use client";

export default function Contact() {
  return (
    <section className="px-4 pt-20 pb-10">
      <h2 className="text-3xl text-center font-bold text-yellow-400 mb-6">
        Contact Us
      </h2>

      <form className="space-y-4">
        <input className="w-full p-4 rounded bg-gray-800" placeholder="Name" />
        <input className="w-full p-4 rounded bg-gray-800" placeholder="Email" />
        <textarea className="w-full p-4 rounded bg-gray-800" placeholder="Message" />

        <button className="w-full bg-yellow-400 text-black py-4 rounded-full font-semibold text-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}
