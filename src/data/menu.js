import {
  RiCodeSSlashLine,
  RiGlassesLine,
  RiHome6Line,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

export const MENU_DATA = [
  {
    path: "/",
    label: "Inicio",
    icon: RiHome6Line,
    active: true,
  },
  {
    path: "/projects",
    label: "Proyectos",
    icon: RiCodeSSlashLine,
    active: true,
  },
  {
    path: "/skills",
    label: "Habilidades",
    icon: RiGlassesLine,
    active: true,
  },
  {
    path: "/about",
    label: "Sobre mí",
    icon: RiUserLine,
    active: true,
  },
  {
    path: "/contact",
    label: "Contacto",
    icon: RiMailLine,
    active: true,
  },
];
