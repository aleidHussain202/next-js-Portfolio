# Portfolio Website - Hussain Aleid

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. Features a clean design with dark mode support and smooth animations powered by Motion (Framer Motion).

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Smooth Animations**: Elegant animations using Motion library for enhanced user experience
- **Contact Form**: Integrated contact form with Web3Forms for direct email communication
- **CV Download**: Easy access to download resume/CV
- **Modern Tech Stack**: Built with the latest versions of Next.js and React

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.1.3](https://nextjs.org/) with Turbopack
- **UI Library**: [React 19.0.0](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- **Animations**: [Motion 12.23.12](https://motion.dev/)
- **Development**: ESLint, PostCSS

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── About.jsx       # About section with skills and tools
│   │   ├── Contact.jsx     # Contact form with Web3Forms integration
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Header.jsx      # Hero section with introduction
│   │   ├── Navbar.jsx      # Navigation with dark mode toggle
│   │   ├── Services.jsx    # Services section (currently commented out)
│   │   └── Work.jsx        # Portfolio work section (currently commented out)
│   ├── globals.css         # Global styles with Tailwind directives
│   ├── layout.js           # Root layout component
│   └── page.js             # Main page with dark mode logic
├── assets/                 # Images and icons for the project
├── out/                    # Static export directory
│   └── CV.pdf             # Downloadable resume
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 Components

- **Navbar**: Responsive navigation with dark mode toggle
- **Header**: Hero section with animated introduction and CTA buttons
- **About**: Personal introduction with skills and tools showcase
- **Contact**: Functional contact form with email integration
- **Footer**: Simple footer component

## 🔧 Available Scripts

- `npm run dev` - Runs the development server with Turbopack
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality

## 🌙 Dark Mode

The portfolio includes a dark mode feature that:
- Automatically detects system preferences
- Persists user choice in localStorage
- Provides smooth transitions between themes
- Updates all components dynamically

## 📧 Contact Form

The contact form is integrated with Web3Forms for reliable email delivery. To use your own form:
1. Get your access key from [Web3Forms](https://web3forms.com/)
2. Replace the access key in `app/components/Contact.jsx`

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment.

## 📝 Customization

To customize this portfolio for your own use:
1. Update personal information in `Header.jsx` and `About.jsx`
2. Replace the CV file in `out/CV.pdf`
3. Modify the color scheme in `tailwind.config.js`
4. Add your own projects in the `Work.jsx` component
5. Update the contact form access key

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hussain Aleid**
- Frontend Web Developer
- Passionate about creating dynamic and user-friendly websites

---

Built with ❤️ using Next.js and React