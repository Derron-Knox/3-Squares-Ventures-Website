import React from 'react';
import { Project } from '../types';
import projects from '../content/data/projects.json';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div 
    className="group rounded-lg overflow-hidden shadow-lg bg-brand-gray focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light-gray flex flex-col"
    tabIndex={0}
    role="group"
    aria-label={project.caption}
  >
    <div className="overflow-hidden">
      <img 
        src={project.imageSrc} 
        alt={project.caption} 
        loading="lazy" 
        className="w-full h-auto object-cover aspect-square transition-transform duration-500 transform group-hover:scale-105 group-focus-within:scale-105" 
      />
    </div>
    <div className="p-4 text-white mt-auto">
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

Gallery.displayName = 'Gallery';

export default Gallery;