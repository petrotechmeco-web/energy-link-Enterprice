import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden font-sans text-right">
      
      {/* افکت نورپردازی پس‌زمینه شبکه‌ای */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-green/10 blur-[100px] rounded-full" />
        <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-brand-cyan/10 blur-[130px] rounded-full" />
      </div>

      {/* ۱. هدر و منوی اصلی (کاملاً منطبق بر تصویر) */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/40 backdrop-blur-sm">
        
        {/* دکمه‌های سمت چپ هدر */}
        <div className="flex items-center gap-4">
          <button className="bg-brand-green/10 hover:bg-brand-green/20 text-brand-green border border-brand-green/30 font-bold text-xs px-5 py-2.5 rounded-full shadow-lg shadow-brand-green/5 transition-all">
            درخواست مشاوره ◀
          </button>
          <button className="text-xs text-brand-gray bg-brand-navy border border-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1">
            <span>FA</span> <span className="text-[9px] text-slate-500">🌐</span>
          </button>
        </div>

        {/* منوی ناوبری وسط */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-brand-gray">
          <a href="#contact" className="hover:text-white transition-colors">تماس با ما</a>
          <a href="#blog" className="hover:text-white transition-colors">وبلاگ</a>
          <a href="#about" className="text-brand-green border-b-2 border-brand-green pb-1 font-bold">درباره ما</a>
          <a href="#projects" className="hover:text-white transition-colors">پروژه‌ها</a>
          <a href="#solutions" className="hover:text-white transition-colors">راهکارها</a>
          <a href="#home" className="hover:text-white transition-colors">خانه</a>
        </nav>

        {/* لوگو سمت راست */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-sm font-black tracking-wider text-white flex items-center gap-1.5">
              ENERGY LINK <span className="text-brand-green text-xs">●</span>
            </div>
            <div className="text-[8px] tracking-widest text-brand-cyan uppercase -mt-0.5">Smart Energy Solutions</div>
          </div>
        </div>
      </header>

      {/* ۲. محتوای اصلی هیرو (دو ستونه) */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ستون سمت راست: متون داینامیک و داستان ما */}
        <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-right">
          <span className="text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full text-xs font-medium mb-4">
            درباره ما
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
            مدیریت هوشمند مصرف انرژی <br />
            <span className="text-brand-green">برای صنعتی پایدار و رقابتی</span>
          </h1>
          <p className="text-brand-gray leading-relaxed text-xs md:text-sm mb-8 max-w-xl text-justify lg:text-right">
            ما در <span className="text-white font-semibold">Energy Link</span> با تکیه بر تجربه تخصصی، فناوری‌های نوین و رویکردی یکپارچه، راهکارهای مدیریت مصرف انرژی را به‌صورت هوشمند طراحی و اجرا می‌کنیم تا صنایع با کمترین هزینه بیشترین بهره‌وری را تجربه کنند.
          </p>
          <button className="group flex items-center gap-2 border border-brand-green/30 hover:border-brand-green px-5 py-2.5 rounded-full text-brand-green font-bold text-xs bg-brand-green/5 transition-all">
            <span>داستان ما</span>
            <span className="bg-brand-green text-brand-dark w-5 h-5 rounded-full flex items-center justify-center text-[10px] group-hover:translate-x-[-3px] transition-transform">◀</span>
          </button>
        </div>

        {/* ستون سمت چپ: کارت‌های پایش پورتفولیو و پس‌زمینه دکل‌های شبکه */}
        <div className="lg:col-span-7 w-full relative flex flex-col gap-5">
          
          {/* المان خطوط شبکه برق شبیه‌سازی شده زیر کارت‌ها */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* کارت مانیتورینگ مصرف انرژی (سمت راست) */}
            <div className="bg-brand-navy/90 border border-slate-800/80 p-5 rounded-2xl backdrop-blur-md shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-brand-gray font-bold tracking-wider">
                <span className="text-brand-cyan">POWER NOW</span>
                <span>ENERGY CONSUMPTION</span>
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-white">1.25</span>
                <span className="text-xs text-brand-cyan font-bold">MW</span>
              </div>
              
              {/* چارت خطی فرکانسی */}
              <div className="h-20 mt-4 flex items-end gap-[3px]">
                {[30, 45, 35, 60, 40, 75, 50, 85, 65, 95, 70, 40, 30].map((h, i) => (
                  <div 
                    key={i} 
                    className={`w-full rounded-t-sm transition-all duration-500 ${
                      i > 8 ? 'bg-brand-green' : i > 5 ? 'bg-brand-cyan' : 'bg-slate-800'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-800/60 text-[10px]">
                <div>
                  <div className="text-slate-500">TODAY CONSUMPTION</div>
                  <div className="text-white font-bold mt-0.5">18.7 MWh</div>
                </div>
                <div>
                  <div className="text-slate-500">COST SAVING</div>
                  <div className="text-brand-green font-bold mt-0.5">21% Optimization</div>
                </div>
              </div>
            </div>

            {/* کارت مدیریت EMS (سمت چپ) */}
            <div className="bg-brand-navy/90 border border-slate-800/80 p-5 rounded-2xl backdrop-blur-md shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-brand-gray font-bold">
                  <span className="text-brand-green">ALERTS</span>
                  <span>ENERGY MANAGEMENT SYSTEM</span>
                </div>
                <div className="flex items-center justify-between mt-4 gap-4">
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-4 border-slate-800 border-t-brand-green border-r-brand-green/60 animate-spin-slow">
                    <span className="text-lg font-black text-white absolute">78%</span>
                  </div>
                  <div className="text-[10px] space-y-2 text-right">
                    <div className="flex items-center justify-end gap-1.5 text-yellow-500 font-semibold">
                      <span>Energy overload</span> <span className="text-xs">●</span>
                    </div>
                    <div className="flex items-center justify-end gap-1.5 text-slate-400">
                      <span>Device temp: High</span> <span className="text-xs">●</span>
                    </div>
                    <div className="flex items-center justify-end gap-1.5 text-slate-400">
                      <span>Transformer temp</span> <span className="text-xs">●</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[9px] text-brand-gray bg-slate-900/80 p-2 rounded-xl mt-4 border border-slate-800/40 flex justify-between items-center">
                <span className="text-brand-green font-bold">Optimized & Secure</span>
                <span>System status:</span>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
