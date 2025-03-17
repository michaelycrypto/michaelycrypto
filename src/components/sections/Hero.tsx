export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-[var(--surface-void)] overflow-hidden">
      <div className="container mx-auto px-6 py-24 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-8 xl:col-span-7 space-y-8 relative z-10">
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold tracking-tight leading-[0.9]">
            <span className="block text-white opacity-90 transform hover:translate-x-2 transition-transform duration-300">
              Shaping
            </span>
            <span className="block text-[var(--accent-red)] mt-4 transform hover:-translate-x-2 transition-transform duration-300">
              Digital Freedom
            </span>
          </h1>
          <p className="text-2xl text-[var(--text-secondary)] max-w-xl ml-auto">
            We craft transformative digital experiences that empower human potential while fiercely protecting individual privacy and autonomy.
          </p>
          <div className="flex flex-wrap gap-6 pt-8 justify-end">
            <button className="btn-noir-red px-12 py-4">
              Explore Our Vision
            </button>
            <button className="btn-noir px-8 py-4">
              Start a Conversation
            </button>
          </div>
        </div>
        {/* Right content */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-5 relative mt-12 lg:mt-0">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[var(--surface-elevated)] to-transparent p-1">
            <div className="grid grid-cols-3 gap-4 p-8 h-full">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};