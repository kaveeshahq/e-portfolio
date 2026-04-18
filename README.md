# E-Portfolio: Field Assignment in Nutrition - React+Vite

A modern, interactive React+Vite web application for S.D. Kannangara's e-portfolio on the NTN 3212 Field Assignment in Nutrition at Wayamba University of Sri Lanka.

## 🚀 Features

- **Modern UI/UX** - Built with React, Tailwind CSS, and Framer Motion
- **Smooth Animations** - Page transitions and interactive elements
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Fast Performance** - Vite-powered development and production builds
- **Modular Components** - Reusable React components for easy maintenance
- **Beautiful Typography** - Professional fonts (Lora serif + DM Sans)
- **Interactive Navigation** - Sticky navigation with smooth scrolling
- **Enhanced Visuals** - Gradient backgrounds, icons, and micro-interactions

## 📋 Project Structure

```
eportfolio-react/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Hero section with decorative elements
│   │   ├── Navigation.jsx        # Sticky navigation bar
│   │   ├── Footer.jsx            # Footer with group members
│   │   └── SharedComponents.jsx  # Reusable UI components
│   ├── sections/
│   │   ├── Introduction.jsx      # Problem identification & statistics
│   │   ├── Activities.jsx        # 4-week timeline & assessment tools
│   │   ├── Intervention.jsx      # Programme design & materials
│   │   ├── Implementation.jsx    # Day-by-day execution details
│   │   ├── Evaluation.jsx        # Strengths, weaknesses, suggestions
│   │   ├── Reflection.jsx        # Personal learning & skills gained
│   │   └── Conclusion.jsx        # Summary, takeaways & references
│   ├── App.jsx                   # Main app component with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles & Tailwind directives
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── .gitignore                    # Git ignore rules
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **Lucide React** - Icon library
- **React Router DOM 6** - Client-side navigation (if needed for future expansion)

## 📦 Installation & Setup

### Prerequisites

- Node.js 16+ (LTS recommended)
- npm or yarn package manager

### Steps

1. **Navigate to project directory:**

   ```bash
   cd d:\SDKannangara-Eportfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:3000` automatically.

4. **Build for production:**

   ```bash
   npm run build
   ```

   Output will be in the `dist/` directory.

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to modify the theme colors:

```javascript
colors: {
  green: { 50, 100, 200, 600, 700, 900 },
  teal: { 100, 600 },
  amber: { 100, 600 }
}
```

### Fonts

Pre-configured fonts from Google Fonts:

- **Lora** (serif) - Headings & quotes
- **DM Sans** (sans-serif) - Body text

### Animations

Framer Motion animations can be customized in individual components. Examples:

- Staggered container animations
- Scroll-triggered animations
- Hover effects on interactive elements

## 📝 Editing Content

Each section has its own React component in `src/sections/`:

1. Edit the relevant component file
2. Changes hot-reload automatically in development mode
3. Use Tailwind CSS classes for styling

### Adding Photos

In the Implementation section, replace photo placeholders with actual image imports:

```jsx
<img
  src="/path/to/photo.jpg"
  alt="Description"
  className="w-full h-auto rounded-lg"
/>
```

### Adding Videos

Embed videos using Vimeo, YouTube, or local files:

```jsx
<video width="100%" controls className="rounded-lg">
  <source src="/path/to/video.mp4" type="video/mp4" />
</video>
```

## 🔧 Build & Deploy

### Local Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

Creates optimized build in `dist/` directory.

### Deploy Options

- **Vercel** (recommended for Vite)
- **Netlify**
- **GitHub Pages**
- **Traditional web hosting** (copy dist/ files)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Tailwind CSS breakpoints:

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

## 🎯 Future Enhancements

Suggested improvements you can add:

1. **Image Gallery** - Add photo carousel for programme evidence
2. **PDF Export** - Download e-portfolio as PDF
3. **Dark Mode** - Toggle between light/dark themes
4. **Search Functionality** - Search within content
5. **Comments Section** - Faculty feedback system
6. **Print-Friendly** - Optimized print stylesheet
7. **Analytics** - Track page views and user engagement
8. **Multi-language Support** - Add Sinhala translations

## 📞 Support & Troubleshooting

### Port already in use

If port 3000 is in use:

```bash
npm run dev -- --port 3001
```

### Clear node_modules

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build issues

```bash
npm run build -- --verbose
```

## 📄 License

This project is for educational purposes at Wayamba University of Sri Lanka.

## 👥 Contributors

- S.D. Kannangara (218028)
- W.M.I.B. Wasala (218081)
- S.T.N. Rashini (218057)
- R.P.D.D.S. Wijesiri (218095)
- P.G.M.P. Pihilladeniya (218047)
- D.A.K Umayangana (218124)
- H.M.L.S Lakshan (218033)

---

**Last Updated:** April 2026
**Course:** NTN 3212 - Field Assignment in Nutrition
**University:** Wayamba University of Sri Lanka
