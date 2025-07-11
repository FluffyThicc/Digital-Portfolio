import React from 'react';
import { FaStar, FaUsers, FaMagic, FaCommentDots } from 'react-icons/fa';
import AboutMeParticles from './AboutMeParticles';
import youtubeThumbnail from '../assets/img/youtube-thumbnail-example.png';

const aboutCards = [
  {
    icon: <FaCommentDots size={28} style={{ color: '#FFD600' }} />,
    title: 'Feedback Welcome',
    text: 'Feedback fuels my improvement',
    extra: (
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <span role="img" aria-label="sad">😞</span>
        <span role="img" aria-label="neutral">😐</span>
        <span role="img" aria-label="ok">🙂</span>
        <span role="img" aria-label="good">😊</span>
        <span role="img" aria-label="great">😁</span>
      </div>
    ),
  },
  {
    icon: <FaUsers size={28} style={{ color: '#FFD600' }} />,
    title: 'Growth Through Collaboration',
    text: 'I love working with others and see feedback as fuel for growth. I believe in learning from every interaction to become a better designer.',
    extra: <span style={{ fontWeight: 600, color: '#FFD600', fontSize: 18 }}>🤝</span>,
  },
  {
    icon: <FaStar size={28} style={{ color: '#FFD600' }} />,
    title: 'Versatile in Solo & Team Projects',
    text: 'From mobile to web, I bring ideas to life with responsive, user-focused designs—comfortable working independently or in collaborative teams.',
    extra: <span style={{ fontWeight: 600, color: '#FFD600', fontSize: 18 }}>✨</span>,
  },
];

