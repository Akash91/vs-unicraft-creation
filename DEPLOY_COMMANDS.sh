#!/bin/bash

# VS Unicraft Creation - GitHub Pages Deployment Script
# Repository: https://github.com/Akash91/vs-unicraft-creation
# Expected Live URL: https://akash91.github.io/vs-unicraft-creation/

echo "🚀 Starting GitHub Pages Deployment Process..."
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📁 Initializing Git repository..."
    git init
    git branch -M main
fi

# Check if remote exists
if git remote | grep -q "origin"; then
    echo "✅ Git remote 'origin' already exists"
else
    echo "📌 Adding remote origin..."
    git remote add origin https://github.com/Akash91/vs-unicraft-creation.git
fi

echo ""
echo "📋 Staging all changes..."
git add .

echo ""
echo "💾 Creating commit..."
git commit -m "Add GitHub Pages deployment configuration and update product images with authentic Indian school references"

echo ""
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "📌 Next Steps:"
echo "1. Go to: https://github.com/Akash91/vs-unicraft-creation"
echo "2. Click Settings → Pages"
echo "3. Under 'Source', select 'GitHub Actions'"
echo "4. Go to Actions tab to monitor deployment"
echo "5. Once complete, visit: https://akash91.github.io/vs-unicraft-creation/"
echo ""
echo "🎉 Deployment initiated!"
