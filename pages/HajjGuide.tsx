
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronRight, ChevronLeft, MapPin, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { HAJJ_HISTORY_STATS } from '../constants';

const RITUALS = [
  { 
    step: 1, 
    title: 'الإحرام', 
    desc: 'هو نية الدخول في رحلة الحج، ويتم من مواقيت مكانية محددة شرعاً. يبدأ الحاج بالاغتسال والتطيب، ثم يلبس ثياب الإحرام (رداء وإزار أبيضين للرجل، ولباس ساتر للمرأة)، ثم يهلّ بالتلبية المشهورة "لبيك اللهم لبيك" إعلاناً للانقطاع عن شواغل الدنيا والإقبال الكامل على الله بقلب خاشع.', 
    icon: '🕋' 
  },
  { 
    step: 2, 
    title: 'الطواف', 
    desc: 'هو الدوران حول الكعبة المشرفة سبعة أشواط، يبدأ كل شوط من أمام الحجر الأسود وينتهي عنده، وتكون الكعبة عن يسار الحاج. يمثل الطواف محور الكون الروحي للمؤمن، حيث يطوف الحاج وهو يلهج بالدعاء والاستغفار والتعظيم، مستشعراً عظمة البيت العتيق ورب البيت.', 
    icon: '🔄' 
  },
  { 
    step: 3, 
    title: 'السعي', 
    desc: 'هو المشي والهرولة بين جبلي الصفا والمروة لسبعة أشواط، تبدأ بالصفا وتنتهي بالمروة. هذا النسك هو استعادة حية لقصة السيدة هاجر وبحثها الصبور عن الماء لابنها إسماعيل، وهو درس عملي في الصبر واليقين والتوكل المطلق على الله في أصعب الظروف.', 
    icon: '🏃' 
  },
  { 
    step: 4, 
    title: 'يوم التروية', 
    desc: 'يصادف اليوم الثامن من ذي الحجة، حيث يتجه الحجاج إلى مشعر "منى" للمبيت فيه والاستعداد ليوم عرفة. سمي بذلك لأن الحجاج كانوا يتروون من الماء فيه قديماً ليأخذوه معهم لرحلة المشاعر، وهو سنة مؤكدة تمنح الحاج فرصة للتأمل والسكينة قبل الوقفة الكبرى.', 
    icon: '⛺' 
  },
  { 
    step: 5, 
    title: 'الوقوف بعرفة', 
    desc: 'هو ركن الحج الأعظم الذي لا يصح الحج بدونه (الحج عرفة). يكون في اليوم التاسع من ذي الحجة، حيث يجتمع الملايين في صعيد واحد من الزوال حتى غروب الشمس، في مشهد مهيب يذكر بيوم الحشر، يرتفع فيه ضجيج الدعاء طلباً للرحمة والمغفرة والعتق من النار.', 
    icon: '⛰️' 
  },
  { 
    step: 6, 
    title: 'المبيت بمزدلفة', 
    desc: 'بعد غروب شمس يوم عرفة، ينفر الحجاج إلى "مزدلفة" بسكينة. يصلون فيها المغرب والعشاء جمعاً وقصراً، ويبيتون ليلتهم هناك تحت السماء، ويجمعون حصيات الرمي. هي ليلة السكينة والوقار والتقاط الأنفاس الروحية قبل البدء بأعمال يوم النحر وأيام التشريق.', 
    icon: '🌌' 
  },
  { 
    step: 7, 
    title: 'رمي الجمرات', 
    desc: 'في يوم العيد وأيام التشريق، يتوجه الحجاج لرمي الجمرات الثلاث (الصغرى والوسطى والكبرى). يرمي الحاج سبع حصيات في كل جمرة، تمثيلاً لمقاومة وسواس الشيطان واتباعاً لسنة النبي إبراهيم عليه السلام، ثم يتبع ذلك نحر الهدي والحلق أو التقصير للتحلل من الإحرام.', 
    icon: '🎯' 
  },
];

const HajjGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
      
      {/* 1. Introductory Section */}
      <section className="space-y-12 animate-in fade-in duration-1000">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-amiri font-bold text-stone-800">الحج: فريضة العمر ورحلة الإيمان</h2>
          <div className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-stone-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
             <BookOpen size={200} className="text-stone-900" />
          </div>
          
          <div className="relative z-10 space-y-10 text-right">
            <p className="text-2xl text-stone-700 leading-relaxed font-light">
              يُعدّ الحج من أعظم العبادات في الإسلام، وهو في اللغة يعني القصد إلى الشيء المعظَّم، أما في الاصطلاح الشرعي فهو قصد بيت الله الحرام لأداء مناسك مخصوصة في زمن مخصوص كما ورد في تعريفات الفقهاء. وقد جعله الإسلام ركناً خامساً من أركانه، لا يتمّ إيمان المسلم إلا بالإقرار بوجوبه والسعي لأدائه عند الاستطاعة. وقد ثبتت فريضة الحج بنصوص قطعية من القرآن الكريم، أبرزها قوله تعالى:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
               <div className="group bg-amber-50/70 rounded-[2.5rem] p-12 border border-amber-100 shadow-sm hover:shadow-md hover:bg-amber-100/50 transition-all duration-500 relative cursor-default text-center">
                  <p className="text-4xl font-amiri font-bold text-amber-900 leading-loose mb-6">
                    ﴿ وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا ﴾
                  </p>
                  <p className="text-amber-700/60 text-base font-bold">سورة آل عمران: 97</p>
               </div>
               <div className="group bg-amber-50/70 rounded-[2.5rem] p-12 border border-amber-100 shadow-sm hover:shadow-md hover:bg-amber-100/50 transition-all duration-500 relative cursor-default text-center">
                  <p className="text-4xl font-amiri font-bold text-amber-900 leading-loose mb-6">
                    ﴿ وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ ﴾
                  </p>
                  <p className="text-amber-700/60 text-base font-bold">سورة البقرة: 196</p>
               </div>
            </div>

            <p className="text-2xl text-stone-700 leading-relaxed font-light">
              كما جاءت السنة مؤكدةً ذلك في حديث النبي ﷺ: <span className="text-amber-700 font-bold">"بني الإسلام على خمس… وحج البيت"</span>، وقد أجمع العلماء على وجوبه مرة واحدة في العمر على كل مسلم قادر.
            </p>

            <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100 shadow-inner">
               <div className="flex items-center gap-3 mb-6 text-amber-600">
                  <Sparkles size={28} />
                  <h4 className="text-2xl font-bold font-amiri">أهمية وروحانية الحج</h4>
               </div>
               <p className="text-xl text-stone-600 leading-relaxed font-light text-justify">
                 وتكمن أهمية الحج في كونه عبادة تجمع بين الطاعة البدنية والمالية، وتُظهر وحدة المسلمين باجتماعهم في مكان واحد وزمان واحد، كما أنه يربّي النفس على الإخلاص والصبر والتجرد من مظاهر الدنيا، ويُعدّ فرصة عظيمة لمغفرة الذنوب وفتح صفحة جديدة مع الله، كما أشار إلى ذلك العلماء والمصادر الشرعية. ولهذا ظل الحج عبر العصور رمزاً للروحانية العميقة، والتجديد الإيماني، والتواصل بين المسلمين من مختلف الأقطار.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Rituals - Reverted Motto to Hadith */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">مناسك الحج التفاعلية</h2>
          <p className="text-stone-500 text-lg">تعرف على رحلة الحاج خطوة بخطوة بشرح وافٍ وتفصيلي</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-100 flex flex-col md:flex-row min-h-[650px]">
          <div className="md:w-1/3 bg-stone-50 p-10 border-l border-stone-100 flex flex-col justify-between">
            <div className="space-y-4">
              {RITUALS.map((r, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    currentStep === i ? 'bg-amber-600 text-white shadow-lg scale-[1.02]' : 'hover:bg-white text-stone-500'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    currentStep === i ? 'bg-amber-500' : 'bg-stone-200'
                  }`}>{r.step}</span>
                  <span className="font-bold text-right">{r.title}</span>
                </button>
              ))}
            </div>
            {/* Reverted the text here to the original Hadith/Saying */}
            <div className="mt-8 p-6 bg-amber-50 rounded-2xl flex items-center gap-3 border border-amber-100">
              <CheckCircle2 className="text-amber-600 shrink-0" />
              <span className="text-amber-800 text-base font-bold italic">"خُذُوا عَنِّي مَنَاسِكَكُمْ"</span>
            </div>
          </div>

          <div className="md:w-2/3 p-12 md:p-16 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="text-[120px] transform hover:scale-110 transition-transform leading-none">{RITUALS[currentStep].icon}</div>
            <h3 className="text-5xl font-amiri font-bold text-stone-800">{RITUALS[currentStep].title}</h3>
            <div className="bg-amber-50/30 p-8 rounded-[2.5rem] border border-amber-100/50">
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-2xl font-light text-justify">
                {RITUALS[currentStep].desc}
              </p>
            </div>
            <div className="flex gap-8 mt-4">
              <button 
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(p => p - 1)}
                className="p-5 bg-stone-100 rounded-full hover:bg-stone-200 disabled:opacity-30 transition-all hover:scale-110 active:scale-95 shadow-md"
              >
                <ChevronRight size={36} />
              </button>
              <button 
                disabled={currentStep === RITUALS.length - 1}
                onClick={() => setCurrentStep(p => p + 1)}
                className="p-5 bg-amber-600 text-white rounded-full hover:bg-amber-700 disabled:opacity-30 shadow-xl shadow-amber-200 transition-all hover:scale-110 active:scale-95"
              >
                <ChevronLeft size={36} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statistics Section */}
      <section className="space-y-12 pb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 font-amiri">إحصائيات الحج عبر التاريخ</h2>
          <p className="text-stone-500 text-lg">تقديرات أعداد الحجاج كل 100 عام منذ صدر الإسلام</p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-stone-100 h-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={HAJJ_HISTORY_STATS} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="century" axisLine={false} tickLine={false} tick={{fill: '#78716c', fontWeight: 700, fontSize: 14}} dy={15} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', direction: 'rtl', textAlign: 'right' }}
                cursor={{ fill: '#fff7ed', radius: 12 }}
              />
              <Bar dataKey="count" radius={[15, 15, 5, 5]} barSize={50}>
                {HAJJ_HISTORY_STATS.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#d97706' : '#b45309'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-stone-400 text-sm italic">ملاحظة: هذه الأرقام هي تقديرات تاريخية مستمدة من المخطوطات والوثائق المتوفرة، تعكس نمو الأمة الإسلامية وتطور وسائل النقل.</p>
      </section>
    </div>
  );
};

export default HajjGuide;
