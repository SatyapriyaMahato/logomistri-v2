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
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Jeanette Briones",
    role: "Dog Trainer, ByTheLeashK9",
    text: "It's been awesome working with you Logomistri. I am super in love with the logo options.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Elias Candelaria",
    role: "Owner, Balanced Paws",
    text: "It's been a great experience working with Logomistri. We had a few rounds of revisions.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Home() {
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
          I CRAFT LOGOS FOR SMALL BUSINESSES AND START-UPS
        </h1>

        <div className="flex justify-center gap-4 mb-20">
          <button className="bg-gold text-black px-8 py-3 font-bold text-sm tracking-wide">NEW PROJECT</button>
          <button className="border border-white text-white px-8 py-3 font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-colors">LEARN MORE</button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <span className="text-gray-500 text-sm tracking-widest uppercase mb-4 block">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">LOGOMISTRI</h2>
            <div className="w-12 h-1 bg-[#333] mb-8"></div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Designer working" 
                  className="w-full object-cover rounded-sm shadow-xl border border-gray-800"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-[#222] -z-0 hidden md:block"></div>
             
             <div className="mt-8 text-gray-400 text-sm leading-relaxed max-w-md ml-auto">
                <p>Logomistri is a creative studio specialized in logo design and brand identity. I provide modern and conceptual logo marks to businesses in a timeless manner.</p>
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
              <div key={idx} className="bg-black p-8 border border-gray-900 hover:border-gray-700 transition-colors flex flex-col items-center text-center group">
                <div className="mb-6 text-white group-hover:text-gold transition-colors">{step.icon}</div>
                <h3 className="text-white font-bold text-lg mb-4">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
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
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className="mb-6 text-white">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-4">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xs">{item.desc}</p>
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
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-gray-800">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{t.name}</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-6">{t.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
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
