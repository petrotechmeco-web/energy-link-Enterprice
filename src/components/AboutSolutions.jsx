import React from 'react';

export default function AboutSolutions() {
  const solutions = [
    { id: 'bess', title: 'BESS', desc: 'سیستم‌های ذخیره‌سازی انرژی (باتری)', icon: '🔋' },
    { id: 'ems', title: 'EMS', desc: 'سیستم مدیریت هوشمند انرژی', icon: '🖥️' },
    { id: 'microgrid', title: 'Microgrid', desc: 'شبکه‌های محلی هوشمند', icon: '🌐' },
    { id: 'ups', title: 'UPS', desc: 'سیستم‌های برق بدون وقفه صنعتی', icon: '🔌' },
    { id: 'hybrid', title: 'Hybrid', desc: 'سیستم‌های هیبرید (خورشیدی + باتری)', icon: '☀️' },
    { id: 'power', title: 'Power Quality', desc: 'بهبود کیفیت توان و پایداری شبکه', icon: '⚡' },
    { id: 'peak', title: 'Peak Shaving', desc: 'مدیریت پیک مصرف و کاهش هزینه‌ها', icon: '📉' },
    { id: 'monitoring', title: 'Monitoring', desc: 'مانیتورینگ و پایش هوشمند آنلاین', icon: '📊' },
  ];

  return (
    <section className="py-24 bg-brand-navy/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Timeline Section */}
        <div className="text-center mb-20">
          <span className="text-brand-green text-sm font-medium tracking-wider">مسیر ما</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">تجربه، تخصص، تحول</h2>
          
          <div className="relative mt-16 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2 z-0" />
            
            {[
              { year: '۱۳۸۸', title: 'تأسیس', desc: 'شروع به کار شرکت' },
              { year: 'پروژه‌ها', title: 'صنایع مادر', desc: 'نفت، گاز و پتروشیمی' },
              { year: 'سیستم‌ها', title: 'توسعه قدرت', desc: 'زیرساخت‌های برق صنعتی' },
              { year: 'Energy Link', title: 'تولد برند هوشمند', desc: 'تمرکز بر بهینه‌سازی انرژی', active: true }
            ].map((item, index) => (
              <div key={index} className="relative z-10 bg-brand-dark border border-slate-800 p-6 rounded-xl w-48 text-center backdrop-blur-sm">
                <div className={`w-4 h-4 rounded-full mx-auto mb-3 transition-all ${item.active ? 'bg-brand-green shadow-lg shadow-brand-green/50 scale-125' : 'bg-slate-750'}`} />
                <div className={`text-lg font-black ${item.active ? 'text-brand-green' : 'text-white'}`}>{item.year}</div>
                <div className="text-xs text-brand-gray mt-1">{item.title}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Story / Intro Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 bg-brand-navy/60 border border-slate-850 p-8 md:p-12 rounded-3xl">
          <div>
            <span className="text-brand-cyan text-xs font-semibold tracking-wider">ما که هستیم؟</span>
            <h3 className="text-2xl font-black text-white mt-2 mb-6">پترو تک خاورمیانه و تولد Energy Link</h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-4 text-justify">
              شرکت ما با بیش از یک دهه تجربه در اجرای پروژه‌های صنعتی، نفت، پتروشیمی و نیروگاهی، همواره به‌عنوان یک شریک قابل اعتماد در طراحی، تأمین تجهیزات و اجرای پروژه‌های پیچیده شناخته شده است.
            </p>
            <p className="text-brand-gray text-sm leading-relaxed text-justify">
              با رشد شتابان فناوری‌های هوشمند، تصمیم گرفتیم هسته تخصصی مدیریت و ذخیره‌سازی مصرف انرژی را تحت برند مستقل <span className="text-white font-semibold">Energy Link</span> متمرکز کنیم تا راهکارهایی نوین و brand-agnostic (تأمین بهینه از چند سورس معتبر جهانی) را به صنایع پیشرفته ارائه دهیم.
            </p>
          </div>
          <div className="border border-slate-800 p-6 rounded-2xl bg-brand-dark/50 grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/40">
              <div className="text-2xl font-bold text-brand-green">۱۰۰+</div>
              <div className="text-xs text-brand-gray mt-1">پروژه موفق</div>
            </div>
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/40">
              <div className="text-2xl font-bold text-brand-cyan">۱۰+</div>
              <div className="text-xs text-brand-gray mt-1">سال تجربه تخصصی</div>
            </div>
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/40">
              <div className="text-2xl font-bold text-white">۳۰٪</div>
              <div className="text-xs text-brand-gray mt-1">کاهش میانگین هزینه‌ها</div>
            </div>
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/40">
              <div className="text-2xl font-bold text-yellow-500">۲۴/۷</div>
              <div className="text-xs text-brand-gray mt-1">پشتیبانی پایش آنلاین</div>
            </div>
          </div>
        </div>

        {/* 3. Integrated Solutions Grid */}
        <div className="text-center">
          <span className="text-brand-green text-sm font-medium tracking-wider">راهکارهای ما</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-12 text-white">راهکارهای یکپارچه مدیریت انرژی</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol) => (
              <div key={sol.id} className="group bg-brand-dark border border-slate-800/80 p-6 rounded-2xl text-right hover:border-brand-green/40 transition-all hover:translate-y-[-4px]">
                <div className="text-3xl mb-4 bg-brand-navy w-12 h-12 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-brand-green/30 transition-colors">
                  {sol.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">{sol.title}</h4>
                <p className="text-xs text-brand-gray leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
