export const SITE_DATA = {
  // Client Information
  client: {
    name: 'Client Business Name',
    address: '123 Main Street, City, Country',
    phone: '+1 234 567 8900',
    email: 'contact@clientbusiness.com',
    workingHours: 'Mon-Fri 09:00 - 17:00',
    about: {
      title: 'About Our Company',
      description: 'We are a dedicated team providing top-notch services to our clients. Our mission is to deliver excellence.',
    },
    contact: {
      title: 'Get in Touch',
      description: 'Reach out to us for any inquiries or to get a free quote. We are here to help you.',
    }
  },

  // Social Links
  social: {
    twitter: { visible: true, url: 'https://twitter.com/client' },
    instagram: { visible: true, url: 'https://instagram.com/client' },
    facebook: { visible: true, url: 'https://facebook.com/client' },
    linkedin: { visible: false, url: 'https://linkedin.com/client' },
    github: { visible: false, url: 'https://github.com/client' },
  },

  // SEO & Metadata
  seo: {
    title: 'Client Business | Best Services in Town',
    description: 'We provide the best services in the industry. Contact us today for a free quote.',
    keywords: 'services, local business, premium quality',
    ogImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    canonicalURL: 'https://clientbusiness.com',
  },

  // Design & Branding
  design: {
    primaryColor: '#0161ef',   // Default Astrowind blue
    secondaryColor: '#0154cf',
    logoPath: '/images/logo.svg',
  },

  // Forms & Integrations
  forms: {
    recipientEmail: 'leads@clientbusiness.com',
  },

  // Call to Action
  cta: {
    text: 'CTA',
    link: 'https://example.com/contact',
  },
};
