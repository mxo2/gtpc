import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { getSEOConfig, seoConfig } from '@/lib/seo-config';

export default function SEOHead() {
  const [location] = useLocation();

  useEffect(() => {
    // Check for saved SEO config in localStorage
    const savedSEO = localStorage.getItem('gtpc-seo-config');
    const seoData = savedSEO ? JSON.parse(savedSEO) : seoConfig;
    const config = seoData[location] || getSEOConfig(location);
    
    // Update title
    document.title = config.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);
    
    // Update keywords if provided
    if (config.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords);
    }
    
    // Update Open Graph tags
    if (config.ogTitle) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', config.ogTitle);
    }
    
    if (config.ogDescription) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', config.ogDescription);
    }
    
    // Set og:type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');
    
    // Set og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', window.location.href);
    
    // Set og:image if provided
    if (config.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', config.ogImage);
    }
  }, [location]);

  return null;
}