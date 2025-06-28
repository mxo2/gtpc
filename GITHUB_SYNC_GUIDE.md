# Sync Replit to GitHub - Simple Guide

## Step 1: Create GitHub Repository

1. Go to **github.com** and login
2. Click **"New"** button (green button)
3. Repository name: **`gtpc-website`**
4. Make it **Public**
5. **Don't check** "Initialize with README"
6. Click **"Create repository"**

## Step 2: Copy Your GitHub URL

After creating, GitHub will show you a URL like:
```
https://github.com/YOUR_USERNAME/gtpc-website.git
```
Copy this URL - you'll need it in the next step.

## Step 3: Run These Commands in Replit Shell

Open Shell tab in Replit and run these commands **one by one**:

```bash
# 1. Add all your files
git add .

# 2. Commit your changes
git commit -m "Complete GTPC website with legal pages and payments"

# 3. Connect to GitHub (replace YOUR_USERNAME with your actual username)
git remote add origin https://github.com/YOUR_USERNAME/gtpc-website.git

# 4. Push to GitHub
git push -u origin main
```

## Step 4: Enter Your GitHub Credentials

When prompted, enter:
- **Username**: Your GitHub username
- **Password**: Your GitHub password OR personal access token

## That's It! 

Your code is now on GitHub and will sync automatically!

## Daily Workflow (After Setup)

Whenever you make changes in Replit:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

## Benefits You Get

✅ **Automatic Backup**: Code safely stored on GitHub
✅ **Version Control**: Track all changes with history
✅ **Free Website Hosting**: Deploy on Vercel/Railway
✅ **Automatic Updates**: Website updates when you push changes

## Need Help?

If you get stuck on any step, just ask and I'll help you troubleshoot!