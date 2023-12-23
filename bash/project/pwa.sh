# ---
# Build PWA.
# @see https://developer.mozilla.org/es/docs/Web/Progressive_web_apps
# ---

# build
npm run clean
npm run build

find .vercel/output/static -type f > src/pwa.json

echo "[" > src/pwa_temp.json
echo "  \"/\"," >> src/pwa_temp.json

first_line=true

while IFS= read -r line; do
  echo "  \"${line}\"," >> src/pwa_temp.json
done < src/pwa.json

sed -i '$ s/.$//' src/pwa_temp.json

echo "]" >> src/pwa_temp.json

sed -i 's/\.vercel\/output\/static//g' src/pwa_temp.json

mv src/pwa_temp.json src/pwa.json
