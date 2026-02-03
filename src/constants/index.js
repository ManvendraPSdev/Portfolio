// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web design that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Metagame-Layer",
    description:
      "Built an Awwwards-style interactive gaming landing page using React 18, Vite, and Tailwind CSS, featuring a responsive,mobile-first layout, reusable component architecture, and custom typography with optimized WebP media assets.",
    href: "https://metagame-layer.vercel.app",
    image: "/assets/projects/MetaGame-Layer.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "PostCSS" },
      { id: 4, name: "WebP" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "GTA-vi-landing-page",
    description:
      "Designed and developed a high-performance, visually immersive GTA 6 landing page using Tailwind CSS, JavaScript, and GSAP. The project focuses on smooth animations, responsive layouts, and engaging user interactions to deliver a modern, game-inspired web experience. Implemented scroll-based and timeline animations using GSAP to enhance visual storytelling while maintaining performance and clean UI structure.",
    href: "https://gta-vi-landing-page-self.vercel.app/",
    image: "/assets/projects/gta-vi.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "JS" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Dev-Studio",
    description:
    "Built a scalable full-stack online compiler using Next.js, TypeScript, Convex, and Tailwind CSS, supporting 10+ programming languages with 30% faster code execution. Implemented secure authentication with Clerk, subscription payments via Lemon Squeezy, and enforced TypeScript + ESLint standards to reduce bugs by 25% and improve long-term maintainability.",
    href: "https://dev-studio-4ci3.vercel.app/",
    image: "/assets/projects/devstudio.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Convex" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Clerk" },
    ],
  },
  {
    id: 4,
    name: "Dog Studio",
    description:"Designed and developed a high-performance, visually immersive Dog Studio landing page using Tailwind CSS, JavaScript , WebGL , and GSAP. The project focuses on smooth animations, responsive layouts, and engaging user interactions to deliver a modern, game-inspired web experience. Implemented scroll-based and timeline animations using GSAP to enhance visual storytelling while maintaining performance and clean UI structure.",
    href: "https://loan-credit-hub-landing-page.vercel.app/",
    image: "/assets/projects/DogStudio.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "ThreeJS" },
      { id: 2, name: "ReactJS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Webgl" },
    ],
  },
  {
    id: 5,
    name: "LEXA",
    description:
    "Spearheaded the development of a full-stack coding platform; project reduced code review time by 40%, saving developers an estimated 20 hours per week. Orchestrated a Dockerized CI/CD pipeline (GitHub Actions + AWS CodePipeline) with zero-downtime deployments on EC2, scalable infrastructure using containerization and self-driven testing, and AWS S3 for static asset management—lowering deployment time by 70% and increasing release reliability." ,
    href: "https://ds-asaga.vercel.app/",
    image: "/assets/projects/LEXA.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Exress.js" },
      { id: 2, name: "React.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "GenAI" },
      { id: 5, name: "Docker" },
      { id: 6, name: "AWS" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/mannu_gujjar_91/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/manvendra26/" },
  { name: "GitHub", href: "https://github.com/ManvendraPSdev" },
];
