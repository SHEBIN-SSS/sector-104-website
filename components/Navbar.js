import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 h-16 md:h-18 bg-dark border-b border-grayDark">
      
      {/* Logo (bigger, but navbar stays short) */}
      <Link href="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Sector 104 Logo"
          className="h-20 md:h-24 w-auto -my-4 cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Menu */}
      <div className="space-x-6 text-sm md:text-base">
        <Link href="/">Home</Link>
        <Link href="/events">Upcoming Events</Link>
        <Link href="/past-events">Past Events</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  );
}