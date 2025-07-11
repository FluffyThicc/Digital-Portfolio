import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const tools = [
  {
    name: 'Figma',
    description: 'A collaborative interface design tool that enables real-time collaboration and prototyping.',
    image: `${process.env.PUBLIC_URL}/img/figma-logo.png`
  },
  {
    name: 'Sketch',
    description: 'A vector-based design tool focused on user interface and user experience design.',
    image: `${process.env.PUBLIC_URL}/img/sketch-logo.png`
  },
  {
    name: 'Adobe XD',
    description: 'A powerful design and prototyping tool for creating user experiences for web and mobile apps.',
    image: `${process.env.PUBLIC_URL}/img/adobe-xd-logo.png`
  },
  {
    name: 'Adobe Illustrator',
    description: 'Industry-standard vector graphics software for creating logos, icons, and illustrations.',
    image: `${process.env.PUBLIC_URL}/img/illustrator-logo.png`
  },
  {
    name: 'Adobe Photoshop',
    description: 'The leading image editing and digital art creation software used by designers worldwide.',
    image: `${process.env.PUBLIC_URL}/img/photoshop-logo.png`
  }
];

export const DesignTools = () => {
  return (
    <section className="design-tools" id="tools" style={{background: 'transparent', padding: '0'}}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="tools-grid" style={{marginTop: 0}}>
                    {tools.map((tool, index) => (
                      <div key={index} className="tool-card" style={{background: 'rgba(30, 20, 60, 0.92)', color: '#fff', boxShadow: '0 8px 32px #7B61FF33', border: '1.5px solid #7B61FF44'}}>
                        <div className="tool-logo">
                          <img 
                            src={tool.image} 
                            alt={`${tool.name} logo`} 
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `${process.env.PUBLIC_URL}/img/placeholder.png`;
                            }}
                          />
                        </div>
                        <h3 style={{color: '#bbaaff'}}>{tool.name}</h3>
                        <p style={{color: '#fff'}}>{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <style>{`
        .design-tools {
          background: transparent !important;
          padding: 0 !important;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 0;
          justify-items: center;
          position: relative;
        }
        /* Center last row with 2 items by adding a pseudo-element */
        .tools-grid::after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          grid-column: 2;
          grid-row: 3;
        }
        /* Center the last row if it has only two items */
        @media (min-width: 900px) {
          .tools-grid > .tool-card:nth-last-child(-n+2):nth-child(odd) {
            grid-column: 2;
          }
        }
        .tool-card {
          background: rgba(30, 20, 60, 0.92) !important;
          color: #fff !important;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 8px 32px #7B61FF33;
          border: 1.5px solid #7B61FF44;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px #a259ff44;
        }
        .tool-logo {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tool-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .tool-card h3 {
          margin: 15px 0;
          color: #bbaaff !important;
          font-size: 1.5rem;
        }
        .tool-card p {
          color: #fff !important;
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
