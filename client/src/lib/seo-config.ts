export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const seoConfig: Record<string, SEOConfig> = {
  '/': {
    title: 'GTPC - Global Trade Promotion Corporation | Export Import Consultancy',
    description: 'Connect global markets with GTPC\'s expert consultancy, B2B meetings, delegation programs, and training workshops. Leading export-import solutions provider in India.',
    keywords: 'export import consultancy, B2B meetings, trade delegation, international business, GTPC, global trade',
    ogTitle: 'GTPC - Your Gateway to Global Trade Success',
    ogDescription: 'Expert consultancy services for international trade, business delegations, and B2B networking across 50+ countries.',
  },
  '/services': {
    title: 'Our Services | GTPC Export Import Consultancy & B2B Solutions',
    description: 'Comprehensive trade services including business consultancy, B2B meetings, delegation programs, training workshops, and ISBBE exhibitions. Transform your global business.',
    keywords: 'export consultancy, import services, B2B meetings, trade delegation, business training, ISBBE exhibitions',
    ogTitle: 'Professional Trade Services by GTPC',
    ogDescription: 'Expert consultancy, B2B meetings, delegations, and training for successful international trade.',
  },
  '/delegation': {
    title: 'International Business Delegations | GTPC Trade Missions',
    description: 'Join GTPC\'s exclusive business delegations to Malaysia, Russia, USA, Japan, UAE, and more. B2B meetings with verified partners, market visits, and networking opportunities.',
    keywords: 'business delegation, trade mission, B2B meetings, international networking, Malaysia delegation, Russia trade',
    ogTitle: 'International Business Delegations by GTPC',
    ogDescription: 'Exclusive trade missions with assured B2B meetings, market visits, and business networking in key global markets.',
  },
  '/training': {
    title: 'Export Import Training & Workshops | GTPC Professional Courses',
    description: 'Master international trade with GTPC\'s expert-led training programs. Online and offline workshops on export documentation, compliance, market entry, and trade finance.',
    keywords: 'export training, import courses, trade workshops, business training, export documentation, trade compliance',
    ogTitle: 'Professional Trade Training Programs',
    ogDescription: 'Comprehensive export-import training with practical insights, certification, and expert guidance.',
  },
  '/consultancy': {
    title: 'Expert Trade Consultancy Services | GTPC Business Advisory',
    description: 'Get personalized export-import consultancy from industry experts. Market entry strategies, documentation support, compliance guidance, and partner identification.',
    keywords: 'trade consultancy, export advisory, import consulting, business strategy, market entry, trade compliance',
    ogTitle: 'Expert Trade Consultancy by GTPC',
    ogDescription: 'One-on-one consultancy sessions with trade experts for your international business success.',
  },
  '/isbbe': {
    title: 'ISBBE - Indian Street Beyond Border Events | B2C Exhibitions',
    description: 'Join ISBBE exhibitions in Kenya, Brazil, Chile, Uzbekistan, Malaysia, and Dubai. Showcase Indian products directly to international consumers in premium retail spaces.',
    keywords: 'ISBBE, B2C exhibition, international expo, Indian products abroad, retail exhibition, global showcase',
    ogTitle: 'ISBBE - Taking Indian Products Global',
    ogDescription: 'B2C exhibitions showcasing Indian excellence in international markets with direct consumer access.',
  },
  '/membership': {
    title: 'Premium Membership | GTPC Global Trade Network',
    description: 'Join GTPC\'s exclusive membership program for priority B2B meetings, delegation discounts, free training access, and expert consultancy. Annual membership at ₹2,999.',
    keywords: 'trade membership, business network, B2B membership, export import club, GTPC membership, premium benefits',
    ogTitle: 'GTPC Premium Membership Program',
    ogDescription: 'Exclusive benefits including priority B2B meetings, training access, and expert consultancy support.',
  },
  '/contact': {
    title: 'Contact GTPC | Global Trade Promotion Corporation Jaipur',
    description: 'Get in touch with GTPC for export-import consultancy, training, and delegation queries. Located in Jaipur with global reach. WhatsApp: +91 98296 49640.',
    keywords: 'contact GTPC, trade consultancy contact, Jaipur office, export help, import support, business inquiry',
    ogTitle: 'Contact GTPC - We\'re Here to Help',
    ogDescription: 'Reach out for expert trade consultancy, training programs, and international business opportunities.',
  },
  '/gallery': {
    title: 'Photo Gallery | GTPC Events, Delegations & Success Stories',
    description: 'Explore GTPC\'s journey through images - international delegations, B2B meetings, training sessions, and successful partnerships across the globe.',
    keywords: 'GTPC gallery, trade events photos, delegation pictures, B2B meeting images, success stories',
    ogTitle: 'GTPC Photo Gallery',
    ogDescription: 'Visual journey of successful trade delegations, B2B meetings, and international partnerships.',
  },
  '/team': {
    title: 'Our Global Team | GTPC International Trade Experts',
    description: 'Meet GTPC\'s worldwide team of trade experts across 10+ countries. Experienced professionals in export-import consultancy, B2B networking, and international business.',
    keywords: 'GTPC team, trade experts, global team, international consultants, export specialists, business advisors',
    ogTitle: 'GTPC Global Team - Trade Experts Worldwide',
    ogDescription: 'Expert professionals across 6 continents united in connecting global markets and facilitating international trade.',
  },
  '/admin': {
    title: 'Admin Dashboard | GTPC Content Management',
    description: 'Manage GTPC website content, inquiries, and gallery.',
    keywords: 'admin panel, content management',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | GTPC Data Protection',
    description: 'Learn how GTPC protects your personal information and handles data in compliance with privacy regulations.',
    keywords: 'privacy policy, data protection, GDPR compliance, personal information',
  },
  '/terms-conditions': {
    title: 'Terms & Conditions | GTPC Service Agreement',
    description: 'Read GTPC\'s terms of service for consultancy, training, delegations, and membership programs.',
    keywords: 'terms conditions, service agreement, legal terms, usage policy',
  },
  '/cookies-policy': {
    title: 'Cookies Policy | GTPC Website Usage',
    description: 'Understand how GTPC uses cookies to improve your browsing experience and provide better services.',
    keywords: 'cookies policy, website cookies, data collection, browser storage',
  },
  '/cancellation-refund': {
    title: 'Cancellation & Refund Policy | GTPC Services',
    description: 'GTPC\'s cancellation and refund policies for training, consultancy, delegations, and membership services.',
    keywords: 'cancellation policy, refund policy, service cancellation, payment refund',
  },
  '/shipping-delivery': {
    title: 'Service Delivery Policy | GTPC Digital & Physical Services',
    description: 'How GTPC delivers consultancy reports, training materials, and delegation services to clients worldwide.',
    keywords: 'service delivery, digital delivery, consultancy reports, training materials',
  },
  '/data-deletion': {
    title: 'Data Deletion Instructions | GTPC Privacy Rights',
    description: 'Request deletion of your personal data from GTPC systems. Simple process with email or contact form options.',
    keywords: 'data deletion, privacy rights, GDPR deletion, remove personal data',
  },
};

export function getSEOConfig(pathname: string): SEOConfig {
  return seoConfig[pathname] || {
    title: 'GTPC - Global Trade Promotion Corporation',
    description: 'Connecting global markets through expert consultancy and comprehensive trade solutions.',
  };
}