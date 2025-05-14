#!/bin/bash

# Create PNG versions of the favicon
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/logo.svg -resize 180x180 public/apple-touch-icon.png
convert public/logo.svg -resize 192x192 public/logo192.png
convert public/logo.svg -resize 512x512 public/logo512.png

echo "Favicons generated successfully!" 