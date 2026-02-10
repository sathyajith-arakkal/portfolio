import React from 'react';

const Education: React.FC = () => {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">Education</h3>
      <div className="space-y-8">
        <div className="p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-subtle backdrop-blur-sm">
          <h4 className="text-lg font-bold mb-1">Bachelor of Technology</h4>
          <p className="text-primary font-medium mb-2">Computer Science & Engineering</p>
          <p className="text-sm text-gray-500">University of Calicut • Graduated 2014</p>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-bold mb-4">Certifications</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span className="text-sm font-medium">Google Certified Android Developer</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span className="text-sm font-medium">Advanced Flutter & Dart Masterclass</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
