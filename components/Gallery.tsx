import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { beforeSrc: 'https://images.unsplash.com/photo-1588012886262-11756a1b001a?q=75&w=600&auto=format&fit=crop', afterSrc: 'https://images.unsplash.com/photo-1502014438431-7301c4fa4895?q=75&w=600&auto=format&fit=crop', caption: 'Residential Home Demolition' },
  { beforeSrc: 'https://images.unsplash.com/photo-1621285854316-b8163f9e2f5f?q=75&w=600&auto=format&fit=crop', afterSrc: 'https://images.unsplash.com/photo-1624622179920-516315570530?q=75&w=600&auto=format&fit=crop', caption: 'Hazardous Tree Removal' },
  { beforeSrc: 'https://images.unsplash.com/photo-1597843793674-a2f07144e5b9?q=75&w=600&auto=format&fit=crop', afterSrc: 'https://images.unsplash.com/photo-1581171801235-186e2a86c66a?q=75&w=600&auto=format&fit=crop', caption: 'Commercial Lot Clearing' },
  { beforeSrc: 'https://images.unsplash.com/photo-1591536349-27309a1da105?q=75&w=600&auto=format&fit=crop', afterSrc: 'https://images.unsplash.com/photo-1580461623354-95a2858d4ac8?q=75&w=600&auto=format&fit=crop', caption: 'Concrete Driveway Removal' },
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