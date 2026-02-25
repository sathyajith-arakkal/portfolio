import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-subtle bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-40 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-primary">
          <span className="material-symbols-outlined text-3xl">developer_mode</span>
        </div>
        <h2 className="text-lg font-bold tracking-tight">Sathyajith Arakkal</h2>
      </div>
      <nav className="flex items-center gap-4 md:gap-10">
        <div className="hidden md:flex items-center gap-10 mr-4">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#work">Work</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#expertise">Expertise</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#tech">Stack</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center justify-center border border-transparent hover:border-subtle"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {!darkMode ? (
              <span className="material-symbols-outlined">dark_mode</span>
            ) : (
              <span className="material-symbols-outlined text-yellow-400">light_mode</span>
            )}
          </button>
          <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm">
            Contact Me
          </button>
        </div>
        <button className="md:hidden material-symbols-outlined ml-2">menu</button>
      </nav>
    </header>
  );
};

export default Header;
