/* ============================================================================
   HEADER COMPONENT – Navigation Bar
   ============================================================================
   Fixed-position header with frosted glass effect. Contains the site logo/name
   and smooth-scroll navigation links.

   ── TO CUSTOMIZE ─────────────────────────────────────────────────────────
   • Change the displayed name by editing the <span> inside the logo area.
   • Add/remove nav links by editing the `navLinks` array below.
   • The header auto-hides when scrolled down and reappears on scroll up.
   ============================================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/* ── Navigation Links ─────────────────────────────────────────────────────
   Edit this array to add, remove, or reorder navigation items.
   `href` should match the id of the target section (e.g., "#experience").
   ──────────────────────────────────────────────────────────────────────── */
const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-7xl px-6 py-4 flex items-center">
        {/* ── Logo / Name ─────────────────────────────────────────────── */}
        <div className="flex-1 flex justify-start">
          <a
            href="#hero"
            className="group flex items-center gap-3 no-underline"
          >
            {/* Animated accent dot */}
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300">
              Arnav Dewangan
            </span>
          </a>
        </div>

        {/* ── Desktop Nav Links ───────────────────────────────────────── */}
        <div className="flex-1 hidden md:flex justify-center">
          <ul className="flex items-center justify-between w-full max-w-md list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-1 text-center">
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-300 no-underline relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Spacer for Desktop Symmetry ─────────────────────────────── */}
        <div className="flex-1 hidden md:block" />

        {/* ── Mobile Menu Toggle ──────────────────────────────────────── */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown ─────────────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 space-y-4 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-300 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
