import {
  RiCodeSSlashLine,
  RiGlassesLine,
  RiHome6Line,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

export const menu = [
  {
    path: "/",
    label: "Home",
    icon: RiHome6Line,
  },
  {
    path: "/projects",
    label: "Projects",
    icon: RiCodeSSlashLine,
  },
  {
    path: "/skills",
    label: "Skills",
    icon: RiGlassesLine,
  },
  {
    path: "/about",
    label: "About Me",
    icon: RiUserLine,
  },
  {
    path: "/contact",
    label: "Contact",
    icon: RiMailLine,
  },
];
