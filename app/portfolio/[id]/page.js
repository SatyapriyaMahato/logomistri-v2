"use client";

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";

// Styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";


export default function ProjectPage({ params }) {
   const project = projects.find(p => p.id === params.id);

   const [open, setOpen] = useState(false);
   const [index, setIndex] = useState(0);

   if (!project) return notFound();

   // Scroll animation + parallax (Apple-style)
   useEffect(() => {
      const items = document.querySelectorAll(".showcase-image");

      const observer = new IntersectionObserver(
         entries => {
            entries.forEach(entry => {
               if (entry.isIntersecting) entry.target.classList.add("visible");
            });
         },
         { threshold: 0.15 }
      );

      items.forEach(el => observer.observe(el));

      const handleScroll = () => {
         items.forEach(img => {
            const rect = img.getBoundingClientRect();
            img.style.transform = `translateY(${rect.top * 0.05}px) scale(1.02)`;
         });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         observer.disconnect();
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div className="animate-fade-in bg-white min-h-screen text-black">

         {/* Header Image */}
         <div className="w-full h-[60vh] bg-gray-900 relative">
            <img
               src={project.heroImage || project.thumbnail}
               alt={project.title}
               className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 uppercase">{project.title} Branding</h1>
               <p className="text-gray-300 text-sm tracking-wide">Logo Design and Brand Identity</p>
            </div>
         </div>

         {/* Main Content */}
         <div className="max-w-4xl mx-auto py-20 px-6 text-center">

            {/* Showcase Scroll Section */}


            {project.gallery && (
               <div className="max-w-5xl mx-auto py-20 space-y-32">
                  {project.gallery.map((img, i) => (
                     <div key={i} className="flex justify-center">
                        <Image
                           src={img}
                           alt={`${project.title} showcase ${i + 1}`}
                           width={1600}
                           height={1200}
                           priority={i === 0} // first image loads instantly
                           className="showcase-image w-full max-w-3xl rounded-xl shadow-xl object-cover opacity-0 translate-y-10 transition-all duration-[1200ms] ease-out cursor-pointer"
                           onClick={() => {
                              setIndex(i);
                              setOpen(true);
                           }}
                        />
                     </div>
                  ))}
               </div>
            )}


            {/* Lightbox */}
            <Lightbox
               open={open}
               close={() => setOpen(false)}
               slides={project.gallery.map(src => ({ src }))}
               index={index}
               plugins={[Zoom]}
            />

         </div>
      </div>
   );
}
