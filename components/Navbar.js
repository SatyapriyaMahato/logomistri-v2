'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-6 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 border-b border-gray-900 text-white">

      {/* Brand */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer group">
        <div className="w-10 h-10 flex items-center justify-center font-bold text-xl transition-transform duration-300 group-hover:scale-110">
          <img src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="font-bold text-base tracking-[0.20em] transition-all duration-300 group-hover:tracking-[0.40em]">
            LOGOMISTRI
          </span>
          {/* <span className="font-bold text-[8px] text-gray-400 tracking-[0.20em] transition-all duration-300 group-hover:tracking-[0.35em]">
            Adorning Brand With Design
          </span> */}
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-200">
          Home
        </Link>
        <Link href="/portfolio" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-200">
          Portfolio
        </Link>
        <button className="bg-gold text-black px-6 py-2 font-bold text-sm tracking-wide hover:opacity-90 transition-all duration-200 hover:scale-[1.03]">
          LOGO DESIGN
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center py-8 gap-6 md:hidden transition-all duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-lg hover:opacity-70 transition-all">
            Home
          </Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-white text-lg hover:opacity-70 transition-all">
            Portfolio
          </Link>
          <button className="bg-gold text-black px-8 py-3 font-bold hover:scale-[1.03] transition-all">
            LOGO DESIGN
          </button>
        </div>
      )}
    </nav>
  );
}
