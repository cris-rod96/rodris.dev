import { BiDetail } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";
import {
  RiCodeSSlashLine,
  RiGlassesLine,
  RiHome6Line,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiLinkedin,
  SiPostgresql,
  SiReact,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TfiGithub } from "react-icons/tfi";

export const menu = [
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
    label: "Sobre mí",
    icon: RiUserLine,
  },
  {
    path: "/contact",
    label: "Contacto",
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

export const projects = [
  {
    name: "Shoe Kingdom",
    poster: "/shoe_kingdom.png",
    description:
      "Shoe Kingdom es un sitio web para amantes de las zapatillas. Este proyecto fue realizado como parte del Proyecto Final del Bootcamp de Henry",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "https://shoe-kingdom-ae164.web.app/",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        url: "https://github.com/PF-grupo2/pf-henry-frontend",
        label: "Code",
      },
      {
        icon: BiDetail,
        url: "",
        label: "Detalle",
      },
    ],
  },
  {
    name: "Rick & Morty Wiki",
    poster: "/rick_and_morty.png",
    description:
      "Shoe Kingdom es un sitio web para amantes de las zapatillas. Este proyecto fue realizado como parte del Proyecto Final del Bootcamp de Henry",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        url: "https://github.com/cris-rod96/my_rick_and_morty",
        label: "Code",
      },
      {
        icon: BiDetail,
        url: "",
        label: "Detalle",
      },
    ],
  },
  {
    name: "Flag Countries Wiki",
    poster: "/countries.png",
    description:
      "Shoe Kingdom es un sitio web para amantes de las zapatillas. Este proyecto fue realizado como parte del Proyecto Final del Bootcamp de Henry",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "https://pi-countries-three-alpha.vercel.app/",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        url: "https://github.com/cris-rod96/pi-countries.git",
        label: "Code",
      },
      {
        icon: BiDetail,
        url: "",
        label: "Detalle",
      },
    ],
  },
  {
    name: "Shoe Kingdom",
    poster: "/project1.png",
    description:
      "Shoe Kingdom es un sitio web para amantes de las zapatillas. Este proyecto fue realizado como parte del Proyecto Final del Bootcamp de Henry",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        url: "",
        label: "Code",
      },
      {
        icon: BiDetail,
        url: "",
        label: "Detalle",
      },
    ],
  },
  {
    name: "Shoe Kingdom",
    poster: "/project1.png",
    description:
      "Shoe Kingdom es un sitio web para amantes de las zapatillas. Este proyecto fue realizado como parte del Proyecto Final del Bootcamp de Henry",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        url: "",
        label: "Code",
      },
      {
        icon: BiDetail,
        url: "",
        label: "Detalle",
      },
    ],
  },
];

export const skills = [
  {
    name: "React.js",
    icon: SiReact,
    stack: "Frontend",
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    stack: "Frontend & Backend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    stack: "Frontend",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    stack: "Frontend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    stack: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    stack: "Backend",
  },
  {
    name: "Sequelize",
    icon: SiSequelize,
    stack: "Backend",
  },
];
