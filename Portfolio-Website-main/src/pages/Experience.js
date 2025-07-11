import React from 'react';
import WorkExperienceTabs from "../components/WorkExperienceTabs";
import { Skills } from "../components/Skills";
import { DesignTools } from "../components/DesignTools";
import ReadyCta from "../components/ReadyCta";
import { Footer } from "../components/Footer";

const Experience = () => {
  return (
    <div style={{ paddingTop: '150px' }}>
      <WorkExperienceTabs />
      <Skills />
      <ReadyCta />
      <Footer />
    </div>
  );
};

export default Experience; 