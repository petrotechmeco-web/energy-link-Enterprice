import React from 'react';

export default function AboutSolutions() {
  const solutions = [
    { title: 'BESS', desc: 'سیستم‌های ذخیره‌سازی انرژی (باتری)', icon: '🔋' },
    { title: 'EMS', desc: 'سیستم مدیریت هوشمند انرژی', icon: '🖥️' },
    { title: 'Microgrid', desc: 'شبکه‌های محلی هوشمند', icon: '🌐' },
    { title: 'UPS', desc: 'سیستم‌های برق بدون وقفه صنعتی', icon: '🔌' },
    { title: 'Hybrid', desc: 'سیستم‌های هیبرید (خورشیدی + باتری)', icon: '☀️' },
    { title: 'Power Quality', desc: 'بهبود کیفیت توان و پایداری شبکه', icon: '⚡' },
    { title: 'Peak Shaving', desc: 'مدیریت پیک مصرف و کاهش هزینه‌ها', icon: '📉' },
    { title: 'Monitoring', desc: 'مانیتورینگ و پایش هوشمند آنلاین', icon: '📊' },
  ];

  return (
    <section className="py-20 bg-brand-dark text-right border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ۱. بخش مسیر ما (تایم‌لاین تحول) */}
        <div className="text-center mb-16">
          <span className="text-brand-green text-xs font-bold tracking-wider">مسیر ما</span>
          <h2 className="text-2xl font-black mt-1 text-white">تجربه، تخصص، تحول</h2>
          <p className="text-xs text-brand-gray mt-2">مسیر رشد ما در پروژه‌های صنعتی بزرگ تا ارائه راهکارهای هوشمند مدیریت انرژی</p>
          
          <div className="relative mt-12 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-slate-800 -translate-y-1/2 z-0" />
            
            {[
              { year: '۱۳۸۸', title: 'تأسیس', desc: 'شرکت پترو تک خاورمیانه' },
              { year: 'پروژه‌ها', title: 'پروژه‌های صنعتی', desc: 'نفت، گاز، پتروشیمی و نیروگاهی' },
              { year: 'سیستم‌ها', title: 'سیستم‌های قدرت', desc: 'طراحی و اجرای زیرساخت‌های برق' },
              { year: 'Energy Link', title: 'تولد برند هوشمند', desc: 'توسعه تخصصی مدیریت انرژی', active: true }
            ].map((item, index) => (
              <div key={index} className="relative z-10 bg-brand-navy border border-slate-800/80 p-5 rounded-xl w-56 text-center">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${item.active ? 'bg-brand-green shadow-md shadow-brand-green/60' : 'bg-slate-700'}`} />
                <div className={`text-base font-black ${item.active ? 'text-brand-green' : 'text-white'}`}>{item.year}</div>
                <div className="text-xs text-slate-300 font-bold mt-1">{item.title}</div>
                <div className="text-[10px] text-brand-gray mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ۲. بخش ما که هستیم به همراه مدل درختی شبکه */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-24">
          {/* نقشه شماتیک متصل شبکه */}
          <div className="lg:col-span-6 border border-slate-800/60 p-6 rounded-2xl bg-brand-navy/20 relative min-h-[300px] flex items-center justify-center">
            <div className="absolute w-24 h-24 bg-brand-cyan/10 rounded-full flex items-center justify-center border border-brand-cyan animate-pulse">
              <span className="text-xs font-bold text-brand-cyan">EMS Core</span>
            </div>
            {/* گره‌های متصل دور هسته مرکزی */}
            <div className="absolute top-8 right-12 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">☀️ SOLAR</div>
            <div className="absolute bottom-8 right-12 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">🔋 BESS</div>
            <div className="absolute top-8 left-12 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">💨 WIND</div>
            <div className="absolute bottom-8 left-12 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">🏭 FACTORY</div>
          </div>

          <div className="lg:col-span-6 text-right">
            <span className="text-brand-cyan text-xs font-bold uppercase">ما که هستیم؟</span>
            <h3 className="text-2xl font-black text-white mt-1 mb-4">پترو تک خاورمیانه و تولد Energy Link</h3>
            <p className="text-brand-gray text-xs md:text-sm leading-relaxed text-justify mb-6">
              شرکت پتروتک خاورمیانه با تکیه بر یک دهه تجربه در اجرای پروژه‌های صنعتی، نفت، گاز، پتروشیمی، نیروگاهی و زیرساخت‌های انرژی، همواره به‌عنوان یک شریک قابل اعتماد در طراحی، تأمین تجهیزات و اجرای پروژه‌های صنعتی شناخته شده است. با رشد فناوری‌های هوشمند مدیریت انرژی، تصمیم گرفتیم هسته تخصصی مستقل را ایجاد کنیم.
            </p>
            <button className="text-xs font-bold border border-slate-700 px-4 py-2 rounded-full text-slate-300 hover:border-white transition-colors">بیشتر بدانید ◀</button>
          </div>
        </div>

        {/* ۳. گرید راهکارهای یکپارچه */}
        <div className="text-center pt-10">
          <span className="text-brand-green text-xs font-bold tracking-wider">راهکارهای ما</span>
          <h2 className="text-2xl font-black mt-1 mb-10 text-white">راهکارهای یکپارچه مدیریت انرژی</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {solutions.map((sol, index) => (
              <div key={index} className="bg-brand-navy/60 border border-slate-850 p-5 rounded-xl text-right hover:border-brand-green/30 transition-all">
                <div className="text-2xl mb-2">{sol.icon}</div>
                <h4 className="text-sm font-bold text-white mb-1">{sol.title}</h4>
                <p className="text-[11px] text-brand-gray leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
