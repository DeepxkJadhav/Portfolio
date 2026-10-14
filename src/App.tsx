import React, { useState } from 'react';
import { Project } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { SelectedWork } from './sections/SelectedWork';
import { Philosophy } from './sections/Philosophy';
import { Capabilities } from './sections/Capabilities';
import { GitHubActivity } from './sections/GitHubActivity';
import { AboutEducation } from './sections/AboutEducation';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-dark-950 text-text-primary selection:bg-accent/20 selection:text-accent font-sans antialiased overflow-x-hidden">
      <Navigation />
      
      <main id="main-content">
        <Hero />
        <SelectedWork onSelectProject={setSelectedProject} />
        <Philosophy />
        <Capabilities />
        <GitHubActivity />
        <AboutEducation />
        <Contact />
      </main>

      <Footer />

      {/* Deep Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
