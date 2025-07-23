# GTPC - Global Trade Promotion Corporation

## Overview

GTPC is a full-stack web application designed to connect global markets through expert consultancy, strategic partnerships, and comprehensive trade solutions. The application serves as a platform for international trade services, including B2B meetings, delegation programs, training workshops, membership management, and the new ISBBE (Indian Street Beyond Border Events) B2C exhibition initiative across 6 international locations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Design**: REST API with JSON responses
- **Validation**: Zod schemas for runtime type checking

### Development Setup
- **Monorepo Structure**: Shared schema definitions between client and server
- **Development Server**: Vite dev server with Express backend integration
- **Hot Module Replacement**: Enabled for fast development iteration
- **Build Process**: Separate builds for client (Vite) and server (esbuild)

## Key Components

### Database Schema (PostgreSQL)
- **users**: User authentication and management
- **inquiries**: Contact form submissions and service inquiries
- **memberships**: Membership applications and user registrations

### API Endpoints
- `POST /api/contact` - Submit contact inquiries
- `GET /api/inquiries` - Retrieve all inquiries (admin)
- `POST /api/membership` - Submit membership applications
- `GET /api/memberships` - Retrieve all memberships (admin)

### Core Pages
- **Home**: Landing page with hero section, services overview, ISBBE exhibitions, and testimonials
- **Services**: Detailed service offerings including consultancy, B2B meetings, and ISBBE exhibitions
- **Delegation**: International business delegation programs
- **Training**: Online and offline training courses
- **ISBBE**: B2C exhibition program across Kenya, Brazil, Chile, Uzbekistan, Malaysia, and Dubai
- **Membership**: Membership signup and benefits
- **Contact**: Contact form and company information

### UI Components
- Comprehensive component library using Radix UI primitives
- Responsive design with mobile-first approach
- Accessible components following ARIA guidelines
- Custom styled components with consistent design system

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Form Submission**: React Hook Form handles form state and validation
3. **API Requests**: TanStack Query manages HTTP requests to Express backend
4. **Server Processing**: Express routes handle business logic and database operations
5. **Database Operations**: Drizzle ORM executes PostgreSQL queries
6. **Response Handling**: JSON responses sent back to client
7. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem (React, React DOM)
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack Query for server state
- **Database**: Drizzle ORM with Neon Database
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **TypeScript**: Type safety across the entire application
- **Vite**: Fast build tool and development server
- **ESBuild**: Server-side bundling for production
- **Drizzle Kit**: Database schema management and migrations

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React application to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations manage schema changes

### Environment Requirements
- Node.js runtime environment
- PostgreSQL database (via Neon Database)
- Environment variables for database connection

### Production Considerations
- Static file serving for built React application
- Express server handles API routes and serves static files
- Database connection pooling through Neon's serverless driver
- Error handling and logging for production monitoring

