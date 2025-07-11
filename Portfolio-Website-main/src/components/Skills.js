import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { DesignTools } from "./DesignTools";
import AboutMeParticles from "./AboutMeParticles";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="space-ux-section" id="skills">
      <AboutMeParticles numParticles={48} />
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div className="row">
          <div className="col-12">
            <div className="galaxy-frame">
              <DesignTools />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .space-ux-section {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(ellipse at 60% 0%, #2a1850 0%, #0a0a23 100%);
          color: #fff;
          overflow: hidden;
          padding-bottom: 0;
        }
        .galaxy-frame {
          margin-top: 0;
          border-radius: 32px;
          padding: 3.5rem 2.5rem 2.5rem 2.5rem;
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 900px) {
          .galaxy-frame {
            padding: 2rem 0.5rem 2rem 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}
