"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Theme = "crt-glow" | "afternoon-sunlight" | "lamp-lit-evening" | "rainy-day";

export interface ThemeConfig {
  id: Theme;
  name: string;
  icon: string;
  description: string;
}

export const themes: ThemeConfig[] = [
  {
    id: "crt-glow",
    name: "CRT Glow",
    icon: "🌙",
    description: "Late night gaming vibes",
  },
  {
    id: "afternoon-sunlight",
    name: "Afternoon Sunlight",
    icon: "☀️",
    description: "After school vibes",
  },
  {
    id: "lamp-lit-evening",
    name: "Lamp-lit Evening",
    icon: "💡",
    description: "Cosy living room",
  },
  {
    id: "rainy-day",
    name: "Rainy Day",
    icon: "🌧️",
    description: "Perfect gaming weather",
  },
];

interface PerformanceSettings {
  enableVideoBackground: boolean;
  enableParticles: boolean;
  enableAmbientSound: boolean;
  reducedMotion: boolean;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  performance: PerformanceSettings;
  setPerformance: (settings: Partial<PerformanceSettings>) => void;
  showPerformanceWarning: boolean;
  dismissPerformanceWarning: () => void;
  enableScanlines: boolean;
  setEnableScanlines: (enabled: boolean) => void;
}

const defaultPerformance: PerformanceSettings = {
  enableVideoBackground: true,
  enableParticles: true,
  enableAmbientSound: false,
  reducedMotion: false,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("crt-glow");
  const [performance, setPerformanceState] = useState<PerformanceSettings>(defaultPerformance);
  const [showPerformanceWarning, setShowPerformanceWarning] = useState(false);
  const [enableScanlines, setEnableScanlinesState] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [lowFpsCount, setLowFpsCount] = useState(0);

  // Load saved preferences on mount
  useEffect(() => {
    setMounted(true);

    // Load theme
    const savedTheme = localStorage.getItem("cosyarcade-theme") as Theme;
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setThemeState(savedTheme);
    }

    // Load performance settings
    const savedPerformance = localStorage.getItem("cosyarcade-performance");
    if (savedPerformance) {
      try {
        const parsed = JSON.parse(savedPerformance);
        setPerformanceState({ ...defaultPerformance, ...parsed });
      } catch {
        // Use defaults if parsing fails
      }
    }

    // Load scanlines preference
    const savedScanlines = localStorage.getItem("cosyarcade-scanlines");
    if (savedScanlines === "true") {
      setEnableScanlinesState(true);
    }

    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setPerformanceState(prev => ({ ...prev, reducedMotion: true }));
      }
    }

    // Check if user previously dismissed performance warning
    const dismissedWarning = localStorage.getItem("cosyarcade-perf-warning-dismissed");
    if (dismissedWarning === "true") {
      setShowPerformanceWarning(false);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("cosyarcade-theme", theme);
    }
  }, [theme, mounted]);

  // Performance monitoring
  useEffect(() => {
    if (!mounted || !performance.enableVideoBackground) return;

    let animationId: number;
    let currentFrameCount = 0;
    let currentLastTime = Date.now();

    const measureFps = () => {
      currentFrameCount++;
      const now = Date.now();

      // Check FPS every second
      if (now - currentLastTime >= 1000) {
        const fps = currentFrameCount;
        currentFrameCount = 0;
        currentLastTime = now;

        // If FPS is below 30, increment counter
        if (fps < 30) {
          setLowFpsCount(prev => {
            const newCount = prev + 1;
            // Show warning after 3 seconds of low FPS
            if (newCount >= 3 && !localStorage.getItem("cosyarcade-perf-warning-dismissed")) {
              setShowPerformanceWarning(true);
            }
            return newCount;
          });
        } else {
          setLowFpsCount(0);
        }
      }

      animationId = requestAnimationFrame(measureFps);
    };

    animationId = requestAnimationFrame(measureFps);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mounted, performance.enableVideoBackground]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const setPerformance = useCallback((settings: Partial<PerformanceSettings>) => {
    setPerformanceState(prev => {
      const newSettings = { ...prev, ...settings };
      localStorage.setItem("cosyarcade-performance", JSON.stringify(newSettings));
      return newSettings;
    });
  }, []);

  const dismissPerformanceWarning = useCallback(() => {
    setShowPerformanceWarning(false);
    localStorage.setItem("cosyarcade-perf-warning-dismissed", "true");
  }, []);

  const setEnableScanlines = useCallback((enabled: boolean) => {
    setEnableScanlinesState(enabled);
    localStorage.setItem("cosyarcade-scanlines", String(enabled));
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        performance,
        setPerformance,
        showPerformanceWarning,
        dismissPerformanceWarning,
        enableScanlines,
        setEnableScanlines,
      }}
    >
      {children}
      {enableScanlines && <div className="crt-scanlines" aria-hidden="true" />}
      {showPerformanceWarning && (
        <PerformanceWarningModal
          onOptimise={() => {
            setPerformance({ enableVideoBackground: false, enableParticles: false });
            dismissPerformanceWarning();
          }}
          onDismiss={dismissPerformanceWarning}
        />
      )}
    </ThemeContext.Provider>
  );
}

function PerformanceWarningModal({
  onOptimise,
  onDismiss,
}: {
  onOptimise: () => void;
  onDismiss: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onDismiss} />
      <div className="card relative z-10 max-w-md w-full text-center">
        <div className="text-4xl mb-4">🎮</div>
        <h2 className="text-xl font-bold mb-2">Performance Mode</h2>
        <p className="text-[var(--text-secondary)] mb-6">
          We noticed things are running slow. Want to disable video backgrounds for smoother performance?
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={onOptimise} className="btn btn-primary">
            Yes, optimise
          </button>
          <button onClick={onDismiss} className="btn btn-secondary">
            No, keep effects
          </button>
        </div>
      </div>
    </div>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values during SSR/prerendering
    return {
      theme: "crt-glow" as Theme,
      setTheme: () => {},
      performance: defaultPerformance,
      setPerformance: () => {},
      showPerformanceWarning: false,
      dismissPerformanceWarning: () => {},
      enableScanlines: false,
      setEnableScanlines: () => {},
    };
  }
  return context;
}
