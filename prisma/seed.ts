import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ==========================================================================
  // PLATFORMS
  // ==========================================================================
  console.log("📺 Creating platforms...");

  const platforms = [
    {
      slug: "arcade",
      name: "Arcade",
      shortName: "Arcade",
      manufacturer: null,
      releaseYear: null,
      generation: null,
      emulatorCore: "mame2003",
      fileExtensions: ".zip",
      description: "Classic arcade cabinet games from the golden age of gaming.",
      colour: "#cc3333",
      sortOrder: 1,
    },
    {
      slug: "nes",
      name: "Nintendo Entertainment System",
      shortName: "NES",
      manufacturer: "Nintendo",
      releaseYear: 1983,
      generation: 3,
      emulatorCore: "fceumm",
      fileExtensions: ".nes",
      description: "The 8-bit console that saved gaming and launched countless franchises.",
      colour: "#cc3333",
      sortOrder: 2,
    },
    {
      slug: "snes",
      name: "Super Nintendo Entertainment System",
      shortName: "SNES",
      manufacturer: "Nintendo",
      releaseYear: 1990,
      generation: 4,
      emulatorCore: "snes9x",
      fileExtensions: ".smc,.sfc",
      description: "16-bit perfection. Home to some of the greatest games ever made.",
      colour: "#8b7cb3",
      sortOrder: 3,
    },
    {
      slug: "genesis",
      name: "Sega Genesis",
      shortName: "Genesis",
      manufacturer: "Sega",
      releaseYear: 1988,
      generation: 4,
      emulatorCore: "genesis_plus_gx",
      fileExtensions: ".md,.gen",
      description: "Sega does what Nintendon't! Fast-paced 16-bit action.",
      colour: "#1a1a2e",
      sortOrder: 4,
    },
    {
      slug: "gameboy",
      name: "Game Boy",
      shortName: "GB",
      manufacturer: "Nintendo",
      releaseYear: 1989,
      generation: 4,
      emulatorCore: "gambatte",
      fileExtensions: ".gb",
      description: "The legendary handheld that let you game on the go.",
      colour: "#4a7c59",
      sortOrder: 5,
    },
    {
      slug: "gbc",
      name: "Game Boy Color",
      shortName: "GBC",
      manufacturer: "Nintendo",
      releaseYear: 1998,
      generation: 5,
      emulatorCore: "gambatte",
      fileExtensions: ".gbc",
      description: "The Game Boy gets colourful! Backwards compatible with GB games.",
      colour: "#4a7c59",
      sortOrder: 6,
    },
    {
      slug: "gba",
      name: "Game Boy Advance",
      shortName: "GBA",
      manufacturer: "Nintendo",
      releaseYear: 2001,
      generation: 6,
      emulatorCore: "mgba",
      fileExtensions: ".gba",
      description: "SNES-quality gaming in your pocket. The ultimate handheld.",
      colour: "#3d5a80",
      sortOrder: 7,
    },
    {
      slug: "gamegear",
      name: "Sega Game Gear",
      shortName: "GG",
      manufacturer: "Sega",
      releaseYear: 1990,
      generation: 4,
      emulatorCore: "genesis_plus_gx",
      fileExtensions: ".gg",
      description: "Sega's full-colour portable. A battery-hungry beast.",
      colour: "#1a1a2e",
      sortOrder: 8,
    },
    {
      slug: "mastersystem",
      name: "Sega Master System",
      shortName: "SMS",
      manufacturer: "Sega",
      releaseYear: 1985,
      generation: 3,
      emulatorCore: "genesis_plus_gx",
      fileExtensions: ".sms",
      description: "Sega's 8-bit console. Huge in Europe and Brazil!",
      colour: "#1a1a2e",
      sortOrder: 9,
    },
    {
      slug: "atari2600",
      name: "Atari 2600",
      shortName: "2600",
      manufacturer: "Atari",
      releaseYear: 1977,
      generation: 2,
      emulatorCore: "stella",
      fileExtensions: ".a26",
      description: "The console that started it all. Gaming's first superstar.",
      colour: "#e07b53",
      sortOrder: 10,
    },
    {
      slug: "c64",
      name: "Commodore 64",
      shortName: "C64",
      manufacturer: "Commodore",
      releaseYear: 1982,
      generation: 2,
      emulatorCore: "vice_x64",
      fileExtensions: ".d64,.prg",
      description: "The best-selling computer ever. A generation learned to code here.",
      colour: "#3d5a80",
      sortOrder: 11,
    },
    {
      slug: "amiga",
      name: "Amiga",
      shortName: "Amiga",
      manufacturer: "Commodore",
      releaseYear: 1985,
      generation: 3,
      emulatorCore: "puae",
      fileExtensions: ".adf",
      description: "Ahead of its time. Stunning multimedia capabilities for the era.",
      colour: "#d4a021",
      sortOrder: 12,
    },
    {
      slug: "dos",
      name: "DOS",
      shortName: "DOS",
      manufacturer: "IBM",
      releaseYear: 1981,
      generation: null,
      emulatorCore: "dosbox_pure",
      fileExtensions: ".zip",
      description: "PC gaming before Windows. Home to countless classics.",
      colour: "#4a4640",
      sortOrder: 13,
    },
  ];

  for (const platform of platforms) {
    await prisma.platform.upsert({
      where: { slug: platform.slug },
      update: platform,
      create: platform,
    });
  }

  console.log(`✅ Created ${platforms.length} platforms`);

  // ==========================================================================
  // GENRES
  // ==========================================================================
  console.log("🎮 Creating genres...");

  const genres = [
    {
      slug: "platformer",
      name: "Platformer",
      description: "Jump, run, and navigate through levels.",
      icon: "🏃",
      sortOrder: 1,
    },
    {
      slug: "puzzle",
      name: "Puzzle",
      description: "Brain teasers and logic games.",
      icon: "🧩",
      sortOrder: 2,
    },
    {
      slug: "action",
      name: "Action",
      description: "Fast-paced action and combat.",
      icon: "⚔️",
      sortOrder: 3,
    },
    {
      slug: "adventure",
      name: "Adventure",
      description: "Story-driven exploration and discovery.",
      icon: "🗺️",
      sortOrder: 4,
    },
    {
      slug: "rpg",
      name: "RPG",
      description: "Role-playing games with character progression.",
      icon: "🎭",
      sortOrder: 5,
    },
    {
      slug: "shooter",
      name: "Shooter",
      description: "Shoot 'em ups, shmups, and shooters.",
      icon: "🔫",
      sortOrder: 6,
    },
    {
      slug: "racing",
      name: "Racing",
      description: "Racing and driving games.",
      icon: "🏎️",
      sortOrder: 7,
    },
    {
      slug: "sports",
      name: "Sports",
      description: "Sports and athletics games.",
      icon: "⚽",
      sortOrder: 8,
    },
    {
      slug: "fighting",
      name: "Fighting",
      description: "One-on-one combat games.",
      icon: "🥊",
      sortOrder: 9,
    },
    {
      slug: "strategy",
      name: "Strategy",
      description: "Tactical and strategy games.",
      icon: "♟️",
      sortOrder: 10,
    },
    {
      slug: "simulation",
      name: "Simulation",
      description: "Simulation and management games.",
      icon: "🏗️",
      sortOrder: 11,
    },
    {
      slug: "arcade",
      name: "Arcade",
      description: "Classic arcade-style gameplay.",
      icon: "🕹️",
      sortOrder: 12,
    },
  ];

  for (const genre of genres) {
    await prisma.genre.upsert({
      where: { slug: genre.slug },
      update: genre,
      create: genre,
    });
  }

  console.log(`✅ Created ${genres.length} genres`);

  // ==========================================================================
  // DONE
  // ==========================================================================
  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
