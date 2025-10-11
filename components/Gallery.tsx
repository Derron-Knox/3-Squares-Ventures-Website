import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1593863166532-3f1c6d3509ee?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1517478542075-2a2b354a7135?q=75&w=600&auto=format&fit=crop',
    caption: 'Complete Home Demolition' 
  },
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1604707902905-01e749b56f8f?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1600122216479-de674a7b5a1a?q=75&w=600&auto=format&fit=crop', 
    caption: 'Bathroom Remodeling' 
  },
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1627993355482-41f87962137a?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1567353986862-28e461a29352?q=75&w=600&auto=format&fit=crop', 
    caption: 'Roof Replacement' 
  },
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1633008892122-d7b4d8f8955d?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1621653245053-43303a1158a1?q=75&w=600&auto=format&fit=crop', 
    caption: 'Pressure Washing Services' 
  },
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1543096222-154911786532?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1542274368-3827d040a453?q=75&w=600&auto=format&fit=crop', 
    caption: 'Tree Removal & Land Clearing' 
  },
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1614364443423-5e4b78535a74?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1604533439999-0d6447d079d3?q=75&w=600&auto=format&fit=crop', 
    caption: 'Concrete Removal & Replacement' 
  },
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1565538885338-7634871639f7?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1600585152225-3579fe9d9599?q=75&w=600&auto=format&fit=crop', 
    caption: 'Kitchen Renovation' 
  },
  { 
    beforeSrc: 'https://images.unsplash.com/photo-1618585695834-30d8a55635a2?q=75&w=600&auto=format&fit=crop', 
    afterSrc: 'https://images.unsplash.com/photo-1628522513498-25cfb867c46a?q=75&w=600&auto=format&fit=crop', 
    caption: 'Debris & Tire Removal' 
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div 
    className="group rounded-lg overflow-hidden shadow-lg bg-brand-gray focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light-gray"
    tabIndex={0}
    role="group"
    aria-label={project.caption}
  >
    <div className="relative">
      <img src={project.beforeSrc} alt={`Before: ${project.caption}`} loading="lazy" className="w-full h-64 object-cover transition-all duration-500 transform group-hover:scale-110 group-focus-within:scale-110 group-hover:opacity-0 group-focus-within:opacity-0" />
      <img src={project.afterSrc} alt={`After: ${project.caption}`} loading="lazy" className="w-full h-64 object-cover absolute top-0 left-0 opacity-0 transition-all duration-500 transform group-hover:scale-110 group-focus-within:scale-110 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div className="absolute top-2 left-2 bg-brand-gold text-white px-2 py-1 text-sm font-bold rounded opacity-100 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0">BEFORE</div>
      <div className="absolute top-2 left-2 bg-brand-blue text-white px-2 py-1 text-sm font-bold rounded opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">AFTER</div>
    </div>
    <div className="p-4 text-white">
      <h3 className="font-headline text-lg" aria-hidden="true">{project.caption}</h3>
    </div>
  </div>
);

const Gallery = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="gallery" className="py-20 bg-brand-light-gray" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-brand-gray">Featured Projects</h2>
          <p className="mt-2 text-lg text-gray-600">See the quality of our work for yourself.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Gallery;