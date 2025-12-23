import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Games | CosyArcade",
  description: "Explore our curated collection of free retro games. Homebrew, freeware, and open source classics playable in your browser.",
};

// Placeholder game data for the shell
const featuredGames = [
  { slug: "micro-mages", title: "Micro Mages", platform: "NES", year: 2019, genre: "Platformer" },
  { slug: "tanglewood", title: "Tanglewood", platform: "Genesis", year: 2018, genre: "Puzzle" },
  { slug: "inheritors-of-the-oubliette", title: "Inheritors of the Oubliette", platform: "GBA", year: 2023, genre: "RPG" },
  { slug: "super-tilt-bro", title: "Super Tilt Bro", platform: "NES", year: 2023, genre: "Fighting" },
  { slug: "flea", title: "Flea!", platform: "NES", year: 2020, genre: "Platformer" },
  { slug: "xump", title: "Xump", platform: "Genesis", year: 2019, genre: "Puzzle" },
];

const genres = [
  { slug: "platformer", name: "Platformer", icon: "🏃", count: 12 },
  { slug: "puzzle", name: "Puzzle", icon: "🧩", count: 8 },
  { slug: "action", name: "Action", icon: "⚔️", count: 10 },
  { slug: "rpg", name: "RPG", icon: "🎭", count: 6 },
  { slug: "shooter", name: "Shooter", icon: "🔫", count: 5 },
  { slug: "arcade", name: "Arcade", icon: "🕹️", count: 9 },
];

export default function GamesPage() {
  return (
    <main className="page-container">
      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">Browse Games</h1>
        <p className="page-subtitle">
          Explore our curated collection of legally-free retro games
        </p>
      </section>

      {/* Search & Filters */}
      <section className="search-section">
        <div className="search-bar">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search games..."
            className="search-input"
            disabled
          />
        </div>
        <div className="filter-chips">
          <button className="chip chip-active">All Games</button>
          <button className="chip">All Ages</button>
          <button className="chip">Teen (13+)</button>
        </div>
      </section>

      {/* Genres */}
      <section className="section">
        <h2 className="section-title">Browse by Genre</h2>
        <div className="genre-grid">
          {genres.map((genre) => (
            <div key={genre.slug} className="genre-card">
              <span className="genre-icon">{genre.icon}</span>
              <span className="genre-name">{genre.name}</span>
              <span className="genre-count">{genre.count} games</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="section">
        <h2 className="section-title">Featured Games</h2>
        <div className="games-grid">
          {featuredGames.map((game) => (
            <div key={game.slug} className="game-card">
              <div className="game-cover">
                <div className="game-cover-placeholder">
                  🎮
                </div>
              </div>
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                <div className="game-meta">
                  <span className="game-platform">{game.platform}</span>
                  <span className="game-year">{game.year}</span>
                </div>
                <span className="game-genre">{game.genre}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="notice-section">
        <div className="notice">
          <span className="notice-icon">🚧</span>
          <div className="notice-content">
            <h3>More Games Coming Soon</h3>
            <p>We&apos;re curating our initial collection of 50 games. Check back soon!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
