import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  kind: 'agent' | 'model' | 'memory' | 'router';
  pulse: number;
}

interface Signal {
  sourceIdx: number;
  targetIdx: number;
  progress: number;
  speed: number;
}

export const ComputationalGraphCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Pause when off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(canvas);

    // Node generation
    const nodeCount = Math.min(38, Math.max(18, Math.floor(width / 35)));
    let nodes: Node[] = [];
    const signals: Signal[] = [];

    const initNodes = () => {
      nodes = [];
      const kinds: ('agent' | 'model' | 'memory' | 'router')[] = ['agent', 'model', 'memory', 'router'];
      for (let i = 0; i < nodeCount; i++) {
        const baseRadius = i < 6 ? 3.5 : 2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          kind: kinds[i % kinds.length],
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    initNodes();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Occasional signal propagation
    const maybeSpawnSignal = () => {
      if (signals.length < 5 && Math.random() < 0.03 && nodes.length > 2) {
        const sourceIdx = Math.floor(Math.random() * nodes.length);
        // Find nearest neighbor
        let nearestDist = Infinity;
        let targetIdx = -1;
        for (let j = 0; j < nodes.length; j++) {
          if (j === sourceIdx) continue;
          const dx = nodes[sourceIdx].x - nodes[j].x;
          const dy = nodes[sourceIdx].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160 && d < nearestDist) {
            nearestDist = d;
            targetIdx = j;
          }
        }
        if (targetIdx !== -1) {
          signals.push({
            sourceIdx,
            targetIdx,
            progress: 0,
            speed: 0.012 + Math.random() * 0.015
          });
        }
      }
    };

    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Connect edges
      const maxDist = 145;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(138, 168, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Update & render signals
      if (!prefersReducedMotion) {
        maybeSpawnSignal();
        for (let s = signals.length - 1; s >= 0; s--) {
          const sig = signals[s];
          sig.progress += sig.speed;
          if (sig.progress >= 1) {
            signals.splice(s, 1);
            continue;
          }
          const p1 = nodes[sig.sourceIdx];
          const p2 = nodes[sig.targetIdx];
          if (!p1 || !p2) {
            signals.splice(s, 1);
            continue;
          }
          const sx = p1.x + (p2.x - p1.x) * sig.progress;
          const sy = p1.y + (p2.y - p1.y) * sig.progress;

          ctx.beginPath();
          ctx.arc(sx, sy, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = '#8aa8ff';
          ctx.shadowColor = '#8aa8ff';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Render nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Mouse attraction
          const mdx = mouseX - node.x;
          const mdy = mouseY - node.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 120 && mdist > 0) {
            const force = (1 - mdist / 120) * 0.4;
            node.x += (mdx / mdist) * force;
            node.y += (mdy / mdist) * force;
          }

          node.pulse += 0.03;
        }

        const pulseScale = prefersReducedMotion ? 1 : 1 + Math.sin(node.pulse) * 0.2;
        const currentR = node.baseRadius * pulseScale;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2);

        if (node.kind === 'agent') {
          ctx.fillStyle = '#8aa8ff';
        } else if (node.kind === 'router') {
          ctx.fillStyle = '#f2f2f0';
        } else {
          ctx.fillStyle = 'rgba(138, 168, 255, 0.6)';
        }

        ctx.fill();

        // Subtle outer ring for primary agent nodes
        if (node.baseRadius > 3) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentR + 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(138, 168, 255, 0.15)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-65 ${className}`}
    />
  );
};
