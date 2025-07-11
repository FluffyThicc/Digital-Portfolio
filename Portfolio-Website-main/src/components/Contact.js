import { useState } from "react";
import AboutMeParticles from "./AboutMeParticles";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import faceImg from '../assets/img/eami-l023.jpg';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    company: '',
    companySize: '',
    jobTitle: '',
    subject: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [isGlowing, setIsGlowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGlowing(true);
    setTimeout(() => setIsGlowing(false), 1200);
    const subject = encodeURIComponent(formDetails.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formDetails.name}\n` +
      `Email: ${formDetails.email}\n` +
      `Company: ${formDetails.company}\n` +
      `Company Size: ${formDetails.companySize}\n` +
      `Job Title: ${formDetails.jobTitle}\n` +
      `Message: ${formDetails.message}`
    );
    window.location.href = `mailto:phayjunhong@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact galaxy-contact" id="connect">
      <AboutMeParticles numParticles={60} particleColors={['#fff','rgba(123,97,255,0.8)','rgba(80,180,255,0.7)','rgba(80,227,194,0.7)','rgba(255,255,255,0.8)','rgba(255,255,255,0.5)','#7B61FF','#4A90E2']} />
      <div className="galaxy-contact-container">
        <div className="galaxy-contact-left">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 18, margin: '0 0 24px 5px'}}>
            <div className="galaxy-contact-profile-img-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
              <img src={faceImg} alt="Phay Jun Hong" className="galaxy-contact-profile-img" style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 32px #7B61FF88, 0 0 0 4px #fff8', marginRight: 28}} />
            </div>
            <h2 className="galaxy-contact-title" style={{margin: 0, whiteSpace: 'nowrap'}}>Contact Me</h2>
          </div>
          <div className="galaxy-contact-subtitle">Let’s connect and create something amazing together. 🚀</div>
          <div className="galaxy-divider" />
          <p className="galaxy-contact-desc">
            Ready to apply creative impact—translating thumbnail design skills to UX, I focus on attention-grabbing visuals, user clarity, and brand consistency to help digital products stand out and connect with audiences.
            <span style={{ display: 'block', marginTop: 12, fontWeight: 700, color: '#fff', fontSize: '1.08em' }}>
              💬 Let’s collaborate to create digital experiences that get noticed and drive results!
            </span>
          </p>
          <div className="galaxy-contact-info" style={{marginTop: 32, display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}><FaEnvelope className="galaxy-icon" /> <a href="mailto:phayjunhong@gmail.com">phayjunhong@gmail.com</a></div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}><FaLinkedin className="galaxy-icon" /> <a href="https://www.linkedin.com/in/phay-jun-hong-47750b351/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 8}}><FaMapMarkerAlt className="galaxy-icon" /> Singapore</div>
          </div>
        </div>
        <div className="galaxy-contact-right">
          <div className="galaxy-contact-card">
            <AboutMeParticles numParticles={32} particleColors={['#fff','rgba(123,97,255,0.8)','rgba(80,180,255,0.7)','rgba(255,255,255,0.8)','rgba(255,255,255,0.5)','#7B61FF','#4A90E2']} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}} />
            <form onSubmit={handleSubmit} className="galaxy-form galaxy-form-grid" style={{position: 'relative', zIndex: 1}} autoComplete="off">
              <div className="form-row">
                <div className="form-section">
                  <label>Name</label>
                  <input type="text" value={formDetails.name} placeholder="Enter Your Name" onChange={(e) => onFormUpdate('name', e.target.value)} required />
                </div>
                <div className="form-section">
                  <label>Email</label>
                  <input type="email" value={formDetails.email} placeholder="Enter Your Email" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-section">
                  <label>Company</label>
                  <input type="text" value={formDetails.company} placeholder="Enter your Company" onChange={(e) => onFormUpdate('company', e.target.value)} />
                </div>
                <div className="form-section">
                  <label>Company size</label>
                  <select value={formDetails.companySize} onChange={(e) => onFormUpdate('companySize', e.target.value)}>
                    <option value="">Select...</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-section">
                  <label>Job Title</label>
                  <input type="text" value={formDetails.jobTitle} placeholder="Enter your Job Role" onChange={(e) => onFormUpdate('jobTitle', e.target.value)} />
                </div>
                <div className="form-section">
                  <label>Subject</label>
                  <select value={formDetails.subject} onChange={(e) => onFormUpdate('subject', e.target.value)}>
                    <option value="">Select...</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="form-section form-section-full">
                <label>How can we help?</label>
                <textarea rows="5" value={formDetails.message} placeholder="Enter your message..." onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
              </div>
              <button
                type="submit"
                className="galaxy-btn"
                style={{
                  marginTop: 18,
                  background: isGlowing ? '#50E3C2' : '#7B61FF',
                  color: '#fff',
                  border: 'none',
                  boxShadow: isGlowing ? '0 0 32px 8px #50E3C2, 0 0 0 6px #7B61FF' : (isHovered ? '0 0 24px #50E3C2cc, 0 0 0 4px #7B61FFcc' : 'none'),
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                  borderRadius: 32,
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  padding: '16px 48px',
                  width: '100%',
                  cursor: 'pointer',
                  outline: 'none',
                  appearance: 'none',
                  display: 'block',
                  letterSpacing: 1.2,
                  position: 'relative',
                  overflow: 'hidden',
                  transform: isGlowing ? 'scale(1.04)' : (isHovered ? 'scale(1.02)' : 'scale(1)')
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span role="img" aria-label="rocket" style={{marginRight: 8}}>🚀</span>
                {isGlowing ? 'Sending' : buttonText}
                {isGlowing && <span role="img" aria-label="sparkles" style={{marginLeft: 8, fontSize: 22}}>✨</span>}
              </button>
              {status.message && (
                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .galaxy-contact {
          min-height: 100vh;
          background: radial-gradient(ellipse at 60% 0%, #2a1850 0%, #0a0a23 100%);
          color: #fff;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow: hidden;
          padding: 120px 0 0 0;
        }
        .galaxy-contact-container {
          display: flex;
          flex-direction: row;
          width: 100%;
          max-width: 1080px;
          gap: 48px;
          justify-content: center;
          align-items: stretch;
          position: relative;
          z-index: 2;
          margin-top: 0;
          margin-bottom: 120px;
        }
        .galaxy-contact-left {
          flex: 0 0 30%;
          max-width: 320px;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: none;
          border-radius: 0;
          box-shadow: none;
          padding: 32px 0 0 0;
          z-index: 2;
        }
        .galaxy-contact-title {
          color: #fff;
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 8px;
          text-align: left;
          text-shadow: 0 0 24px #7B61FF, 0 0 32px #4A90E2;
        }
        .galaxy-contact-subtitle {
          color: #bbaaff;
          font-size: 1.15rem;
          margin-bottom: 18px;
          font-weight: 500;
          text-align: left;
        }
        .galaxy-divider {
          height: 2px;
          width: 64px;
          background: linear-gradient(90deg, #7B61FF 0%, #4A90E2 100%);
          border-radius: 2px;
          margin: 18px 0 24px 0;
        }
        .galaxy-contact-desc {
          color: #fff;
          font-size: 1.08rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .galaxy-contact-info {
          margin-top: 24px;
          color: #fff;
          font-size: 1.08rem;
        }
        .galaxy-contact-info a {
          color: #7B61FF;
          text-decoration: underline;
        }
        .galaxy-icon {
          color: #7B61FF;
          margin-right: 8px;
          vertical-align: middle;
        }
        .galaxy-contact-right {
          flex: 0 0 70%;
          min-width: 320px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .galaxy-contact-card {
          position: relative;
          width: 100%;
          max-width: 520px;
          min-width: 260px;
          margin: 0 auto;
          background: rgba(24, 24, 42, 0.85);
          border-radius: 32px;
          box-shadow: 0 0 64px #7B61FFcc, 0 0 0 8px #4A90E2cc;
          border: 3px solid #7B61FF;
          padding: 48px 32px 56px 32px;
          overflow: hidden;
          z-index: 2;
          backdrop-filter: blur(12px) saturate(1.3);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .galaxy-form label {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
        }
        .galaxy-form input, .galaxy-form textarea {
          width: 100%;
          margin-bottom: 18px;
          border-radius: 12px;
          font-size: 1.1rem;
          padding: 12px 16px;
          background: rgba(35,35,58,0.95);
          color: #fff;
          border: 1.5px solid #23233a;
          box-shadow: 0 0 8px #18182a;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .galaxy-form input:focus, .galaxy-form textarea:focus {
          border: 1.5px solid #7B61FF;
          box-shadow: 0 0 16px #7B61FF88;
          outline: none;
        }
        .galaxy-form select {
          width: 100%;
          margin-bottom: 18px;
          border-radius: 12px;
          font-size: 1.1rem;
          padding: 12px 16px;
          background: rgba(35,35,58,0.95);
          color: #fff;
          border: 1.5px solid #23233a;
          box-shadow: 0 0 8px #18182a;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .galaxy-form select:focus {
          border: 1.5px solid #7B61FF;
          box-shadow: 0 0 16px #7B61FF88;
          outline: none;
        }
        .galaxy-btn {
          background: #7B61FF;
          color: #fff;
          font-weight: 700;
          border: none;
          border-radius: 32px;
          padding: 16px 48px;
          font-size: 1.2rem;
          letter-spacing: 1.1px;
          width: 100%;
          margin-top: 12px;
          transition: background 0.2s;
          box-shadow: 0 0 24px #7B61FF88;
        }
        .galaxy-btn:hover {
          background: #4A90E2;
        }
        .galaxy-form.galaxy-form-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .galaxy-form .form-row {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
        }
        .galaxy-form .form-section {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
        }
        .galaxy-form .form-section-full {
          width: 100%;
          margin-top: 0.5rem;
        }
        @media (max-width: 900px) {
          .galaxy-contact-container {
            flex-direction: column;
            gap: 24px;
            align-items: stretch;
            margin-top: 32px;
            margin-bottom: 48px;
          }
          .galaxy-contact-left, .galaxy-contact-right {
            max-width: 100%;
            min-width: unset;
            padding: 24px 6vw 18px 6vw;
            border-radius: 18px;
          }
          .galaxy-contact-card {
            padding: 24px 6vw 38px 6vw;
            border-radius: 18px;
          }
          .galaxy-contact-title {
            font-size: 1.3rem;
          }
          .galaxy-form .form-row {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
        .galaxy-btn:hover, .galaxy-form button:hover, button.galaxy-btn:hover {
          background: #50E3C2 !important;
          color: #fff !important;
          box-shadow: 0 0 24px #50E3C2cc, 0 0 0 4px #7B61FFcc !important;
          border: none !important;
        }
        .galaxy-form input, .galaxy-form select, .galaxy-form textarea {
          padding: 4px 8px !important;
          min-height: 28px !important;
          font-size: 1rem !important;
          border-radius: 8px !important;
        }
        .galaxy-form textarea {
          min-height: 48px !important;
        }
      `}</style>
    </section>
  )
}
