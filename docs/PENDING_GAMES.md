# Pending Games - Developer Outreach Required

This document tracks games that are potentially free to distribute but require explicit permission from developers before we can host them on CosyArcade.

---

## Status Key

| Status | Meaning |
|--------|---------|
| PENDING | Not yet contacted |
| CONTACTED | Email/message sent, awaiting response |
| APPROVED | Permission granted, ready to add |
| DENIED | Permission denied, remove from list |
| NO_RESPONSE | No response after 30 days |

---

## 1. Tanglewood Demo (Sega Genesis)

| Field | Value |
|-------|-------|
| **Status** | PENDING |
| **Platform** | Sega Genesis / Mega Drive |
| **Developer** | Big Evil Corporation (Matt Phillips) |
| **Year** | 2018 |
| **Genre** | Puzzle Platformer |
| **Current Availability** | Demo ROM at MediaFire, source on GitHub |

### Why We Want It
- High-quality modern Genesis game
- Beautiful pixel art and atmospheric gameplay
- Demo showcases the full game well
- Would attract Genesis enthusiasts

### Legal Situation
- Full game is commercial (sold via Kickstarter, available on Steam)
- Demo ROM available but distribution terms unclear
- Source code on GitHub with note: "You may build and play a personal copy"
- Developer explicitly asks not to pirate the original game

### Action Required

**Contact Method**: Twitter/X or Email

