import React from 'react';

const Work: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] px-6 lg:px-10 py-20 border-t border-subtle" id="work">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-12">Selected Projects</h3>
      <div className="space-y-16">
        {/* Project 1 - EV Platform */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 group">
          <div className="lg:col-span-4 h-64 lg:h-auto rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-900 relative border border-subtle">
            <div className="absolute inset-0 engineering-grid opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/ev-charging.webp"
                alt="EV Charging Station Network"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded">Lead Mobile Engineer</span>
            </div>
            <h4 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">EV Charging Station Network</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">A comprehensive Flutter application for discovery, control, and payment of EV charging stations across the region.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Implemented complex BLE communication protocols for hardware station pairing and authentication.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Engineered a real-time MQTT-based status monitoring dashboard with 99.9% uptime.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Scaled the application to support 50,000+ monthly active users.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Dart', 'BLE', 'MQTT', 'Firebase'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/50 dark:bg-gray-800 border border-subtle rounded text-xs font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 - Fintech Trading Platform */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 group">
          <div className="lg:col-span-4 h-64 lg:h-auto rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-900 order-first lg:order-last relative border border-subtle">
            <div className="absolute inset-0 engineering-grid opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/fintech.webp"
                alt="Fintech Trading Platform"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded">Senior Android Developer</span>
            </div>
            <h4 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Fintech Trading Platform</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">High-performance native Android application for real-time stock trading and portfolio management.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Optimized chart rendering performance for low-latency market data visualization.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Integrated secure biometric authentication and end-to-end encrypted transaction flows.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Refactored legacy codebase to modern Kotlin Coroutines and Jetpack components.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {['Android SDK', 'Kotlin', 'WebSockets', 'Clean Arch'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/50 dark:bg-gray-800 border border-subtle rounded text-xs font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
