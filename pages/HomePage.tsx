
import React from 'react';
import { Target, Flag, Globe, Landmark, ChevronDown, Map, MapPin, Maximize2, Users, ShieldCheck, Gavel, FileCheck, ListChecks, Compass, GraduationCap } from 'lucide-react';

const HomePage = () => {
  const logoUrl = "https://lh3.googleusercontent.com/d/1WC2BRNvoOJYDrW7ZUWZmvYe6rUYBit00";
  const coverImageUrl = "https://lh3.googleusercontent.com/d/1o-VUGjGo4B825ea9mJ_sO1P2pIeFMj5k";
  const damascusToMakkahMapUrl = "https://lh3.googleusercontent.com/d/1ukkUNUn4M1d-HOi0eSAx9jv_jqEI_256";

  return (
    <div className="space-y-0">
      {/* Professional Hero Cover Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          style={{ backgroundImage: `url(${coverImageUrl})` }}
        ></div>
        
        {/* Overlay Gradients for Readability and Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfaf5]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 to-transparent"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-right-12 duration-1000">
            <div className="inline-flex items-center gap-3 bg-amber-600/20 backdrop-blur-md border border-amber-500/30 px-6 py-2 rounded-full text-amber-400 font-bold tracking-widest uppercase text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              مشروع توثيق التراث العالمي
            </div>
            
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl font-amiri font-bold text-white leading-tight drop-shadow-2xl">
                مسار الحج <span className="text-amber-500">الشامي</span>
              </h2>
              <p className="text-2xl md:text-3xl text-stone-200 font-light leading-relaxed max-w-2xl border-r-4 border-amber-600 pr-6">
                توثيق رحلة الإيمان الكبرى من قلب دمشق إلى رحاب مكة المكرمة، صوناً للهوية التاريخية والقيمة الاستثنائية.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => document.getElementById('project-goal')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-amber-900/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group"
              >
                اكتشف المشروع
                <ChevronDown className="group-hover:translate-y-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-5 rounded-2xl text-white">
                 <Map className="text-amber-500" size={28} />
                 <div className="text-right">
                    <p className="text-xs text-stone-400 font-bold uppercase">المسافة التاريخية</p>
                    <p className="text-xl font-bold">أكثر من 2,728.48 كم من إسطنبول لمكة مرورا بدمشق</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-white text-xs font-bold uppercase tracking-widest">اسحب للأسفل</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div id="project-goal" className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* Goal Section */}
        <section className="text-center space-y-8">
          <div className="inline-block">
            <h2 className="text-5xl font-amiri font-bold text-stone-800 mb-2">هدف المشروع</h2>
            <div className="w-full h-2 bg-amber-600 rounded-full"></div>
          </div>
          <p className="text-2xl text-stone-600 leading-relaxed max-w-4xl mx-auto font-light">
            يهدف هذا المشروع الوطني والعلمي الطموح إلى توثيق ودراسة 
            <span className="text-amber-700 font-bold"> "مسار الحج الشامي" </span>
            بكافة تفاصيله التاريخية والمعمارية، تمهيداً لإدراجه على 
            <span className="text-blue-700 font-bold"> لائحة التراث العالمي (اليونسكو)</span>.
          </p>
        </section>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <Target className="text-amber-600" size={40} />, title: "التوثيق الرقمي", desc: "أرشفة شاملة للمحطات والقلاع والمنشآت المائية على طول المسار باستخدام تقنيات حديثة." },
            { icon: <Globe className="text-blue-600" size={40} />, title: "العالمية", desc: "إبراز القيمة الاستثنائية العالمية للمسار كجسر ثقافي واجتماعي يربط الحضارات." },
            { icon: <Landmark className="text-emerald-600" size={40} />, title: "الحماية والصون", desc: "وضع خطط استراتيجية لحماية التراث المادي واللامادي من عوامل الاندثار والنسيان." }
          ].map((feature, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-[3rem] shadow-xl shadow-stone-200/50 border border-stone-100 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:border-amber-100">
              <div className="bg-stone-50 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-amber-50 transition-colors shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-amiri font-bold text-stone-800 mb-4">{feature.title}</h3>
              <p className="text-stone-500 text-lg leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner Section - Updated to Emerald Color */}
        <section className="bg-emerald-900 rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h3 className="text-5xl font-amiri font-bold text-amber-500">لماذا مسار الحج الشامي؟</h3>
              <p className="text-emerald-100/90 text-2xl leading-relaxed font-light">
                يعد الدرب الشامي من أقدم وأهم طرق الحج عبر التاريخ الإسلامي، حيث كان يربط عاصمة الخلافة دمشق بالأماكن المقدسة، وشهد على تطور العمارة والخدمات اللوجستية وتأمين القوافل عبر القرون كمنظومة حضارية متكاملة.
              </p>
              <div className="flex gap-6">
                <span className="bg-emerald-800/50 px-8 py-3 rounded-full text-emerald-100 border border-emerald-700/50 backdrop-blur-sm font-bold">تاريخ حي</span>
                <span className="bg-emerald-800/50 px-8 py-3 rounded-full text-emerald-100 border border-emerald-700/50 backdrop-blur-sm font-bold">تراث إنساني</span>
              </div>
            </div>
            <div className="w-full lg:w-[400px] aspect-square bg-white rounded-[3rem] border border-white/20 flex items-center justify-center overflow-hidden p-12 shadow-2xl transform hover:rotate-3 transition-transform duration-700">
              <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-amiri font-bold text-stone-800 mb-4">مسار الحج من دمشق إلى مكة المكرمة</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="bg-white p-6 md:p-12 rounded-[3.5rem] shadow-2xl border border-stone-100 overflow-hidden group">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-stone-50 border border-stone-100">
              <img 
                src={damascusToMakkahMapUrl} 
                alt="Damascus to Makkah Route" 
                className="w-full h-auto block transform transition-transform duration-[10s] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/40 to-transparent p-12 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-2xl font-amiri drop-shadow-lg">المخطط الجغرافي للمسار الشامي</p>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="bg-amber-50 px-12 py-8 rounded-[2.5rem] border border-amber-100 shadow-sm flex items-center gap-8">
                 <div className="p-5 bg-white rounded-3xl shadow-md">
                    <MapPin className="text-amber-600" size={40} />
                 </div>
                 <div className="text-right">
                    <p className="text-stone-500 font-bold text-sm uppercase tracking-widest mb-1">المسافة المقطوعة</p>
                    <p className="text-5xl font-amiri font-bold text-amber-800 leading-none">1500 كم</p>
                    <p className="text-amber-600 font-bold mt-1 text-lg">من دمشق إلى مكة</p>
                 </div>
              </div>
              <div className="max-w-md text-center md:text-right space-y-3">
                <p className="text-stone-600 text-xl font-medium leading-relaxed">
                  تمثل هذه الخريطة الجزء المركزي والتاريخي الأهم من المسار الشامي.
                </p>
                <p className="text-stone-400 text-lg italic">
                  كانت دمشق نقطة التجمع الرئيسية لكافة القوافل، ومنها تبدأ الرحلة الشاقة والمباركة عبر البوادي والحجاز.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Stakeholders Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full text-blue-700 font-bold text-sm">
              <Users size={20} />
              خارطة الشركاء والجهات المعنية
            </div>
            <h2 className="text-4xl font-amiri font-bold text-stone-800">الجهات المعنية بالمسار</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 space-y-6">
               <h3 className="text-2xl font-bold text-blue-800 border-r-4 border-blue-600 pr-4">على المستوى الوطني (4 دول)</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-stone-50 rounded-2xl space-y-2">
                    <p className="font-bold text-stone-800">🇸🇦 المملكة العربية السعودية</p>
                    <p className="text-sm text-stone-500">هيئة التراث، وزارة الثقافة، وزارة الحج والعمرة، اللجنة الوطنية لليونسكو.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl space-y-2">
                    <p className="font-bold text-stone-800">🇸🇾 الجمهورية العربية السورية</p>
                    <p className="text-sm text-stone-500">المديرية العامة للآثار والمتاحف، وزارة الأوقاف، وزارة الثقافة.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl space-y-2">
                    <p className="font-bold text-stone-800">🇸🇾 المملكة الأردنية الهاشمية</p>
                    <p className="text-sm text-stone-500">دائرة الآثار العامة، وزارة السياحة والآثار.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl space-y-2">
                    <p className="font-bold text-stone-800">🇹🇷 الجمهورية التركية</p>
                    <p className="text-sm text-stone-500">المديرية العامة للممتلكات الثقافية والمتاحف، هيئة الأوقاف.</p>
                  </div>
               </div>
            </div>

            <div className="bg-blue-900 p-10 rounded-[3rem] shadow-xl text-white space-y-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               <div className="relative z-10 space-y-6">
                 <h3 className="text-2xl font-bold text-blue-300 border-r-4 border-blue-400 pr-4">على المستوى الدولي والمجتمعي</h3>
                 <p className="text-lg text-blue-100 leading-relaxed">
                   تشمل الجهات <span className="text-amber-400 font-bold">مركز التراث العالمي (اليونسكو)</span>، والمجالس الاستشارية مثل <span className="text-amber-400 font-bold">الإيكوموس (ICOMOS)</span> للمواقع الثقافية، والمنظمات المانحة وشركاء التنمية.
                 </p>
                 <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="font-bold text-blue-200 mb-2 flex items-center gap-2">
                      <Users size={18} />
                      دور المجتمع المحلي
                    </p>
                    <p className="text-sm text-blue-50/70">
                      يُعتبر السكان القاطنون على طول المسار والمنظمات غير الحكومية جزءاً أساسياً في خطة الإدارة والحماية المستدامة.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. Legal & Administrative Status */}
        <section className="bg-stone-50 rounded-[4rem] p-12 md:p-20 shadow-inner border border-stone-200 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-right space-y-6">
            <div className="w-20 h-20 bg-amber-600 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 shadow-xl shadow-amber-900/20">
              <ShieldCheck size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-amiri font-bold text-stone-800">الوضع القانوني والإداري</h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              تأسيس إطار مؤسسي وتشريعي يضمن استدامة حماية المسار وفق المعايير الدولية.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-[2.5rem] shadow-lg space-y-4 border-t-4 border-amber-600">
                <Gavel className="text-amber-600" size={32} />
                <h4 className="text-xl font-bold text-stone-800">الحماية والتشريع</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  إظهار تمتع الموقع بحماية قانونية كافية عبر التشريعات الوطنية والتزام الدول باتفاقية التراث العالمي 1972م، مع تحديد قانوني دقيق للحدود والمناطق العازلة.
                </p>
             </div>
             <div className="bg-white p-8 rounded-[2.5rem] shadow-lg space-y-4 border-t-4 border-emerald-600">
                <GraduationCap className="text-emerald-600" size={32} />
                <h4 className="text-xl font-bold text-stone-800">الإدارة المشتركة</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  إنشاء "هيئة تنسيقية إدارية مشتركة" (Joint Management Committee) تضم ممثلين من الدول الأربع، واعتماد "خطة إدارة متكاملة" (Integrated Management Plan).
                </p>
             </div>
          </div>
        </section>

        {/* 3. Policies Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-amiri font-bold text-stone-800 mb-4">السياسات المقترحة</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck />, title: "مبادئ الحماية", desc: "حماية استمرارية المسار كتراث مادي وغير مادي والالتزام بمعايير اليونسكو." },
              { icon: <Landmark />, title: "إدارة الموقع", desc: "تنظيم التدخلات العمرانية ومنع التعديات ووضع ضوابط لاستخدام الأراضي." },
              { icon: <Users />, title: "المشاركة المجتمعية", desc: "إشراك السكان المحليين في أعمال التوثيق ودعم المبادرات الشعبية." },
              { icon: <Globe />, title: "التنمية المستدامة", desc: "ربط المسار بالسياحة الثقافية المستدامة وحماية الموارد الطبيعية." }
            ].map((policy, idx) => (
              <div key={idx} className="bg-emerald-50/50 p-8 rounded-[2.5rem] border border-emerald-100 text-center space-y-4 hover:bg-emerald-600 group transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                  {policy.icon}
                </div>
                <h4 className="text-xl font-bold text-emerald-900 group-hover:text-white">{policy.title}</h4>
                <p className="text-emerald-700/70 text-sm leading-relaxed group-hover:text-emerald-50">{policy.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Goals & Strategies */}
        <section className="space-y-16">
           <div className="bg-stone-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
             
             <div className="relative z-10 space-y-16">
                <div className="flex flex-col lg:flex-row gap-12">
                   <div className="lg:w-1/2 space-y-8">
                      <div className="inline-flex items-center gap-2 bg-amber-600 px-4 py-1 rounded-full text-xs font-bold uppercase">الهدف الرئيسي</div>
                      <h2 className="text-5xl font-amiri font-bold leading-tight">تسجيل المسار على قائمة التراث العالمي وحمايته واستدامته</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "إعادة الربط التاريخي بين النقاط",
                          "تعزيز الهوية الثقافية للحج",
                          "توثيق العناصر المادية (القلاع)",
                          "توثيق التراث اللامادي (الطقوس)",
                          "تطوير مسار سياحي ثقافي آمن"
                        ].map((goal, i) => (
                          <div key={i} className="flex items-center gap-3 text-stone-300">
                            <ListChecks size={18} className="text-amber-500" />
                            <span className="text-sm">{goal}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="lg:w-1/2 bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10 space-y-8">
                      <h3 className="text-2xl font-bold text-amber-500 flex items-center gap-3">
                        <Compass size={28} />
                        استراتيجيات التنفيذ
                      </h3>
                      <div className="space-y-6">
                        <div className="flex gap-6">
                          <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">1</div>
                          <div>
                            <p className="font-bold text-white mb-1">استراتيجية التوثيق</p>
                            <p className="text-sm text-stone-400">إنشاء قاعدة بيانات رقمية وجيولوجية شاملة لكافة المحطات.</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">2</div>
                          <div>
                            <p className="font-bold text-white mb-1">استراتيجية الحماية والتنشيط</p>
                            <p className="text-sm text-stone-400">وضع حدود واضحة وتطوير نقاط التوقف كمراكز ثقافية حية.</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">3</div>
                          <div>
                            <p className="font-bold text-white mb-1">استراتيجية الإدارة</p>
                            <p className="text-sm text-stone-400">تشكيل لجنة وطنية ومحلية متخصصة للإشراف الدائم.</p>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </section>

      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
