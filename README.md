# VS Unicraft Creation - School Supplies Website

A complete e-commerce website for VS Unicraft Creation, specializing in school supplies including uniforms, trophies, and printing services. Built with React, TypeScript, and Tailwind CSS.

## 🏫 About

VS Unicraft Creation provides quality school supplies with a focus on:
- **Uniforms**: Kendriya Vidyalaya style uniforms including shirts, skirts, pants, salwar kameez, blazers, sweaters, track suits, ties, belts, and socks
- **Trophies**: Wooden, metal, and acrylic trophies for academic and sports achievements
- **Printing**: ID cards, school diaries, and custom notebooks

**Tagline**: *Uniforms • Trophies • Printing Solutions*  
**Positioning**: *A Complete School Supplies*

## 🚀 Features

- ✨ Responsive design for desktop, tablet, and mobile
- 🎨 Royal blue (#0A1B7F) and gold (#FFD700) branding
- 📱 Product catalog with filtering and search
- 🏆 26+ products across 3 main categories
- 🔍 Advanced filtering by category, subcategory, price range
- 📊 Sort by name and price
- 💳 Product details with SKU and pricing in Indian Rupees (₹)
- 📜 Terms & Conditions and Website Policy pages

## 🛠️ Technologies

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **React Router** for navigation
- **shadcn/ui** components
- **Lucide React** for icons

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
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

## 📁 Project Structure

```
vs-unicraft-creation/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── LandingPage.tsx  # Home page
│   │   │   ├── Logo.tsx         # VS Unicraft logo
│   │   │   ├── ProductList.tsx  # Products page
│   │   │   ├── TermsAndConditions.tsx
│   │   │   ├── WebsitePolicy.tsx
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── data/
│   │   │   └── products.ts      # Product catalog
│   │   └── App.tsx              # Main app component
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css            # Brand colors
├── vite.config.ts               # Vite + GitHub Pages config
├── package.json
└── README.md
```

## 🎨 Branding

- **Primary Color**: Royal Blue `#0A1B7F`
- **Accent Color**: Gold `#FFD700`
- **Logo**: Custom VS Unicraft Creation logo with golden swoosh

## 📞 Contact Information

**VS Unicraft Creation**  
📍 Ghaziabad, Uttar Pradesh, India  
📱 Phone: 7042121  
✉️ Email: contact@vsunicraftcreation.com

## 📄 License

Copyright © 2024 VS Unicraft Creation. All rights reserved.

## 🤝 Contributing

This is a commercial project for VS Unicraft Creation. For inquiries about customization or support, please contact us directly.

---

Built with ❤️ by VS Unicraft Creation