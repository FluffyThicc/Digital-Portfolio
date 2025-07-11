import React from 'react';
import { FaMicrophone, FaBell, FaTasks, FaFilePdf, FaArrowUp, FaWifi } from 'react-icons/fa';

const features = [
  {
    icon: <FaMicrophone />, title: '24/7 Customer Support', desc: 'Reliable support, anytime you need it.'
  },
  {
    icon: <FaBell />, title: 'Notifications Reminders', desc: 'Get timely notifications for upcoming tests and exam dates.'
  },
  {
    icon: <FaTasks />, title: 'All-in-One Productivity', desc: 'All your tasks, schedules, and study goals—in one smart app.'
  },
  {
    icon: <FaFilePdf />, title: 'PDF Submission', desc: 'Scan your timetable PDF and get a personalized schedule in seconds.'
  },
  {
    icon: <FaArrowUp />, title: 'Swipe to Prioritize', desc: 'Quickly rank subjects by difficulty & optimize your study plan.'
  },
  {
    icon: <FaWifi />, title: 'Offline Mode', desc: 'View timetable & exam schedules even without internet.'
  },
];

export default function ProudestAchievement() {
  return (
    <section className="proudest-section">
      <div className="proudest-bg-glow" />
      {/* Purple starry stars */}
      <div className="proudest-star proudest-star1" />
      <div className="proudest-star proudest-star2" />
      <div className="proudest-star proudest-star3" />
      <div className="proudest-star proudest-star4" />
      <div className="proudest-star proudest-star5" />
      <div className="proudest-content">
        <h2 className="proudest-title">My Proudest Achievement</h2>
        <div className="proudest-subtitle">AI Startup Design: <span className="proudest-highlight">DeepSync</span></div>
        <div className="proudest-desc">DeepSync is an AI-powered study productivity app startup idea—helping students organize, prioritize, and optimize their study schedules with smart reminders, personalized plans, and seamless collaboration tools.</div>
        <div className="proudest-main-row">
          <div className="proudest-features-col">
            {features.slice(0, 3).map((f, i) => (
              <div className="proudest-feature-card" key={i}>
                <div className="proudest-feature-icon">{f.icon}</div>
                <div className="proudest-feature-title">{f.title}</div>
                <div className="proudest-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="proudest-phone-mockup">
            <div className="proudest-phone-frame">
              {/* App Store screenshot in phone */}
              <img src={require('../assets/img/deepsync-phone.png')} alt="DeepSync App Store Screenshot" className="proudest-phone-img" />
            </div>
          </div>
          <div className="proudest-features-col">
            {features.slice(3).map((f, i) => (
              <div className="proudest-feature-card" key={i}>
                <div className="proudest-feature-icon">{f.icon}</div>
                <div className="proudest-feature-title">{f.title}</div>
                <div className="proudest-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .proudest-section {
          position: relative;
          padding: 120px 0 100px 0;
          background: transparent;
          overflow: visible;
        }
        .proudest-bg-glow {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(ellipse at 60% 0%, #7B61FF44 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, #7B61FF22 0%, transparent 80%);
          z-index: 0;
        }
        .proudest-star {
          position: absolute;
          background: #a085ff;
          border-radius: 50%;
          opacity: 0.45;
          filter: blur(2.5px);
          z-index: 0;
        }
        .proudest-star1 { top: 60px; left: 320px; width: 8px; height: 8px; opacity: 0.7; }
        .proudest-star2 { top: 120px; left: 180px; width: 5px; height: 5px; opacity: 0.5; }
        .proudest-star3 { top: 200px; left: 400px; width: 7px; height: 7px; opacity: 0.6; }
        .proudest-star4 { top: 80px; right: 120px; width: 10px; height: 10px; opacity: 0.4; }
        .proudest-star5 { bottom: 60px; left: 80px; width: 6px; height: 6px; opacity: 0.5; }
        .proudest-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          color: #fff;
          padding: 0 18px;
        }
        .proudest-title {
          font-size: 2.5rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 1.2rem;
          letter-spacing: 1.2px;
          color: #fff;
          text-shadow: 0 2px 24px #7B61FF44, 0 1px 2px #000a;
        }
        .proudest-subtitle {
          text-align: center;
          font-size: 1.3rem;
          margin-bottom: 1.8rem;
          color: #fff;
          font-weight: 600;
        }
        .proudest-highlight {
          color: #7B61FF;
          font-weight: 700;
        }
        .proudest-desc {
          text-align: center;
          font-size: 1.08rem;
          margin-bottom: 3.5rem;
          color: #e0e0e0;
          font-weight: 400;
        }
        .proudest-main-row {
          display: flex;
          gap: 4rem;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          width: 100%;
        }
        .proudest-features-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          flex: 0 1 280px;
          min-width: 280px;
          max-width: 320px;
        }
        .proudest-feature-card {
          background: rgba(30, 30, 50, 0.82);
          border-radius: 16px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22, 0 0 32px 2px #fff2 inset;
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border: 1.5px solid #7B61FF44;
          backdrop-filter: blur(6px);
          height: 180px;
          justify-content: flex-start;
        }
        .proudest-feature-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #bbaaff;
        }
        .proudest-feature-title {
          font-weight: 700;
          font-size: 1.08rem;
          margin-bottom: 0.2rem;
          color: #fff;
        }
        .proudest-feature-desc {
          font-size: 0.98rem;
          color: #e0e0e0;
        }
        .proudest-phone-mockup {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex: 0 0 auto;
          min-width: 400px;
          max-width: 400px;
          margin: 0 2rem;
        }
        .proudest-phone-frame {
          position: relative;
          width: 400px;
          height: 604px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .proudest-phone-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        @media (max-width: 1100px) {
          .proudest-content {
            max-width: 100%;
          }
          .proudest-main-row {
            flex-direction: column;
            align-items: center;
            gap: 4rem;
          }
          .proudest-features-col {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 100%;
            min-width: 0;
            gap: 2rem;
          }
          .proudest-feature-card {
            height: auto;
            min-height: 180px;
            flex: 1 1 280px;
          }
        }
        @media (max-width: 600px) {
          .proudest-title {
            font-size: 1.5rem;
          }
          .proudest-phone-frame {
            width: 90vw;
            max-width: 400px;
          }
        }
      `}</style>
    </section>
  );
} 