import AboutMeParticles from '../components/AboutMeParticles';
import React from 'react';

const skillsData = [
  {
    category: 'Software',
    icon: '💻',
    description: 'My creative arsenal: the digital tools I wield to bring ideas to life, from wireframes to polished visuals.',
    items: [
      'Figma',
      'Sketch',
      'Adobe Illustrator',
      'Photoshop',
      'Adobe XD',
    ],
  },
  {
    category: 'Technical',
    icon: '🛠️',
    description: 'The technical backbone of my workflow—prototyping, responsive design, and 3D assets for immersive experiences.',
    items: [
      'Wireframing',
      '3D Asset Creation',
      'Responsive Designs',
      'Using plugins',
      'Prototyping',
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🌟',
    description: 'What makes me, me: creativity, attention to detail, and an open mind for collaboration and growth.',
    items: [
      'Detail-Oriented',
      'Creative',
      'Open-minded',
    ],
  },
  {
    category: 'Languages',
    icon: '🌐',
    description: 'Bridging cultures and ideas—fluent in English and Mandarin for global collaboration.',
    items: [
      'English',
      'Mandarin',
    ],
  },
];

export default function Skills() {
  return (
    <section className="galaxy-skills-section">
      <AboutMeParticles numParticles={90} particleColors={["#fff","#7B61FF","#50E3C2","#FFD600","#4A90E2"]} />
      <div className="galaxy-skills-bg-glow"></div>
      <div className="galaxy-skills-content">
        <h2 className="galaxy-skills-title">
          <span role="img" aria-label="sparkles" className="emoji-animate">✨</span> My Skills Roadmap <span role="img" aria-label="rocket" className="emoji-animate">🚀</span>
        </h2>
        <div className="galaxy-roadmap">
          {skillsData.map((cat, i) => (
            <React.Fragment key={cat.category}>
              <div className="galaxy-roadmap-step" style={{animationDelay: `${i * 0.18 + 0.2}s`}}>
                <div className="galaxy-roadmap-icon-wrapper">
                  <span className="galaxy-roadmap-icon emoji-animate">{cat.icon}</span>
                </div>
                <div className="galaxy-roadmap-content">
                  <div className="galaxy-roadmap-category">{cat.category}</div>
                  <div className="galaxy-roadmap-desc">{cat.description}</div>
                  <ul className="galaxy-roadmap-list">
                    {cat.items.map((item) => (
                      <li key={item} className="galaxy-roadmap-item">
                        <span className="galaxy-skill-bullet">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < skillsData.length - 1 && (
                <div className="galaxy-roadmap-arrow-wrapper">
                  <svg className="galaxy-roadmap-arrow" width="36" height="60" viewBox="0 0 36 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="arrow-gradient" x1="0" y1="0" x2="36" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7B61FF" />
                        <stop offset="1" stopColor="#50E3C2" />
                      </linearGradient>
                    </defs>
                    <path d="M18 0 C18 20, 18 40, 18 50" stroke="url(#arrow-gradient)" strokeWidth="4" fill="none" />
                    <polygon points="18,60 12,48 24,48" fill="#50E3C2" className="galaxy-roadmap-arrowhead" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        .galaxy-skills-section {
          min-height: 100vh;
          background: linear-gradient(120deg, #18182a 60%, #2a1850 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 120px 0 60px 0;
          position: relative;
          overflow: hidden;
        }
        .galaxy-skills-bg-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 60% 10%, #7B61FF55 0%, #18182a 80%);
          z-index: 0;
          pointer-events: none;
          filter: blur(32px) brightness(1.2);
        }
        .galaxy-skills-content {
          z-index: 2;
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 18px;
        }
        .galaxy-skills-title {
          font-size: 3.1rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 2.2rem;
          letter-spacing: 1.5px;
          color: #fff;
          text-shadow: 0 2px 24px #7B61FF44, 0 1px 2px #000a;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7em;
        }
        .galaxy-roadmap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3.5rem;
          margin: 0 auto;
          position: relative;
        }
        .galaxy-roadmap-step {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          width: 100%;
          max-width: 700px;
          background: rgba(30, 30, 50, 0.95);
          border-radius: 22px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22, 0 0 32px 2px #fff2 inset;
          padding: 2.1rem 2.2rem 1.5rem 2.2rem;
          border: 1.5px solid #7B61FF44;
          backdrop-filter: blur(8px);
          transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
          animation: fadeInUp 0.8s cubic-bezier(.4,2,.6,1) both;
          position: relative;
        }
        .galaxy-roadmap-step:hover {
          transform: translateY(-8px) scale(1.03) rotate(-1deg);
          box-shadow: 0 0 64px #50E3C2cc, 0 0 0 8px #7B61FFcc;
          border-color: #50E3C2;
          background: rgba(80, 180, 255, 0.13);
        }
        .galaxy-roadmap-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2.2rem;
          position: relative;
        }
        .galaxy-roadmap-icon {
          font-size: 2.7rem;
          margin-bottom: 0.7rem;
          filter: drop-shadow(0 0 12px #7B61FF88);
          transition: transform 0.3s;
        }
        .galaxy-roadmap-step:hover .galaxy-roadmap-icon {
          transform: scale(1.18) rotate(-8deg);
        }
        .galaxy-roadmap-connector {
          width: 6px;
          height: 70px;
          background: linear-gradient(180deg, #7B61FF 0%, #50E3C2 100%);
          border-radius: 3px;
          margin: 0 auto;
          box-shadow: 0 0 16px #7B61FF88;
          opacity: 0.7;
        }
        .galaxy-roadmap-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .galaxy-roadmap-category {
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.2px;
        }
        .galaxy-roadmap-desc {
          font-size: 1.08rem;
          color: #bbaaff;
          margin-bottom: 1.1rem;
          font-weight: 400;
        }
        .galaxy-roadmap-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .galaxy-roadmap-item {
          font-size: 1.08rem;
          color: #e0e0e0;
          margin-bottom: 0.5rem;
          font-weight: 400;
          display: flex;
          align-items: center;
          letter-spacing: 0.1px;
        }
        .galaxy-skill-bullet {
          color: #FFD600;
          font-size: 1.2em;
          margin-right: 0.5em;
          filter: drop-shadow(0 0 6px #FFD60088);
        }
        .emoji-animate {
          display: inline-block;
          animation: emojiFloat 2.2s infinite alternate cubic-bezier(.4,2,.6,1);
        }
        @keyframes emojiFloat {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-8px) scale(1.12); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(32px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .galaxy-roadmap-arrow-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          margin: -18px 0 0 0;
          z-index: 2;
        }
        .galaxy-roadmap-arrow {
          animation: arrowFloat 1.8s infinite alternate cubic-bezier(.4,2,.6,1);
          filter: drop-shadow(0 0 8px #50E3C2cc);
        }
        .galaxy-roadmap-arrowhead {
          filter: drop-shadow(0 0 8px #50E3C2cc);
        }
        @keyframes arrowFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }
        .galaxy-roadmap-img {
          width: 72px;
          height: 72px;
          object-fit: contain;
          border-radius: 16px;
          margin: 12px 0 0 0;
          box-shadow: 0 0 24px #7B61FF88, 0 0 0 4px #fff4;
          background: rgba(123,97,255,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .galaxy-roadmap-step:hover .galaxy-roadmap-img {
          transform: scale(1.08) rotate(-4deg);
          box-shadow: 0 0 48px #50E3C2cc, 0 0 0 8px #7B61FFcc;
        }
        @media (max-width: 900px) {
          .galaxy-skills-title {
            font-size: 2rem;
          }
          .galaxy-roadmap-step {
            flex-direction: column;
            align-items: center;
            padding: 1.2rem 0.7rem 1.2rem 0.7rem;
            max-width: 98vw;
          }
          .galaxy-roadmap-icon-wrapper {
            margin-right: 0;
            margin-bottom: 1.2rem;
          }
          .galaxy-roadmap-connector {
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
} 