# FriendWhoCodesWebsite - Progress Tracker

## Project Overview
- **Owner**: Alok Sharma
- **Domain**: friendwhocodes.com
- **Hosting**: Hetzner (accessible via `ssh hetzner`)
- **Repository**: FriendWhoCodesWebsite

---

## Current Status
**Phase**: Initial Planning & Setup

---

## Completed Tasks

### 2026-01-29
- [x] Repository initialized with first commit
- [x] Initial exploration of repo structure
- [x] Created documentation structure (`docs/` folder)
- [x] Created progress tracking file
- [x] Explored Hetzner server infrastructure
- [x] Documented current setup (Docker, PM2, Nginx Proxy Manager)
- [x] Identified deployment patterns used by other projects

---

## In Progress
- [ ] Technology stack decision (recommendation ready)
- [ ] Project structure planning

---

## Pending Tasks

### Setup & Infrastructure
- [ ] Choose frontend framework (Next.js recommended)
- [ ] Initialize project with chosen stack
- [ ] Set up GitHub Actions for CI/CD
- [ ] Configure PM2 on Hetzner
- [ ] Update Nginx Proxy Manager routing

### Website Features
- [ ] Create landing/intro page (About Alok Sharma)
- [ ] Build portfolio/projects section
- [ ] Create contact page
- [ ] Decide on blog: keep WordPress or migrate to MDX

### Content
- [ ] Write intro/about content
- [ ] Gather portfolio projects information
- [ ] Set up contact form functionality

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-29 | Use Next.js + Tailwind | Consistent with existing apps (LyricsFlow), familiar stack |
| 2026-01-29 | Deploy via PM2 | Pattern used by other Next.js apps on server |
| 2026-01-29 | Use GitHub Actions | Automated deployment, no manual SSH needed |
| TBD | Blog approach | Keep WordPress or migrate to MDX? |

---

## Infrastructure Summary
See [infrastructure.md](./infrastructure.md) for full details.

**Key Points:**
- Docker-based infrastructure with Nginx Proxy Manager
- Next.js apps run via PM2 in `/var/www/`
- friendwhocodes.com currently runs WordPress (empty)
- Cloudflare handles DNS and CDN

---

## Notes
- Existing blog at friendwhocodes.com is empty WordPress install
- Other Next.js projects on server: LyricsFlow, Journal apps
- All changes must go through PRs (no direct pushes to main)
