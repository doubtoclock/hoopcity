"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Disable on touch devices
    if (typeof window === 'undefined') return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    const loop = () => {
      cx += (mx - cx) * 0.16;
      cy += (my - cy) * 0.16;

      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';

      animationFrameId = requestAnimationFrame(loop);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .node, .culture-card, .team, .partner-item, [role="button"]')) {
        cursor.classList.add('big');
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If we move out of a valid target and we are not entering another valid target
      if (target.closest('button, a, .node, .culture-card, .team, .partner-item, [role="button"]')) {
        const relatedTarget = e.relatedTarget as HTMLElement;
        if (!relatedTarget || !relatedTarget.closest('button, a, .node, .culture-card, .team, .partner-item, [role="button"]')) {
          cursor.classList.remove('big');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('dragover', onMouseMove as any);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('dragover', onMouseMove as any);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} className="cursor" />
      <div id="cursorDot" ref={dotRef} className="cursor-dot" />
    </>
  );
}
