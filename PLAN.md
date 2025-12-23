# CosyArcade - Retro Gaming Platform Implementation Plan

## Project Overview

**CosyArcade** (cosyarcade.com) is a curated retro gaming website featuring legally-free games from arcade classics through to more modern consoles. Games run directly in the browser using EmulatorJS, with age-appropriate content gating and optional user accounts.

**Tagline ideas:**
- "Your cosy corner for retro gaming"
- "Relax. Play. Remember."
- "Where retro games feel like home"

---

## Phase 1: Foundation (Core Infrastructure)

### 1.1 Project Setup
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS for styling
- [ ] Set up PostgreSQL database schema
- [ ] Configure Prisma ORM
- [ ] Set up project structure:
  ```
  /src
    /app          # Next.js App Router pages
    /components   # React components
    /lib          # Utilities, database, auth
    /api          # API routes
  /public
    /emulator     # EmulatorJS files
    /roms         # Game ROM files (organized by platform)
    /assets       # Images, icons
  /prisma         # Database schema
  ```

### 1.2 Database Schema
```
Users
├── id (UUID)
├── email
├── username
├── passwordHash
├── accountType (CHILD | TEEN | ADULT)
├── phoneVerified (boolean)
├── parentEmail (nullable, for child accounts)
├── parentVerified (boolean)
├── createdAt
└── updatedAt

Games
├── id (UUID)
├── title
├── slug
├── description
├── platform (enum)
├── genre (enum[])
├── era (70s | 80s | 90s | 2000s)
├── ageRating (ALL | TEEN_13)
├── romPath
├── coverImage
├── releaseYear
├── developer
├── legalSource (where we got it legally)
├── isMultiplayer
└── createdAt

SaveStates
├── id (UUID)
├── userId (FK)
├── gameId (FK)
├── slot (1-5)
├── stateData (binary)
├── screenshotUrl
└── createdAt

Sessions / GameHistory (optional, for "continue playing")
```

### 1.3 Authentication System
- [ ] Email/password registration
- [ ] Login/logout with JWT
- [ ] Password reset flow
- [ ] Session management

---

## Phase 2: Age Verification System

### 2.1 Account Types
1. **Guest** - No account, can play ALL-rated games only
2. **Child (under 13)** - Limited account, parent email verification required
3. **Verified (13+)** - Full access, SMS 2FA required

### 2.2 Child Account Flow
1. User selects "I'm under 13" during registration
2. Collects: username, password, parent email
3. Sends verification email to parent
4. Parent clicks link to approve account
5. Child can now save progress, but only access ALL-rated games

### 2.3 Teen/Adult Verification Flow (Twilio SMS)
1. User provides phone number
2. System sends 6-digit code via Twilio
3. User enters code within 10 minutes
4. Phone marked as verified
5. Full access granted to TEEN_13 content and multiplayer

### 2.4 Twilio Integration
```javascript
// Environment variables needed:
TWILIO_ACCOUNT_SID=xxx
TWILIO_AUTH_TOKEN=xxx
TWILIO_PHONE_NUMBER=+61xxxxxxxx  // Australian number
```

---

## Phase 3: Game Library & Emulation

### 3.1 EmulatorJS Integration
EmulatorJS supports these cores (all client-side, browser-based):

| Platform | Core | File Extensions |
|----------|------|-----------------|
| Arcade (MAME) | mame2003 | .zip |
| NES | fceumm | .nes |
| SNES | snes9x | .smc, .sfc |
| Game Boy | gambatte | .gb |
| Game Boy Color | gambatte | .gbc |
| Game Boy Advance | mgba | .gba |
| Sega Genesis/MD | genesis_plus_gx | .md, .gen |
| Sega Game Gear | genesis_plus_gx | .gg |
| Sega Master System | genesis_plus_gx | .sms |
| Atari 2600 | stella | .a26 |
| Commodore 64 | vice_x64 | .d64, .prg |
| Amiga | puae | .adf |
| DOS | dosbox_pure | .zip |
| PlayStation 1 | pcsx_rearmed | .bin/.cue |
| N64 | mupen64plus_next | .n64, .z64 |

### 3.2 Game Player Component
- [ ] Embed EmulatorJS player
- [ ] Responsive container (fullscreen support)
- [ ] Touch controls for mobile (configurable)
- [ ] Keyboard mapping display
- [ ] Save state integration (load/save to server)
- [ ] Volume controls

### 3.3 Legal Game Sources

