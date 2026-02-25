import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/50 dark:bg-gray-950/50 border-t border-subtle px-6 lg:px-40 py-20 relative z-10 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Let's build something scalable.</h2>
          <p className="text-gray-500 max-w-md mx-auto">Currently available for senior-level opportunities or strategic consulting in Mobile Engineering.</p>
        </div>
        <div className="flex items-center gap-8">
          <a className="text-primary hover:text-blue-700 transition-colors flex items-center gap-2 font-bold" href="#">
            <span className="material-symbols-outlined">mail</span> Email
          </a>
          <a className="text-near-black dark:text-white hover:text-primary transition-colors flex items-center gap-2 font-bold" href="#">
            <span className="material-symbols-outlined">link</span> LinkedIn
          </a>
          <a className="text-near-black dark:text-white hover:text-primary transition-colors flex items-center gap-2 font-bold" href="#">
            <span className="material-symbols-outlined">code</span> GitHub
          </a>
        </div>
        <div className="pt-10 border-t border-subtle w-full">
          <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">© 2024 Sathyajith Arakkal • Handcrafted with Precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
