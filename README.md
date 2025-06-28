# GTPC - Global Trade Promotion Corporation

A professional corporate website for GTPC showcasing export-import services, delegation programs, and membership offerings.

## Features

- **Export-Import Services**: Comprehensive trade solutions
- **B2B Meetings**: Virtual and face-to-face business meetings
- **Delegation Programs**: International business delegations to Malaysia, Russia, USA, Japan, UAE
- **Training Workshops**: Premium 3-hour training sessions (₹5,999)
- **Expert Consultancy**: 1-hour consultation sessions (₹2,500)
- **Membership Plans**: Annual membership (₹2,999/year)
- **Photo Gallery**: Trade mission documentation
- **CRM Integration**: PostgreSQL database for all bookings and inquiries

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Backend**: Node.js + Express
- **Database**: PostgreSQL (Neon Database)
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form + Zod validation
- **Build Tool**: Vite

## Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gtpc-website.git
cd gtpc-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your database credentials to .env

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

### Environment Variables

```env
DATABASE_URL=your_postgresql_connection_string
PGHOST=your_db_host
PGPORT=your_db_port
PGUSER=your_db_user
PGPASSWORD=your_db_password
PGDATABASE=your_db_name
```

## Deployment

### Build for Production

```bash
# Build client and server
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Deploy to Railway/Heroku

1. Connect GitHub repository
2. Set environment variables
3. Enable automatic deployments

## API Endpoints

- `POST /api/contact` - Submit contact inquiries
- `POST /api/membership` - Submit membership applications
- `POST /api/training/book` - Book training sessions
- `POST /api/consultancy/book` - Book consultancy sessions
- `GET /api/photos/active` - Get gallery photos

## Database Schema

- **users** - User management
- **inquiries** - Contact form submissions
- **memberships** - Membership applications
- **training_bookings** - Training session bookings
- **consultancy_bookings** - Consultancy appointments
- **photos** - Gallery images

## Contact Information

**Head Office**: 14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ  
**Email**: info@gtpcglobal.com  
**Website**: [GTPC Global](https://gtpcglobal.com)

## License

© 2025 Global Trade Promotion Corporation. All rights reserved.