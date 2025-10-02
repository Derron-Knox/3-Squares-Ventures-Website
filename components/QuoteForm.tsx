import React, { useState, useRef, forwardRef } from 'react';
import Button from './ui/Button';

interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  description: string;
  preferredDate: string;
}

// Use Partial to allow for errors on a subset of fields
type FormErrors = Partial<Record<keyof FormState, string>>;

const QuoteForm = forwardRef<HTMLDivElement>((props, ref) => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    description: '',
    preferredDate: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formState.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!formState.address.trim()) newErrors.address = 'Project Address is required.';
    if (!formState.serviceType) newErrors.serviceType = 'Please select a service.';
    if (!formState.description.trim()) newErrors.description = 'A project description is required.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    // Clear error for the field being edited
    if (errors[name as keyof FormState]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!consent) {
      alert('You must consent to be contacted.');
      return;
    }
    setSubmissionStatus('success');

    // Create mailto link
    const subject = `New Quote Request from ${formState.name}`;
    const body = `
      Name: ${formState.name}
      Phone: ${formState.phone}
      Email: ${formState.email}
      Address: ${formState.address}
      Service Type: ${formState.serviceType}
      Preferred Date: ${formState.preferredDate}

      Description:
      ${formState.description}
    `.replace(/\n\s+/g, '\n').trim();
    
    window.location.href = `mailto:info@3squaresventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const labelStyles = "block text-sm font-medium text-gray-700 mb-1";
  const inputStyles = "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition";
  const errorInputStyles = "border-red-500";
  const defaultInputStyles = "border-gray-300";

  return (
    <section id="quote-form" className="py-20 bg-brand-light-gray" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-brand-gray">Get a Free, No-Obligation Quote</h2>
          <p className="mt-2 text-lg text-gray-600">Fill out the form below, and we'll get back to you within 24 hours.</p>
        </div>
        
        {submissionStatus === 'success' ? (
          <div className="max-w-3xl mx-auto text-center bg-brand-blue text-white p-12 rounded-lg shadow-lg">
            <h3 className="text-3xl font-headline">Thank You!</h3>
            <p className="mt-4 text-lg">Your quote request has been prepared for your email client. Please click 'send' to submit it. We look forward to speaking with you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelStyles}>Full Name *</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={formState.name} onChange={handleChange} className={`${inputStyles} ${errors.name ? errorInputStyles : defaultInputStyles}`} required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelStyles}>Phone Number *</label>
                <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" value={formState.phone} onChange={handleChange} className={`${inputStyles} ${errors.phone ? errorInputStyles : defaultInputStyles}`} required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined}/>
                {errors.phone && <p id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="email" className={labelStyles}>Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" value={formState.email} onChange={handleChange} className={`${inputStyles} ${defaultInputStyles}`} />
              </div>
              <div>
                <label htmlFor="address" className={labelStyles}>Project Address / ZIP Code *</label>
                <input type="text" id="address" name="address" placeholder="123 Main St, Jackson, MS" value={formState.address} onChange={handleChange} className={`${inputStyles} ${errors.address ? errorInputStyles : defaultInputStyles}`} required aria-invalid={!!errors.address} aria-describedby={errors.address ? "address-error" : undefined}/>
                {errors.address && <p id="address-error" className="text-red-600 text-sm mt-1">{errors.address}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="serviceType" className={labelStyles}>Service Type *</label>
              <select id="serviceType" name="serviceType" value={formState.serviceType} onChange={handleChange} className={`${inputStyles} ${errors.serviceType ? errorInputStyles : defaultInputStyles}`} required aria-invalid={!!errors.serviceType} aria-describedby={errors.serviceType ? "serviceType-error" : undefined}>
                <option value="" disabled>Please select a service...</option>
                <option>Residential Demolition</option>
                <option>Interior Demolition</option>
                <option>Home Remodeling (Kitchen, Bath, Decks, Fences, etc.)</option>
                <option>Roofing (Repair, Replacement)</option>
                <option>Pressure Washing (Siding, Driveway, etc.)</option>
                <option>Concrete Removal (Driveways, Patios, etc.)</option>
                <option>Concrete Foundation Removal</option>
                <option>Land/Lot Clearing</option>
                <option>Tree Removal</option>
                <option>Stump Grinding</option>
                <option>Emergency Storm Cleanup</option>
                <option>Waste Tire Hauling</option>
                <option>Other</option>
              </select>
              {errors.serviceType && <p id="serviceType-error" className="text-red-600 text-sm mt-1">{errors.serviceType}</p>}
            </div>
            <div>
              <label htmlFor="description" className={labelStyles}>Brief Description of Project *</label>
              <textarea id="description" name="description" placeholder="e.g., I need to remove a large oak tree in my backyard and grind the stump." rows={5} value={formState.description} onChange={handleChange} className={`${inputStyles} ${errors.description ? errorInputStyles : defaultInputStyles}`} required aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined}></textarea>
              {errors.description && <p id="description-error" className="text-red-600 text-sm mt-1">{errors.description}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                <label htmlFor="preferredDate" className={labelStyles}>Preferred Start Date</label>
                <input type="date" id="preferredDate" name="preferredDate" value={formState.preferredDate} onChange={handleChange} className={`${inputStyles} ${defaultInputStyles}`} />
              </div>
               <div>
                <label htmlFor="photos" className={labelStyles}>Upload Photos (optional)</label>
                <input type="file" id="photos" name="photos" ref={fileInputRef} onChange={handleFileChange} className={`${inputStyles} ${defaultInputStyles}`} multiple />
              </div>
            </div>
             <div className="hidden">
              <input type="text" name="honeypot" />
            </div>
            <div>
              <label className="flex items-start">
                <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-brand-gold focus:ring-brand-gold focus:ring-offset-2 mt-1" required />
                <span className="ml-3 text-sm text-gray-600">I consent to be contacted by 3 Squares Ventures LLC via phone or email regarding my quote request.</span>
              </label>
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary" className="w-full md:w-auto">
                Submit Quote Request
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
});

export default QuoteForm;