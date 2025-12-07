'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FileText, PenTool, RefreshCw, Package, User, DollarSign,
  Handshake, Heart, Sun, Moon, ArrowRight, CheckCircle, Mail
} from 'lucide-react';

// --- Utility Components & Hooks ---

// Hook for scroll reveal animation (Apple-style fade up)
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  return [domRef, isVisible];
};

const ScrollReveal = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Data Constants ---
const PROCESS_STEPS = [
  {
    icon: <FileText size={32} />,
    title: "Briefing",
    desc: "Logomistri will send you a design brief that you can fill out for details about your business..."
  },
  {
    icon: <PenTool size={32} />,
    title: "Initial Designs",
    desc: "After the design brief and discussing the details of the project, Logomistri will generate initial designs..."
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Revisions",
    desc: "Once you received the initial designs then we can discuss the designs and share some feedbacks..."
  },
  {
    icon: <Package size={32} />,
    title: "Deliverables",
    desc: "In this process Logomistri will generate all the required files that you will be needing..."
  }
];

const BENEFITS = [
  { icon: <User size={40} />, title: "Professionalism", desc: "No lack of professionalism. Everything is delivered with utmost care." },
  { icon: <DollarSign size={40} />, title: "Affordability", desc: "Agency level work in just a fraction of the cost." },
  { icon: <Handshake size={40} />, title: "Trust", desc: "Logomistri has able to maintain a great reputation and trust." },
  { icon: <Heart size={40} />, title: "Care", desc: "Logomistri take the time to approach your logo as if it were its own." }
];

const TESTIMONIALS = [
  {
    name: "Delmond Landry",
    role: "Founder, Different View",
    text: "Thank you so much, it's been a pleasure working with you. 10/10 thank you.",
    img: "/images/testimonials/delmond-landry.png"
  },
  {
    name: "Jeanette Briones",
    role: "Dog Trainer, ByTheLeashK9",
    text: "It's been awesome working with you Logomistri. I am super in love with the logo options.",
    img: "/images/testimonials/jeanette-briones.png"
  },
  {
    name: "Elias Candelaria",
    role: "Owner, Balanced Paws",
    text: "It's been a great experience working with Logomistri. We had a few rounds of revisions.",
    img: "/images/testimonials/elias-candelaria.png"
  }
];

// --- Sub-Components ---

