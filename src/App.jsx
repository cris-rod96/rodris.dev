import { useEffect } from "react";
import AppRouter from "./AppRouter";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
