'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTheme } from "@/context/ThemeContext";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();
  return (
    <nav
      className={`${darkMode
        ? "bg-black text-white border-gray-800"
        : "bg-white text-black border-gray-300"
        } py-6 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 border-b`}
    >

      {/* Brand */}
      <Link
        href="/"
        className="flex items-center gap-2 cursor-pointer group"
      >
        <div className="w-10 h-10 flex items-center justify-center font-bold text-xl transition-transform duration-300 group-hover:scale-110">
          <img src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
        </div>

        <div className="flex flex-col leading-tight">
          <span
            className={`font-bold text-base tracking-[0.20em] transition-all duration-300 group-hover:tracking-[0.40em]
          ${darkMode ? "text-white" : "text-black"}
        `}
          >
            LOGOMISTRI
          </span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">

        <Link
          href="/"
          className={`text-sm font-medium tracking-wide transition-all duration-200
        ${darkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-700 hover:text-black"}`
          }
        >
          Home
        </Link>

        <Link
          href="/portfolio"
          className={`text-sm font-medium tracking-wide transition-all duration-200
        ${darkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-700 hover:text-black"}`
          }
        >
          Portfolio
        </Link>

        {/* Theme-aware CTA Button */}
        <button
          className={`px-6 py-2 font-bold text-sm tracking-wide hover:opacity-90 transition-all duration-200 hover:scale-[1.03]
        ${darkMode
              ? "bg-gold text-black"
              : "bg-gold text-white"}`
          }
        >
          LOGO DESIGN
        </button>

      </div>

      {/* Mobile Menu Icon */}
      <button
        className={`${darkMode ? "text-white" : "text-black"} md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col items-center py-8 gap-6 md:hidden transition-all duration-300 border-b
        ${darkMode
              ? "bg-black border-gray-800"
              : "bg-white border-gray-300"}`
          }
        >

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`text-lg transition-all
          ${darkMode
                ? "text-white hover:text-gray-300"
                : "text-black hover:text-gray-700"}`
            }
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setIsOpen(false)}
            className={`text-lg transition-all
          ${darkMode
                ? "text-white hover:text-gray-300"
                : "text-black hover:text-gray-700"}`
            }
          >
            Portfolio
          </Link>

          <button
            className={`px-8 py-3 font-bold transition-all hover:scale-[1.03]
          ${darkMode
                ? "bg-gold text-black"
                : "bg-gold text-white"}`
            }
          >
            LOGO DESIGN
          </button>

        </div>
      )}
    </nav>

  );
}


// 'use client';

// import { useTheme } from "@/context/ThemeContext";

// export default function Navbar() {
//   const { darkMode } = useTheme();

//   return (
//     <nav className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} ...`}>
//       {/* your same navbar code */}
//     </nav>
//   );
// }
