
import React, { useState } from 'react';
import { 
  Target, Rocket, ShieldCheck, Map, Activity, 
  Construction, Users, Bike, Landmark, Calendar, 
  FileCheck, Settings, Sparkles, Footprints, 
  ArrowLeftCircle, CheckCircle2, Globe, Plane, 
  Ship, Bus, Train, Lamp, Flag, Heart, ArrowDownCircle,
  Clock3, MapPin, Search, Hotel, Utensils, Phone, 
  ExternalLink, DollarSign, Info, Warehouse, History
} from 'lucide-react';

const GlobalJourneyData = [
  {
    region: "جنوب شرق آسيا",
    countries: "إندونيسيا، ماليزيا، بروناي",
    points: "مطار سوكارنو هاتا (جاكرتا)، كوالالمبور الدولي",
    timing: "من غرة ذي القعدة إلى 25 ذي القعدة",
    mode: "جوّي (أساطيل طيران الحج) وبحري (سفن تاريخية)",
    rituals: "مهرجان 'وداع الضيوف'، حلقات الذكر الجماعي، توزيع تمور البركة.",
    icon: <Plane size={20} />, // جوي
    type: "جوي",
    // Adding missing spiritual property to fix TS error
    spiritual: "spiritual_circles"
  },
  {
    region: "شبه القارة الهندية",
    countries: "باكستان، الهند، بنغلاديش",
    points: "مطار إسلام آباد، مطار إنديرا غاندي (دلهي)، ميناء كراتشي",
    timing: "من 10 ذي القعدة إلى نهاية ذي القعدة",
    mode: "بحري وجوّي",
    rituals: "أناشيد 'التلبية' المحلية، مراسم الصلاة الجامعة، توزيع لباس الإحرام المنسوج يدوياً.",
    icon: <Ship size={20} />, // بحري
    type: "بحري",
    // Adding missing spiritual property to fix TS error
    spiritual: "nasheed"
  },
  {
    region: "غرب ووسط آسيا",
    countries: "تركيا، دول آسيا الوسطى (أوزبكستان، طاجيكستان)",
    points: "مطار إسطنبول، سمرقند (قطار الحرير الحديث)، مطار باكو",
    timing: "من منتصف شوال (تجهيز) إلى 20 ذي القعدة",
    mode: "جوّي وقطارات سريعة",
    rituals: "مراسم 'المحمل العثماني' الرمزية، يوم الشمع والزيت، مهرجان الصنجق الشريف.",
    icon: <Plane size={20} />, // جوي
    type: "جوي",
    // Adding missing spiritual property to fix TS error
    spiritual: "oil_wax"
  },
  {
    region: "بلاد الشام",
    countries: "سورية، الأردن، لبنان، فلسطين",
    points: "مطار دمشق الدولي، مطار الملكة علياء (عمان)",
    timing: "من غرة شوال (بدء الاحتفالات) إلى 5 ذي الحجة",
    mode: "برّي (قافلة الهودج الرمزية) ثم جوّي",
    rituals: "يوم الورد الدمشقي، دورة المحمل في الشوارع القديمة، عرض الصنجق في الجامع الأموي.",
    icon: <Bus size={20} />, // بري
    type: "بري",
    // Adding missing spiritual property to fix TS error
    spiritual: "rose_sanjak"
  },
  {
    region: "العراق",
    countries: "العراق",
    points: "بغداد",
    timing: "من منتصف ذي القعدة إلى 5 ذي الحجة",
    mode: "برّي",
    rituals: "مراسم توديع القوافل من جامع الإمام الأعظم، حلقات الذكر، وتوزيع التمور العراقية للمسافرين.",
    icon: <Bus size={20} />,
    type: "بري",
    spiritual: "spiritual_circles"
  },
  {
    region: "مصر وشمال أفريقيا",
    countries: "مصر، المغرب، الجزائر، تونس، ليبيا",
    points: "مطار القاهرة، مطار محمد الخامس (الدار البيضاء)، ميناء الإسكندرية",
    timing: "من أول ذي القعدة إلى 2 ذي الحجة",
    mode: "بحري وجوّي عبر البحر الأحمر",
    rituals: "موكب المحمل المصري التاريخي، احتفالية 'الكسوة'، مجالس العلم والفتوى.",
    icon: <Ship size={20} />, // بحري
    type: "بحري",
    // Adding missing spiritual property to fix TS error
    spiritual: "spiritual_circles"
  },
  {
    region: "أفريقيا جنوب الصحراء",
    countries: "نيجيريا، السنغال، مالي، إثيوبيا",
    points: "مطار مورتالا محمد (لاغوس)، مطار دكار الدولي",
    timing: "من 15 ذي القعدة إلى غرة ذي الحجة",
    mode: "جوّي",
    rituals: "مهرجانات الحج القبلية، أناشيد دينية تقليدية، مباركة كبار السن للمسافرين.",
    icon: <Plane size={20} />, // جوي
    type: "جوي",
    // Adding missing spiritual property to fix TS error
    spiritual: "nasheed"
  },
  {
    region: "أوروبا والأمريكتين",
    countries: "بريطانيا، فرنسا، أمريكا، كندا",
    points: "مطار هيثرو (لندن)، مطار JFK (نيويورك)، مطار شارل ديغول",
    timing: "من غرة ذي القعدة إلى 5 ذي الحجة",
    mode: "جوّي (رحلات مجمّعة)",
    rituals: "ندوات 'رحلة البحث عن الذات'، لقاءات التعارف بين الحجاج المغتربين، برامج AR التعليمية.",
    icon: <Plane size={20} />, // جوي
    type: "جوي",
    // Adding missing spiritual property to fix TS error
    spiritual: "spiritual_circles"
  }
];

