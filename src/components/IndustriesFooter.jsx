import React from 'react';

export default function IndustriesFooter() {
  const industries = [
    { title: 'پالایشگاه‌ها و صنایع نفت و گاز', desc: 'مدیریت توان و پایش دائم ترانسفورماتورها و تجهیزات فرآیندی سنگین.', icon: '🛢️' },
    { title: 'صنایع پتروشیمی و شیمیایی', desc: 'بهینه‌سازی دیسپاچینگ انرژی و مدیریت بارهای بحرانی خطوط تولید.', icon: '🧪' },
    { title: 'کارخانجات و صنایع تولیدی مدرن', desc: 'کاهش هزینه‌های دیماند با راهکارهای Peak Shaving و ذخیره‌سازی مگاواتی.', icon: '🏭' },
    { title: 'زیرساخت‌های پیشرفته و کلین‌روم‌ها', desc: 'تضمین پایداری ۱۰۰ درصدی کیفیت توان و برق بدون وقفه در خطوط حساس.', icon: '⚡' },
  ];

  return (
    <div className="bg-brand-dark relative text-right">
      
      {/* 1. Target Industries Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-900">
        <div className="text-center mb-16">
          <span className="text-brand-cyan text-sm font-medium tracking-wider">بازارهای هدف</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">صنایعی که هوشمند می‌کنیم</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="bg-brand-navy/50 border border-slate-850 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-cyan/30 transition-all">
              <div>
                <div className="text-2xl mb-4 text-brand-cyan">{ind.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-xs text-brand-gray leading-relaxed">{ind.desc}</p>
              </div>
              <div className="text-[11px] text-brand-cyan/70 mt-6 cursor-pointer hover:text-brand-cyan transition-colors">
                مشاهده راهکار تخصصی ⚡
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Full Industrial Footer */}
      <footer className="bg-brand-navy border-t border-slate-850 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1">
            <div className="text-lg font-bold text-white mb-4">
              <span className="text-brand-green">●</span> ENERGY LINK
            </div>
            <p className="text-xs text-brand-gray leading-relaxed mb-4 text-justify">
              بازوی هوشمند شرکت پترو تک خاورمیانه در حوزه مدیریت مصرف، بهینه‌سازی توان و سیستم‌های ذخیره‌سازی مدرن انرژی صنعتی.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">دسترسی سریع</h4>
            <ul className="text-xs text-brand-gray space-y-3">
              <li><a href="#home" className="hover:text-white transition-colors">صفحه اصلی</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">راهکارهای یکپارچه</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">صنایع هدف</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">درباره پتروتک</a></li>
            </ul>
          </div>

          {/* Col 3: Technical Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">تکنولوژی‌ها</h4>
            <ul className="text-xs text-brand-gray space-y-3">
              <li>سیستم‌های کانتینری BESS</li>
              <li>نرم‌افزارهای پایش هوشمند EMS</li>
              <li>ریزشبکه‌ها و سیستم‌های هیبرید</li>
              <li>تجهیزات ارتقای پایداری و کیفیت توان</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">ارتباط با ما</h4>
            <ul className="text-xs text-brand-gray space-y-3 leading-relaxed">
              <li>📌 دفتر مرکزی: تهران، بلوار آفریقا</li>
              <li>📞 تلفن: ۸۸XXXXXX-۰۲۱</li>
              <li>✉️ ایمیل: info@petrotech-co.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-850 text-center text-[10px] text-slate-500">
          حقوق مادی و معنوی این پلتفرم متعلق به شرکت پترو تک خاورمیانه می‌باشد. © ۲۰۲۶
        </div>
      </footer>

    </div>
  );
}
