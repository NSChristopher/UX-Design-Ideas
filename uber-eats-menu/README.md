# Uber Eats Menu Interface - Static Digital Menu

A mobile-first, static digital menu interface inspired by the Uber Eats restaurant menu screen, built with React, Vite, and Radix UI primitives.

## Overview

This project recreates the look and layout of the Uber Eats menu interface as a static display suitable for QR-code menu systems. It focuses purely on the UI/UX without any ordering or delivery functionality.

## Features

### Restaurant Header
- **Top Toolbar**: Includes back button, favorite button, and search icon using Radix UI Toolbar component
- **Cover Image**: Full-width restaurant banner image
- **Restaurant Information**: Name, tagline, rating, cuisine type, and price range
- **Delivery/Pickup Toggle**: Two-button toggle for mode selection

### Category Navigation
- **Sticky Navigation Bar**: Remains at the top while scrolling through menu
- **Horizontal Scrolling**: Categories scroll horizontally on mobile devices
- **Active Highlighting**: Current category is highlighted based on scroll position
- **Smooth Scrolling**: Click category to smoothly scroll to that section

### Menu Items
Each menu item displays:
- Item name and description
- Price
- Optional thumbnail image
- Dietary and preference badges:
  - 🥬 Vegetarian
  - 🌱 Vegan
  - 🌶️ Spicy
  - ⭐ Popular
  - 👨‍🍳 Chef's Favorite
  - "Most Liked" with percentage

### Visual Design
- Clean, content-focused interface
- White/light gray background with dark text
- Mobile-first responsive design
- Radix UI Separator components for visual breaks
- Accessible, semantic HTML structure

## Technology Stack

- **React**: UI component library
- **Vite**: Build tool and dev server
- **Radix UI**: Accessible, unstyled component primitives
  - `@radix-ui/react-toolbar`: Header controls
  - `@radix-ui/react-separator`: Visual separators
  - `@radix-ui/react-icons`: Icon library
- **CSS**: Custom styling for Uber Eats-like appearance

## Project Structure

```
uber-eats-menu/
├── src/
│   ├── components/
│   │   ├── RestaurantHeader.jsx     # Header with toolbar and info
│   │   ├── RestaurantHeader.css
│   │   ├── CategoryNav.jsx          # Sticky category navigation
│   │   ├── CategoryNav.css
│   │   ├── MenuSection.jsx          # Category section container
│   │   ├── MenuSection.css
│   │   ├── MenuItem.jsx             # Individual menu item
│   │   └── MenuItem.css
│   ├── data/
│   │   └── menuData.js              # Restaurant and menu data
│   ├── App.jsx                      # Main app component
│   ├── App.css
│   ├── index.css                    # Global styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd uber-eats-menu
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Adding Menu Items

Edit `src/data/menuData.js` to customize:
- Restaurant information (name, cuisine, rating, etc.)
- Menu categories
- Menu items with descriptions, prices, images, and badges

### Styling

Each component has its own CSS file for easy customization:
- Adjust colors, fonts, spacing in component CSS files
- Modify global styles in `src/index.css`
- Change responsive breakpoints in individual component CSS

### Adding New Badge Types

In `src/components/MenuItem.jsx`, add new badge types in the `getBadgeIcon()` and `getBadgeLabel()` functions, then add corresponding styles in `MenuItem.css`.

## Features Implemented

- ✅ Restaurant header with Radix UI Toolbar
- ✅ Sticky, scrollable category navigation
- ✅ Scroll spy for active category highlighting
- ✅ Menu items with images and badges
- ✅ Interactive favorite button
- ✅ Delivery/Pickup toggle
- ✅ Mobile-first responsive design
- ✅ Accessible component structure
- ✅ Radix UI Separator for visual breaks
- ✅ Smooth scrolling to categories

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

Built with accessibility in mind using:
- Semantic HTML elements
- ARIA labels on interactive elements
- Radix UI accessible primitives
- Keyboard navigation support

## License

This is a demonstration project for educational purposes.

## Screenshots

The interface closely mimics the Uber Eats menu experience with:
- Clean, modern design
- Easy-to-read menu items
- Visual badges for dietary information
- Smooth interactions and transitions
