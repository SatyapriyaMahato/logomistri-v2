import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="animate-fade-in min-h-screen bg-black pb-20">
      <div className="py-20 text-center bg-black relative overflow-hidden">
        {/* Pattern overlay simulation */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #333 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white mb-2">
          PORTFOLIO
        </h1>
        <p className="relative z-10 text-gray-400 italic font-light">
          Professional Logo Design & Branding Projects
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <Link
            href={`/portfolio/${item.id}`}
            key={item.id}
            className="group cursor-pointer relative overflow-hidden aspect-square block"
          >
            <div className="w-full h-full relative">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                priority={item.id === projects[0].id} // first image loads eagerly
              />
            </div>

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-yellow-500 tracking-widest text-sm uppercase">
                {item.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
