'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-6 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 border-b border-gray-900 text-white">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-xl">L</div>
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-widest">LOGOMISTRI</span>
          <span className="text-[10px] text-gray-400 tracking-wider">Adorning Brand With Design</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide">Home</Link>
        <Link href="/portfolio" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide">Portfolio</Link>
        <button className="bg-gold text-black px-6 py-2 font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
          LOGO DESIGN
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center py-8 gap-6 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-lg">Home</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-white text-lg">Portfolio</Link>
          <button className="bg-gold text-black px-8 py-3 font-bold">LOGO DESIGN</button>
        </div>
      )}
    </nav>
  );
}