**Homebrew & Free Games:**
- PDRoms.de - Homebrew games for all platforms
- Homebrew Hub - Curated homebrew
- itch.io - Free retro-style games
- GameJolt - Free indie games
- Archive.org (verified public domain only)

**Open Source Clones/Remakes:**
- FreeDoom (Doom WAD replacement)
- OpenTTD (Transport Tycoon)
- OpenMW (Morrowind engine, needs legal game files)
- C-Dogs SDL (top-down shooter)
- SuperTux (Mario-style platformer)

**Publisher-Released Freeware:**
- Beneath a Steel Sky (Revolution Software)
- Flight of the Amazon Queen
- Tyrian 2000 (Epic Games)
- Command & Conquer (EA released for free)
- Various id Software releases

**Quality Homebrew by Platform:**
- NES: Micro Mages, Alter Ego, Lawn Mower
- SNES: Unholy Night, Super Boss Gaiden
- Genesis: Tanglewood, Xeno Crisis (demos)
- Game Boy: Tobu Tobu Girl, Deadeus
- GBA: Goodboy Galaxy (demo), various ports

### 3.4 Game Metadata Management
- [ ] Admin panel for adding games
- [ ] Cover image upload
- [ ] Platform/genre/era tagging
- [ ] Age rating assignment
- [ ] Legal source documentation

---

## Phase 4: Design System & Visual Identity

### 4.1 Design Philosophy

**Hybrid Aesthetic:** Console-inspired UI elements + Lofi atmospheric backgrounds
- UI Components: Colors drawn from classic console hardware (SNES, Genesis, Game Boy)
- Atmosphere: Lofi/chillhop video backgrounds with animated elements
- Mood: Cozy nostalgia - "rainy day gaming" vibes
- Feel: Slightly aged (cream whites, warm greys) not sterile/clinical

### 4.2 Theme System

Four switchable ambient themes, each with unique video backgrounds and color temperatures:

| Theme | Vibe | Video Background | Color Temp |
|-------|------|------------------|------------|
| 🌙 CRT Glow | Late night gaming | Cozy room at night | Cool purple/blue |
| ☀️ Afternoon Sunlight | After school vibes | Sunny window scene | Warm golden |
| 💡 Lamp-lit Evening | Cozy living room | Warm lamp-lit room | Amber/orange |
| 🌧️ Rainy Day | Perfect gaming weather | Rain on window/city | Cool grey-blue |

**Default Theme:** CRT Glow

### 4.3 Base Color Palette (Shared Across All Themes)

```css
/* CONSOLE-INSPIRED PRIMARIES */
--snes-purple: #8b7cb3;      /* US SNES buttons */
--genesis-red: #cc3333;       /* SEGA logo accent */
--famicom-blue: #3d5a80;      /* JP console, Mega Man */
--gameboy-green: #4a7c59;     /* Iconic GB screen */

/* CARTRIDGE ACCENTS */
--zelda-gold: #d4a021;        /* NES gold cartridge */
--sunset-orange: #e07b53;     /* Box art gradients */
--mystic-purple: #6b5b7c;     /* RPG box art */
--deep-teal: #2f4858;         /* Adventure games */

/* UI FOUNDATIONS */
--aged-cream: #f5f0e6;        /* Yellowed plastic */
--warm-light: #d4cfc6;        /* NES console grey */
--muted-grey: #9a958c;        /* Cart plastic */
--console-dark: #4a4640;      /* Shadows, borders */

/* FUNCTIONAL */
--success-green: #5cb85c;     /* Save confirmed! */
--error-red: #d9534f;         /* Game over */
--warning-gold: #f0ad4e;      /* Low battery */

/* LOFI ATMOSPHERE */
--lofi-deep-blue: #1a1a2e;    /* Night sky */
--lofi-twilight: #4a3f6b;     /* Purple dusk */
--lofi-neon-pink: #e76f8b;    /* Neon accents */
--lofi-city-cyan: #2d5a7b;    /* City glow */
--lofi-lamp-orange: #f4a261;  /* Warm lamp */
```

### 4.4 Theme-Specific Color Schemes

#### 🌙 CRT Glow (Default)
```css
--bg-primary: #121218;        /* Deep charcoal */
--bg-surface: #1e1e26;        /* Card backgrounds */
--glow-color: rgba(245, 240, 230, 0.2);  /* Warm phosphor */
--text-primary: #f5f0e6;      /* Aged cream */
--text-secondary: #9a958c;    /* Muted grey */
--accent-glow: #8b7cb3;       /* SNES purple glow */
```

