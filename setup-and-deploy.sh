#!/bin/bash

# VS Unicraft Creation - Setup and Deploy Script
# This script sets up the correct folder structure and prepares for deployment

echo "🚀 VS Unicraft Creation - Setup Script"
echo "========================================"
echo ""

# Step 1: Create .github/workflows folder
echo "📁 Creating .github/workflows folder..."
mkdir -p .github/workflows

# Step 2: Move workflow file
echo "📝 Moving workflow file to correct location..."
if [ -f "github-workflows-deploy.yml" ]; then
    mv github-workflows-deploy.yml .github/workflows/deploy.yml
    echo "✅ Workflow file moved to .github/workflows/deploy.yml"
else
    echo "⚠️  Warning: github-workflows-deploy.yml not found"
fi

# Step 3: Rename gitignore
echo "🔒 Setting up .gitignore..."
if [ -f "gitignore" ]; then
    mv gitignore .gitignore
    echo "✅ .gitignore created"
else
    echo "⚠️  Warning: gitignore file not found"
fi

echo ""
echo "✅ Folder structure setup complete!"
echo ""

# Step 4: Check if git is initialized
if [ ! -d ".git" ]; then
    echo "⚠️  Git not initialized. Would you like to initialize? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        git init
        git branch -M main
        echo "✅ Git initialized"
    fi
fi

echo ""
echo "📋 Next steps:"
echo "1. Review your changes: git status"
echo "2. Add files: git add ."
echo "3. Commit: git commit -m 'Setup GitHub Pages deployment'"
echo "4. Add remote (if not added): git remote add origin https://github.com/Akash91/vs-unicraft-creation.git"
echo "5. Push: git push origin main"
echo ""
echo "Then enable GitHub Pages:"
echo "- Go to: https://github.com/Akash91/vs-unicraft-creation/settings/pages"
echo "- Set Source to 'GitHub Actions'"
echo ""
echo "🎉 Your site will be live at: https://akash91.github.io/vs-unicraft-creation/"
