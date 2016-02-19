#!/bin/bash
# Build the Next.js static export and copy it into the repo root
# so GitHub Pages can serve it directly from the master branch.
set -e

cd "$(dirname "$0")/.."

npm run build

rm -rf _next images _not-found
cp -r out/_next .
cp -r out/images .
cp -r out/_not-found .
cp out/*.html out/*.txt .

touch .nojekyll

echo "Static site copied to repo root and ready for GitHub Pages."
