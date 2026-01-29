# Project Requirements

## Site Overview
A personal portfolio and coding website for **Alok Sharma** at **friendwhocodes.com**.

---

## Pages Required

### 1. Home / Landing Page
- Introduction about Alok Sharma
- Brief overview / tagline
- Navigation to other sections
- Potentially featured projects

### 2. About Me
- Detailed bio
- Skills and expertise
- Experience / background
- Possibly: resume/CV download

### 3. Portfolio / Projects
- Showcase of coding projects
- Project cards with:
  - Title
  - Description
  - Tech stack used
  - Links (GitHub, live demo)
  - Screenshots/images

### 4. Contact
- Contact form
- Social links (GitHub, LinkedIn, Twitter, etc.)
- Email address

### 5. Blog (Separate Section)
- Existing blog to be integrated
- Currently empty but infrastructure exists on Hetzner
- Will be a distinct section of the site

---

## Technical Requirements

### Hosting & Deployment
- **Host**: Hetzner server
- **Access**: via `ssh hetzner`
- **CI/CD**: GitHub Actions (automated deployment)
- **Domain**: friendwhocodes.com

### Git Workflow
- Main branch protected
- All changes via Pull Requests
- No direct pushes to main

---

## Decisions Needed

### 1. Frontend Framework
Options to consider:
- **Next.js** - React-based, great for SSR/SSG, large ecosystem
- **Astro** - Modern, fast, content-focused, multi-framework support
- **SvelteKit** - Svelte-based, fast, growing ecosystem
- **Hugo/Jekyll** - Static site generators (simpler but less flexible)

### 2. Styling Approach
- Tailwind CSS
- CSS Modules
- Styled Components
- Plain CSS/SCSS

### 3. Blog Integration
- Same framework (unified)
- Keep blog separate (subdomain/subdirectory)
- MDX for blog posts vs CMS

### 4. Contact Form
- Email service (Formspree, EmailJS, custom backend)
- Self-hosted solution on Hetzner

### 5. Deployment Strategy
- Docker container
- Direct file deployment
- Static build + nginx

---

## Current Infrastructure (Hetzner)
- Server has existing blog setup (empty)
- Need to verify: OS, web server (nginx/apache), Node.js availability
- SSH access configured as `hetzner`
