# sentinel

A self-hosted homeserver stack running on Docker, exposed via Cloudflare Tunnel.

## Services

| Service | Port | Description |
|---------|------|-------------|
| [Jellyfin](http://localhost:8096) | 8096 | Media server |
| Portfolio | 3002 | Personal website (Next.js) |
| [Portainer](http://localhost:9443) | 9443 | Docker management UI |
| Pi-hole | 8080 | Network-wide ad blocking / DNS |
| [Uptime Kuma](http://localhost:3001) | 3001 | Uptime monitoring |
| Homepage | 3000 | Dashboard |
| Actual Budget | — | Budgeting |
| n8n | 5678 | Automation |

## Getting Started

1. Copy the example env and fill in your values:
   ```bash
   cp .env.example .env
   ```
2. Start all services:
   ```bash
   docker compose up -d
   ```
3. Stop all services:
   ```bash
   docker compose down
   ```

## Cloudflare Tunnel

The stack is exposed publicly via a Cloudflare Tunnel. Set `CLOUDFLARE_TUNNEL_ID` and `CLOUDFLARE_CREDENTIALS_FILE` in `.env` before starting.

## Stack

- Docker + Docker Compose (OrbStack)
- Cloudflare Tunnel (`cloudflared`)
- Homepage dashboard + Uptime Kuma for status
