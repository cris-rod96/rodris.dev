import { BiDetail } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import {
  RiCodeSSlashLine,
  RiGlassesLine,
  RiHome6Line,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import {
  SiBootstrap,
  SiCloudinary,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiLinkedin,
  SiMercadopago,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRender,
  SiSequelize,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandRedux, TbMessageStar } from "react-icons/tb";
import { TfiGithub } from "react-icons/tfi";

export const menu = [
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
  {
    path: "/blog",
    label: "Blog",
    icon: TbMessageStar,
    active: false,
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
  {
    link: "/docs/CV_CRISTHIAN RODRIGUEZ.pdf",
    label: "CV Cristhian Rodríguez",
    icon: FaFilePdf,
  },
];

export const projects = [
  {
    id: "057132cd-1253-4318-8d71-6427e2e6c1ae",
    name: "Shoe Kingdom",
    poster: "/shoe_kingdom.webp",
    description:
      "Shoe Kingdom es un sitio web para amantes de las zapatillas. Este proyecto fue realizado como parte del Proyecto Final del Bootcamp de Henry",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "https://shoe-kingdom-ae164.web.app/",
        label: "Deploy",
        target: "__blank",
      },
      {
        icon: TfiGithub,
        url: "https://github.com/PF-grupo2/pf-henry-frontend",
        label: "Code",
        target: "__blank",
      },
      {
        icon: BiDetail,
        url: "/detail/057132cd-1253-4318-8d71-6427e2e6c1ae",
        label: "Detalle",
        target: "",
      },
    ],
    technologies: [
      {
        name: "React.JS",
        icon: SiReact,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Sequelize",
        icon: SiSequelize,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },
  {
    id: "c9dcddfe-6ac4-41a7-9500-59de6179fdf5",
    name: "Rick & Morty Wiki",
    poster: "/rick_morty.webp",
    description:
      "Explora el intrigante mundo de Rick & Morty: conoce a fondo a los personajes de la serie y elige a tus favoritos.",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "https://my-rick-and-morty.vercel.app/",
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
    technologies: [
      {
        name: "React.JS",
        icon: SiReact,
      },
      {
        name: "CSS3",
        icon: SiCss3,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Sequelize",
        icon: SiSequelize,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },
  {
    id: "45e6cc02-74b7-41f2-9e1a-3a9bd2a25d76",
    name: "Flag Countries Wiki",
    poster: "/countries.webp",
    description:
      "¿Conoces las banderas de cada país? Explora y descubre datos fascinantes sobre diferentes países a través de sus símbolos nacionales.",

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
    technologies: [
      {
        name: "React.JS",
        icon: SiReact,
      },
      {
        name: "CSS3",
        icon: SiCss3,
      },
      {
        name: "Redux Toolkit",
        icon: TbBrandRedux,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Sequelize",
        icon: SiSequelize,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },
  {
    id: "df31b7d1-9e27-48ae-9fb9-1afa85be90ff",
    name: "Rick & Morty Wiki",
    poster: "/rick_morty_wiki.webp",
    description:
      "Esta es una versión mejorada de Rick & Morty. Como desarrollador, me he permitido seleccionar nuevas tecnologías que he ido aprendiendo a lo largo del proyecto, añadiendo un toque fresco y renovado.",

    urls: [
      {
        icon: BsBrowserChrome,
        url: "https://frontend-rick-morty-wiki.vercel.app/",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        url: "https://github.com/cris-rod96/frontend-rick-morty-wiki",
        label: "Code",
      },
      {
        icon: BiDetail,
        url: "/detail/df31b7d1-9e27-48ae-9fb9-1afa85be90ff",
        label: "Detalle",
      },
    ],
    technologies: [
      {
        name: "React.JS",
        icon: SiReact,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        name: "Redux Toolkit",
        icon: TbBrandRedux,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Sequelize",
        icon: SiSequelize,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },
  {
    id: "d88abb55-a62e-4ea9-b6b7-eb42acf4f430",
    name: "Chat Space",
    poster: "/chat_space.webp",
    description:
      "Espacio web donde podrás chatear con otras personaes registradas en la aplicación. Este proyecto se encuentra en etapa de desarrollo a modo de práctica y aprendizaje en nuevas tecnologías.",
    urls: [],
    technologies: [
      {
        name: "React.JS",
        icon: SiReact,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        name: "Redux Toolkit",
        icon: TbBrandRedux,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
      },
      {
        name: "Mongodb",
        icon: SiMongodb,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
    ],
  },
  {
    id: "b7a9466b-78d0-4435-bd0d-0ab86a3fdbcd",
    name: "JobTrackr",
    poster: "/jobtrackr.webp",
    description:
      "JobTrackr, aliado personal en la búsqueda de empleo. Diseñado para simplificar y organizar las postulaciones laborales, JobTrackr es una plataforma intuitiva y fácil de usar que ayuda a mantener un seguimiento detallado de todas las aplicaciones de trabajo.",
    urls: [],
    technologies: [
      {
        name: "React.JS",
        icon: SiReact,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        name: "Redux Toolkit",
        icon: TbBrandRedux,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
      },
      {
        name: "Mongodb",
        icon: SiMongodb,
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
