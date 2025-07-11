import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import deepsyncLogo from "../assets/img/deepsync-app-logo.png";
import deepsyncMockup from "../assets/img/deepsync-appstore-mockup.png";
import deepsyncPhone from "../assets/img/deepsync-phone.png";
import miniMart from "../assets/img/mini-mart.png";
import { useState, useEffect } from "react";
import AboutMeParticles from "./AboutMeParticles";
import placeholderImg from '../assets/img/project-img1.png';

export const Projects = () => {

  const showcaseProjects = [
    {
      key: 'deepsync',
      title: "DeepSync",
      imgUrl: deepsyncMockup,
      icon: "🧠",
    },
    {
      key: 'savour',
      title: "Savour",
      imgUrl: require('../assets/img/savour-shop-image.png'),
      icon: "🌱",
    },
    {
      key: 'axify',
      title: "Axify",
      imgUrl: require('../assets/img/savour-main-image.png'),
      icon: "🤖",
    },
    {
      key: 'velvetvet',
      title: "Velvet Oasis",
      imgUrl: require('../assets/img/velvet-oasis-main-image.png'),
      icon: "✨",
    },
  ];

  const [selectedProject, setSelectedProject] = useState('all');
  const [expandedImg, setExpandedImg] = useState(null);

  const filteredProjects = selectedProject === 'all' 
    ? showcaseProjects 
    : showcaseProjects.filter(project => project.key === selectedProject);

  // Project introduction lines
  const projectIntros = {
    deepsync: {
      title: 'Introducing DeepSync',
      subtitle: '🚀 AI-Powered Student Productivity Tool Startup Idea 🚀',
      desc: 'Designed an AI-powered productivity solution that instantly generates personalized timetables, smart study schedules, and automatic test reminders—seamlessly tailored to fit each student’s unique schedule and help them stay on track effortlessly.'
    },
    savour: {
      title: 'Introducing Savour',
      subtitle: '♻️ Building a Sustainable E-Commerce Platform ♻️',
      desc: 'Designed a one-stop e-commerce solution promoting sustainability by reducing waste from unsold and imperfect products, especially in supermarkets and convenience stores.'
    },
    axify: {
      title: 'Introducing Axify',
      subtitle: '🤖 Building Axify: An AI Marketplace Solution 🤖',
      desc: 'Designed an AI-powered marketplace that seamlessly connects buyers and sellers, enabling smart, efficient, and meaningful transactions in real time.'
    },
    velvetvet: {
      title: 'Introducing Velvet Oasis',
      subtitle: '💎 Velvet Oasis: A Luxury Hotel Resort Experience 💎',
      desc: 'Designed a premium hotel resort experience tailored for families and couples seeking a luxurious, relaxing, and unforgettable getaway.'
    }
  };

  // Combined project design + showcase lines
  const projectDesignShowcase = {
    deepsync: {
      color: '#B266FF',
      title: '💜 Designed 25+ Modern Figma ✨ Mockups for Students ✨',
      desc1: 'Created 25+ Figma mockups focused on intuitive navigation, clean aesthetics, and user-friendly layouts for students.',
      desc2: 'Showcased: Home, Login, Membership Cards, Timetable Generator, Research, and Project Planner—each crafted for a seamless student experience.'
    },
    savour: {
      color: '#50E3C2',
      title: '💚 Designed 15+ Modern Wireframes for E-Commerce 💚',
      desc1: 'Built 15+ wireframes with intuitive shopping flows and user-friendly interactions for a sustainable e-commerce platform.',
      desc2: 'Showcased: Product listings, search/filter, and error prevention—ensuring smooth, confident user journeys.'
    },
    axify: {
      color: '#FF69B4',
      title: '💜 Designed 50+ Desktop Mockups for the AI Marketplace Solution 💜',
      desc1: 'Designed 50+ desktop mockups with streamlined buyer-seller flows, real-time communication, and multilingual interfaces.',
      desc2: 'Showcased: Cart/payment flows, booking systems, and interactive buyer-seller communication.'
    },
    velvetvet: {
      color: '#FFD600',
      title: '💛 Designed 40+ Desktop Mockups for the Hotel Resort Website 💛',
      desc1: 'Created 40+ desktop mockups for a hotel resort, focusing on elegant layouts, intuitive booking, and a luxury experience.',
      desc2: 'Showcased: Home, About, Facilities, Rooms, Checkout—plus engaging visuals and clear CTAs for seamless booking.'
    }
  };

  const projectWhatYouSee = {
    deepsync: {
      title: 'Designed 25+ Modern Figma ✨ Mockups for Students ✨',
      desc: 'Created 25+ Figma mockups for students, emphasizing intuitive navigation and clean, user-friendly layouts.',
      showcaseTitle: '💜 Mockup Showcase 💜',
      showcaseDesc: 'Home, Login, Membership Cards, Timetable Generator, Research, and Project Planner.'
    },
    savour: {
      title: '✨ Designed 15+ Modern ✨ Wireframes for E-Commerce',
      desc: 'Built 15+ wireframes for a sustainable e-commerce platform, focusing on smooth shopping flows and user clarity.',
      showcaseTitle: '💚 Mockup Showcase 💚',
      showcaseDesc: 'Product listings, search/filter, and error prevention features.'
    },
    axify: {
      title: '✨ Designed 50+ Desktop Mockups for the AI Marketplace Solution',
      desc: 'Designed 50+ desktop mockups for an AI marketplace with seamless buyer-seller flows and real-time communication.',
      showcaseTitle: '💜 Mockup Showcase 💜',
      showcaseDesc: 'Cart/payment flows, booking systems, and interactive communication platform.'
    },
    velvetvet: {
      title: '✨ Designed 40+ Desktop Mockups for the Hotel Resort Website',
      desc: 'Created 40+ desktop mockups for a hotel resort, focusing on elegant layouts and intuitive booking.',
      showcaseTitle: '💛 Mockup Showcase 💛',
      showcaseDesc: 'Home, About, Facilities, Rooms, Checkout, and engaging visuals for booking.'
    }
  };

  // Project timeline/roadmap for DeepSync (with images, no date)
  const projectStories = {
    deepsync: [
      {
        title: 'DeepSync\'s Home Page & Login',
        subtitle: 'Clean & Welcoming Entry Point',
        desc: 'The DeepSync HomePage and Login were designed to provide a clean, welcoming entry point with intuitive navigation and seamless user access. Features a modern, student-friendly interface with easy onboarding and secure authentication.',
        img: require('../assets/img/deepsync-home-login.png'),
        glowColor: '#B266FF' // purple
      },
      {
        title: 'Quick Search Feature',
        subtitle: 'Instant Timetable Generation',
        desc: 'Allows students to quickly generate a timetable in seconds. This streamlined feature provides immediate scheduling solutions with minimal input, perfect for students who need fast, efficient timetable creation.',
        img: require('../assets/img/deepsync-timetable-quick.png'),
        glowColor: '#50E3C2' // green
      },
      {
        title: 'Deep Search Feature',
        subtitle: 'AI-Powered Custom Study Plans',
        desc: 'To gather data from user for AI generate a custom made study plan. This advanced feature analyzes student preferences, learning patterns, and academic goals to create personalized study schedules that maximize productivity and learning outcomes.',
        img: require('../assets/img/deepsync-timetable-deep.png'),
        glowColor: '#4A90E2' // blue
      },
      {
        title: 'DeepSync\'s Membership Cards',
        subtitle: 'Three-Tier Premium System',
        desc: 'DeepSync membership cards feature three tiers—Silver, Gold, and Diamond—designed to clearly communicate user status and unlock tailored benefits. Each tier offers progressively enhanced features, exclusive content, and personalized support.',
        img: require('../assets/img/deepsync-membership-cards.png'),
        glowColor: '#FF69B4' // pink
      },
      {
        title: 'Task Notification System',
        subtitle: 'Smart Deadline Reminders',
        desc: 'Sends tests & assignment datelines reminders. This intelligent notification system ensures students never miss important deadlines, with customizable alerts and smart scheduling that adapts to individual study patterns.',
        img: require('../assets/img/deepsync-task-notification.png'),
        glowColor: '#FFD600' // yellow
      },
      {
        title: 'Project & Research Planner',
        subtitle: 'Collaborative Learning Platform',
        desc: 'Enables effective collaboration with group members. Designed an integrated planner that organizes tasks, projects, and research with timely notifications to keep users on track. Perfect for group assignments and research projects.',
        img: require('../assets/img/deepsync-project-planner.png'),
        glowColor: '#7B61FF' // deep purple
      }
    ],
    savour: [
      {
        title: 'Savour\'s Product Promotion & Discount Page',
        subtitle: 'Clean & User-Friendly Layout',
        desc: 'Showcases a clean, user-friendly layout for browsing products and discovering discounts, designed to enhance shopping efficiency and engagement. Features intuitive navigation and clear product presentation.',
        img: require('../assets/img/savour-screenshot-1.png'),
        glowColor: '#50E3C2'
      },
      {
        title: 'Search Filter & Search Bar',
        subtitle: 'Intuitive Product Discovery',
        desc: 'Designed an intuitive search bar and filtering system to help users quickly find and refine products with ease and precision. Features advanced search capabilities and smart filtering options.',
        img: require('../assets/img/savour-screenshot-2.png'),
        glowColor: '#50E3C2'
      },
      {
        title: 'Search by Filter',
        subtitle: 'Smart Filtering System',
        desc: 'Filter food products based on selected filters. Implemented comprehensive filtering options that allow users to narrow down products by category, dietary preferences, sustainability ratings, and more.',
        img: require('../assets/img/savour-screenshot-3.png'),
        glowColor: '#50E3C2'
      },
      {
        title: 'Search by Search Bar',
        subtitle: 'Precise Product Search',
        desc: 'Search for specific or related food products. Designed an intelligent search system with autocomplete, suggestions, and semantic search capabilities to help users find exactly what they need.',
        img: require('../assets/img/savour-screenshot-4.png'),
        glowColor: '#50E3C2'
      },
      {
        title: 'Error Prevention & User Guidance',
        subtitle: 'Seamless UX/UI Experience',
        desc: 'Implemented intelligent error prevention features and user guidance systems that create a seamless UX/UI experience. Features include real-time validation, helpful error messages, smart form completion, and contextual help that prevents user frustration and guides users through complex processes with confidence.',
        img: require('../assets/img/savour-error-prevention.png'),
        glowColor: '#50E3C2'
      }
    ],
    axify: [
      {
        title: 'Axify\'s Face-to-Face Communication',
        subtitle: 'Real-Time Buyer-Seller Interactions',
        desc: 'Designed an intuitive face-to-face communication interface with seamless video call integration to enable real-time, meaningful buyer-seller interactions.',
        img: require('../assets/img/axify-screenshot-1.png'),
        glowColor: '#FF69B4'
      },
      {
        title: 'Axify\'s Meeting Rooms',
        subtitle: 'Virtual Collaboration Spaces',
        desc: 'Designed virtual meeting rooms for face-to-face communication, enabling seamless video calls and real-time collaboration between buyers and sellers within the marketplace.',
        img: require('../assets/img/axify-screenshot-2.png'),
        glowColor: '#FF69B4'
      },
      {
        title: 'Live Meeting Interface',
        subtitle: 'Screen Sharing & Chat',
        desc: 'Able to share screens & chat effortlessly. Features real-time collaboration tools that enhance communication and productivity during buyer-seller meetings.',
        img: require('../assets/img/axify-screenshot-3.png'),
        glowColor: '#FF69B4'
      },
      {
        title: 'Meeting Room Interface',
        subtitle: 'Joining & Waiting Rooms',
        desc: 'Joining meeting rooms & waiting rooms. Designed intuitive interfaces for seamless meeting entry and organized waiting experiences.',
        img: require('../assets/img/axify-screenshot-4.png'),
        glowColor: '#FF69B4'
      },
      {
        title: 'Axify\'s Meeting Booking & Live Communication',
        subtitle: 'Seamless Timeslot Booking',
        desc: 'Designed a seamless meeting timeslot booking system with integrated live communication for efficient, real-time buyer-seller interactions.',
        img: require('../assets/img/axify-screenshot-5.png'),
        glowColor: '#FF69B4'
      },
      {
        title: 'Axify\'s Multilanguage Communication',
        subtitle: 'Global Communication Bridge',
        desc: 'Designed Axify\'s multilingual communication feature to enable seamless, real-time interactions between buyers and sellers across different languages.',
        img: require('../assets/img/axify-screenshot-6.png'),
        glowColor: '#FF69B4'
      }
    ],
    velvetvet: [
      {
        title: 'Velvet Oasis\'s Home Page',
        subtitle: 'Engaging Visuals & Clear CTAs',
        desc: 'Designed Velvet Oasis\'s homepage with engaging visuals and clear call-to-actions, highlighting room options to guide users seamlessly toward booking.',
        img: require('../assets/img/velvet-oasis-screenshot-1.png'),
        glowColor: '#FFD600'
      },
      {
        title: 'Velvet Oasis\'s Home Page Deals & Offerings',
        subtitle: 'Exclusive Packages & Promotions',
        desc: 'Designed Velvet Oasis\'s homepage section for deals and offerings, showcasing exclusive packages and promotions to attract and convert potential guests.',
        img: require('../assets/img/velvet-oasis-screenshot-2.png'),
        glowColor: '#FFD600'
      },
      {
        title: 'Promotional Deals',
        subtitle: 'Event Promotional & Loyalty Deals',
        desc: 'Event Promotional & loyalty deals. Designed comprehensive promotional strategies to enhance guest engagement and encourage repeat visits.',
        img: require('../assets/img/velvet-oasis-screenshot-3.png'),
        glowColor: '#FFD600'
      },
      {
        title: 'Hotel\'s Offerings',
        subtitle: 'Exclusive Accommodations',
        desc: 'Exclusive accommodations for guest stay. Crafted unique and luxurious accommodation options that provide exceptional experiences for all types of guests.',
        img: require('../assets/img/velvet-oasis-screenshot-4.png'),
        glowColor: '#FFD600'
      },
      {
        title: 'Velvet Oasis\'s Hotel Rooms',
        subtitle: 'Elegant Layouts & Detailed Visuals',
        desc: 'Designed Velvet Oasis\'s hotel rooms page with elegant layouts and detailed visuals to showcase room types, features, and pricing for easy comparison and booking.',
        img: require('../assets/img/velvet-oasis-screenshot-5.png'),
        glowColor: '#FFD600'
      },
      {
        title: 'Velvet Oasis\'s Hotel Room Descriptions',
        subtitle: 'Clear & Enticing Room Showcase',
        desc: 'Crafted clear and enticing hotel room descriptions for Velvet Oasis, highlighting unique features, amenities, and experiences to help guests choose their ideal stay.',
        img: require('../assets/img/velvet-oasis-screenshot-6.png'),
        glowColor: '#FFD600'
      }
    ]
  };

  const [cloudIntensity, setCloudIntensity] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    setCloudIntensity(1);
  }, 100);
  return () => clearTimeout(timer);
}, []);

