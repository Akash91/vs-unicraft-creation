# ⚡ Quick Start - Deploy in 5 Minutes

## 🎯 Your Mission
Get your VS Unicraft Creation website live at:
**https://akash91.github.io/vs-unicraft-creation/**

---

## 🚀 Three Simple Steps

### Step 1: Setup Files (30 seconds)

Run this single command in your project folder:

```bash
mkdir -p .github/workflows && mv github-workflows-deploy.yml .github/workflows/deploy.yml && mv gitignore .gitignore
```

**What this does:**
- Creates the `.github/workflows/` folder
- Moves the deployment workflow to the correct location
- Renames `gitignore` to `.gitignore`

---

### Step 2: Push to GitHub (1 minute)

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

**That's it!** Your code is now on GitHub.

---

### Step 3: Enable GitHub Pages (30 seconds)

1. Visit: **https://github.com/Akash91/vs-unicraft-creation/settings/pages**
2. Under "Source", select: **GitHub Actions**
3. Done! It auto-saves.

---

## ⏱️ Wait 3-5 Minutes

Your site is being built and deployed automatically!

### Watch the Progress:
Visit: **https://github.com/Akash91/vs-unicraft-creation/actions**

You'll see "Deploy to GitHub Pages" workflow running:
- Yellow circle ⚫ = Building
- Green checkmark ✅ = Complete!
- Red X ❌ = Error (check logs)

---

## 🎉 Visit Your Live Site!

Once you see the green checkmarks ✅:

**https://akash91.github.io/vs-unicraft-creation/**

---

## 🆘 Troubleshooting

### Workflow not showing up?
```bash
# Make sure the file structure is correct
ls -la .github/workflows/deploy.yml

# If missing, run setup again:
mkdir -p .github/workflows
mv github-workflows-deploy.yml .github/workflows/deploy.yml
git add .
git commit -m "Fix workflow location"
git push origin main
```

### Workflow failing?
- Click the red X in the Actions tab to see the error
- Most common: Missing `pnpm-lock.yaml`
  - Solution: Run `pnpm install` locally, then commit and push

### Site not loading?
- Wait 5 minutes after deployment
- Clear browser cache (Ctrl+F5 / Cmd+Shift+R)
- Make sure "GitHub Actions" is selected as Source in Settings → Pages

---

## 📋 Complete Command List

```bash
# Setup (one time)
mkdir -p .github/workflows && mv github-workflows-deploy.yml .github/workflows/deploy.yml && mv gitignore .gitignore

# Deploy
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main

# Future updates
git add .
git commit -m "Your update message"
git push origin main
```

---

## ✨ What You're Deploying

**VS Unicraft Creation** - School Supplies Website
- 🏫 Landing Page with hero section
- 🛍️ Product catalog (26 products)
- 🔍 Advanced filtering & search
- 📱 Fully responsive design
- 📄 Terms & Website Policy pages

**Tech Stack:**
- React 18 + TypeScript
- Vite (lightning fast!)
- Tailwind CSS v4
- shadcn/ui components

---

## 🔐 Security Status: ✅ CLEAN

- No API keys or secrets
- No personal information
- No sensitive data
- Safe to deploy publicly

See `SECURITY_REVIEW.md` for details.

---

## 🎯 Quick Checklist

- [ ] Run the setup command
- [ ] Push to GitHub
- [ ] Enable GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Watch Actions tab for green checkmarks
- [ ] Visit your live site!

---

## 🤔 Questions?

- **Full Guide**: See `NEXT_STEPS.md`
- **Security Info**: See `SECURITY_REVIEW.md`
- **Deployment Details**: See `DEPLOYMENT_SUMMARY.md`

---

**That's it! You're 5 minutes away from having your website live! 🚀**
