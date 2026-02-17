"use client";

import { useState } from "react";

const COLORS = [
  { fill: "#E58411", label: "Orange" },
  { fill: "#00D6C9", label: "Teal" },
  { fill: "#7C7C7C", label: "Gray" },
] as const;

interface TooltipButtonProps {
  /** Which color is initially selected (0=orange, 1=teal, 2=gray) */
  checkedIndex?: number;
  /** Additional classes for positioning */
  className?: string;
  /** Size of the pointer dot: "sm" (32px) or "lg" (37px) */
  size?: "sm" | "lg";
}

/**
 * Interactive color picker tooltip — Figma nodes 1:22/1:25/1:28 + 1:38
 *
 * Collapsed: glass dot (pointer circle)
 * Expanded (hover/click): glass pill with 3 color circles + checkmark
 */
export function TooltipButton({
  checkedIndex = 0,
  className,
  size = "sm",
}: TooltipButtonProps) {
  const [selected, setSelected] = useState(checkedIndex);
  const [isOpen, setIsOpen] = useState(false);

  const dotSize = size === "lg" ? 37 : 32;
  const innerDot = size === "lg" ? 11 : 9;

  return (
    <div
      className={`pointer-events-auto absolute hidden xl:block ${className ?? ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Expanded pill — appears above the dot on hover */}
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 transition-all duration-300 origin-bottom ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-90 opacity-0"
        }`}
      >
        {/* Glass pill container with backdrop-blur */}
        <div className="relative">
          {/* Glass background shape — HTML div for real backdrop-blur */}
          <div
            className="rounded-3xl border border-white/60 bg-white/20 backdrop-blur-xs"
            style={{ width: 112, height: 48 }}
          />

          {/* 3 color circles inside the pill */}
          <div className="absolute inset-0 flex items-center justify-center gap-2">
            {COLORS.map((color, i) => (
              <button
                key={color.label}
                type="button"
                aria-label={`Select ${color.label}`}
                className="relative h-6 w-6 rounded-full border-2 border-white"
                style={{ backgroundColor: color.fill }}
                onClick={() => setSelected(i)}
              >
                {/* Checkmark on selected */}
                {selected === i && (
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <path
                      d="M10.6 0.6a1 1 0 0 1 1.4 1.4l-6.3 7a1 1 0 0 1-1.4 0L0.6 5.3a1 1 0 1 1 1.4-1.4L4.9 6.8l5.7-6.2Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Arrow pointing down to the dot */}
          <div className="mx-auto h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white/30 -mb-3" />
        </div>
      </div>

      {/* Pointer dot — always visible */}
      <div
        className="flex cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/20 backdrop-blur-xs"
        style={{ width: dotSize, height: dotSize }}
        onClick={() => setIsOpen((o) => !o)}
      >
        <div
          className="rounded-full bg-white"
          style={{ width: innerDot, height: innerDot }}
        />
      </div>
    </div>
  );
}
