// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  contentSources: [
    new GitContentSource({
      // FIX: Replaced `__dirname` with `'.'` to resolve "Cannot find name '__dirname'" error.
      rootPath: '.',
      contentDirs: ['content/data'],
      models: [
        // Site Data Model
        {
          type: 'data',
          name: 'siteData',
          label: 'Site Data',
          file: 'content/data/siteData.json',
          fields: [
            { type: 'object', name: 'phone1', label: 'Primary Phone', fields: [
              { type: 'string', name: 'display', label: 'Display Text' },
              { type: 'string', name: 'href', label: 'Link (tel:)' },
            ]},
            { type: 'object', name: 'phone2', label: 'Secondary Phone', fields: [
              { type: 'string', name: 'display', label: 'Display Text' },
              { type: 'string', name: 'href', label: 'Link (tel:)' },
            ]},
            { type: 'string', name: 'email', label: 'Contact Email' },
            { type: 'list', name: 'serviceAreas', label: 'Service Areas', items: { type: 'string' } },
          ],
        },

        // Services Model
        {
          type: 'data',
          name: 'services',
          label: 'Services',
          file: 'content/data/services.json',
          // FIX: Added `isList: true` to define this as a list data model. The `items` property is only valid when `isList` is true.
          isList: true,
          items: {
            type: 'model',
            models: ['ServiceItem'],
          }
        },
        {
          type: 'object',
          name: 'ServiceItem',
          label: 'Service Item',
          fields: [
            { type: 'enum', name: 'icon', label: 'Icon Identifier', required: true,
              options: ['demolition', 'remodel', 'tree', 'concrete', 'tire', 'pressureWashing']
            },
            { type: 'string', name: 'title', label: 'Title', required: true },
            { type: 'string', name: 'description', label: 'Short Description', required: true },
            { type: 'list', name: 'jobs', label: 'Job Examples (List)', items: { type: 'string' } },
            { type: 'markdown', name: 'detailedDescription', label: 'Detailed Description' },
            { type: 'list', name: 'projectExamples', label: 'Project Examples', items: {
              type: 'model',
              models: ['ProjectExampleItem']
            }},
            { type: 'list', name: 'safetyProtocols', label: 'Safety Protocols', items: { type: 'string' } },
          ]
        },
        {
          type: 'object',
          name: 'ProjectExampleItem',
          label: 'Project Example',
          fields: [
            { type: 'string', name: 'title', label: 'Title' },
            { type: 'string', name: 'description', label: 'Description' },
            { type: 'image', name: 'image', label: 'Image' },
          ]
        },

        // Projects Model (for Gallery)
        {
          type: 'data',
          name: 'projects',
          label: 'Gallery Projects',
          file: 'content/data/projects.json',
          // FIX: Added `isList: true` to define this as a list data model. The `items` property is only valid when `isList` is true.
          isList: true,
          items: {
            type: 'model',
            models: ['ProjectItem'],
          }
        },
        {
            type: 'object',
            name: 'ProjectItem',
            label: 'Project',
            fields: [
                // FIX: Changed fields to match the `Project` type (`imageSrc` and `caption`) used in the application.
                { type: 'image', name: 'imageSrc', label: 'Image', required: true },
                { type: 'string', name: 'caption', label: 'Caption', required: true },
            ]
        },

        // Testimonials Model
        {
          type: 'data',
          name: 'testimonials',
          label: 'Testimonials',
          file: 'content/data/testimonials.json',
          // FIX: Added `isList: true` to define this as a list data model. The `items` property is only valid when `isList` is true.
          isList: true,
          items: {
            type: 'model',
            models: ['TestimonialItem'],
          }
        },
        {
          type: 'object',
          name: 'TestimonialItem',
          label: 'Testimonial',
          fields: [
            { type: 'text', name: 'quote', label: 'Quote', required: true },
            { type: 'string', name: 'name', label: 'Client Name', required: true },
            { type: 'string', name: 'location', label: 'Client Location' },
            { type: 'number', name: 'rating', label: 'Rating (1-5)', required: true, subtype: 'int' },
          ]
        },

        // FAQ Model
        {
          type: 'data',
          name: 'faq',
          label: 'FAQ Items',
          file: 'content/data/faq.json',
          // FIX: Added `isList: true` to define this as a list data model. The `items` property is only valid when `isList` is true.
          isList: true,
          items: {
            type: 'model',
            models: ['FaqItemData'],
          }
        },
        {
            type: 'object',
            name: 'FaqItemData',
            label: 'FAQ Item',
            fields: [
                { type: 'string', name: 'question', label: 'Question', required: true },
                { type: 'markdown', name: 'answer', label: 'Answer', required: true },
            ]
        },
      ],
    }),
  ],
});