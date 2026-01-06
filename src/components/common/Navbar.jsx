// import { useEffect, useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import siteConfig from "../../config/siteConfig";

// const NAV_ITEMS = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Portfolio", path: "/portfolio" },
//   { label: "Contact", path: "/contact" },
// ];

// /* animations */
// const fadeDown = {
//   hidden: { opacity: 0, y: -10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.35, ease: "easeOut" },
//   },
// };

// const mobileMenu = {
//   hidden: { opacity: 0, y: -12 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.3, ease: "easeOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -12,
//     transition: { duration: 0.2, ease: "easeIn" },
//   },
// };

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       variants={fadeDown}
//       initial="hidden"
//       animate="visible"
//       className={`sticky top-0 z-50 border-b
//       bg-[var(--color-surface)]
//       border-[var(--color-border)]`}
//     >
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="flex h-20 items-center justify-between">
//           {/* Brand */}
//           <Link
//             to="/"
//             className="font-heading text-[22px] font-semibold tracking-tight
//                        text-[var(--color-)]"
//           >
//             {siteConfig.siteName}
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {NAV_ITEMS.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `text-sm font-medium tracking-wide transition-colors
//                   ${
//                     isActive
//                       ? "text-[var(--color-text)]"
//                       : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
//                   }`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </nav>

//           {/* CTA */}
//           <div className="hidden lg:block">
//             <Link
//               to="/contact"
//               className="
//                 inline-flex items-center justify-center
//                 px-6 py-3 text-sm font-semibold
//                 text-white
//                 bg-[var(--color-accent)]
//                 border border-[var(--color-accent)]
//                 hover:bg-[var(--color-accent-dark)]
//                 transition-colors
//               "
//             >
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="lg:hidden text-xl text-[var(--color-text)]"
//             aria-label="Toggle Menu"
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             variants={mobileMenu}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="lg:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]"
//           >
//             <div className="px-6 py-6 space-y-4">
//               {NAV_ITEMS.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setMobileOpen(false)}
//                   className="block text-sm font-medium text-[var(--color-text)]"
//                 >
//                   {item.label}
//                 </NavLink>
//               ))}

//               <Link
//                 to="/contact"
//                 onClick={() => setMobileOpen(false)}
//                 className="
//                   mt-4 block w-full text-center
//                   px-4 py-3 text-sm font-semibold
//                   text-white
//                   bg-[var(--color-accent)]
//                 "
//               >
//                 Get Quote
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }

// export default Navbar;


import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import siteConfig from "../../config/siteConfig";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 font-heading text-xl font-bold tracking-tighter text-[var(--color-text)]"
          >
            <div className="h-8 w-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white text-xs group-hover:rotate-12 transition-transform">
              {siteConfig.siteName.charAt(0)}
            </div>
            <span className="hidden sm:block">{siteConfig.siteName}</span>
          </Link>

          {/* Desktop Navigation - Glass Style */}
          <nav className="hidden lg:flex items-center bg-[var(--color-border)]/20 px-2 py-1.5 rounded-full border border-[var(--color-border)]/50 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-5 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-white rounded-full shadow-sm shadow-black/5"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-white bg-[var(--color-accent)] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[var(--color-accent)]/20"
            >
              Start Project
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-[var(--color-border)]/30"
              aria-label="Menu"
            >
              <span className={`h-0.5 w-5 bg-[var(--color-text)] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-5 bg-[var(--color-text)] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-[var(--color-text)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--color-surface)] border-b border-[var(--color-border)] overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6 text-center">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.path}
                >
                  <NavLink
                    to={item.path}
                    className="text-2xl font-bold tracking-tighter text-[var(--color-text)]"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-block w-full py-4 rounded-2xl bg-[var(--color-accent)] text-white font-bold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;