import React, { useEffect, useState } from 'react';
import './CrystalEffects.css';

const CrystalEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;
      
      setMousePosition({ x: deltaX, y: deltaY });
      setIsMoving(true);
      
      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set moving to false after 100ms of no movement
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleScroll = () => {
      setIsMoving(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const getParallaxStyle = (elementIndex, intensity = 1) => {
    const baseIntensity = intensity * 20; // Base movement intensity
    const xOffset = mousePosition.x * baseIntensity * (elementIndex % 2 === 0 ? 1 : -1);
    const yOffset = mousePosition.y * baseIntensity * (elementIndex % 3 === 0 ? 1 : -0.5);
    
    return {
      transform: `translate(${xOffset}px, ${yOffset}px)`,
      transition: isMoving ? 'none' : 'transform 0.3s ease-out'
    };
  };

  return (
    <div className={`crystal-effects ${isMoving ? 'moving' : ''}`}>
      {/* Glitter Particles */}
      <div className="glitter glitter-1" style={getParallaxStyle(1, 0.8)}></div>
      <div className="glitter glitter-2" style={getParallaxStyle(2, 0.6)}></div>
      <div className="glitter glitter-3" style={getParallaxStyle(3, 0.9)}></div>
      <div className="glitter glitter-4" style={getParallaxStyle(4, 0.7)}></div>
      <div className="glitter glitter-5" style={getParallaxStyle(5, 0.5)}></div>
      <div className="glitter glitter-6" style={getParallaxStyle(6, 0.8)}></div>
      <div className="glitter glitter-7" style={getParallaxStyle(7, 0.6)}></div>
      <div className="glitter glitter-8" style={getParallaxStyle(8, 0.9)}></div>

      {/* Purple Sparkles */}
      <div className="purple-sparkle sparkle-1" style={getParallaxStyle(9, 1.2)}></div>
      <div className="purple-sparkle sparkle-2" style={getParallaxStyle(10, 1.0)}></div>
      <div className="purple-sparkle sparkle-3" style={getParallaxStyle(11, 1.1)}></div>
      <div className="purple-sparkle sparkle-4" style={getParallaxStyle(12, 0.9)}></div>
      <div className="purple-sparkle sparkle-5" style={getParallaxStyle(13, 1.3)}></div>
      <div className="purple-sparkle sparkle-6" style={getParallaxStyle(14, 1.0)}></div>

      {/* Energy Orbs */}
      <div className="energy-orb orb-1" style={getParallaxStyle(15, 1.5)}></div>
      <div className="energy-orb orb-2" style={getParallaxStyle(16, 1.4)}></div>
      <div className="energy-orb orb-3" style={getParallaxStyle(17, 1.6)}></div>
      <div className="energy-orb orb-4" style={getParallaxStyle(18, 1.3)}></div>

      {/* Floating Crystals */}
      <div className="crystal crystal-1" style={getParallaxStyle(19, 2.0)}></div>
      <div className="crystal crystal-2" style={getParallaxStyle(20, 1.8)}></div>
      <div className="crystal crystal-3" style={getParallaxStyle(21, 2.2)}></div>
      <div className="crystal crystal-4" style={getParallaxStyle(22, 1.9)}></div>
      <div className="crystal crystal-5" style={getParallaxStyle(23, 2.1)}></div>
    </div>
  );
};

export default CrystalEffects; 