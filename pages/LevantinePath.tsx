
import React, { useState } from 'react';
import { MapPin, ExternalLink, Info, Navigation as NavIcon, ChevronDown, ChevronUp } from 'lucide-react';

interface Station {
  name: string;
  icon: string;
  desc?: string;
  coords: { lat: number; lng: number };
}

interface CountrySection {
  country: string;
  flag: string;
  color: string;
  stations: Station[];
}

const LEVANTINE_STATIONS: CountrySection[] = [
  {
    country: "تركيا (قوافل الأناضول)",
    flag: "🇹🇷",
    color: "bg-blue-600",
    stations: [
      { name: "إسطنبول (أسكودار)", icon: "🕌", coords: { lat: 41.0082, lng: 29.0123 }, desc: "نقطة انطلاق المحمل الشريف من قصر يلدز إلى أسكودار." },
      { name: "كارتال", icon: "🏙️", coords: { lat: 40.8886, lng: 29.1852 } },
      { name: "بنديك", icon: "🏘️", coords: { lat: 40.8767, lng: 29.2356 } },
      { name: "جبزة", icon: "🏗️", coords: { lat: 40.8021, lng: 29.4307 }, desc: "تتميز ببيوتها وسوقها ومساجدها التاريخية." },
      { name: "هرسك", icon: "🛶", coords: { lat: 40.7225, lng: 29.5089 }, desc: "معبر مائي يعبره الحجاج بالقوارب." },
      { name: "إزنيق", icon: "🏰", coords: { lat: 40.4286, lng: 29.7214 }, desc: "مركز تجاري وقاعدة حصينة للقوافل." },
      { name: "يني شهير", icon: "🏠", coords: { lat: 40.2636, lng: 29.6525 } },
      { name: "بازارييري", icon: "🕍", coords: { lat: 40.0125, lng: 29.9042 } },
      { name: "بوزويك", icon: "🏘️", coords: { lat: 39.9075, lng: 30.0381 } },
      { name: "إسكيشهير", icon: "🌉", coords: { lat: 39.7767, lng: 30.5206 }, desc: "محطة كبرى للتوقف ليوم كامل للاستراحة." },
      { name: "سيدي بطل غازي", icon: "🕌", coords: { lat: 39.4447, lng: 30.5564 } },
      { name: "حسرف باشا", icon: "🛖", coords: { lat: 39.0333, lng: 30.6833 }, desc: "تتميز بتكيتها الضخمة وتوفر المؤن." },
      { name: "بايات", icon: "🏡", coords: { lat: 38.9881, lng: 30.9161 } },
      { name: "بولفادين", icon: "🏙️", coords: { lat: 38.7119, lng: 31.0503 } },
      { name: "أكشهير", icon: "🏛️", coords: { lat: 38.3592, lng: 31.4164 }, desc: "مدينة كبيرة بها أسواق مغطاة ومستشفيات تاريخية." },
      { name: "إلغن", icon: "🏠", coords: { lat: 38.2817, lng: 31.9167 } },
      { name: "لاديك", icon: "🏘️", coords: { lat: 38.2333, lng: 32.3667 } },
      { name: "قونية", icon: "🕌", coords: { lat: 37.8714, lng: 32.4847 }, desc: "محطة روحية وتاريخية عالمية." },
      { name: "إسماعيل", icon: "🏘️", coords: { lat: 37.7500, lng: 33.1167 } },
      { name: "كاربينار", icon: "🎡", coords: { lat: 37.7167, lng: 33.5500 } },
      { name: "أريجلي (إيرغلي)", icon: "🏗️", coords: { lat: 37.5133, lng: 34.0500 } },
      { name: "أولوقيشلة", icon: "⛰️", coords: { lat: 37.5458, lng: 34.4853 } },
      { name: "جفتهان", icon: "🏘️", coords: { lat: 37.5167, lng: 34.6500 } },
      { name: "رمضان أوغلو", icon: "🏰", coords: { lat: 37.2833, lng: 34.8833 } },
      { name: "أضنة", icon: "🏙️", coords: { lat: 36.9914, lng: 35.3308 } },
      { name: "ميسيس", icon: "🛖", coords: { lat: 36.9583, lng: 35.6167 } },
      { name: "كورتكولاغي", icon: "🏠", coords: { lat: 36.8833, lng: 35.8833 } },
      { name: "إسكندرون", icon: "⚓", coords: { lat: 36.5872, lng: 36.1733 } },
      { name: "بيلين", icon: "⛰️", coords: { lat: 36.5000, lng: 36.2167 } },
      { name: "أنطاكية", icon: "🏯", coords: { lat: 36.2021, lng: 36.1600 }, desc: "محطة رئيسية في جنوب الأناضول قبل الحدود الشامية." },
    ]
  },
  {
    country: "سوريا (قلب الدرب الشامي)",
    flag: "🇸🇾",
    color: "bg-emerald-600",
    stations: [
      { name: "حلب الشهباء", icon: "🏰", coords: { lat: 36.2021, lng: 37.1343 }, desc: "أهم مراكز التجمع في الشمال السوري." },
      { name: "خان السبل", icon: "🛖", coords: { lat: 35.7369, lng: 36.7214 } },
      { name: "معرة النعمان", icon: "📜", coords: { lat: 35.6481, lng: 36.6744 } },
      { name: "حماة", icon: "🎡", coords: { lat: 35.1318, lng: 36.7578 }, desc: "يُبتاع منها الإحرام والبياضات لجودة منسوجاتها." },
      { name: "الرستن", icon: "🌉", coords: { lat: 34.9258, lng: 36.7325 } },
      { name: "حمص", icon: "🕌", coords: { lat: 34.7324, lng: 36.7137 } },
      { name: "النبك", icon: "⛰️", coords: { lat: 34.0233, lng: 36.7267 } },
      { name: "قارة", icon: "🏠", coords: { lat: 34.1558, lng: 36.7456 } },
      { name: "يبرود", icon: "🏘️", coords: { lat: 33.9667, lng: 36.6583 } },
      { name: "القطيفة", icon: "🚪", coords: { lat: 33.7381, lng: 36.6019 } },
      { name: "دمشق (بوابة الله)", icon: "🕍", coords: { lat: 33.5138, lng: 36.2765 }, desc: "مركز انطلاق قافلة الحج الشامي الكبرى ومكان المحمل الشريف." },
      { name: "الكسوة", icon: "🏠", coords: { lat: 33.3606, lng: 36.2486 } },
      { name: "خان دنون", icon: "🛖", coords: { lat: 33.2981, lng: 36.2167 } },
      { name: "غباغب", icon: "🏘️", coords: { lat: 33.1517, lng: 36.2231 } },
      { name: "الصنمين", icon: "🏛️", coords: { lat: 33.0239, lng: 36.1858 } },
      { name: "الشيخ مسكين", icon: "🏠", coords: { lat: 32.8314, lng: 36.1553 } },
      { name: "المزيريب", icon: "🌊", coords: { lat: 32.7078, lng: 36.0158 }, desc: "المحطة المائية الأهم في حوران وبها بركة الاستحمام الشهيرة." },
      { name: "درعا (المنزل الأخير)", icon: "🏙️", coords: { lat: 32.6136, lng: 36.1039 } },
    ]
  },
  {
    country: "الأردن (درب البلقاء)",
    flag: "🇯🇴",
    color: "bg-red-600",
    stations: [
      { name: "خان المفرق (الرمثا)", icon: "🛣️", coords: { lat: 32.3500, lng: 36.2000 } },
      { name: "الزرقاء", icon: "🏗️", coords: { lat: 32.0608, lng: 36.0942 }, desc: "مركز للحراسة والمراقبة وفيها قصر شبيب." },
      { name: "البلقاء (عمان)", icon: "🏛️", coords: { lat: 31.9454, lng: 35.9284 } },
      { name: "سحاب", icon: "🏘️", coords: { lat: 31.8686, lng: 35.9897 } },
      { name: "الجيزة", icon: "🛖", coords: { lat: 31.6983, lng: 35.9558 } },
      { name: "القطرانة", icon: "🏰", coords: { lat: 31.2422, lng: 36.0422 }, desc: "فيها قلعة وحصن مائي عظيم." },
      { name: "الحسا", icon: "⛰️", coords: { lat: 30.8200, lng: 35.9800 } },
      { name: "عنيزة", icon: "🏜️", coords: { lat: 30.4850, lng: 35.7830 } },
      { name: "معان", icon: "🏘️", coords: { lat: 30.1944, lng: 35.7333 }, desc: "مدينة الحجاج وفيها حمام الحجاج وقلعتها الشهيرة." },
      { name: "المدورة", icon: "🏜️", coords: { lat: 29.1764, lng: 36.0719 }, desc: "آخر منازل الحج في الأردن." },
    ]
  },
  {
    country: "المملكة العربية السعودية (أرض الحرمين)",
    flag: "🇸🇦",
    color: "bg-amber-600",
    stations: [
      { name: "حالة عمار", icon: "🏁", coords: { lat: 29.1558, lng: 36.1667 }, desc: "نقطة الدخول إلى أراضي الحجاز." },
      { name: "ذات الحاج", icon: "🏠", coords: { lat: 28.9333, lng: 36.1333 } },
      { name: "تبوك", icon: "🏰", coords: { lat: 28.3835, lng: 36.5662 }, desc: "المحطة المركزية الكبرى على الطريق الشامي." },
      { name: "الأخضر", icon: "🌳", coords: { lat: 27.9167, lng: 36.7833 } },
      { name: "المعظم", icon: "🧱", coords: { lat: 27.5333, lng: 37.1667 }, desc: "فيها بركة المعظم الشهيرة من العهد العثماني." },
      { name: "الدار الحمراء", icon: "🏜️", coords: { lat: 27.2167, lng: 37.5333 } },
      { name: "الحِجر (مدائن صالح)", icon: "⛰️", coords: { lat: 26.7917, lng: 37.9528 } },
      { name: "العُلا", icon: "🌴", coords: { lat: 26.6167, lng: 37.9167 } },
      { name: "خيبر", icon: "🏰", coords: { lat: 25.6186, lng: 39.3175 } },
      { name: "المدينة المنورة", icon: "🟢", coords: { lat: 24.5247, lng: 39.5692 }, desc: "مقصد الزيارة النبوية الشريفة ومأرز الإيمان." },
      { name: "ذي الحليفة", icon: "🕌", coords: { lat: 24.4128, lng: 39.5414 }, desc: "ميقات أهل المدينة ومن سلك طريقهم." },
      { name: "الروحاء", icon: "🏜️", coords: { lat: 23.9500, lng: 39.2000 } },
      { name: "السقيا", icon: "💧", coords: { lat: 23.5000, lng: 38.8000 } },
      { name: "الجحفة", icon: "🕌", coords: { lat: 22.7000, lng: 39.1500 }, desc: "ميقات أهل الشام ومصر والمغرب." },
      { name: "رابغ", icon: "⚓", coords: { lat: 22.8053, lng: 39.0308 } },
      { name: "المرّ الظهران", icon: "🌴", coords: { lat: 21.4333, lng: 39.7167 } },
      { name: "مكة المكرمة", icon: "🕋", coords: { lat: 21.4225, lng: 39.8262 }, desc: "نهاية الرحلة المباركة ومسجد الله الحرام." },
    ]
  }
];

