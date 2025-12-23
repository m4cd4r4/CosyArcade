import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platforms | CosyArcade",
  description: "Browse retro gaming platforms: NES, SNES, Genesis, Game Boy, Arcade, and more. Play classic games right in your browser.",
};

const platforms = [
  {
    slug: "nes",
    name: "Nintendo Entertainment System",
    shortName: "NES",
    manufacturer: "Nintendo",
    year: 1983,
    generation: "8-bit",
    colour: "#cc3333",
    gameCount: 8,
    description: "The console that revived home gaming. Known for Super Mario Bros, The Legend of Zelda, and countless classics.",
  },
  {
    slug: "snes",
    name: "Super Nintendo",
    shortName: "SNES",
    manufacturer: "Nintendo",
    year: 1990,
    generation: "16-bit",
    colour: "#8b7cb3",
    gameCount: 6,
    description: "Nintendo's 16-bit powerhouse. Home to some of the greatest games ever made.",
  },
  {
    slug: "genesis",
    name: "Sega Genesis",
    shortName: "Genesis",
    manufacturer: "Sega",
    year: 1988,
    generation: "16-bit",
    colour: "#3d5a80",
    gameCount: 7,
    description: "Sega does what Nintendon't. The blast processing beast of the 16-bit era.",
  },
  {
    slug: "gameboy",
    name: "Game Boy",
    shortName: "GB",
    manufacturer: "Nintendo",
    year: 1989,
    generation: "8-bit",
    colour: "#4a7c59",
    gameCount: 5,
    description: "The handheld that started it all. Pea-green pixels and endless adventures.",
  },
  {
    slug: "gbc",
    name: "Game Boy Color",
    shortName: "GBC",
    manufacturer: "Nintendo",
    year: 1998,
    generation: "8-bit",
    colour: "#6b5b7c",
    gameCount: 4,
    description: "The Game Boy in full colour. Backward compatible and forward thinking.",
  },
  {
    slug: "gba",
    name: "Game Boy Advance",
    shortName: "GBA",
    manufacturer: "Nintendo",
    year: 2001,
    generation: "32-bit",
    colour: "#4a6fa5",
    gameCount: 6,
    description: "SNES power in your pocket. The ultimate portable console of its era.",
  },
  {
    slug: "mastersystem",
    name: "Sega Master System",
    shortName: "SMS",
    manufacturer: "Sega",
    year: 1985,
    generation: "8-bit",
    colour: "#2f4858",
    gameCount: 3,
    description: "Sega's first major console. Technically superior to the NES, with a devoted following.",
  },
  {
    slug: "gamegear",
    name: "Sega Game Gear",
    shortName: "GG",
    manufacturer: "Sega",
    year: 1990,
    generation: "8-bit",
    colour: "#1a1a2e",
    gameCount: 2,
    description: "Full colour portable gaming. Six AA batteries not included.",
  },
  {
    slug: "arcade",
    name: "Arcade",
    shortName: "Arcade",
    manufacturer: "Various",
    year: null,
    generation: "Various",
    colour: "#d4a021",
    gameCount: 5,
    description: "The golden age of coin-op gaming. From Pac-Man to Street Fighter.",
  },
  {
    slug: "c64",
    name: "Commodore 64",
    shortName: "C64",
    manufacturer: "Commodore",
    year: 1982,
    generation: "8-bit",
    colour: "#7b68a6",
    gameCount: 3,
    description: "The best-selling home computer of all time. 64KB of pure nostalgia.",
  },
  {
    slug: "amiga",
    name: "Amiga",
    shortName: "Amiga",
    manufacturer: "Commodore",
    year: 1985,
    generation: "16/32-bit",
    colour: "#e07b53",
    gameCount: 2,
    description: "Ahead of its time. Multimedia computing before multimedia was a word.",
  },
  {
    slug: "dos",
    name: "DOS",
    shortName: "DOS",
    manufacturer: "IBM PC",
    year: 1981,
    generation: "Various",
    colour: "#4a4640",
    gameCount: 4,
    description: "C:\\GAMES\\NOSTALGIA.EXE - Classic PC gaming from the command line era.",
  },
];

export default function PlatformsPage() {
  return (
    <main className="page-container">
      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">Platforms</h1>
        <p className="page-subtitle">
          From 8-bit legends to 32-bit powerhouses — pick your console
        </p>
      </section>

      {/* Platform Grid */}
      <section className="section">
        <div className="platforms-grid">
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/platforms/${platform.slug}`}
              className="platform-card"
              style={{ "--platform-colour": platform.colour } as React.CSSProperties}
            >
              <div className="platform-header">
                <span className="platform-short">{platform.shortName}</span>
                <span className="platform-year">{platform.year || "Various"}</span>
              </div>
              <h3 className="platform-name">{platform.name}</h3>
              <p className="platform-manufacturer">{platform.manufacturer}</p>
              <p className="platform-description">{platform.description}</p>
              <div className="platform-footer">
                <span className="platform-generation">{platform.generation}</span>
                <span className="platform-games">{platform.gameCount} games</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* More Platforms Notice */}
      <section className="notice-section">
        <div className="notice">
          <span className="notice-icon">🎮</span>
          <div className="notice-content">
            <h3>More Platforms Coming</h3>
            <p>We&apos;re adding support for Atari 2600, ZX Spectrum, and more retro platforms.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
