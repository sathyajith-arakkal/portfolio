const Hero = () => {
  return (
    <section className="w-full max-w-[1200px] px-6 lg:px-10 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-4 relative">
        <div className="absolute -left-10 top-0 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent hidden lg:block"></div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[1] mb-6">
          Sathyajith Arakkal
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-accent dark:text-primary/80 tracking-tight">
          Senior Mobile Engineer / Mobile Tech Lead
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          I build scalable Flutter and Android applications for fintech and IoT products used by thousands. Focused on performance, architecture, and seamless hardware integration.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
            View Work <span className="material-symbols-outlined text-sm">arrow_downward</span>
          </button>
          <button className="border border-slate-300 dark:border-gray-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-white dark:hover:bg-gray-800 transition-all">
            Contact Me
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
        {/* @ts-expect-error - spline-viewer is a custom element */}
        <spline-viewer url="https://prod.spline.design/a8LXDU11UyHlWgJC/scene.splinecode"></spline-viewer>
      </div>
    </section>
  );
};

export default Hero;