export default function AboutMe() {
  return (
    <section className="aboutme-space-section">
      <AboutMeParticles numParticles={44} />
      {/* Glows for space effect */}
      <div className="aboutme-glow aboutme-glow-purple" />
      <div className="aboutme-glow aboutme-glow-blue" />
      <div className="aboutme-glow aboutme-glow-white" />
      <div className="aboutme-space-bg" />
      <div className="aboutme-content">
        <h2 className="aboutme-title refined-gradient-title" style={{ color: '#fff', background: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}>About Me.</h2>
        <div className="aboutme-subtitle refined-subtitle" style={{ color: '#fff' }}>UX/UI Designer & IT Graduate from <span style={{ color: '#fff', fontWeight: 700 }}>Nanyang Polytechnic</span></div>
        <p className="aboutme-desc refined-desc">
          I design clean, responsive web and mobile interfaces using tools like Figma, Sketch, and Adobe XD – with experience in both solo and team-based projects.
        </p>
        <div className="aboutme-cards-row refined-cards-row">
          {aboutCards.map((card, idx) => (
            <div className="aboutme-card refined-card" key={idx}>
              <div className="aboutme-card-icon refined-card-icon">{card.icon}</div>
              <div className="aboutme-card-title refined-card-title">{card.title}</div>
              <div className="aboutme-card-text refined-card-text">{card.text}</div>
              {card.extra && <div>{card.extra}</div>}
            </div>
          ))}
        </div>
        <div className="aboutme-divider"><div className="aboutme-nebula-divider" /></div>
        <div className="aboutme-bottom-row refined-bottom-row">
          <div className="aboutme-card aboutme-large-card refined-card refined-large-card refined-large-card-full">
            <div className="aboutme-card-title refined-card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaMagic style={{ color: '#7B61FF' }} /> Designing, Even Before UX
            </div>
            <div className="aboutme-card-text refined-card-text">
              Before my UX journey, I worked on video editing and thumbnail design for long-form YouTube videos—sharpening my eye for visual storytelling and user attention, skills that naturally enhance my UX work today.
            </div>
            <div className="aboutme-thumbnail-img-wrapper">
              <img src={youtubeThumbnail} alt="YouTube Thumbnail Example" className="aboutme-thumbnail-img refined-thumbnail-img" />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .aboutme-space-section {
          position: relative;
          padding: 100px 0 60px 0;
          background: transparent !important;
          overflow: hidden;
        }
        .aboutme-content {
          position: relative;
          z-index: 1;
          max-width: 980px;
          margin: 0 auto;
          color: #fff;
          padding: 0 18px;
        }
        .refined-gradient-title {
          font-size: 3.2rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 1.2rem;
          letter-spacing: 1.5px;
          color: #fff;
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
          text-shadow: 0 2px 24px #7B61FF44, 0 1px 2px #000a;
        }
        .refined-subtitle {
          text-align: center;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: #fff;
          font-weight: 500;
        }
        .refined-desc {
          text-align: center;
          font-size: 1.13rem;
          margin-bottom: 3.2rem;
          color: #e0e0e0;
          font-weight: 300;
        }
        .refined-cards-row {
          display: flex;
          gap: 2.2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .refined-card {
          background: rgba(30, 30, 50, 0.68);
          border-radius: 22px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22, 0 0 32px 2px #fff2 inset;
          padding: 2.1rem 1.5rem 1.5rem 1.5rem;
          min-width: 240px;
          max-width: 320px;
          flex: 1 1 260px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1.2rem;
          position: relative;
          border: 1.5px solid #7B61FF44;
          backdrop-filter: blur(6px);
        }
        .refined-card-icon {
          font-size: 2.2rem;
          margin-bottom: 0.8rem;
          filter: drop-shadow(0 0 8px #7B61FF88);
        }
        .refined-card-title {
          font-weight: 700;
          font-size: 1.18rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.2px;
        }
        .refined-card-text {
          font-size: 1.04rem;
          color: #e0e0e0;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }
        .refined-large-card {
          max-width: 540px;
          padding: 2.3rem 1.7rem 1.7rem 1.7rem;
        }
        .aboutme-divider {
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 2.5rem 0 2.5rem 0;
        }
        .aboutme-nebula-divider {
          width: 80%;
          height: 6px;
          border-radius: 6px;
          background: linear-gradient(90deg, #7B61FF 0%, #fff 50%, #7B61FF 100%);
          box-shadow: 0 0 32px 8px #7B61FF55, 0 0 12px 2px #fff8;
          opacity: 0.7;
        }
        .aboutme-bottom-row {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
        }
        .aboutme-large-card {
          min-width: 320px;
          max-width: 520px;
          width: 100%;
          background: linear-gradient(120deg, #232046 60%, #181028 100%);
          border-radius: 22px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22, 0 0 32px 2px #fff2 inset;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          border: 1.5px solid #7B61FF44;
          backdrop-filter: blur(6px);
        }
        .aboutme-thumbnail-img {
          width: 100%;
          max-width: 320px;
          border-radius: 12px;
          box-shadow: 0 4px 32px #000a;
        }
        .refined-bottom-row {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
          width: 100%;
        }
        .refined-large-card-full {
          width: 100%;
          max-width: 900px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .aboutme-thumbnail-img-wrapper {
          width: 100%;
          margin-top: 32px;
          margin-bottom: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .refined-thumbnail-img {
          width: 100%;
          max-width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 4px 32px #000a;
        }
        @media (max-width: 900px) {
          .refined-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .aboutme-bottom-row {
            flex-direction: column;
            align-items: center;
          }
          .aboutme-divider {
            margin: 2rem 0 2rem 0;
          }
          .refined-large-card-full {
            max-width: 100%;
          }
          .refined-thumbnail-img {
            height: 200px;
          }
        }
        @media (max-width: 600px) {
          .aboutme-content {
            padding: 0 4px;
          }
          .refined-gradient-title {
            font-size: 2.1rem;
          }
          .refined-card {
            padding: 1.3rem 0.7rem 1rem 0.7rem;
          }
          .aboutme-large-card {
            padding: 1.3rem 0.7rem 1rem 0.7rem;
          }
          .refined-large-card-full {
            padding: 1.1rem 0.2rem 0.7rem 0.2rem;
          }
          .refined-thumbnail-img {
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
} 