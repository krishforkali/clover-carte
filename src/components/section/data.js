import { caft_badge_1, caft_badge_2, caft_badge_3, ss3_badge_2, ss3_badge_3, ss_badge_1, ss_badge_2, ss_badge_3, vend_badge_2, vend_badge_3, vshop_badge_1, vshop_badge_2, vshop_badge_3, } from "../svg/machineIcon";
import { BsBuildings, BsBuildingsFill, BsCloudCheckFill, BsShuffle } from "react-icons/bs";
import { MdCloudSync, MdCoffeeMaker, MdInsertChartOutlined, MdOutlineFlightTakeoff, MdOutlineLocalHotel, MdOutlineZoomInMap, MdRestaurantMenu } from "react-icons/md";
import { FaGraduationCap, FaRegHospital } from "react-icons/fa";
import { PiBuildingsLight, PiContactlessPaymentFill } from "react-icons/pi";
import { ChartNoAxesCombined, LucideClipboardCheck } from "lucide-react";

export const sliderMachine = [
  {
    slug: "caftina",
    title: "CAFTINA",
    image: "/images/caftina.jpg",
    imageSize: { w: 351, h: 383 },

    badges: [
      { icon: caft_badge_1, title: "MULTI BEVERAGE" },
      { icon: caft_badge_2, title: "HOT & COLD BEVERAGE" },
      { icon: caft_badge_3, title: "IOT ENABLED" },
    ],

    leftCards: [
      {
        title: "SMART BEVERAGE DISPENSING",
        desc: "Automated touchless beverage dispensing system for hot and cold drink preparation.",
        icon: MdCoffeeMaker,
      },
      {
        title: "RECIPE CUSTOMIZATION",
        desc: "Supports custom beverage recipes with controlled ingredient management.",
        icon: MdRestaurantMenu,
      },
    ],

    rightTop: {
      title: "REAL-TIME MONITORING",
      desc: "IoT and cloud-enabled telemetry track machine health, inventory, and sales performance.",
      icon: ChartNoAxesCombined,
    },

    sectors: [
      { icon: BsBuildingsFill, name: "OFFICES", match: "98%" },
      { icon: MdOutlineFlightTakeoff, name: "AIRPORTS", match: "94%" },
      { icon: FaGraduationCap, name: "COLLEGES", match: "92%" },
      { icon: FaRegHospital, name: "HOSPITALS", match: "95%" },
    ],
  },

  {
    slug: "vendshop",
    title: "VENDSHOP",
    image: "/images/vendshop.jpg",
    imageSize: { w: 247, h: 383 },

    badges: [
      {
        title: "Combo Dispensing",
        icon: vshop_badge_1,
      },
      {
        title: "IoT Enabled",
        icon: vshop_badge_2,
      },
      {
        title: "IOT ENABLED",
        icon: vshop_badge_3,
      },
    ],

    leftCards: [
      {
        title: "Smart Combo Dispensing",
        desc: "Snacks and cold beverages from a single compact retail system.",
        icon: MdCoffeeMaker,
      },
      {
        title: "Intelligent Cooling",
        desc: "Temperature-controlled storage maintains freshness across all product categories.",
        icon: MdCloudSync,
      },
    ],

    rightTop: {
      title: "Real-Time Monitoring",
      desc: "Cloud-connected telemetry tracks inventory, sales activity, and machine health remotely.",
      icon: BsCloudCheckFill,
    },

    sectors: [
      { icon: BsBuildings, name: "OFFICES", match: "99%" },
      { icon: PiBuildingsLight, name: "MALLS", match: "95%" },
      { icon: BsShuffle, name: "TRANSIT HUBS", match: "92%" },
      { icon: FaGraduationCap, name: "RETAILS CHAINS", match: "96%" },
    ],
  },
  {
    slug: "smartslim",
    title: "smartslim",
    image: "/images/smartslim.jpg",
    imageSize: { w: 222, h: 413 },

    badges: [
      {
        title: "DUAL TEMP ACTIVE",
        icon: ss_badge_1,
      },
      {
        title: "UPLINK STABLE",
        icon: ss_badge_2,
      },
      {
        title: "SPACE OPTIMIZED",
        icon: ss_badge_3,
      },
    ],

    leftCards: [
      {
        title: "COMPACT FOOTPRINT",
        desc: "Slim architecture built for deployment in constrained commercial environments.",
        icon: MdOutlineZoomInMap,
      },
      {
        title: "SAFE PRODUCT DELIVERY",
        desc: "Elevator-assisted dispensing designed for fragile and premium packaged products.",
        icon: LucideClipboardCheck,
      },
    ],

    rightTop: {
      title: "REMOTE DIAGNOSTICS",
      desc: "Predictive maintenance and cloud diagnostics reduce downtime and improve uptime.",
      icon: MdInsertChartOutlined,
    },

    sectors: [
      { icon: BsBuildings, name: "OFFICES", match: "99%" },
      { icon: MdOutlineFlightTakeoff, name: "AIRPORTS", match: "95%" },
      { icon: FaGraduationCap, name: "EDUCATION", match: "92%" },
      { icon: MdOutlineLocalHotel, name: "Hospitality", match: "96%" },
    ],
  },
  {
    slug: "clovermini",
    title: "Clover Mini",
    image: "/images/smartslim3.jpg",
    imageSize: { w: 267, h: 383 },

    badges: [
      {
        title: "Smart Cooling",
        icon: ss_badge_1,
      },
      {
        title: "Cashless Enabled",
        icon: ss3_badge_2,
      },
      {
        title: "Compact Retail Ready",
        icon: ss3_badge_3,
      },
    ],

    leftCards: [
      {
        title: "Efficient Space Utilization",
        desc: "Compact vending architecture optimized for retail stores and smaller deployment areas.",
        icon: MdCoffeeMaker,
      },
      {
        title: "Intelligent Cooling System",
        desc: "Maintains consistent cooling performance for beverages and temperature-sensitive products.",
        icon: MdCloudSync,
      },
    ],

    rightTop: {
      title: "Cashless Payment Support",
      desc: "Supports UPI, QR, NFC, debit/credit cards, and digital wallet integrations.",
      icon: PiContactlessPaymentFill,
    },

    sectors: [
      { icon: FaGraduationCap, name: "Retail Stores", match: "95%" },
      { icon: BsBuildings, name: "OFFICES", match: "99%" },
      { icon: MdOutlineFlightTakeoff, name: "Transit Hubs", match: "96%" },
      { icon: FaGraduationCap, name: "EDUCATION", match: "92%" },
    ],
  },
  {
    title: "vendmini",
    slug: "vendmini",
    image: "/images/vendmini.jpg",
    imageSize: { w: 365, h: 383 },

    badges: [
      {
        title: "Compact Format",
        icon: ss_badge_1,
      },
      {
        title: "Plug & play",
        icon: vend_badge_2,
      },
      {
        title: "Smart Dispensing",
        icon: vend_badge_3,
      },
    ],

    leftCards: [
      {
        title: "Space Efficient Design",
        desc: "Designed for compact retail environments with limited floor space availability.",
        icon: MdCoffeeMaker,
      },
      {
        title: "Fast Installation",
        desc: "Plug-and-play architecture allows quick setup and operational readiness.",
        icon: MdCloudSync,
      },
    ],

    rightTop: {
      title: "Automated Dispensing",
      desc: "Reliable dispensing system engineered for daily unattended operations.",
      icon: BsCloudCheckFill,
    },

    sectors: [
      { icon: BsBuildings, name: "OFFICES", match: "96%" },
      { icon: MdOutlineFlightTakeoff, name: "Hostels", match: "92%" },
      { icon: FaGraduationCap, name: "Clinics", match: "89%" },
      { icon: FaGraduationCap, name: "Smart Retail", match: "89%" },
    ],
  },
  {
    title: "vendelle",
    slug: "vendelle",
    image: "/images/vendelle.jpg",
    imageSize: { w: 278, h: 383 },

    badges: [
      {
        title: "Interactive Display",
        icon: ss_badge_1,
      },
      {
        title: "Beauty Retail Ready",
        icon: vshop_badge_2,
      },
      {
        title: "Brand Customizable",
        icon: vend_badge_3,
      },
    ],

    leftCards: [
      {
        title: "Digital Advertising Screen",
        desc: "Large integrated media display designed for promotional campaigns and dynamic branding.",
        icon: MdCoffeeMaker,
      },
      {
        title: "Premium Cosmetic Dispensing",
        desc: "Secure dispensing mechanism for beauty products, cosmetics, and personal care items.",
        icon: MdCloudSync,
      },
    ],

    rightTop: {
      title: "REMOTE DIAGNOSTICS",
      desc: "Predictive maintenance and cloud diagnostics reduce downtime and improve uptime.",
      icon: BsCloudCheckFill,
    },

    sectors: [
      { icon: BsBuildings, name: "Beauty Retail", match: "96%" },
      { icon: MdOutlineFlightTakeoff, name: "AIRPORTS", match: "92%" },
      { icon: FaGraduationCap, name: "Malls", match: "89%" },
      { icon: FaGraduationCap, name: "Luxury Stores", match: "89%" },
    ],
  },
];
