# Image Sync Guide for GTPC Website

## Problem
Images uploaded to the `attached_assets` folder in Replit are not automatically synced to GitHub, which causes them to be missing when the site is deployed.

## Solution

### Method 1: Using the Sync Script (Recommended)
1. In your Replit shell, run:
   ```bash
   ./sync-images-to-github.sh
   ```

### Method 2: Manual Git Commands
1. Add all images to git:
   ```bash
   git add attached_assets/
   ```

2. Commit the images:
   ```bash
   git commit -m "Add GTPC promotional banner images"
   ```

3. Push to GitHub:
   ```bash
   git push origin main
   ```

## Important Images to Sync
- `ChatGPT Image Jul 1, 2025, 04_26_01 PM_1751373630130.png` - Main hero banner image
- `gtpc-logo.png` - Company logo
- `logogtpc_1751358727648.png` - Alternative logo
- Other screenshots and promotional materials

## Verifying Images are Synced
1. Check your GitHub repository at: https://github.com/[your-username]/[your-repo]
2. Navigate to the `attached_assets` folder
3. Ensure all images are visible

## For Future Image Uploads
Whenever you upload new images to Replit:
1. Place them in the `attached_assets` folder
2. Run the sync script or use manual git commands
3. Verify they appear on GitHub

## Troubleshooting
- If images don't appear on the deployed site, check that they're committed to GitHub
- Ensure file names don't have special characters that might cause issues
- Check that the import paths in the code match the actual file names