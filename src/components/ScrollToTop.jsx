import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // ✅ correct

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.scrollTo(0, 0);
  }, [pathname]); // ✅ route change detect karega

  return null;
};

export default ScrollToTop;
