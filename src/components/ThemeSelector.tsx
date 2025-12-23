"use client";

import { useTheme, themes, Theme } from "./ThemeProvider";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[var(--text-secondary)]">
        Ambient Theme
      </label>
      <div className="flex flex-wrap gap-2">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg transition-all
              ${theme === t.id
                ? "bg-[var(--accent-primary)] text-[var(--bg-primary)] glow"
                : "bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-colour)]"
              }
            `}
            title={t.description}
          >
            <span className="text-lg">{t.icon}</span>
            <span className="text-sm font-medium">{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function ThemeSelectorCompact() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`
            p-2 rounded-md transition-all text-lg
            ${theme === t.id
              ? "bg-[var(--accent-primary)]/20 ring-2 ring-[var(--accent-primary)]"
              : "hover:bg-[var(--bg-surface)]"
            }
          `}
          title={`${t.name} - ${t.description}`}
          aria-label={t.name}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
