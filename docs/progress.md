# FriendWhoCodesWebsite - Progress Tracker

## Project Overview
- **Owner**: Alok Sharma
- **Domain**: friendwhocodes.com
- **Hosting**: Hetzner (accessible via `ssh hetzner`)
- **Repository**: FriendWhoCodesWebsite

---

## Current Status
**Phase**: Scaffold Complete - Ready for Content

---

## Completed Tasks

### 2026-01-29
- [x] Repository initialized with first commit
- [x] Explored Hetzner server infrastructure
- [x] Documented current setup (Docker, PM2, Nginx Proxy Manager)
- [x] Created documentation structure (`docs/` folder)
- [x] **Initialized Next.js project with Tailwind CSS**
- [x] **Created base components (Header, Footer, ThemeToggle)**
- [x] **Created page components (Hero, About, Portfolio, Contact)**
- [x] **Set up GitHub Actions deployment workflow**
- [x] **Created project structure (app router pages)**

---

## Pending Tasks

### Infrastructure
- [ ] Configure GitHub secrets for deployment
- [ ] Clone repo to `/var/www/friendwhocodes` on Hetzner
- [ ] Register app with PM2
- [ ] Update Nginx Proxy Manager routing

### Content (Awaiting Resume)
- [ ] Update Hero section with bio/tagline
- [ ] Populate About page with skills and experience
- [ ] Add real projects to Portfolio
- [ ] Configure contact form submission
- [ ] Add profile photo
- [ ] Update social links (LinkedIn, etc.)

### Future
- [ ] Set up blog subdomain (blog.friendwhocodes.com)
- [ ] SEO optimization
- [ ] Analytics integration

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-29 | Next.js + Tailwind | Consistent with existing apps (LyricsFlow) |
| 2026-01-29 | Deploy via PM2 | Pattern used by other Next.js apps on server |
| 2026-01-29 | GitHub Actions | Automated deployment on push to main |
| 2026-01-29 | Defer blog | Will use blog.friendwhocodes.com subdomain later |

---

## GitHub Secrets Required

```
HETZNER_HOST     = <server IP>
HETZNER_USER     = root
HETZNER_SSH_KEY  = <private SSH key>
```
