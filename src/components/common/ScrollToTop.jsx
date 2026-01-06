import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * -------------------------
 * Automatically scrolls to top on route change
 * Works on:
 * - Page navigation
 * - Direct URL access
 * - Page refresh
 */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // IMPORTANT: no smooth here
    });
  }, [pathname]);

  return null;
}
