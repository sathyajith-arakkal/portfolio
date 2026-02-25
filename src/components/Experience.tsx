import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Gadgeon Smart Systems',
      period: '2018 — Present',
      role: 'Mobile Tech Lead',
      description: 'Spearheading mobile engineering initiatives for IoT and Smart City solutions. Responsible for architectural decisions, cross-functional team alignment, and delivering high-stakes mobile applications for global hardware clients.',
      isCurrent: true
    },
    {
      company: 'Geojit Technologies',
      period: '2015 — 2018',
      role: 'Software Engineer (Mobile)',
      description: 'Developed and maintained mission-critical fintech applications. Focused on UI/UX performance, secure banking protocols, and optimizing data synchronization for high-frequency trading updates.',
      isCurrent: false
    }
  ];

  return (
    <section className="w-full max-w-[1200px] px-6 lg:px-10 py-20 border-t border-subtle" id="experience">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-12">Experience</h3>
      <div className="relative space-y-12 before:absolute before:left-0 before:top-2 before:h-[95%] before:w-px before:bg-gray-200 dark:before:bg-gray-800 pl-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className={`absolute -left-[37px] top-1.5 size-4 rounded-full border-4 border-background-light dark:border-background-dark ${exp.isCurrent ? 'bg-primary shadow-[0_0_10px_rgba(19,91,236,0.3)]' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
              <h4 className="text-xl font-bold">{exp.company}</h4>
              <span className="text-sm font-semibold text-slate-accent dark:text-gray-400">{exp.period}</span>
            </div>
            <p className="text-lg font-medium text-primary mb-4">{exp.role}</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
