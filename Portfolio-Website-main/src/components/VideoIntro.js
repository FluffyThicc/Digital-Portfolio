import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './VideoIntro.css';
import { FaUser, FaLightbulb, FaPencilRuler, FaPalette, FaCode, FaRocket, FaEye, FaHeart, FaCog, FaChartLine, FaUsers, FaSearch, FaBrain, FaHandshake, FaGem } from 'react-icons/fa';

const VideoIntro = ({ onVideoEnd }) => {
  // Story stages configuration with UX Design Methodology
  const storyStages = useMemo(() => [
    {
      text: "Welcome to my digital portfolio.",
      duration: 2500,
      glowColor: "#A085FF",
      icon: FaRocket
    },
    {
      text: "I am a passionate UX Designer.",
      duration: 2500,
      glowColor: "#B8A3FF",
      icon: FaUser
    },
    {
      text: "I craft intuitive, meaningful experiences.",
      duration: 2500,
      glowColor: "#8B6BE6",
      icon: FaLightbulb
    },
    {
      text: "Empathy and research drive my process.",
      duration: 2500,
      glowColor: "#CBB8FF",
      icon: FaUsers
    },
    {
      text: "From ideation to prototyping and testing...",
      duration: 2500,
      glowColor: "#DCCDFF",
      icon: FaPencilRuler
    },
    {
      text: "Let’s create impactful digital experiences together.",
      duration: 3000,
      glowColor: "#A085FF",
      icon: FaHeart
    }
  ], []);
  const [currentStage, setCurrentStage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);

  // Handle user interaction for autoplay
  const handleUserInteraction = useCallback(() => {
    if (!hasUserInteracted) {
      console.log('User interaction detected');
      setHasUserInteracted(true);
      if (videoRef.current && !isLoading) {
        handleVideoPlay();
      }
    }
  }, [hasUserInteracted, isLoading]);

  // Skip intro if already seen
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
      console.log('Skipping intro - already seen');
      setShowVideo(false);
      if (onVideoEnd) onVideoEnd();
    } else {
      console.log('Showing intro video');
      // Test video accessibility
      testVideoAccess();
    }
  }, [onVideoEnd]);

  // Story progression
  useEffect(() => {
    if (currentStage < storyStages.length) {
      const timer = setTimeout(() => {
        setCurrentStage(prev => prev + 1);
      }, storyStages[currentStage].duration);

      return () => clearTimeout(timer);
    } else if (currentStage === storyStages.length) {
      // Transition to video after story
      setIsTransitioning(true);
      setTimeout(() => {
        setShowVideo(true);
        setIsLoading(true);
        setIsTransitioning(false);
      }, 1000);
    }
  }, [currentStage, storyStages.length, storyStages]);

  // Add event listeners for user interaction
  useEffect(() => {
    const events = ['click', 'touchstart', 'keydown'];
    
    const handleInteraction = () => {
      handleUserInteraction();
    };

    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, [handleUserInteraction]);

  // Additional effect to handle video autoplay after story completion
  useEffect(() => {
    if (showVideo && !isLoading && videoRef.current) {
      // Small delay to ensure video element is ready
      const timer = setTimeout(() => {
        handleVideoPlay();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [showVideo, isLoading]);

  // Handle video playback with better error handling
  const handleVideoPlay = async () => {
    if (videoRef.current) {
      try {
        console.log('Attempting to play video...');
        // Ensure video is muted for autoplay
        videoRef.current.muted = true;
        videoRef.current.volume = 0;
        
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          console.log('Video started playing successfully');
          setVideoError(false); // Clear any previous errors
        }
      } catch (error) {
        console.error("Video play failed:", error);
        // If autoplay fails, show the video controls and allow manual play
        if (videoRef.current) {
          videoRef.current.controls = true;
          setVideoError(true);
        }
      }
    }
  };

  // Handle video loading
  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setIsLoading(false);
    // Try to play video immediately when loaded, regardless of user interaction
    handleVideoPlay();
  };

  // Handle video errors
  const handleVideoError = (e) => {
    console.error('Video error:', e);
    console.error('Video error details:', videoRef.current?.error);
    console.error('Video ready state:', videoRef.current?.readyState);
    console.error('Video network state:', videoRef.current?.networkState);
    setVideoError(true);
    setIsLoading(false);
  };

  // Manual play button handler
  const handleManualPlay = () => {
    if (videoRef.current) {
      console.log('Manual play requested');
      videoRef.current.play().catch(error => {
        console.error("Manual play failed:", error);
      });
    }
  };

  // Get video path with fallbacks
  const getVideoPath = () => {
    const baseUrl = process.env.PUBLIC_URL || '';
    const paths = [
      `${baseUrl}/videos/Lightning.mp4`,
      '/videos/Lightning.mp4',
      './videos/Lightning.mp4'
    ];
    console.log('Video paths:', paths);
    console.log('Base URL:', baseUrl);
    console.log('Current location:', window.location.href);
    return paths;
  };

  // Skip story and go directly to video
  const skipStory = () => {
    setCurrentStage(storyStages.length);
    setShowVideo(true);
    setIsLoading(true);
  };

  // Test video accessibility
  const testVideoAccess = () => {
    const testVideo = document.createElement('video');
    const testPath = '/videos/Lightning.mp4';
    testVideo.src = testPath;
    testVideo.addEventListener('loadstart', () => console.log('Test video load started'));
    testVideo.addEventListener('canplay', () => console.log('Test video can play'));
    testVideo.addEventListener('error', (e) => console.error('Test video error:', e));
    testVideo.load();
  };

  // Handle video end
  const handleVideoEnd = () => {
    console.log('Video ended');
    setShowVideo(false);
    localStorage.setItem('hasSeenIntro', 'true');
    if (onVideoEnd) onVideoEnd();
  };

  if (isTransitioning) {
    return (
      <div className="transition-screen">
        <div className="transition-content">
          <div className="transition-icon">
            <FaRocket />
          </div>
          <div className="transition-text">Preparing Your Digital Experience...</div>
        </div>
        <div className="transition-spinner"></div>
      </div>
    );
  }

  if (!showVideo && currentStage < storyStages.length) {
    // Story stage
    const currentStory = storyStages[currentStage];
    const IconComponent = currentStory.icon;
    return (
      <div className="story-intro">
        {/* Magical particles layer */}
        <div className="magical-particles">
          {/* Moons */}
          <div className="moon moon-1" />
          <div className="moon moon-2" />
          {/* Space particles/stars */}
          <div className="star star-1" />
          <div className="star star-2" />
          <div className="star star-3" />
          <div className="star star-4" />
          <div className="star star-5" />
          <div className="star star-6" />
        </div>
        <div className="story-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          {IconComponent && (
            <div className={`story-icon ${currentStage % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
              <IconComponent />
            </div>
          )}
          <div 
            className={`story-text ${currentStage % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
            style={{ 
              '--glow-color': currentStory.glowColor 
            }}
          >
            {currentStory.text}
          </div>
        </div>
      </div>
    );
  }

  if (!showVideo) return null;

  return (
    <div className="video-intro" onClick={handleUserInteraction}>
      {isLoading && (
        <div className="video-intro__loading">
          <div className="loading-spinner"></div>
          <p>Loading Digital Portfolio Experience...</p>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>Click anywhere to start</p>
          <button 
            onClick={handleManualPlay} 
            style={{ 
              marginTop: '20px', 
              padding: '10px 20px', 
              background: 'rgba(160, 133, 255, 0.3)', 
              border: '1px solid rgba(160, 133, 255, 0.5)', 
              color: '#EDE2FF', 
              borderRadius: '20px', 
              cursor: 'pointer' 
            }}
          >
            Force Play Video
          </button>
        </div>
      )}
      {/* Video overlay effects */}
      <div className="video-overlay-effects">
        <div className="video-overlay-headline">Unleash the Power of Imagination</div>
        <div className="video-overlay-subtitle">UX Design in Motion</div>
        <div className="video-overlay-sparkles">
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="sparkle sparkle-3"></div>
          <div className="sparkle sparkle-4"></div>
        </div>
      </div>
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        onEnded={handleVideoEnd}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onLoadStart={() => console.log('Video load started')}
        onCanPlay={() => console.log('Video can play')}
        onCanPlayThrough={() => console.log('Video can play through')}
        className="video-intro__player"
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        loop={false}
      >
        {getVideoPath().map((path, index) => (
          <source key={index} src={path} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>
      {videoError && (
        <div className="video-intro__error">
          <p>Video failed to autoplay. Click to play manually.</p>
          <button onClick={handleManualPlay} className="video-intro__play-btn">
            Play Video
          </button>
        </div>
      )}
      <button 
        onClick={handleVideoEnd} 
        className="video-intro__skip"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default VideoIntro;
