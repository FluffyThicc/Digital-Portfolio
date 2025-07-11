import React, { useState, useRef, useEffect } from 'react';
import miniMartImg from '../assets/img/mini-mart.png'; // Place your image at src/assets/img/mini-mart.png
import AboutMeParticles from './AboutMeParticles';

const experiences = [
  {
    key: 'restocker',
    title: 'Inventory & Store Operations Assistant',
    subtitle: '🛒Hui Huat Yew Kai Mini Mart ~ 6 Months',
    desc: 'At a busy neighborhood minimart, I played a key role in maintaining an inviting and efficient shopping environment by managing and restocking over 200 products daily. Thriving in this fast-paced role, I collaborated closely with staff to ensure smooth daily operations and a seamless customer experience 😊.',
    icon: '🛒',
    story: [
      {
        title: 'Getting Oriented',
        desc: 'Learned the store layout, inventory system, and daily routines. Shadowed staff to understand best practices.',
        icon: '👋',
      },
      {
        title: 'Restocking & Merchandising',
        desc: 'Managed and restocked over 200 products daily, ensuring shelves were always full and displays attractive.',
        icon: '📦',
      },
      {
        title: 'Customer Service',
        desc: 'Assisted customers and worked with staff to create a seamless, friendly shopping experience.',
        icon: '😊',
      },
    ],
  },
  {
    key: 'thumbnail',
    title: 'Thumbnail Designer',
    subtitle: 'Designed Eye-Catching YouTube Thumbnails',
    desc: 'Created visually compelling thumbnails that increased click-through rates and brand recognition for YouTube channels.',
    icon: '🎨',
    story: [
      {
        title: 'Mobile Legends Thumbnail Designer',
        date: '1st June 2022',
        subtitle: 'Freelance | 4 Months',
        desc: 'Designed eye-catching Mobile Legends thumbnails for YouTube creators, boosting video click-through rates and channel branding. Collaborated with clients to deliver engaging, game-specific visuals that stood out in a crowded space.',
        img: process.env.PUBLIC_URL + '/img/thumbnail-mlbb-1.jpg',
      },
      {
        title: 'Core Skills Gained',
        date: '1st June 2022',
        subtitle: 'Freelance | 4 Months',
        desc: `<ul style="padding-left: 1.2em; margin: 0;">
  <li><b>🎨 Visual Storytelling:</b> Designed thumbnails that highlight key game moments and boost engagement.</li>
  <li><b>⚡ Rapid Iteration:</b> Quickly adapted designs to feedback and trends for fresh, relevant visuals.</li>
  <li><b>👁️ User Focus:</b> Used UX principles for clear, clickable, on-brand thumbnails that stand out.</li>
</ul>`,
        img: process.env.PUBLIC_URL + '/img/thumbnail-mlbb-2.jpg',
      },
      {
        title: 'Possibilities & Value',
        date: '1st June 2022',
        subtitle: 'Freelance | 4 Months',
        desc: 'Ready to apply creative impact—translating thumbnail design skills to UX, I focus on attention-grabbing visuals, user clarity, and brand consistency to help digital products stand out and connect with audiences.\n\n💬 Let’s collaborate to create digital experiences that get noticed and drive results!',
        img: process.env.PUBLIC_URL + '/img/thumbnail-mlbb-3.jpg',
      },
    ],
  },
  {
    key: 'video',
    title: 'Video Editor',
    subtitle: 'Boosted Viewer Retention Rate',
    desc: 'Edited long-form and short-form videos, using storytelling and pacing to maximize viewer engagement and retention.',
    icon: '✂️',
    story: [
      {
        title: 'Mobile Legends Video Editor',
        date: '1st June 2022',
        subtitle: 'Freelance | 4 Months',
        desc: 'Produced and edited Mobile Legends gameplay videos, using creative cuts and effects to keep viewers engaged and entertained.',
        img: process.env.PUBLIC_URL + '/img/Best-Vlog-Editing-Software-Clipchamp-768x432.png',
      },
      {
        title: 'Core Editing Skills',
        date: '1st June 2022',
        subtitle: 'Freelance | 4 Months',
        desc: `<ul style="padding-left: 1.2em; margin: 0;">
  <li><b>🎬 Storytelling:</b> Structured videos for maximum impact and retention.</li>
  <li><b>⚡ Fast Turnaround:</b> Delivered edits quickly to match content trends and client needs.</li>
  <li><b>👁️ Viewer Focus:</b> Used pacing, effects, and music to keep audiences watching.</li>
</ul>`,
        img: process.env.PUBLIC_URL + '/img/asdasdasd.png',
      },
      {
        title: 'Innovation & Value',
        date: '1st June 2022',
        subtitle: 'Freelance | 4 Months',
        desc: 'Always seeking new ways to innovate—leveraging the latest editing tools and creative techniques to make content stand out and deliver results.<br/><b>💡 Let’s collaborate to create videos that inspire and engage!</b>',
        img: process.env.PUBLIC_URL + '/img/business-innovation-3.jpg',
      },
    ],
  },
  {
    key: 'capcut',
    title: 'Capcut Editor',
    subtitle: 'Created Engaging TikTok Edits',
    desc: 'Produced dynamic, trendy TikTok edits using Capcut, helping content go viral and reach wider audiences.',
    icon: '📱',
    story: [
      {
        title: 'TikTok CapCut Video Editor',
        date: '1st June 2021',
        subtitle: 'Freelance',
        desc: 'Edited TikTok videos for clients using CapCut, creating viral, high-impact short-form content.',
        img: process.env.PUBLIC_URL + '/img/capcut.jpg',
      },
      {
        title: 'Skills I Learnt',
        date: '1st June 2021',
        subtitle: 'Freelance',
        desc: `<ul style="padding-left: 1.2em; margin: 0;">
  <li><b>📱 Responsive Design:</b> Adapted video layouts and elements for both desktop and mobile viewing.</li>
  <li><b>🎯 Engagement:</b> Used trending effects and music to maximize reach and viewer interaction.</li>
  <li><b>⚡ Efficiency:</b> Delivered edits quickly to keep up with fast-moving social trends.</li>
</ul>`,
        img: process.env.PUBLIC_URL + '/img/WhatsApp Image 2025-07-11 at 02.01.36_64fcf01b.jpg',
      },
      {
        title: 'Let’s Work Together!',
        date: '1st June 2021',
        subtitle: 'Freelance',
        desc: 'Ready to help your content go viral with creative, mobile-first CapCut edits.<br/><b>📩 Hire me to boost your TikTok presence and engagement!</b>',
        img: process.env.PUBLIC_URL + '/img/WhatsApp Image 2025-07-11 at 01.48.51_9009545f.jpg',
      },
    ],
  },
];

