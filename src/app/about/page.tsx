import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CosyArcade",
  description: "Learn about CosyArcade - your cosy corner for retro gaming. Our mission, values, and the story behind the arcade.",
};

const values = [
  {
    icon: "⚖️",
    title: "100% Legal",
    description: "Every game in our library is legally free to play. Homebrew, freeware, open source — no piracy, ever.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    description: "Age-appropriate content for everyone. Younger players are protected, older players get the full experience.",
  },
  {
    icon: "🎮",
    title: "Authentic Experience",
    description: "Real emulation, not recreations. Play games exactly as they were meant to be played.",
  },
  {
    icon: "☁️",
    title: "Save Anywhere",
    description: "Cloud save states let you pick up where you left off, on any device.",
  },
  {
    icon: "📱",
    title: "Play Anywhere",
    description: "Browser-based gaming means no downloads. Desktop, tablet, or phone — just play.",
  },
  {
    icon: "🌙",
    title: "Cosy Vibes",
    description: "Ambient themes, lofi aesthetics, and a warm atmosphere. Gaming as relaxation.",
  },
];

const faqItems = [
  {
    question: "Is CosyArcade really free?",
    answer: "Yes! All games on CosyArcade are free to play. We host only legally-free games: homebrew created by indie developers, freeware released by publishers, and open source projects.",
  },
  {
    question: "Are these pirated games?",
    answer: "Absolutely not. We have zero tolerance for piracy. Every game in our library has documented legal permission for distribution. We don't host commercial ROMs.",
  },
  {
    question: "Why do I need to verify my age?",
    answer: "Some games contain mild cartoon violence or competitive content more suitable for teens. Age verification ensures younger players see only age-appropriate games.",
  },
  {
    question: "Can my kids use CosyArcade?",
    answer: "Yes! We offer child accounts with parental consent. These accounts only show all-ages content and don't have access to multiplayer features.",
  },
  {
    question: "How does the emulation work?",
    answer: "We use EmulatorJS, which runs real emulator cores (like RetroArch) directly in your browser using WebAssembly. It's the same technology used by archive.org.",
  },
  {
    question: "Will you add more games?",
    answer: "Constantly! We're always looking for quality homebrew and freeware to add. If you know of a legally-free game we should include, let us know.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-container">
      {/* Hero */}
      <section className="page-header about-hero">
        <h1 className="page-title">About CosyArcade</h1>
        <p className="page-subtitle">
          Your cosy corner for retro gaming
        </p>
      </section>

      {/* Mission */}
      <section className="section about-mission">
        <div className="prose">
          <h2>Our Mission</h2>
          <p>
            CosyArcade exists to preserve and celebrate retro gaming culture — legally and accessibly.
          </p>
          <p>
            We believe the golden age of gaming shouldn&apos;t be locked away in dusty cartridges or hidden
            behind piracy. Thousands of incredible games have been released for free by their creators:
            modern homebrew for classic consoles, freeware gems from generous publishers, and open source
            recreations of beloved classics.
          </p>
          <p>
            We&apos;ve curated the best of these into a single, beautiful, browser-based arcade. No downloads,
            no sketchy ROMs, no guilt. Just games, ready to play.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <h2 className="section-title">What We Stand For</h2>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.title} className="value-card">
              <span className="value-icon">{value.icon}</span>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{item.question}</summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="cta-card">
          <h2>Ready to Play?</h2>
          <p>Jump into our collection of free retro games.</p>
          <div className="cta-buttons">
            <Link href="/games" className="btn btn-primary">
              Browse Games
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
