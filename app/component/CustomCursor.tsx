"use client";

import { useEffect, useRef } from "react";

/**
 * CustomCursor
 * - dot: instant follow
 * - ring: smooth trailing (lag) outline with transparent fill
 * - hides on touch devices and when prefers-reduced-motion
 *
 * Optional: example local uploaded image path (used only as comment/demo)
 * const exampleUploadedImage = "/mnt/data/44485c38-9229-44f4-ab19-396e8c2c9938.png";
 */

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const lastMoveAt = useRef<number>(Date.now());

  // Settings
  const ringDelay = 0.12; // interpolation factor (0 - instant, 1 - no move). Smaller -> more smooth lag
  const idleTimeout = 2200; // ms to fade cursor when idle

  useEffect(() => {
    // Feature detect: touch devices -> don't mount cursor
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        (navigator as any).maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0);

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = mediaQuery.matches;

    if (isTouch || reducedMotion) return;

    const dot = dotRef.current!;
    const ringEl = ringRef.current!;

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    // Mouse move updates
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMoveAt.current = Date.now();

      // place dot instantly using translate3d (GPU)
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        dot.style.opacity = "1";
      }
    };

    // Click animation (tiny scale)
    const onDown = () => {
      if (dot) dot.style.transform += " scale(0.85)";
      if (ringEl) ringEl.style.transform += " scale(0.92)";
      setTimeout(() => {
        // remove scale additions by resetting transform to current coords
        if (dot)
          dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
        if (ringEl)
          ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }, 120);
    };

    const onEnterInteractive = () => {
      // enlarge ring when hovering interactive elements (links, buttons, inputs)
      if (ringEl) {
        ringEl.style.width = "46px";
        ringEl.style.height = "46px";
        ringEl.style.marginLeft = "-23px";
        ringEl.style.marginTop = "-23px";
        ringEl.style.borderWidth = "1.5px";
        ringEl.style.opacity = "0.95";
      }
    };

    const onLeaveInteractive = () => {
      if (ringEl) {
        ringEl.style.width = "36px";
        ringEl.style.height = "36px";
        ringEl.style.marginLeft = "-18px";
        ringEl.style.marginTop = "-18px";
        ringEl.style.borderWidth = "1px";
      }
    };

    // delegate pointerover/out for interactive elements
    const onPointerOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      const interactive = t.closest("a, button, input, textarea, [data-cursor-hover]");
      if (interactive) onEnterInteractive();
    };
    const onPointerOut = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      const interactive = (t as HTMLElement).closest("a, button, input, textarea, [data-cursor-hover]");
      if (!interactive) onLeaveInteractive();
    };

    // RAF loop to interpolate ring
    const loop = () => {
      // linear interpolation towards mouse position
      ring.current.x += (mouse.current.x - ring.current.x) * ringDelay;
      ring.current.y += (mouse.current.y - ring.current.y) * ringDelay;

      if (ringEl) {
        ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      // fade when idle
      const elapsed = Date.now() - lastMoveAt.current;
      if (elapsed > idleTimeout) {
        if (dot) dot.style.opacity = "0";
        if (ringEl) ringEl.style.opacity = "0";
      } else {
        if (dot) dot.style.opacity = "1";
        if (ringEl) ringEl.style.opacity = "0.95";
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      // cleanup
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      // restore cursor
      document.documentElement.style.cursor = "";
    };
  }, []);

  // Render dot + ring using fixed positioned elements
  // We use pointer-events-none so the cursor doesn't block clicks.
  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#5044E5", // pinkish CTA color as dot
          transform: "translate3d(-100px, -100px, 0)",
          zIndex: 9999,
          transition: "opacity 180ms linear, transform 0ms",
          willChange: "transform, opacity",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(80,68,229,0.95)",
          background: "transparent",
          transform: "translate3d(-100px, -100px, 0)",
          marginLeft: -18,
          marginTop: -18,
          zIndex: 9998,
          opacity: 0.95,
          transition: "width 160ms ease, height 160ms ease, opacity 180ms linear, border-width 120ms ease",
          willChange: "transform, width, height, opacity",
        }}
      />

      {/* Inline CSS to hide on touch and support reduced motion (can move to globals.css) */}
      <style>{`
        @media (hover: none), (pointer: coarse) {
          /* Hide custom cursor on touch devices */
          .custom-cursor, div[ref] { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          /* Respect reduced motion */
          div[ref] { display: none !important; }
        }
        /* hide default cursor for the whole app (can be limited to .app-root if you want) */
        body { cursor: none !important; }
      `}</style>
    </>
  );
}
