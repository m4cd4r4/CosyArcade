"use client";

import { ThemeSelector, ThemeSelectorCompact } from "@/components/ThemeSelector";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { performance, setPerformance, enableScanlines, setEnableScanlines } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass sticky top-0 z-40 border-b border-[var(--border-colour)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎮</span>
            <h1 className="text-xl font-bold">
              <span className="text-gradient">CosyArcade</span>
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <ThemeSelectorCompact />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Your Cosy Corner for{" "}
            <span className="text-gradient">Retro Gaming</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Play classic arcade, console, and computer games from the 70s, 80s, 90s and beyond.
            Free, legal, and right in your browser.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn btn-primary text-lg px-8 py-3">
              Browse Games
            </button>
            <button className="btn btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Platform Icons */}
      <section className="py-12 px-4 border-y border-[var(--border-colour)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-[var(--text-secondary)]">
            {[
              { name: "Arcade", colour: "var(--genesis-red)" },
              { name: "NES", colour: "var(--genesis-red)" },
              { name: "SNES", colour: "var(--snes-purple)" },
              { name: "Genesis", colour: "var(--console-dark)" },
              { name: "Game Boy", colour: "var(--gameboy-green)" },
              { name: "C64", colour: "var(--famicom-blue)" },
              { name: "Amiga", colour: "var(--zelda-gold)" },
              { name: "And More...", colour: "var(--accent-primary)" },
            ].map((platform) => (
              <div
                key={platform.name}
                className="text-center transition-transform hover:scale-110"
              >
                <div
                  className="w-12 h-12 rounded-lg mb-2 mx-auto flex items-center justify-center"
                  style={{ backgroundColor: platform.colour + "20", color: platform.colour }}
                >
                  <span className="text-xl font-bold">
                    {platform.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why CosyArcade?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "100% Legal",
                description: "Only homebrew, freeware, and officially released free games. No piracy, ever.",
              },
              {
                icon: "🌐",
                title: "Browser-Based",
                description: "No downloads, no installs. Just click and play instantly in your browser.",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Friendly",
                description: "Age-appropriate content filtering keeps younger players safe.",
              },
              {
                icon: "💾",
                title: "Save Your Progress",
                description: "Create an account to save your game states and pick up where you left off.",
              },
              {
                icon: "📱",
                title: "Mobile Ready",
                description: "Touch controls for handheld games. Play on any device.",
              },
              {
                icon: "🎨",
                title: "Cosy Atmosphere",
                description: "Four beautiful themes with optional lofi vibes and ambient sounds.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Demo Section */}
      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">
            Set the Mood
          </h3>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Choose your perfect gaming atmosphere
          </p>
          <div className="card">
            <ThemeSelector />

            <div className="mt-6 pt-6 border-t border-[var(--border-colour)]">
              <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">
                Display Options
              </h4>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableScanlines}
                    onChange={(e) => setEnableScanlines(e.target.checked)}
                    className="w-4 h-4 accent-[var(--accent-primary)]"
                  />
                  <span className="text-sm">CRT Scanlines</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={performance.enableVideoBackground}
                    onChange={(e) => setPerformance({ enableVideoBackground: e.target.checked })}
                    className="w-4 h-4 accent-[var(--accent-primary)]"
                  />
                  <span className="text-sm">Video Background</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={performance.enableAmbientSound}
                    onChange={(e) => setPerformance({ enableAmbientSound: e.target.checked })}
                    className="w-4 h-4 accent-[var(--accent-primary)]"
                  />
                  <span className="text-sm">Ambient Sound</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Play?</h3>
          <p className="text-[var(--text-secondary)] mb-8">
            Jump into our curated collection of retro gaming classics.
          </p>
          <button className="btn btn-primary text-lg px-8 py-3">
            Start Playing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-colour)] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎮</span>
            <span className="font-bold">CosyArcade</span>
            <span className="text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colours">
              About
            </a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colours">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colours">
              Terms
            </a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colours">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
