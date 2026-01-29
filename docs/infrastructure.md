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
| friendwhocodes-wordpress | wordpress:latest | Current blog (to be replaced) |
| friendwhocodes-db | mysql:8.0 | WordPress database |
| wisqral-web | nginx:alpine | Static site |
| manofwisdom-wordpress | wordpress:latest | WordPress site |
| devishaktipeetha-wordpress | wordpress:latest | WordPress site |
| uptime-kuma | louislam/uptime-kuma | Monitoring |
| n8n | n8nio/n8n | Automation |

### PM2 Managed Apps (Next.js)
| App | Location | Status |
|-----|----------|--------|
| lyricsflow | /var/www/LyricsFlow | online |
| goal-setter | /var/www/Journal/goal-setter | online |
| time-views | /var/www/Journal/time-views | online |
| mow-homepage | /var/www/Journal/homepage | online |

---

## Directory Structure

```
/var/www/
├── Journal/          # Monorepo with multiple Next.js apps
│   ├── goal-setter/
│   ├── homepage/
│   └── time-views/
└── LyricsFlow/       # Next.js app

~/wordpress-sites/
├── friendwhocodes.com/
│   ├── docker-compose.yml
│   ├── wordpress-data/
│   └── db-data/
├── nginx-proxy-manager/
├── wisqral.com/
│   ├── docker-compose.yml
│   └── html/           # Static files
└── ...
```

---

## Routing

- **Nginx Proxy Manager** handles all incoming traffic
- Routes to appropriate Docker container or PM2 app
- **Cloudflare** sits in front for DNS, CDN, and additional SSL

---

## friendwhocodes.com - Current State

Currently running as **WordPress** in Docker:
- Container: `friendwhocodes-wordpress`
- Database: `friendwhocodes-db`
- Data: `~/wordpress-sites/friendwhocodes.com/wordpress-data`

**Plan**: Replace WordPress with a Next.js portfolio site

---

## Deployment Patterns

### Pattern 1: Static Site (Docker)
Used by: wisqral.com
```yaml
services:
  web:
    image: nginx:alpine
    volumes:
      - ./html:/usr/share/nginx/html:ro
    networks:
      - proxy-network
```

### Pattern 2: Next.js App (PM2)
Used by: LyricsFlow, Journal apps
```bash
# Deploy to /var/www/
cd /var/www/AppName
git pull
npm install
npm run build
pm2 restart app-name
```

---

## Recommended Approach for friendwhocodes.com

Based on existing infrastructure, **Pattern 2 (Next.js + PM2)** is recommended:

1. **Framework**: Next.js (consistent with LyricsFlow)
2. **Styling**: Tailwind CSS (already used in other projects)
3. **Location**: `/var/www/friendwhocodes`
4. **Process Manager**: PM2
5. **Routing**: Nginx Proxy Manager → localhost:PORT

### GitHub Actions Workflow
```
Push to main → SSH to Hetzner → git pull → npm install → npm build → pm2 restart
```

### Migration Plan
1. Build new Next.js site
2. Deploy to /var/www/friendwhocodes
3. Add to PM2
4. Update Nginx Proxy Manager to point to new app
5. (Optional) Keep WordPress for /blog subdirectory or remove entirely