const KHANS_STUDY_DATA = [
  {
    name: "خان أسعد باشا – دمشق",
    en: "Khan As’ad Pasha",
    location: "سوق البزورية – دمشق القديمة",
    coords: "33.509°N – 36.306°E",
    history: "أكبر خان في دمشق القديمة، بُني عام 1751–1752 على يد أسعد باشا العظم. كان مركزًا رئيسيًا للتجار والقوافل القادمة قبل انطلاق قافلة الحج الشامي. يتميز بفناء ضخم وقباب حجرية سوداء وبيضاء.",
    suitability: "مساحته الكبيرة (2500 م²)، تصميمه الفندقي الأصلي، وموقعه داخل قلب دمشق يجعله مثاليًا لفندق تراثي فاخر 5 نجوم.",
    isHighlight: true
  },
  {
    name: "خان الجمرك – دمشق القديمة",
    en: "Khan al-Gumruk",
    location: "سوق الحميدية – قرب الجامع الأموي",
    history: "من أقدم خانات دمشق، كان مركزًا للتجار القادمين من الأناضول والحجاز. استخدمته قوافل الحج للتزوّد بالمؤن.",
    suitability: "موقعه الاستراتيجي داخل السوق، ومساحته الواسعة، وقربه من الجامع الأموي يجعله مركز جذب سياحي فندقي."
  },
  {
    name: "خان السبع – دمشق",
    en: "Khan al-Saba’",
    location: "منطقة القنوات – دمشق",
    history: "كان محطة استراحة للقوافل قبل مغادرة دمشق جنوبًا. سُمّي “السبع” لأنه كان يضم سبع بوابات أو سبع غرف رئيسية.",
    suitability: "مبنى مستقل، قريب من الطرق الرئيسية، ويمكن تحويله إلى نُزُل حج تراثي يخدم زوار المسار."
  },
  {
    name: "خان دنون – ريف دمشق",
    en: "Khan Danun",
    location: "بلدة خان دنون – جنوب دمشق بـ 30 كم",
    history: "محطة رئيسية لقافلة الحج الشامي بعد مغادرة دمشق. كان يضم بئرًا، غرفًا للقوافل، وإسطبلات للحماية.",
    suitability: "موقعه على الطريق الدولي، ومساحته الكبيرة، وإمكانية تحويله إلى نُزُل حج تراثي كبير.",
    isHighlight: true
  },
  {
    name: "خان الشيخ – ريف دمشق",
    en: "Khan al-Shih",
    location: "بلدة خان الشيح – جنوب غرب دمشق",
    history: "محطة مهمة للقوافل المتجهة نحو درعا. كان مركزًا للتزوّد بالماء والغذاء نظراً لمرور نهر الأعوج قربه.",
    suitability: "مبنى تاريخي واسع، يمكن تحويله إلى فندق ريفي تراثي يجمع بين عبق التاريخ وجمال الطبيعة."
  },
  {
    name: "خان قطنا – ريف دمشق",
    en: "Khan Qatana",
    location: "مدينة قطنا – جنوب دمشق",
    history: "استخدمته القوافل كمحطة ليلية لتأمين القافلة قبل التوغل في سهل حوران. كان يضم غرفًا حجرية حصينة.",
    suitability: "موقعه بين دمشق ودرعا، مناسب جداً ليكون فندقاً صغيراً أو نُزُلاً تراثياً للرحلات الاستكشافية."
  },
  {
    name: "خان بصرى – بصرى الشام",
    en: "Khan Bosra",
    location: "داخل مدينة بصرى الأثرية – درعا",
    history: "من أهم محطات الحج الشامي، كان مركزًا للتجمع قبل دخول الأردن. يقع قرب المسرح الروماني والقلعة الشهيرة.",
    suitability: "موقع أثري عالمي مسجل في اليونسكو، يمكن تحويله إلى فندق أثري فاخر داخل مدينة أثرية حية.",
    isHighlight: true
  },
  {
    name: "خان المزيريب – درعا",
    en: "Khan al-Muzayrib",
    location: "بلدة المزيريب – غرب درعا",
    history: "كان مركزًا لتجميع القافلة وتزويدها بالمياه من “بركة المزيريب” الشهيرة. كان آخر محطة داخل سوريا قبل دخول الأراضي الأردنية.",
    suitability: "وجود البركة التاريخية يعطيه قيمة سياحية وبيئية عالية جداً لإقامة نُزل مائي تراثي فريد."
  }
];

