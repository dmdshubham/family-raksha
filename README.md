# Family Raksha - React Application

A modern, responsive React application for Family Raksha Insurance web aggregator platform.

## 🚀 Features

- ✅ Modern React 19 with Vite
- ✅ React Router v7 for navigation
- ✅ Framer Motion for smooth animations
- ✅ Tailwind CSS for styling
- ✅ Fully responsive design
- ✅ Modular component architecture
- ✅ SEO-friendly structure

## 📦 Pages Implemented

1. **Home** (`/`) - Landing page with hero section, services, counters, features, and testimonials
2. **About Us** (`/about-us`) - Company information and mission timeline
3. **Term Life Insurance** (`/term-life-insurance`) - Term insurance details with lead form
4. **Investment Plans** (`/investment-plans`) - Investment plans with comparison table
5. **Health Insurance** (`/health-insurance`) - Health insurance information
6. **Privacy Policy** (`/privacy-policy`) - Privacy policy content
7. **Terms & Conditions** (`/terms-conditions`) - Terms and conditions
8. **Grievance Redressal** (`/grievance-redressal`) - Complaint resolution process

## 🎨 Design Features

- **Animations**: Smooth scroll animations using Framer Motion and CSS animations
- **Responsive**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with gradient accents
- **Interactive**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📁 Project Structure

```
src/
├── components/
│   └── Layout/
│       ├── Header.jsx       # Navigation header with dropdown menu
│       ├── Footer.jsx        # Footer with floating buttons and popup
│       └── Layout.jsx        # Main layout wrapper
├── pages/
│   ├── Home/
│   │   └── Home.jsx          # Home page
│   ├── AboutUs/
│   │   └── AboutUs.jsx       # About page
│   ├── TermLifeInsurance/
│   │   └── TermLifeInsurance.jsx
│   ├── InvestmentPlans/
│   │   └── InvestmentPlans.jsx
│   ├── HealthInsurance/
│   │   └── HealthInsurance.jsx
│   ├── PrivacyPolicy/
│   │   └── PrivacyPolicy.jsx
│   ├── TermsConditions/
│   │   └── TermsConditions.jsx
│   └── GrievanceRedressal/
│       └── GrievanceRedressal.jsx
├── assets/           # Images and static assets
├── App.jsx           # Main App component with routing
├── App.css           # Global styles and animations
├── index.css         # Tailwind imports and utilities
└── main.jsx          # Application entry point
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Copy assets:**
   - Copy all images from the WordPress theme to the `public/` directory
   - Maintain the same folder structure:
     - `public/logo.webp`
     - `public/icon/*`
     - `public/services/*`
     - `public/partners/*`
     - `public/main-banner/*`
     - `public/bg*.webp` (background images)

## 🚦 Running the Application

### Development Mode
```bash
npm run dev
```
The application will run on `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📸 Assets Required

You need to copy the following assets from the WordPress theme to the `public/` directory:

### Images:
- `logo.webp` - Company logo
- `bg1.webp`, `bg2.webp`, `bg17.webp`, `bg20.webp`, `bg22.webp` - Background images
- `startup.webp`, `the-end.webp` - Timeline icons
- `main-banner/main-banner.webp` - Hero banner

### Icons:
- `icon/transparent-pricing.webp`
- `icon/family-centric-approach.webp`
- `icon/comprehensive-coverage.webp`
- `icon/trusted-expertise.webp`
- `icon/personalised-service.webp`
- `icon/competitive-rates.webp`
- `icon/24into7.webp`
- `icon/zero-commission.webp`
- `icon/Satisfied-Clients.webp`
- `icon/Happy-Clients.webp`
- `icon/Our-Partners.webp`
- `icon/Years-Completed.webp`

### Service Images:
- `services/term-insurance.webp`
- `services/investment-insurance.webp`
- `services/health-insurance.webp`
- `services/woman-term-insurance.webp`
- `services/terms/*.webp` (all term insurance images)
- `services/investment/*.webp` (all investment images)
- `services/health/*.webp` (all health insurance images)

### Partner Logos:
- `partners/niva.svg`
- `partners/aditya.svg`
- `partners/care.svg`
- `partners/bajaj.svg`

## 🎯 Key Features Implemented

### Header Component
- Sticky navigation with transparent effect on hero sections
- Mobile responsive hamburger menu
- Dropdown menu for Insurance Plans
- Social media links
- Contact button

### Footer Component
- Company information and contact details
- Quick links to all pages
- Social media icons
- WhatsApp floating button
- "Enquire Now" floating button with popup form
- Scroll to top button
- Partner logos

### Home Page
- Hero section with animations
- Insurance services grid
- Milestone counters with animation
- Interactive features section with circular menu
- Testimonials carousel
- Partner logos

### Service Pages
- Hero section with lead capture form
- Feature grids with colorful icons
- Detailed information sections
- Call-to-action sections
- Responsive layouts

### Static Pages
- Clean, readable content layout
- Professional typography
- Contact information boxes
- Easy navigation

## 🎨 Customization

### Colors
The primary gradient is purple-indigo. To change colors, update the Tailwind config and gradient classes:
- Primary: `purple-600` to `indigo-600`
- Accent: `yellow-500`

### Animations
All animations are defined in `App.css` and use Framer Motion for complex interactions.

### Content
Update content directly in the page components. All text is hardcoded for easy editing.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a custom project for Family Raksha. Contact the development team for contributions.

## 📄 License

Proprietary - © 2024 DYS FamilyRaksha Insurance web aggregators Private Limited

## 📞 Support

For support, email contact@familyraksha.com or call +91 70143 63916.

---

**Note**: Make sure to copy all required assets from the WordPress theme before running the application. The app expects these assets to be in the `public/` directory.
