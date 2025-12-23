# KonSol - Retro Gaming Platform Implementation Plan

## Project Overview

**KonSol** is a curated retro gaming website featuring legally-free games from arcade classics through to more modern consoles. Games run directly in the browser using EmulatorJS, with age-appropriate content gating and optional user accounts.

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

## Phase 4: Frontend & User Experience

### 4.1 Page Structure
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

## Phase 5: Multiplayer (13+ Only)

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

## Phase 6: Deployment & Infrastructure

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
- Register konsol.gg (or similar)
- Configure DNS at Vultr
- SSL via Certbot/Let's Encrypt
- Force HTTPS

### 6.3 Deployment Pipeline
- GitHub repository
- GitHub Actions for CI/CD
- Auto-deploy on push to main
- Environment variables in Vultr

---

## Phase 7: Content Curation Workflow

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
DATABASE_URL=postgresql://user:pass@localhost:5432/konsol

# Auth
JWT_SECRET=your-secret-key
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://konsol.gg

# Twilio (SMS)
TWILIO_ACCOUNT_SID=ACxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxx
TWILIO_PHONE_NUMBER=+61xxxxxxxxx

# Email (for parent verification)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@konsol.gg
SMTP_PASS=xxxxxxxx

# Storage (optional, for scaling)
S3_ENDPOINT=https://syd1.vultrobjects.com
S3_ACCESS_KEY=xxxxxxxx
S3_SECRET_KEY=xxxxxxxx
S3_BUCKET=konsol-assets
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

## Questions Before Proceeding

1. **Domain**: Should I proceed with `konsol.gg` as the target domain, or different?
2. **Branding**: Any color preferences for the retro aesthetic?
3. **Email Provider**: For parent verification emails, do you have an existing provider (SendGrid, AWS SES, etc.) or should I recommend one?

Ready to start building when you approve! 🎮
