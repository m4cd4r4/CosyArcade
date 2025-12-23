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
  // GAMES - Verified Free Games
  // ==========================================================================
  console.log("🎮 Creating games...");

  // Get platform references
  const dosplatform = await prisma.platform.findUnique({ where: { slug: "dos" } });
  const gbcPlatform = await prisma.platform.findUnique({ where: { slug: "gbc" } });
  const smsPlatform = await prisma.platform.findUnique({ where: { slug: "mastersystem" } });
  const c64Platform = await prisma.platform.findUnique({ where: { slug: "c64" } });
  const genesisPlatform = await prisma.platform.findUnique({ where: { slug: "genesis" } });
  const nesPlatform = await prisma.platform.findUnique({ where: { slug: "nes" } });

  // Get genre references
  const shooterGenre = await prisma.genre.findUnique({ where: { slug: "shooter" } });
  const platformerGenre = await prisma.genre.findUnique({ where: { slug: "platformer" } });
  const arcadeGenre = await prisma.genre.findUnique({ where: { slug: "arcade" } });
  const puzzleGenre = await prisma.genre.findUnique({ where: { slug: "puzzle" } });
  const actionGenre = await prisma.genre.findUnique({ where: { slug: "action" } });
  const adventureGenre = await prisma.genre.findUnique({ where: { slug: "adventure" } });

  if (!dosplatform || !gbcPlatform || !smsPlatform || !c64Platform || !genesisPlatform || !nesPlatform) {
    throw new Error("Required platforms not found");
  }

  if (!shooterGenre || !platformerGenre || !arcadeGenre || !puzzleGenre || !actionGenre || !adventureGenre) {
    throw new Error("Required genres not found");
  }

  const games = [
    // =========================================================================
    // DOS GAMES
    // =========================================================================
    {
      slug: "doom-shareware",
      title: "DOOM (Shareware)",
      platformId: dosplatform.id,
      description: "The legendary first-person shooter that defined a genre. Fight through Episode 1: Knee-Deep in the Dead as a space marine battling demons from Hell. This is the original shareware release, freely distributable as confirmed by John Carmack.",
      releaseYear: 1993,
      developer: "id Software",
      publisher: "id Software",
      ageRating: "TEEN_13" as const,
      romPath: "dos/doom-shareware.zip",
      legalSource: "https://www.doomworld.com/classicdoom/info/shareware.php",
      legalType: "FREEWARE" as const,
      licence: "Shareware - freely distributable",
      controlsInfo: "Arrow keys to move, Ctrl to shoot, Space to open doors, 1-7 for weapons",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: true,
      genres: [shooterGenre.id, actionGenre.id],
    },
    {
      slug: "commander-keen-1",
      title: "Commander Keen: Marooned on Mars",
      platformId: dosplatform.id,
      description: "Eight-year-old genius Billy Blaze dons his brother's football helmet and becomes Commander Keen, defender of Earth! In this first episode, help Keen find the parts to repair his spaceship and escape Mars. A classic platformer from id Software, before they made DOOM.",
      releaseYear: 1990,
      developer: "id Software",
      publisher: "Apogee Software",
      ageRating: "ALL" as const,
      romPath: "dos/commander-keen-1.zip",
      legalSource: "https://www.commander-keen.com/game-downloads.php",
      legalType: "FREEWARE" as const,
      licence: "Shareware - Episode 1 freely distributable",
      controlsInfo: "Arrow keys to move, Ctrl to jump, Alt to use pogo/shoot",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: true,
      genres: [platformerGenre.id],
    },

    // =========================================================================
    // GAME BOY COLOR
    // =========================================================================
    {
      slug: "tobu-tobu-girl-deluxe",
      title: "Tobu Tobu Girl Deluxe",
      platformId: gbcPlatform.id,
      description: "Help Tobu rescue her cat who has floated away on balloons! Dash, stomp, and boost your way upward in this fast-paced arcade platformer. Features full-colour graphics and is compatible with Game Boy, Game Boy Color, and Super Game Boy. Open source under MIT license.",
      releaseYear: 2019,
      developer: "Tangram Games",
      publisher: "Tangram Games",
      ageRating: "ALL" as const,
      romPath: "gbc/tobu-tobu-girl-deluxe.gbc",
      legalSource: "https://tangramgames.itch.io/tobu-tobu-girl-deluxe",
      legalType: "OPENSOURCE" as const,
      licence: "MIT License (code), CC-BY 4.0 (assets)",
      controlsInfo: "D-pad to move, A to dash/stomp, B to boost",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: true,
      genres: [arcadeGenre.id, platformerGenre.id],
    },

    // =========================================================================
    // MASTER SYSTEM
    // =========================================================================
    {
      slug: "silver-valley",
      title: "Silver Valley",
      platformId: smsPlatform.id,
      description: "A love letter to Castlevania, Kid Icarus, and Wonder Boy in Monster Land. Explore over 60 levels filled with enemies, bosses, and secrets. Made by Enrique Ruiz for the SMS Power community, this is one of the finest Master System homebrew games ever created.",
      releaseYear: 2018,
      developer: "Enrique Ruiz (Eruiz00)",
      publisher: "SMS Power",
      ageRating: "ALL" as const,
      romPath: "sms/silver-valley.sms",
      legalSource: "https://www.smspower.org/Homebrew/SilverValley-SMS",
      legalType: "HOMEBREW" as const,
      licence: "Freeware - distributed by developer",
      controlsInfo: "D-pad to move, Button 1 to attack, Button 2 to jump",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: true,
      genres: [actionGenre.id, platformerGenre.id],
    },

    // =========================================================================
    // COMMODORE 64
    // =========================================================================
    {
      slug: "alter-ego",
      title: "Alter Ego",
      platformId: c64Platform.id,
      description: "Control a hero and their phantom twin in this clever puzzle platformer. When you move, your alter ego mirrors your movements - horizontally in some levels, vertically in others. Switch between them to collect pixels and solve each single-screen puzzle. Great for all ages!",
      releaseYear: 2014,
      developer: "RetroSouls",
      publisher: "RetroSouls",
      ageRating: "ALL" as const,
      romPath: "c64/alter-ego.prg",
      legalSource: "https://www.retrosouls.net/?page_id=614",
      legalType: "HOMEBREW" as const,
      licence: "Freeware with source code",
      controlsInfo: "Joystick to move, Fire to switch between hero and alter ego",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: false,
      genres: [puzzleGenre.id, platformerGenre.id],
    },

    // =========================================================================
    // GENESIS
    // =========================================================================
    {
      slug: "hayatos-journey",
      title: "Hayato's Journey",
      platformId: genesisPlatform.id,
      description: "An all-new action platformer for the Sega Genesis, released in 2024! Guide Hayato through challenging levels filled with enemies and obstacles. A modern homebrew that shows the Genesis still has life in it. Free to download from the developer.",
      releaseYear: 2024,
      developer: "Master Linkuei",
      publisher: "Master Linkuei",
      ageRating: "ALL" as const,
      romPath: "genesis/hayatos-journey.md",
      legalSource: "https://masterlinkuei.itch.io/",
      legalType: "HOMEBREW" as const,
      licence: "Freeware",
      controlsInfo: "D-pad to move, A/B/C for actions",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: true,
      genres: [actionGenre.id, platformerGenre.id],
    },

    // =========================================================================
    // MORE DOS GAMES
    // =========================================================================
    {
      slug: "tyrian-2000",
      title: "Tyrian 2000",
      platformId: dosplatform.id,
      description: "One of the greatest vertical scrolling shooters ever made! Originally released in 1999, Tyrian 2000 was officially released as freeware in 2004. Features incredible depth with ship customization, multiple game modes, and a surprisingly good story. OpenTyrian source code is GPL.",
      releaseYear: 1999,
      developer: "Eclipse Productions",
      publisher: "Epic MegaGames",
      ageRating: "ALL" as const,
      romPath: "dos/tyrian-2000.zip",
      legalSource: "https://www.gog.com/game/tyrian_2000",
      legalType: "FREEWARE" as const,
      licence: "Officially released as freeware (2004)",
      controlsInfo: "Arrow keys to move, Ctrl/Alt to fire weapons, Space for special",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: true,
      genres: [shooterGenre.id, arcadeGenre.id],
    },

    // =========================================================================
    // NES
    // =========================================================================
    {
      slug: "nova-the-squirrel",
      title: "Nova the Squirrel",
      platformId: nesPlatform.id,
      description: "Nova Storm, a green squirrel, finds herself in an unfamiliar world and must use her newly found ability to copy abilities from enemies to escape! A polished open-source NES platformer with tight controls and creative level design. Full source code available on GitHub.",
      releaseYear: 2018,
      developer: "NovaSquirrel",
      publisher: "NovaSquirrel",
      ageRating: "ALL" as const,
      romPath: "nes/nova-the-squirrel.nes",
      legalSource: "https://github.com/NovaSquirrel/NovaTheSquirrel",
      legalType: "OPENSOURCE" as const,
      licence: "GPL - Open source",
      controlsInfo: "D-pad to move, A to jump, B to use ability, Select to drop ability",
      isMultiplayer: false,
      maxPlayers: 1,
      isFeatured: true,
      genres: [platformerGenre.id, adventureGenre.id],
    },
  ];

  for (const game of games) {
    const { genres: genreIds, ...gameData } = game;

    const createdGame = await prisma.game.upsert({
      where: { slug: game.slug },
      update: gameData,
      create: gameData,
    });

    // Link genres
    for (const genreId of genreIds) {
      await prisma.gameGenre.upsert({
        where: {
          gameId_genreId: {
            gameId: createdGame.id,
            genreId: genreId,
          },
        },
        update: {},
        create: {
          gameId: createdGame.id,
          genreId: genreId,
        },
      });
    }
  }

  console.log(`✅ Created ${games.length} games`);

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
