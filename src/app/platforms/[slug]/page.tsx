import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Platform data - will come from database later
const platforms: Record<string, {
  name: string;
  shortName: string;
  manufacturer: string;
  year: number | null;
  generation: string;
  colour: string;
  description: string;
  longDescription: string;
  emulatorCore: string;
  fileExtensions: string;
}> = {
  nes: {
    name: "Nintendo Entertainment System",
    shortName: "NES",
    manufacturer: "Nintendo",
    year: 1983,
    generation: "8-bit",
    colour: "#cc3333",
    description: "The console that revived home gaming.",
    longDescription: "The Nintendo Entertainment System (NES) single-handedly revived the video game industry after the crash of 1983. With iconic titles and a library of over 700 games, it defined what home gaming could be. The NES introduced millions to gaming and established franchises that continue to this day.",
    emulatorCore: "fceumm",
    fileExtensions: ".nes",
  },
  snes: {
    name: "Super Nintendo Entertainment System",
    shortName: "SNES",
    manufacturer: "Nintendo",
    year: 1990,
    generation: "16-bit",
    colour: "#8b7cb3",
    description: "Nintendo's 16-bit powerhouse.",
    longDescription: "The Super Nintendo Entertainment System took everything great about the NES and amplified it with 16-bit graphics, Mode 7 scaling, and an incredible sound chip. Many consider its library to contain the greatest games ever made, from RPGs to platformers to action games.",
    emulatorCore: "snes9x",
    fileExtensions: ".smc, .sfc",
  },
  genesis: {
    name: "Sega Genesis",
    shortName: "Genesis",
    manufacturer: "Sega",
    year: 1988,
    generation: "16-bit",
    colour: "#3d5a80",
    description: "Sega does what Nintendon't.",
    longDescription: "The Sega Genesis (Mega Drive outside North America) was Sega's answer to Nintendo's dominance. With its \"blast processing\" and edgier marketing, it carved out a massive audience. The Genesis was home to Sonic the Hedgehog and countless arcade-perfect ports.",
    emulatorCore: "genesis_plus_gx",
    fileExtensions: ".md, .gen",
  },
  gameboy: {
    name: "Game Boy",
    shortName: "GB",
    manufacturer: "Nintendo",
    year: 1989,
    generation: "8-bit",
    colour: "#4a7c59",
    description: "The handheld that started it all.",
    longDescription: "The original Game Boy proved that portable gaming could be just as compelling as home consoles. Despite its pea-green monochrome screen, it became a cultural phenomenon. Tetris alone sold millions of units, and the platform enjoyed a remarkable 14-year lifespan.",
    emulatorCore: "gambatte",
    fileExtensions: ".gb",
  },
  gbc: {
    name: "Game Boy Color",
    shortName: "GBC",
    manufacturer: "Nintendo",
    year: 1998,
    generation: "8-bit",
    colour: "#6b5b7c",
    description: "The Game Boy in full colour.",
    longDescription: "The Game Boy Color brought vibrant colours to Nintendo's handheld line while maintaining backwards compatibility with the original Game Boy library. It bridged the gap between the classic Game Boy and the powerful Game Boy Advance.",
    emulatorCore: "gambatte",
    fileExtensions: ".gbc",
  },
  gba: {
    name: "Game Boy Advance",
    shortName: "GBA",
    manufacturer: "Nintendo",
    year: 2001,
    generation: "32-bit",
    colour: "#4a6fa5",
    description: "SNES power in your pocket.",
    longDescription: "The Game Boy Advance was essentially a portable Super Nintendo, capable of running SNES-quality games on the go. With its 32-bit processor and wide screen, it hosted incredible ports, remakes, and original titles until the Nintendo DS arrived.",
    emulatorCore: "mgba",
    fileExtensions: ".gba",
  },
  mastersystem: {
    name: "Sega Master System",
    shortName: "SMS",
    manufacturer: "Sega",
    year: 1985,
    generation: "8-bit",
    colour: "#2f4858",
    description: "Technically superior to the NES.",
    longDescription: "The Sega Master System was technically more capable than the NES but struggled in North America due to Nintendo's market dominance. However, it found massive success in Europe and Brazil, where it developed a devoted following that persists today.",
    emulatorCore: "genesis_plus_gx",
    fileExtensions: ".sms",
  },
  gamegear: {
    name: "Sega Game Gear",
    shortName: "GG",
    manufacturer: "Sega",
    year: 1990,
    generation: "8-bit",
    colour: "#1a1a2e",
    description: "Full colour portable gaming.",
    longDescription: "The Sega Game Gear was Sega's answer to the Game Boy, offering a full-colour backlit screen when Nintendo's handheld was still monochrome. While it devoured batteries, it provided a premium portable experience and could even display TV with an optional tuner.",
    emulatorCore: "genesis_plus_gx",
    fileExtensions: ".gg",
  },
  arcade: {
    name: "Arcade",
    shortName: "Arcade",
    manufacturer: "Various",
    year: null,
    generation: "Various",
    colour: "#d4a021",
    description: "The golden age of coin-op gaming.",
    longDescription: "Arcade machines defined gaming culture from the late 1970s through the 1990s. From Pac-Man to Street Fighter II, arcades were social hubs where players gathered to compete and show off their skills. Many classics started life as arcade games before coming home.",
    emulatorCore: "mame2003",
    fileExtensions: ".zip",
  },
  c64: {
    name: "Commodore 64",
    shortName: "C64",
    manufacturer: "Commodore",
    year: 1982,
    generation: "8-bit",
    colour: "#7b68a6",
    description: "The best-selling home computer of all time.",
    longDescription: "The Commodore 64 holds the Guinness World Record as the highest-selling single computer model of all time. With its SID sound chip and capable graphics, it was a gaming powerhouse that also served as many people's first programming environment.",
    emulatorCore: "vice_x64",
    fileExtensions: ".d64, .prg",
  },
  amiga: {
    name: "Amiga",
    shortName: "Amiga",
    manufacturer: "Commodore",
    year: 1985,
    generation: "16/32-bit",
    colour: "#e07b53",
    description: "Ahead of its time.",
    longDescription: "The Commodore Amiga was a technological marvel, offering multimedia capabilities years before the competition. Its custom chips enabled graphics and sound that wouldn't be matched by PCs for years. The demoscene and game development communities thrived on Amiga.",
    emulatorCore: "puae",
    fileExtensions: ".adf",
  },
  dos: {
    name: "DOS",
    shortName: "DOS",
    manufacturer: "IBM PC Compatible",
    year: 1981,
    generation: "Various",
    colour: "#4a4640",
    description: "C:\\GAMES\\NOSTALGIA.EXE",
    longDescription: "MS-DOS gaming represents the wild west of PC gaming, from text adventures to early 3D shooters. Before Windows dominated, DOS was where PC gamers lived. Classic titles from this era pioneered genres we still play today.",
    emulatorCore: "dosbox_pure",
    fileExtensions: ".zip",
  },
};

