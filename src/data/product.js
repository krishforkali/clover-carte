// data/products.js

import { BiGridAlt } from "react-icons/bi";
import { SvgIcon } from "../components/svg/icons";
import { BsBoxSeam } from "react-icons/bs";
import { FaExchangeAlt, FaTv } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
import {
  MdCoffeeMaker,
  MdOutlineCoffeeMaker,
  MdOutlineQrCodeScanner,
  MdOutlineTouchApp,
} from "react-icons/md";
import { IoCloudOutline } from "react-icons/io5";
import { HiOutlineArchiveBox } from "react-icons/hi2";

export const products = [
  {
    slug: "caftina",
    name: "Caftina",
    subtitle: "Smart Hot & Cold Beverage Combo Vending Machine",
    image: "/images/machine/m1.jpg",
    description:
      "The Caftina Hot & Cold Beverage Vending Machine is designed to deliver fresh, café-style beverages quickly and conveniently with easy one-touch operation. It automatically prepares and dispenses beverages within seconds, including coffee, cappuccino, latte, espresso, tea, and hot chocolate. With advanced brewing technology, consistent taste, hygienic dispensing, and easy maintenance, Caftina is an ideal smart beverage vending solution for modern workplaces and commercial spaces.",

    idealFor: [
      "Beverage Counters",
      "Premium Beverage Counters",
      "Workspaces",
      "Retail Beverage Environments",
      "Smart Cafes",
      "Hospitality Spaces",
    ],
    seo: {
      metaTitle: "Caftina Hot & Cold Beverage Vending Machine | Clover Carte",
      metaDiscription:
        "Discover Caftina by Clover Carte: an automated hot & cold beverage vending machine featuring smart dispensing, IoT telemetry, and cashless UPI payments.",
      metaKeywords: [
        "Caftina Hot & Cold Beverage Machine",
        "Automatic Hot & Cold Beverage Machine",
        "Hot & Cold Drink Vending Machine",
        "Commercial Beverage Vending Machine",
        "Tea Coffee Vending Machine",
        "Automatic Hot & Cold Beverage",
        "Customized Recipe Maker",
      ],
    },

    specs: [
      {
        label: "Capacity",
        value: "45L Total / 34L Usable",
        Icon: BsBoxSeam,
      },
      {
        label: "OUTPUT",
        value: "Up To 14 Bevrages",
        Icon: SvgIcon.SlotIcon,
        color: "green",
      },
      {
        label: "SYSTEM",
        value: "Hot & Cold Dispensing",
        Icon: MdCoffeeMaker,
        color: "green",
      },
    ],
    specsDtl: [
      {
        label: "Capacity",
        value: "45L Total / 34L Usable",
        Icon: SvgIcon.CapacityIcon,
      },
      {
        label: "Output",
        value: "Up To 14 Beverages",
        Icon: SvgIcon.SlotIcon,
      },
      {
        label: "System",
        value: "Hot & Cold Dispensing",
        Icon: MdOutlineCoffeeMaker,
      },
      {
        label: "Conectivity",
        value: "Wi-Fi / CAN / RS485",
        Icon: SvgIcon.Iotsensor,
      },
      {
        label: "Temp Range",
        value: "4°C - 25°C",
        Icon: SvgIcon.TemperatureIcon,
      },
      {
        label: "Power",
        value: "220VAC / 5 AMP",
        Icon: SvgIcon.PowerIcon,
      },
    ],

    highlights: [
      "IoT Enabled",
      "Smart Dispensing",
      "Cashless Payments",
      "Cloud Monitoring",
    ],
    features: [
      {
        title: "Temperature Controlled Storage for Perishable Ingredients",
        description:
          "Ensuring freshness of milk and other beverage essentials.",
        icon: "snow",
      },
      {
        title: "Food Grade Non-Contact Pumps for Fluid",
        description: "Hygienic dispensing with high-precision pump technology.",
        icon: "water-drop",
      },
      {
        title: "Food grade granule / powder dispenser with auto stirring",
        description:
          "Perfectly blended premixes with automated stirring mechanisms.",
        icon: "menu-dots",
      },
      {
        title:
          "Round-the-clock cloud connected sensors for quality and quantity check.",
        description:
          "Real-time inventory monitoring and machine health diagnostics.",
        icon: "cloud-sync",
      },
      {
        title: "Intelligent mixing, heating, re-thermalization system.",
        description:
          "Smart temperature management for optimal hot and cold beverages.",
        icon: "coffee-maker",
      },
      {
        title: "Access controlled delivery platform.",
        description:
          "Secure dispense area protecting the user and the product.",
        icon: "lock-open",
      },
      {
        title: "UV sterilization for access area.",
        description:
          "Automatic disinfection cycle for a hygienic customer experience.",
        icon: "sanitizer",
      },
      {
        title: "Electronically locked storage / access area.",
        description:
          "Robust security for internal components and ingredient storage.",
        icon: "admin-security",
      },
      {
        title: "Real Time Data logging.",
        description: "Track every transaction and usage metric in real-time.",
        icon: "bar-chart",
      },
      {
        title:
          "Estimated delivery time notification, before accepting your order or payment",
        description:
          "Enhancing customer experience with transparent wait times.",
        icon: "stopwatch",
      },
    ],

    specification: [
      {
        label: "Dimensions (W x L x H)",
        value: "862 mm × 637 mm × 759 mm",
      },
      {
        label: "Weight",
        value: "90 kg",
      },
      {
        label: "Total Temperature-Controlled Storage",
        value: "45 Liters",
      },
      {
        label: "Usable Storage Capacity",
        value: "34 Liters",
      },
      {
        label: "Power Supply",
        value: "220 VAC, 50/60Hz, 5 Amp",
      },
      {
        label: "Fluid Feeders",
        value: "5 (3 temp-controlled + 2 room temperature)",
      },
      {
        label: "Mix Output Capacity",
        value: "Up to 9+ beverage",
      },
      {
        label: "Granule/Powder Feeder",
        value: "2 units (optional)",
      },
      {
        label: "Ambient Storage & Dispense",
        value: "Supported",
      },
      {
        label: "Connectivity",
        value: "Wi-Fi, CAN, RS485",
      },
    ],
    faqs: [
      {
        question: "What beverages can Caftina prepare?",
        answer:
          "Caftina can serve coffee, tea, hot chocolate, soups, and other hot beverages depending on the selected configuration.",
      },
      {
        question: "Is Caftina suitable for offices?",
        answer:
          "Yes. It is designed for offices, hotels, hospitals, factories, and commercial environments.",
      },
      {
        question: "Can beverage recipes be customized?",
        answer:
          "Yes. Beverage recipes, ingredient ratios, and menu options can be configured.",
      },
      {
        question: "Does Caftina support digital payments?",
        answer: "Yes. Cashless payment options are available.",
      },
    ],
  },
  {
    slug: "vendshop",
    name: "Vendshop",
    subtitle: "Smart Snack & Cold Beverage Combo Vending Machine",
    image: "/images/machine/m2.jpg",
    seo: {
      metaTitle: "Vendshop Smart Snack Cold Beverage Combo Vending Machine",
      metaDiscription:
        "Explore the Vendshop Smart Snack Vending Machine by Clover Carte, designed for convenient snack dispensing, cashless payments, smart monitoring, and automated retail.",
      metaKeywords: [
        "Snack and Cold Beverage Vending Machine ",
        "Smart Combo Vending Machine ",
        "Refrigerated Snack and Drink Dispenser ",
        "Cashless Snack Vending Machine ",
        "Commercial Beverage and Snack Vending ",
        "Office Pantry Snack Vending Machine ",
        "IoT Telemetry Snack Dispenser ",
        "Automated snack vending machine",
        "Vending Machine for Snacks and Drinks",
        "Cold Beverage Vending Machine",
        "Snack & Cold Beverage Vending Machine",
      ],
    },

    description:
      "Vendshop is a smart vending machine designed to dispense snacks and chilled beverages from a single platform. Built for high-footfall locations, it combines industrial grade reliability, cashless payment support, and real-time inventory management for efficient automated retail. With complete OEM/ODM manufacturing and customized vending solutions, Vendshop can be tailored to your products, branding, and operational needs.",

    idealFor: [
      "Corporate Offices",
      "Hospitals",
      "Transit Areas",
      "Factories",
      "Colleges",
      "Airports",
      "Malls",
    ],
    highlights: [
      "AI Enabled Infrared Sensors",
      "Embraco Compressor",
      "Electronic Locks",
    ],

    specs: [
      {
        label: "STORAGE",
        value: "Up To 500 Products",
        Icon: HiOutlineArchiveBox,
      },
      {
        label: "SLOTS",
        value: "60 Slots / 6 Trays",
        Icon: BiGridAlt,
      },
      {
        label: "Payment",
        value: "UPI / QR",
        Icon: MdOutlineQrCodeScanner,
      },
    ],
    specsDtl: [
      {
        label: "Storage",
        value: "Up To 500 Products",
        Icon: HiOutlineArchiveBox,
      },
      {
        label: "Slots",
        value: "60 Slots / 6 Trays",
        Icon: SvgIcon.SlotIcon,
      },
      {
        label: "Payment",
        value: "UPI / QR",
        Icon: SvgIcon.WeightIcon,
      },
      {
        label: "Touchscreen",
        value: "22 Inch",
        Icon: SvgIcon.Touchscreen,
      },
      {
        label: "Temp Range",
        value: "4°C - 25°C",
        Icon: SvgIcon.TemperatureIcon,
      },
      {
        label: "Power",
        value: "36 Watts",
        Icon: SvgIcon.PowerIcon,
      },
    ],

    features: [
      {
        title: "Smart Combo Dispensing",
        description:
          "Snacks and cold beverages from a single compact unit, eliminating the need for multiple machines, separate power lines, or additional operational space.",
        icon: "transfer",
      },
      {
        title: "Precision Drop Detection",
        description:
          "Advanced smart sensors accurately verify every product dispense, reducing errors and ensuring reliable customer transactions.",
        icon: "radar",
      },
      {
        title: "Intelligent Cooling System",
        description:
          "Temperature-controlled refrigeration maintains optimal freshness for beverages and perishable products throughout operation.",
        icon: "snow",
      },
      {
        title: "Real-Time IoT Monitoring",
        description:
          "Cloud-connected telemetry continuously tracks inventory levels, machine health, sales activity, and operational alerts remotely.",
        icon: "cloud-outline",
      },
      {
        title: "All-Mode Cashless Payment",
        description:
          "Supports UPI, QR codes, NFC, debit/credit cards, and digital wallets for seamless and frictionless checkout experiences.",
        icon: "contactless-payment",
      },
      {
        title: "Custom Branding & UI",
        description:
          "Machine wraps, touchscreen UI, and retail interactions can be fully customized to match brand identity and deployment requirements.",
        icon: "color-lens",
      },
      {
        title: "Energy Efficient Architecture",
        description:
          "Optimized cooling systems and intelligent power management reduce energy consumption while maintaining high operational performance.",
        icon: "electric",
      },
      {
        title: "24/7 Automated Operation",
        description:
          "Built for continuous unmanned retail environments with self-diagnostics, remote monitoring, and reliable automated dispensing.",
        icon: "clock",
      },
    ],
    specification: [
      {
        label: "Machine Type",
        value: "Tray-Based Combo Vending Machine",
      },
      {
        label: "Number of Trays & Slots",
        value: "6 Trays and  60 Slots",
      },
      {
        label: "Product Capacity",
        value: "500 Hundred",
      },
      {
        label: "Dispensing mechanism",
        value: "Spiral / Conveyor",
      },
      {
        label: "Dimensions (H × W × D)",
        value: "1830 × 915 × 815 mm",
      },
      {
        label: "Weight",
        value: "Approx. 350 kg",
      },
      {
        label: "Voltage",
        value: "220V AC (±20%)",
      },
      {
        label: "Power Consumption",
        value: "36 Watts",
      },
      {
        label: "Temperature Range",
        value: "5°C to 25°C",
      },
      {
        label: "Connectivity",
        value: "Connectivity",
      },
      {
        label: "Payment Methods",
        value: "Wi-Fi Enabled / SIM-Based Connectivity",
      },
    ],
    faqs: [
      {
        question: "What products can Vendshop dispense?",
        answer:
          "Vendshop is designed to dispense both snacks and cold beverages from a single machine.",
      },
      {
        question: "Is Vendshop suitable for high-footfall locations?",
        answer:
          "Yes. It is ideal for offices, colleges, hospitals, retail stores, and public spaces.",
      },
      {
        question: "What payment methods are supported?",
        answer:
          "UPI, QR codes, debit/credit cards, and other supported cashless payment methods.",
      },
      {
        question: "Can Vendshop be customized?",
        answer:
          "Yes. Branding, product layout, UI, and payment options can all be customized.",
      },
    ],
  },
  {
    slug: "vendmini",
    name: "Vendmini",
    subtitle: "Compact Essentials & Convenience Vending Machine",
    image: "/images/machine/m3.jpg",
    description:
      "Vendimini is a compact smart vending machine built for efficient dispensing in offices, clinics, retail stores, and reception areas. It combines industrial-grade construction with digital payment support and real-time inventory management via VendiCarte. A flexible customized vending solution, it delivers reliable performance in compact spaces.",
    seo: {
      metaTitle: "Vendmini Compact Essentials Vending Machine | Clover Carte",
      metaDiscription:
        "Discover Vendmini by Clover Carte: a space-saving smart vending machine equipped with conveyor delivery, UV sterilization, and temperature control for essential goods.",
      metaKeywords: [
        "Vendmini vending machine",
        "compact smart vending machine",
        "space saving vending machine India",
        "mini vending machine for essentials",
        "conveyor belt vending machine",
        "UV sterilized vending machine",
        "temperature controlled mini vending machine",
        "cashless essential item dispenser",
        "IoT mini vending kiosk",
        "small footprint automated retail dispenser",
      ],
    },

    idealFor: [
      "Hospitals",
      "Hostels",
      "Transit Areas",
      "Convenience Retail",
      "Offices",
      "Public Spaces",
    ],

    specs: [
      {
        label: "STORAGE",
        value: "30+ Products",
        Icon: BsBoxSeam,
      },
      {
        label: "Conveyer Belt",
        value: "6 Max",
        Icon: BiGridAlt,
      },
      {
        label: "Feature",
        value: "Cloud Monitoring",
        Icon: IoMdCloudOutline,
      },
    ],
    specsDtl: [
      {
        label: "Storage",
        value: "30 + Products",
        Icon: SvgIcon.CapacityIcon,
      },
      {
        label: "Conveyer Belt",
        value: "6 max",
        Icon: SvgIcon.SlotIcon,
      },
      {
        label: "Feature",
        value: "Cloud Monitoring",
        Icon: IoCloudOutline,
      },
      {
        label: "Display",
        value: "600 mm",
        Icon: FaTv,
      },
      {
        label: "Power",
        value: "220 VAC / 5 AMP",
        Icon: SvgIcon.PowerIcon,
      },
      {
        label: "IOT",
        value: "Wi-Fi , CAN , RS485",
        Icon: SvgIcon.Iotsensor,
      },
    ],

    highlights: [
      "UV sterilization",
      "Real-Time Data Logging",
      "Temperature-Controlled Storage",
    ],
    features: [
      {
        title: "Temperature Controlled Storage (optional)",
        description:
          "Customizable cooling settings to maintain freshness of perishable items.",
        icon: "temperature",
      },
      {
        title: "Multiple Size Product Storage",
        description:
          "Flexible tray configurations for various packaging shapes and sizes.",
        icon: "slot",
      },
      {
        title: "Video Advertisement Display",
        description:
          "Integrate high-definition marketing content to engage users during purchase.",
        icon: "video",
      },
      {
        title: "Cloud Connected sensors",
        description:
          "Round-the-clock monitoring for quality and quantity checks with real-time alerts.",
        icon: "cloud-done",
      },
      {
        title: "Access Controlled Delivery Platform",
        description:
          "Secured dispensing mechanism ensuring only authorized transactions are completed.",
        icon: "hand-pointer",
      },
      {
        title: "UV Sterilization for access area",
        description:
          "Automatic UV-C cleaning of the delivery bin after every interaction.",
        icon: "clean-hands",
      },
      {
        title: "Electronically locked storage",
        description:
          "Smart locks for storage and access areas, with estimated delivery time notifications.",
        icon: "user-lock",
      },
      {
        title: "real time data logging",
        description:
          "Comprehensive transaction logs for better inventory management and sales analysis.",
        icon: "database-edit",
      },
    ],
    specification: [
      {
        label: "Dimensions (W × L × H)",
        value: "1055 × 456 × 505 mm",
      },
      {
        label: "Display Size",
        value: "600 mm",
      },
      {
        label: "Weight",
        value: "25 kg",
      },
      {
        label: "Conveyor Belt Size",
        value: "LW-800-100 mm",
      },
      {
        label: "Conveyor Belt Number",
        value: "6 max",
      },
      {
        label: "Supply Voltage",
        value: "220 VAC, 50/60Hz, 5 Amp",
      },
      {
        label: "Connectivity",
        value: "Wi-Fi, CAN, RS485",
      },
      {
        label: "Granule/Powder Feeder",
        value: "2 units (optional)",
      },
      {
        label: "Ambient Storage & Dispense",
        value: "Supported",
      },
      {
        label: "Connectivity",
        value: "Wi-Fi, CAN, RS485",
      },
    ],
    faqs: [
      {
        question: "Where is Vendimini best suited?",
        answer:
          "Vendimini is ideal for compact locations such as offices, clinics, educational institutions, and reception areas.",
      },
      {
        question: "Can Vendimini be customized?",
        answer:
          "Yes. Branding, product configuration, and software can be customized.",
      },
      {
        question: "Does Vendimini support cashless payments?",
        answer: "Yes. Multiple digital payment methods are supported.",
      },
      {
        question: "Is maintenance easy?",
        answer:
          "Yes. The machine is designed for simple restocking and maintenance.",
      },
    ],
  },
  {
    name: "SmartSlim",
    slug: "smartslim",
    subtitle: "Smart Snack & Cold Beverage Combo Vending Machine",
    image: "/images/machine/m4.jpg",

    description:
      "Smart Slim is a compact smart vending machine designed for locations where space is limited without compromising performance. It features cashless payments, intelligent dispensing, and real-time inventory management through VendiCarte. Built for reliable automated retail, it also supports customized vending solutions and OEM branding.",
    seo: {
      metaTitle:
        "SmartSlim - Compact Smart Snack & Cold Beverage Vending Machine",
      metaDiscription:
        "SmartSlim is a compact snack and cold beverage combo vending machine with cashless payments, smart dispensing, and real-time inventory management.",
      metaKeywords: [
        "SmartSlim vending machine",
        "SmartSlim vending machine India",
        "smart vending machine",
        "snack and beverage vending machine",
        "snack vending machine",
        "cold beverage vending machine",
        "combo vending machine",
        "compact vending machine",
        "smart vending machine manufacturer",
        "vending machine manufacturers",
      ],
    },
    idealFor: [
      "Premium Retail",
      "Corporate Spaces",
      "Workspaces",
      "Fitness Centers",
      "Lifestyle Stores",
      "Smart Display Environments",
    ],

    specs: [
      {
        label: "Capacity",
        value: "Multi sized Products",
        Icon: BsBoxSeam,
      },
      {
        label: "SYSTEM",
        value: "Elevator Delivery",
        Icon: BiGridAlt,
      },
      {
        label: "Machine Type",
        value: "Slim Vertical",
        Icon: SvgIcon.VendingMachine,
      },
    ],
    specsDtl: [
      {
        label: "Capacity",
        value: "Multi-Size Products",
        Icon: SvgIcon.CapacityIcon,
      },
      {
        label: "Delivery",
        value: "Elevator Ready",
        Icon: SvgIcon.SlotIcon,
      },
      {
        label: "Machine Type",
        value: "Slim Vertical",
        Icon: SvgIcon.VendingMachine,
      },
      {
        label: "Product Type",
        value: "Fragile & Premium",
        Icon: SvgIcon.BrokeWineGlass,
      },
      {
        label: "Space Required",
        value: "~8 Sq. Ft.",
        Icon: SvgIcon.SpaceIcon,
      },
      {
        label: "Connectivity",
        value: "Wi-Fi / CAN / RS485",
        Icon: MdOutlineQrCodeScanner,
      },
    ],

    highlights: [
      "Compact Design",
      "IoT Enabled",
      "Smart Cooling",
      "Remote Monitoring",
    ],
    features: [
      {
        title: "Compact Footprint",
        description:
          "Optimized design for high-traffic areas with limited floor space.",
        icon: "screenshot",
      },
      {
        title: "Digital Display Interface",
        description:
          "Modern interactive screen for product browsing and advertisement playback.",
        icon: "display",
      },
      {
        title: "Secure Electronic Locking System",
        description:
          "Industrial-grade security to protect premium inventory and components.",
        icon: "lock-plus",
      },
      {
        title: "Customizable Tray Configuration",
        description:
          "Flexible layout to accommodate diverse product shapes and sizes.",
        icon: "server-configuration",
      },
      {
        title: "Supports Ambient Products",
        description:
          "Ideal for electronics, cosmetics, and non-perishable premium retail goods.",
        icon: "temperature",
      },
      {
        title: "Designed for Fragile and Premium Item",
        description:
          "Specialized handling to ensure luxury items are delivered in perfect condition.",
        icon: "sparkles",
      },
      {
        title: "Multi-Size Product Support",
        description:
          "Dispense everything from small accessories to larger tech gadgets seamlessly.",
        icon: "layout",
      },
      {
        title: "Hybrid Delivery System",
        description:
          "Uses a combination of elevator-based delivery system and conveyor belt / coil mechanism.",
        icon: "elevator",
      },
    ],
    specification: [
      {
        label: "Dimensions (W × L × H)",
        value: "560 mm × 700 mm × 1723 mm",
      },
      {
        label: "Space Required",
        value: "~8 sq. ft.",
      },
      {
        label: "Machine Type",
        value: "Slim / vertical vending machine",
      },
      {
        label: "Dispensing Mechanism",
        value: "34 Liters",
      },
      {
        label: "Power Supply",
        value: "Elevator system (safe product delivery)",
      },
      {
        label: "Connectivity",
        value: "Wi-Fi, CAN, RS485",
      },
    ],
    faqs: [
      {
        question: "What products can Smart Slim dispense?",
        answer:
          "Smart Slim is suitable for packaged snacks, beverages, and convenience products.",
      },
      {
        question: "Is Smart Slim designed for compact spaces?",
        answer:
          "Yes. Its slim footprint makes it suitable for locations with limited floor space.",
      },
      {
        question: "Can Smart Slim be remotely monitored?",
        answer:
          "Yes. Through VendiCarte, operators can monitor inventory, sales, and machine status remotely.",
      },
      {
        question: "Can Smart Slim be branded?",
        answer:
          "Yes. The exterior graphics, UI, and branding can be customized.",
      },
    ],
  },
  {
    name: "Clover Mini",
    slug: "clovermini",
    subtitle: "Compact Smart Snack & Cold Beverage Vending Machine",
    image: "/images/machine/m5.jpg",
    description:
      "Clover Mini is a compact smart vending machine designed to dispense snacks and chilled beverages efficiently. Ideal for offices, retail spaces, and high-traffic locations, it features cashless payments, reliable performance, and smart inventory management. With flexible OEM/ODM customization, Clover Mini can be tailored to your products, branding, and business requirements.",
    seo: {
      metaTitle:
        "Clover Mini- Compact Smart Snack & Cold Beverage Vending Machine",
      metaDiscription:
        "Clover Mini is a compact smart snack and beverage vending machine for offices, retail stores, gyms, cafes, and modern workplaces.",
      metaKeywords: [
        "Clover Mini Vending Machine",
        "Smart Vending Machine in India",
        "Snack & Beverage Vending Machine",
        "Snack Vending Machine",
        "Beverage Vending Machine",
        "Combo Vending Machine",
        "Automatic Vending Machine",
        "Smart Snack Vending Machine",
        "Cold Beverage Vending Machine",
        "Compact Vending Machine",
        "Vending Machine Manufacturer in India",
      ],
    },
    idealFor: [
      "Offices ",
      "Cafes ",
      "Hospitals ",
      "Gyms ",
      "Hostels ",
      "Retail Stores ",
      "Small Workspaces",
    ],

    specs: [
      {
        label: "Capacity",
        value: "4 Rows / 12 Conveyors",
        Icon: BsBoxSeam,
      },
      {
        label: "Slots",
        value: "60 Slots / 6 Trays",
        Icon: BiGridAlt,
      },
      {
        label: "Payment",
        value: "UPI / QR",
        Icon: MdOutlineQrCodeScanner,
      },
    ],
    specsDtl: [
      {
        label: "Capacity",
        value: "4 Rows / 12 Conveyer",
        Icon: SvgIcon.CapacityIcon,
      },
      {
        label: "Slots",
        value: "60 Slots / 6 Trays",
        Icon: SvgIcon.SlotIcon,
      },
      {
        label: "Weight",
        value: "350 Kg",
        Icon: SvgIcon.WeightIcon,
      },
      {
        label: "Touchscreen",
        value: "22 Inch",
        Icon: SvgIcon.Touchscreen,
      },
      {
        label: "Temp Range",
        value: "4°C - 25°C",
        Icon: SvgIcon.TemperatureIcon,
      },
      {
        label: "Power",
        value: "36 Watts",
        Icon: SvgIcon.PowerIcon,
      },
    ],
    features: [
      {
        title: "Slim vertical design",
        description:
          "Sleek profile optimized for narrow corridors and tight corners.",
        icon: "arrows-collapse",
      },
      {
        title: "Small footprint (easy placement)",
        description:
          "Minimum floor area requirements make it perfect for any location.",
        icon: "layout-outline",
      },
      {
        title: "Digital selection interface",
        description:
          "User-friendly touchscreen or keypad selection for easy browsing.",
        icon: "touch",
      },
      {
        title: "Secure locking system",
        description: "Robust anti-theft mechanisms to ensure product security.",
        icon: "lock",
      },
      {
        title: "IoT-enabled (optional integration)",
        description:
          "Supports UPI, QR codes, NFC, debit/credit cards, and digital wallets for seamless and frictionless checkout experiences.",
        icon: "iot",
      },
      {
        title: "Suitable Ambient items",
        description:
          "Machine wraps, touchscreen UI, and retail interactions can be fully customized to match brand identity and deployment requirements.",
        icon: "container-slot",
      },
      {
        title: "Designed for Small packaged goods",
        description:
          "Specifically built to handle standard snack and beverage packages.",
        icon: "package",
      },
      {
        title: "Compatible with vendicarte software",
        description:
          "Seamlessly sync with VendiCarte for advanced sales tracking and inventory monitoring.",
        icon: "bar-chart",
      },
    ],
    specification: [
      {
        label: "Tray & Capacity",
        value: "4 rows / 12 conveyors",
      },
      {
        label: "Space Required",
        value: "~8 sq. ft.",
      },
      {
        label: "Machine Type",
        value: "45 Liters",
      },
      {
        label: "Dispensing Mechanism",
        value: "Slim / vertical vending machine",
      },
      {
        label: "Connectivity",
        value: "Elevator system (safe product delivery)",
      },
      {
        label: "Payment System",
        value: "Wi-Fi, CAN, RS485",
      },
      {
        label: "Mix Output Capacity",
        value: "UPI / QR payments",
      },
      {
        label: "Software Compatibility",
        value:
          "VendiCarte software for sales tracking and inventory monitoring",
      },
    ],
    faqs: [
      {
        question: "What is the Smart Slim 3 Vending Machine by Clover Carte?",
        answer:
          "The Smart Slim 3 Vending Machine by Clover Carte is a smart, compact vending solution designed to dispense snacks, beverages, and other packaged products. It offers secure dispensing, cashless payment options, and reliable performance for various commercial environments.",
      },
      {
        question: "Where can the Smart Slim 3 Vending Machine be installed?",
        answer:
          "The Smart Slim 3 Vending Machine in India is ideal for offices, hospitals, hotels, colleges, shopping malls, airports, railway stations, manufacturing units, retail stores, gyms, and co-working spaces.",
      },
      {
        question:
          "Does the Smart Slim 3 Vending Machine support digital payments?",
        answer:
          "Yes. The machine can be integrated with cashless payment methods such as UPI, QR code payments, debit/credit cards, and digital wallets, providing customers with a fast and convenient purchasing experience.",
      },
      {
        question:
          " Can I customize the Smart Slim 3 Vending Machine for my business?",
        answer:
          "Absolutely. A Customized Vending Machine by Clover Carte can be tailored to your business requirements with custom branding, product configurations, payment options, software features, and machine design.",
      },
      {
        question:
          "What products can be sold using the Smart Slim 3 Vending Machine?",
        answer:
          "The machine can dispense packaged snacks, beverages, chocolates, healthy food items, personal care products, electronics accessories, healthcare products, and many other retail items depending on the machine configuration.",
      },
      {
        question: "Is the Smart Slim 3 Vending Machine energy efficient?",
        answer:
          "Yes. The Smart Slim 3 is designed with energy-efficient components that help reduce electricity consumption while delivering reliable performance.",
      },
      {
        question:
          "Why should businesses invest in a Smart Slim 3 Vending Machine?",
        answer:
          "Businesses benefit from 24/7 product availability, lower operational costs, reduced manpower requirements, cashless transactions, improved customer convenience, and increased revenue opportunities.",
      },
      {
        question: "Why choose Clover Carte for vending machine solutions?",
        answer:
          "Clover Carte offers innovative, high-quality vending machines with customization options, dependable performance, modern technology, and dedicated customer support for businesses across India.",
      },
    ],

    highlights: [
      "Slim Vertical Design",
      "Small Footprint",
      "Digital Interface",
      "IoT Enabled",
    ],
  },

  {
    name: "Vendelle",
    slug: "vendelle",
    subtitle: "Smart Beauty, Personal Care & Hygiene Vending Machine",
    image: "/images/machine/m6.jpg",

    description:
      "Vendelle is a versatile smart vending machine designed to dispense a wide range of packaged products. Built for retail, healthcare, hospitality, and corporate environments, it features cloud-based monitoring, cashless payments, and real-time inventory management. With OEM/ODM manufacturing and customized configurations, Vendelle provides a scalable automated retail solution.",
    seo: {
      metaTitle:
        "Vendelle - Smart Beauty, Personal Care & Hygiene Vending Machine",
      metaDiscription:
        "Vendelle is a smart cosmetic and beauty product vending machine with touchscreen display, cashless payments, cloud monitoring, and customized OEM/ODM options.",
      metaKeywords: [
        "Vendelle beauty vending machine",
        "Smart cosmetic vending machine",
        "Automated beauty retail kiosk",
        "Skincare product vending machine",
        "Cashless cosmetic vending machine",
        "Airport beauty vending machine",
        "Cloud based retail vending machine",
        "OEM cosmetic vending machine",
        "Touchscreen beauty product dispenser",
        "Automated retail solution for cosmetics",
      ],
    },
    idealFor: [
      "Beauty & Cosmetics",
      " Menstrual Hygiene",
      " Personal Care Wellness",
      "Travel Essentials",
    ],

    specs: [
      {
        label: "Capacity",
        value: "10 Products",
        Icon: BsBoxSeam,
      },
      {
        label: "Configuration",
        value: "5 Rows / 10 Coil",
        Icon: BiGridAlt,
      },
      {
        label: "Display",
        value: "Touchscreen Display",
        Icon: MdOutlineTouchApp,
      },
    ],
    specsDtl: [
      { label: "Capacity", value: "10 Products", Icon: SvgIcon.CapacityIcon },
      {
        label: "Configuration",
        value: "5 Rows / 10 Coil",
        Icon: SvgIcon.SlotIcon,
      },
      {
        label: "Display",
        value: "Touchscreen Display",
        Icon: SvgIcon.Touchscreen,
      },
      {
        label: "Payment",
        value: "UPI / QR",
        Icon: MdOutlineQrCodeScanner,
      },
      {
        label: "Connectivity",
        value: "Wi-Fi , CAN , RS485",
        Icon: SvgIcon.Iotsensor,
      },
      {
        label: "Experience",
        value: "Virtual Try-On",
        Icon: FaExchangeAlt,
      },
    ],
    features: [
      {
        title: "Virtual Try-On technology",
        description:
          "Cutting-edge digital interface allowing users to see products in real-time before purchase.",
        icon: "transfer",
      },
      {
        title: "Slim (SLIC) vending format",
        description:
          "A compact and space-efficient design perfect for narrow retail aisles and corridors.",
        icon: "radar",
      },
      {
        title: "Premium product display",
        description:
          "Enhanced lighting and clear visibility to showcase high-end beauty and cosmetic items.",
        icon: "snow",
      },
      {
        title: "Digital screen with AR-based try-on",
        description:
          "Users can explore lipstick shades, try makeup virtually, and choose products with confidence.",
        icon: "cloud-outline",
      },
      {
        title: "Real-time tracking: Sales/Inventory",
        description:
          "Instant data synchronization for accurate monitoring of stock levels and daily transaction performance.",
        icon: "contactless-payment",
      },
      {
        title: "Digital product catalog",
        description:
          "Interactive touch menu for browsing detailed product descriptions, ingredients, and usage guides.",
        icon: "color-lens",
      },
      {
        title: "Digital product catalog",
        description:
          "Saves valuable floor space with a sleek, mountable design suitable for any vertical surface.",
        icon: "electric",
      },
      {
        title: "Certified Quality Standards",
        description:
          "Manufactured to meet international retail safety and operational reliability benchmarks.",
        icon: "clock",
      },
    ],
    specification: [
      {
        label: "Tray & Capacity",
        value: "5 rows / 10 coil",
      },
      {
        label: "Product Capacity",
        value: "10 products",
      },
      {
        label: "Machine Type",
        value: "Slim / Ambient (cosmetic-friendly storage)",
      },
      {
        label: "Display",
        value: "Touchscreen display",
      },
      {
        label: "Dispensing Mechanism",
        value: "Coil-based system",
      },
      {
        label: "Connectivity",
        value: "5 (3 temp-controlled + 2 room temperature)",
      },
      {
        label: "Mix Output Capacity",
        value: "Wi-Fi, CAN, RS485",
      },
      {
        label: "Payment System",
        value: "UPI / QR payments",
      },
      {
        label: "Software Compatibility",
        value:
          "VendiCarte software for sales tracking and inventory monitoring",
      },
    ],
    faqs: [
      {
        question: "What products can Vendelle dispense?",
        answer:
          "Vendelle can be configured to dispense a variety of packaged products depending on business requirements.",
      },
      {
        question: "Is Vendelle suitable for retail environments?",
        answer:
          "Yes. It is designed for retail spaces, offices, hospitals, and public locations.",
      },
      {
        question: "Can Vendelle be customized?",
        answer:
          "Yes. Branding, capacity, and dispensing configuration can all be tailored.",
      },
      {
        question: "Does Vendelle support remote management?",
        answer:
          "Yes. VendiCarte enables remote monitoring, inventory tracking, and performance analytics.",
      },
    ],

    highlights: [
      "Virtual Try-On",
      "Real-Time Sales / Inventory",
      "Wall-Mounted Machine",
    ],
  },
];
