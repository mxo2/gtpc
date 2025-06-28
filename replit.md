# GTPC - Global Trade Promotion Corporation

## Overview

GTPC is a full-stack web application designed to connect global markets through expert consultancy, strategic partnerships, and comprehensive trade solutions. The application serves as a platform for international trade services, including B2B meetings, delegation programs, training workshops, and membership management.

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
- **Home**: Landing page with hero section, services overview, and testimonials
- **Services**: Detailed service offerings including consultancy and B2B meetings
- **Delegation**: International business delegation programs
- **Training**: Online and offline training courses
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

## User Preferences

Preferred communication style: Simple, everyday language.