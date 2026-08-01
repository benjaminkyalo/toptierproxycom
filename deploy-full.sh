#!/bin/bash
set -e
cd /var/www/toptierproxy-new
echo "Starting full deploy..."
rm -rf dist
npm run build
npx tsx scripts/build-search-index.mjs
npx tsx scripts/build-static.mjs
rsync -a --delete dist/ /var/www/toptierproxy/
rsync -a public/go/ /var/www/toptierproxy/go/
rsync -a public/sitemap.xml /var/www/toptierproxy/sitemap.xml
rsync -a public/search-index.json /var/www/toptierproxy/search-index.json
systemctl restart nginx
echo "FULLY DEPLOYED - dist + go redirects + sitemap + nginx restarted"