// Add a color map for each experience
const experienceColors = {
  restocker: '#FFD600', // gold/yellow
  thumbnail: '#A259FF', // purple
  video: '#50E3C2',     // cyan
  capcut: '#4A90E2',    // blue
};

export default function WorkExperienceTabs() {
  const [selected, setSelected] = useState(experiences[0].key);
  const exp = experiences.find(e => e.key === selected);

  // Prepare refs and inView states for each roadmap step
  const roadmapRefs = useRef([]);
  if (exp.story) {
    exp.story.forEach((_, i) => {
      if (!roadmapRefs.current[i]) {
        roadmapRefs.current[i] = React.createRef();
      }
    });
    // Remove extra refs if story length shrinks
    roadmapRefs.current.length = exp.story.length;
  }
  const [inViews, setInViews] = useState(Array((exp.story ? exp.story.length : 0)).fill(false));

  useEffect(() => {
    if (!exp.story) return;
    const observers = roadmapRefs.current.map((ref, idx) => {
      if (!ref.current) return null;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setInViews(prev => {
            const updated = [...prev];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
      return observer;
    });
    return () => {
      observers.forEach((observer, idx) => {
        if (
          observer &&
          roadmapRefs.current[idx] &&
          roadmapRefs.current[idx].current
        ) {
          observer.unobserve(roadmapRefs.current[idx].current);
        }
      });
    };
    // eslint-disable-next-line
  }, [exp.story]);

  useEffect(() => {
    // Reset inViews when switching jobs
    setInViews(Array((exp.story ? exp.story.length : 0)).fill(false));
    // eslint-disable-next-line
  }, [selected]);

  // Add a blue particles component for the thumbnail section
  function BlueParticles(props) {
    return <AboutMeParticles {...props} particleColors={['rgba(80,180,255,0.7)','rgba(255,255,255,0.8)','rgba(80,180,255,0.4)','rgba(255,255,255,0.5)']} />;
  }

  // Particle color map for each experience
  const experienceParticles = {
    restocker: ['#FFD600', '#fff', 'rgba(255,214,0,0.3)', 'rgba(255,255,255,0.2)'],
    thumbnail: ['#A259FF', '#fff', 'rgba(162,89,255,0.3)', 'rgba(255,255,255,0.2)'],
    video: ['#50E3C2', '#fff', 'rgba(80,227,194,0.3)', 'rgba(255,255,255,0.2)'],
    capcut: ['#4A90E2', '#fff', 'rgba(74,144,226,0.3)', 'rgba(255,255,255,0.2)'],
  };

  const [enlargedImg, setEnlargedImg] = useState(null);

  return (
    <section className="workexp-tabs-section">
      <div
        className="workexp-tabs-bg"
        style={{
          background: `radial-gradient(ellipse at 60% 0%, ${experienceColors[selected]}22 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, #fff2 0%, transparent 80%)`,
          transition: 'background 0.5s',
        }}
      />
      <AboutMeParticles
        numParticles={60}
        particleColors={experienceParticles[selected]}
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}}
      />
      <h2 className="workexp-tabs-title">Relevant Work Experience</h2>
      <div className="workexp-tabs-row">
        {experiences.map(e => (
          <button
            key={e.key}
            className={`workexp-tab-card${selected === e.key ? ' selected' : ''}`}
            onClick={() => setSelected(e.key)}
            aria-pressed={selected === e.key}
            style={{
              boxShadow: selected === e.key ? `0 0 24px 4px ${experienceColors[e.key]}88, 0 0 0 2px ${experienceColors[e.key]}55` : undefined,
              borderColor: selected === e.key ? experienceColors[e.key] : undefined,
              color: selected === e.key ? experienceColors[e.key] : undefined,
              transition: 'box-shadow 0.2s, border-color 0.2s, color 0.2s',
            }}
          >
            <span className="workexp-tab-icon">{e.icon}</span>
            <span className="workexp-tab-title">{e.title}</span>
            <span className="workexp-tab-subtitle">{e.subtitle}</span>
          </button>
        ))}
      </div>
      {/* Roadmap Story */}
      <div className="workexp-roadmap">
        {exp.key === 'thumbnail'
          ? exp.story && exp.story.map((step, idx) => {
              const stopColor = experienceColors[exp.key];
              // Set a smaller maxHeight for the first and second frames
              const imgStyle = idx < 2
                ? {maxWidth: '600px', maxHeight: '320px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #50b4ff33, 0 0 0 2px #50b4ff22', margin: '0 0 0 32px', display: 'block'}
                : {maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #50b4ff33, 0 0 0 2px #50b4ff22', margin: '0 0 0 32px', display: 'block'};
              // For the first two steps of the Thumbnail Designer experience:
              if (exp.key === 'thumbnail' && (idx === 0 || idx === 1)) {
                return (
                  <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', position: 'relative', overflow: 'hidden'}}> 
                    <AboutMeParticles numParticles={38} />
                    <div className="workexp-roadmap-dot-col">
                      <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                      <div className="workexp-roadmap-vert-line" />
                    </div>
                    <div className="workexp-roadmap-img-right-large" style={{width: '500px', flex: '0 0 500px', marginRight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div style={{position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img
                          src={step.img}
                          alt={step.title}
                          style={{width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '340px', display: 'block', borderRadius: '18px', boxShadow: imgStyle.boxShadow, margin: 0}}
                          className="enlargeable-img"
                          onClick={() => setEnlargedImg(step.img)}
                        />
                        <span
                          className="corner-magnifier"
                          title="Enlarge image"
                          onClick={() => setEnlargedImg(step.img)}
                          style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                          aria-label="Enlarge image"
                        >
                          🔍
                        </span>
                      </div>
                    </div>
                    <div className="workexp-roadmap-content-large" style={{flex: '1 1 0', minWidth: 0, marginLeft: '72px'}}>
                      <div style={{color: '#a9a9ff', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{step.date}</div>
                      <div className="workexp-roadmap-title-large" style={{marginBottom: 8}}>{step.title}</div>
                      <div style={{fontWeight: 600, color: '#bbaaff', fontSize: '1.1rem', marginBottom: 12}}>{step.subtitle}</div>
                      <div className="workexp-roadmap-desc-large" dangerouslySetInnerHTML={{__html: step.desc}} />
                    </div>
                  </div>
                );
              }
              // Default: image right, text left
              return (
                <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden'}}> 
                  <AboutMeParticles numParticles={38} />
                  <div className="workexp-roadmap-dot-col">
                    <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                    <div className="workexp-roadmap-vert-line" />
                  </div>
                  <div className="workexp-roadmap-content-large">
                    <div style={{color: '#a9a9ff', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{step.date}</div>
                    <div className="workexp-roadmap-title-large" style={{marginBottom: 8}}>{step.title}</div>
                    <div style={{fontWeight: 600, color: '#bbaaff', fontSize: '1.1rem', marginBottom: 12}}>{step.subtitle}</div>
                    <div className="workexp-roadmap-desc-large">
                      {step.desc}
                    </div>
                  </div>
                  <div className="workexp-roadmap-img-right-large">
                    <div style={{position: 'relative', display: 'inline-block'}}>
                      <img
                        src={step.img}
                        alt={step.title}
                        style={imgStyle}
                        className="enlargeable-img"
                        onClick={() => setEnlargedImg(step.img)}
                      />
                      <span
                        className="corner-magnifier"
                        title="Enlarge image"
                        onClick={() => setEnlargedImg(step.img)}
                        style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                        aria-label="Enlarge image"
                      >
                        🔍
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : exp.key === 'video'
          ? exp.story && exp.story.map((step, idx) => {
              const stopColor = experienceColors[exp.key];
              const imgStyle = idx < 2
                ? {maxWidth: '600px', maxHeight: '320px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #50b4ff33, 0 0 0 2px #50b4ff22', margin: '0 0 0 32px', display: 'block'}
                : {maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #50b4ff33, 0 0 0 2px #50b4ff22', margin: '0 0 0 32px', display: 'block'};
              if (idx === 1) {
                // Swap image and text for the second frame and add more left margin to text
                return (
                  <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden', flexDirection: 'row-reverse', display: 'flex'}}> 
                    <AboutMeParticles numParticles={38} />
                    <div className="workexp-roadmap-dot-col">
                      <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                      <div className="workexp-roadmap-vert-line" />
                    </div>
                    <div className="workexp-roadmap-img-right-large" style={{marginLeft: 0, marginRight: '32px'}}>
                      <div style={{position: 'relative', display: 'inline-block'}}>
                        <img
                          src={step.img}
                          alt={step.title}
                          style={imgStyle}
                          className="enlargeable-img"
                          onClick={() => setEnlargedImg(step.img)}
                        />
                        <span
                          className="corner-magnifier"
                          title="Enlarge image"
                          onClick={() => setEnlargedImg(step.img)}
                          style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                          aria-label="Enlarge image"
                        >
                          🔍
                        </span>
                      </div>
                    </div>
                    <div className="workexp-roadmap-content-large" style={{marginLeft: '64px'}}>
                      <div style={{color: '#a9a9ff', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{step.date}</div>
                      <div className="workexp-roadmap-title-large" style={{marginBottom: 8}}>{step.title}</div>
                      <div style={{fontWeight: 600, color: '#bbaaff', fontSize: '1.1rem', marginBottom: 12}}>{step.subtitle}</div>
                      <div className="workexp-roadmap-desc-large" dangerouslySetInnerHTML={{__html: step.desc}} />
                    </div>
                  </div>
                );
              }
              // Default: image right, text left
              return (
                <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden'}}> 
                  <AboutMeParticles numParticles={38} />
                  <div className="workexp-roadmap-dot-col">
                    <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                    <div className="workexp-roadmap-vert-line" />
                  </div>
                  <div className="workexp-roadmap-content-large">
                    <div style={{color: '#a9a9ff', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{step.date}</div>
                    <div className="workexp-roadmap-title-large" style={{marginBottom: 8}}>{step.title}</div>
                    <div style={{fontWeight: 600, color: '#bbaaff', fontSize: '1.1rem', marginBottom: 12}}>{step.subtitle}</div>
                    {idx === 2
                      ? <div className="workexp-roadmap-desc-large" dangerouslySetInnerHTML={{__html: step.desc}} />
                      : <div className="workexp-roadmap-desc-large">{step.desc}</div>
                    }
                  </div>
                  <div className="workexp-roadmap-img-right-large">
                    <div style={{position: 'relative', display: 'inline-block'}}>
                      <img
                        src={step.img}
                        alt={step.title}
                        style={imgStyle}
                        className="enlargeable-img"
                        onClick={() => setEnlargedImg(step.img)}
                      />
                      <span
                        className="corner-magnifier"
                        title="Enlarge image"
                        onClick={() => setEnlargedImg(step.img)}
                        style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                        aria-label="Enlarge image"
                      >
                        🔍
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : exp.key === 'capcut'
          ? exp.story && exp.story.map((step, idx) => {
              const stopColor = experienceColors[exp.key];
              const imgStyle = idx < 2
                ? {maxWidth: '600px', maxHeight: '320px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #50b4ff33, 0 0 0 2px #50b4ff22', margin: '0 0 0 32px', display: 'block'}
                : {maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #50b4ff33, 0 0 0 2px #50b4ff22', margin: '0 0 0 32px', display: 'block'};
              if (idx === 1) {
                // Swap image and text for the second frame and add more left margin to text
                return (
                  <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden', flexDirection: 'row-reverse', display: 'flex'}}> 
                    <AboutMeParticles numParticles={38} />
                    <div className="workexp-roadmap-dot-col">
                      <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                      <div className="workexp-roadmap-vert-line" />
                    </div>
                    <div className="workexp-roadmap-img-right-large" style={{marginLeft: 0, marginRight: '32px'}}>
                      <div style={{position: 'relative', display: 'inline-block'}}>
                        <img
                          src={step.img}
                          alt={step.title}
                          style={imgStyle}
                          className="enlargeable-img"
                          onClick={() => setEnlargedImg(step.img)}
                        />
                        <span
                          className="corner-magnifier"
                          title="Enlarge image"
                          onClick={() => setEnlargedImg(step.img)}
                          style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                          aria-label="Enlarge image"
                        >
                          🔍
                        </span>
                      </div>
                    </div>
                    <div className="workexp-roadmap-content-large" style={{marginLeft: '64px'}}>
                      <div style={{color: '#a9a9ff', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{step.date}</div>
                      <div className="workexp-roadmap-title-large" style={{marginBottom: 8}}>{step.title}</div>
                      <div style={{fontWeight: 600, color: '#bbaaff', fontSize: '1.1rem', marginBottom: 12}}>{step.subtitle}</div>
                      <div className="workexp-roadmap-desc-large" dangerouslySetInnerHTML={{__html: step.desc}} />
                    </div>
                  </div>
                );
              }
              // Default: image right, text left
              return (
                <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden'}}> 
                  <AboutMeParticles numParticles={38} />
                  <div className="workexp-roadmap-dot-col">
                    <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                    <div className="workexp-roadmap-vert-line" />
                  </div>
                  <div className="workexp-roadmap-content-large">
                    <div style={{color: '#a9a9ff', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{step.date}</div>
                    <div className="workexp-roadmap-title-large" style={{marginBottom: 8}}>{step.title}</div>
                    <div style={{fontWeight: 600, color: '#bbaaff', fontSize: '1.1rem', marginBottom: 12}}>{step.subtitle}</div>
                    {idx === 2
                      ? <div className="workexp-roadmap-desc-large" dangerouslySetInnerHTML={{__html: step.desc}} />
                      : <div className="workexp-roadmap-desc-large">{step.desc}</div>
                    }
                  </div>
                  <div className="workexp-roadmap-img-right-large">
                    <div style={{position: 'relative', display: 'inline-block'}}>
                      <img
                        src={step.img}
                        alt={step.title}
                        style={imgStyle}
                        className="enlargeable-img"
                        onClick={() => setEnlargedImg(step.img)}
                      />
                      <span
                        className="corner-magnifier"
                        title="Enlarge image"
                        onClick={() => setEnlargedImg(step.img)}
                        style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                        aria-label="Enlarge image"
                      >
                        🔍
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : exp.story && exp.story.map((step, idx) => {
              const stopColor = experienceColors[exp.key];
              if (exp.key === 'restocker') {
                // First frame: miniMartImg right, text left, large image
                if (idx === 0) {
                  return (
                    <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden'}}> 
                      <AboutMeParticles numParticles={38} />
                      <div className="workexp-roadmap-dot-col">
                        <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                        {exp.story.length > 1 && <div className="workexp-roadmap-vert-line" />}
                      </div>
                      <div className="workexp-roadmap-content-large">
                        <div style={{color: '#a9a9ff', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>May 1, 2023</div>
                        <div className="workexp-roadmap-title-large" style={{marginBottom: 8}}>Inventory & Store Operations Assistant</div>
                        <div style={{fontWeight: 600, color: '#bbaaff', fontSize: '1.1rem', marginBottom: 12}}>🛒Hui Huat Yew Kai Mini Mart ~ 6 Months</div>
                        <div className="workexp-roadmap-desc-large">
                          At a busy neighborhood minimart, I played a key role in maintaining an inviting and efficient shopping environment by managing and restocking over 200 products daily. Thriving in this fast-paced role, I collaborated closely with staff to ensure smooth daily operations and a seamless customer experience 😊.
                        </div>
                      </div>
                      <div className="workexp-roadmap-img-right-large">
                        <div style={{position: 'relative', display: 'inline-block'}}>
                          <img
                            src={miniMartImg}
                            alt="Mini Mart"
                            style={{maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #7B61FF33, 0 0 0 2px #7B61FF22', margin: '0 0 0 32px', display: 'block'}}
                            className="enlargeable-img"
                            onClick={() => setEnlargedImg(miniMartImg)}
                          />
                          <span
                            className="corner-magnifier"
                            title="Enlarge image"
                            onClick={() => setEnlargedImg(miniMartImg)}
                            style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                            aria-label="Enlarge image"
                          >
                            🔍
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                // Second frame: inventory-screenshot.png left, text right
                if (idx === 1) {
                  return (
                    <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden'}}> 
                      <AboutMeParticles numParticles={38} />
                      <div className="workexp-roadmap-dot-col">
                        <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                        {exp.story.length > 1 && <div className="workexp-roadmap-vert-line" />}
                      </div>
                      <div className="workexp-roadmap-img-left-large">
                        <div style={{position: 'relative', display: 'inline-block'}}>
                          <img
                            src={process.env.PUBLIC_URL + "/img/inventory-screenshot.png"}
                            alt="Inventory Management"
                            style={{maxWidth: '500px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #7B61FF33, 0 0 0 2px #7B61FF22', margin: '0 32px 0 0', display: 'block'}}
                            className="enlargeable-img"
                            onClick={() => setEnlargedImg(process.env.PUBLIC_URL + "/img/inventory-screenshot.png")}
                          />
                          <span
                            className="corner-magnifier"
                            title="Enlarge image"
                            onClick={() => setEnlargedImg(process.env.PUBLIC_URL + "/img/inventory-screenshot.png")}
                            style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                            aria-label="Enlarge image"
                          >
                            🔍
                          </span>
                        </div>
                      </div>
                      <div className="workexp-roadmap-content-large">
                        <div style={{color: '#a9a9ff', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8}}>Core Skills Gained</div>
                        <div className="workexp-roadmap-desc-large">
                          <div>🎯 <b>Attention to Detail:</b> Managed 200+ products daily for clear, user-friendly layouts.</div>
                          <div>🤝 <b>Teamwork:</b> Boosted efficiency 20% by collaborating and streamlining restocking.</div>
                          <div>⚡ <b>Adaptability:</b> Thrived in a fast-paced setting, solving problems on the go.</div>
                          <div>🛒 <b>Layout & Usability:</b> Learned how product placement shapes user experience.</div>
                          <div>✨ Small details and clear communication make a big impact—this mindset drives my UX work today.</div>
                        </div>
                      </div>
                    </div>
                  );
                }
                // Third frame: inventory-management-3rdframe.png right, text left
                if (idx === 2) {
                  return (
                    <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step with-img-large full-width${inViews[idx] ? ' animate' : ''}`} style={{position: 'relative', overflow: 'hidden'}}> 
                      <AboutMeParticles numParticles={38} />
                      <div className="workexp-roadmap-dot-col">
                        <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                        {exp.story.length > 1 && <div className="workexp-roadmap-vert-line" />}
                      </div>
                      <div className="workexp-roadmap-content-large">
                        <div style={{color: '#a9a9ff', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8}}>UX Mindset & Next Steps</div>
                        <div className="workexp-roadmap-desc-large">
                          <div><b>Let’s Design Meaningful Experiences Together</b></div>
                          <div>My time at Hui Huat Yew Kai Mini Mart taught me to see through users’ eyes and create intuitive, people-first designs.</div>
                          <div style={{marginTop: 8}}>💬 Looking for a UX designer who cares about real people and real impact? Let’s connect!</div>
                        </div>
                      </div>
                      <div className="workexp-roadmap-img-right-large">
                        <div style={{position: 'relative', display: 'inline-block'}}>
                          <img
                            src={process.env.PUBLIC_URL + "/img/inventory-management-3rdframe.png"}
                            alt="Inventory Management 3rd Frame"
                            style={{maxWidth: '500px', width: '100%', height: 'auto', borderRadius: '18px', boxShadow: '0 8px 48px #7B61FF33, 0 0 0 2px #7B61FF22', margin: '0 0 0 32px', display: 'block'}}
                            className="enlargeable-img"
                            onClick={() => setEnlargedImg(process.env.PUBLIC_URL + "/img/inventory-management-3rdframe.png")}
                          />
                          <span
                            className="corner-magnifier"
                            title="Enlarge image"
                            onClick={() => setEnlargedImg(process.env.PUBLIC_URL + "/img/inventory-management-3rdframe.png")}
                            style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                            aria-label="Enlarge image"
                          >
                            🔍
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                // For any additional steps, fallback to default layout
                return (
                  <div key={idx} ref={roadmapRefs.current[idx]} className={`workexp-roadmap-step roadmap-stop${inViews[idx] ? ' animate' : ''}`}> 
                    <div className="workexp-roadmap-dot-col">
                      <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                      {idx < exp.story.length - 1 && <div className="workexp-roadmap-vert-line" />}
                    </div>
                    <div className="workexp-roadmap-content">
                      <div className="workexp-roadmap-title">{step.title}</div>
                      <div className="workexp-roadmap-desc">{step.desc}</div>
                    </div>
                  </div>
                );
              }
              // Color stops for roadmap
              return (
                <React.Fragment key={idx}>
                  <div
                    ref={roadmapRefs.current[idx]}
                    className={`workexp-roadmap-step roadmap-stop${inViews[idx] ? ' animate' : ''}`}
                  >
                    <div className="workexp-roadmap-dot-col">
                      <div className="workexp-roadmap-dot" style={{ background: stopColor, boxShadow: `0 0 16px 4px ${stopColor}88` }} />
                      {idx < exp.story.length - 1 && <div className="workexp-roadmap-vert-line" />}
                    </div>
                    <div className="workexp-roadmap-content">
                      <div className="workexp-roadmap-title">{step.title}</div>
                      <div className="workexp-roadmap-desc">{step.desc}</div>
                    </div>
                  </div>
                  {/* Show the screenshot image after the second step for restocker */}
                  {exp.key === 'restocker' && idx === 1 && (
                    <div className="workexp-roadmap-img-screenshot">
                      <div style={{position: 'relative', display: 'inline-block'}}>
                        <img
                          src={process.env.PUBLIC_URL + "/img/inventory-screenshot.png"}
                          alt="Inventory Role Screenshot"
                          style={{maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '12px', margin: '24px auto', boxShadow: '0 4px 32px #7B61FF33', display: 'block'}}
                          className="enlargeable-img"
                          onClick={() => setEnlargedImg(process.env.PUBLIC_URL + "/img/inventory-screenshot.png")}
                        />
                        <span
                          className="corner-magnifier"
                          title="Enlarge image"
                          onClick={() => setEnlargedImg(process.env.PUBLIC_URL + "/img/inventory-screenshot.png")}
                          style={{position: 'absolute', top: 12, right: 12, background: 'rgba(30,30,50,0.85)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', boxShadow: '0 2px 8px #0008', cursor: 'zoom-in', zIndex: 2, border: '2px solid #fff'}}
                          aria-label="Enlarge image"
                        >
                          🔍
                        </span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
      </div>
      {enlargedImg && (
        <div className="enlarge-modal-overlay" onClick={() => setEnlargedImg(null)}>
          <div className="enlarge-modal" onClick={e => e.stopPropagation()}>
            <button className="enlarge-modal-close" onClick={() => setEnlargedImg(null)}>&times;</button>
            <img src={enlargedImg} alt="Enlarged work experience" className="enlarge-modal-img" />
          </div>
        </div>
      )}
      <style>{`
        .workexp-tabs-section {
          position: relative;
          padding: 32px 0 40px 0;
          background: transparent;
          z-index: 1;
        }
        .workexp-tabs-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(ellipse at 60% 0%, #7B61FF22 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, #fff2 0%, transparent 80%);
          z-index: 0;
        }
        .workexp-tabs-title {
          font-size: 2.2rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 1.2rem;
          margin-top: 0;
          letter-spacing: 1.2px;
          color: #fff;
          text-shadow: 0 2px 24px #7B61FF44, 0 1px 2px #000a;
        }
        .workexp-tabs-row {
          display: flex;
          gap: 2.2rem;
          justify-content: center;
          align-items: stretch;
          margin-bottom: 2.7rem;
          flex-wrap: wrap;
        }
        .workexp-tab-card {
          background: rgba(30, 30, 50, 0.82);
          border-radius: 18px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22, 0 0 32px 2px #fff2 inset;
          padding: 2.1rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1.5px solid #7B61FF44;
          backdrop-filter: blur(6px);
          min-width: 180px;
          max-width: 220px;
          flex: 1 1 180px;
          cursor: pointer;
          transition: box-shadow 0.3s, border 0.3s, background 0.3s;
          outline: none;
          position: relative;
        }
        .workexp-tab-card.selected,
        .workexp-tab-card:focus {
          box-shadow: 0 8px 48px #7B61FF88, 0 0 0 2px #7B61FF44;
          border: 2.5px solid #fff;
          background: rgba(60, 40, 100, 0.92);
        }
        .workexp-tab-icon {
          font-size: 2.5rem;
          margin-bottom: 0.7rem;
          filter: drop-shadow(0 0 8px #7B61FF88);
        }
        .workexp-tab-title {
          font-size: 1.13rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.3rem;
        }
        .workexp-tab-subtitle {
          font-size: 0.98rem;
          color: #bbaaff;
          text-align: center;
        }
        .workexp-tab-details {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 120px;
        }
        .workexp-tab-details-inner {
          background: rgba(30, 30, 50, 0.92);
          border-radius: 22px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22, 0 0 32px 2px #fff2 inset;
          padding: 2.3rem 2.2rem 1.7rem 2.2rem;
          min-width: 320px;
          max-width: 520px;
          width: 100%;
          border: 1.5px solid #7B61FF44;
          backdrop-filter: blur(6px);
          color: #fff;
          text-align: center;
        }
        .workexp-tab-details-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .workexp-tab-details-subtitle {
          font-size: 1.08rem;
          color: #bbaaff;
          margin-bottom: 1.1rem;
        }
        .workexp-tab-details-desc {
          font-size: 1.04rem;
          color: #e0e0e0;
        }
        .workexp-roadmap {
          margin: 48px auto 0 auto;
          max-width: 1700px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .workexp-roadmap-step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 36px;
          opacity: 0.3;
          transform: translateY(40px) scale(0.98);
          transition: all 0.7s cubic-bezier(.6,1.5,.5,1.1);
          position: relative;
        }
        .workexp-roadmap-step.animate {
          opacity: 1;
          transform: translateY(0) scale(1.03);
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22;
          background: rgba(60, 40, 100, 0.18);
          border-radius: 18px;
        }
        .workexp-roadmap-icon {
          font-size: 2.1rem;
          margin-right: 18px;
          margin-top: 2px;
          filter: drop-shadow(0 0 8px #7B61FF88);
          transition: filter 0.4s;
        }
        .workexp-roadmap-step.animate .workexp-roadmap-icon {
          filter: drop-shadow(0 0 16px #fff) drop-shadow(0 0 24px #7B61FF);
        }
        .workexp-roadmap-content {
          flex: 1;
        }
        .workexp-roadmap-title {
          font-size: 1.13rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.2rem;
        }
        .workexp-roadmap-desc {
          font-size: 1.01rem;
          color: #e0e0e0;
        }
        .workexp-roadmap-line {
          position: absolute;
          left: 18px;
          top: 38px;
          width: 3px;
          height: 36px;
          background: linear-gradient(to bottom, #7B61FF 0%, #fff0 100%);
          border-radius: 2px;
          z-index: 0;
          animation: roadmap-line-grow 0.7s cubic-bezier(.6,1.5,.5,1.1);
        }
        @keyframes roadmap-line-grow {
          from { height: 0; opacity: 0.2; }
          to { height: 36px; opacity: 1; }
        }
        .workexp-details-img-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }
        .workexp-details-img-left {
          flex: 1 1 340px;
          min-width: 260px;
          max-width: 480px;
        }
        .workexp-details-img-right {
          flex: 1 1 340px;
          min-width: 260px;
          max-width: 480px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .workexp-details-img {
          width: 100%;
          max-width: 420px;
          border-radius: 18px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22;
          object-fit: cover;
        }
        .workexp-roadmap-step.with-img {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
        }
        .workexp-roadmap-content {
          flex: 1 1 320px;
        }
        .workexp-roadmap-img-right {
          flex: 1 1 220px;
          min-width: 180px;
          max-width: 320px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          margin-left: 2.2rem;
        }
        .workexp-roadmap-img {
          width: 100%;
          max-width: 260px;
          border-radius: 14px;
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22;
          object-fit: cover;
        }
        .workexp-roadmap-step.with-img-large {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          background: rgba(60, 40, 100, 0.18);
          border-radius: 22px;
          box-shadow: 0 8px 48px #7B61FF33, 0 0 0 2px #7B61FF22;
          margin-bottom: 48px;
          padding: 2.5rem 2.5rem 2.5rem 2.5rem;
          min-height: 340px;
        }
        .workexp-roadmap-content-large {
          flex: 1 1 420px;
          min-width: 320px;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .workexp-roadmap-title-large {
          font-size: 2.1rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 1.1rem;
          text-shadow: 0 2px 24px #7B61FF22, 0 1px 2px #000a;
        }
        .workexp-roadmap-subtitle-large {
          font-size: 1.25rem;
          color: #bbaaff;
          margin-bottom: 1.2rem;
          font-weight: 600;
        }
        .workexp-roadmap-desc-large {
          font-size: 1.18rem;
          color: #e0e0e0;
          line-height: 1.7;
        }
        .workexp-roadmap-img-right-large {
          flex: 1 1 520px;
          min-width: 320px;
          max-width: 700px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-left: 2.5rem;
        }
        .workexp-roadmap-img-large {
          width: 100%;
          max-width: 600px;
          max-height: 600px;
          border-radius: 18px;
          box-shadow: 0 8px 48px #7B61FF33, 0 0 0 2px #7B61FF22;
          object-fit: cover;
        }
        .workexp-roadmap-step.with-img-large.full-width {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: rgba(60, 40, 100, 0.18);
          border-radius: 28px;
          box-shadow: 0 8px 48px #7B61FF33, 0 0 0 2px #7B61FF22;
          margin-bottom: 56px;
          padding: 3.5rem 2rem 3.5rem 2rem;
          min-height: 480px;
          gap: 3.5rem;
        }
        .workexp-roadmap-step.roadmap-stop {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .workexp-roadmap-step {
          box-sizing: border-box;
        }
        .workexp-roadmap-content-large {
          flex: 1 1 600px;
          min-width: 340px;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 2.5rem;
        }
        .workexp-roadmap-title-large {
          font-size: 2.3rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 1.1rem;
          text-shadow: 0 2px 24px #7B61FF22, 0 1px 2px #000a;
        }
        .workexp-roadmap-subtitle-large {
          font-size: 1.35rem;
          color: #bbaaff;
          margin-bottom: 1.2rem;
          font-weight: 600;
        }
        .workexp-roadmap-desc-large {
          font-size: 1.22rem;
          color: #e0e0e0;
          line-height: 1.8;
        }
        .workexp-roadmap-img-right-large {
          flex: 1 1 700px;
          min-width: 340px;
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
        }
        .workexp-roadmap-img-large {
          width: 100%;
          height: 100%;
          max-width: 700px;
          max-height: none;
          border-radius: 22px;
          box-shadow: 0 8px 48px #7B61FF33, 0 0 0 2px #7B61FF22;
          object-fit: cover;
        }
        .workexp-roadmap-dot-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          margin-right: 2.2rem;
        }
        .workexp-roadmap-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 4px solid #fff;
          margin-bottom: 0.2rem;
          transition: box-shadow 0.3s;
        }
        .workexp-roadmap-vert-line {
          width: 6px;
          height: 100%;
          min-height: 60px;
          background: linear-gradient(to bottom, #7B61FF33 0%, #fff0 100%);
          border-radius: 3px;
          margin-top: 0.2rem;
        }
        .roadmap-stop {
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: flex-start;
          margin-bottom: 36px;
          opacity: 0.3;
          transform: translateY(40px) scale(0.98);
          transition: all 0.7s cubic-bezier(.6,1.5,.5,1.1);
          position: relative;
        }
        .roadmap-stop.animate {
          opacity: 1;
          transform: translateY(0) scale(1.03);
          box-shadow: 0 4px 32px #7B61FF33, 0 0 0 2px #7B61FF22;
          background: rgba(60, 40, 100, 0.18);
          border-radius: 18px;
        }
        @media (max-width: 1400px) {
          .workexp-roadmap-step.with-img-large.full-width {
            max-width: 99vw;
            padding: 2rem 1rem 2rem 1rem;
            gap: 1.5rem;
          }
          .workexp-roadmap-content-large {
            padding-right: 1rem;
          }
          .workexp-roadmap-step.roadmap-stop {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        @media (max-width: 900px) {
          .workexp-roadmap-step.with-img-large.full-width {
            flex-direction: column;
            align-items: stretch;
            padding: 1.2rem 0.5rem 1.2rem 0.5rem;
            min-height: unset;
            gap: 1.2rem;
          }
          .workexp-roadmap-step.roadmap-stop {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .workexp-roadmap-img-right-large {
            margin-left: 0;
            margin-top: 1.5rem;
            max-width: 100%;
            height: auto;
          }
          .workexp-roadmap-img-large {
            max-width: 100%;
            height: auto;
          }
          .workexp-roadmap-content-large {
            padding-right: 0;
          }
          .roadmap-stop {
            max-width: 100%;
            flex-direction: column;
            align-items: stretch;
          }
        }
        .corner-magnifier {
          transition: background 0.2s, box-shadow 0.2s;
        }
        .corner-magnifier:hover {
          background: #7B61FF;
          color: #fff;
          box-shadow: 0 0 12px #7B61FF, 0 2px 8px #0008;
        }
        .enlargeable-img {
          cursor: zoom-in;
          transition: transform 0.3s ease-in-out;
        }
        .enlargeable-img:hover {
          transform: scale(1.05);
        }
        .enlarge-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .enlarge-modal {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .enlarge-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 2.5rem;
          color: #fff;
          cursor: pointer;
          z-index: 11;
          transition: color 0.3s;
        }
        .enlarge-modal-close:hover {
          color: #7B61FF;
        }
        .enlarge-modal-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
} 