**Developer Contact**:
- Twitter: [@BigEvilCorp](https://twitter.com/BigEvilCorp)
- Website: [bigevilcorporation.co.uk](https://bigevilcorporation.co.uk/)

**Draft Message**:
```
Hi Matt,

I'm building CosyArcade (cosyarcade.com), a curated website for legally-free
retro games playable in the browser. We only host games with explicit permission.

Tanglewood is stunning, and I'd love to feature the demo to introduce players
to your work. Would you grant permission to host the demo ROM on our site?
We'd include prominent links to purchase the full game.

We're fully committed to supporting indie developers - not undermining them.

Thanks for considering,
[Your name]
```

**If Approved**:
1. Download demo ROM from official source
2. Add to seed.ts with legalType: "DEMO"
3. Include purchase link in game description
4. Credit Big Evil Corporation prominently

---

## 2. Sam's Journey Demo (Commodore 64)

| Field | Value |
|-------|-------|
| **Status** | PENDING |
| **Platform** | Commodore 64 |
| **Developer** | Knights of Bytes |
| **Year** | 2017 |
| **Genre** | Platformer |
| **Current Availability** | Free demo + Seasons Special on official site |

### Why We Want It
- One of the best C64 games ever made
- Pushes the hardware to its limits
- Demo and free "Seasons Special" both available
- Would be a flagship C64 title

### Legal Situation
- Full game is commercial (sold via Protovision)
- "Sam's Journey Free Demo V1.0" released for free download
- "Sam's Journey Seasons Special" (Christmas level) also free
- Terms for third-party hosting unclear

### Action Required

**Contact Method**: Contact form or Email

**Developer Contact**:
- Website: [knightsofbytes.games](https://www.knightsofbytes.games/samsjourney/c64)
- Contact: Via website contact form

**Draft Message**:
```
Hello Knights of Bytes,

I'm developing CosyArcade, a curated platform for legally-free retro games
playable in web browsers. We only feature games with explicit developer permission.

Sam's Journey is an incredible achievement on the C64. Would you permit us to
host the free demo and/or Seasons Special on our platform? We'd prominently
feature links to purchase the full game via Protovision.

Our goal is to celebrate retro gaming while supporting the developers who
keep it alive.

Best regards,
[Your name]
```

**If Approved**:
1. Download demo from official source
2. Add to seed.ts with legalType: "DEMO"
3. Add Seasons Special as separate game entry if permitted
4. Include purchase links prominently

---

## 3. Planet X3 Open Source Edition (DOS)

| Field | Value |
|-------|-------|
| **Status** | PENDING |
| **Platform** | DOS |
| **Developer** | David Murray (The 8-Bit Guy) |
| **Year** | 2019 (OSE released later) |
| **Genre** | Real-Time Strategy |
| **Current Availability** | OSE on Internet Archive |

### Why We Want It
- Genuine DOS RTS developed for vintage hardware
- Created by well-known retro computing YouTuber
- Open Source Edition suggests free distribution intended
- Would add variety to our DOS lineup

### Legal Situation
- Original Planet X3 is commercial (sold by The 8-Bit Guy)
- An "Open Source Edition" (OSE) exists on Internet Archive
- OSE appears to have new video modes and modifications
- Exact license terms for OSE need verification

### Action Required

**Contact Method**: YouTube comment, Patreon, or Email

**Developer Contact**:
- YouTube: [The 8-Bit Guy](https://www.youtube.com/user/adaborneomern)
- Website: [the8bitguy.com](https://www.the8bitguy.com/)
- Patreon: Has active Patreon

**Draft Message**:
```
Hi David,

I'm building CosyArcade, a curated retro gaming website featuring only
legally-free games. I've seen the Planet X3 Open Source Edition on
Internet Archive and would love to include it.

Could you clarify the license terms for the OSE version? Is it freely
distributable for non-commercial purposes?

We'd credit you and link to your channel/store for the commercial version.

Thanks for all you do for the retro computing community!
[Your name]
```

**If Approved**:
1. Download OSE from Internet Archive
2. Add to seed.ts with legalType: "OPENSOURCE"
3. Note in description that commercial version has more features
4. Link to The 8-Bit Guy's store

---

## Tracking Log

| Date | Game | Action | Result |
|------|------|--------|--------|
| | | | |

*Update this log when contacting developers or receiving responses.*

---

## Additional Game Ideas (Research Needed)

These games may be free but need verification:

### Kid-Friendly Games (Priority)

These are particularly suitable for younger players:

| Game | Platform | Style | Developer | Status |
|------|----------|-------|-----------|--------|
| **Spacegulls** | NES | Cute bird platformer | Morphcat Games | Free ROM on itch.io, verify license |
| **FROM BELOW** | NES | Tetris-like puzzle | Matt Hughson | Free ROM on itch.io, verify license |
| **Gruniozerca 2** | NES | Arcade puzzle platformer | Unknown | Free on itch.io, verify license |
| **Böbl** | NES | Bubble maze game | Unknown | Research needed |
| **Rollie** | NES | Whimsical platformer | Unknown | Research needed |
| **Pineapple Kid** | Game Boy | Puzzle adventure | HZ83 | Free demo on Homebrew Hub |

**Note**: Morphcat Games (Spacegulls) also makes Micro Mages, which is commercial ($9.99). Always verify each game individually.

### Genesis/Mega Drive
- **Cave Story Genesis Port** - Original is freeware, port status unknown
- **Rick Dangerous Demo** - May have free demo available
- **Papi Commando** - Recent homebrew, verify distribution

### DOS
- **One Must Fall 2097** - May be freeware now
- **Stargunner** - Released as freeware by 3D Realms

### Commodore 64
- **Soulless** - RGCD release, verify if demo available free
- **Sydney Hunter** - Check for free versions

### Game Boy / GBC
- **Dangan** - Open source GB shooter
- **uCity** - Open source city builder
- **Pocket Bomberman Clone** - Various homebrew exist

### Atari 2600 (All Ages)
- **KIKI 2600 Games** - Free homebrew collection at kiki2600.com
- **Ninja Block** (2024) - Free on KIKI 2600
- **retrobrews collection** - Verified free games on GitHub

---

## Resources for Finding Free Games

| Platform | Resource |
|----------|----------|
| Genesis | [retrobrews/md-games](https://github.com/retrobrews/md-games) |
| Genesis | [itch.io Sega Genesis](https://itch.io/games/free/tag-sega-genesis) |
| Game Boy | [Homebrew Hub](https://hh.gbdev.io/) - 1500+ games playable in browser |
| Game Boy | [gbdev.io](https://gbdev.io/list.html) |
| NES | [itch.io NES Homebrew](https://itch.io/games/free/tag-nes-rom) |
| NES | [NESDev Homebrew](https://www.nesdev.org/wiki/Homebrew_games) |
| C64 | [CSDb Releases](https://csdb.dk/) |
| DOS | [DOS Games Archive](https://www.dosgamesarchive.com/category/freeware/) |
| Atari 2600 | [KIKI 2600](https://www.kiki2600.com/) |
| Atari 2600 | [retrobrews/atari2600-games](https://github.com/retrobrews/atari2600-games) |
| All | [Internet Archive](https://archive.org/) |

---

*Last updated: January 2025*
