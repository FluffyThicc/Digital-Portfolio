import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons';
import AboutMeParticles from "./AboutMeParticles";

export const Footer = () => {
  return (
    <footer className="footer galaxy-footer" style={{position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at 60% 0%, #2a1850 0%, #0a0a23 100%)', color: '#fff', padding: '48px 0 24px 0', borderTop: '4px solid #7B61FF', boxShadow: '0 -4px 32px #7B61FF55'}}>
      <AboutMeParticles numParticles={32} particleColors={['#fff','rgba(123,97,255,0.8)','rgba(80,227,194,0.7)','rgba(255,255,0,0.7)','rgba(80,180,255,0.7)','rgba(255,255,255,0.8)','rgba(255,255,255,0.5)','#ff61a6','#aaff00']} />
      <Container style={{position: 'relative', zIndex: 1}}>
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <div className="footer-cta" style={{fontWeight: 700, fontSize: '1.3rem', color: '#bbaaff', marginBottom: 18}}>
              Let’s connect and create something stellar.
            </div>
            <div className="footer-social" style={{marginBottom: 18}}>
              <a href="https://www.linkedin.com/in/phay-jun-hong-47750b351/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <Linkedin />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <Github />
              </a>
              <a href="mailto:your.email@example.com" className="footer-icon">
                <Envelope />
              </a>
            </div>
            <div style={{color: '#fff', fontSize: '1rem', opacity: 0.7}}>
              &copy; {new Date().getFullYear()} Phay Jun Hong. All Rights Reserved
            </div>
          </Col>
        </Row>
      </Container>
      <style>{`
        .galaxy-footer {
          background: radial-gradient(ellipse at 60% 0%, #2a1850 0%, #0a0a23 100%) !important;
          color: #fff;
          border-top: 4px solid #7B61FF;
          box-shadow: 0 -4px 32px #7B61FF55;
        }
        .footer-social {
          display: flex;
          justify-content: center;
          gap: 32px;
        }
        .footer-icon {
          color: #fff;
          font-size: 2.1rem;
          transition: color 0.2s, filter 0.2s;
          filter: drop-shadow(0 0 8px #7B61FF88);
        }
        .footer-icon:hover {
          color: #50E3C2;
          filter: drop-shadow(0 0 16px #50E3C2);
        }
      `}</style>
    </footer>
  )
}