// Sample games per platform - will come from database
const sampleGames: Record<string, Array<{
  slug: string;
  title: string;
  year: number;
  genre: string;
  developer: string;
}>> = {
  nes: [
    { slug: "micro-mages", title: "Micro Mages", year: 2019, genre: "Platformer", developer: "Morphcat Games" },
    { slug: "super-tilt-bro", title: "Super Tilt Bro", year: 2023, genre: "Fighting", developer: "RogerBidon" },
    { slug: "flea", title: "Flea!", year: 2020, genre: "Platformer", developer: "Lowtek Games" },
    { slug: "twin-dragons", title: "Twin Dragons", year: 2018, genre: "Platformer", developer: "Broke Studio" },
  ],
  snes: [
    { slug: "super-boss-gaiden", title: "Super Boss Gaiden", year: 2014, genre: "Platformer", developer: "D4s & ChronoMoogle" },
    { slug: "jet-pilot-rising", title: "Jet Pilot Rising", year: 2017, genre: "Shooter", developer: "Dieter von Laser" },
  ],
  genesis: [
    { slug: "tanglewood", title: "Tanglewood", year: 2018, genre: "Puzzle Platformer", developer: "Big Evil Corporation" },
    { slug: "xeno-crisis", title: "Xeno Crisis", year: 2019, genre: "Shooter", developer: "Bitmap Bureau" },
    { slug: "demons-of-asteborg", title: "Demons of Asteborg", year: 2021, genre: "Action", developer: "Neofid Studios" },
  ],
  gba: [
    { slug: "inheritors-of-the-oubliette", title: "Inheritors of the Oubliette", year: 2023, genre: "RPG", developer: "Mother Brain Games" },
    { slug: "goodboy-galaxy", title: "Goodboy Galaxy", year: 2023, genre: "Platformer", developer: "Hot Flash Games" },
  ],
  gameboy: [
    { slug: "deadeus", title: "Deadeus", year: 2019, genre: "Horror Adventure", developer: "-IZMA-" },
    { slug: "dragonborne", title: "Dragonborne", year: 2019, genre: "RPG", developer: "Spacebot Interactive" },
  ],
  gbc: [
    { slug: "tobu-tobu-girl-deluxe", title: "Tobu Tobu Girl Deluxe", year: 2017, genre: "Arcade", developer: "Tangram Games" },
  ],
  arcade: [
    { slug: "dodonpachi-demo", title: "DoDonPachi (Demo)", year: 2020, genre: "Shooter", developer: "Community" },
  ],
  c64: [
    { slug: "sams-journey", title: "Sam's Journey", year: 2017, genre: "Platformer", developer: "Knights of Bytes" },
    { slug: "planet-golf", title: "Planet Golf", year: 2018, genre: "Sports", developer: "Antonio Savona" },
  ],
  amiga: [
    { slug: "worthy", title: "Worthy", year: 2020, genre: "Puzzle", developer: "Pixelglass" },
  ],
  mastersystem: [
    { slug: "silver-valley", title: "Silver Valley", year: 2018, genre: "Platformer", developer: "Enrique Ruiz" },
  ],
  gamegear: [],
  dos: [
    { slug: "doom-shareware", title: "DOOM (Shareware)", year: 1993, genre: "FPS", developer: "id Software" },
    { slug: "commander-keen-1", title: "Commander Keen 1", year: 1990, genre: "Platformer", developer: "id Software" },
  ],
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const platform = platforms[slug];

  if (!platform) {
    return {
      title: "Platform Not Found | CosyArcade",
    };
  }

  return {
    title: `${platform.name} Games | CosyArcade`,
    description: `Play free ${platform.shortName} games in your browser. ${platform.description}`,
  };
}

