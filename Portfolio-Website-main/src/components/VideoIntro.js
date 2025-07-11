import React, { useState, useRef } from 'react';
import './VideoIntro.css';

const VideoIntro = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setIsLoading(false);
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    console.error('Video error details:', videoRef.current?.error);
    setHasError(true);
    setIsLoading(false);
  };

  const handleVideoEnd = () => {
    console.log('Video ended - transitioning to portfolio');
    onComplete();
  };

  const handleContinue = () => {
    onComplete();
  };

  const handleForcePlay = () => {
    if (videoRef.current) {
      console.log('Attempting to play video...');
      videoRef.current.play().catch((error) => {
        console.error('Video play failed:', error);
        setHasError(true);
      });
    }
  };

  return (
    <div className="video-intro">
      {/* Enhanced Background Effects */}
      <div className="background-effects">
        {/* Enhanced Glitter Particles */}
        <div className="glitter glitter-1"></div>
        <div className="glitter glitter-2"></div>
        <div className="glitter glitter-3"></div>
        <div className="glitter glitter-4"></div>
        <div className="glitter glitter-5"></div>
        <div className="glitter glitter-6"></div>
        <div className="glitter glitter-7"></div>
        <div className="glitter glitter-8"></div>
        <div className="glitter glitter-9"></div>
        <div className="glitter glitter-10"></div>
        <div className="glitter glitter-11"></div>
        <div className="glitter glitter-12"></div>
        <div className="glitter glitter-13"></div>
        <div className="glitter glitter-14"></div>
        <div className="glitter glitter-15"></div>

        {/* Enhanced Purple Sparkles */}
        <div className="purple-sparkle sparkle-1"></div>
        <div className="purple-sparkle sparkle-2"></div>
        <div className="purple-sparkle sparkle-3"></div>
        <div className="purple-sparkle sparkle-4"></div>
        <div className="purple-sparkle sparkle-5"></div>
        <div className="purple-sparkle sparkle-6"></div>
        <div className="purple-sparkle sparkle-7"></div>
        <div className="purple-sparkle sparkle-8"></div>
        <div className="purple-sparkle sparkle-9"></div>
        <div className="purple-sparkle sparkle-10"></div>
        <div className="purple-sparkle sparkle-11"></div>
        <div className="purple-sparkle sparkle-12"></div>

        {/* Enhanced Moons */}
        <div className="moon moon-1"></div>
        <div className="moon moon-2"></div>
        <div className="moon moon-3"></div>
        <div className="moon moon-4"></div>
        <div className="moon moon-5"></div>

        {/* Enhanced Stars */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>

        {/* Additional Genshin-style Elements */}
        <div className="energy-orb orb-1"></div>
        <div className="energy-orb orb-2"></div>
        <div className="energy-orb orb-3"></div>
        <div className="energy-orb orb-4"></div>
        <div className="energy-orb orb-5"></div>

        {/* Floating Crystals */}
        <div className="crystal crystal-1"></div>
        <div className="crystal crystal-2"></div>
        <div className="crystal crystal-3"></div>
        <div className="crystal crystal-4"></div>
        <div className="crystal crystal-5"></div>
        <div className="crystal crystal-6"></div>
      </div>

      {/* Video Player - Main Focus */}
      <video
        ref={videoRef}
        className="video-intro__player"
        autoPlay
        muted
        loop={false}
        playsInline
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onEnded={handleVideoEnd}
        onLoadStart={() => console.log('Video load started')}
        onCanPlay={() => console.log('Video can play')}
        onCanPlayThrough={() => console.log('Video can play through')}
      >
        <source src={process.env.PUBLIC_URL + "/videos/Lightning.mp4"} type="video/mp4" />
        <source src="/videos/Lightning.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay on Video */}
      <div className="video-text-overlay">
        <div className="video-text-group">
          <div className="video-headline">Unleash the Power of Imagination</div>
          <div className="video-subtitle">UX Design in Motion</div>
        </div>
        <button className="enter-button" onClick={handleContinue}>
          <div className="enter-button-glow"></div>
          <span className="enter-button-text">ENTER</span>
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="video-intro__loading">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading...</div>
          <button className="force-play-btn" onClick={handleForcePlay}>
            Force Play Video
          </button>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="video-intro__error">
          <div className="error-text">Video failed to load</div>
          <button className="force-play-btn" onClick={handleForcePlay}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoIntro;
