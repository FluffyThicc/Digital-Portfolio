import React from 'react';
import oasisImg from '../assets/img/project-img1.png';
import savourImg from '../assets/img/project-img2.png';
import axifyImg from '../assets/img/project-img3.png';
import velvetOasisCover from '../assets/img/velvet-oasis-main-image.png';
import savourAppCover from '../assets/img/savour-main-image.png';
import savourNewImage from '../assets/img/savour-new-image.png';
import { FaStar, FaTrello, FaCheckCircle, FaRegLightbulb, FaRegClock, FaRegBell, FaRegListAlt } from 'react-icons/fa';

const kanbanIdeas = [
  { title: 'Create dark mode version', status: 'In Review...', icon: <FaRegLightbulb />, votes: 8 },
  { title: 'Enhance search bar functionality', status: 'Feature Request', icon: <FaRegLightbulb />, votes: 24 },
  { title: 'Drag-and-Drop File Organization', status: 'Feature Request', icon: <FaRegLightbulb />, votes: 53 },
];
const kanbanProgress = [
  { title: 'Mobile App Notifications', status: 'Feature Request', icon: <FaRegBell /> },
  { title: 'Navigation Bar', status: 'Feature Request', icon: <FaRegListAlt /> },
];

export default function UXExperience() {
  return (
    <section className="uxexp-section">
      {/* Spacey background: small stars and planets */}
      <div className="uxexp-space-bg">
        {/* Small stars */}
        <div className="uxexp-star uxexp-star1" />
        <div className="uxexp-star uxexp-star2" />
        <div className="uxexp-star uxexp-star3" />
        <div className="uxexp-star uxexp-star4" />
        <div className="uxexp-star uxexp-star5" />
        {/* Small planets */}
        <div className="uxexp-planet uxexp-planet1" />
        <div className="uxexp-planet uxexp-planet2" />
        <div className="uxexp-planet uxexp-planet3" />
      </div>
      <div className="uxexp-bg-glow uxexp-bg-glow1" />
      <div className="uxexp-bg-glow uxexp-bg-glow2" />
      <div className="uxexp-content">
        <h2 className="uxexp-title">UX <span>Design</span> <span className="uxexp-gradient">Experience</span></h2>
        <div className="uxexp-subtitle">
          Worked on solo & group projects, designing AI-driven startup apps and responsive web/mobile wireframes. Specializing in developing modern design websites that engage audiences.
        </div>
        <div className="uxexp-cards-row">
          <div className="uxexp-card uxexp-card-img">
            <div className="uxexp-card-header"><span className="uxexp-dot uxexp-dot-gold">●</span> Velvet Oasis Resort - Solo Project</div>
            <div className="uxexp-card-desc">Designed and delivered a fully interactive, user-friendly hotel website, tailored for families and couples seeking a luxurious, aesthetic getaway. 🏖️</div>
            <img src={velvetOasisCover} alt="Oasis Project" className="uxexp-card-img-main" />
          </div>
          <div className="uxexp-card uxexp-card-img">
            <div className="uxexp-card-header"><span className="uxexp-dot uxexp-dot-green">●</span> Savour App - Food Waste Sustainability App</div>
            <div className="uxexp-card-desc">A smart platform that reduces food waste by offering visually imperfect or near-expiry food at discounted prices 🥕🍃.</div>
            <img src={savourNewImage} alt="Savour Project" className="uxexp-card-img-main" />
          </div>
        </div>
        <div className="uxexp-cards-row">
          <div className="uxexp-card uxexp-card-img">
            <div className="uxexp-card-header"><span className="uxexp-dot uxexp-dot-pink">●</span> AXIFY – AI Marketplace Solution</div>
            <div className="uxexp-card-desc">Built for the SCCCI x NYP AI Innovation Challenge. AXIFY connects buyers & sellers through AI-powered translation, smart video calls, and automated bookings to simplify global trade.</div>
            <img src={axifyImg} alt="AXIFY Project" className="uxexp-card-img-main" />
          </div>
          <div className="uxexp-card uxexp-kanban">
            <div className="uxexp-card-header"><FaTrello style={{ color: '#7B61FF', marginRight: 8 }} /> Experienced with Kanban Boards</div>
            <div className="uxexp-card-desc">Skilled in using tools like Trello and Jira to visually manage UX workflows from user research, wireframing, to prototyping.</div>
            <div className="uxexp-kanban-board">
              <div className="uxexp-kanban-col">
                <div className="uxexp-kanban-title">Proposed Designs <FaRegClock /></div>
                {kanbanIdeas.map((item, i) => (
                  <div className="uxexp-kanban-card" key={i}>
                    <div className="uxexp-kanban-card-title">{item.icon} {item.title}</div>
                    <div className="uxexp-kanban-card-status">{item.status}</div>
                    <div className="uxexp-kanban-card-votes">★ {item.votes}</div>
                  </div>
                ))}
              </div>
              <div className="uxexp-kanban-col">
                <div className="uxexp-kanban-title">In Progress <FaCheckCircle /></div>
                {kanbanProgress.map((item, i) => (
                  <div className="uxexp-kanban-card uxexp-kanban-card-progress" key={i}>
                    <div className="uxexp-kanban-card-title">{item.icon} {item.title}</div>
                    <div className="uxexp-kanban-card-status">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .uxexp-section {
          position: relative;
          padding: 90px 0 60px 0;
          background: transparent;
          overflow: visible;
        }
        .uxexp-space-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .uxexp-star {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(1.5px);
        }
        .uxexp-star1 { top: 60px; left: 320px; width: 7px; height: 7px; }
        .uxexp-star2 { top: 120px; left: 180px; width: 4px; height: 4px; }
        .uxexp-star3 { top: 200px; left: 400px; width: 5px; height: 5px; }
        .uxexp-star4 { top: 80px; right: 120px; width: 6px; height: 6px; }
        .uxexp-star5 { bottom: 60px; left: 80px; width: 3px; height: 3px; }
        .uxexp-planet {
          position: absolute;
          border-radius: 50%;
          opacity: 0.45;
          filter: blur(8px);
        }
        .uxexp-planet1 {
          top: 120px; left: 60px; width: 38px; height: 38px;
          background: radial-gradient(circle at 60% 40%, #7B61FF 60%, #fff0 100%);
        }
        .uxexp-planet2 {
          bottom: 80px; right: 120px; width: 28px; height: 28px;
          background: radial-gradient(circle at 60% 40%, #61aaff 60%, #fff0 100%);
        }
        .uxexp-planet3 {
          top: 220px; right: 60px; width: 22px; height: 22px;
          background: radial-gradient(circle at 60% 40%, #FFD600 60%, #fff0 100%);
        }
        .uxexp-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          z-index: 0;
          pointer-events: none;
        }
        .uxexp-bg-glow1 {
          width: 420px; height: 320px;
          background: #7B61FF;
          top: 0%; left: 0%;
        }
        .uxexp-bg-glow2 {
          width: 320px; height: 220px;
          background: #61aaff;
          bottom: 0%; right: 0%;
        }
        .uxexp-content {
          position: relative;
          z-index: 1;
          max-width: 1600px;
          margin: 0 auto;
          color: #fff;
          padding: 0 2vw;
        }
        .uxexp-title {
          font-size: 2.7rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 0.7rem;
          letter-spacing: 1.2px;
          background: linear-gradient(90deg, #4A2FBD 0%, #7B61FF 40%, #FF6B6B 80%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .uxexp-title span {
          color: #7B61FF;
          background: none;
          -webkit-text-fill-color: unset;
        }
        .uxexp-gradient {
          background: linear-gradient(90deg, #FF6B6B 0%, #FFD600 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .uxexp-subtitle {
          text-align: center;
          font-size: 1.13rem;
          margin-bottom: 2.7rem;
          color: #e0e0e0;
          font-weight: 400;
        }
        .uxexp-cards-row {
          display: flex;
          gap: 2.2rem;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
          width: 100%;
        }
        .uxexp-card {
          background: rgba(30, 30, 50, 0.82);
          border-radius: 18px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22, 0 0 32px 2px #fff2 inset;
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          min-width: 320px;
          max-width: 600px;
          flex: 1 1 40%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1rem;
          position: relative;
          border: 1.5px solid #7B61FF44;
          backdrop-filter: blur(6px);
        }
        .uxexp-card-img-main {
          width: 100%;
          max-width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 12px;
          margin-top: 18px;
          box-shadow: 0 4px 32px #000a;
        }
        .uxexp-card-header {
          font-weight: 700;
          font-size: 1.08rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.2px;
          color: #fff;
        }
        .uxexp-card-desc {
          font-size: 1rem;
          color: #e0e0e0;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }
        .uxexp-dot {
          font-size: 1.2rem;
          margin-right: 6px;
        }
        .uxexp-dot-gold { color: #FFD600; }
        .uxexp-dot-green { color: #4ADE80; }
        .uxexp-dot-pink { color: #FF6B6B; }
        .uxexp-kanban {
          background: rgba(30, 30, 50, 0.92);
          min-width: 320px;
          max-width: 600px;
          width: 100%;
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
        }
        .uxexp-kanban-board {
          display: flex;
          gap: 1.2rem;
          margin-top: 1.1rem;
          width: 100%;
        }
        .uxexp-kanban-col {
          flex: 1 1 0;
          background: rgba(40, 40, 60, 0.85);
          border-radius: 12px;
          padding: 0.7rem 0.5rem 0.5rem 0.5rem;
          box-shadow: 0 2px 12px #7B61FF22;
        }
        .uxexp-kanban-title {
          font-weight: 700;
          font-size: 1.01rem;
          margin-bottom: 0.7rem;
          color: #FFD600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .uxexp-kanban-card {
          background: rgba(60, 60, 80, 0.92);
          border-radius: 8px;
          margin-bottom: 0.7rem;
          padding: 0.7rem 0.6rem;
          box-shadow: 0 2px 8px #7B61FF22;
          color: #fff;
        }
        .uxexp-kanban-card-progress {
          background: rgba(123, 97, 255, 0.18);
        }
        .uxexp-kanban-card-title {
          font-weight: 600;
          font-size: 0.98rem;
          margin-bottom: 0.2rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .uxexp-kanban-card-status {
          font-size: 0.92rem;
          color: #FFD600;
        }
        .uxexp-kanban-card-votes {
          font-size: 0.92rem;
          color: #fff;
          margin-top: 0.2rem;
        }
        @media (max-width: 1600px) {
          .uxexp-content {
            max-width: 100%;
          }
        }
        @media (max-width: 1100px) {
          .uxexp-content {
            max-width: 100%;
          }
        }
        @media (max-width: 900px) {
          .uxexp-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .uxexp-kanban-board {
            flex-direction: column;
            gap: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .uxexp-title {
            font-size: 1.5rem;
          }
          .uxexp-card {
            padding: 1.1rem 0.5rem 0.7rem 0.5rem;
            min-width: 0;
            max-width: 100%;
          }
          .uxexp-card-img-main {
            height: 90px;
          }
        }
      `}</style>
    </section>
  );
} 