# Professional B2B Theming System

## Overview
This theming system provides multiple professional color schemes inspired by leading B2B technology and manufacturing companies. Each theme is carefully crafted to maintain professional credibility while offering visual variety.

## Available Themes

### 1. Professional Teal (Default - `raytech`)
- **Colors**: Dark Teal Gray, Muted Teal-Gray, Clean White
- **Inspiration**: Industrial manufacturing aesthetic
- **Best For**: Manufacturing, industrial companies
- **Hex Values**: `#1a2625`, `#8a9491`, `#f8f9f8`

### 2. Corporate Blue (`corporate`)
- **Colors**: Deep Navy, Professional Blue, Pure White
- **Inspiration**: Syska LED, IBM, Microsoft - Corporate reliability
- **Best For**: Established enterprises, corporate B2B
- **Hex Values**: `#0f1419`, `#3b82f6`, `#ffffff`

### 3. Modern Gray (`modern`)
- **Colors**: Charcoal Gray, Medium Gray, Off-White
- **Inspiration**: Signify (Philips), Apple Business - Modern minimalism
- **Best For**: Contemporary tech companies, clean aesthetics
- **Hex Values**: `#111827`, `#6b7280`, `#f9fafb`

### 4. Tech Green (`tech`)
- **Colors**: Deep Forest Green, Emerald Green, Light Green Tint
- **Inspiration**: NVIDIA, Schneider Electric - Technology innovation
- **Best For**: Tech companies, sustainability-focused brands
- **Hex Values**: `#0f1b0f`, `#10b981`, `#f0fdf4`

### 5. Premium Purple (`premium`)
- **Colors**: Deep Indigo, Purple Accent, Light Purple Tint
- **Inspiration**: Stripe, Twilio - Premium SaaS platforms
- **Best For**: SaaS companies, premium services
- **Hex Values**: `#1e1b4b`, `#8b5cf6`, `#faf5ff`

### 6. Energy Orange (`energy`)
- **Colors**: Dark Brown, Orange Accent, Warm White
- **Inspiration**: Siemens, GE - Energy and industrial solutions
- **Best For**: Energy companies, dynamic brands
- **Hex Values**: `#1c1917`, `#f97316`, `#fffbeb`

## Implementation

### Theme Structure
Each theme follows a consistent three-color structure:
- **Dark**: Primary background, headers, dark elements
- **Neutral**: Accent color, interactive elements, highlights
- **Light**: Light backgrounds, text on dark backgrounds

### Usage in Components
```tsx
// Using theme classes
<div className="bg-raytech-dark text-raytech-light">
  <button className="bg-raytech-neutral text-raytech-dark">
    Click me
  </button>
</div>

// Using theme context
import { useTheme } from '@/lib/ThemeContext'

function MyComponent() {
  const { currentTheme, setTheme, themeConfig } = useTheme()
  
  return (
    <div style={{ backgroundColor: themeConfig.colors.dark }}>
      Current theme: {themeConfig.name}
    </div>
  )
}
```

### Theme Switching
Users can switch themes in two ways:
1. **Navigation Bar**: Theme switcher dropdown in the top navigation
2. **Themes Page**: Visit `/themes` to see all options and switch

### Persistence
Theme preferences are automatically saved to localStorage and persist across browser sessions.

## Technical Details

### Tailwind Configuration
All theme colors are defined in `tailwind.config.js` with consistent naming:
```javascript
colors: {
  'raytech': { dark: '#1a2625', neutral: '#8a9491', light: '#f8f9f8' },
  'corporate': { dark: '#0f1419', neutral: '#3b82f6', light: '#ffffff' },
  // ... other themes
}
```

### CSS Custom Properties
Dynamic theming is supported through CSS custom properties:
```css
:root {
  --theme-dark: #1a2625;
  --theme-neutral: #8a9491;
  --theme-light: #f8f9f8;
}
```

### Theme Context
The `ThemeContext` provides:
- Current theme state
- Theme switching functionality
- Access to all theme configurations
- Automatic localStorage persistence

## Design Principles

### Professional B2B Focus
- Colors chosen based on successful B2B companies
- Emphasis on trust, reliability, and professionalism
- Suitable for corporate environments

### Accessibility
- High contrast ratios maintained across all themes
- Clear visual hierarchy preserved
- Focus states and interactive elements clearly defined

### Consistency
- All themes follow the same structural pattern
- Component behavior remains identical across themes
- Only visual appearance changes

## Adding New Themes

To add a new theme:

1. **Add to Tailwind Config**:
```javascript
'newtheme': {
  'dark': '#hexcolor',
  'neutral': '#hexcolor', 
  'light': '#hexcolor',
}
```

2. **Add to Theme Configuration**:
```typescript
newtheme: {
  name: 'Theme Name',
  description: 'Theme description',
  colors: { dark: '#hex', neutral: '#hex', light: '#hex' },
  inspiration: 'Company inspiration'
}
```

3. **Test Across Components**: Ensure the new theme works well across all components and maintains readability.

## Best Practices

### When to Use Each Theme
- **Professional Teal**: Manufacturing, industrial B2B
- **Corporate Blue**: Established enterprises, financial services
- **Modern Gray**: Tech startups, contemporary brands
- **Tech Green**: Sustainability, innovation-focused companies
- **Premium Purple**: SaaS platforms, premium services
- **Energy Orange**: Energy sector, dynamic industries

### Theme Selection Guidelines
- Consider your industry and target audience
- Test with your brand guidelines
- Ensure accessibility requirements are met
- Consider cultural color associations in your market

## Browser Support
- Modern browsers with CSS custom property support
- Graceful fallback to default theme if localStorage unavailable
- Works with both light and dark system preferences