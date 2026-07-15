import { BiLineChart } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { IoFileTrayOutline, IoSettingsOutline } from "react-icons/io5";

export const onboardingData = [
  {
    id: 1,
    image: "/images/OnbAni-1.png",
    title: "Track Every Amount",
    description: "Easily record your income and expenses in one place.",
    subText: "Know where your money goes.",
  },
  {
    id: 2,
    image: "/images/OnbAni-2.png",
    title: "Understand Your Spending",
    description:
      "Visualize your spending habits with clear charts and insights.",
    subText: "Make smarter financial decisions.",
  },
  {
    id: 3,
    image: "/images/OnbAni-3.png",
    title: "Achieve Your Financial Goals",
    description:
      "Stay on track, save more and build a better financial future.",
    subText: "Your goals, our priority.",
  },
];

export const navItems = [
  {
    name: "Home",
    path: "/dashboard",
    icon: CiHome,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BiLineChart,
  },
  {
    name: "History",
    path: "/history",
    icon: IoFileTrayOutline,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: IoSettingsOutline,
  },
];
