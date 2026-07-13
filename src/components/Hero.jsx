import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden text-right">
      {/* افکت نوری پس‌زمینه */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      {/* ۱. هدر موازنه شده */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/60">
        {/* لوگو سمت راست */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-lg font-black tracking-wider text-white flex items-center gap-1.5">
              ENERGY LINK <span className="text-brand-green text-xs">●</span>
            </div>
            <div className="text-[8px] tracking-widest text-brand-cyan uppercase -mt-0.5">Smart Energy Solutions</div>
          </div>
        </div>

        {/* ناوبری وسط - با ترتیب اصلاح شده */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-brand-gray">
          <a href="#home" className="text-white hover:text-brand-green transition-colors">خانه</a>
          <a href="#solutions" className="hover:text-brand-green transition-colors">راهکارها</a>
          <a href="#industries" className="hover:text-brand-green transition-colors">صنایع</a>
          <a href="#projects" className="hover:text-brand-green transition-colors">پروژه‌ها</a>
          <a href="#about" className="hover:text-brand-green transition-colors">درباره ما</a>
          <a href="#blog" className="hover:text-brand-green transition-colors">وبلاگ</a>
          <a href="#contact" className="hover:text-brand-green transition-colors">تماس با ما</a>
        </nav>

        {/* دکمه‌های سمت چپ */}
        <div className="flex items-center gap-4">
          <button className="text-xs text-brand-gray bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1">
            <span>FA</span> ▾
          </button>
          <button className="bg-brand-green hover:bg-brand-green/90 text-brand-dark font-bold text-xs px-5 py-2.5 rounded-full shadow-lg shadow-brand-green/20 transition-all">
            درخواست مشاوره
          </button>
        </div>
      </header>

      {/* ۲. محتوای هیرو */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* راست: متون */}
        <div className="lg:col-span-5 text-right flex flex-col items-start lg:items-start">
          <span className="text-brand-green font-medium text-xs mb-3 tracking-wide">درباره ما</span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
            مدیریت هوشمند مصرف انرژی <br />
            <span className="text-brand-green">برای صنعتی پایدار و رقابتی</span>
          </h1>
          <p className="text-brand-gray leading-relaxed text-xs md:text-sm mb-8 text-justify">
            ما در Energy Link با تکیه بر تجربه تخصصی، فناوری‌های نوین و رویکردی یکپارچه، راهکارهای مدیریت مصرف انرژی را به‌صورت هوشمند طراحی و اجرا می‌کنیم تا صنایع به بالاترین بهره‌وری با کمترین هزینه دست یابند.
          </p>
          <button className="group flex items-center gap-2 border border-brand-green/30 hover:border-brand-green px-5 py-2.5 rounded-full text-brand-green font-semibold text-xs bg-brand-green/5 transition-all">
            <span>داستان ما</span>
            <span className="bg-brand-green text-brand-dark w-5 h-5 rounded-full flex items-center justify-center text-[10px]">◀</span>
          </button>
        </div>

        {/* چپ: کارت‌ها */}
        <div className="lg:col-span-7 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-brand-navy/80 border border-slate-800 p-5 rounded-2xl backdrop-blur-md">
            <span className="text-[10px] text-brand-gray font-medium">ENERGY CONSUMPTION</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">1.25</span>
              <span className="text-xs text-brand-green font-semibold">MW</span>
            </div>
            <div className="h-24 mt-4 flex items-end gap-1">
              <div className="w-full bg-slate-800 h-1/3 rounded-sm"></div>
              <div className="w-full bg-slate-800 h-1/2 rounded-sm"></div>
              <div className="w-full bg-brand-cyan/40 h-2/3 rounded-sm"></div>
              <div className="w-full bg-brand-cyan h-3/4 rounded-sm"></div>
              <div className="w-full bg-brand-green h-full rounded-sm"></div>
            </div>
          </div>

          <div className="bg-brand-navy/80 border border-slate-800 p-5 rounded-2xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-brand-gray font-medium">ENERGY MANAGEMENT SYSTEM</span>
              <div className="flex items-center justify-between mt-4">
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-brand-green/20 border-t-brand-green">
                  <span className="text-sm font-bold text-white">78%</span>
                </div>
                <div className="text-[10px] space-y-1 text-left">
                  <div className="text-yellow-500">● Energy overload</div>
                  <div className="text-brand-gray">● Device temp: High</div>
                  <div className="text-brand-gray">● Transformer temp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
