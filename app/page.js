'use client';
import Link from 'next/link';

import { FileText, PenTool, RefreshCw, Package, User, DollarSign, Handshake, Heart } from 'lucide-react';

// Data constants
const PROCESS_STEPS = [
  {
    icon: <FileText size={32} />,
    title: "Briefing",
    desc: "I will send you a design brief that you can fill out for details about your business..."
  },
  {
    icon: <PenTool size={32} />,
    title: "Initial Designs",
    desc: "After the design brief and discussing the details of the project, I will generate initial designs..."
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Revisions",
    desc: "Once you received the initial designs then we can discuss the designs and share some feedbacks..."
  },
  {
    icon: <Package size={32} />,
    title: "Deliverables",
    desc: "In this process I will generate all the required files that you will be needing..."
  }
];

const BENEFITS = [
  { icon: <User size={40} />, title: "Professionalism", desc: "No lack of professionalism." },
  { icon: <DollarSign size={40} />, title: "Affordability", desc: "Agency level work in just a fraction of the cost." },
  { icon: <Handshake size={40} />, title: "Trust", desc: "Logomistri has able to maintain a great reputation and trust." },
  { icon: <Heart size={40} />, title: "Care", desc: "I take the time to approach your logo as if it were my own." }
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

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="animate-fade-in text-white">
      {/* Hero Section */}
      <section className="bg-black py-20 px-4 text-center">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale mb-16 max-w-6xl mx-auto">
          <span className="text-xl font-bold">DCM</span>
          <span className="text-xl font-bold">NORTH</span>
          <span className="text-xl font-bold">JUSTBAR</span>
          <span className="text-xl font-bold">DV</span>
          <span className="text-xl font-bold">MACROCHI</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 max-w-4xl mx-auto leading-tight">
          WE CRAFT LOGOS FOR SMALL BUSINESSES AND START-UPS
        </h1>

        <div className="flex justify-center gap-4 mb-20">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gold text-black px-8 py-3 font-bold text-sm tracking-wide hover:opacity-90 transition-all"
          >
            NEW PROJECT
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="border border-white text-white px-8 py-3 font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-all"
          >
            LEARN MORE
          </button>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <span className="text-gray-500 text-sm tracking-widest uppercase mb-4 block">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">LOGOMISTRI</h2>
            <div className="w-12 h-1 bg-[#333] mb-8"></div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="/images/hero.jpg"
                alt="Designer working"
                className="w-full object-cover rounded-sm shadow-xl border border-gray-800"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-full h-full border border-[#1a1a1a] z-0 hidden md:block"></div>

            <div className="mt-10 text-[#b5b5b5] text-[18px] leading-[1.9] tracking-[0.03em] font-light max-w-lg ml-auto">
              <p className="transition-all duration-300 hover:text-white">
                Logomistri is a creative studio specialized in logo design and brand identity.
                We create timeless and strategic visual identities that elevate brands with simplicity,
                clarity and meaning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#050505] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">THE LOGO DESIGN PROCESS</h2>
            <p className="text-gray-500 text-sm">The professional logo design process is described below in detail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-black p-8 border border-gray-900 rounded-lg 
          flex flex-col items-center text-center group cursor-pointer
          transition-all duration-300
          hover:scale-[1.03] hover:border-gray-600 hover:bg-[#0d0d0d] hover:shadow-lg hover:shadow-black/30"
              >
                <div className="mb-6 text-white text-4xl transition-colors duration-300 group-hover:text-yellow-500">
                  {step.icon}
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 tracking-wide transition-colors duration-300 group-hover:text-yellow-400">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* What You Get Section */}
      <section className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHAT YOU GET</h2>
            <p className="text-gray-500 text-sm">If you work with Logomistri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 border border-gray-900 
          bg-black transition-all duration-300 rounded-lg group cursor-pointer
          hover:border-gray-600 hover:scale-[1.03] hover:bg-[#0d0d0d] hover:shadow-lg hover:shadow-black/30"
              >
                <div className="mb-6 text-white text-4xl group-hover:text-yellow-500 transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-black py-24 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What clients say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 border border-gray-900 rounded-lg 
          group cursor-pointer transition-all duration-300
          hover:scale-[1.03] hover:border-gray-600 hover:bg-[#0d0d0d] hover:shadow-lg hover:shadow-black/30"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-gray-800 group-hover:border-yellow-500 transition-colors duration-300">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300 group-hover:text-yellow-400">
                  {t.name}
                </h3>

                <p className="text-gray-500 text-xs uppercase tracking-wider mb-6 transition-colors duration-300 group-hover:text-gray-300">
                  {t.role}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed italic transition-colors duration-300 group-hover:text-gray-200">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover rounded-sm filter brightness-75"
            />
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <input type="text" placeholder="Your Name" className="bg-white p-4 w-full text-black outline-none focus:ring-2 focus:ring-yellow-600" />
            <input type="email" placeholder="Email Address" className="bg-white p-4 w-full text-black outline-none focus:ring-2 focus:ring-yellow-600" />
            <textarea placeholder="Message" rows={6} className="bg-white p-4 w-full text-black outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
            <button className="bg-gold text-black font-bold py-4 px-8 self-start w-auto tracking-wide hover:opacity-90">SEND MESSAGE</button>
          </div>
        </div>
      </section>
    </div>
  );
}
