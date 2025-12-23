# CosyArcade Database Schema

This document outlines the database design for CosyArcade.

---

## Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     DATABASE ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐     ┌──────────┐     ┌──────────────┐            │
│  │  Users   │────▶│ Sessions │     │   Platforms  │            │
│  └────┬─────┘     └──────────┘     └──────┬───────┘            │
│       │                                    │                     │
│       │           ┌──────────┐            │                     │
│       │           │  Genres  │            │                     │
│       │           └────┬─────┘            │                     │
│       │                │                  │                     │
│       ▼                ▼                  ▼                     │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐               │
│  │SaveStates│◀────│  Games   │────▶│GameGenres│               │
│  └──────────┘     └────┬─────┘     └──────────┘               │
│       ▲                │                                        │
│       │                ▼                                        │
│       │           ┌──────────┐                                  │
│       └───────────│PlayHistory│                                 │
│                   └──────────┘                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Entity Relationship Diagram

```
Users
├── 1:N → SaveStates (user has many save states)
├── 1:N → PlayHistory (user has play history)
├── 1:N → Sessions (user has sessions)
├── 1:N → Favourites (user has favourite games)
└── 1:1 → UserPreferences (user has preferences)

Games
├── N:1 → Platforms (game belongs to platform)
├── N:M → Genres (game has many genres)
├── 1:N → SaveStates (game has save states from users)
├── 1:N → PlayHistory (game has play records)
└── 1:N → Favourites (game is favourited by users)

Platforms
└── 1:N → Games (platform has many games)

Genres
└── N:M → Games (genre has many games)
```

---

## Tables

### 1. Users

