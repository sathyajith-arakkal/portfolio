import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Work from './components/Work';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="engineering-grid absolute inset-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 architectural-shape"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-accent/5 dark:bg-slate-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 architectural-shape"></div>
      </div>

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-1 flex flex-col items-center relative z-10">
        <Hero />
        <Expertise />
        <Work />
        <Experience />

        <section className="w-full max-w-[1200px] px-6 lg:px-10 py-20 border-t border-subtle" id="tech">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <TechStack />
            <Education />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
