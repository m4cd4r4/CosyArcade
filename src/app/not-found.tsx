import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Game Over | CosyArcade",
  description: "Page not found. Let's get you back to the arcade.",
};

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-container">
        {/* Retro game over screen */}
        <div className="error-screen">
          <div className="error-scanlines" />
          <div className="error-content">
            <div className="error-code">404</div>
            <h1 className="error-title">GAME OVER</h1>
            <p className="error-message">
              The page you&apos;re looking for has gone to the great arcade in the sky.
            </p>
            <div className="error-prompt">
              <span className="blink">INSERT COIN TO CONTINUE</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="error-actions">
          <Link href="/" className="btn btn-primary btn-lg">
            Return Home
          </Link>
          <Link href="/games" className="btn btn-secondary btn-lg">
            Browse Games
          </Link>
        </div>

        {/* Easter egg hint */}
        <p className="error-hint">
          Or try one of these:
        </p>
        <div className="error-suggestions">
          <Link href="/platforms" className="error-suggestion">
            Platforms
          </Link>
          <Link href="/about" className="error-suggestion">
            About
          </Link>
          <Link href="/contact" className="error-suggestion">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
