"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark border-b border-grayDark">
      <div className="flex items-center justify-between px-4 md:px-10 h-14 md:h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.PNG"
            alt="Sector 104 Logo"
            className="h-14 md:h-20 w-auto -my-3"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/events">Upcoming Events</Link>
          <Link href="/past-events">Past Events</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-grayDark">
          <div className="flex flex-col text-center py-4 space-y-4">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/events">Upcoming Events</Link>
            <Link onClick={() => setOpen(false)} href="/past-events">Past Events</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}