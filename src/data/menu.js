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
  },
  {
    path: "/projects",
    label: "Proyectos",
    icon: RiCodeSSlashLine,
  },
  {
    path: "/skills",
    label: "Habilidades",
    icon: RiGlassesLine,
  },
  {
    path: "/about",
    label: "Perfil",
    icon: RiUserLine,
  },
  {
    path: "/contact",
    label: "Contacto",
    icon: RiMailLine,
  },
];
