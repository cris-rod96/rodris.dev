import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Project from "./pages/projects/Project";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import RootLayout from "./layouts/RootLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
