import React from 'react';

const Expertise: React.FC = () => {
  const expertises = [
    {
      icon: 'architecture',
      title: 'Mobile Architecture',
      description: 'Designing robust, maintainable systems (Clean Architecture, MVVM) for high-traffic apps.'
    },
    {
      icon: 'flutter_dash',
      title: 'Flutter & Scale',
      description: 'Expert-level cross-platform and native Android development for global user bases.'
    },
    {
      icon: 'bluetooth_connected',
      title: 'BLE & IoT',
      description: 'Deep integration with hardware via Bluetooth Low Energy, MQTT, and real-time protocols.'
    },
    {
      icon: 'groups',
      title: 'Team Leadership',
      description: 'Leading engineering squads, mentoring junior developers, and defining dev standards.'
    }
  ];

  return (
    <section className="w-full max-w-[1200px] px-6 lg:px-10 py-20 border-t border-subtle" id="expertise">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-10">Core Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertises.map((item, index) => (
          <div key={index} className="group p-6 rounded-xl border border-transparent hover:border-subtle hover:bg-white dark:hover:bg-gray-900/50 transition-all">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">{item.icon}</span>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-sm text-slate-accent dark:text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
