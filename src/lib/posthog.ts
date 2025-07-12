import posthog from 'posthog-js'

export function initPostHog() {
  if (typeof window !== 'undefined') {
    // Initialize PostHog only on client side
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      loaded: (posthog) => {
        // Enable debug mode in development
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
  }
}

// Tracking functions for key conversion events
export const trackEvent = {
  resumeDownload: () => {
    if (typeof window !== 'undefined') {
      posthog.capture('resume_download', {
        source: 'homepage_hero',
        file_name: 'Sean_Mishra_Resume.pdf'
      })
    }
  },
  
  contactClick: (source: 'hero' | 'cta_section') => {
    if (typeof window !== 'undefined') {
      posthog.capture('contact_click', {
        source,
        destination: '/contact'
      })
    }
  },
  
  projectsClick: (source: 'cta_section') => {
    if (typeof window !== 'undefined') {
      posthog.capture('projects_click', {
        source,
        destination: '/projects'
      })
    }
  },
  
  // Contact form events
  contactFormSubmit: (data: { hasCompany: boolean; hasProjectRole?: boolean }) => {
    if (typeof window !== 'undefined') {
      posthog.capture('contact_form_submit', data)
    }
  },
  
  contactFormSuccess: () => {
    if (typeof window !== 'undefined') {
      posthog.capture('contact_form_success')
    }
  },
  
  contactFormError: (data: { error: string }) => {
    if (typeof window !== 'undefined') {
      posthog.capture('contact_form_error', data)
    }
  },
  
  scheduleCall: (data: { duration: string; source: string }) => {
    if (typeof window !== 'undefined') {
      posthog.capture('schedule_call', data)
    }
  },
  
  scrollToForm: (data: { source: string }) => {
    if (typeof window !== 'undefined') {
      posthog.capture('scroll_to_form', data)
    }
  },
  
  directContact: (data: { method: string }) => {
    if (typeof window !== 'undefined') {
      posthog.capture('direct_contact', data)
    }
  }
}
