import React from 'react';
import { Testimonial } from '../types';
import { StarIcon } from './ui/Icon';
import testimonials from '../content/data/testimonials.json';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex items-center" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-6 h-6 ${i < rating ? 'text-brand-gold' : 'text-gray-300'}`} />
            ))}
        </div>
    );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">What Our Clients Say</h2>
          <p className="mt-2 text-lg text-gray-300">Our reputation is built on satisfied customers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white text-brand-gray p-8 rounded-lg shadow-lg flex flex-col">
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-lg italic flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-6 font-headline font-bold text-right">
                — {testimonial.name}, <span className="text-gray-500">{testimonial.location}</span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