const FutureRevival = () => {
  const mainTravelMap = "https://lh3.googleusercontent.com/d/1htsdoUBwSwl7qSDJKjMJElIYdtUDm7oB";
  const festivalStakeholdersMap = "https://lh3.googleusercontent.com/d/1yrs_Ywp8RjSlNCs0htC-aDUtR-gSejT7";
  const bicycleTripImage = "https://lh3.googleusercontent.com/d/1gzWmZMZ46LJXcby31vx0a2qFUkEgBTBH";
  const camelTripImage = "https://lh3.googleusercontent.com/d/1N7xn-XfKoXQLOZqfLTqSDCZveh8DdV5S";

  const [searchTerm, setSearchTerm] = useState('');

  const filteredJourney = GlobalJourneyData.filter(item => 
    item.region.includes(searchTerm) || item.countries.includes(searchTerm)
  );

  const bicycleStages = [
    { day: "اليوم الأول", path: "حلب إلى معرة النعمان", dist: "65-75 كم", features: "تنطلق من محيط باب أنطاكية جنوباً عبر الأراضي الزراعية التاريخية." },
    { day: "اليوم الثاني", path: "معرة النعمان إلى خان شيخون ثم صوران", dist: "60-70 كم", features: "محطة خان شيخون الاستراتيجية ولوحات تعريفية بالطريق القديم." },
    { day: "اليوم الثالث", path: "صوران إلى حماة ثم الرستن", dist: "55-65 كم", features: "تدرج طبيعي بين السهول ومجرى نهر العاصي وقصص تاريخية." },
    { day: "اليوم الرابع", path: "الرستن إلى حمص ثم قارات أو تلكلخ", dist: "حوالي 60 كم", features: "مرور بمحطات تراثية مثل خان الحصن وتفعيل نقاط الظل." },
    { day: "اليوم الخامس", path: "قارات إلى النبك ثم القطيفة", dist: "55-60 كم", features: "تضاريس القلمون الجبلية وشريط القرى المرتبط بالقوافل." },
    { day: "اليوم السادس", path: "القطيفة إلى دمشق", dist: "35-45 كم", features: "الختام في باب شرقي أو ساحة المرجة تأكيداً للوصول الرمزي." },
  ];

  const camelStages = [
    { day: "اليوم الأول", path: "دمشق إلى الكسوة ثم دير خرير", dist: "35-45 كم", features: "الخروج التقليدي من بوابة الحج والكسوة كمحطة استراحة." },
    { day: "اليوم الثاني", path: "دير خرير إلى درعا", dist: "50-60 كم", features: "انتقال عبر أراضٍ شبه صحراوية ونقطة درعا التجارية الإدارية." },
    { day: "اليوم الثالث", path: "درعا إلى نصيب ثم معبر الحدود", dist: "40-50 كم", features: "التحضير لعبور الحدود الأردنية وإبراز محطات القوافل." },
    { day: "اليوم الرابع", path: "المعبر الأردني إلى إربد", dist: "80-90 كم", features: "السهول الشمالية للأردن وتوضيح المواقع التاريخية." },
    { day: "اليوم الخامس", path: "إربد إلى الزرقاء ثم سحاب", dist: "70-80 كم", features: "تقاطع التاريخ مع الحضر ومحطة الزرقاء كمركز تجاري." },
    { day: "اليوم السادس", path: "سحاب إلى عمان", dist: "20-30 كم", features: "الوصول لوسط المدينة أو جبل القلعة كمحطة رمزية ختامية." },
  ];

  return (
    <div className="space-y-0 bg-[#fdfaf5]">
      
      {/* 1. Hero & Strategic Vision */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-6 animate-in fade-in duration-1000">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-4">
              <Rocket size={18} />
              رؤية 2030 وما بعدها
            </div>
            <h2 className="text-6xl font-amiri font-bold text-stone-800">الرؤية المستقبلية والأهداف الاستراتيجية</h2>
            <div className="w-32 h-2 bg-amber-600 mx-auto rounded-full"></div>
            <p className="text-2xl text-stone-500 max-w-4xl mx-auto font-light leading-relaxed">
              تحويل المسار إلى محور ثقافي حضاري عالمي يجمع بين عراقة التاريخ ومتطلبات الاستدامة المعاصرة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-stone-100 space-y-10 order-2 lg:order-1">
               <div className="space-y-6">
                  <div className="flex items-center gap-4 border-r-4 border-amber-600 pr-6">
                    <Target className="text-amber-600" size={32} />
                    <h3 className="text-3xl font-amiri font-bold text-stone-800">الأهداف الرئيسية والفرعية</h3>
                  </div>
                  <div className="grid gap-6">
                    {[
                      { icon: <Globe />, title: "التراث العالمي", desc: "تسجيل المسار على قائمة اليونسكو وحمايته واستدامته." },
                      { icon: <Activity />, title: "الربط التاريخي", desc: "إعادة الربط الفعلي والرمزي بين نقاط المسار التاريخية." },
                      { icon: <Users />, title: "الهوية الثقافية", desc: "تعزيز القيم الروحية والاجتماعية المرتبطة بالحج الشامي." },
                      { icon: <Map />, title: "السياحة المستدامة", desc: "تطوير مسار سياحي ثقافي آمن وقابل للزيارة عالمياً." }
                    ].map((goal, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-3xl hover:bg-stone-50 transition-colors">
                        <div className="text-amber-600 shrink-0">{goal.icon}</div>
                        <div>
                          <p className="font-bold text-stone-800">{goal.title}</p>
                          <p className="text-stone-500 text-sm">{goal.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group relative">
                 <img src={mainTravelMap} alt="Strategic Travel Map" className="w-full h-auto transform transition-transform duration-[10s] group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-8">
                   <p className="text-white text-xl font-amiri font-bold italic tracking-wide">خريطة السفر الاستراتيجية للمسار</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Global Journey Schedule (جدول الانطلاق العالمي) */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-4 bg-stone-900 text-white px-8 py-3 rounded-full shadow-xl">
               <Globe className="text-amber-500 animate-spin-slow" size={28} />
               <h3 className="text-2xl font-amiri font-bold">خارطة الانطلاق العالمي لأمة محمد ﷺ</h3>
             </div>
             <p className="text-xl text-stone-600 font-light leading-relaxed">
               جدول زمكاني منظم يربط أقاليم العالم برحلة الإيمان الكبرى، مدمجاً بفعاليات روحية وأثرية تعيد إحياء تراث الحج العالمي.
             </p>
             
             {/* Timeline Visualizer */}
             <div className="relative pt-12 pb-8">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-stone-200 -translate-y-1/2"></div>
                <div className="relative z-10 flex justify-between">
                   {[
                     { label: "بدء التجهيز", date: "20 شوال", icon: <Clock3 /> },
                     { label: "دورة الصنجق والزيت", date: "1-15 ذي القعدة", icon: <Flag /> },
                     { label: "انطلاق القوافل", date: "20 ذي القعدة", icon: <Plane /> },
                     { label: "اكتمال الوصول", date: "5 ذي الحجة", icon: <CheckCircle2 /> },
                     { label: "ذروة المناسك", date: "8-13 ذي الحجة", icon: <Landmark />, active: true }
                   ].map((t, i) => (
                     <div key={i} className="flex flex-col items-center gap-3">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-lg ${t.active ? 'bg-amber-600 text-white scale-110' : 'bg-white text-stone-400'}`}>
                           {t.icon}
                        </div>
                        <div className="text-center">
                           <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.date}</p>
                           <p className={`text-sm font-bold ${t.active ? 'text-amber-800' : 'text-stone-600'}`}>{t.label}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Interactive Table Content */}
          <div className="bg-white rounded-[4rem] shadow-3xl border border-stone-100 overflow-hidden">
            <div className="p-8 md:p-12 border-b border-stone-100 bg-stone-50/50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                 <h4 className="text-3xl font-amiri font-bold text-stone-800">جدول الانطلاق العالمي المقترح</h4>
                 <p className="text-stone-500 font-light">من نقاط التجمع الكبرى إلى رحاب مكة المكرمة</p>
              </div>
              <div className="relative w-full md:w-96">
                 <input 
                   type="text" 
                   placeholder="بحث بالإقليم أو الدولة..." 
                   className="w-full bg-white border border-stone-200 rounded-2xl py-4 pr-12 pl-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none shadow-sm"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-stone-50">
                    <th className="px-8 py-6 font-bold text-stone-800 text-lg">الإقليم</th>
                    <th className="px-8 py-6 font-bold text-stone-800 text-lg">نقاط الانطلاق الرئيسية</th>
                    <th className="px-8 py-6 font-bold text-stone-800 text-lg text-center">الفترة المقترحة</th>
                    <th className="px-8 py-6 font-bold text-stone-800 text-lg text-center">وسيلة النقل</th>
                    <th className="px-8 py-6 font-bold text-stone-800 text-lg">الفعاليات الروحية والطقوس</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredJourney.map((item, idx) => (
                    <tr key={idx} className="group hover:bg-amber-50/20 transition-all">
                      <td className="px-8 py-8">
                         <div className="space-y-1">
                            <p className="text-xl font-amiri font-bold text-amber-900">{item.region}</p>
                            <p className="text-xs text-stone-400 leading-relaxed max-w-[150px]">{item.countries}</p>
                         </div>
                      </td>
                      <td className="px-8 py-8">
                         <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-stone-400 mt-1 shrink-0" />
                            <p className="text-stone-700 text-base font-medium">{item.points}</p>
                         </div>
                      </td>
                      <td className="px-8 py-8 text-center">
                         <span className="bg-stone-100 text-stone-600 px-4 py-2 rounded-full font-bold text-sm">
                           {item.timing}
                         </span>
                      </td>
                      <td className="px-8 py-8">
                         <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                               {item.icon}
                            </div>
                            <span className="text-xs font-bold text-stone-400">{item.type}</span>
                         </div>
                      </td>
                      <td className="px-8 py-8 max-w-[300px]">
                         <div className="space-y-4">
                            <p className="text-stone-600 text-sm leading-relaxed">{item.rituals}</p>
                            <div className="flex gap-2">
                               {item.spiritual === 'rose_sanjak' && (
                                 <>
                                   <div className="flex items-center gap-1 bg-pink-50 text-pink-700 px-2 py-1 rounded-md text-[10px] font-bold border border-pink-100">
                                      <Heart size={10} /> الورد الدمشقي
                                   </div>
                                   <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-md text-[10px] font-bold border border-amber-100">
                                      <Flag size={10} /> الصنجق الشريف
                                   </div>
                                 </>
                               )}
                               {item.spiritual === 'oil_wax' && (
                                 <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-[10px] font-bold border border-blue-100">
                                    <Lamp size={10} /> الزيت والشمع
                                 </div>
                               )}
                               {(item.spiritual === 'nasheed' || item.spiritual === 'spiritual_circles') && (
                                 <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-[10px] font-bold border border-emerald-100">
                                    <Activity size={10} /> حلقات الذكر
                                 </div>
                               )}
                            </div>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-stone-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                     <span className="text-stone-400 text-xs font-bold">الورد (محبة وسلام)</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                     <span className="text-stone-400 text-xs font-bold">الصنجق (رمز روحي)</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                     <span className="text-stone-400 text-xs font-bold">الزيت (نور وتهيؤ)</span>
                  </div>
               </div>
               <p className="text-stone-500 text-xs italic tracking-wider">خارطة مقترحة ضمن مشروع الإحياء المستقبلي - 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hospitality & Services Guide */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-amiri font-bold text-stone-800">دليل الضيافة والخدمات على المسار</h2>
            <div className="w-24 h-2 bg-amber-600 mx-auto rounded-full"></div>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">خيارات إقامة ومطاعم مقترحة تخدم زوار المسار في دمشق ودرعا وبصرى الشام.</p>
          </div>

          {/* Damascus Hospitality */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-r-4 border-amber-600 pr-6">
              <Hotel className="text-amber-600" size={32} />
              <h3 className="text-3xl font-amiri font-bold text-stone-800">فنادق دمشق الموصى بها</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "فندق داما روز – دمشق",
                  en: "Dama Rose Hotel",
                  address: "شارع شكري القوتلي – أبو رمانة – دمشق، سوريا",
                  phones: ["+963 11 222 9200", "+963 11 332 2650", "موبايل: +963 945 000100"],
                  prices: ["غرفة مفردة: 200 – 255 دولار", "جناح صغير: 350 دولار"],
                  map: "https://maps.app.goo.gl/2u8p7u8q8Qv4xJ2d7",
                  star: "⭐ 1"
                },
                {
                  name: "فندق الشيراتون – دمشق",
                  en: "Sheraton Damascus Hotel",
                  address: "طريق بيروت – دمشق، سوريا (قرب ساحة الأمويين)",
                  phones: ["+963 11 221 8000"],
                  prices: ["180 – 250 دولار لليلة (حسب الموسم)"],
                  map: "https://maps.app.goo.gl/8g5xJ6m4Yk9pZt8u9",
                  star: "⭐ 2"
                },
                {
                  name: "فندق القيصر – دمشق",
                  en: "Al Kaisar Hotel",
                  address: "منطقة الحلبوني – دمشق",
                  phones: ["+963 11 231 9000"],
                  prices: ["60 – 90 دولار لليلة"],
                  map: "https://maps.app.goo.gl/5Q4vQ2k7t6cFJt7d9",
                  star: "⭐ 3"
                }
              ].map((h, i) => (
                <div key={i} className="bg-white p-8 rounded-[3rem] shadow-xl border border-stone-100 space-y-6 hover:border-amber-200 transition-all group">
                   <div className="flex justify-between items-start">
                      <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                        <Hotel size={24} />
                      </div>
                      <span className="text-stone-400 font-bold">{h.star}</span>
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-2xl font-amiri font-bold text-stone-800">{h.name}</h4>
                      <p className="text-stone-400 text-sm font-medium">{h.en}</p>
                   </div>
                   <div className="space-y-3 text-sm text-stone-600">
                      <div className="flex items-start gap-2">
                         <MapPin size={16} className="text-amber-600 mt-0.5 shrink-0" />
                         <span>{h.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                         <Phone size={16} className="text-amber-600 mt-0.5 shrink-0" />
                         <div className="flex flex-col gap-1">
                            {h.phones.map((p, pi) => <span key={pi}>{p}</span>)}
                         </div>
                      </div>
                      <div className="flex items-start gap-2">
                         <DollarSign size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                         <div className="flex flex-col gap-1">
                            {h.prices.map((p, pi) => <span key={pi} className="font-bold">{p}</span>)}
                         </div>
                      </div>
                   </div>
                   <a 
                     href={h.map} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-white rounded-2xl font-bold hover:bg-amber-600 transition-colors"
                   >
                     <ExternalLink size={16} />
                     عرض الموقع على الخريطة
                   </a>
                </div>
              ))}
            </div>
          </div>

          {/* Damascus Restaurants */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-r-4 border-emerald-600 pr-6">
              <Utensils className="text-emerald-600" size={32} />
              <h3 className="text-3xl font-amiri font-bold text-stone-800">مطاعم مقترحة في دمشق</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "مطعم بيت جبري", loc: "حي القيمرية – دمشق القديمة", phone: "+963 11 543 5600", price: "10 – 20 دولار", map: "https://maps.app.goo.gl/7Y8yJ2p9bV2xk6tA8" },
                { name: "مطعم النوفرة", loc: "ساحة النوفرة – دمشق القديمة (قرب الجامع الأموي)", phone: "-", price: "8 – 15 دولار", map: "https://maps.app.goo.gl/4m9Qk8p7sV3tJ9dA7" },
                { name: "مطعم الخان", loc: "باب توما – دمشق", phone: "-", price: "12 – 18 دولار", map: "https://maps.app.goo.gl/6b8tQp7dV4sJt2kA9" }
              ].map((r, i) => (
                <div key={i} className="bg-white p-8 rounded-[3rem] shadow-lg border border-stone-100 hover:shadow-xl transition-all flex flex-col justify-between group">
                   <div className="space-y-4">
                      <div className="flex items-center justify-between">
                         <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <Utensils size={20} />
                         </div>
                         <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">{r.price}</span>
                      </div>
                      <h4 className="text-2xl font-amiri font-bold text-stone-800">{r.name}</h4>
                      <p className="text-sm text-stone-500 leading-relaxed flex items-start gap-2">
                        <MapPin size={14} className="mt-1 shrink-0 text-stone-400" />
                        {r.loc}
                      </p>
                      {r.phone !== "-" && (
                        <p className="text-sm text-stone-500 flex items-center gap-2">
                           <Phone size={14} className="text-stone-400" />
                           {r.phone}
                        </p>
                      )}
                   </div>
                   <a 
                     href={r.map} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="mt-6 flex items-center justify-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
                   >
                     <ExternalLink size={16} />
                     خرائط غوغل
                   </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Daraa & Bosra Section */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="bg-stone-900 rounded-[4rem] p-12 md:p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start">
               <div className="lg:w-1/3 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-amber-600 px-4 py-1 rounded-full text-xs font-bold uppercase">جنوب سوريا</div>
                  <h3 className="text-4xl font-amiri font-bold">درعا وبصرى الشام</h3>
                  <p className="text-lg text-stone-400 font-light leading-relaxed">
                    تعتبر درعا وبصرى الشام محطات مفصلية تاريخية مباشرة على مسار الحج الشامي، وتتوفر فيها خدمات أساسية للزوار.
                  </p>
                  <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                    <div className="flex items-center gap-4 group cursor-default">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                        <Hotel size={24} className="text-amber-500 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-bold">فنادق درعا</p>
                        <p className="text-xs text-stone-500">إقامة مريحة في قلب المحطة التاريخية</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-default">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                        <Utensils size={24} className="text-emerald-500 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-bold">مطاعم درعا</p>
                        <p className="text-xs text-stone-500">مذاق أصيل من سهل حوران</p>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {[
                    { type: "hotel", name: "فندق الواحة – درعا", desc: "طريق درعا – البلد", info: "السعر: 30 – 50 دولار", map: "https://maps.app.goo.gl/9t7pQ2m8sF4kJ2dA8", phone: "+963 15 221 100" },
                    { type: "hotel", name: "فندق درعا الدولي", desc: "مركز مدينة درعا", info: "السعر: 25 – 40 دولار", map: "https://maps.app.goo.gl/3s8pQ9k2vF7tL8dA9" },
                    { type: "restaurant", name: "مطعم السرايا – درعا", desc: "درعا", info: "متوسط السعر: 8 – 12 دولار", map: "https://maps.app.goo.gl/1p9Qk7t8sV4mJ2dA6" },
                    { type: "restaurant", name: "مطعم البستان – درعا", desc: "درعا", info: "متوسط السعر: 7 – 10 دولار", map: "https://maps.app.goo.gl/5k8Qp7t2sF9mJ3dA8" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.5rem] hover:bg-white/10 transition-all flex flex-col justify-between group">
                       <div className="space-y-3">
                          <div className="flex justify-between items-start">
                             <div className={`p-2 rounded-lg ${item.type === 'hotel' ? 'text-amber-400 bg-amber-400/10' : 'text-emerald-400 bg-emerald-400/10'}`}>
                                {item.type === 'hotel' ? <Hotel size={18} /> : <Utensils size={18} />}
                             </div>
                             <a href={item.map} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                                <ExternalLink size={16} />
                             </a>
                          </div>
                          <h4 className="text-xl font-bold font-amiri text-white group-hover:text-amber-500 transition-colors">{item.name}</h4>
                          <p className="text-xs text-stone-400 flex items-center gap-2">
                             <MapPin size={12} />
                             {item.desc}
                          </p>
                          <div className="flex flex-col gap-1 mt-2">
                             <p className="text-xs font-bold text-amber-500">{item.info}</p>
                             {item.phone && <p className="text-[10px] text-stone-500">{item.phone}</p>}
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategies Section */}
      <section className="bg-stone-900 py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center space-y-4">
             <h3 className="text-4xl font-amiri font-bold text-amber-500">الاستراتيجيات المتبعة لتحقيق الأهداف</h3>
             <p className="text-stone-400 text-lg">منهجية علمية متكاملة لضمان نجاح مشروع الإحياء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FileCheck size={40} />, title: "توثيق", desc: "إنشاء قاعدة بيانات رقمية وجيولوجية شاملة (GIS)." },
              { icon: <ShieldCheck size={40} />, title: "حماية", desc: "وضع حدود واضحة للموقع التاريخي والمناطق العازلة." },
              { icon: <Sparkles size={40} />, title: "تنشيط", desc: "تطوير نقاط التوقف التاريخية كمراكز ثقافية واقتصادية حية." },
              { icon: <Settings size={40} />, title: "إدارة", desc: "تأسيس هيئة إدارة مشتركة وتشكيل لجان وطنية متخصصة." }
            ].map((strat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] text-center space-y-4 hover:bg-white/10 transition-all group">
                <div className="text-amber-500 mx-auto group-hover:scale-110 transition-transform duration-300">{strat.icon}</div>
                <h4 className="text-2xl font-bold font-amiri text-white">{strat.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{strat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proposed Activities */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-amiri font-bold text-stone-800">النشاطات المقترحة لإحياء المسار</h2>
            <div className="w-24 h-2 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div className="space-y-8">
                <div className="flex items-center gap-4 border-r-4 border-emerald-600 pr-6">
                  <Construction className="text-emerald-600" size={32} />
                  <h3 className="text-3xl font-amiri font-bold text-stone-800">1. الإجراءات الإنشائية والتأهيل</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "إعادة تأهيل الخانات والقلاع ومحطات التوقف الأثرية.",
                    "تنشيط المحطات التاريخية وربطها شبكياً ووظيفياً.",
                    "إنشاء مسار سياحي بنظام إشارات ومعلوماتية تفاعلية.",
                    "استحداث مسارات مشي ودراجات في المناطق الآمنة.",
                    "إنشاء مراكز زوار ونقاط مراقبة وحماية على طول المسار."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-stone-100 hover:border-emerald-200 transition-colors">
                      <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 font-bold text-xs">{i+1}</div>
                      <span className="text-stone-600 text-lg">{text}</span>
                    </li>
                  ))}
                </ul>
             </div>

             <div className="space-y-8">
                <div className="flex items-center gap-4 border-r-4 border-blue-600 pr-6">
                  <Calendar className="text-blue-600" size={32} />
                  <h3 className="text-3xl font-amiri font-bold text-stone-800">2. النشاطات الثقافية والمجتمعية</h3>
                </div>
                <div className="bg-blue-50/50 p-8 rounded-[3rem] border border-blue-100 space-y-6">
                   <p className="text-xl text-stone-700 leading-relaxed font-light">
                     إقامة <span className="text-blue-700 font-bold">معرض ومهرجان سنوي</span> في دمشق القديمة يهدف لتنشيط التجارة والسياحة وإعادة إحياء طقوس الحج التاريخية، بحيث تكون الانطلاقة الرمزية من قلب المدينة قبل التوجه للمطار.
                   </p>
                   <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                      <img src={festivalStakeholdersMap} alt="Festival & Stakeholders Map" className="w-full h-auto" />
                   </div>
                   <p className="text-sm text-blue-600 font-bold italic text-center">مخطط الدول المعنية بالمهرجان وتدفق الزوار المتوقع</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Reviving Khans and Houses (إحياء الخانات والمنازل) - MOVED HERE */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-amiri font-bold text-stone-800">إحياء الخانات والمنازل</h2>
            <div className="w-24 h-2 bg-amber-600 mx-auto rounded-full"></div>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">سلسلة خانات مقترحة لإعادة التأهيل كفنادق ونُزل تراثية على مسار الحج الشامي داخل سوريا.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {KHANS_STUDY_DATA.map((khan, idx) => (
              <div 
                key={idx} 
                className={`bg-[#fdfaf5] p-10 rounded-[3.5rem] shadow-xl border border-stone-100 space-y-6 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ${khan.isHighlight ? 'ring-2 ring-amber-500/20 bg-amber-50/10' : ''}`}
              >
                {khan.isHighlight && (
                  <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">مقترح فاخر</div>
                )}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-white rounded-2xl shadow-sm text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                    <Warehouse size={28} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-amiri font-bold text-stone-800">{khan.name}</h4>
                    <p className="text-stone-400 text-sm font-medium">{khan.en}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2 text-sm text-stone-600">
                    <MapPin size={16} className="text-amber-600 mt-0.5 shrink-0" />
                    <span className="font-bold">{khan.location}</span>
                  </div>
                  <div className="bg-white p-6 rounded-[2rem] shadow-inner space-y-3">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                      <History size={16} />
                      لمحة تاريخية:
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed text-justify">
                      {khan.history}
                    </p>
                  </div>
                  <div className="bg-amber-50/50 p-6 rounded-[2rem] border border-amber-100 space-y-3">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <Sparkles size={16} />
                      لماذا يصلح كفندق؟
                    </div>
                    <p className="text-amber-900/80 text-sm leading-relaxed italic">
                      {khan.suitability}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-stone-900 rounded-[4rem] p-12 text-white text-center space-y-8">
            <h3 className="text-3xl font-amiri font-bold text-amber-500 underline underline-offset-8 decoration-amber-200/20">أفضل 3 خانات مناسبة للتحويل إلى فنادق فاخرة</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "1. خان أسعد باشا – دمشق (فندق تراثي فاخر 5 نجوم)",
                "2. خان بصرى – بصرى الشام (فندق أثري داخل مدينة رومانية)",
                "3. خان دنون – ريف دمشق (نُزُل حج تراثي كبير)"
              ].map((item, i) => (
                <div key={i} className="bg-white/5 px-8 py-4 rounded-2xl border border-white/10 font-bold text-amber-100 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contemporary Trips - Bicycle Trail */}
      <section className="bg-emerald-900 py-32 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3 bg-emerald-800/50 px-6 py-2 rounded-full border border-emerald-700">
                <Bike size={24} className="text-amber-500" />
                <span className="font-bold text-emerald-100 tracking-widest uppercase">Contemporary Adventure</span>
              </div>
              <h3 className="text-5xl font-amiri font-bold">مقترح مسار رحلة الدراجات (Road Bicycle Trail)</h3>
              <p className="text-2xl text-emerald-100/70 font-light leading-relaxed">
                إعادة إحياء الطريق التاريخي من حلب إلى دمشق بطول يتراوح بين 330 إلى 360 كيلومترًا، موزعة على ست مراحل يومية، لربط الرياضة بالهوية الثقافية.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-amber-500 font-bold text-4xl mb-1">360</p>
                  <p className="text-emerald-200 text-sm">كيلومتر إجمالي المسار</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-amber-500 font-bold text-4xl mb-1">6</p>
                  <p className="text-emerald-200 text-sm">مراحل يومية متواصلة</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white/10 scale-105">
                <img src={bicycleTripImage} alt="Bicycle Trail" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-[4rem] p-8 md:p-12 border border-white/10 overflow-hidden mt-16">
            <h4 className="text-3xl font-amiri font-bold text-amber-500 mb-8 text-center">جدول مراحل رحلة الدراجات</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-4 text-emerald-300 font-bold">المرحلة</th>
                    <th className="px-6 py-4 text-emerald-300 font-bold">المسار</th>
                    <th className="px-6 py-4 text-emerald-300 font-bold text-center">المسافة</th>
                    <th className="px-6 py-4 text-emerald-300 font-bold">الميزات والنقاط الرئيسية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bicycleStages.map((s, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-5 font-bold text-white group-hover:text-amber-500">{s.day}</td>
                      <td className="px-6 py-5 font-bold text-emerald-100">{s.path}</td>
                      <td className="px-6 py-5 text-center text-amber-500 font-mono font-bold whitespace-nowrap">{s.dist}</td>
                      <td className="px-6 py-5 text-emerald-200/70 text-sm leading-relaxed">{s.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contemporary Trips - Camel Houdaj */}
      <section className="py-32 px-6 bg-amber-50/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3 bg-amber-100 px-6 py-2 rounded-full border border-amber-200">
                <Footprints size={24} className="text-amber-800" />
                <span className="font-bold text-amber-900 tracking-widest uppercase">Historical Simulation</span>
              </div>
              <h3 className="text-5xl font-amiri font-bold text-stone-800">مقترح رحلة هودج الحج الشامي (رحلة الجمل)</h3>
              <p className="text-2xl text-stone-500 font-light leading-relaxed">
                تجربة سفر معاصرة بين دمشق وعمان (مروراً بإربد) تحاكي خط سير القوافل التاريخية، تبرز الروايات الشعبية وتنشط المجتمعات المحلية على طول 380 كيلومترًا.
              </p>
              <div className="flex gap-4">
                <div className="p-6 bg-white rounded-3xl shadow-xl border border-stone-100 flex-1 text-center">
                  <p className="text-amber-700 font-bold text-3xl">380 كم</p>
                  <p className="text-stone-400 text-xs mt-1">المسافة التقديرية</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-xl border border-stone-100 flex-1 text-center">
                  <p className="text-amber-700 font-bold text-3xl">6 مراحل</p>
                  <p className="text-stone-400 text-xs mt-1">تجربة تاريخية متكاملة</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white hover:scale-105 transition-transform duration-700">
                <img src={camelTripImage} alt="Camel Trip" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl border border-stone-100 overflow-hidden">
            <h4 className="text-3xl font-amiri font-bold text-amber-700 mb-10 text-center">جدول مراحل رحلة الهودج (دمشق - عمان)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead className="bg-stone-50 border-b border-stone-100">
                  <tr>
                    <th className="px-8 py-6 text-stone-800 font-bold text-lg">المرحلة</th>
                    <th className="px-8 py-6 text-stone-800 font-bold text-lg">المسار</th>
                    <th className="px-8 py-6 text-stone-800 font-bold text-lg text-center">المسافة</th>
                    <th className="px-8 py-6 text-stone-800 font-bold text-lg">الميزات والنقاط الرئيسية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50">
                  {camelStages.map((s, i) => (
                    <tr key={i} className="hover:bg-amber-50/30 transition-colors">
                      <td className="px-8 py-6 font-bold text-amber-900">{s.day}</td>
                      <td className="px-8 py-6 font-bold text-stone-700">{s.path}</td>
                      <td className="px-8 py-6 text-center text-amber-600 font-mono font-bold whitespace-nowrap">{s.dist}</td>
                      <td className="px-8 py-6 text-stone-500 text-base leading-relaxed">{s.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Action Plan (Steps) */}
      <section className="py-32 px-6 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-amiri font-bold text-amber-500">خطة العمل (مراحل التنفيذ)</h2>
            <p className="text-stone-400 text-xl font-light">خارطة طريق تنفيذية من خمس مراحل لإحياء المسار الشامي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { num: "01", title: "التحضير والتوثيق", desc: "المسح الميداني، توحيد المصادر التاريخية، وإعداد خرائط GIS.", icon: <Map /> },
              { num: "02", title: "الحماية العاجلة", desc: "تحديد النقاط المهددة، تدخلات إنشائية طارئة، وتنظيف المسار.", icon: <ShieldCheck /> },
              { num: "03", title: "الترميم والتأهيل", desc: "ترميم الخانات والآبار والقلاع، وإنشاء مسارات آمنة للزوار.", icon: <Construction /> },
              { num: "04", title: "التفعيل الثقافي", desc: "إنتاج مواد وسائط (AR)، برامج تعليمية، وفتح المسار جزئياً.", icon: <Activity /> },
              { num: "05", title: "الإدارة المستدامة", desc: "تأسيس هيئة إدارة مشتركة، خطة مالية، وتقييم دوري.", icon: <CheckCircle2 /> }
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 p-8 rounded-[3rem] space-y-6 hover:bg-white/10 transition-all group">
                <div className="text-6xl font-amiri font-bold text-amber-600/20 absolute top-4 left-4 group-hover:text-amber-600/40 transition-colors">{step.num}</div>
                <div className="w-16 h-16 bg-amber-600/20 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{step.title}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 4 && (
                   <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 z-20 text-amber-900/40">
                      <ArrowLeftCircle size={32} />
                   </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center pt-12">
            <div className="inline-flex items-center gap-4 bg-amber-600 text-white px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl shadow-amber-900/40 hover:scale-105 transition-transform cursor-default">
              <Sparkles size={28} />
              نحو مستقبل يصون عبق التاريخ ويفتح آفاق الحداثة
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FutureRevival;
