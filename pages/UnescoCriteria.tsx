
import React from 'react';
import { Award, Star, LayoutGrid, FileText, ExternalLink, Library, Globe } from 'lucide-react';

const CRITERIA = [
  { 
    id: '(iii)', 
    title: 'شهادة فريدة لتقليد ثقافي', 
    icon: <Star className="text-amber-600" />,
    desc: 'شاهد منفرد أو استثنائي على عبادة كانت تؤدى عن طريق طقوس ومراسيم معينة في دمشق تظهر محمل الحج ويسلك من خلاله الحجاج هذا الطريق، وكان نظيره في القاهرة.' 
  },
  { 
    id: '(vi)', 
    title: 'ارتباط مباشر بأحداث وتقاليد حية', 
    icon: <Library className="text-amber-600" />,
    desc: 'ارتباط مباشر أو ملموس بأحداث أو تقاليد حية أو بأفكار أو معتقدات وبأعمال فنية أو أدبية ذي أهمية عالمية واضحة وذلك من خلال ما يحمل هذا الطريق من مبانٍ معمارية هامة ومن نقوش أثرية التي كان يكتبها الحجاج أثناء رحلتهم إلى الديار المقدسة.' 
  },
];

const UnescoCriteria = () => {
  const pdfUrl = "https://drive.google.com/file/d/1emiItxVgjNeFY0KQwiTm0mTu-3KsYbr2/view?usp=drive_link";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Page Header */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-stone-100 px-6 py-2 rounded-full border border-stone-200 text-stone-600 font-bold text-sm tracking-widest uppercase">
          <Globe size={16} />
          UNESCO World Heritage Standards
        </div>
        <h2 className="text-5xl font-amiri font-bold text-stone-800">معايير القيمة العالمية الاستثنائية (OUV)</h2>
        <p className="text-2xl text-stone-500 max-w-4xl mx-auto leading-relaxed font-light">
          المعايير التي تنطبق على ملف "مسار الحج الشامي" ليكون مؤهلاً للقبول ضمن قائمة التراث العالمي في اليونسكو.
        </p>
      </div>

      {/* Criteria Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {CRITERIA.map((criterion) => (
          <div 
            key={criterion.id} 
            className="relative bg-white p-12 rounded-[3.5rem] shadow-xl border-2 border-stone-50 hover:border-amber-100 transition-all duration-500 hover:-translate-y-3 flex flex-col items-start text-right space-y-6 overflow-hidden group"
          >
            <div className="w-20 h-20 bg-stone-50 rounded-3xl flex items-center justify-center shadow-inner group-hover:bg-amber-50 transition-colors">
               {React.cloneElement(criterion.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            
            <div className="space-y-2">
              <span className="text-amber-600 font-mono font-bold text-xl">{criterion.id}</span>
              <h3 className="text-3xl font-amiri font-bold text-stone-800">{criterion.title}</h3>
            </div>

            <p className="text-xl text-stone-600 leading-relaxed font-light min-h-[120px]">
              {criterion.desc}
            </p>
            
            <div className="w-full h-1 bg-stone-50 rounded-full overflow-hidden">
               <div className="w-1/3 h-full bg-amber-600/30 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Nomination File Section - Reverted to Emerald Colors */}
      <section className="bg-emerald-900 rounded-[4rem] p-12 md:p-20 text-white overflow-hidden relative shadow-2xl">
         <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>
         
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-4">
                  <h3 className="text-4xl font-amiri font-bold text-emerald-300">هيكلية ملف الترشيح</h3>
                  <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>
               </div>
               <p className="text-xl text-emerald-100/80 leading-relaxed font-light">
                  يستند ملف التوثيق على دراسات ميدانية وأكاديمية معمقة تشمل الرفع الهندسي والأرشفة التاريخية والتحليل السوسيولوجي للطقوس، مما يجعل ملف "مسار الحج الشامي" نموذجاً متكاملاً للملفات التوثيقية.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'دراسات معمارية', icon: <Award size={16}/> },
                    { label: 'نقوش أثرية', icon: <Award size={16}/> },
                    { label: 'أرشفة بصرية', icon: <Award size={16}/> },
                    { label: 'تحليل قيمي', icon: <Award size={16}/> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                       <Award size={20} className="text-emerald-400" />
                       <span className="text-sm font-bold">{item.label}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-[3.5rem] p-12 border border-white/20 text-center flex flex-col items-center justify-center space-y-10 shadow-3xl">
               <div className="w-24 h-24 bg-emerald-700/50 rounded-[2rem] flex items-center justify-center shadow-xl">
                 <LayoutGrid size={48} className="text-emerald-300" />
               </div>
               
               <div className="space-y-4">
                 <p className="text-white text-3xl font-bold font-amiri">ملف التوثيق الكامل (PDF)</p>
                 <p className="text-emerald-100/70 text-lg">بإمكانكم تصفح ملف التوثيق التفصيلي المقدم ضمن مشروع رقمنة الدراسات العليا.</p>
               </div>
               
               <a 
                 href={pdfUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-4 bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-2xl shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95 group"
               >
                 <FileText size={28} className="group-hover:rotate-12 transition-transform" />
                 تصفح ملف التوثيق
                 <ExternalLink size={20} className="opacity-60" />
               </a>

               <div className="flex justify-center gap-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-1.5 bg-emerald-800 rounded-full group-hover:bg-emerald-500 transition-colors"></div>)}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default UnescoCriteria;
