import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import figmaLogo from '../assets/img/figma-logo.png';
import sketchLogo from '../assets/img/sketch-logo.png';
import adobeXdLogo from '../assets/img/adobe-xd-logo.png';

function StarParticles({ numStars = 70 }) {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Generate stars
    stars.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(255,255,255,0.8)' : 'rgba(170,120,255,0.6)',
      twinkle: Math.random() * Math.PI * 2
    }));
    
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = 0.5 + 0.5 * Math.sin(star.twinkle);
        ctx.fill();
        ctx.restore();
        star.twinkle += 0.02;
      }
      requestAnimationFrame(draw);
    }
    draw();
    
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
  }, [numStars]);
  
  return (
    <canvas
      ref={canvasRef}
      className="cta-stars-bg"
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

export default function ReadyCta() {
  const navigate = useNavigate();
  return (
    <section className="cta-section cta-cosmic-bg">
      <StarParticles numStars={70} />
      {/* Call to Action Footer */}
      <div className="tech-cta-footer cosmic-cta">
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}}>
          <CtaGlowParticles numParticles={10} />
        </div>
        <div className="cta-content">
          <div className="cta-title cta-glow-title">Ready To Make An Impact Together?</div>
          <div className="cta-subtitle">I'd love to bring value to your team.<br/>Let's connect and build something great, together.</div>
          <button
            className="cta-btn"
            onClick={() => navigate('/contact')}
          >
            Contact Me!
          </button>
          <div className="cta-icons-row">
            <img src={figmaLogo} alt="Figma" />
            <img src={adobeXdLogo} alt="Adobe XD" />
            <img src={sketchLogo} alt="Sketch" />
            <span className="cta-stars">★ ★ ★ ★ ★</span>
            <span className="cta-hours">300+ Hours of UX Experience</span>
          </div>
        </div>
      </div>
      <style>{`
        .cta-section.cta-cosmic-bg {
          background: #181028;
          position: relative;
          overflow: visible;
          padding: 80px 0;
        }
        .cta-stars-bg {
          pointer-events: none;
        }
        .tech-cta-footer.cosmic-cta {
          position: relative;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 2.5rem 1.5rem;
          max-width: 900px;
          border-radius: 32px;
          background: rgba(24, 16, 40, 0.98);
          box-shadow: 0 8px 48px #7B61FF22, 0 0 0 2px #7B61FF11;
          overflow: hidden;
        }
        .cta-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cta-title {
          font-size: 2.1rem;
          font-weight: 900;
          color: #fff;
          text-align: center;
          margin-bottom: 1.1rem;
          text-shadow: 0 2px 24px #7B61FF22, 0 1px 2px #000a;
        }
        .cta-subtitle {
          color: #e0e0e0;
          font-size: 1.13rem;
          text-align: center;
          margin-bottom: 2.2rem;
        }
        .cta-btn {
          display: inline-block;
          background: #fff;
          color: #181028;
          font-weight: 700;
          font-size: 1.15rem;
          padding: 0.95rem 2.2rem;
          border-radius: 32px;
          box-shadow: 0 2px 24px #7B61FF22, 0 1px 2px #fff8;
          text-decoration: none;
          margin-bottom: 1.7rem;
          transition: box-shadow 0.2s, background 0.2s, color 0.2s;
          border: none;
          cursor: pointer;
        }
        .cta-btn:hover {
          background: #fff;
          color: #7B61FF;
          box-shadow: 0 0 16px 4px #7B61FF88, 0 2px 24px #7B61FF44;
        }
        .cta-icons-row {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-top: 0.5rem;
        }
        .cta-icons-row img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px #7B61FF55);
        }
        .cta-stars {
          color: #FFD600;
          font-size: 1.2rem;
          margin-left: 1.2rem;
        }
        .cta-hours {
          color: #fff;
          font-size: 1.08rem;
          margin-left: 1.2rem;
        }
        .cta-glow-title {
          color: #fff;
          text-align: center;
          font-size: 2.1rem;
          font-weight: 900;
          margin-bottom: 1.1rem;
          text-shadow:
            0 0 16px #7B61FF,
            0 0 32px #fff,
            0 0 24px #7B61FF88,
            0 0 48px #fff2;
          animation: cta-glow-pulse 2.2s infinite alternate;
        }
        @keyframes cta-glow-pulse {
          0% {
            text-shadow:
              0 0 16px #7B61FF,
              0 0 32px #fff,
              0 0 24px #7B61FF88,
              0 0 48px #fff2;
          }
          100% {
            text-shadow:
              0 0 32px #fff,
              0 0 48px #7B61FF,
              0 0 48px #fff,
              0 0 64px #7B61FF;
          }
        }
        @media (max-width: 600px) {
          .tech-cta-footer.cosmic-cta {
            padding: 2rem 0.5rem 1.5rem 0.5rem;
          }
        }
      `}</style>
    </section>
  );
} 