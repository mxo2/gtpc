# GTPC Website - Automatic GitHub & Deployment Setup

## Overview

This guide will help you set up automatic syncing of your code changes to GitHub and automatic website deployment. Once set up, any changes you make in Replit will automatically:

1. Upload to your GitHub repository
2. Trigger automatic deployment to your live website
3. Keep your website always up-to-date

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and login
2. Click "New repository" (green button)
3. Repository name: `gtpc-website`
4. Description: `GTPC Global Trade Promotion Corporation Website`
5. Make it **Public** (important for free hosting)
6. **Don't** initialize with README
7. Click "Create repository"

## Step 2: Upload Your Code to GitHub

### Option A: Using Replit Git (Recommended)

1. In Replit, open the Shell tab
2. Run these commands one by one:

```bash
git init
git add .
git commit -m "Initial GTPC website upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gtpc-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Option B: Upload Files Manually

1. In your GitHub repository, click "uploading an existing file"
2. Download all files from Replit and upload them
3. Commit with message: "Initial GTPC website upload"

## Step 3: Set Up Automatic Deployment

### Vercel (Recommended - Free & Fast)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "Import Project"
4. Select your `gtpc-website` repository
5. Configure settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Add these Environment Variables:
   ```
   DATABASE_URL=your_database_url_here
   PGHOST=your_pg_host_here
   PGPORT=5432
   PGUSER=your_pg_user_here
   PGPASSWORD=your_pg_password_here
   PGDATABASE=your_pg_database_here
   ```
7. Click "Deploy"

### Alternative: Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project from GitHub repo
4. Add PostgreSQL service
5. Set environment variables
6. Deploy automatically

## Step 4: Enable Automatic Updates

Once connected to Vercel/Railway:

✅ **Every time you make changes in Replit:**
1. Changes are automatically pushed to GitHub (via GitHub Actions)
2. GitHub notifies Vercel/Railway of new changes
3. Your website automatically rebuilds and deploys
4. Live website updates within 2-3 minutes

## What You Get

### ✅ Automatic Features
- **Code Backup**: All code safely stored on GitHub
- **Version Control**: Track all changes with timestamps
- **Automatic Deployment**: Website updates instantly
- **Free Hosting**: Professional website URL
- **SSL Certificate**: Secure HTTPS automatically
- **Global CDN**: Fast loading worldwide
- **Custom Domain**: Can add your own domain later

### ✅ Your Workflow
1. Make changes in Replit (update prices, add content, etc.)
2. Changes automatically sync to GitHub
3. Website automatically updates
4. No manual deployment needed!

## Environment Variables Needed

Copy these from your current Replit environment:

```bash
DATABASE_URL=postgresql://username:password@host:port/database
PGHOST=your_database_host
PGPORT=5432
PGUSER=your_database_user
PGPASSWORD=your_database_password
PGDATABASE=your_database_name
```

## Benefits

1. **Professional Setup**: Industry-standard deployment pipeline
2. **Reliability**: Multiple backups and automatic recovery
3. **Speed**: Lightning-fast website loading
4. **Maintenance-Free**: No manual work required
5. **Scalability**: Handles thousands of visitors easily
6. **Security**: Automatic SSL and security updates

## Support

If you need help with any step:
1. The GitHub repository includes all deployment configurations
2. Vercel/Railway have excellent documentation
3. Both platforms offer free tiers perfect for your business website

Your GTPC website will be professional, fast, and automatically maintained!