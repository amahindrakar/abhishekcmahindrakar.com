# Abhishek Mahindrakar - Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Optimized for all device sizes
- **Performance**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Technical skills
│   ├── Experience.tsx     # Work experience
│   ├── Resume.tsx         # Resume download
│   ├── Blog.tsx           # Personal blog
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Site footer
├── App.tsx                # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/amahindrakar/abhishekcmahindrakar.com.git
   cd abhishekcmahindrakar.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### GitHub Pages Setup

1. **Create GitHub Repository**
   - Repository name: `abhishekcmahindrakar.com` (or your preferred name)
   - Make sure it's public

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

3. **Add Custom Domain**
   - In Pages settings, add your custom domain: `abhishekcmahindrakar.com`
   - Create a `CNAME` file in the `public` folder with your domain

4. **Configure DNS**
   - Add these A records to your domain DNS:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a CNAME record pointing to `amahindrakar.github.io`

5. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📝 Customization

### Adding Your Resume
1. Add your resume PDF to the `public` folder
2. Update the download link in `src/components/Resume.tsx`

### Blog Posts
- Blog posts are currently placeholder content
- Integrate with a headless CMS or markdown files for dynamic content

### Contact Form
- Currently logs to console
- Integrate with services like Formspree, Netlify Forms, or EmailJS

### Social Links
- Update social media links in components
- Add/remove social platforms as needed

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Indigo (#6366F1)
- Accent: Various colors for different sections
- Neutral: Gray scale for text and backgrounds

### Typography
- Font: Inter (system fallback)
- Headings: Bold weights
- Body: Regular weight
- Code: Monospace

### Spacing
- Based on Tailwind's 8px grid system
- Consistent padding and margins

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Consistent component structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal website, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: abhishekcmahindrakar@gmail.com
- **LinkedIn**: [linkedin.com/in/abhishekcmahindrakar](https://linkedin.com/in/abhishekcmahindrakar)
- **GitHub**: [github.com/amahindrakar](https://github.com/amahindrakar)

---

Built with ❤️ by Abhishek Mahindrakar