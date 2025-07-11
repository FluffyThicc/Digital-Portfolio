import React, { useRef, useEffect } from 'react';

const PARTICLE_COLORS = [
  'rgba(123, 97, 255, 0.7)', // purple
  'rgba(255, 255, 255, 0.8)', // white
  'rgba(123, 97, 255, 0.4)', // lighter purple
  'rgba(255, 255, 255, 0.5)', // soft white
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createParticle(width, height) {
  const radius = randomBetween(1.5, 4.5);
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-0.08, 0.08),
    vy: randomBetween(-0.04, 0.04),
    radius,
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    blur: randomBetween(8, 24),
  };
}

export default function AboutMeParticles({ numParticles = 38 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Create particles
    particlesRef.current = Array.from({ length: numParticles }, () => createParticle(width, height));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particlesRef.current) {
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.blur;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
        // Move
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    // Handle resize
    function handleResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = Array.from({ length: numParticles }, () => createParticle(width, height));
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [numParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
} 