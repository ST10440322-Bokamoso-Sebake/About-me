# Personal Portfolio - Bokamoso Sebake

A modern, responsive personal portfolio website built with React. This portfolio showcases personal interests, journey, skills, and personality - focusing on the individual rather than business achievements. Features a beautiful UI with smooth animations, dark/light theme support, and a fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-Private-red)

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Component Details](#-component-details)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Core Features
- **Personal Hero Section** - Dynamic introduction with animated particle background, personal stats, and profile photo
- **About Me** - Personal story, values, and personality showcase
- **Interests & Hobbies** - Interactive cards displaying personal interests and hobbies
- **My Journey** - Timeline visualization of personal growth and experiences
- **Skills & Abilities** - Clean list of technical and personal skills (no percentages)
- **Contact Section** - Direct contact links (email, phone, social media) without form

### UI/UX Features
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preference
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Responsive Design** - Fully responsive across all device sizes
- **Scroll Animations** - Intersection Observer based scroll reveal effects
- **Accessibility** - Skip to main content, ARIA labels, keyboard navigation
- **Performance Optimized** - Optimized images, lazy loading, and efficient rendering

### Technical Features
- **Modern React** - Built with React 18 and functional components
- **CSS Variables** - Theme system using CSS custom properties
- **Component-Based Architecture** - Modular, reusable components
- **SEO Optimized** - Meta tags, semantic HTML, and structured data
- **Production Ready** - Optimized build with code splitting

## 🛠 Technologies Used

### Core
- **React 18.2.0** - UI library
- **React DOM 18.2.0** - React rendering
- **React Scripts 5.0.1** - Build tooling

### Libraries
- **Framer Motion 10.16.16** - Animation library for smooth transitions
- **React Icons 4.12.0** - Icon library (Feather Icons, Font Awesome)
- **@emailjs/browser 4.4.1** - Email service integration (optional)

### Development Tools
- **Cross-env 10.1.0** - Cross-platform environment variables
- **ESLint** - Code linting
- **PostCSS** - CSS processing

### Styling
- **CSS3** - Custom CSS with CSS Variables
- **CSS Grid & Flexbox** - Modern layout techniques
- **Custom Animations** - Keyframe animations and transitions

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **Git** (optional) - For version control

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "C:\Users\Esther\Desktop\Persoanl github projects\me project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install all required packages listed in `package.json`.

3. **Add your profile photo (optional):**
   - Place your profile photo in `src/assets/images/hero-image2.jpg`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 600x600px or larger (square aspect ratio)

4. **Start the development server:**
   ```bash
   npm start
   ```
   The app will automatically open in your browser at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- **`npm start`** - Starts the development server
- **`npm run build`** - Creates an optimized production build
- **`npm test`** - Runs the test suite (if configured)
- **`npm run eject`** - Ejects from Create React App (irreversible)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder with:
- Minified JavaScript and CSS
- Optimized images
- Code splitting
- Production-ready assets

To preview the production build locally:
```bash
npm install -g serve
serve -s build
```

## 📁 Project Structure

```
me project/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero-image2.jpg # Profile photo
│   │       └── README.md        # Image instructions
│   ├── components/
│   │   ├── About.jsx            # About Me section
│   │   ├── About.css
│   │   ├── Contact.jsx          # Contact information
│   │   ├── Contact.css
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Footer.css
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Header.css
│   │   ├── Hero.jsx             # Hero/landing section
│   │   ├── Hero.css
│   │   ├── Interests.jsx        # Interests & hobbies
│   │   ├── Interests.css
│   │   ├── Journey.jsx           # Personal journey timeline
│   │   ├── Journey.css
│   │   ├── ScrollToTop.jsx      # Scroll to top button
│   │   ├── ScrollToTop.css
│   │   ├── Skills.jsx           # Skills section
│   │   └── Skills.css
│   ├── styles/
│   │   ├── animations.css       # Animation keyframes
│   │   └── themes.css           # Theme utilities
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App-level styles
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles & CSS variables
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Locked dependency versions
└── README.md                    # This file
```

## 🧩 Component Details

### Hero Component
- **Location**: `src/components/Hero.jsx`
- **Features**: Animated particle background, profile photo, personal introduction, stats display
- **Animations**: Framer Motion entrance animations, particle canvas animation
- **Responsive**: Adapts layout for mobile/tablet/desktop

### About Component
- **Location**: `src/components/About.jsx`
- **Features**: Personal story, values, personality cards
- **Layout**: Text card with supporting feature cards

### Interests Component
- **Location**: `src/components/Interests.jsx`
- **Features**: Interactive interest cards, personal facts section
- **Icons**: React Icons for visual representation

### Journey Component
- **Location**: `src/components/Journey.jsx`
- **Features**: Timeline visualization of personal milestones
- **Design**: Vertical timeline with icons and descriptions

### Skills Component
- **Location**: `src/components/Skills.jsx`
- **Features**: Categorized skills display (no percentages)
- **Categories**: Technical, Creative, Personal, Life Skills

### Contact Component
- **Location**: `src/components/Contact.jsx`
- **Features**: Contact information cards, social media links
- **Note**: No contact form - direct links only

### Header Component
- **Location**: `src/components/Header.jsx`
- **Features**: Navigation menu, theme toggle, mobile responsive sidebar
- **Functionality**: Smooth scroll navigation, sticky header on scroll

### Footer Component
- **Location**: `src/components/Footer.jsx`
- **Features**: Quick links, contact info, social media links
- **Design**: Multi-column responsive layout

### ScrollToTop Component
- **Location**: `src/components/ScrollToTop.jsx`
- **Features**: Floating button to scroll to top
- **Behavior**: Appears after scrolling 300px

## 🎨 Customization

### Changing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #8B5CF6;        /* Primary purple */
  --secondary: #A78BFA;      /* Secondary purple */
  --accent: #C084FC;         /* Accent color */
  --background: #FFFFFF;     /* Light theme background */
  --surface: #F9FAFB;        /* Light theme surface */
  --text-primary: #111827;   /* Primary text color */
  --text-secondary: #4B5563; /* Secondary text color */
  --border: #D1D5DB;         /* Border color */
}
```

### Updating Content

1. **Personal Information**: Edit component files in `src/components/`
2. **Profile Photo**: Replace `src/assets/images/hero-image2.jpg`
3. **Social Links**: Update links in `Contact.jsx` and `Footer.jsx`
4. **Skills**: Modify the skills array in `Skills.jsx`
5. **Interests**: Update interests array in `Interests.jsx`

### Theme Customization

Themes are defined in `src/index.css` using CSS variables. Both light and dark themes are fully customizable through these variables.

### Adding New Sections

1. Create new component files in `src/components/`
2. Import and add to `src/App.jsx`
3. Add corresponding CSS file
4. Update navigation in `Header.jsx`

## 🚢 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/me-project",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

### Other Platforms

The `build` folder contains static files that can be deployed to any static hosting service:
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- Any web server

## ⚡ Performance

### Optimizations Included

- **Code Splitting**: Automatic code splitting by React
- **Image Optimization**: Optimized profile photo loading
- **Lazy Loading**: Components load as needed
- **CSS Optimization**: Minified and optimized CSS
- **Bundle Size**: ~90KB gzipped JavaScript, ~6KB gzipped CSS

### Performance Tips

- Use WebP format for images when possible
- Optimize images before adding to the project
- Enable gzip compression on your hosting server
- Use a CDN for static assets

## 🌐 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

### CSS Features Used

- CSS Grid
- CSS Flexbox
- CSS Variables
- CSS Animations
- Backdrop Filter (for glass effects)

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
set PORT=3001 && npm start
```

### Build Errors

1. Clear cache: `npm cache clean --force`
2. Delete `node_modules` and `package-lock.json`
3. Reinstall: `npm install`
4. Try building again: `npm run build`

### Image Not Showing

- Ensure image is in `src/assets/images/hero-image2.jpg`
- Check file extension matches exactly
- Verify image file is not corrupted
- Clear browser cache

### Theme Not Persisting

- Check browser localStorage is enabled
- Clear browser cache and try again
- Verify theme toggle is working in console

### Animation Issues

- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser supports CSS animations
- Disable browser extensions that might interfere

## 📝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please feel free to reach out!

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Bokamoso Sebake**
- Email: rainbow11272005@gmail.com
- Location: Midrand, South Africa
- Instagram: [@bokamoso1127](https://www.instagram.com/bokamoso1127)
- TikTok: [@rainbow27ghost](https://www.tiktok.com/@rainbow27ghost)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Create React App](https://create-react-app.dev/) - Build tooling

---

**Last Updated**: January 2025
**Version**: 1.0.0
