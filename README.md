<p align="center">
  <h1 align="center">🎮 CosyArcade</h1>
  <p align="center"><strong>Your cosy corner for retro gaming</strong></p>
  <p align="center">
    Play classic arcade, console, and computer games from the 70s, 80s, 90s and beyond.<br/>
    Free, legal, and right in your browser.
  </p>
</p>

<p align="center">
  <a href="https://cosyarcade.com">Website</a> •
  <a href="#features">Features</a> •
  <a href="#supported-platforms">Platforms</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## What is CosyArcade?

CosyArcade is a curated retro gaming website where you can play classic games directly in your browser. We focus on **legally-free games only** — homebrew, freeware, and officially released free titles. No piracy, ever.

Our mission is to preserve and celebrate retro gaming culture in a cosy, welcoming environment that's safe for all ages.

### Why "Cosy"?

Gaming should feel like coming home. We've designed CosyArcade with:

- 🌙 **Ambient themes** — Choose from CRT Glow, Afternoon Sunlight, Lamp-lit Evening, or Rainy Day
- 🎧 **Optional lofi vibes** — Ambient sounds and music to set the mood
- 🌧️ **Atmospheric backgrounds** — Animated video backgrounds that match your theme
- 👨‍👩‍👧‍👦 **Family-friendly** — Age-appropriate content filtering for younger players

---

## Features

### For Players

| Feature | Description |
|---------|-------------|
| **Browser-Based** | No downloads, no installs. Click and play instantly |
| **Save States** | Save your progress and pick up where you left off |
| **Mobile Support** | Touch controls for handheld games on any device |
| **Multiplayer** | Online netplay for supported games (13+ only) |
| **Themes** | 4 beautiful ambient themes to match your mood |
| **Accessibility** | Respects reduced motion, full keyboard navigation |

### For Parents

| Feature | Description |
|---------|-------------|
| **Age Verification** | SMS verification for teen/adult content |
| **Parental Controls** | Child accounts require parent email approval |
| **Curated Content** | Every game is manually vetted for appropriateness |
| **No Ads** | Clean, distraction-free gaming experience |

---

## Supported Platforms

CosyArcade uses [EmulatorJS](https://emulatorjs.org/) to run games directly in your browser.

| Platform | Era | Examples |
|----------|-----|----------|
| **Arcade** | 1970s-90s | Classic cabinet games |
| **NES** | 1983 | Nintendo Entertainment System |
| **SNES** | 1990 | Super Nintendo |
| **Sega Genesis** | 1988 | Mega Drive |
| **Game Boy** | 1989 | GB, GBC, GBA |
| **Sega Game Gear** | 1990 | Portable Sega |
| **Commodore 64** | 1982 | Home computer classic |
| **Amiga** | 1985 | Multimedia pioneer |
| **Atari 2600** | 1977 | Console pioneer |
| **DOS** | 1980s-90s | PC classics |
| *And more...* | | |

---

## Game Sources

We only include games that are **legally free to distribute**:

- 🏠 **Homebrew** — New games made by fans for retro hardware
- 🆓 **Freeware** — Games officially released for free by publishers
- 🔓 **Open Source** — Community-created clones and remakes
- 📜 **Public Domain** — Games with expired or released copyrights

**We never host pirated content.** Every game includes documentation of its legal source.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [PostgreSQL](https://www.postgresql.org/) | Database |
| [Prisma](https://www.prisma.io/) | Database ORM |
| [EmulatorJS](https://emulatorjs.org/) | Browser-based emulation |
| [Twilio](https://www.twilio.com/) | SMS verification |
| [Resend](https://resend.com/) | Transactional email |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (for full functionality)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cosyarcade.git
cd cosyarcade

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

See `.env.example` for required configuration:

- `DATABASE_URL` — PostgreSQL connection string
- `NEXTAUTH_SECRET` — Authentication secret
- `TWILIO_*` — SMS verification credentials
- `RESEND_API_KEY` — Email service credentials

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Theme system & global styles
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Landing page
├── components/             # React components
│   ├── ThemeProvider.tsx   # Theme context & persistence
│   └── ThemeSelector.tsx   # Theme switching UI
├── lib/                    # Utilities & helpers
└── types/                  # TypeScript definitions

public/
├── emulator/               # EmulatorJS files
├── roms/                   # Game ROM files (organised by platform)
└── assets/                 # Images, videos, audio
```

---

## Themes

CosyArcade features 4 ambient themes, each with unique colour palettes:

| Theme | Vibe | Best For |
|-------|------|----------|
| 🌙 **CRT Glow** | Late night gaming | Default, purple/blue tones |
| ☀️ **Afternoon Sunlight** | After school vibes | Warm, golden tones |
| 💡 **Lamp-lit Evening** | Cosy living room | Amber, orange tones |
| 🌧️ **Rainy Day** | Perfect gaming weather | Cool, grey-blue tones |

Themes are saved to your browser and persist across sessions.

---

## Contributing

We welcome contributions! Here's how you can help:

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Game Submissions

Want to suggest a game? It must be:

- ✅ Legally free (homebrew, freeware, or open source)
- ✅ Working in EmulatorJS
- ✅ Appropriate for the assigned age rating
- ✅ Documented with source/licence information

Open an issue with the **Game Submission** template.

### Bug Reports

Found a bug? Open an issue with:

- Steps to reproduce
- Expected behaviour
- Actual behaviour
- Browser/device information

---

## Legal

- [Privacy Policy](/privacy) — How we handle your data
- [Terms of Service](/terms) — Rules for using CosyArcade
- [Age Verification Policy](/age-policy) — How we protect younger users
- [Content Policy](/content-policy) — Our game selection criteria

---

## Roadmap

### Now
- [x] Theme system with 4 ambient themes
- [x] Landing page
- [ ] User authentication
- [ ] Game library browser
- [ ] EmulatorJS integration

### Next
- [ ] Save states (cloud sync)
- [ ] Multiplayer netplay
- [ ] Mobile touch controls
- [ ] Admin panel

### Future
- [ ] Custom LoRA-generated backgrounds
- [ ] Community features
- [ ] Achievements & statistics
- [ ] Seasonal themes

---

## Acknowledgements

- [EmulatorJS](https://emulatorjs.org/) — Browser-based emulation
- [RetroArch](https://www.retroarch.com/) — Emulator cores
- [Lofi Girl](https://lofigirl.com/) — Aesthetic inspiration
- The homebrew community — For keeping retro gaming alive

---

## Licence

This project is licensed under the MIT Licence — see the [LICENCE](LICENCE) file for details.

Game ROMs are distributed under their respective licences as documented in each game's metadata.

---

<p align="center">
  Made with ☕ and nostalgia<br/>
  <strong>CosyArcade</strong> — Where retro games feel like home
</p>
