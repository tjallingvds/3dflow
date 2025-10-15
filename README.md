# 3DFlow Therapy Website

A modern, professional therapy website built with React and Vite.

## Features

- Modern, warm, and professional design
- Fully responsive layout
- Clean component architecture
- Smooth animations and transitions
- Language toggle (NL/EN) in navigation bar
- Dropdown navigation menu
- Beautiful typography using Cormorant Garamond and Montserrat
- Integrated 3DFlow logo
- Evocative hero image (silhouette)
- Therapeutic color palette complementing logo red

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
3dflow/
├── public/
│   ├── 3dFlow logo L.jpg
│   └── IMG_6840.jpeg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Banner.jsx
│   │   ├── Hero.jsx
│   │   ├── Philosophy.jsx
│   │   ├── MainContent.jsx
│   │   ├── AboutMe.jsx
│   │   ├── ForWhom.jsx (with expandable sections)
│   │   ├── Quote.jsx
│   │   ├── SectionDivider.jsx (reusable)
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── Navigation.css
│   │   ├── Banner.css
│   │   ├── Hero.css
│   │   ├── Philosophy.css
│   │   ├── MainContent.css
│   │   ├── AboutMe.css
│   │   ├── ForWhom.css
│   │   ├── Quote.css
│   │   ├── SectionDivider.css
│   │   └── Footer.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React 18
- Vite 5
- React Router DOM 6
- Modern CSS with CSS Variables
- Google Fonts (Cormorant Garamond & Montserrat)

## Color Palette

Professional, uplifting palette balancing warm and cool tones:

**Primary Accent (Cool/Fresh):**
- Teal: `#5A8A89` (primary buttons, accents)
- Teal Light: `#7BA5A4` (hover states, dividers)
- Teal Dark: `#45706F` (text accents)
- Sage: `#8B9F8E` (supporting green)

**Warm Tones (Grounding):**
- Clay: `#B8857A` (banner, warm accents)
- Clay Dark: `#9A6C63`
- Terracotta: `#C17B6E`
- Dusty Rose: `#D4A5A0`

**Neutrals:**
- Cream: `#F7F3EE`
- Warm Beige: `#E8DED0`
- Warm Gray: `#8B7F74`
- Charcoal: `#3A3530`

The teal/sage creates professional freshness and uplift, while warm clay tones provide grounding therapeutic warmth.

## Design Structure

The page uses a clean, modular structure that's easy to expand:
- **White backgrounds** for main content sections (better readability)
- **Cream-colored backgrounds** for special sections (philosophy, metaphor boxes)
- Generous padding and whitespace for breathing room
- Modular component design ready for additional content sections
- All components follow the 300-line limit for easy maintenance

## Adding Flask Backend

This project is ready for Flask integration. You can add a Flask backend by:

1. Creating a `backend/` directory
2. Setting up Flask routes
3. Configuring API endpoints
4. Connecting React frontend to Flask backend using fetch/axios

## License

All rights reserved © 2025

