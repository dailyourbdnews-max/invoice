# Overview

InvoicePro is a full-stack web application for creating, managing, and generating professional invoices. The application features a modern React frontend with shadcn/ui components and a Node.js/Express backend with PostgreSQL database integration. Users can create invoices with customizable line items, apply taxes and discounts, save invoices locally, and generate printable versions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using TypeScript and follows a component-based architecture:

- **UI Framework**: shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query (React Query) for server state and local React state for UI
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Storage**: Browser localStorage for invoice persistence (InvoiceStorage class)
- **Build Tool**: Vite with React plugin and development optimizations

The frontend follows a feature-based structure with reusable UI components, custom hooks, and TypeScript interfaces for type safety. The main invoice functionality is split across InvoiceForm, InvoicePreview, and RecentInvoices components.

## Backend Architecture
The server uses Express.js with TypeScript in a modular architecture:

- **Framework**: Express.js with middleware for JSON parsing, CORS, and logging
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schemas between client and server using Drizzle and Zod
- **Storage Interface**: Abstracted storage layer (IStorage) with in-memory implementation for development
- **Development**: Vite integration for HMR and development server

The backend is structured with separate concerns for routes, storage, and server setup. The storage layer uses an interface pattern allowing easy switching between implementations.

## Data Architecture
- **Database**: PostgreSQL with Drizzle ORM migrations
- **Schema**: User table with UUID primary keys, username/password fields
- **Type Safety**: Shared TypeScript types generated from database schema
- **Validation**: Zod schemas for runtime validation of API inputs/outputs

## Authentication & Security
Currently implements basic user schema structure but no active authentication middleware. The application is prepared for session-based authentication with connect-pg-simple for PostgreSQL session storage.

# External Dependencies

## Core Framework Dependencies
- **React 18** with TypeScript for the frontend application
- **Express.js** for the Node.js server framework
- **Vite** as the build tool and development server

## Database & ORM
- **PostgreSQL** as the primary database (configured via DATABASE_URL)
- **Drizzle ORM** for type-safe database operations and migrations
- **@neondatabase/serverless** for PostgreSQL connection handling

## UI & Styling
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling
- **Radix UI** components for accessibility and behavior (@radix-ui/*)
- **Lucide React** for consistent iconography

## State & Data Management
- **TanStack Query** for server state management and caching
- **React Hook Form** for form state and validation
- **Zod** for schema validation and TypeScript integration

## Development & Build Tools
- **TypeScript** for static type checking across the stack
- **ESBuild** for fast production builds
- **tsx** for TypeScript execution in development
- **@replit/vite-plugin-runtime-error-modal** for development error handling

## Session & Storage
- **connect-pg-simple** for PostgreSQL-backed session storage
- **nanoid** for generating unique identifiers