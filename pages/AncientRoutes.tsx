
import React, { useState, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Cell, LabelList, AreaChart, Area 
} from 'recharts';
import { ROUTES, ERAS, HAJJ_HISTORY_STATS } from '../constants';
import { Compass, Clock, Map as MapIcon, Calendar, Layout, TrendingUp, History, Users, Layers, Info, Table as TableIcon, Sparkles, ChevronLeft } from 'lucide-react';

const AncientRoutes = () => {
  const [selectedEra, setSelectedEra] = useState(ERAS[0]); // Default to first era (Rashidun)
  const mainRoutesMapUrl = "https://lh3.googleusercontent.com/d/18b8AHEeIUvxOnljIJzrcUSoVvloRfH8Y";

  // Timeline configuration
  const timelineStart = 632;
  const timelineEnd = 2025;
  const totalYears = timelineEnd - timelineStart;

  // Group eras by their assigned lanes
  const lanes = useMemo(() => {
    const laneGroups: { [key: number]: typeof ERAS } = {};
    ERAS.forEach(era => {
      const lane = era.lane || 0;
      if (!laneGroups[lane]) laneGroups[lane] = [];
      laneGroups[lane].push(era);
    });
    return Object.values(laneGroups);
  }, []);

  // Detailed Table Data
  const hajjPeriodData = [
    { period: "أوائل القرن ۱۷", count: "۲۰,۰۰۰ إلى ۳۰,۰۰۰", notes: "يُشار إلى أن القافلة كانت ضخمة في فترة ازدهار الدولة العثمانية، تتألف من عشرات الآلاف." },
    { period: "منتصف القرن ۱۷", count: "١٥,٠٠٠ إلى ٢٥,٠٠٠", notes: "تشير بعض المصادر إلى انخفاض طفيف في ظل تحديات الأمن على الطريق." },
    { period: "بداية القرن ۱۸", count: "۰۰۰,٣٠ إلى ٤٠,٠٠٠", notes: "يُعتبر هذا العصر الذهبي لقوافل الحج الشامي مع توثيق كبير للأحداث وتأمين الطريق بشكل جيد." },
    { period: "منتصف القرن ۱۸", count: "۰۰۰,٤٠ إلى ٥٠,٠٠٠", notes: "بعض المصادر تذكر أعداداً مرتفعة جداً في مواسم محددة، مما يدل على قوة وتأثير المسار.", highlight: true },
    { period: "أواخر القرن ١٨", count: "۲۰,۰۰۰ إلى ۳۰,۰۰۰", notes: "تأثرت الأعداد بالاضطرابات السياسية المحلية وظهور بعض التهديدات الأمنية." },
    { period: "بداية القرن ۱۹", count: "۰۰۰,٥ إلى ١٥,٠٠٠", notes: "فترة حروب وتأثر المسار بحملة محمد علي باشا. كانت الأعداد منخفضة جداً نسبياً في بعض السنوات." },
    { period: "منتصف القرن ۱۹", count: "١٥,٠٠٠ إلى ٢٥,٠٠٠", notes: "عودة نسبية للاستقرار والأمان بعد إصلاحات الدولة العثمانية." },
    { period: "أوائل القرن ۲۰", count: "۲۰,۰۰۰ إلى ۳۰,۰۰۰", notes: "قبيل إنشاء سكة حديد الحجاز، وكانت القوافل لا تزال نشطة." },
    { period: "فترة سكة الحجاز", count: "۰۰۰,٣٠ إلى ٤٠,٠٠٠", notes: "سكة الحجاز أدت لزيادة سعة نقل الحجاج وسلامتهم، مما رفع الأعداد بشكل كبير في تلك الفترة.", highlight: true },
  ];

  // Chart Data
  const statsData = [
    { era: 'أوائل القرن 17', count: 25000, color: '#047857' },
    { era: 'منتصف القرن 17', count: 20000, color: '#059669' },
    { era: 'بداية القرن 18', count: 35000, color: '#92400e' },
    { era: 'منتصف القرن 18', count: 45000, color: '#b45309' },
    { era: 'أواخر القرن 18', count: 25000, color: '#d97706' },
    { era: 'بداية القرن 19', count: 10000, color: '#93c5fd' },
    { era: 'منتصف القرن 19', count: 20000, color: '#60a5fa' },
    { era: 'أوائل القرن 20', count: 25000, color: '#3b82f6' }, 
    { era: 'سكة الحجاز', count: 35000, color: '#1e3a8a' },
  ];

  const generalIntro = "تبدأ الحركة اعتباراً من شهر رجب في جميع أنحاء اسطنبول لاقتراب موعد إرسال المحمل النبوي الشريف إلى مكة المكرمة، والذي يحمل كسوة الكعبة الجديدة والصرة السلطانية التي تتضمن هدايا. كان الموكب يتألف من مئات الجمال المحملة بالهدايا ومئات من الفرسان المدججين بالسلاح. وقد تغير الطريق عدة مرات بحثاً عن الأمان والماء والاستراحات والطرق الأسهل، وكذلك بسبب اندثار بعض المدن وتلف جزء من معالم الطريق. على سبيل المثال، كان أحد الطرق يمر من أنقرة دخولاً إلى حلب، وتعددت طرق الخروج من دمشق لحين تم الاعتماد على درعا، وأصبح يمر بسهل المطران بدلاً من وادي الجزل وصولاً إلى المدينة.";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      
      {/* 1. Main Routes Map Section */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-800 mb-6 font-amiri">طريق الحج قديماً</h2>
          <p className="text-stone-500 text-lg leading-relaxed">نظرة شاملة على كافة الطرق البرية والبحرية التي ربطت العالم الإسلامي بمكة المكرمة والمدينة المنورة.</p>
        </div>
        
        <div className="bg-white p-6 rounded-[3rem] shadow-2xl border border-stone-100 overflow-hidden flex items-center justify-center">
           <img 
            src={mainRoutesMapUrl} 
            alt="All Hajj Routes Map" 
            className="max-w-full h-auto rounded-2xl shadow-inner"
           />
        </div>
      </section>

      {/* 2. Routes Overview Section */}
      <section className="space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-3 bg-amber-50 px-6 py-2 rounded-full border border-amber-100 text-amber-800 font-bold text-sm">
             <MapIcon size={18} />
             شبكة المواصلات الإيمانية الكبرى
          </div>
          <h2 className="text-4xl font-bold text-stone-800 font-amiri">أهم مسارات الحج التاريخية</h2>
          
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 text-right space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-amber-600"></div>
            <p className="text-xl text-stone-700 leading-relaxed font-light">
              تشير طرق الحج التاريخية إلى شبكة مواصلات تربط الحرمين الشريفين بمكة المكرمة والمدينة المنورة برًا وبحرًا من جميع أنحاء العالم لأداء مناسك الحج أو الزيارة. كانت هذه الطرق تُستخدم في الأصل للقوافل التجارية، واتسمت بأعلام ومسارات محددة منذ ظهور الإسلام، وظلت مستخدمة لأربعة عشر قرناً حتى ظهور وسائل النقل الحديثة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {ROUTES.map((route) => (
            <div key={route.id} className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-stone-100 group-hover:bg-amber-500 transition-colors"></div>
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-600 transition-all group-hover:scale-110 shadow-inner">
                <Compass className="text-amber-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-stone-800 mb-6 font-amiri border-r-4 border-amber-600 pr-4">{route.name}</h3>
              <p className="text-stone-500 mb-8 leading-relaxed text-lg flex-grow font-light">
                {route.description}
              </p>
              <div className="pt-6 border-t border-stone-50 mt-auto">
                <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-4 py-2 rounded-xl text-sm font-bold w-fit">
                   <Info size={14} />
                   <span>الأهمية: {route.importance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Refined Interactive Timeline & Descriptions */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-indigo-50 px-6 py-2 rounded-full border border-indigo-100 text-indigo-700 font-bold text-sm">
             <Layers size={18} />
             مخطط التداخل التاريخي لبلاد الشام
          </div>
          <h2 className="text-4xl font-bold text-stone-800 font-amiri">التسلسل الزمني لبلاد الشام</h2>
          <p className="text-stone-500 text-lg">مخطط تفاعلي يوضح تعاقب وتداخل الحقبات التاريخية - انقر على الحقبة لعرض تفاصيلها</p>
        </div>

        {/* General Introduction Block */}
        <div className="bg-amber-50/50 p-10 rounded-[3rem] border border-amber-100 shadow-sm relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles size={120} className="text-amber-600" />
          </div>
          <h3 className="text-3xl font-amiri font-bold text-amber-900 mb-6 border-r-4 border-amber-600 pr-4">العوامل التاريخية والسياسية والاقتصادية التي أدت إلى تغيّر مسارات الحج الشامي عبر العصور</h3>
          <p className="text-xl text-amber-900/80 leading-relaxed font-light text-justify">
            {generalIntro}
          </p>
        </div>

        {/* Re-styled Timeline Container with Light Background */}
        <div className="bg-stone-50 p-6 md:p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden border border-stone-200">
          <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-between px-12">
            {Array.from({length: 15}).map((_, i) => (
              <div key={i} className="w-px h-full bg-stone-300"></div>
            ))}
          </div>

          <div className="relative space-y-2 min-h-[300px]">
            {lanes.map((laneEras, laneIdx) => (
              <div key={laneIdx} className="relative h-12 w-full">
                {laneEras.map((era) => {
                  const left = ((era.startYear - timelineStart) / totalYears) * 100;
                  const width = ((era.endYear - era.startYear) / totalYears) * 100;
                  
                  return (
                    <button
                      key={era.id}
                      onClick={() => setSelectedEra(era)}
                      style={{ 
                        left: `${left}%`, 
                        width: `${width}%`,
                        backgroundColor: era.color 
                      }}
                      className={`absolute h-full rounded-lg transition-all duration-500 flex items-center justify-center group z-10 hover:z-20 border border-black/10 shadow-sm ${
                        selectedEra.id === era.id ? 'ring-4 ring-white shadow-xl scale-y-110 brightness-110 z-30' : 'opacity-85 hover:opacity-100 hover:scale-y-105'
                      }`}
                    >
                      <span className="text-white font-bold text-[9px] md:text-xs truncate px-1 text-center drop-shadow-md leading-none">
                        {era.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-8 px-2 text-[11px] text-stone-400 font-bold font-mono border-t border-stone-200 pt-4">
             {[632, 800, 1000, 1200, 1400, 1600, 1800, 2025].map(year => (
               <span key={year}>{year}م</span>
             ))}
          </div>
        </div>

        {/* Detailed Era View with Sidebar Navigation */}
        <div className="space-y-12 pt-8">
           <div className="flex flex-col lg:flex-row gap-8">
              {/* Selected Era Card Content */}
              <div className="flex-grow bg-white rounded-[4rem] p-8 md:p-12 shadow-2xl border border-stone-100 animate-in fade-in zoom-in-95 duration-700">
                <div className="flex flex-col xl:flex-row gap-12 items-start">
                  <div className="xl:w-1/2 w-full space-y-8">
                    <div className="inline-flex items-center gap-4 bg-stone-50 p-4 rounded-3xl border border-stone-100">
                      <div className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: selectedEra.color }}></div>
                      <h3 className="text-3xl font-amiri font-bold text-stone-800">{selectedEra.name}</h3>
                    </div>
                    
                    <div className="aspect-video rounded-[3rem] overflow-hidden border-8 border-stone-50 shadow-inner group relative">
                      <img 
                        src={selectedEra.mapUrl || mainRoutesMapUrl} 
                        className="w-full h-full object-cover transform transition-transform duration-[15s] group-hover:scale-110"
                        alt={selectedEra.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className="xl:w-1/2 w-full space-y-8 text-right">
                    <div className="space-y-4">
                       <h4 className="text-xl font-bold text-amber-700 font-amiri underline underline-offset-8 decoration-amber-200">الوصف التاريخي للحـقبة</h4>
                       <p className="text-xl text-stone-600 font-light leading-relaxed">
                          {selectedEra.description}
                       </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                       <span className="bg-stone-900 text-white px-6 py-2 rounded-full font-bold text-base shadow-lg">
                         الفترة: {selectedEra.startYear} - {selectedEra.endYear}م
                       </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Navigation Sidebar */}
              <aside className="lg:w-72 flex flex-col gap-3 bg-stone-50 p-6 rounded-[3rem] border border-stone-100 shadow-inner h-fit lg:sticky lg:top-24">
                 <h4 className="text-stone-400 font-bold text-sm uppercase tracking-widest mb-4 border-b border-stone-200 pb-2 flex items-center gap-2">
                    <Clock size={16} />
                    اختيار العصور
                 </h4>
                 <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar">
                    {ERAS.map((era) => (
                      <button
                        key={era.id}
                        onClick={() => setSelectedEra(era)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 text-right whitespace-nowrap lg:whitespace-normal group ${
                          selectedEra.id === era.id 
                          ? 'bg-white shadow-md border-amber-200 scale-105 z-10' 
                          : 'hover:bg-white/50 text-stone-500'
                        } border border-transparent`}
                      >
                        <div 
                          className={`w-3 h-3 rounded-full shrink-0 ${selectedEra.id === era.id ? 'animate-pulse' : ''}`}
                          style={{ backgroundColor: era.color }}
                        ></div>
                        <span className={`font-bold text-sm flex-grow transition-colors ${selectedEra.id === era.id ? 'text-amber-800' : 'group-hover:text-stone-800'}`}>
                          {era.name}
                        </span>
                        {selectedEra.id === era.id && (
                          <ChevronLeft size={16} className="text-amber-600 animate-in slide-in-from-right-2" />
                        )}
                      </button>
                    ))}
                 </div>
              </aside>
           </div>
        </div>
      </section>

      {/* 4. Detailed Data Table */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
            <TableIcon size={20} className="text-blue-600" />
            <span className="text-blue-900 font-bold text-sm tracking-widest uppercase">بيانات تاريخية موثقة</span>
          </div>
          <h2 className="text-4xl font-bold text-stone-800 font-amiri">أعداد الحجاج حسب الفترات الزمنية (طريق دمشق)</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">جدول تفصيلي يوضح أعداد الحجيج والملاحظات التاريخية لكل حقبة</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl border border-stone-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="px-8 py-6 font-amiri font-bold text-2xl text-stone-800">الفترة الزمنية</th>
                  <th className="px-8 py-6 font-amiri font-bold text-2xl text-stone-800 text-center">عدد الحجاج</th>
                  <th className="px-8 py-6 font-amiri font-bold text-2xl text-stone-800">ملاحظات تاريخية</th>
                </tr>
              </thead>
              <tbody>
                {hajjPeriodData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b border-stone-50 transition-colors hover:bg-stone-50/50 ${row.highlight ? 'bg-amber-50/30' : ''}`}
                  >
                    <td className="px-8 py-6 font-bold text-stone-700 text-lg">{row.period}</td>
                    <td className="px-8 py-6 font-mono font-bold text-amber-700 text-xl text-center whitespace-nowrap">{row.count}</td>
                    <td className="px-8 py-6 text-stone-500 leading-relaxed font-light">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-stone-900 p-4 text-center">
             <p className="text-stone-400 text-xs italic">المصدر: ملف توثيق مسار الحج الشامي - الصفحة 15</p>
          </div>
        </div>
      </section>

      {/* 5. Statistics Chart - Damascus Route */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-amber-50 px-6 py-2 rounded-full border border-amber-100">
            <TrendingUp size={20} className="text-amber-600" />
            <span className="text-amber-900 font-bold text-sm tracking-widest">تحليل بياني للبيانات</span>
          </div>
          <h2 className="text-4xl font-bold text-stone-800 font-amiri">المخطط البياني لكثافة الحجيج عبر العصور المارين بدمشق</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">تمثيل مرئي لمتوسط أعداد القوافل في كل حقبة زمنية</p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-stone-100 h-[600px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={statsData} 
              margin={{ top: 60, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
              <XAxis 
                dataKey="era" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#44403c', fontWeight: 700, fontSize: 13}} 
                dy={20}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#a8a29e', fontSize: 12}} 
                tickFormatter={(value) => value.toLocaleString()}
                dx={-10}
              />
              <Tooltip 
                cursor={{fill: '#fff7ed', radius: 20}} 
                contentStyle={{
                  borderRadius: '24px', 
                  border: 'none', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  direction: 'rtl',
                  textAlign: 'right'
                }} 
                formatter={(value: number) => [`${value.toLocaleString()} حاج (متوسط تقريبي)`, 'العدد']}
              />
              <Bar 
                dataKey="count" 
                radius={[20, 20, 10, 10]} 
                barSize={60}
              >
                 {statsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                    />
                 ))}
                 <LabelList 
                  dataKey="count" 
                  position="top" 
                  offset={15}
                  formatter={(value: number) => value.toLocaleString()}
                  style={{ fill: '#78716c', fontSize: '14px', fontWeight: '800' }}
                 />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* 6. Total Major Caravans Statistics */}
      <section className="space-y-12 pb-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-stone-100 px-6 py-2 rounded-full border border-stone-200">
            <History size={20} className="text-stone-600" />
            <span className="text-stone-900 font-bold text-sm tracking-widest">السياق التاريخي العام</span>
          </div>
          <h2 className="text-4xl font-bold text-stone-800 font-amiri">أعداد الحجاج الكلي للقوافل الكبرى</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">تتبع نمو وتصاعد أعداد الحجاج عبر القرون الهجرية من كافة الطرق الرئيسية</p>
        </div>

        <div className="bg-stone-900 p-10 md:p-16 rounded-[4rem] shadow-2xl border border-stone-800 h-[500px] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={HAJJ_HISTORY_STATS}>
              <defs>
                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d97706" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#292524" />
              <XAxis dataKey="century" axisLine={false} tickLine={false} tick={{fill: '#a8a29e'}} dy={15} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c'}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1c1917', borderRadius: '20px', border: 'none', direction: 'rtl', textAlign: 'right' }} 
                itemStyle={{ color: '#fbbf24' }}
              />
              <Area type="monotone" dataKey="count" stroke="#d97706" strokeWidth={4} fill="url(#colorCount)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default AncientRoutes;
