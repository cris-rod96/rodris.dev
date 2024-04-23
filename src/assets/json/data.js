import {
  RiCodeSSlashLine,
  RiGlassesLine,
  RiHome6Line,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import { SiGithub, SiLinkedin } from "react-icons/si";

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

export const social = [
  {
    link: "https://github.com/cris-rod96",
    label: "Github",
    icon: SiGithub,
  },
  {
    link: "https://linkedin.com/in/cristhian-rodriguez-659779205/",
    label: "LinkedIn",
    icon: SiLinkedin,
  },
  {
    link: "mailto:crisrodam1996@gmail.com?subject=Quiero contactar contigo",
    label: "Correo electrónico",
    icon: RiMailLine,
  },
];
