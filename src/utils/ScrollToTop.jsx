import { useEffect } from "react";
import {} from "react-router-dom";

// Este componente se encarga de hacer scroll hacia arriba cuando se cambia de ruta
const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
