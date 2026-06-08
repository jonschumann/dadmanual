#!/usr/bin/env bash
# export-figma-images.sh
# Downloads all Chapter 4 panel illustrations from the DAD Product Library Figma file.
#
# Usage:
#   FIGMA_TOKEN=your_token_here bash export-figma-images.sh
#
# Get a token: Figma → top-left menu → Settings → Security → Personal access tokens

set -euo pipefail

TOKEN="${FIGMA_TOKEN:-}"
if [[ -z "$TOKEN" ]]; then
  echo "Error: FIGMA_TOKEN is not set."
  echo "Usage: FIGMA_TOKEN=your_token bash export-figma-images.sh"
  exit 1
fi

FILE_KEY="EKSxcfOiOQG5jQ6LE6Qh2P"
DEST="$(dirname "$0")/static/img"
mkdir -p "$DEST"

# Node IDs → output filenames
declare -A NODES=(
  ["10:4"]="ch04-fig01-ax-center-front-panel.png"
  ["16:4"]="ch04-fig02-ax-center-rear-panel.png"
  ["35:7"]="ch04-fig03-core256-front-panel.png"
  ["36:4"]="ch04-fig04-core256-rear-panel.png"
  ["28:7"]="ch04-fig05-ax64-front-panel.png"
  ["30:4"]="ch04-fig06-ax64-rear-panel.png"
  ["41:7"]="ch04-fig07-mom-control-face.png"
  ["87:11"]="ch04-fig08-penta720-front-panel.png"
  ["87:18"]="ch04-fig09-penta721s-front-panel.png"
  ["87:22"]="ch04-fig10-penta721s-rear-panel.png"
)

# Build comma-separated ID list (URL-encode the colons)
IDS=$(IFS=,; echo "${!NODES[*]}" | tr ' ' ',')
IDS_ENCODED=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$IDS', safe=','))")

echo "Requesting export URLs from Figma API..."
RESPONSE=$(curl -s \
  -H "X-Figma-Token: $TOKEN" \
  "https://api.figma.com/v1/images/$FILE_KEY?ids=$IDS_ENCODED&format=png&scale=2")

ERR=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('err') or '')")
if [[ -n "$ERR" && "$ERR" != "None" ]]; then
  echo "Figma API error: $ERR"
  echo "Full response: $RESPONSE"
  exit 1
fi

echo "Downloading images..."
echo ""

# Parse and download each image
for NODE_ID in "${!NODES[@]}"; do
  FILENAME="${NODES[$NODE_ID]}"
  OUT="$DEST/$FILENAME"

  # Extract URL for this node ID from JSON response
  URL=$(echo "$RESPONSE" | python3 -c "
import sys, json
d = json.load(sys.stdin)
images = d.get('images', {})
# Figma returns IDs with ':' encoded as '%3A' sometimes — try both
node = '$NODE_ID'
url = images.get(node) or images.get(node.replace(':', '%3A')) or ''
print(url)
")

  if [[ -z "$URL" || "$URL" == "None" ]]; then
    echo "  SKIP  $FILENAME — no URL returned for node $NODE_ID"
    continue
  fi

  HTTP=$(curl -s -L -o "$OUT" -w "%{http_code}" "$URL")
  SIZE=$(stat -f%z "$OUT" 2>/dev/null || stat -c%s "$OUT" 2>/dev/null || echo 0)
  echo "  $HTTP  $(( SIZE / 1024 ))KB  $FILENAME"
done

echo ""
echo "Done. Images saved to: $DEST"
echo "Restart the Docusaurus dev server if it's running (Ctrl+C then npm start)."
