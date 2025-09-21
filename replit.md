# AI-Based Internship Recommendation Engine

## Overview

This is a mobile-first React.js application built for an AI-Based Internship Recommendation Engine, designed to mirror the official Indian government portal aesthetic. The platform connects students with relevant internship opportunities through AI-powered matching algorithms. The application features a comprehensive user interface including a landing page, student dashboard, awareness section, notifications system, and user profiles. It's built as a prototype focusing on the frontend experience with mock data for demonstration purposes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern component patterns
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and caching
- **Tailwind CSS** with custom design system for responsive, mobile-first styling
- **Radix UI** components for accessible, unstyled UI primitives
- **Shadcn/ui** component library built on top of Radix UI for consistent design

### Backend Architecture
- **Express.js** server with TypeScript support
- **In-memory storage** implementation for prototype data persistence
- RESTful API structure with `/api` prefix for all endpoints
- Middleware for request logging and error handling
- Development-specific integrations for Replit environment

### Data Layer
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Zod** schemas for runtime validation and type inference
- Shared schema definitions between client and server
- Mock data implementation for internships, notifications, and user profiles

### State Management
- Local storage hooks for user preferences and saved items
- React Context for language/localization state
- TanStack Query for server state and caching
- Component-level state for UI interactions

### Design System
- **Mobile-first responsive design** with Tailwind CSS breakpoints
- **Government portal aesthetic** with Indian flag elements and official styling
- **CSS custom properties** for consistent theming and color management
- **Component variants** using class-variance-authority for consistent styling patterns

### Internationalization
- Multi-language support for 13 Indian languages
- Translation system with fallback to English
- Language preference persistence in local storage
- Mock translation data structure for demonstration

### User Experience Features
- **Bottom navigation** for mobile with top navigation for desktop
- **Notification system** with unread indicators
- **Saved internships** functionality with local storage persistence
- **AI recommendation engine** simulation with skill and interest matching
- **Responsive card layouts** for internship listings and content sections

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM for component architecture
- **Vite**: Modern build tool with plugin ecosystem for development
- **TypeScript**: Type safety across the entire application stack
- **Express.js**: Node.js web framework for API server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Comprehensive set of accessible, unstyled React components
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating component variants

### Data and State Management
- **TanStack Query**: Server state management with caching and synchronization
- **Drizzle ORM**: Type-safe ORM for database operations
- **Zod**: Schema validation library for runtime type checking
- **React Hook Form**: Form handling with validation integration

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit plugins**: Development environment specific tooling
- **PostCSS**: CSS processing with Autoprefixer plugin

### Database and Storage
- **Neon Database**: Serverless PostgreSQL configured via Drizzle
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Local Storage API**: Browser storage for user preferences and saved data

### Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **Wouter**: Lightweight client-side routing
- **CLSX**: Conditional CSS class utility for dynamic styling