const LevantinePath = () => {
  const posterUrl = "https://lh3.googleusercontent.com/d/1zdBCjnBdlu1xEZZ6L-31ZfBK1NH29Ffu";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      
      {/* 1. Main Path Poster */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-5xl font-amiri font-bold text-stone-800 mb-4">مسار الحج الشامي الشامل</h2>
          <div className="w-32 h-2 bg-amber-600 mx-auto rounded-full mb-8"></div>
        </div>
        <div className="bg-white rounded-[3rem] p-6 shadow-2xl border border-stone-100 overflow-hidden flex items-center justify-center">
           <img 
            src={posterUrl} 
            alt="Faith Journey Comprehensive Poster" 
            className="w-full h-auto rounded-2xl shadow-lg border border-stone-50"
           />
        </div>
      </section>

      {/* 2. Interactive Track & List */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Section: Visual Vertical Track */}
        <div className="lg:w-1/3 flex flex-col items-center">
          <div className="sticky top-24 w-full bg-stone-50 rounded-[4rem] p-8 shadow-inner border border-stone-100 h-[calc(100vh-150px)] overflow-y-auto no-scrollbar">
            <h3 className="text-center font-bold text-stone-400 mb-10 text-sm uppercase tracking-widest">المخطط الطولي التفاعلي</h3>
            
            <div className="relative flex flex-col items-center pb-20">
              {/* Central Line with Section Colors */}
              <div className="absolute top-0 bottom-0 w-2 bg-stone-200 rounded-full left-1/2 -translate-x-1/2 overflow-hidden">
                {LEVANTINE_STATIONS.map((section, idx) => {
                  const totalStations = LEVANTINE_STATIONS.reduce((acc, s) => acc + s.stations.length, 0);
                  const height = (section.stations.length / totalStations) * 100;
                  return (
                    <div 
                      key={idx} 
                      className={`${section.color} w-full`} 
                      style={{ height: `${height}%` }}
                    ></div>
                  );
                })}
              </div>

              {/* Station Dots - Alternating Left and Right */}
              {LEVANTINE_STATIONS.flatMap(section => section.stations).map((station, idx) => (
                <div 
                  key={idx} 
                  className="relative z-10 w-full flex items-center group cursor-pointer"
                  style={{ marginBottom: '16px' }}
                >
                  {/* Left Side Labels (Even Index) */}
                  <div className="flex-1 text-left pr-4">
                    {idx % 2 === 0 && (
                      <span className="text-[10px] md:text-xs font-bold text-stone-500 group-hover:text-amber-600 transition-colors">
                        {station.name}
                      </span>
                    )}
                  </div>

                  {/* Central Node */}
                  <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-md transition-all group-hover:scale-150 ${
                    idx === 0 || idx === LEVANTINE_STATIONS.flatMap(s => s.stations).length -1 ? 'scale-125 bg-amber-600 ring-2 ring-amber-100' : 'bg-stone-400'
                  }`}></div>

                  {/* Right Side Labels (Odd Index) */}
                  <div className="flex-1 text-right pl-4">
                    {idx % 2 !== 0 && (
                      <span className="text-[10px] md:text-xs font-bold text-stone-500 group-hover:text-amber-600 transition-colors">
                        {station.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Detailed Station List */}
        <div className="lg:w-2/3 space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-amiri font-bold text-stone-800">تفاصيل المسار الجغرافي</h2>
            <p className="text-xl text-stone-500 leading-relaxed font-light">
              استعراض شامل لـ <b>{LEVANTINE_STATIONS.flatMap(s => s.stations).length} محطة تاريخية</b> تربط عواصم الخلافة بالأراضي المقدسة، مع تفصيل لكل مدينة وتوثيقها المكاني.
            </p>
          </div>

          <div className="space-y-24">
            {LEVANTINE_STATIONS.map((section, sIdx) => (
              <div key={sIdx} className="space-y-8">
                <div className={`inline-flex items-center gap-4 px-8 py-3 rounded-full text-white shadow-lg ${section.color}`}>
                   <span className="text-2xl">{section.flag}</span>
                   <span className="text-2xl font-bold font-amiri tracking-wider">{section.country}</span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {section.stations.map((station, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-6 rounded-[2rem] shadow-md border border-stone-100 flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-xl hover:border-amber-200 transition-all group relative overflow-hidden"
                    >
                      <div className="w-16 h-16 bg-stone-50 rounded-[1.5rem] flex items-center justify-center text-3xl shadow-inner group-hover:bg-amber-50 transition-colors shrink-0">
                        {station.icon}
                      </div>
                      
                      <div className="flex-1 space-y-3 text-center md:text-right">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                          <h3 className="text-2xl font-amiri font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
                            {station.name}
                          </h3>
                          <a 
                            href={`https://www.google.com/maps?q=${station.coords.lat},${station.coords.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 text-white px-4 py-2 rounded-xl hover:brightness-110 transition-all text-xs font-bold shadow-md ${section.color}`}
                          >
                            <NavIcon size={14} />
                            خرائط غوغل
                            <ExternalLink size={12} />
                          </a>
                        </div>
                        
                        {station.desc && (
                          <p className="text-base text-stone-500 leading-relaxed font-light">
                            {station.desc}
                          </p>
                        )}

                        <div className="flex justify-center md:justify-start gap-2">
                          <span className="bg-stone-50 text-stone-400 text-[10px] px-2 py-1 rounded-md flex items-center gap-1 border border-stone-100 font-mono">
                            {station.coords.lat.toFixed(4)}, {station.coords.lng.toFixed(4)}
                          </span>
                        </div>
                      </div>

                      <div className={`absolute top-0 right-0 bottom-0 w-1.5 ${section.color} opacity-20`}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LevantinePath;
