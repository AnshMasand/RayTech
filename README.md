# Raytech LED Website

A modern, dark-themed Next.js website for Raytech LED, showcasing their state-of-the-art manufacturing facility, debt-free operations, and strategic partnership with Syska LED.

## 🌟 Key Features

### Design & UX
- **Dark Theme**: Deep black canvas with vibrant LED hues (Raytech orange + electric cyan)
- **Switch-On Hero**: Interactive light switch animation on page load
- **Smooth Animations**: Physics-based spring animations using Framer Motion
- **Responsive Design**: Mobile-first approach with beautiful desktop layouts

### Interactive Components
- **ROI Calculator**: Calculate energy and cost savings by switching to LED
- **Light Gallery**: Before/after slider showcasing LED transformations
- **3D Product Configurator**: (Coming soon) WebGL-based product customization
- **WhatsApp Integration**: Quick quote requests via floating WhatsApp button

### Trust Signals
- **Factory Showcase**: Virtual tour with production stats and timeline
- **Financial Strength**: Prominent display of debt-free status and metrics
- **Syska Partnership**: Dedicated section highlighting strategic alliance
- **Real-time Counters**: Factory uptime and production statistics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/raytech-led.git
cd raytech-led

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful icon set

## 📁 Project Structure

```
raytech/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx      # Navigation with Syska ribbon
│   ├── Hero.tsx        # Switch-on intro section
│   ├── ProductShowcase.tsx
│   ├── LightGallery.tsx
│   ├── FactoryShowcase.tsx
│   ├── FinancialStrength.tsx
│   ├── SyskaPartnership.tsx
│   ├── ROICalculator.tsx
│   ├── WhatsAppCTA.tsx
│   └── Footer.tsx
├── public/             # Static assets
└── package.json
```

## 🎨 Color Palette

- **Base**: `#0B0B0F` (Deep black)
- **Primary**: `#FD8100` (Raytech orange)
- **Secondary**: `#00D4FF` (Electric cyan)
- **Neutral Light**: `#D4D4D8`
- **Neutral**: `#8A8A93`

## 📱 Key Sections

1. **Hero**: Interactive switch-on animation with trust badges
2. **Products**: Categorized LED solutions (Indoor/Outdoor/Industrial)
3. **Light Gallery**: Before/after comparisons with savings metrics
4. **Factory Tour**: 360° virtual tour and production timeline
5. **Financial Strength**: Debt-free metrics and CFO message
6. **Syska Partnership**: Success story and co-engineered products
7. **ROI Calculator**: Interactive savings calculator
8. **Footer**: Comprehensive links and trust seals

## 🔧 Customization

### Update Company Info
Edit contact details in `components/Footer.tsx` and `components/WhatsAppCTA.tsx`

### Modify Colors
Update the color palette in `tailwind.config.js`

### Add Products
Edit product data in `components/ProductShowcase.tsx`

## 📈 Performance

- Optimized images with Next.js Image component
- Lazy loading for heavy components
- AVIF/WebP format support
- Smooth animations with `prefers-reduced-motion` support

## 🌐 Deployment

The site is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

## 📝 License

This project is proprietary to Raytech LED.

## 🤝 Contributing

For any updates or modifications, please contact the Raytech development team.

---

Built with ❤️ for Raytech LED - Illuminating India's Future 