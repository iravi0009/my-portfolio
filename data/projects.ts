export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;

  description: string;
  longDescription: string;

  techStack: string[];

  github: string;
  live: string;

  image: string;
  gallery: string[];

  features: string[];

  challenges: string[];

  architecture: string[];

  metrics: {
    title: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    slug: "portfolio",

    title: "3D Portfolio Website",

    category: "Full Stack",

    year: "2026",

    description:
      "Modern portfolio built using Next.js, TypeScript, Three.js and Framer Motion.",

    longDescription:
      "A premium developer portfolio featuring interactive 3D graphics, responsive layouts, GitHub integration, SEO optimization, animations, and reusable React components.",

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "React Three Fiber",
    ],

    features: [
      "Interactive 3D Hero",
      "GitHub Statistics",
      "Research Showcase",
      "Dynamic Project Pages",
      "Responsive Design",
      "SEO Optimized",
      "Custom Cursor",
      "Command Palette",
    ],

    challenges: [
      "Three.js optimization",
      "SSR hydration issues",
      "Responsive 3D scene",
      "Performance optimization",
    ],

    architecture: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js",
      "Portfolio Data",
      "Reusable Components",
    ],

    metrics: [
      {
        title: "Lighthouse",
        value: "100",
      },
      {
        title: "Components",
        value: "35+",
      },
      {
        title: "Performance",
        value: "98%",
      },
    ],

    github: "https://github.com/iravi0009/my-portfolio",

    live: "https://rajravi.dev",

    image: "/projects/portfolio/cover.png",

    gallery: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
    ],
  },

  {
    slug: "dnn-repair",

    title: "Autonomous DNN Repair",

    category: "Artificial Intelligence",

    year: "2026",

    description:
      "IEEE research project for repairing degraded neural networks.",

    longDescription:
      "Designed a unified framework integrating Gradient Anomaly Detection with LoRA fine-tuning to recover degraded Deep Neural Networks, achieving up to 98% model recovery accuracy.",

    techStack: [
      "Python",
      "TensorFlow",
      "LoRA",
      "Machine Learning",
    ],

    features: [
      "Automatic DNN Repair",
      "Gradient Analysis",
      "LoRA Fine-Tuning",
      "Model Evaluation",
      "IEEE Accepted Research",
    ],

    challenges: [
      "Fault localization",
      "Hyperparameter tuning",
      "Large model optimization",
      "Dataset balancing",
    ],

    architecture: [
      "Dataset",
      "Gradient Analysis",
      "Fault Detection",
      "LoRA Repair",
      "Evaluation",
    ],

    metrics: [
      {
        title: "Recovery",
        value: "98%",
      },
      {
        title: "Publication",
        value: "IEEE",
      },
      {
        title: "Framework",
        value: "UARF",
      },
    ],

    github: "https://github.com/iravi0009",

    live: "",

    image: "/projects/dnn/cover.png",

    gallery: [
      "/projects/dnn/1.png",
      "/projects/dnn/2.png",
    ],
  },

  {
  slug: "inventory-management",

  title: "Inventory Management System",

  category: "Backend Development",

  year: "2026",

  description:
    "CLI-based inventory management system built with Python and SQLite.",

  longDescription:
    "Developed an end-to-end inventory management application for managing products, tracking stock movements, maintaining automatic audit logs, generating inventory analytics, and providing low-stock alerts through a clean command-line interface.",

  techStack: [
    "Python",
    "SQLite",
    "SQL",
    "Tabulate",
    "CLI",
  ],

  features: [
    "Product CRUD Operations",
    "Stock IN/OUT Tracking",
    "Stock Adjustment",
    "Automatic Audit Logging",
    "Low-Stock Alerts",
    "Inventory Analytics",
    "Supplier Stock Summary",
    "Inventory Value Reports",
  ],

  challenges: [
    "Database relationship design",
    "Stock consistency management",
    "Transaction tracking",
    "Low-stock threshold handling",
    "Analytics query optimization",
  ],

  architecture: [
    "CLI Interface",
    "Product Management",
    "Stock Management",
    "SQLite Database",
    "Transaction Logging",
    "Analytics & Reports",
  ],

  metrics: [
    {
      title: "Database",
      value: "SQLite",
    },
    {
      title: "Tables",
      value: "5",
    },
    {
      title: "Interface",
      value: "CLI",
    },
  ],

  github: "https://github.com/iravi0009",

  live: "",

  image: "/projects/inventory/cover.png",

  gallery: [
    "/projects/inventory/1.png",
    "/projects/inventory/2.png",
    "/projects/inventory/3.png",
    "/projects/inventory/4.png",
  ],
},
];

export default projects;