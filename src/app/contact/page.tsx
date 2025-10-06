'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Send, Clock, CheckCircle, AlertCircle, Mail, MessageCircle, User, Building, ExternalLink } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import { trackEvent } from '@/lib/posthog';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectRole: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}


export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectRole: '',
    message: '',
    honeypot: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 50) {
      newErrors.message = 'Message should be at least 50 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !canSubmit) return;
    if (formData.honeypot.trim() !== '') {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectRole: '',
        message: '',
        honeypot: ''
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Track form submission attempt
      trackEvent.contactFormSubmit({
        hasCompany: !!formData.company,
        hasProjectRole: !!formData.projectRole
      });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectRole: formData.projectRole,
          message: formData.message
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectRole: '',
          message: '',
          honeypot: ''
        });
        trackEvent.contactFormSuccess();
      } else {
        setSubmitStatus('error');
        trackEvent.contactFormError({ error: 'API error' });
      }
    } catch {
      setSubmitStatus('error');
      trackEvent.contactFormError({ error: 'Network error' });
    } finally {
      setIsSubmitting(false);
      setCanSubmit(false);
      setHoldProgress(0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Hold-to-send functionality
  const handleMouseDown = () => {
    if (!validateForm() || isSubmitting) return;
    
    setIsHolding(true);
    setHoldProgress(0);
    
    const interval = setInterval(() => {
      setHoldProgress(prev => {
        const newProgress = prev + 2;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsHolding(false);
          setCanSubmit(true);
          
          setTimeout(() => {
            const form = document.getElementById('contact-form-element') as HTMLFormElement;
            if (form) {
              form.requestSubmit();
            }
          }, 100);
          
          return 100;
        }
        return newProgress;
      });
    }, 50);
    
    holdIntervalRef.current = interval;
  };

  const handleMouseUp = () => {
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
    
    // Only reset if hold wasn't completed
    if (holdProgress < 100) {
      setIsHolding(false);
      setHoldProgress(0);
      setCanSubmit(false);
    }
  };

  const handleMouseLeave = () => {
    handleMouseUp();
  };

  useEffect(() => {
    (async function () {
      await getCalApi();
    })();
  }, []);

  useEffect(() => {
    return () => {
      if (holdIntervalRef.current) {
        clearInterval(holdIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                {`CONTACT //`}
              </h1>
              <div className="space-y-4">
                <p className="text-lg max-w-3xl">
                  {`I'm always open to discussing new opportunities, collaborations, or projects. Whether you have something specific in mind or just want to connect, feel free to reach out.`}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">Currently available for:</p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-success-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-400">Full-time & Contract roles</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-success-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-400">Projects & Consulting</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-success-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-400">Content Collaborations</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-warning-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-400">Mentorship (Slots full for 2025)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-success-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-400">Speaking & Debate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Contact Options */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {`OPTIONS //`}
              </h2>
              <p className="text-lg">
                Choose what works best for you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Quick Call */}
              <button
                data-cal-link="seanmishra/15min"
                className="group p-6 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-left"
              >
                <div className="space-y-4 cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded flex items-center justify-center">
                    <Clock className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Quick Chat (15 mins)</h3>
                    <p className="text-sm">
                      {`Perfect for initial introductions, quick questions, or brief check-ins. Great for getting to know each other and seeing if there's mutual interest in exploring opportunities further.`}
                    </p>
                  </div>
                </div>
              </button>

              {/* Deep Dive */}
              <button
                data-cal-link="seanmishra/30min"
                className="group p-6 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-left"
              >
                <div className="space-y-4 cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Conversation (30 mins)</h3>
                    <p className="text-sm">
                      {`Ideal for discussing projects or opportunities, and sharing backgrounds. We'll have time to explore potential synergies, answer questions on both sides, and discuss next steps.`}
                    </p>
                  </div>
                </div>
              </button>

              {/* Send Message */}
              <button
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  trackEvent.scrollToForm({ source: 'contact_options' });
                }}
                className="group p-6 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-left"
              >
                <div className="space-y-4 cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Send a message</h3>
                    <p className="text-sm ">
                      {`Prefer text communication? Share details about your opportunity below and I'll get back to you as soon as possible.`}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Contact Form */}
      <section id="contact-form" className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 max-w-4xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {`MESSAGE //`}
              </h2>
              <p className="text-lg">
                Share details about the role, project, or collaboration you have in mind.
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-6 rounded border border-success-500/20 bg-success-50 dark:bg-success-900/10">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-success-600 dark:text-success-400" />
                  <h3 className="font-sans font-semibold text-success-800 dark:text-success-300">Message Sent!</h3>
                </div>
                <p className="text-success-700 dark:text-success-300">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-6 rounded border border-error-500/20 bg-error-50 dark:bg-error-900/10">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-error-600 dark:text-error-400" />
                  <h3 className="font-sans font-semibold text-error-800 dark:text-error-300">Something went wrong</h3>
                </div>
                <p className="text-error-700 dark:text-error-300">
                  There was an issue sending your message. Please try again or reach out directly at{' '}
                  <a href="mailto:hello@seanmishra.com" className="underline hover:no-underline">
                    hello@seanmishra.com
                  </a>.
                </p>
              </div>
            )}

            {/* Contact Form */}
            <form id="contact-form-element" onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-4 h-4 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded font-mono text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 transition-colors ${
                        errors.name ? 'border-error-500' : 'border-neutral-300 dark:border-neutral-700'
                      }`}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  {errors.name && <p className="text-error-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded font-mono text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 transition-colors ${
                        errors.email ? 'border-error-500' : 'border-neutral-300 dark:border-neutral-700'
                      }`}
                      placeholder="your.email@company.com"
                      required  
                    />
                  </div>
                  {errors.email && <p className="text-error-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Company
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="w-4 h-4 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-neutral-300 dark:border-neutral-700 rounded font-mono text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                {/* Project/Role */}
                <div className="space-y-2">
                  <label htmlFor="projectRole" className="block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Project/Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageCircle className="w-4 h-4 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="projectRole"
                      name="projectRole"
                      value={formData.projectRole}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-neutral-300 dark:border-neutral-700 rounded font-mono text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 transition-colors"
                      placeholder="Role title or project name (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={10}
                  className={`block w-full px-3 py-3 border rounded font-mono text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 transition-colors resize-none ${
                    errors.message ? 'border-error-500' : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                  placeholder="Tell me about the opportunity, role, or project you have in mind. What are you looking for in an ideal candidate or collaborator?"
                  required  
                />
                {errors.message && <p className="text-error-500 text-sm">{errors.message}</p>}
                <p className="text-neutral-500 text-xs font-mono">
                  Minimum 50 characters · Current: {formData.message.length}
                </p>
              </div>

              <div className="hidden">
                <label htmlFor="honeypot">Leave this field empty</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <div className="space-y-2">
                  {!canSubmit && !isSubmitting && (
                    <p className="text-neutral-500 text-sm font-mono">
                      Hold the button below to send your message
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    className="relative inline-flex items-center px-6 py-3 rounded bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-mono text-sm hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {/* Progress bar background */}
                    <div 
                      className="absolute inset-0 bg-neutral-700 dark:bg-neutral-300 transition-all duration-75"
                      style={{ width: `${holdProgress}%` }}
                    />
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-50/30 border-t-neutral-50 dark:border-neutral-900/30 dark:border-t-neutral-900 rounded-full animate-spin mr-2" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>{isHolding ? 'Keep holding...' : 'Hold to Send'}</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Alternative Contact */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {`DIRECT CONTACT //`}
              </h2>
              <p>
                You can also reach out directly via email or LinkedIn.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@seanmishra.com"
                className="inline-flex items-center px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 font-mono text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                onClick={() => trackEvent.directContact({ method: 'email' })}
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>hello@seanmishra.com</span>
              </a>
              
              <a
                href="https://linkedin.com/in/seanmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 font-mono text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                onClick={() => trackEvent.directContact({ method: 'linkedin' })}
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
