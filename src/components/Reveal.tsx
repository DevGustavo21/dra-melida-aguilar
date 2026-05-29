"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  threshold?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      data-reveal={direction}
      data-in-view={inView ? "" : undefined}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
