import pharma from "../assets/images/industries/indus_1.jpg";
import food from "../assets/images/industries/indus_2.jpg";
import retail from "../assets/images/industries/indus_3.jpg";
import beauty from "../assets/images/industries/indus_4.jpg";
import fitness from "../assets/images/industries/indus_5.jpg";
import dairy from "../assets/images/industries/indus_6.jpg";
import automobile from "../assets/images/industries/indus_7.jpg";
import hotels from "../assets/images/industries/indus_8.jpg";
import manufacturing from "../assets/images/industries/indus_9.jpg";

import {
    Cog, Factory, Wifi, Headphones, ClipboardList, PencilRuler, Box, FlaskConical, ShieldCheck, Truck, Wrench, Cloud, BarChart3, CreditCard, Blocks, PackageSearch, Activity,
} from "lucide-react";

import { FiCpu, FiCloud, FiSettings, FiTool, FiZap,} from "react-icons/fi";

export const industries = [
    {
        title: "PHARMA & MEDICAL",
        image: pharma,
    },
    {
        title: "FOOD & BEVERAGE",
        image: food,
    },
    {
        title: "FMCG & RETAIL CHAIN",
        image: retail,
    },
    {
        title: "BEAUTY & COSMETICS",
        image: beauty,
    },
    {
        title: "FITNESS & WELLNESS",
        image: fitness,
    },
    {
        title: "DAIRY INDUSTRY",
        image: dairy,
    },
    {
        title: "AUTOMOBILE SECTOR",
        image: automobile,
    },
    {
        title: "HOTELS & HOSPITALITY",
        image: hotels,
    },
    {
        title: "MANUFACTURING & FACTORIES",
        image: manufacturing,
    },
];



export const processSteps = [
    {
        number: "1.",
        title: "Initial Consultation",
        description: "Define requirements",
        icon: ClipboardList,
    },
    {
        number: "2.",
        title: "Custom Design",
        description: "CAD/CAM modeling",
        icon: PencilRuler,
    },
    {
        number: "3.",
        title: "Prototype",
        description: "Build & validate",
        icon: Box,
    },
    {
        number: "4.",
        title: "Testing & Refinement",
        description: "Iterative testing",
        icon: FlaskConical,
    },
    {
        number: "5.",
        title: "Production Manufacturing",
        description: "Mass assembly line",
        icon: Factory,
    },
    {
        number: "6.",
        title: "Quality Control",
        description: "Rigorous inspection",
        icon: ShieldCheck,
    },
    {
        number: "7.",
        title: "Deployment",
        description: "Global shipping",
        icon: Truck,
    },
    {
        number: "8.",
        title: "Maintenance",
        description: "Ongoing support",
        icon: Wrench,
    },
];

export const techfeatures = [
  {
    type: "featured",
    title: "Cloud Monitoring",
    description:
      "Centralized fleet management with real-time telemetry, predictive maintenance alerts, and secure OTA updates.",
    icon: Cloud,
    metrics: [
      {
        label: "Uptime",
        value: "99.98%",
        highlight: true,
      },
      {
        label: "Latency",
        value: "12ms",
        highlight: false,
      },
    ],
  },
  {
    title: "Real-Time Analytics",
    description:
      "Deep data insights into sales velocity and operational efficiency.",
    icon: BarChart3,
  },
  {
    title: "Cashless Payments",
    description:
      "NFC, RFID, and secure mobile wallet integration protocols.",
    icon: CreditCard,
  },
  {
    title: "Modular Hardware Systems",
    description:
      "Hot-swappable components designed for rapid field replacement and scalable upgrades without full system downtime.",
    icon: Blocks,
  },
  {
    title: "Inventory Intelligence",
    description:
      "Automated stock tracking and dynamic reordering algorithms.",
    icon: PackageSearch,
  },
  {
    title: "Remote Diagnostics",
    description:
      "Self-healing software routines and hardware fault isolation.",
    icon: Activity,
  },
];

export const features = [
        {
            title: "Custom Engineering",
            description: "Tailored hardware and…",
            icon: Cog,
        },
        {
            title: "OEM/ODM Manufacturing",
            description: "In-house production…",
            icon: Factory,
        },
        {
            title: "IoT Connected",
            description: "Smart machines with remote…",
            icon: Wifi,
        },
        {
            title: "Cashless Ready",
            description: "Integrated digital payment…",
            icon: CreditCard,
        },
        {
            title: "Cloud Fleet Manufacturing",
            description: "Real-time inventory and…",
            icon: Cloud,
        },
        {
            title: "End-to-End Support",
            description: "Installation, maintenance,…",
            icon: Headphones,
        },
    ];

export const aboutFeatures = [
    {
        title: "IoT Architecture",
        description:
            "Real-time telemetry and IoT-connected sensors provide synchronous operation and live monitoring across all deployed machines.",
        icon: FiCpu,
    },
    {
        title: "Applied AI",
        description:
            "Predictive maintenance algorithms and dynamic inventory routing maximize uptime and revenue.",
        icon: FiZap,
    },
    {
        title: "Cloud Orchestration",
        description:
            "Manage your vending network through a centralized cloud platform with live operational insights.",
        icon: FiCloud,
    },
    {
        title: "Custom Machine Manufacturing",
        description:
            "Custom-built vending machines engineered around your products, capacity, and business requirements.",
        icon: FiTool,
    },
    {
        title: "Automation Engineering",
        description:
            "Smart automation designed for efficient dispensing, inventory control, and seamless operations.",
        icon: FiSettings,
    },
];

export const aboutWorkflowSteps = [
    {
        number: "01",
        title: "Consultation",
        description:
            "Understanding business goals and technical requirements.",
    },
    {
        number: "02",
        title: "Industrial Design",
        description:
            "Engineering the machine structure and user experience.",
    },
    {
        number: "03",
        title: "Prototyping",
        description:
            "Building and validating functional prototypes.",
    },
    {
        number: "04",
        title: "Software Integration",
        description:
            "Connecting hardware with cloud software and IoT systems.",
    },
    {
        number: "05",
        title: "Quality Assurance",
        description:
            "Testing performance, reliability, and safety standards.",
    },
    {
        number: "06",
        title: "Deployment",
        description:
            "Installation, activation, and ongoing operational support.",
    },
];

 export const footerQuickLinks = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about-us" },
        { label: "Products", path: "/products" },
        { label: "Solutions", path: "/solutions" },
        { label: "Blogs", path: "/blog" },
        { label: "Contact", path: "/contact-us" },
    ];

  export  const footerProductsLink = [
        { label: "Caftina", path: "/products/caftina" },
        { label: "Vendshop", path: "/products/vendshop" },
        { label: "Smart Slim", path: "/products/smartslim" },
        { label: "Clover Mini", path: "/products/clovermini" },
        { label: "Vendimini", path: "/products/vendmini" },
        { label: "Vendelle", path: "/products/vendelle" },
    ];