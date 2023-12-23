# ---
# Project dependencies update.
# @see https://www.google.com/intl/es_es/chrome/
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# update
npm i \
  @astrojs/check \
  @astrojs/mdx \
  @astrojs/node \
  @astrojs/react \
  @astrojs/rss \
  @astrojs/sitemap \
  @astrojs/tailwind \
  @astrojs/vercel \
  @tailwindcss/typography \
  @types/react \
  @types/react-dom \
  @vercel/analytics \
  @vercel/speed-insights \
  @vitest/coverage-v8 \
  astro \
  astro-webmanifest \
  react \
  react-dom \
  tailwindcss \
  typescript \
  vitest
