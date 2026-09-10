import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpeg";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#mission" },
  { label: "Our Work", href: "#what-we-do" },
  { label: "Donate", href: "#support" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Nevgo home">
          <img src={logo} alt="Nevgo — Education Impact Initiative" />
        </a>

        <nav
          className={`site-header__nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary site-header__cta"
            href="#support"
            onClick={() => setMenuOpen(false)}
          >
            Donate Now
          </a>
        </nav>

        <button
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
