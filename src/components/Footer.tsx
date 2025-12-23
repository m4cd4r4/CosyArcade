import Link from "next/link";

const platformLinks = [
  { href: "/platforms/nes", label: "NES" },
  { href: "/platforms/snes", label: "SNES" },
  { href: "/platforms/genesis", label: "Genesis" },
  { href: "/platforms/gameboy", label: "Game Boy" },
  { href: "/platforms/gba", label: "GBA" },
  { href: "/platforms/arcade", label: "Arcade" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/age-policy", label: "Age Verification" },
  { href: "/content-policy", label: "Content Policy" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/games", label: "Browse Games" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="logo-icon">🎮</span>
              <span className="logo-text">CosyArcade</span>
            </Link>
            <p className="footer-tagline">
              Your cosy corner for retro gaming. Free, legal, and right in your browser.
            </p>
          </div>

          {/* Platforms column */}
          <div className="footer-column">
            <h4 className="footer-heading">Platforms</h4>
            <ul className="footer-links">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div className="footer-column">
            <h4 className="footer-heading">CosyArcade</h4>
            <ul className="footer-links">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} CosyArcade. All rights reserved.
          </p>
          <p className="footer-note">
            All games are legally free: homebrew, freeware, or open source.
          </p>
        </div>
      </div>
    </footer>
  );
}
