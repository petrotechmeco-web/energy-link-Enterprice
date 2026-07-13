import React, { useState } from 'react';

export default function IndustriesFooter() {
  const industries = [
    { title: 'مرکز داده', desc: 'زیرساخت‌های پایدار با قابلیت دسترسی بالا و دایمی ۹۹.۹۹٪', icon: '🏢' },
    { title: 'بیمارستان‌ها', desc: 'تضمین عملکرد تجهیزات حیاتی و تداوم درمانی بدون وقفه', icon: '🏥' },
    { title: 'آزمایشگاه‌ها', desc: 'حفاظت از تجهیزات حساس و فرآیندهای تحقیقاتی دقیق وبایو', icon: '🔬' },
    { title: 'صنایع شیمیایی', desc: 'تأمین برق پایدار فرآیندهای پیوسته و کاهش ریسک توقف تولید', icon: '🧪' },
    { title: 'صنایع دارویی', desc: 'تأمین برق بدون وقفه برای خطوط حیاتی اتاق‌های استریل GMP', icon: '💊' },
  ];

  const stats = [
    { val: 'ROI', label: 'بیشترین بازگشت سرمایه برای مشتریان', icon: '📈' },
    { val: '24/7', label: 'پشتیبانی و خدمات پس از فروش دایمی', icon: '🕒' },
    { val: '99.99%', label: 'قابلیت اطمینان راهکارها و پایداری کانتینرها', icon: '🛡️' },
    { val: '30%', label: 'کاهش هزینه انرژی (به طور متوسط صنایع)', icon: '📉' },
    { val: '+100', label: 'پروژه موفق صنعتی و نیروگاهی برتر', icon: '⚙️' },
    { val: '+10', label: 'سال تجربه درخشان در حوزه صنایع مادر', icon: '💎' },
  ];

  return (
    <div className="bg-brand-dark text-right border-t border-slate-900">
      
      {/* ۱. اسلایدر صنایع حساس */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-green text-xs font-bold">صنایع هدف</span>
          <h2 className="text-2xl font-black mt-1 text-white">به صنایع حساس انرژی پایدار ارائه می‌دهیم</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="bg-brand-navy/40 border border-slate-850 p-5 rounded-xl flex flex-col justify-between hover:border-brand-cyan/20 transition-all">
              <div>
                <div className="text-2xl mb-3">{ind.icon}</div>
                <h3 className="text-xs font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-[10px] text-brand-gray leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ۲. ردیف آمار عددی ۶ تایی */}
      <section className="bg-brand-navy/30 py-12 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((st, i) => (
            <div key={i} className="p-4 border border-slate-850 bg-brand-dark/40 rounded-xl">
              <div className="text-xl font-black text-brand-green">{st.val}</div>
              <div className="text-[10px] text-slate-400 mt-1 font-medium leading-normal">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ۳. بخش چشم‌انداز، ارزش‌ها و ویژگی‌ها */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-brand-navy/30 border border-slate-850 p-6 rounded-xl">
          <h4 className="text-sm font-bold text-white mb-4">چشم‌انداز ما</h4>
          <p className="text-xs text-brand-gray leading-relaxed text-justify">
            تبدیل شدن به یکی از معتبرترین شرکت‌های منطقه در حوزه طراحی و اجرای سیستم‌های هوشمندسازی انرژی، مدیریت مصرف مصرف هوشمند و زیرساخت‌های پایدار برای صنایع حساس و کارخانجات بزرگ صنعتی کشور.
          </p>
        </div>
        
        <div className="bg-brand-navy/30 border border-slate-850 p-6 rounded-xl">
          <h4 className="text-sm font-bold text-white mb-4">ارزش‌های ما</h4>
          <div className="grid grid-cols-2 gap-4 text-center text-xs text-brand-gray">
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">품 کیفیت</div>
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">🤝 قابلیت اطمینان</div>
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">💡 نوآوری</div>
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">🌱 پایداری</div>
          </div>
        </div>

        <div className="bg-brand-navy/30 border border-slate-850 p-6 rounded-xl">
          <h4 className="text-sm font-bold text-white mb-4">چرا Energy Link؟</h4>
          <ul className="text-[11px] text-brand-gray space-y-2">
            <li>✓ تیم متخصص در حوزه برق، کنترل و انرژی</li>
            <li>✓ طراحی اختصاصی متناسب با نیاز هر پروژه صنعتی</li>
            <li>✓ استفاده از برندهای معتبر جهانی و ساختار Multi-Source</li>
            <li>✓ مطابق با استانداردهای بین‌المللی IEC, IEEE, NFPA</li>
          </ul>
        </div>
      </section>

      {/* ۴. بنر اقدام به عمل نهایی CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-brand-navy to-slate-900 border border-brand-green/20 p-8 rounded-2xl text-center relative overflow-hidden">
          <h3 className="text-xl font-black text-white mb-2">آماده تحول در زیرساخت انرژی سازمان خود هستید؟</h3>
          <p className="text-xs text-brand-gray mb-6">با تجربه و اعتماد شما، آینده‌ای پایدارتر، هوشمندتر و مطمئن‌تر می‌سازیم.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-brand-green text-brand-dark text-xs font-bold px-6 py-2.5 rounded-full">درخواست مشاوره رایگان</button>
            <button className="border border-slate-700 text-white text-xs font-bold px-6 py-2.5 rounded-full">تماس با ما</button>
          </div>
        </div>
      </section>

      {/* ۵. فوتر صنعتی کامل */}
      <footer className="bg-brand-navy/90 border-t border-slate-850 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-brand-gray mb-8">
          <div>
            <div className="text-base font-bold text-white mb-4">ENERGY LINK</div>
            <p className="leading-relaxed text-justify">بازوی هوشمند شرکت پترو تک خاورمیانه در حوزه مدیریت مصرف، بهینه‌سازی توان و سیستم‌های ذخیره‌سازی مدرن و کانتینری انرژی صنعتی.</p>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">اطلاعات تماس</h5>
            <ul className="space-y-2">
              <li>📞 تلفن: 021-88072557</li>
              <li>✉️ ایمیل: info@energy-link.ir</li>
              <li>📌 دفتر مرکزی: تهران، شهرک غرب، بلوار ایران زمین</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">تکنولوژی‌ها</h5>
            <div className="flex flex-wrap gap-2 text-[10px]">
              <span className="bg-slate-900 px-2 py-1 rounded">BESS</span>
              <span className="bg-slate-900 px-2 py-1 rounded">EMS</span>
              <span className="bg-slate-900 px-2 py-1 rounded">Microgrid</span>
              <span className="bg-slate-900 px-2 py-1 rounded">Hybrid Solutions</span>
            </div>
          </div>
        </div>
        <div className="text-center text-[10px] text-slate-500 pt-6 border-t border-slate-850/40">
          تمام حقوق این وب‌سایت متعلق به شرکت Energy Link می‌باشد. © ۲۰۲۶
        </div>
      </footer>

    </div>
  );
}
