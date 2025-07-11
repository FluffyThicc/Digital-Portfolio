import React, { useRef, useEffect } from 'react';
import figmaLogo from '../assets/img/figma-logo.png';
import adobeXdLogo from '../assets/img/adobe-xd-logo.png';
import sketchLogo from '../assets/img/sketch-logo.png';

const techs = [
  {
    name: 'Adobe XD',
    img: adobeXdLogo,
    desc: 'Designing and prototyping UI/UX for web and mobile apps.'
  },
  {
    name: 'Figma',
    img: figmaLogo,
    desc: 'Collaborative tool for UI/UX design and prototyping in the browser.'
  },
  {
    name: 'Sketch',
    img: sketchLogo,
    desc: 'Mac-based tool for UI design, known for its plugins and vector editing.'
  },
];

// Star particles background
function StarParticles({ numStars = 60 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    // Generate stars
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.6,
      color: Math.random() > 0.5 ? 'rgba(255,255,255,0.85)' : 'rgba(123,97,255,0.7)',
      blur: Math.random() * 6 + 2
    }));
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let s of stars) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.blur;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.restore();
      }
    }
    draw();
    // No animation for now (static stars)
    window.addEventListener('resize', () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      draw();
    });
    return () => {
      window.removeEventListener('resize', draw);
    };
  }, [numStars]);
  return (
    <canvas
      ref={canvasRef}
      className="tech-stars-bg"
      style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}

// Add animated glow particles for CTA
function CtaGlowParticles({ numParticles = 10 }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    // Generate particles at left/right sides only
    particles.current = Array.from({ length: numParticles }, (_, i) => {
      // Place half on left, half on right
      const side = i < numParticles / 2 ? 'left' : 'right';
      const x = side === 'left'
        ? Math.random() * (width * 0.18) + width * 0.01
        : Math.random() * (width * 0.18) + width * 0.81;
      return {
        x,
        y: Math.random() * height * 0.85 + height * 0.08,
        r: Math.random() * 6 + 7, // 7-13px
        color: Math.random() > 0.5 ? 'rgba(170,120,255,0.75)' : 'rgba(255,255,255,0.7)',
        blur: Math.random() * 32 + 32, // 32-64px
        dx: (Math.random() - 0.5) * 0.18,
        dy: (Math.random() - 0.5) * 0.18
      };
    });
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.blur;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.restore();
        // Move
        p.x += p.dx;
        p.y += p.dy;
        // Bounce within side region
        if (p.x < 0) p.dx = Math.abs(p.dx);
        if (p.x > width) p.dx = -Math.abs(p.dx);
        if (p.y < 0 || p.y > height) p.dy *= -1;
        // Keep in side region
        if (p.x < width * 0.18 && p.dx < 0) p.dx *= -1;
        if (p.x > width * 0.82 && p.dx > 0) p.dx *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();
    // Resize
    function handleResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [numParticles]);
  return (
    <canvas
      ref={canvasRef}
      className="cta-glow-particles"
      style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}

export default function Technologies() {
  return (
    <section className="tech-section tech-cosmic-bg">
      <StarParticles numStars={70} />
      <h2 className="tech-title galaxy-gradient">Technologies</h2>
      <div className="tech-subtitle">
        I have experience with using the following technologies to craft fully interactive, responsive UX designs using these technologies, delivering standout user experiences.
      </div>
      <div className="tech-cards-row">
        {techs.map((t, i) => (
          <div className="tech-card glass-card" key={i}>
            <div className="tech-logo-wrap">
              <img src={t.img} alt={t.name + ' logo'} className="tech-logo" />
            </div>
            <div className="tech-label">{t.name}</div>
            <div className="tech-desc">{t.desc}</div>
          </div>
        ))}
      </div>
      <style>{`
        .tech-cosmic-bg {
          background: #181028;
          position: relative;
          overflow: visible;
        }
        .tech-stars-bg {
          pointer-events: none;
        }
        .tech-title {
          font-size: 2.7rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 0.7rem;
          letter-spacing: 1.2px;
          color: #fff;
          text-shadow: 0 2px 24px #7B61FF22, 0 1px 2px #000a;
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }
        .galaxy-gradient {
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
          color: #fff;
        }
        .tech-section.tech-cosmic-bg {
          padding-bottom: 80px;
        }
        .tech-subtitle {
          text-align: center;
          font-size: 1.13rem;
          margin-bottom: 2.7rem;
          color: #e0e0e0;
          font-weight: 400;
        }
        .tech-cards-row {
          display: flex;
          gap: 2.5rem;
          justify-content: center;
          align-items: stretch;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto 3.5rem auto;
        }
        .glass-card {
          background: rgba(30, 30, 50, 0.82);
          border-radius: 18px;
          box-shadow: 0 4px 32px #7B61FF22, 0 0 0 2px #7B61FF11, 0 0 32px 2px #fff1 inset;
          padding: 2.1rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1.5px solid #7B61FF22;
          backdrop-filter: blur(6px);
          min-width: 220px;
          max-width: 320px;
          flex: 1 1 300px;
          transition: box-shadow 0.3s;
        }
        .glass-card:hover {
          box-shadow: 0 8px 48px #7B61FF44, 0 0 0 2px #7B61FF33;
        }
        .tech-logo-wrap {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
        }
        .tech-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 8px #7B61FF55);
        }
        .tech-label {
          font-size: 1.18rem;
          color: #fff;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .tech-desc {
          font-size: 1.01rem;
          color: #e0e0e0;
          text-align: center;
        }
        @media (max-width: 900px) {
          .tech-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
          }
          .glass-card {
            min-width: 220px;
            max-width: 420px;
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .tech-title {
            font-size: 1.3rem;
          }
          .tech-cards-row {
            gap: 1.2rem;
          }
          .glass-card {
            padding: 1.1rem 0.5rem 0.7rem 0.5rem;
          }
          .tech-logo-wrap {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
} 