# LeagueLedger

LeagueLedger is a fantasy league reputation and discovery platform.

The goal of this application is to provide a trusted space where fantasy sports players can:

- Discover open fantasy leagues
- Evaluate commissioner reliability
- View league longevity and activity history
- Assess trade fairness metrics
- Rate and review leagues
- Make informed decisions before joining

The platform is designed to be sport-agnostic and support football, basketball, baseball, soccer, and other fantasy formats.

This project is being built with scalability and clean architecture in mind, following a monorepo-style structure.

---

# Tech Stack

Frontend:
- React + Vite (for project initialization https://vite.dev/guide/)
- TypeScript
- Tailwind CSS (https://tailwindcss.com/)
- React Router (Client side page routing https://reactrouter.com/start/declarative/routing)

Backend (planned / in progress):
- Node.js (API layer)
- PostgreSQL
- Supabase ?

Containerization (Docker):
- Multi-stage Docker build for production-ready frontend image
- Nginx used to serve static assets

---

# Project Structure
```
LEAGUELEDGER/
│
├── apps/
│   ├── web/        # React + Vite frontend
│   └── api/        # Backend API (planned / in progress)
│
├── docs/           # Architecture notes, specs, diagrams
├── packages/       # Shared types/utilities (future)
│
└── README.md
```


### apps/web

The frontend application was scaffolded using:  
`npm create vite@latest`

Configured with:
- React
- TypeScript

Vite is used for:
- Fast local development
- Optimized production builds
- Modern ES module support

The production build outputs static assets into: `apps/web/dist`


These assets are served via Nginx in Docker.

---

# Running Locally (Without Docker)

## 1. Install Dependencies

From the web app directory:  
`cd apps/web`  
`npm install`

## 2. Start Development Server

`npm run dev`

The app will run at: http://localhost:5173


Vite provides:
- Hot module reloading
- Fast refresh
- Development build optimizations

---

# Running with Docker (Production Mode)

A multi-stage Dockerfile is configured inside: `apps/web/Dockerfile`

It performs:

1. Build stage using Node
2. Serve stage using Nginx

## 1. Build the Docker Image (Requires Docker Desktop)

From inside `apps/web`:  
`docker build -t [desired-image-name] .`

## 2. Run the Container

`docker run -p 8080:80 [desired-image-name]`  
Open: http://localhost:8080

This runs the optimized production build served through Nginx.

---

# Future Expansion

Planned additions include:

- Backend API service (`apps/api`)
- Authentication system
- Commissioner trust scoring algorithm
- League reputation scoring engine
- PostgreSQL database integration
- Docker Compose for full-stack orchestration
- CI/CD pipeline

---

# Development Philosophy

This project is structured with long-term scalability in mind:

- Monorepo organization (?)
- Clear separation of concerns
- Container-first deployment strategy
- Backend extensibility
- Shared packages for type safety

The goal is to build this platform using production-grade architecture practices rather than a single-folder prototype approach.

---

# License

TBD

