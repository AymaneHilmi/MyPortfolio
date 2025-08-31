import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // permet le scroll en haut à chaque changement de route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
