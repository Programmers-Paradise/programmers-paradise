# Programmers' Paradise 🚀

> The official technical society website for CSVTU UTD-1 Bhilai - Where tech enthusiasts, coders, and innovators come together to explore, learn, and build the future.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Overview

Programmers' Paradise is a modern, responsive website built for the technical society of CSVTU UTD-1 Bhilai. The platform serves as a central hub for tech enthusiasts to discover events, join clubs, explore projects, and connect with like-minded individuals in the programming community.

## 🌟 Features

### 🎯 Core Functionality
- **Dynamic Event Management** - Browse upcoming workshops, hackathons, and tech talks
- **Club Ecosystem** - Explore specialized technical clubs and communities
- **Project Showcase** - Discover innovative student projects and contributions
- **Resource Library** - Access learning materials and technical resources
- **Team Directory** - Meet the team behind Programmers' Paradise
- **Gallery** - Visual highlights from events and activities

### 🎨 Technical Features
- **Modern Design System** - Built with Radix UI and shadcn/ui components
- **Dark/Light Mode** - Seamless theme switching with next-themes
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type Safety** - Full TypeScript implementation
- **Form Handling** - React Hook Form with Zod validation
- **Interactive Charts** - Data visualization with Recharts
- **Smooth Animations** - Enhanced UX with Tailwind animations

### 🏛️ Club Structure
The website features dedicated pages for various technical clubs:

- **🤖 AI & ML Club** - Artificial Intelligence and Machine Learning
- **⛓️ Blockchain & Web3** - Decentralized technologies
- **💻 Competitive Programming** - Algorithmic problem solving
- **📊 MATLAB Club** - Technical computing and analysis
- **⚡ Nextronix** - Next-generation electronics
- **📢 PR & Outreach** - Community engagement and communications

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI primitives
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Beautiful & consistent icons
- **next-themes** - Dark mode support

### Form & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Resolver for various validation libraries

### Additional Libraries
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional className utilities
- **cmdk** - Command palette component
- **date-fns** - Date utility library
- **embla-carousel-react** - Carousel component
- **recharts** - Chart library for React
- **sonner** - Toast notifications
- **vaul** - Drawer component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/programmers-paradise.git
   cd programmers-paradise
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
programmers-paradise/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── blog/                    # Blog section
│   ├── clubs/                   # Club pages
│   │   ├── ai-ml/
│   │   ├── blockchain-web3/
│   │   ├── competitive-programming/
│   │   ├── matlab/
│   │   ├── nextronix/
│   │   └── pr-outreach/
│   ├── contact/                 # Contact page
│   ├── events/                  # Events section
│   ├── gallery/                 # Photo gallery
│   ├── join/                    # Membership page
│   ├── projects/                # Projects showcase
│   ├── resources/               # Learning resources
│   └── team/                    # Team directory
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── site-header.tsx          # Main navigation
│   ├── site-footer.tsx          # Footer component
│   ├── theme-provider.tsx       # Theme context
│   └── theme-toggle.tsx         # Dark mode toggle
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets
└── styles/                      # Additional styles
```

## 🎨 Component Library

The project uses a comprehensive set of UI components built on top of Radix UI:

- **Layout**: Card, Separator, Aspect Ratio
- **Navigation**: Navigation Menu, Breadcrumb, Pagination
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Overlay**: Dialog, Sheet, Popover, Tooltip
- **Data Display**: Table, Badge, Avatar, Accordion
- **Interactive**: Button, Toggle, Slider, Tabs

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Package Management
npm install          # Install dependencies
```

## 🎯 Key Pages & Features

### 🏠 Home Page
- Hero section with call-to-action
- Featured upcoming events
- Quick access to major sections
- Interactive club showcase

### 📅 Events
- Event listings with filtering
- Registration capabilities
- Event details and schedules
- Past events archive

### 🏢 Clubs
- Individual club pages with detailed information
- Member spotlights and achievements
- Club-specific events and projects
- Joining instructions

### 💼 Projects
- Student project showcases
- Technology stack details
- Live demos and GitHub links
- Collaborative opportunities

### 📚 Resources
- Learning materials and tutorials
- Technical documentation
- Career guidance resources
- Industry insights

## 🎨 Design System

The website follows a consistent design system with:

- **Typography**: Inter font family for optimal readability
- **Color Palette**: CSS custom properties for theming
- **Spacing**: Tailwind CSS spacing scale
- **Components**: Consistent component variants using CVA
- **Responsive Design**: Mobile-first breakpoints
- **Accessibility**: WCAG 2.1 AA compliance with Radix UI

## 🌙 Theme Support

The application supports both light and dark themes with:
- System preference detection
- Manual theme switching
- Persistent theme selection
- Smooth transitions between themes

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactive elements
- Optimized navigation for mobile devices
- Progressive Web App (PWA) ready architecture

## 🤝 Contributing

We welcome contributions to Programmers' Paradise! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain component consistency with the design system
- Write meaningful commit messages
- Test your changes across different devices
- Update documentation when necessary

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏫 About CSVTU UTD-1 Bhilai

Chhattisgarh Swami Vivekanand Technical University, Unit of Technology and Development-1, Bhilai is a premier technical institution committed to excellence in engineering education and research.

## 📞 Contact

- **Email**: programmers.paradise@csvtu.ac.in
- **Location**: CSVTU UTD-1, Bhilai, Chhattisgarh, India
- **Website**: [programmers-paradise.vercel.app](https://programmers-paradise.vercel.app)

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev) for rapid prototyping
- UI components by [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Deployment on [Vercel](https://vercel.com)

---

<div align="center">
  <p>Made with ❤️ by the Programmers' Paradise Team</p>
  <p>🚀 <strong>Building the future, one line of code at a time</strong> 🚀</p>
</div>
