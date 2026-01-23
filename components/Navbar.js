"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="flex items-center justify-between px-4 h-14">

        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Sector 104"
            className="h-16 -my-2"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col items-center gap-6 py-8 bg-black text-lg">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/events">Events</Link>
          <Link onClick={() => setOpen(false)} href="/past-events">Highlights</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}