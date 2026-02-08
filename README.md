# VS Unicraft Creation - School Supplies Website

A complete e-commerce website for VS Unicraft Creation, specializing in school supplies including uniforms, trophies, and printing services. Built with React, TypeScript, and Tailwind CSS.


## 🚀 Features

- React 18 + TypeScript
- Vite for dev and build
- Tailwind CSS
- React Router

## 🛠️ Technologies

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **React Router** for navigation
- **shadcn/ui** components
- **Lucide React** for icons

## 📦 Quickstart

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Repository Already Exists**
   - Repository URL: `https://github.com/Akash91/vs-unicraft-creation`

2. **Push Your Code**
   ```bash
   # If you haven't initialized git yet
   git init
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git branch -M main
   git remote add origin https://github.com/Akash91/vs-unicraft-creation.git
   git push -u origin main
   
   # If git is already initialized
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to https://github.com/Akash91/vs-unicraft-creation
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

4. **Automatic Deployment**
   - The website will automatically deploy when you push to the `main` branch
   - GitHub Actions will build and deploy your site
   - Your site will be available at: `https://akash91.github.io/vs-unicraft-creation/`

### Manual Deployment

You can also trigger deployment manually:
- Go to the **Actions** tab in your GitHub repository
- Select the "Deploy to GitHub Pages" workflow
- Click "Run workflow"

### Custom Domain (Optional)

To use a custom domain:
1. Go to **Settings** → **Pages**
2. Add your custom domain in the "Custom domain" field
3. Update your DNS settings to point to GitHub Pages
4. Update the `base` in `vite.config.ts` to `'/'`

## 🎨 Branding

- **Primary Color**: Royal Blue `#0A1B7F`
- **Accent Color**: Gold `#FFD700`
- **Logo**: Custom VS Unicraft Creation logo with golden swoosh

## 🤝 Contributing

This is a commercial project for VS Unicraft Creation. For inquiries about customization or support, please contact us directly.

---

Built with ❤️ by VS Unicraft Creation