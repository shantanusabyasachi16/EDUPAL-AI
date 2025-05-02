import type React from "react";
import { useRef, useEffect } from "react";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
  duration?: number;
}

export function ShineBorder({
  children,
  className = "",
  borderClassName = "",
  duration = 2000,
}: ShineBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      container.style.setProperty("--mouse-x", `${x * 100}%`);
      container.style.setProperty("--mouse-y", `${y * 100}%`);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (touch.clientX - left) / width;
        const y = (touch.clientY - top) / height;

        container.style.setProperty("--mouse-x", `${x * 100}%`);
        container.style.setProperty("--mouse-y", `${y * 100}%`);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group relative ${className}`}
      style={{ "--shine-duration": `${duration}ms` } as React.CSSProperties}
    >
      <div className={`absolute inset-0 rounded-xl ${borderClassName}`}>
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(
              800px circle at var(--mouse-x) var(--mouse-y),
              rgba(255,255,255,0.15),
              transparent 40%
            )`,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
