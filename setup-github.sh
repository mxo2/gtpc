#!/bin/bash

# GTPC Website - GitHub Setup Script
# This script helps you upload your code to GitHub easily

echo "🚀 GTPC Website - GitHub Setup"
echo "================================"
echo ""

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

echo "📋 Before running this script, make sure you have:"
echo "   1. Created a GitHub account at github.com"
echo "   2. Created a new repository named 'gtpc-website'"
echo "   3. Have your GitHub username ready"
echo ""

read -p "📝 Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required!"
    exit 1
fi

echo ""
echo "🔧 Setting up GitHub repository..."

# Initialize git repository
if [ ! -d ".git" ]; then
    git init
    echo "✅ Initialized git repository"
fi

# Add all files
git add .
echo "✅ Added all files to git"

# Create initial commit
if ! git log --oneline -1 &> /dev/null; then
    git commit -m "Initial GTPC website setup with bank transfer payments"
    echo "✅ Created initial commit"
else
    echo "✅ Repository already has commits"
fi

# Set main branch
git branch -M main
echo "✅ Set main branch"

# Add remote origin
REPO_URL="https://github.com/${GITHUB_USERNAME}/gtpc-website.git"
if ! git remote | grep -q "origin"; then
    git remote add origin "$REPO_URL"
    echo "✅ Added GitHub remote: $REPO_URL"
else
    echo "✅ GitHub remote already exists"
fi

# Push to GitHub
echo ""
echo "📤 Uploading code to GitHub..."
echo "   (You may need to enter your GitHub username and password/token)"

if git push -u origin main; then
    echo ""
    echo "🎉 SUCCESS! Your code is now on GitHub!"
    echo ""
    echo "📋 Next Steps:"
    echo "   1. Go to https://vercel.com"
    echo "   2. Sign up with your GitHub account"
    echo "   3. Import your 'gtpc-website' repository"
    echo "   4. Add your database environment variables"
    echo "   5. Deploy and get your live website URL!"
    echo ""
    echo "🔗 Your GitHub repository: $REPO_URL"
    echo ""
    echo "📖 For detailed instructions, see DEPLOYMENT_AUTOMATION.md"
else
    echo ""
    echo "❌ Failed to push to GitHub. This might be because:"
    echo "   - The repository doesn't exist on GitHub"
    echo "   - You need to authenticate (username/password or token)"
    echo "   - The repository name is different"
    echo ""
    echo "💡 Try these solutions:"
    echo "   1. Create the repository 'gtpc-website' on GitHub first"
    echo "   2. Make sure your GitHub username is correct"
    echo "   3. Use a personal access token instead of password"
fi