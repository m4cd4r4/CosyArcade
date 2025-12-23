"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeSelectorCompact } from "./ThemeSelector";

const navLinks = [
  { href: "/games", label: "Games" },
  { href: "/platforms", label: "Platforms" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <span className="logo-icon">🎮</span>
          <span className="logo-text">CosyArcade</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Theme selector + Auth */}
        <div className="navbar-actions">
          <ThemeSelectorCompact />
          <Link href="/login" className="btn btn-secondary btn-sm">
            Log In
          </Link>
          <Link href="/signup" className="btn btn-primary btn-sm">
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="navbar-mobile-divider" />
          <div className="navbar-mobile-theme">
            <span className="text-sm text-[var(--text-muted)]">Theme</span>
            <ThemeSelectorCompact />
          </div>
          <div className="navbar-mobile-divider" />
          <div className="navbar-mobile-auth">
            <Link href="/login" className="btn btn-secondary btn-sm flex-1">
              Log In
            </Link>
            <Link href="/signup" className="btn btn-primary btn-sm flex-1">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
