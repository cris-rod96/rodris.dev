import { FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

export const SOCIAL_DATA = [
  {
    link: "https://github.com/cris-rod96",
    label: "Github",
    icon: LuGithub,
  },
  {
    link: "https://linkedin.com/in/cristhian-rodriguez-659779205/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=crisrodam1996@gmail.com&su=Quiero contactar contigo",
    label: "Correo electrónico",
    icon: IoMailUnreadOutline,
  },
  {
    link: "/docs/CV_CRISTHIAN RODRIGUEZ.pdf",
    label: "CV Cristhian Rodríguez",
    icon: FaRegFilePdf,
  },
];
