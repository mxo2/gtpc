#!/bin/bash

# Script to sync attached_assets images to GitHub

echo "======================================"
echo "GTPC Image Sync to GitHub"
echo "======================================"

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "Error: Not in a git repository. Please run this from your project root."
    exit 1
fi

# Add the attached_assets directory and favicon files to git
echo "Adding attached_assets images and favicon files to git..."
git add attached_assets/
git add client/public/favicon*
git add client/public/manifest.json

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "No new images to sync."
else
    # Commit the images
    echo "Committing images and favicon files..."
    git commit -m "Add GTPC promotional banner images, favicon files and assets"
    
    # Push to GitHub
    echo "Pushing to GitHub..."
    git push origin main
    
    echo "✓ Images successfully synced to GitHub!"
fi

echo ""
echo "Current images in attached_assets:"
ls -la attached_assets/

echo ""
echo "======================================"
echo "Sync complete!"
echo "======================================"