# HBTU Crypto Club Website

A modern, premium frontend website for HBTU Crypto Club - a student community focused on blockchain technology, cryptocurrency, and Web3 innovation.

![HBTU Crypto Club](https://img.shields.io/badge/HBTU-Crypto%20Club-667eea?style=for-the-badge&logo=ethereum&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **Modern Design**: Glassmorphism UI with dark theme and neon accents
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth Framer Motion animations and micro-interactions
- **Performance**: Optimized for fast loading and smooth scrolling
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter cards
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Shadcn/UI
- **Font**: Inter & JetBrains Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/git-divy/no_bs_1
   cd no_bs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Build & Production

- **Build for production**
  ```bash
  npm run build
  # or
  yarn build
  ```

- **Start production server**
  ```bash
  npm run start
  # or
  yarn start
  ```

- **Run linting**
  ```bash
  npm run lint
  # or
  yarn lint
  ```

### Additional Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with custom CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/
│   ├── animations/        # Animation wrapper components
│   ├── layout/           # Layout components (Navbar, Footer, Layout)
│   ├── sections/         # Page sections (Hero, About, Events, etc.)
│   └── ui/               # Reusable UI components (Button, Card)
├── lib/
│   ├── constants/        # App constants and data
│   └── hooks/            # Custom React hooks
└── assets/               # Static assets
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue-500 (#3B82F6) to Purple-500 (#8B5CF6)
- **Background**: Dark slate (#0F172A) with glassmorphism
- **Text**: Light gray (#F1F5F9) on dark backgrounds
- **Accent**: Cyan (#06B6D4) and Green (#10B981)

### Typography

- **Headings**: Inter (400-700 weight)
- **Body**: Inter (400 weight)
- **Code**: JetBrains Mono

### Components

- **Glass Cards**: Semi-transparent cards with backdrop blur
- **Neon Glow**: Subtle glow effects on interactive elements
- **Gradient Text**: Beautiful gradient text effects
- **Smooth Animations**: Framer Motion powered transitions

## 📱 Sections

1. **Hero Section**
   - Animated background with particles
   - Club name and tagline
   - Call-to-action buttons
   - Floating glass cards

2. **About Section**
   - Mission and vision statements
   - Services overview (Workshops, Hackathons, Research, Trading)
   - Glassmorphism cards layout

3. **Events Section**
   - Upcoming events cards
   - Past events timeline
   - Hover animations and interactions

4. **Team Section**
   - Team member cards with hover effects
   - Social media links
   - Role-based icons

5. **Community Section**
   - Animated counters (members, events, etc.)
   - Discord and Telegram CTAs
   - Newsletter signup

6. **Footer**
   - Social links and navigation
   - Contact information
   - Copyright notice

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (via ESLint)

### Performance Optimizations

- **Static Generation**: All pages are statically generated
- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Analysis**: Optimized bundle size

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Configure custom domain if needed

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **HBTU Crypto Club** for the inspiration and content
- **Next.js** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Shadcn/UI** for beautiful components

## 📞 Contact

- **Website**: [https://hbtucrypto.club](https://hbtucrypto.club)
- **Discord**: [Join our server](https://discord.gg/hbtucrypto)
- **Telegram**: [Join our channel](https://t.me/hbtucrypto)
- **Email**: contact@hbtucrypto.club

---

Built with ❤️ by the HBTU Crypto Club community