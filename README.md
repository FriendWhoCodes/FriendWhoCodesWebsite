# FriendWhoCodesWebsite

Personal portfolio website for Alok Sharma.

**Live at**: [friendwhocodes.com](https://friendwhocodes.com)

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Theming**: next-themes (dark mode support)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── portfolio/      # Portfolio page
│   └── contact/        # Contact page
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About content
│   ├── Portfolio.tsx   # Projects grid
│   ├── Contact.tsx     # Contact form
│   └── ...
└── docs/               # Documentation
```

## Deployment

Automated deployment via GitHub Actions on push to `main`.

### Required GitHub Secrets

- `HETZNER_HOST` - Server IP/hostname
- `HETZNER_USER` - SSH username (usually `root`)
- `HETZNER_SSH_KEY` - Private SSH key

### Manual Deployment

```bash
ssh hetzner
cd /var/www/friendwhocodes
git pull
npm install
npm run build
pm2 restart friendwhocodes
```

## Contributing

All changes must go through Pull Requests. No direct pushes to main.
