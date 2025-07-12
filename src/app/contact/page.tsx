'use client';
import React, { useEffect, useState } from 'react';
import { Send, Clock, CheckCircle, AlertCircle, Mail, MessageCircle, User, Building, ExternalLink } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import { trackEvent } from '@/lib/posthog';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectRole: string;
  message: string;
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
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectRole: '',
          message: ''
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

  useEffect(() => {
    (async function () {
      await getCalApi();
    })();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="px-20 xl:px-40 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary leading-tight">
                Let&apos;s work{' '}
                <span className="gradient-text-primary">together</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
                I&apos;m available for new opportunities and exciting projects.
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-lg font-medium text-primary">Currently available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 lg:py-32 bg-section-subtle">
        <div className="max-w-4xl mx-auto px-20 xl:px-40">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary">
                How would you like to{' '}
                <span className="gradient-text-primary">connect?</span>
              </h2>
              <p className="text-lg text-muted">
                Choose what works best for you
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Quick Call */}
              <button
                data-cal-link="seanmishra/15min"
                className="group block w-full p-6 rounded-xl bg-background border border-default hover:border-primary-500/30 transition-all hover:shadow-md text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Quick 15-min call</h3>
                      <p className="text-muted">Perfect for initial discussions and quick questions</p>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-muted group-hover:text-primary-500 group-hover:scale-110 transition-all" />
                </div>
              </button>

              {/* Deep Dive */}
              <button
                data-cal-link="seanmishra/30min"
                className="group block w-full p-6 rounded-xl bg-background border border-default hover:border-primary-500/30 transition-all hover:shadow-md text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary-500/10 text-secondary-500 rounded-lg flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">30-min deep dive</h3>
                      <p className="text-muted">In-depth discussion about opportunities and technical requirements</p>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-muted group-hover:text-secondary-500 group-hover:scale-110 transition-all" />
                </div>
              </button>

              {/* Send Message */}
              <button
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  trackEvent.scrollToForm({ source: 'contact_options' });
                }}
                className="group block w-full p-6 rounded-xl bg-background border border-default hover:border-primary-500/30 transition-all hover:shadow-md text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Send a message</h3>
                      <p className="text-muted">Prefer to write? Share details about your opportunity below</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-20 xl:px-40">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary">
                Tell me about your{' '}
                <span className="gradient-text-primary">opportunity</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Share details about the role, project, or collaboration you have in mind.
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">Message Sent!</h3>
                </div>
                <p className="text-green-600 dark:text-green-300 text-lg">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-semibold text-red-700 dark:text-red-400">Something went wrong</h3>
                </div>
                <p className="text-red-600 dark:text-red-300 text-lg">
                  There was an issue sending your message. Please try again or reach out directly at{' '}
                  <a href="mailto:hello@seanmishra.com" className="underline hover:no-underline">
                    hello@seanmishra.com
                  </a>.
                </p>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-lg font-medium text-primary">
                    Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-muted" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`block w-full pl-12 pr-4 py-4 text-lg border rounded-xl bg-background text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500' : 'border-default hover:border-primary-500/30'
                      }`}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-lg font-medium text-primary">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-muted" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full pl-12 pr-4 py-4 text-lg border rounded-xl bg-background text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-default hover:border-primary-500/30'
                      }`}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Company */}
                <div className="space-y-3">
                  <label htmlFor="company" className="block text-lg font-medium text-primary">
                    Company
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building className="w-5 h-5 text-muted" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="block w-full pl-12 pr-4 py-4 text-lg border border-default rounded-xl bg-background text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-500/30 transition-colors"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                {/* Project/Role */}
                <div className="space-y-3">
                  <label htmlFor="projectRole" className="block text-lg font-medium text-primary">
                    Project/Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MessageCircle className="w-5 h-5 text-muted" />
                    </div>
                    <input
                      type="text"
                      id="projectRole"
                      name="projectRole"
                      value={formData.projectRole}
                      onChange={handleInputChange}
                      className="block w-full pl-12 pr-4 py-4 text-lg border border-default rounded-xl bg-background text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-500/30 transition-colors"
                      placeholder="Role title or project name (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label htmlFor="message" className="block text-lg font-medium text-primary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={8}
                  className={`block w-full px-4 py-4 text-lg border rounded-xl bg-background text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-default hover:border-primary-500/30'
                  }`}
                  placeholder="Tell me about the opportunity, role, or project you have in mind. What are you looking for in an ideal candidate or collaborator?"
                  required
                />
                {errors.message && <p className="text-red-500">{errors.message}</p>}
                <p className="text-muted">
                  Minimum 10 characters · Current: {formData.message.length}
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-large group min-w-[250px] px-12 py-6 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 lg:py-32 bg-section-subtle">
        <div className="max-w-4xl mx-auto px-20 xl:px-40 text-center">
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary">
              Prefer direct contact?
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hello@seanmishra.com"
                className="btn-secondary-large group"
                onClick={() => trackEvent.directContact({ method: 'email' })}
              >
                <Mail className="w-5 h-5 mr-3" />
                <span>hello@seanmishra.com</span>
              </a>
              
              <a
                href="https://linkedin.com/in/seanmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-large group"
                onClick={() => trackEvent.directContact({ method: 'linkedin' })}
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
