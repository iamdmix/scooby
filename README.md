# Scooby

A self-hosted homeserver on OrbStack, wrapped in a Homepage dashboard and exposed through a Cloudflare Tunnel.

## Architecture / Stack

| Service | Port | What it does |
|---------|------|--------------|
| Homepage | 3000 | Dashboard; config lives in `./config` and hot-reloads |
| Portainer | 9443 | Docker management UI |
| Pi-hole | 8080 / 53 | DNS + ad blocking |
| Jellyfin | 8096 | Media server |
| Kavita | 5001 | Library / reading server |
| Dozzle | 8888 | Live container logs (all services) |
| Beszel | 8889 | Server metrics hub (agent on 7222) |
| Cloudflare Tunnel | — | External access via `config.yml` + `cloudflared` |

Media is mounted read-only from `${HOME}/Media`. All state lives in Docker named volumes (`jellyfin_config`, `pihole_config`, `portainer_data`, `n8n_data`, `uptimekuma_data`, etc.).

## Directory Structure

```
~/server/
├── docker-compose.yml     # stack definition
├── .env                   # secrets + API keys (gitignored; copy from .env.example)
├── config.yml             # cloudflared tunnel config (gitignored)
├── config/                # homepage config, mounted into the container
│   ├── settings.yaml      # layout + theme
│   ├── services.yaml      # services + widgets
│   ├── widgets.yaml       # info widgets
│   ├── bookmarks.yaml
│   ├── custom.css         # theme overrides
│   ├── custom.js
│   ├── docker.yaml        # docker socket endpoint (my-docker)
│   └── logs/
└── portfolio/             # Next.js portfolio (separate repo, own docker-compose.yml — runs on 8081)
```

## Related Projects Elsewhere

These live outside `~/server` on purpose:

```
~/dmix-writes/            # personal blog (Next.js) — separate git repo; deploys itself
                          # via ./deploy.sh to port 3002
~/services/
└── mess-menu/            # mess menu API (FastAPI, port 8085) — own docker-compose.yml
```

Each is self-contained: `cd` into it, `docker compose up -d`, push to deploy per its own README.

## Management

```bash
# First setup
cp .env.example .env       # fill in your values
docker compose up -d       # start the whole stack

# Day to day
docker compose ps                     # status
docker compose logs -f <service>      # follow one service's logs
docker compose restart <service>      # restart a single container
docker compose down                  # stop everything (keeps volumes)

# Updating
docker compose pull && docker compose up -d

# Maintenance
docker system prune                  # garbage collection
```

Homepage reads `config/` live — edits to YAML show up without a restart; CSS/JS just need a dashboard refresh.
