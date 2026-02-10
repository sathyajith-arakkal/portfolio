import React from 'react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: 'Mobile & Core',
      techs: ['Flutter', 'Dart', 'Kotlin', 'Android SDK', 'Java']
    },
    {
      title: 'Connectivity & IoT',
      techs: ['Bluetooth (BLE)', 'MQTT', 'WebSockets', 'NFC']
    },
    {
      title: 'Tools & Platforms',
      techs: ['Firebase', 'CI/CD', 'Git', 'Fastlane']
    }
  ];

  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">Technical Stack</h3>
      <div className="space-y-8">
        {categories.map((cat, index) => (
          <div key={index}>
            <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{cat.title}</h5>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/50 dark:bg-gray-900 border border-subtle rounded-lg text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