## Changelog
- June 28, 2025. Initial setup
- June 28, 2025. Updated contact address to Jaipur, added GTPC logo, implemented premium training booking (₹5,999 for 3-hour sessions), added consultancy booking system (₹2,500 for 1-hour sessions), created photo gallery with admin upload capabilities
- June 28, 2025. Fixed logo display to show only company image with "Global Trade Promotion Corporation" text underneath (removed "GTPC" text), implemented professional color scheme with primary colors (deep navy blue and golden accent), set up PostgreSQL database integration for CRM connectivity, migrated from memory storage to database storage for all booking and inquiry data
- June 28, 2025. IMPORTANT CORRECTION: Removed all shipping/logistics service references from banner content. Company provides ONLY consultancy, training, workshops, and delegation services - NOT shipping services. Updated hero section background from primary gradient to slate-blue-indigo gradient for better visual appeal. Corrected floating stats to show "500+ Successful Consultations" instead of shipments.
- June 28, 2025. Implemented comprehensive GitHub automation and deployment pipeline: Created GitHub Actions workflows for automatic code synchronization, set up Vercel deployment automation, added bank transfer payment modals with copy-to-clipboard functionality for all booking forms, created detailed deployment guides (DEPLOYMENT_AUTOMATION.md), and setup script for easy GitHub repository creation. Now any changes in Replit will automatically sync to GitHub and deploy to live website.
- June 28, 2025. Added comprehensive legal compliance framework: Created Privacy Policy page with GDPR-compliant data handling procedures, Terms & Conditions page covering all GTPC services and payment policies, Cookies Policy explaining data collection practices, and implemented cookie consent banner with preference management. Updated footer with proper legal page links and corrected copyright year to 2025.
- June 28, 2025. Implemented CMS Admin Panel: Created secure admin dashboard at /admin route (password: gtpc@admin2025) with logo upload functionality, company information management, and gallery image management. Navigation and footer components now dynamically update when admin changes logo or company info through localStorage. Created comprehensive CMS_ADMIN_GUIDE.md documentation for easy administration.
- June 28, 2025. Added ISBBE (Indian Street Beyond Border Events) B2C Exhibition Program: Created dedicated ISBBE page showcasing B2C exhibitions across 6 international locations (Kenya, Brazil, Chile, Uzbekistan, Malaysia, Dubai). Added ISBBE to navigation menu, services page, and featured section on homepage. This new initiative takes Indian products directly to global consumers through strategic exhibitions in high-growth markets across Africa, South America, Middle East, and Asia.
- July 1, 2025. Updated delegation programs with comprehensive details: Each delegation now includes specific B2B meetings with business councils, medical facility visits, chamber of commerce meetings, hypermarket procurement departments, and market visits. Added detailed package inclusions (3N/4D hotel stay, visa, local transfers, assured B2B meetings) and exclusions (airfare, meals, airport transfers, insurance). Updated focused sectors for each country based on market demands. All delegations now show "Limited Seats Available" to create urgency.
- July 1, 2025. Successfully integrated Frappe CRM API for lead management: Created frappe-crm.ts service to automatically sync all contact forms, membership applications, training bookings, and consultancy bookings to Frappe CRM as leads. Fixed integration issues by removing problematic fields (source, notes) and simplifying payload structure. All form submissions now successfully create leads in Frappe CRM with descriptive names including service type. Increased body parser limit to 10mb to handle larger photo uploads. Leads are being created with format: "Name - Service Type" for easy identification in CRM. Added status field set to "Open" for all leads as requested.
- July 2, 2025. Added comprehensive policy pages: Created Cancellation and Refund Policy page with detailed terms for all GTPC services including training, consultancy, membership, delegations, and ISBBE exhibitions. Created Service Delivery Policy page (replacing traditional shipping policy) covering digital service delivery, physical materials, delegation programs, and quality assurance. Added both pages to footer navigation for easy access and legal compliance.
- July 6, 2025. Integrated social media links: Added LinkedIn (https://www.linkedin.com/company/gtpc/), Facebook (https://www.facebook.com/people/GTPC/61577775519184/), and Twitter/X (@gtpc_india) links to footer and contact page. All social links open in new tabs with proper security attributes (target="_blank" and rel="noopener noreferrer"). Added hover effects with accent color for better user interaction.
- July 20, 2025. Implemented custom favicon: Added GTPC branded favicon in multiple formats (ICO, PNG 16x16, 32x32, 192x192, 512x512) for comprehensive browser and device support. Created web manifest file for Progressive Web App capabilities. Updated sync script to include favicon files for GitHub deployment. Favicon now displays properly in browser tabs and mobile bookmarks.
- July 20, 2025. Integrated external membership portal: Connected premium membership process to https://my.gtpcglobal.com/membership-sdmzb. When users click "Join Now" on membership page, form data is first sent to backend for CRM integration, then users are redirected to secure external membership portal to complete registration and payment. Added informative message about redirection and smooth transition with success toast notification.
- July 20, 2025. Updated Frappe/ERPNext CRM integration: Successfully updated API credentials (API Key: 065b37817f49ea2, API Secret: 99f2d036af12e32) and connected to https://my.gtpcglobal.com. All contact forms, membership applications, training bookings, and consultancy requests now create leads in ERPNext CRM. Integration tested and working successfully with proper authentication.
- July 21, 2025. Updated Join Now buttons to external signup: All "Join Now" buttons in navigation (desktop and mobile) and "Become a Member" button on home page now redirect to https://my.gtpcglobal.com/signup. All links open in new tabs with proper security attributes (target="_blank" and rel="noopener noreferrer").
- July 21, 2025. Enhanced membership page with dual functionality: Added direct "Become a Member" button that redirects to external signup page (https://my.gtpcglobal.com/signup) in the pricing card section. Kept the membership form that submits to CRM for lead generation without redirecting. Added clear visual separation with "OR" divider between the two options. Updated form messaging to clarify that submission creates a lead for team follow-up within 24 hours.
- July 21, 2025. Updated contact information: Replaced phone numbers with WhatsApp (+91 98296 49640) and Telegram (@sam_panwar) contact details on both the contact page and footer. Added dedicated "Contact Us" section in footer with clickable WhatsApp and Telegram links for easy communication.
- July 22, 2025. Created Data Deletion Instructions page: Added comprehensive data deletion request page at /data-deletion route for Facebook compliance. Page includes two methods for data deletion (email and contact form), clear timeline (30 days), step-by-step process, and list of data types collected. Added link to footer for easy access. URL can be used for Facebook's data deletion URL requirement.
- July 24, 2025. Implemented comprehensive SEO management system: Created centralized SEO configuration for all pages with customizable titles, descriptions, keywords, and Open Graph tags. Added dynamic SEO component that updates meta tags based on current page. Created admin SEO management interface at /admin/seo for easy editing of all page SEO settings. Added structured data (JSON-LD) for organization schema, sitemap.xml, and robots.txt for improved search engine visibility.
- July 24, 2025. Created Team page showcasing worldwide team members: Added comprehensive team page at /team displaying 10 international team members across 10+ countries. Team members grouped by regions (Asia, Americas, Middle East & Africa, Europe) with detailed profiles including name, role, location, bio, expertise areas, and contact links (email/LinkedIn). Added team statistics showing global coverage, visual design with profile cards, and CTA section for career opportunities. Added Team link to navigation menu and included in SEO configuration. Updated with P.R. Sharma as Director with actual photo and comprehensive career background including former roles as CEO of Rajasthan Export Promotion Council and Advisor to Chairman MOEFCCPC.
- July 24, 2025. Added Dubai activity photos to gallery: Uploaded 5 photos from GTPC's recent Dubai activities including Business Summit 2025, Trade Delegation Meeting, UAE Partnership Signing, Export Training Workshop, and ISBBE Exhibition Preview. Photos are categorized under Events, Delegations, Training, and ISBBE Exhibitions with detailed descriptions. Photos showcase GTPC's active presence in UAE market.

## User Preferences

Preferred communication style: Simple, everyday language.