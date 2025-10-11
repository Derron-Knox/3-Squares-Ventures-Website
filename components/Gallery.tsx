import React from 'react';
import { Project } from '../types';
import projects from '../content/data/projects.json';

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