#### ☀️ Afternoon Sunlight
```css
--bg-primary: #2a2520;        /* Warm chocolate */
--bg-surface: #3d3630;        /* Wood cabinet */
--glow-color: rgba(240, 198, 116, 0.15);  /* Sunbeam */
--text-primary: #f5f0e6;      /* Aged cream */
--text-secondary: #b8a898;    /* Warm tan */
--accent-glow: #f4a261;       /* Golden */
```

#### 💡 Lamp-lit Evening
```css
--bg-primary: #1f1a17;        /* Deep warm brown */
--bg-surface: #2e2621;        /* Leather brown */
--glow-color: rgba(255, 213, 153, 0.12);  /* Incandescent */
--text-primary: #f5ebe0;      /* Warm parchment */
--text-secondary: #a89888;    /* Warm stone */
--accent-glow: #e07b53;       /* Amber */
```

#### 🌧️ Rainy Day
```css
--bg-primary: #1a1d21;        /* Cool blue-grey */
--bg-surface: #252a30;        /* Slate */
--glow-color: rgba(200, 212, 224, 0.1);  /* Cool daylight */
--text-primary: #e8e6e3;      /* Cool off-white */
--text-secondary: #8a9099;    /* Cool grey */
--accent-glow: #2d5a7b;       /* City cyan */
```

### 4.5 Animated Backgrounds

**Launch Implementation:**
- Stock video loops from Pexels/Pixabay (free, color-graded)
- Primary scenes: Cozy room + Rainy window/city
- Format: WebM (1-3 MB each), MP4 fallback
- Looping: Seamless 10-30 second loops

**Video Specs:**
```
Resolution: 1920x1080 (scales down for mobile)
Format: WebM primary, MP4 fallback
Size: 2-5 MB per theme
Compression: High quality, optimized for web
```

**Post-Launch Enhancement:**
- Custom LoRA-generated illustrated backgrounds
- Unique CosyArcade signature aesthetic
- Multiple scenes per theme (rotate randomly)

### 4.6 Motion & Animation

**Always Active:**
- Subtle glow/pulse on interactive elements
- Smooth hover transitions (200ms ease)
- Page transitions (fade, 150ms)

**Video Backgrounds (toggleable):**
- Looping atmospheric video
- Rain effects (particle overlay for Rainy Day theme)
- Gentle parallax on scroll (subtle, 5-10px movement)

**Optional CRT Effects:**
- Scanline overlay (horizontal lines, 50% opacity)
- Slight screen curvature (CSS transform)
- Subtle flicker (very subtle, 2% opacity pulse)
- Default: OFF (user can enable in settings)

### 4.7 Ambient Sound System

**Optional audio features (off by default):**
- Rain/weather sounds (matches theme)
- Lofi beats playlist (royalty-free)
- Retro game ambient (8-bit background music)
- Volume slider in settings
- Respects system "reduce motion" preferences

**Audio Sources (royalty-free):**
- Freesound.org - Ambient/weather
- Lofi Girl licensed tracks (if available)
- Custom 8-bit compositions

### 4.8 Performance & Accessibility

**Performance Toggle in Settings:**
```
[x] Enable video backgrounds
[x] Enable particle effects
[ ] Enable ambient sound
[x] Reduce motion (respects OS preference)
```

**Auto-Performance Detection:**
- Monitor frame rate during video playback
- If FPS drops below 30 for 3+ seconds, show prompt:
  ```
  ┌────────────────────────────────────────┐
  │  🎮 Performance Mode                   │
  │                                        │
  │  We noticed things are running slow.   │
  │  Want to disable video backgrounds     │
  │  for smoother performance?             │
  │                                        │
  │  [Yes, optimize]  [No, keep effects]   │
  └────────────────────────────────────────┘
  ```
- Remember user's choice per device
- Can always re-enable in settings

**Fallback Chain:**
1. Full video + effects (default)
2. Static image + CSS effects (low bandwidth)
3. Solid color + minimal UI (reduce motion)

**Accessibility:**
- WCAG 2.1 AA contrast ratios
- Respects `prefers-reduced-motion`
- Focus indicators on all interactive elements
- Screen reader friendly

---

## Phase 5: Frontend & User Experience

