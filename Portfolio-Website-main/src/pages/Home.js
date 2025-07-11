import React from 'react';
import AboutMe from '../components/AboutMe';
import UXExperience from '../components/UXExperience';
import ProudestAchievement from '../components/ProudestAchievement';
import Technologies from '../components/Technologies';
import ReadyCta from '../components/ReadyCta';
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <UXExperience />
      <ProudestAchievement />
      <Technologies />
      <ReadyCta />
      <Footer />
    </>
  );
};

export default Home; 