import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import VideoIntro from "./components/VideoIntro";

// This helps with debugging the video path
console.log('Base URL:', process.env.PUBLIC_URL);

function App() {
  const [showVideoIntro, setShowVideoIntro] = useState(true);

  const handleVideoComplete = () => {
    setShowVideoIntro(false);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {showVideoIntro && <VideoIntro onComplete={handleVideoComplete} />}
    </>
  );
}

export default App;