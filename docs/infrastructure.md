# Infrastructure Documentation

## Hetzner Server Overview

The server runs a Docker-based infrastructure with PM2 for Node.js apps.

### Access
```bash
ssh hetzner
```

---

## Current Services

### Docker Containers
| Container | Image | Purpose |
|-----------|-------|---------|
| nginx-proxy-manager | jc21/nginx-proxy-manager | Reverse proxy & SSL |
| friendwhocodes-wordpress | wordpress:latest | Old blog (to be replaced) |
| friendwhocodes-db | mysql:8.0 | WordPress database |
| wisqral-web | nginx:alpine | Static site |
| Other WordPress sites | wordpress:latest | manofwisdom, devishaktipeetha |
| uptime-kuma | louislam/uptime-kuma | Monitoring |
| n8n | n8nio/n8n | Automation |

### PM2 Managed Apps (Next.js)
| App | Location | Port | Status |
|-----|----------|------|--------|
| lyricsflow | /var/www/LyricsFlow | 3001 | online |
| goal-setter | /var/www/Journal/goal-setter | - | online |
| time-views | /var/www/Journal/time-views | - | online |
| **friendwhocodes** | /var/www/friendwhocodes | 3005 | online |

---

## Deployment Setup for friendwhocodes

### 1. Clone Repository
```bash
ssh hetzner
cd /var/www
git clone git@github.com:FriendWhoCodes/FriendWhoCodesWebsite.git friendwhocodes
cd friendwhocodes
npm install
npm run build
```

### 2. Register with PM2
```bash
pm2 start npm --name "friendwhocodes" -- start
pm2 save
```

### 3. Configure Nginx Proxy Manager
- Add new Proxy Host
- Domain: friendwhocodes.com
- Forward to: localhost:3005
- Enable SSL with Let's Encrypt

### 4. GitHub Secrets
Add these secrets to the repository (Settings > Secrets > Actions):
- `HETZNER_HOST` - Server IP
- `HETZNER_USER` - `root`
- `HETZNER_SSH_KEY` - Private SSH key content

---

## Cloudflare Configuration
- DNS managed by Cloudflare
- Proxy enabled for CDN/caching
- SSL mode: Full (strict)