return (
  <section className="project" id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(ellipse at center, rgba(123, 97, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
      pointerEvents: 'none',
      zIndex: 1,
      opacity: cloudIntensity,
      transition: 'opacity 2s ease-in-out'
    }} />
    <AboutMeParticles particleColors={["rgba(123,97,255,0.7)", "rgba(255,255,255,0.8)", "rgba(123,97,255,0.4)", "rgba(255,255,255,0.5)"]} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}} />
    <Container>
      <Row>
        <Col size={12}>
          <h2 className="galaxy-title">🚀 Project Showcase</h2>
          <div className="project-cards-select">
            <div className="project-card-select-row project-card-select-all-row">
              <div 
                className={`project-card-select project-card-select-all${selectedProject === 'all' ? ' selected' : ''}`}
                onClick={() => setSelectedProject('all')}
              >
                <span className="project-card-select-title">All Projects</span>
              </div>
            </div>
            <div className="project-card-select-row">
              {showcaseProjects.map(project => (
                <div 
                  key={project.key}
                  className={`project-card-select${selectedProject === project.key ? ' selected' : ''}`}
                  onClick={() => setSelectedProject(project.key)}
                >
                  <span className="project-card-select-icon">{project.icon}</span>
                  <span className="project-card-select-title">{project.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Remove project intro and design/showcase sections */}
          <div className="galaxy-projects-grid">
            {filteredProjects.map((project, idx) => (
              <div className="galaxy-project-card" key={idx}>
                {/* Project Intro Section */}
                {projectIntros[project.key] && (
                  <div
                    className="project-intro galaxy-project-intro"
                    style={{
                      border: `3px solid ${
                        project.key === 'savour' ? '#50E3C2' :
                        project.key === 'axify' ? '#FF69B4' :
                        project.key === 'velvetvet' ? '#FFD600' :
                        '#B266FF'
                      }`,
                      boxShadow: `0 0 32px ${
                        project.key === 'savour' ? '#50E3C288' :
                        project.key === 'axify' ? '#FF69B488' :
                        project.key === 'velvetvet' ? '#FFD60088' :
                        '#B266FF88'
                      }`,
                      background: `linear-gradient(120deg, ${
                        project.key === 'savour' ? 'rgba(80,227,194,0.13)' :
                        project.key === 'axify' ? 'rgba(255,105,180,0.13)' :
                        project.key === 'velvetvet' ? 'rgba(255,214,0,0.13)' :
                        'rgba(178,102,255,0.13)'
                      } 60%, rgba(255,255,255,0.07) 100%)`,
                      color: '#fff',
                      borderRadius: '28px',
                      marginBottom: '24px',
                      marginTop: '0',
                      textShadow: `0 0 16px ${
                        project.key === 'savour' ? '#50E3C2' :
                        project.key === 'axify' ? '#FF69B4' :
                        project.key === 'velvetvet' ? '#FFD600' :
                        '#B266FF'
                      }44, 0 0 24px #fff8`
                    }}
                  >
                    <h3
                      className="project-intro-title"
                      style={{
                        color: project.key === 'savour' ? '#50E3C2' :
                               project.key === 'axify' ? '#FF69B4' :
                               project.key === 'velvetvet' ? '#FFD600' :
                               '#B266FF',
                        textShadow: `0 0 16px ${
                          project.key === 'savour' ? '#50E3C2' :
                          project.key === 'axify' ? '#FF69B4' :
                          project.key === 'velvetvet' ? '#FFD600' :
                          '#B266FF'
                        }88, 0 0 24px #fff8`
                      }}
                    >
                      {projectIntros[project.key].title}
                    </h3>
                    <div
                      className="project-intro-subtitle"
                      style={{
                        color: project.key === 'savour' ? '#50E3C2' :
                               project.key === 'axify' ? '#FF69B4' :
                               project.key === 'velvetvet' ? '#FFD600' :
                               '#B266FF',
                        textShadow: `0 0 12px ${
                          project.key === 'savour' ? '#50E3C2' :
                          project.key === 'axify' ? '#FF69B4' :
                          project.key === 'velvetvet' ? '#FFD600' :
                          '#B266FF'
                        }88`
                      }}
                    >
                      {projectIntros[project.key].subtitle}
                    </div>
                    <div className="project-intro-desc">{projectIntros[project.key].desc}</div>
                  </div>
                )}
                <div className="galaxy-project-img-frame">
                  <img src={project.imgUrl} alt={project.title} className="galaxy-project-img" />
                </div>
                {/* What You're Looking At Section */}
                {projectWhatYouSee[project.key] && (
                  <div
                    className="project-what-you-see-section"
                    style={{
                      border: `2.5px solid ${
                        project.key === 'savour' ? '#50E3C2' :
                        project.key === 'axify' ? '#FF69B4' :
                        project.key === 'velvetvet' ? '#FFD600' :
                        '#B266FF'
                      }`,
                      boxShadow: `0 0 32px 0 #7B61FFcc, 0 0 0 8px #4A90E2cc`,
                      background: 'radial-gradient(ellipse at 60% 0%, #1a1033 0%, #18102a 100%)',
                      color: '#fff',
                      borderRadius: '32px',
                      margin: '18px 0 18px 0',
                      padding: '32px 24px 24px 24px',
                      textAlign: 'center',
                      fontSize: '1.08rem',
                      fontWeight: 500,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 2
                    }}
                  >
                    <AboutMeParticles numParticles={36} particleColors={['#fff', '#B266FF', '#7B61FF', 'rgba(255,255,255,0.7)', 'rgba(178,102,255,0.7)']} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}} />
                    <div style={{position: 'relative', zIndex: 1}}>
                      <div style={{fontWeight: 800, fontSize: '1.13rem', marginBottom: 6, color: project.key === 'savour' ? '#50E3C2' : project.key === 'axify' ? '#FF69B4' : project.key === 'velvetvet' ? '#FFD600' : '#B266FF'}}>{projectWhatYouSee[project.key].title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</div>
                      <div style={{marginBottom: 10}}>{projectWhatYouSee[project.key].desc}</div>
                      <div style={{fontWeight: 800, fontSize: '1.13rem', marginBottom: 6, color: project.key === 'savour' ? '#50E3C2' : project.key === 'axify' ? '#FF69B4' : project.key === 'velvetvet' ? '#FFD600' : '#B266FF'}}>{projectWhatYouSee[project.key].showcaseTitle.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</div>
                      <div>{projectWhatYouSee[project.key].showcaseDesc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</div>
                        <div className="project-designshowcase-line-desc">{projectDesignShowcase[project.key].desc1}</div>
                        <div className="project-designshowcase-line-desc2">{projectDesignShowcase[project.key].desc2.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</div>
                      </div>
                    </div>
                  )}
                  {/* Project Timeline/Roadmap for any project with a projectStories entry */}
                  {projectStories[project.key] && (
                    <div
                      className="project-timeline-section"
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        border: `3px solid ${projectStories[project.key][0].glowColor}`,
                        boxShadow: `0 0 48px 0 ${projectStories[project.key][0].glowColor}88, 0 0 0 6px ${projectStories[project.key][0].glowColor}44`,
                        borderRadius: '32px',
                        margin: '32px 0',
                        background: 'rgba(24,24,42,0.85)'
                      }}
                    >
                      <AboutMeParticles
                        particleColors={
                          project.key === 'savour' ? ['#50E3C2', '#baffd9', 'rgba(80,227,194,0.7)', 'rgba(255,255,255,0.8)'] :
                          project.key === 'axify' ? ['#FF69B4', '#ffb3de', 'rgba(255,105,180,0.7)', 'rgba(255,255,255,0.8)'] :
                          project.key === 'velvetvet' ? ['#FFD600', '#fff7b3', 'rgba(255,214,0,0.7)', 'rgba(255,255,255,0.8)'] :
                          ['#B266FF', '#7B61FF', 'rgba(178,102,255,0.7)', 'rgba(123,97,255,0.7)', 'rgba(255,255,255,0.8)']
                        }
                        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}
                      />
                      <div className="project-timeline-list">
                        {projectStories[project.key].map((step, idx) => (
                          <div
                            className={`project-timeline-step project-timeline-step-${idx % 2 === 0 ? 'left' : 'right'}`}
                            key={idx}
                            style={{
                              borderLeft: `8px solid ${project.key === 'deepsync' ? '#B266FF' : step.glowColor}`
                            }}
                          >
                            {idx % 2 === 0 && (
                              <div
                                className="project-timeline-img project-timeline-img-left"
                                style={{
                                  position: 'relative',
                                  overflow: 'hidden',
                                  borderRadius: '24px',
                                  border: `3px solid ${project.key === 'deepsync' ? '#B266FF' : step.glowColor}`,
                                  boxShadow: `0 0 32px 0 ${project.key === 'deepsync' ? '#B266FF88' : step.glowColor + '88'}, 0 0 0 4px ${project.key === 'deepsync' ? '#B266FF44' : step.glowColor + '44'}`,
                                  background: 'rgba(24,24,42,0.85)'
                                }}
                                aria-label="Click to enlarge"
                              >
                                <AboutMeParticles numParticles={38} particleColors={
                                  project.key === 'savour' ? ['#50E3C2', '#baffd9', 'rgba(80,227,194,0.7)', 'rgba(255,255,255,0.8)'] :
                                  project.key === 'axify' ? ['#FF69B4', '#ffb3de', 'rgba(255,105,180,0.7)', 'rgba(255,255,255,0.8)'] :
                                  project.key === 'velvetvet' ? ['#FFD600', '#fff7b3', 'rgba(255,214,0,0.7)', 'rgba(255,255,255,0.8)'] :
                                  ['#B266FF', '#7B61FF', 'rgba(178,102,255,0.7)', 'rgba(123,97,255,0.7)', 'rgba(255,255,255,0.8)']
                                } />
                                <span className="expand-indicator" aria-hidden="true">&#128269;</span>
                                <img src={step.img || placeholderImg} alt={step.title} className="project-timeline-img-glowimg" onClick={() => setExpandedImg(step.img || placeholderImg)} />
                              </div>
                            )}
                            <div className="project-timeline-step-content">
                              <div className="project-timeline-step-title" style={{color: project.key === 'deepsync' ? '#B266FF' : step.glowColor}}>{step.title}</div>
                              <div className="project-timeline-step-subtitle" style={{color: project.key === 'deepsync' ? '#B266FF' : step.glowColor}}>{step.subtitle}</div>
                              <div className="project-timeline-step-desc" dangerouslySetInnerHTML={{__html: step.desc}} />
                            </div>
                            {idx % 2 === 1 && (
                              <div
                                className="project-timeline-img project-timeline-img-right"
                                style={{
                                  position: 'relative',
                                  overflow: 'hidden',
                                  borderRadius: '24px',
                                  border: `3px solid ${project.key === 'deepsync' ? '#B266FF' : step.glowColor}`,
                                  boxShadow: `0 0 32px 0 ${project.key === 'deepsync' ? '#B266FF88' : step.glowColor + '88'}, 0 0 0 4px ${project.key === 'deepsync' ? '#B266FF44' : step.glowColor + '44'}`,
                                  background: 'rgba(24,24,42,0.85)'
                                }}
                                aria-label="Click to enlarge"
                              >
                                <AboutMeParticles numParticles={38} particleColors={
                                  project.key === 'savour' ? ['#50E3C2', '#baffd9', 'rgba(80,227,194,0.7)', 'rgba(255,255,255,0.8)'] :
                                  project.key === 'axify' ? ['#FF69B4', '#ffb3de', 'rgba(255,105,180,0.7)', 'rgba(255,255,255,0.8)'] :
                                  project.key === 'velvetvet' ? ['#FFD600', '#fff7b3', 'rgba(255,214,0,0.7)', 'rgba(255,255,255,0.8)'] :
                                  ['#B266FF', '#7B61FF', 'rgba(178,102,255,0.7)', 'rgba(123,97,255,0.7)', 'rgba(255,255,255,0.8)']
                                } />
                                <span className="expand-indicator" aria-hidden="true">&#128269;</span>
                                <img src={step.img || placeholderImg} alt={step.title} className="project-timeline-img-glowimg" onClick={() => setExpandedImg(step.img || placeholderImg)} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="galaxy background" />
      {/* Lightbox Modal for Enlarged Timeline Images */}
      {expandedImg && (
        <div className="project-lightbox-overlay" onClick={() => setExpandedImg(null)}>
          <div className="project-lightbox-modal" onClick={e => e.stopPropagation()}>
            <button className="project-lightbox-close" onClick={() => setExpandedImg(null)}>&times;</button>
            <img src={expandedImg} alt="Enlarged mockup" className="project-lightbox-img" />
          </div>
        </div>
      )}
    </section>
  )
}

// Add a simple animated sparkles component
function GalaxySparkles() {
  return (
    <svg className="galaxy-sparkles" width="100%" height="100%" style={{position:'absolute',top:0,left:0,pointerEvents:'none',zIndex:1}}>
      <g>
        <circle cx="20%" cy="30%" r="2.5" fill="#fff" opacity="0.7">
          <animate attributeName="r" values="2.5;4;2.5" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="80%" cy="60%" r="1.5" fill="#7B61FF" opacity="0.8">
          <animate attributeName="r" values="1.5;3;1.5" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="50%" cy="80%" r="1.8" fill="#fff" opacity="0.6">
          <animate attributeName="r" values="1.8;3.2;1.8" dur="2.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="65%" cy="20%" r="1.2" fill="#fff" opacity="0.5">
          <animate attributeName="r" values="1.2;2.2;1.2" dur="2.1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="35%" cy="55%" r="1.7" fill="#7B61FF" opacity="0.7">
          <animate attributeName="r" values="1.7;3;1.7" dur="2.6s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  );
}
