// FIX: Import React to resolve 'Cannot find namespace' error for React.ElementType
import React from 'react';

export interface ServiceProjectExample {
  title: string;
  description: string;
  image: string;
}

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  jobs: string[];
  detailedDescription: string;
  projectExamples: ServiceProjectExample[];
  safetyProtocols: string[];
}

export interface Project {
  beforeSrc: string;
  afterSrc: string;
  caption: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
