"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Final numeric value to count up to. */
  value: number;
  /** Optional suffix appended after the number (e.g. "+", "%"). */
  suffix?: string;
  /** Optional prefix prepended before the number. */
  prefix?: string;
  /** Animation duration in milliseconds. */
  duration?: number;
  /** Number of decimals to display. */
  decimals?: number;
  /** Extra className for the wrapping span. */
  className?: string;
  /** Restart the animation each time the element re-enters the viewport. */
  restartOnView?: boolean;
};

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  decimals = 0,
  className,
  restartOnView = true,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const animate = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const from = 0;
      const to = value;

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(from + (to - from) * eased);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else if (restartOnView) {
          setDisplay(0);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, restartOnView]);

  const formatted = display.toLocaleString("es-NI", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