const HeroBackground = ({ darkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Grid Layer */}
      <div className={`absolute inset-0 opacity-[0.07] ${darkMode ? 'bg-grid-white' : 'bg-grid-black'}`}
        style={{ backgroundSize: '40px 40px', backgroundImage: `linear-gradient(to right, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(to bottom, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)` }}>
      </div>

      {/* Animated Vector Elements */}
      <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Floating Geometric Shapes */}
        <circle cx="10" cy="20" r="15" fill="none" stroke={darkMode ? "white" : "black"} strokeWidth="0.1" className="opacity-10 animate-float-slow" />
        <rect x="80" y="60" width="20" height="20" fill="none" stroke={darkMode ? "gold" : "#d97706"} strokeWidth="0.1" className="opacity-10 animate-float-medium" />
        <path d="M50,10 L90,90 L10,90 Z" fill="none" stroke={darkMode ? "white" : "black"} strokeWidth="0.1" className="opacity-5 animate-float-fast" />

        {/* Bezier Curves (The "Logo Design" Pen Tool Lines) */}
        <path d="M0,50 C30,20 70,80 100,50" fill="none" stroke={darkMode ? "#FFD700" : "#b45309"} strokeWidth="0.2" strokeDasharray="1 1" className="opacity-30 animate-draw-path" />
        <path d="M0,30 C40,90 60,10 100,70" fill="none" stroke={darkMode ? "white" : "black"} strokeWidth="0.1" className="opacity-10 animate-pulse-slow" />

        {/* Bezier Handles */}
        <circle cx="30" cy="20" r="0.5" fill={darkMode ? "#FFD700" : "#b45309"} className="animate-ping-slow" />
        <line x1="30" y1="20" x2="40" y2="10" stroke={darkMode ? "white" : "black"} strokeWidth="0.05" opacity="0.2" />
      </svg>

      {/* Gradient Overlay for Text Readability */}
      <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-transparent via-black/50 to-black' : 'from-transparent via-white/50 to-white'}`}></div>
    </div>
  );
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  // Dynamic Styles
  const bgMain = darkMode ? 'bg-black' : 'bg-gray-50';
  const textMain = darkMode ? 'text-white' : 'text-gray-900';
  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600';
  const cardBg = darkMode ? 'bg-black border-gray-900' : 'bg-white border-gray-200 shadow-sm';
  const cardHover = darkMode ? 'hover:bg-[#0d0d0d] hover:border-gray-700' : 'hover:bg-gray-50 hover:border-yellow-400';
  const accentColor = darkMode ? 'text-yellow-500' : 'text-yellow-600';
  const buttonPrimary = 'bg-[#C5A059] text-black hover:bg-[#b38f4d]'; // Gold color

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out font-sans ${bgMain} ${textMain}`}>

      {/* Theme Toggle Floating Button */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100 ring-1 ring-gray-200'}`}
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 text-center overflow-hidden">
        <HeroBackground darkMode={darkMode} />

        {/* Parallax Content Container */}
        <div
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Parallax effect
        >
          {/* Decorative Logo Elements */}
          <div className={`mb-8 flex gap-4 opacity-50 font-bold tracking-widest text-xs md:text-sm uppercase ${textMuted}`}>
            <span>Concept</span> • <span>Design</span> • <span>Identity</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            WE CRAFT LOGOS FOR <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-white via-gray-200 to-gray-500' : 'from-black via-gray-700 to-gray-500'}`}>
              SMALL BUSINESSES
            </span>
          </h1>

          <p className={`mb-12 max-w-2xl mx-auto text-lg md:text-xl font-light ${textMuted}`}>
            Logomistri creates timeless visual identities that elevate brands with simplicity, clarity, and meaning.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => scrollTo("contact")}
              className={`${buttonPrimary} px-10 py-4 font-bold text-sm tracking-widest hover:scale-105 transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)]`}
            >
              START PROJECT
            </button>

            <button
              onClick={() => scrollTo("about")}
              className={`px-10 py-4 font-bold text-sm tracking-widest border transition-all duration-300 rounded-sm hover:scale-105 ${darkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce ${textMuted}`}>
          <ArrowRight className="transform rotate-90" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden`}>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className={`${accentColor} text-sm tracking-[0.2em] uppercase mb-4 block font-bold`}>About Us</span>
              <h2 className={`text-4xl md:text-6xl font-bold mb-8 leading-none ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                LOGOMISTRI
              </h2>
              <div className={`w-20 h-1 mb-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
              <p className={`text-lg leading-relaxed font-light mb-6 ${textMuted}`}>Logomistri is made by a combination of two words LOGO & MISTRI (master craftsman). We provide craftsmanship that your brand logo needs to standout in the marked.
                We don't just design logos; we architect brand legacies. Logomistri is a creative studio specialized in distilling complex business values into simple, iconic marks.
              </p>
              <div className={`flex items-center gap-2 ${textMuted}`}>
                <CheckCircle size={16} className={accentColor} /> <span>100+ Happy Clients</span>
              </div>
            </div>

            <div className="md:w-1/2 relative group">
              <div className="relative z-10 overflow-hidden rounded-sm">
                <img
                  src="/images/about.jpg"
                  alt="Designer working"
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div className={`absolute -bottom-6 -left-6 w-full h-full border z-0 hidden md:block transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 ${darkMode ? 'border-gray-800' : 'border-gray-300'}`}></div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Process Section */}
      <section className={`py-32 px-4 ${darkMode ? 'bg-[#050505]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">THE PROCESS</h2>
              <p className={`text-sm tracking-wider uppercase ${textMuted}`}>How we bring your vision to life</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`
                  p-10 border rounded-lg h-full flex flex-col items-center text-center group cursor-pointer
                  transition-all duration-500 hover:-translate-y-2
                  ${cardBg} ${cardHover} hover:shadow-2xl
                `}>
                  <div className={`mb-8 text-4xl transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-[#C5A059]' : 'text-gray-800 group-hover:text-[#C5A059]'}`}>
                    {step.icon}
                  </div>

                  <h3 className={`font-bold text-xl mb-4 tracking-wide transition-colors duration-300 ${darkMode ? 'group-hover:text-[#C5A059]' : 'group-hover:text-[#C5A059]'}`}>
                    {step.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${textMuted}`}>
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-32 px-4 ${bgMain}`}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">WHY CHOOSE US</h2>
              <p className={`text-sm tracking-wider uppercase ${textMuted}`}>The Logomistri Advantage</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`
                  flex flex-col items-center text-center p-8 border rounded-lg h-full
                  transition-all duration-300 group cursor-default
                  ${cardBg} ${cardHover} hover:shadow-xl
                `}>
                  <div className={`mb-6 p-4 rounded-full transition-colors duration-500 ${darkMode ? 'bg-gray-900 group-hover:bg-[#C5A059]/20' : 'bg-gray-100 group-hover:bg-[#C5A059]/20'}`}>
                    <div className={`transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-[#C5A059]' : 'text-gray-900 group-hover:text-[#C5A059]'}`}>
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${textMuted}`}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`py-32 px-4 border-t ${darkMode ? "bg-black border-gray-900" : "bg-gray-50 border-gray-200"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold">
                What clients say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div
                  className={`
              flex flex-col items-center text-center p-8 border rounded-lg group cursor-pointer 
              transition-all duration-300 relative

              ${darkMode
                      ? "border-gray-900"
                      : "border-gray-300 bg-white"
                    }

              /* KEEPING ORIGINAL HOVER ANIMATIONS */
              hover:scale-[1.03]
              hover:border-gray-600
              ${darkMode ? "hover:bg-[#0d0d0d]" : "hover:bg-gray-100"}
              hover:shadow-lg hover:shadow-black/30
            `}
                >
                  {/* Image */}
                  <div
                    className={`
                w-20 h-20 rounded-full overflow-hidden mb-6 border-2 
                transition-colors duration-300
                ${darkMode ? "border-gray-800" : "border-gray-300"}
                group-hover:border-yellow-500
              `}
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3
                    className={`
                font-semibold text-lg mb-1 transition-colors duration-300
                ${darkMode ? "text-white" : "text-gray-900"}
                group-hover:text-yellow-400
              `}
                  >
                    {t.name}
                  </h3>

                  {/* Role */}
                  <p
                    className={`
                text-xs uppercase tracking-wider mb-6 transition-colors duration-300
                ${darkMode ? "text-gray-500" : "text-gray-600"}
                group-hover:${darkMode ? "text-gray-200" : "text-gray-900"}
              `}
                  >
                    {t.role}
                  </p>

                  {/* Text */}
                  <p
                    className={`
                text-sm leading-relaxed italic transition-colors duration-300
                ${darkMode ? "text-gray-400" : "text-gray-700"}
                group-hover:${darkMode ? "text-gray-200" : "text-gray-900"}
              `}
                  >
                    "{t.text}"
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-4 ${darkMode ? 'bg-[#080808]' : 'bg-white'}`}>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">GET IN TOUCH</h2>
            <div className={`w-12 h-1 mx-auto ${accentColor} bg-current`}></div>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0 shadow-2xl rounded-lg overflow-hidden">
            <div className="md:w-1/2 relative h-[400px] md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Contact"
                className="w-full h-full object-cover filter brightness-[0.6]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 bg-black/30">
                <Mail size={48} className="mb-4 text-[#C5A059]" />
                <h3 className="text-2xl font-bold">Let's Create Together</h3>
                <p className="mt-2 text-gray-200">Start your brand journey today.</p>
              </div>
            </div>

            <div className={`md:w-1/2 p-12 flex flex-col gap-6 ${darkMode ? 'bg-[#111]' : 'bg-gray-100'}`}>
              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest font-bold ${textMuted}`}>Name</label>
                <input type="text" className={`w-full p-4 outline-none border-b-2 transition-all focus:border-[#C5A059] ${darkMode ? 'bg-transparent border-gray-700 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-black'}`} placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest font-bold ${textMuted}`}>Email</label>
                <input type="email" className={`w-full p-4 outline-none border-b-2 transition-all focus:border-[#C5A059] ${darkMode ? 'bg-transparent border-gray-700 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-black'}`} placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest font-bold ${textMuted}`}>Message</label>
                <textarea rows={4} className={`w-full p-4 outline-none border-b-2 transition-all focus:border-[#C5A059] resize-none ${darkMode ? 'bg-transparent border-gray-700 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-black'}`} placeholder="Tell me about your project..."></textarea>
              </div>

              <button className={`${buttonPrimary} mt-4 py-4 px-8 font-bold tracking-widest uppercase transition-transform active:scale-95`}>
                Send Request
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>


    </div>
  );
}