Stores all user accounts (guests don't have accounts).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Unique identifier |
| `email` | VARCHAR(255) | UNIQUE, NOT NULL | User's email |
| `username` | VARCHAR(50) | UNIQUE, NOT NULL | Display name |
| `password_hash` | VARCHAR(255) | NOT NULL | Bcrypt hashed password |
| `account_type` | ENUM | NOT NULL | CHILD, VERIFIED, ADMIN |
| `phone_verified` | BOOLEAN | DEFAULT false | SMS verification complete |
| `parent_email` | VARCHAR(255) | NULLABLE | For child accounts |
| `parent_verified` | BOOLEAN | DEFAULT false | Parent consent received |
| `email_verified` | BOOLEAN | DEFAULT false | Email confirmed |
| `created_at` | TIMESTAMP | NOT NULL | Account creation time |
| `updated_at` | TIMESTAMP | NOT NULL | Last update time |
| `last_login_at` | TIMESTAMP | NULLABLE | Last login time |

**Account Types:**
- `CHILD` — Under 13, requires parent consent, restricted content
- `VERIFIED` — 13+, SMS verified, full access
- `ADMIN` — Staff with admin panel access

**Indexes:**
- `idx_users_email` on `email`
- `idx_users_username` on `username`

---

### 2. Sessions

Active user sessions for authentication.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Session ID |
| `user_id` | UUID | FK → Users | Session owner |
| `token` | VARCHAR(255) | UNIQUE, NOT NULL | Session token |
| `expires_at` | TIMESTAMP | NOT NULL | Expiration time |
| `ip_address` | VARCHAR(45) | NULLABLE | Client IP |
| `user_agent` | TEXT | NULLABLE | Browser info |
| `created_at` | TIMESTAMP | NOT NULL | Session start |

**Indexes:**
- `idx_sessions_token` on `token`
- `idx_sessions_user_id` on `user_id`
- `idx_sessions_expires_at` on `expires_at`

---

### 3. Platforms

Gaming platforms/consoles.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Unique identifier |
| `slug` | VARCHAR(50) | UNIQUE, NOT NULL | URL-friendly name |
| `name` | VARCHAR(100) | NOT NULL | Display name |
| `short_name` | VARCHAR(20) | NOT NULL | Abbreviated name |
| `manufacturer` | VARCHAR(100) | NULLABLE | Nintendo, Sega, etc. |
| `release_year` | INTEGER | NULLABLE | Year released |
| `generation` | INTEGER | NULLABLE | Console generation |
| `emulator_core` | VARCHAR(50) | NOT NULL | EmulatorJS core name |
| `file_extensions` | VARCHAR(100) | NOT NULL | Supported ROM extensions |
| `description` | TEXT | NULLABLE | Platform description |
| `icon` | VARCHAR(255) | NULLABLE | Icon image path |
| `colour` | VARCHAR(7) | NULLABLE | Brand colour (hex) |
| `sort_order` | INTEGER | DEFAULT 0 | Display order |
| `is_active` | BOOLEAN | DEFAULT true | Show in UI |
| `created_at` | TIMESTAMP | NOT NULL | Creation time |

**Seed Data:**
```
nes, "Nintendo Entertainment System", "NES", "Nintendo", 1983, 3, "fceumm", ".nes"
snes, "Super Nintendo", "SNES", "Nintendo", 1990, 4, "snes9x", ".smc,.sfc"
genesis, "Sega Genesis", "Genesis", "Sega", 1988, 4, "genesis_plus_gx", ".md,.gen"
gameboy, "Game Boy", "GB", "Nintendo", 1989, 4, "gambatte", ".gb"
gbc, "Game Boy Color", "GBC", "Nintendo", 1998, 5, "gambatte", ".gbc"
gba, "Game Boy Advance", "GBA", "Nintendo", 2001, 6, "mgba", ".gba"
gamegear, "Sega Game Gear", "GG", "Sega", 1990, 4, "genesis_plus_gx", ".gg"
mastersystem, "Sega Master System", "SMS", "Sega", 1985, 3, "genesis_plus_gx", ".sms"
atari2600, "Atari 2600", "2600", "Atari", 1977, 2, "stella", ".a26"
c64, "Commodore 64", "C64", "Commodore", 1982, 2, "vice_x64", ".d64,.prg"
amiga, "Amiga", "Amiga", "Commodore", 1985, 3, "puae", ".adf"
arcade, "Arcade", "Arcade", null, null, null, "mame2003", ".zip"
dos, "DOS", "DOS", "IBM", 1981, null, "dosbox_pure", ".zip"
```

**Indexes:**
- `idx_platforms_slug` on `slug`
- `idx_platforms_sort_order` on `sort_order`

---

### 4. Genres

Game genres/categories.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Unique identifier |
| `slug` | VARCHAR(50) | UNIQUE, NOT NULL | URL-friendly name |
| `name` | VARCHAR(100) | NOT NULL | Display name |
| `description` | TEXT | NULLABLE | Genre description |
| `icon` | VARCHAR(50) | NULLABLE | Emoji or icon class |
| `sort_order` | INTEGER | DEFAULT 0 | Display order |
| `created_at` | TIMESTAMP | NOT NULL | Creation time |

**Seed Data:**
```
platformer, "Platformer", "Jump and run games", "🏃"
puzzle, "Puzzle", "Brain teasers and logic games", "🧩"
action, "Action", "Fast-paced action games", "⚔️"
adventure, "Adventure", "Story-driven exploration", "🗺️"
rpg, "RPG", "Role-playing games", "🎭"
shooter, "Shooter", "Shoot 'em ups and shmups", "🔫"
racing, "Racing", "Racing and driving games", "🏎️"
sports, "Sports", "Sports and athletics", "⚽"
fighting, "Fighting", "One-on-one combat", "🥊"
strategy, "Strategy", "Tactical and strategy games", "♟️"
simulation, "Simulation", "Simulation and management", "🏗️"
arcade, "Arcade", "Classic arcade style", "🕹️"
```

**Indexes:**
- `idx_genres_slug` on `slug`

---

### 5. Games

The main games table.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Unique identifier |
| `slug` | VARCHAR(100) | UNIQUE, NOT NULL | URL-friendly name |
| `title` | VARCHAR(200) | NOT NULL | Game title |
| `platform_id` | UUID | FK → Platforms, NOT NULL | Platform |
| `description` | TEXT | NULLABLE | Game description |
| `release_year` | INTEGER | NULLABLE | Original release year |
| `developer` | VARCHAR(200) | NULLABLE | Developer/author |
| `publisher` | VARCHAR(200) | NULLABLE | Publisher (if any) |
| `age_rating` | ENUM | NOT NULL | ALL, TEEN_13 |
| `rom_path` | VARCHAR(500) | NOT NULL | Path to ROM file |
| `rom_size` | INTEGER | NULLABLE | File size in bytes |
| `cover_image` | VARCHAR(500) | NULLABLE | Cover art path |
| `screenshot_1` | VARCHAR(500) | NULLABLE | Screenshot path |
| `screenshot_2` | VARCHAR(500) | NULLABLE | Screenshot path |
| `screenshot_3` | VARCHAR(500) | NULLABLE | Screenshot path |
| `legal_source` | VARCHAR(500) | NOT NULL | Where we got it legally |
| `legal_type` | ENUM | NOT NULL | HOMEBREW, FREEWARE, OPENSOURCE, PUBLICDOMAIN |
| `licence` | VARCHAR(200) | NULLABLE | Licence name (MIT, GPL, etc.) |
| `controls_info` | TEXT | NULLABLE | Control scheme description |
| `is_multiplayer` | BOOLEAN | DEFAULT false | Supports multiplayer |
| `max_players` | INTEGER | DEFAULT 1 | Maximum players |
| `is_featured` | BOOLEAN | DEFAULT false | Show in featured |
| `is_active` | BOOLEAN | DEFAULT true | Published/visible |
| `play_count` | INTEGER | DEFAULT 0 | Times played |
| `created_at` | TIMESTAMP | NOT NULL | When added |
| `updated_at` | TIMESTAMP | NOT NULL | Last modified |
| `published_at` | TIMESTAMP | NULLABLE | When published |

**Age Ratings:**
- `ALL` — Suitable for all ages
- `TEEN_13` — Requires 13+ verification

**Legal Types:**
- `HOMEBREW` — Fan-made for retro hardware
- `FREEWARE` — Officially released for free
- `OPENSOURCE` — Open source game/clone
- `PUBLICDOMAIN` — No copyright restrictions

**Indexes:**
- `idx_games_slug` on `slug`
- `idx_games_platform_id` on `platform_id`
- `idx_games_age_rating` on `age_rating`
- `idx_games_is_active` on `is_active`
- `idx_games_is_featured` on `is_featured`
- `idx_games_play_count` on `play_count`
- `idx_games_created_at` on `created_at`

---

### 6. GameGenres (Junction Table)

Links games to their genres (many-to-many).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `game_id` | UUID | FK → Games, PK | Game reference |
| `genre_id` | UUID | FK → Genres, PK | Genre reference |

**Indexes:**
- Composite PK on (`game_id`, `genre_id`)
- `idx_gamegenres_genre_id` on `genre_id`

---

### 7. SaveStates

User save states for games.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Unique identifier |
| `user_id` | UUID | FK → Users, NOT NULL | Owner |
| `game_id` | UUID | FK → Games, NOT NULL | Game |
| `slot` | INTEGER | NOT NULL | Slot number (1-5) |
| `name` | VARCHAR(100) | NULLABLE | User-given name |
| `state_data` | BYTEA | NOT NULL | Compressed save state |
| `screenshot` | VARCHAR(500) | NULLABLE | Screenshot at save time |
| `play_time` | INTEGER | DEFAULT 0 | Seconds played |
| `created_at` | TIMESTAMP | NOT NULL | When saved |
| `updated_at` | TIMESTAMP | NOT NULL | Last overwritten |

**Constraints:**
- UNIQUE on (`user_id`, `game_id`, `slot`)

**Indexes:**
- `idx_savestates_user_id` on `user_id`
- `idx_savestates_game_id` on `game_id`
- `idx_savestates_user_game` on (`user_id`, `game_id`)

---

### 8. PlayHistory

Tracks when users play games.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Unique identifier |
| `user_id` | UUID | FK → Users, NULLABLE | Player (null for guests) |
| `game_id` | UUID | FK → Games, NOT NULL | Game played |
| `started_at` | TIMESTAMP | NOT NULL | Session start |
| `ended_at` | TIMESTAMP | NULLABLE | Session end |
| `duration` | INTEGER | DEFAULT 0 | Seconds played |
| `ip_address` | VARCHAR(45) | NULLABLE | For analytics |

**Indexes:**
- `idx_playhistory_user_id` on `user_id`
- `idx_playhistory_game_id` on `game_id`
- `idx_playhistory_started_at` on `started_at`

---

### 9. Favourites

User's favourite games.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `user_id` | UUID | FK → Users, PK | User |
| `game_id` | UUID | FK → Games, PK | Game |
| `created_at` | TIMESTAMP | NOT NULL | When favourited |

**Indexes:**
- Composite PK on (`user_id`, `game_id`)
- `idx_favourites_game_id` on `game_id`

---

### 10. UserPreferences

User settings and preferences.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `user_id` | UUID | FK → Users, PK | User |
| `theme` | VARCHAR(50) | DEFAULT 'crt-glow' | Selected theme |
| `enable_video_bg` | BOOLEAN | DEFAULT true | Video backgrounds |
| `enable_particles` | BOOLEAN | DEFAULT true | Particle effects |
| `enable_sound` | BOOLEAN | DEFAULT false | Ambient sound |
| `enable_scanlines` | BOOLEAN | DEFAULT false | CRT effect |
| `volume` | INTEGER | DEFAULT 50 | Sound volume (0-100) |
| `show_fps` | BOOLEAN | DEFAULT false | Show FPS counter |
| `updated_at` | TIMESTAMP | NOT NULL | Last update |

---

### 11. VerificationCodes

Temporary codes for SMS/email verification.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PK | Unique identifier |
| `type` | ENUM | NOT NULL | SMS, EMAIL, PARENT |
| `target` | VARCHAR(255) | NOT NULL | Phone/email |
| `code` | VARCHAR(10) | NOT NULL | The code |
| `user_id` | UUID | FK → Users, NULLABLE | Associated user |
| `attempts` | INTEGER | DEFAULT 0 | Failed attempts |
| `expires_at` | TIMESTAMP | NOT NULL | Expiration |
| `verified_at` | TIMESTAMP | NULLABLE | When verified |
| `created_at` | TIMESTAMP | NOT NULL | Creation time |

**Indexes:**
- `idx_verification_target` on `target`
- `idx_verification_expires_at` on `expires_at`

---

## Queries

### Common Queries

**Get games for browse page:**
```sql
SELECT g.*, p.name as platform_name, p.short_name
FROM games g
JOIN platforms p ON g.platform_id = p.id
WHERE g.is_active = true
  AND g.age_rating = 'ALL'  -- or include TEEN_13 for verified users
ORDER BY g.created_at DESC
LIMIT 20 OFFSET 0;
```

**Get games by platform:**
```sql
SELECT g.*, array_agg(gen.name) as genres
FROM games g
JOIN platforms p ON g.platform_id = p.id
LEFT JOIN game_genres gg ON g.id = gg.game_id
LEFT JOIN genres gen ON gg.genre_id = gen.id
WHERE p.slug = 'nes'
  AND g.is_active = true
GROUP BY g.id
ORDER BY g.title;
```

**Get user's save states:**
```sql
SELECT ss.*, g.title, g.cover_image, p.short_name
FROM save_states ss
JOIN games g ON ss.game_id = g.id
JOIN platforms p ON g.platform_id = p.id
WHERE ss.user_id = :user_id
ORDER BY ss.updated_at DESC;
```

**Get user's recently played:**
```sql
SELECT DISTINCT ON (g.id)
  g.*, p.short_name, ph.started_at as last_played
FROM play_history ph
JOIN games g ON ph.game_id = g.id
JOIN platforms p ON g.platform_id = p.id
WHERE ph.user_id = :user_id
ORDER BY g.id, ph.started_at DESC
LIMIT 10;
```

**Get featured games:**
```sql
SELECT g.*, p.short_name
FROM games g
JOIN platforms p ON g.platform_id = p.id
WHERE g.is_featured = true
  AND g.is_active = true
ORDER BY g.play_count DESC;
```

**Search games:**
```sql
SELECT g.*, p.short_name,
  ts_rank(to_tsvector(g.title || ' ' || COALESCE(g.description, '')),
          plainto_tsquery(:query)) as rank
FROM games g
JOIN platforms p ON g.platform_id = p.id
WHERE g.is_active = true
  AND to_tsvector(g.title || ' ' || COALESCE(g.description, ''))
      @@ plainto_tsquery(:query)
ORDER BY rank DESC
LIMIT 20;
```

---

## Statistics Views

**Platform game counts:**
```sql
CREATE VIEW platform_stats AS
SELECT
  p.id,
  p.slug,
  p.name,
  COUNT(g.id) as game_count,
  SUM(g.play_count) as total_plays
FROM platforms p
LEFT JOIN games g ON p.id = g.platform_id AND g.is_active = true
GROUP BY p.id;
```

**Popular games:**
```sql
CREATE VIEW popular_games AS
SELECT
  g.*,
  p.short_name as platform,
  COUNT(DISTINCT ph.user_id) as unique_players,
  COUNT(ph.id) as total_sessions
FROM games g
JOIN platforms p ON g.platform_id = p.id
LEFT JOIN play_history ph ON g.id = ph.game_id
WHERE g.is_active = true
GROUP BY g.id, p.short_name
ORDER BY total_sessions DESC;
```

---

## Notes

### Data Retention
- Play history: Keep indefinitely for analytics
- Sessions: Delete after expiry
- Verification codes: Delete after 24 hours

### Backups
- Daily full backup
- Continuous WAL archiving
- 30-day retention

### Performance Considerations
- Add read replicas if needed
- Consider Redis for session storage
- Implement connection pooling

---

*Last updated: December 2024*
