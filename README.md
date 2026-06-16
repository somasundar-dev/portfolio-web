# Somasundar-Dev Portfolio

> Building cloud-native systems with .NET, Angular & AWS — 7 years crafting scalable, production-grade software.

[![Angular](https://img.shields.io/badge/Angular-19-red?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-orange?logo=amazon-aws)](https://aws.amazon.com/)
[![.NET](https://img.shields.io/badge/.NET-Core-purple?logo=.net)](https://dotnet.microsoft.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](#license)

## 🚀 Overview

This is a fully-featured portfolio web application built with **Angular 19** showcasing **7 years** of enterprise software engineering experience. It demonstrates modern cloud-native architecture with serverless backend infrastructure, featuring:

- **Responsive portfolio platform** for showcasing projects, skills, and experience
- **Serverless backend** with AWS Lambda, DynamoDB, and Cognito authentication
- **Infrastructure as Code** with Terraform for reproducible AWS deployments
- **Real-time content management** backed by DynamoDB
- **Production-grade** with 99.9% uptime and sub-5 minute deployments
- **Optimized performance** with lazy loading, animations, and mobile responsiveness

## ✨ Features

- **Hero Section** – Professional introduction as "Senior Software Engineer"
- **About Section** – Expertise in backend architecture, cloud infrastructure, and DevOps
- **Core Competencies** – Highlighted strengths in .NET, AWS, CI/CD, and Angular
- **Skills Dashboard** – Comprehensive tech stack visualization including:
  - **Backend:** C#, .NET Core, Node.js, Python
  - **Frontend:** Angular, React, TypeScript
  - **Databases:** MS SQL, PostgreSQL, MongoDB, DynamoDB
  - **Cloud & DevOps:** AWS, Azure, Docker, Terraform
  - **Messaging:** Kafka
- **Featured Projects** – Showcasing production applications including:
  - Cloud-Native Portfolio CMS (Angular, Lambda, DynamoDB, Cognito, Terraform)
  - Enterprise Payment Gateway (10K+ TPS, .NET Core, Azure, Redis, PostgreSQL)
  - DevOps Pipeline Automation (GitHub Actions, Terraform, AWS, Docker)
- **Experience Timeline** – Career progression across finance, retail, travel, and SaaS domains
- **GitHub Integration** – Live GitHub activity and repository links
- **Contact Form** – Direct messaging capability
- **Smooth Animations** – Scroll-reveal effects and cursor-glow interactions
- **Mobile Optimized** – Fully responsive across all screen sizes

## 🛠️ Tech Stack

### Frontend

- **Angular 19** – Modern component-based framework with standalone components
- **TypeScript 5.7** – Strongly-typed JavaScript with advanced patterns
- **SCSS** – Advanced styling with variables, mixins, and modular architecture
- **RxJS** – Reactive programming for async operations

### Backend & Infrastructure

- **AWS Lambda** – Serverless API endpoints for content delivery
- **Amazon DynamoDB** – NoSQL database for portfolio content management
- **Amazon Cognito** – User authentication and authorization
- **AWS S3 & CloudFront** – Static asset hosting and CDN distribution

### Backend Expertise (in Professional Work)

- **.NET Core & C#** – Enterprise backend systems and microservices
- **ASP.NET MVC** – Full-stack web applications
- **Node.js** – JavaScript runtime for backend services
- **Python** – Data processing and automation scripts

### Databases & Storage

- **MS SQL Server** – Enterprise relational database
- **PostgreSQL** – Advanced SQL for analytics
- **MongoDB** – Document-based NoSQL
- **DynamoDB** – AWS managed NoSQL

### DevOps & Infrastructure

- **Terraform** – Infrastructure as Code for reproducible deployments
- **Docker** – Containerization for consistent environments
- **GitHub Actions** – CI/CD pipeline automation
- **Azure** – Alternative cloud platform experience
- **Kafka** – Event streaming and messaging

## 📋 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ or **yarn** 4+
- **Git** for version control
- (Optional) **Angular CLI** globally: `npm install -g @angular/cli`
- (Optional) **Terraform** 1.5+ for infrastructure management

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Somasundar-Dev/portfolio-web.git
cd portfolio-web

# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm run start

# Application will be available at http://localhost:4200
```

### Production Build

```bash
# Build optimized production bundle
npm run build

# Output will be in dist/apps/portfolio
```

### Testing

```bash
# Run unit tests
npm run test

# Run linting
npm run lint
```

## � Professional Experience

| Role                     | Company                      | Domain                             | Period            | Technologies                                                               |
| ------------------------ | ---------------------------- | ---------------------------------- | ----------------- | -------------------------------------------------------------------------- |
| **Senior Consultant**    | Capgemini                    | Cloud-Native & Custom Applications | 08/2024 – Present | .NET Core, C#, AWS, Angular, Terraform, Python, MongoDB, Kafka, SQL Server |
| **Project Manager**      | Novac Technology Solutions   | Retail, Inventory & Finance        | 08/2024 – 12/2020 | .NET Core, C#, Azure, PostgreSQL, React, Kafka                             |
| **Dotnet/Web Developer** | Shreyas Technology Solutions | Travel & Aviation                  | 09/2019 – 12/2020 | ASP.NET MVC, C#, JavaScript, SQL Server                                    |

**Summary:** 7 years delivering enterprise applications, microservices, and DevOps pipelines across finance and SaaS domains.

---

---

## 🏆 Featured Projects

### 1. Cloud-Native Portfolio CMS

**Category:** Full Stack | **Status:** Production

A serverless portfolio platform demonstrating modern cloud architecture with Angular frontend, Lambda APIs, and content management via DynamoDB.

- **Tech Stack:** Angular, AWS Lambda, DynamoDB, Cognito, Terraform
- **Metrics:**
  - ⚡ Deploy Time: < 5 minutes
  - 🔒 Uptime: 99.9%
- **Key Features:** Serverless backend, authentication, IaC deployments
- **Repository:** [View on GitHub](https://github.com)

### 2. Enterprise Payment Gateway

**Category:** Backend | **Status:** Production

High-throughput payment processing microservice handling over 10,000 transactions per second with enterprise-grade performance and reliability.

- **Tech Stack:** .NET Core, Azure, Redis, PostgreSQL
- **Metrics:**
  - 🚀 Throughput: 10K+ TPS
  - ⏱️ Latency: < 50ms
- **Key Features:** Microservices, caching, high-concurrency processing
- **Repository:** [View on GitHub](https://github.com)

### 3. DevOps Pipeline Automation

**Category:** DevOps | **Status:** Production

Multi-environment CI/CD pipeline with automated blue-green deployments and Infrastructure as Code orchestration.

- **Tech Stack:** GitHub Actions, Terraform, AWS, Docker
- **Metrics:**
  - 📦 Deploy Frequency: Daily
  - ⏲️ Lead Time: < 1 hour
- **Key Features:** Automated deployments, multi-environment support, IaC
- **Repository:** [View on GitHub](https://github.com)

---

## �📁 Project Structure

```
portfolio-web/
├── apps/
│   └── portfolio/                    # Main Angular application
│       ├── src/
│       │   ├── app/
│       │   │   ├── features/         # Feature modules
│       │   │   │   ├── home/         # Home page (lazy-loaded)
│       │   │   │   │   ├── about/    # About section
│       │   │   │   │   ├── experience/
│       │   │   │   │   ├── github/
│       │   │   │   │   ├── hero/
│       │   │   │   │   ├── projects/
│       │   │   │   │   └── skills/
│       │   │   │   └── contact/      # Contact page
│       │   │   ├── layout/           # Shared layout components
│       │   │   │   ├── header/
│       │   │   │   └── footer/
│       │   │   ├── shared/           # Reusable directives & pipes
│       │   │   ├── services/         # Application services
│       │   │   ├── models/           # TypeScript interfaces
│       │   │   └── data/             # Static content
│       │   ├── styles.scss           # Global styles
│       │   ├── main.ts               # Application entry point
│       │   └── environments/         # Environment configs
│       └── public/                   # Static assets
├── infra/                            # Terraform infrastructure definitions
│       ├── portfolio/                # Main portfolio infrastructure
│       └── portfolio-infra/          # Supporting infrastructure
├── eslint.config.js                  # ESLint configuration
├── tsconfig.json                     # TypeScript configuration
├── angular.json                      # Angular CLI configuration
└── package.json                      # Project dependencies

```

## 🔧 Configuration

### Environment Variables

Create `.env` files for environment-specific configuration:

```bash
# .env.local
NG_APP_API_ENDPOINT=http://localhost:3000
NG_APP_COGNITO_CLIENT_ID=your_cognito_client_id
NG_APP_COGNITO_REGION=us-east-1
```

### Angular Build Configuration

Production builds are optimized in `angular.json`:

- Code splitting and lazy loading enabled
- Tree-shaking for dead code elimination
- Minification and compression
- Source maps for debugging

## ☁️ AWS Deployment with Terraform

Infrastructure configurations are located in the `infra/` directory with modular, reusable Terraform modules:

```
infra/
├── portfolio/              # Main portfolio application infrastructure
│   ├── main.tf             # Primary resource definitions
│   ├── variables.tf        # Input variables
│   ├── locals.tf           # Local values
│   ├── provider.tf         # AWS provider configuration
│   ├── backend.tf          # Remote state backend
│   └── tfplan              # Saved deployment plan
└── portfolio-infra/        # Supporting infrastructure
    ├── main.tf
    ├── variables.tf
    ├── provider.tf
    ├── backend.tf
    └── tfplan
```

### Deploy to AWS

```bash
# Navigate to portfolio infrastructure
cd infra/portfolio

# Initialize Terraform
terraform init

# Review planned changes
terraform plan -out=tfplan

# Apply infrastructure changes
terraform apply tfplan
```

### AWS Resources Deployed

- **Lambda Functions** – Serverless API endpoints for portfolio data
- **DynamoDB Tables** – Content management backend with optional auto-scaling
- **Cognito User Pools** – Authentication and authorization
- **CloudFront** – Content Delivery Network for global distribution
- **S3 Buckets** – Website hosting and asset storage
- **IAM Roles & Policies** – Least-privilege access control
- **CloudWatch** – Logging and monitoring

### Infrastructure as Code Benefits

✅ **Reproducible** – Consistent deployments across environments  
✅ **Version Controlled** – Track infrastructure changes in Git  
✅ **Automated** – Deploy with single command  
✅ **Scalable** – Easily replicate to different regions  
✅ **Documented** – Code serves as living documentation

## 🎨 Customization & Content Management

### Update Portfolio Content

All portfolio content is centralized in [`apps/portfolio/src/app/data/sample-content.ts`](apps/portfolio/src/app/data/sample-content.ts). Modify this file to customize:

```typescript
export const SAMPLE_CONTENT: PublicContent = {
  hero: {
    name: "Somasundar",
    title: "Senior Software Engineer",
    tagline:
      "Building cloud-native systems with .NET, Angular & AWS — 7 years crafting scalable, production-grade software.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
  },
  about: {
    bio: "I am a software engineer passionate about building robust backend systems...",
    experienceSummary:
      "7 years delivering enterprise applications, microservices, and DevOps pipelines...",
    strengths: [
      "Backend architecture with .NET Core & microservices",
      "Cloud infrastructure on AWS",
      "DevOps, CI/CD, and Infrastructure as Code",
      "Modern frontend with Angular & TypeScript",
    ],
  },
  skills: [
    { name: "C#", category: "Backend", sortOrder: 1 },
    { name: ".NET / .NET Core", category: "Backend", sortOrder: 2 },
    // ... more skills
  ],
  projects: [
    {
      title: "Cloud-Native Portfolio CMS",
      summary: "Serverless portfolio platform with Angular frontend...",
      techStack: ["Angular", "AWS Lambda", "DynamoDB", "Cognito", "Terraform"],
      impactMetrics: [
        { label: "Deploy Time", value: "< 5 min" },
        { label: "Uptime", value: "99.9%" },
      ],
      // ... more fields
    },
    // ... more projects
  ],
  experience: [
    {
      role: "Senior Consultant",
      company: "Capgemini",
      domain: "Cloud-Native & Custom Applications Development",
      // ... more fields
    },
    // ... more experiences
  ],
};
```

### Styling & Theme

Global styles in [`apps/portfolio/src/styles.scss`](apps/portfolio/src/styles.scss) use CSS variables for theming:

```scss
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  // ... customize theme variables
}
```

### Component Hierarchy

- **Home Feature** (Lazy-loaded main page)
  - Hero Section
  - About Section
  - Skills Dashboard
  - Projects Showcase
  - Experience Timeline
  - GitHub Section
- **Contact Feature** (Separate route)
- **Layout Components**
  - Header with Navigation
  - Footer with Links

## ⚙️ Services & Directives

### Services

- **ContentService** (`apps/portfolio/src/app/services/content.service.ts`)
  - Manages portfolio content delivery
  - Integrates with AWS Lambda & DynamoDB

### Custom Directives

- **ScrollRevealDirective** (`apps/portfolio/src/app/shared/directives/scroll-reveal.directive.ts`)
  - Triggers animations on element visibility
  - Smooth reveal effects on scroll

- **CursorGlowDirective** (`apps/portfolio/src/app/shared/directives/cursor-glow.directive.ts`)
  - Interactive cursor-following effects
  - Enhances user engagement

## 📊 Performance Optimizations

- **Lazy-loaded routes** for optimal initial load time
- **OnPush change detection** strategy in components
- **CSS Grid & Flexbox** for efficient, responsive layouts
- **SCSS mixins** for maintainable, DRY styling
- **Angular's AOT compiler** in production builds
- **Gzip compression** enabled on CDN
- **Component-level styling** to prevent style leakage
- **Efficient RxJS** subscriptions with takeUntil pattern

## 📝 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm start`     | Start development server |
| `npm run build` | Build production bundle  |
| `npm run test`  | Run unit tests           |
| `npm run lint`  | Run ESLint analysis      |
| `npm run ng`    | Run Angular CLI commands |

## 🔐 Security

- **HTTPS** enabled in production
- **Content Security Policy (CSP)** headers configured
- **CORS** properly configured for API endpoints
- **Cognito IAM policies** restrict DynamoDB access
- **Environment variables** for sensitive configuration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Somasundar** – [@Somasundar-Dev](https://github.com/Somasundar-Dev)

For inquiries or opportunities, use the contact form on the portfolio or reach out directly on GitHub.

---

**Built with ❤️ using Angular, AWS, and Terraform**

These scripts map to the Angular CLI targets defined in `angular.json`.

## Dependencies

This project uses Angular 19 and related packages. Primary dependencies are listed in `package.json`.