export async function generateStaticParams() {
  return Object.keys(platforms).map((slug) => ({ slug }));
}

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  const platform = platforms[slug];

  if (!platform) {
    notFound();
  }

  const games = sampleGames[slug] || [];

  return (
    <main className="page-container">
      {/* Platform Header */}
      <section
        className="platform-hero"
        style={{ "--platform-colour": platform.colour } as React.CSSProperties}
      >
        <div className="platform-hero-content">
          <Link href="/platforms" className="back-link">
            ← All Platforms
          </Link>
          <div className="platform-hero-badge">{platform.shortName}</div>
          <h1 className="platform-hero-title">{platform.name}</h1>
          <p className="platform-hero-meta">
            {platform.manufacturer} • {platform.year || "Various"} • {platform.generation}
          </p>
          <p className="platform-hero-description">{platform.longDescription}</p>
          <div className="platform-hero-stats">
            <div className="stat">
              <span className="stat-value">{games.length}</span>
              <span className="stat-label">Games</span>
            </div>
            <div className="stat">
              <span className="stat-value">{platform.emulatorCore}</span>
              <span className="stat-label">Emulator Core</span>
            </div>
            <div className="stat">
              <span className="stat-value">{platform.fileExtensions}</span>
              <span className="stat-label">File Types</span>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{platform.shortName} Games</h2>
          <span className="section-count">{games.length} available</span>
        </div>

        {games.length > 0 ? (
          <div className="games-list">
            {games.map((game) => (
              <div key={game.slug} className="game-list-item">
                <div className="game-list-cover">
                  <span className="game-cover-placeholder">🎮</span>
                </div>
                <div className="game-list-info">
                  <h3 className="game-list-title">{game.title}</h3>
                  <p className="game-list-meta">
                    {game.developer} • {game.year}
                  </p>
                  <span className="game-list-genre">{game.genre}</span>
                </div>
                <button className="btn btn-primary btn-sm" disabled>
                  Play
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon">🎮</span>
            <h3>No games yet</h3>
            <p>We&apos;re still curating {platform.shortName} games. Check back soon!</p>
          </div>
        )}
      </section>

      {/* More Platforms */}
      <section className="section">
        <h2 className="section-title">Explore Other Platforms</h2>
        <div className="related-platforms">
          {Object.entries(platforms)
            .filter(([key]) => key !== slug)
            .slice(0, 4)
            .map(([key, p]) => (
              <Link
                key={key}
                href={`/platforms/${key}`}
                className="related-platform-card"
                style={{ "--platform-colour": p.colour } as React.CSSProperties}
              >
                <span className="related-platform-short">{p.shortName}</span>
                <span className="related-platform-name">{p.name}</span>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
