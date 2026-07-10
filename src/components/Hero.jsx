import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden">
      {/* Background Graphic Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      {/* 1. Header / Navigation */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
            <span className="text-brand-green">●</span> ENERGY LINK
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-gray">
          <a href="#home" className="text-white hover:text-brand-green transition-colors">خانه</a>
          <a href="#solutions" className="hover:text-brand-green transition-colors">راهکارها</a>
          <a href="#industries" className="hover:text-brand-green transition-colors">صنایع</a>
          <a href="#projects" className="hover:text-brand-green transition-colors">پروژه‌ها</a>
          <a href="#about" className="hover:text-brand-green transition-colors">درباره ما</a>
          <a href="#contact" className="hover:text-brand-green transition-colors">تماس با ما</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-xs text-brand-gray bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md flex items-center gap-1">
            <span>FA</span> ▾
          </button>
          <button className="bg-brand-green hover:bg-brand-green/90 text-brand-dark font-bold text-sm px-5 py-2 rounded-full shadow-lg shadow-brand-green/20 transition-all">
            درخواست مشاوره
          </button>
        </div>
      </header>

      {/* 2. Hero Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Right Side: Text & Intro */}
        <div className="lg:col-span-5 text-right flex flex-col items-start lg:items-end">
          <span className="text-brand-green font-medium text-sm mb-3 tracking-wide">درباره ما</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            مدیریت هوشمند مصرف انرژی <br />
            <span className="text-brand-green">برای صنعتی پایدار و رقابتی</span>
          </h1>
          <p className="text-brand-gray leading-relaxed text-base mb-8 max-w-xl">
            ما در <span className="text-white font-semibold">Energy Link</span> با تکیه بر تجربه تخصصی، فناوری‌های نوین و رویکردی یکپارچه، راهکارهای مدیریت مصرف انرژی را به‌صورت هوشمند طراحی و اجرا می‌کنیم تا صنایع به بالاترین بهره‌وری با کمترین هزینه دست یابند.
          </p>
          <button className="group flex items-center gap-3 border border-brand-green/30 hover:border-brand-green px-6 py-3 rounded-full text-brand-green font-semibold text-sm bg-brand-green/5 transition-all">
            <span>داستان ما</span>
            <span className="bg-brand-green text-brand-dark w-6 h-6 rounded-full flex items-center justify-center text-xs group-hover:translate-x-[-4px] transition-transform">◀</span>
          </button>
        </div>

        {/* Left Side: Mockup Dashboards & Network (Matching Image Exactly) */}
        <div className="lg:col-span-7 w-full flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Box 1: Energy Consumption */}
            <div className="bg-brand-navy/80 border border-slate-800 p-5 rounded-2xl backdrop-blur-md">
              <span className="text-xs text-brand-gray font-medium">ENERGY CONSUMPTION</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-white">1.25</span>
                <span className="text-xs text-brand-green font-semibold">MW</span>
              </div>
              <div className="h-24 mt-4 flex items-end gap-1">
                {/* Simulated Chart Bars */}
                <div className="w-full bg-slate-800 h-1/3 rounded-sm"></div>
                <div className="w-full bg-slate-800 h-1/2 rounded-sm"></div>
                <div className="w-full bg-brand-cyan/40 h-2/3 rounded-sm"></div>
                <div className="w-full bg-brand-cyan h-3/4 rounded-sm"></div>
                <div className="w-full bg-brand-green h-full rounded-sm"></div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-800/60 text-xs">
                <div>
                  <div className="text-brand-gray">TODAY CONSUMPTION</div>
                  <div className="text-white font-bold mt-0.5">18.7 MWh</div>
                </div>
                <div>
                  <div className="text-brand-gray">COST SAVING</div>
                  <div className="text-brand-green font-bold mt-0.5">21% Active</div>
                </div>
              </div>
            </div>

            {/* Box 2: EMS Stats */}
            <div className="bg-brand-navy/80 border border-slate-800 p-5 rounded-2xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-xs text-brand-gray font-medium">ENERGY MANAGEMENT SYSTEM</span>
                <div className="flex items-center justify-between mt-4">
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-4 border-brand-green/20 border-t-brand-green">
                    <span className="text-lg font-bold text-white">78%</span>
                  </div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-center gap-2 text-yellow-500">
                      <span>●</span> Energy overload
                    </div>
                    <div className="flex items-center gap-2 text-brand-gray">
                      <span>●</span> Device temp: High
                    </div>
                    <div className="flex items-center gap-2 text-brand-gray">
                      <span>●</span> Transformer temp
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-brand-gray bg-slate-900/60 p-2 rounded-lg mt-4 border border-slate-800/40">
                System status: <span className="text-brand-green">Optimized & Secure</span>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
