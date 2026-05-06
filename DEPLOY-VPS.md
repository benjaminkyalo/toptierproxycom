# Deploying ToptierProxy.com to your Truehost VPS (Path B — static hosting)

This site is built with TanStack Start. For your VPS we ship it as a **plain static site** served by Nginx — no Node.js process, no Cloudflare Workers required.

## What changed for static hosting

- **`/robots.txt` and `/sitemap.xml`** → now generated as real files in `public/` by `scripts/build-static.mjs`, so they end up in `dist/` after build.
- **`/go/<slug>` affiliate redirects** → generated as static `dist/go/<slug>/index.html` files using HTML `<meta http-equiv="refresh">` + `location.replace()` (works without any server logic). Nginx adds the `X-Robots-Tag: noindex, nofollow` header.
- The original server routes (`src/routes/go.$slug.ts`, `robots[.]txt.ts`, `sitemap[.]xml.ts`) are kept intact so the Lovable preview keeps working — Nginx just serves the static versions first.

## One-time VPS setup

```bash
# Node 20+ and Nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs nginx git certbot python3-certbot-nginx

# Clone your repo
sudo mkdir -p /var/www && cd /var/www
sudo git clone https://github.com/<you>/<repo>.git toptierproxy-src
sudo chown -R $USER:$USER toptierproxy-src

# Nginx config
sudo cp /var/www/toptierproxy-src/deploy/nginx.conf /etc/nginx/sites-available/toptierproxy
sudo ln -s /etc/nginx/sites-available/toptierproxy /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# HTTPS
sudo certbot --nginx -d toptierproxy.com -d www.toptierproxy.com
```

## Build & deploy (run on the VPS each update)

```bash
cd /var/www/toptierproxy-src
git pull
npm ci
node scripts/build-static.mjs   # generates robots.txt, sitemap.xml, /go/* redirects
npm run build                   # produces dist/
sudo rsync -a --delete dist/ /var/www/toptierproxy/
```

Optionally automate with a `deploy.sh` or a Git post-receive hook.

## DNS

In Truehost / your registrar, point `toptierproxy.com` (A record) and `www` (A or CNAME) to your VPS IP. Allow up to a few hours for propagation.

## Notes

- Lovable preview / Cloudflare build is **untouched** — same project still works in Lovable.
- If you ever change provider affiliate URLs, re-run `node scripts/build-static.mjs` and redeploy.
- The Nginx config already includes gzip, long-cache for hashed `/assets/`, security headers, and SPA fallback.
