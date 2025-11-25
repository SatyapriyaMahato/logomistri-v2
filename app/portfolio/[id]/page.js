import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) return notFound();

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
            <p className="text-gray-300 text-sm tracking-wide">Logo Design And Branding</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
         <div className="mb-12">
            <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Client: <span className="text-black font-bold">{project.client}</span></p>
         </div>

         {/* Project Logo Display (Simulation) */}
         <div className="mb-20">
            <div className="w-64 h-64 mx-auto border-4 border-black rounded-full flex items-center justify-center mb-8 p-4">
                <div className="flex flex-col items-center">
                    <span className="font-bold tracking-widest text-sm uppercase">{project.title}</span>
                </div>
            </div>
         </div>

         <div className="text-left max-w-2xl mx-auto mb-20">
            <h2 className="text-2xl font-bold mb-4 uppercase">{project.title}</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
               {project.description}
            </p>
            {project.fullDescription && (
                <p className="text-gray-600 leading-relaxed text-sm">
                   {project.fullDescription}
                </p>
            )}
         </div>

         {/* Brand Personality (Only shows if keywords exist) */}
         {project.keywords && (
             <div className="mb-24">
                <h3 className="text-xl font-bold mb-12 uppercase">Brand Personality</h3>
                <div className="flex flex-wrap justify-center gap-8">
                   {project.keywords.map((item, i) => (
                      <div key={i} className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold tracking-widest">
                         {item}
                      </div>
                   ))}
                </div>
             </div>
         )}
         
         {/* Mockups Section (Dark Background) */}
         <div className="bg-[#1a1a1a] py-20 px-4 -mx-6 md:-mx-20 rounded-sm">
            <div className="max-w-5xl mx-auto space-y-12">
               <div className="text-white mb-8">Mockups & Application</div>
               <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80" alt="Mockup" className="w-full h-auto rounded shadow-xl" />
            </div>
         </div>
      </div>
    </div>
  );
}