### 5.1 Page Structure
```
/ (Home)
├── Featured games carousel
├── Recently added
├── Quick filters (platform, genre)
└── Age-appropriate content only

/browse
├── Full game library
├── Multi-filter sidebar (platform, genre, era, multiplayer)
├── Grid/list view toggle
└── Search functionality

/game/[slug]
├── Game details & cover
├── Play button (age check if needed)
├── Description, controls, info
└── Save states (if logged in)

/play/[slug]
├── Fullscreen emulator
├── Control overlay
└── Save/load state buttons

/account
├── Profile settings
├── Saved games
├── Play history
└── Verification status

/auth/login
/auth/register
/auth/verify-phone
/auth/parent-verify/[token]

/admin (protected)
├── Add/edit games
├── User management
├── Moderation
```

### 4.2 UI/UX Design
- Retro-inspired aesthetic (CRT effects optional)
- Dark mode default (easy on eyes for gaming)
- Responsive design (mobile-first)
- Fast loading (lazy load game covers)
- Accessible (WCAG 2.1 AA)

### 4.3 Mobile Experience
- Touch control overlay for emulator
- Landscape orientation prompt for games
- Native-feeling PWA (installable)
- Responsive game grid

---

## Phase 6: Multiplayer (13+ Only)

### 5.1 Netplay Architecture
EmulatorJS supports netplay via WebRTC. Options:

**Option A: Peer-to-Peer (simpler)**
- Users share room codes
- Direct connection between browsers
- Lower server load
- Latency depends on players' connections

**Option B: Server-Relayed (more reliable)**
- Dedicated signaling server
- TURN server for NAT traversal
- More consistent experience
- Higher server requirements

**Recommendation:** Start with P2P, add relay server if needed.

### 5.2 Multiplayer Flow
1. Host creates room (gets 6-char code)
2. Guest enters code
3. WebRTC connection established
4. Game synced between players
5. Host controls save states

---

## Phase 7: Deployment & Infrastructure

### 6.1 Vultr Setup (Sydney)
**Initial Server:**
- High Frequency Compute
- 2 vCPU, 4GB RAM, 80GB NVMe
- Ubuntu 22.04 LTS
- ~$24 USD/month

**Services to run:**
- Next.js application (Node.js)
- PostgreSQL database
- Nginx reverse proxy
- SSL via Let's Encrypt

**Storage (if library grows):**
- Vultr Object Storage
- S3-compatible, $5/250GB
- Serve ROMs via CDN

### 6.2 Domain & SSL
- cosyarcade.com ✅ REGISTERED
- Configure DNS at Vultr
- SSL via Certbot/Let's Encrypt
- Force HTTPS

### 6.3 Deployment Pipeline
- GitHub repository
- GitHub Actions for CI/CD
- Auto-deploy on push to main
- Environment variables in Vultr

---

## Phase 8: Content Curation Workflow

### 7.1 Game Vetting Checklist
For each game added:
- [ ] Verify legal status (homebrew/freeware/open source)
- [ ] Document source and license
- [ ] Test in emulator
- [ ] Assign age rating
- [ ] Write description
- [ ] Add cover image
- [ ] Tag genres/platform/era
- [ ] Test save states

### 7.2 Initial Game Targets (~100-150 games)

**Arcade (~20 games)**
- Homebrew: Many on archive.org
- Open clones of classic concepts

**NES (~25 games)**
- Homebrew scene is huge
- Micro Mages, Alter Ego, etc.

**SNES (~15 games)**
- Smaller homebrew scene
- Focus on quality over quantity

**Genesis/Mega Drive (~15 games)**
- Good homebrew options
- Tanglewood, various demos

**Game Boy/GBC (~20 games)**
- Excellent homebrew scene
- Tobu Tobu Girl, Deadeus, etc.

**GBA (~10 games)**
- Focus on homebrew ports
- Quality demos

**C64/Amiga (~15 games)**
- Active retro scene
- Many freeware releases

**Other (Atari, DOS, etc.) (~15 games)**
- Classic freeware
- Open source remakes

---

## Technical Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     USER'S BROWSER                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Next.js   │  │  EmulatorJS │  │   WebRTC for    │  │
│  │   Frontend  │  │   (WASM)    │  │   Multiplayer   │  │
│  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘  │
└─────────┼────────────────┼──────────────────┼───────────┘
          │                │                  │
          ▼                ▼                  ▼
