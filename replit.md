# Seven Degree Cleaning Services

## Overview

Seven Degree Cleaning Services is a full-stack web application for a professional cleaning company operating in Dubai. The application serves as both a marketing website and a booking management system, featuring a modern React frontend with a Node.js/Express backend. The platform allows customers to browse services, view testimonials, and submit booking requests, while providing the business with a system to manage and track those bookings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for Dubai-themed branding
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development Setup**: Custom Vite integration for development with hot module replacement

### Database Design
- **ORM**: Drizzle with type-safe schema definitions
- **Schema Structure**: 
  - Users table for potential authentication
  - Bookings table for customer service requests with status tracking
- **Validation**: Zod schemas shared between frontend and backend for consistent validation

### Data Storage Strategy
- **Production**: PostgreSQL database (configured via DATABASE_URL environment variable)
- **Development**: In-memory storage implementation for rapid development and testing
- **Database Migrations**: Drizzle Kit for schema migrations and database management

### Component Architecture
- **Design System**: Comprehensive UI component library following atomic design principles
- **Page Structure**: Single-page application with section-based navigation
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance

### Business Logic
- **Booking System**: Multi-step form for service requests with validation and confirmation
- **Service Management**: Static service catalog with pricing and descriptions
- **Contact Management**: Multiple communication channels (phone, email, WhatsApp integration)
- **Geographic Coverage**: Dubai-specific service area mapping and availability

## External Dependencies

### UI and Styling
- **shadcn/ui**: Pre-built accessible component library
- **Radix UI**: Headless UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code quality and formatting (configured via components.json)

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: PostgreSQL driver optimized for serverless environments
- **Drizzle Kit**: Database migration and introspection tools

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for type-safe data handling
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### State Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Query DevTools**: Development tools for debugging query state

### Communication
- **Nodemailer**: Email service integration (implied from booking system)
- **WhatsApp Business API**: Direct messaging integration for customer communication