┌─────────────────────────────────────────────────────────┐
│                    VULTR VPS (Sydney)                    │
│  ┌─────────────────────────────────────────────────┐    │
│  │                    Nginx                         │    │
│  │              (Reverse Proxy + SSL)               │    │
│  └──────────────────────┬──────────────────────────┘    │
│                         │                                │
│  ┌──────────────────────┴──────────────────────────┐    │
│  │              Next.js API Routes                  │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │    │
│  │  │   Auth   │ │  Games   │ │   Save States    │ │    │
│  │  └────┬─────┘ └────┬─────┘ └────────┬─────────┘ │    │
│  └───────┼────────────┼────────────────┼───────────┘    │
│          │            │                │                 │
│          ▼            ▼                ▼                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐    │
│  │  PostgreSQL │ │   /roms     │ │   Object Store  │    │
│  │  (Users,    │ │   (local)   │ │   (save states) │    │
│  │   Games)    │ │             │ │                 │    │
│  └─────────────┘ └─────────────┘ └─────────────────┘    │
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │                   Twilio API                     │    │
│  │              (SMS Verification)                  │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

## Development Phases Summary

| Phase | Description | Priority |
|-------|-------------|----------|
| 1 | Project setup, database, basic auth | 🔴 Critical |
| 2 | Age verification (parent email + SMS) | 🔴 Critical |
| 3 | EmulatorJS integration, game library | 🔴 Critical |
| 4 | Frontend pages, browse/search/play | 🔴 Critical |
| 5 | Save states (server-side storage) | 🟡 Important |
| 6 | Multiplayer (WebRTC netplay) | 🟢 Nice to have |
| 7 | Admin panel, game curation tools | 🟡 Important |
| 8 | Deployment, SSL, production config | 🔴 Critical |

---

## Environment Variables Required

```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/cosyarcade

# Auth
JWT_SECRET=your-secret-key
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://cosyarcade.com

# Twilio (SMS)
TWILIO_ACCOUNT_SID=ACxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxx
TWILIO_PHONE_NUMBER=+61xxxxxxxxx

# Email (Resend - for parent verification)
RESEND_API_KEY=re_xxxxxxxx
EMAIL_FROM=noreply@cosyarcade.com

# Storage (optional, for scaling)
S3_ENDPOINT=https://syd1.vultrobjects.com
S3_ACCESS_KEY=xxxxxxxx
S3_SECRET_KEY=xxxxxxxx
S3_BUCKET=cosyarcade-assets
```

---

## Next Steps

Once this plan is approved, I will:

1. **Initialize the Next.js project** with TypeScript and Tailwind
2. **Set up the database schema** with Prisma
3. **Build the authentication system** (email/password + parent verification)
4. **Integrate Twilio** for SMS verification
5. **Set up EmulatorJS** and create the game player component
6. **Build the frontend pages** (home, browse, play, account)
7. **Create admin tools** for game management
8. **Test with initial game library** (homebrew/freeware)

---

## Decisions Made

| Decision | Choice |
|----------|--------|
| **Brand Name** | CosyArcade |
| **Domain** | cosyarcade.com ✅ PURCHASED |
| **Email Provider** | Resend (free tier: 3k emails/month) |
| **SMS Provider** | Twilio (AU: ~$0.058/SMS) |
| **Theme System** | 4 themes with video backgrounds |
| **Default Theme** | CRT Glow |
| **Visual Style** | Console UI + Lofi atmosphere (hybrid) |
| **Launch Backgrounds** | Stock video (cozy room, rainy city) |
| **Post-Launch** | Custom LoRA illustrations |
| **Motion Level** | Full (rain, animations, particles) |
| **Ambient Sound** | Yes, optional (off by default) |
| **Performance Toggle** | Yes + auto-detect degradation |
| **Rain Effect** | Must have! |

---

## Post-Launch Roadmap

### Phase 9: Enhanced Visuals
- [ ] Create custom LoRA-generated backgrounds
- [ ] Add more theme variations
- [ ] Animated illustrated scenes (parallax layers)
- [ ] Seasonal themes (Halloween, Christmas, etc.)

### Phase 10: Community Features
- [ ] User ratings/favorites
- [ ] Play statistics/achievements
- [ ] "Now Playing" social features
- [ ] Game recommendations

### Phase 11: Advanced Features
- [ ] Dynamic weather-based theme switching
- [ ] More emulator cores (PSP, DS, etc.)
- [ ] Speed run leaderboards
- [ ] Game request system

---

Ready to start building! 🎮
