import React, { useState } from 'react';
import { Camera, Music, Users, Sparkles, Image as ImageIcon, Flower, Droplets, UtensilsCrossed, Palmtree, Scroll, Mic2, Quote, X } from 'lucide-react';

const HISTORICAL_GALLERY = [
  "https://lh3.googleusercontent.com/d/17sQZ8T2vdCKK6aqpk5vcu0XuS2cJmKrb",
  "https://lh3.googleusercontent.com/d/1UPb27pHmHuR_X3y7CutScHfdlLRwTf0Y",
  "https://lh3.googleusercontent.com/d/1OjTuSMmoo-2GhoSYNKIM9c9Kcg1ju5YP",
  "https://lh3.googleusercontent.com/d/1jU0m9JDJb5NH-rzADI3Oye4Y5_cEUuZ-",
  "https://lh3.googleusercontent.com/d/1CNleG9XgGUJnQ3v7jgqLMQGUXY3wG5Is",
  "https://lh3.googleusercontent.com/d/13DC1veJIc1ors_kvfWPbEes9xJ6DAvyu",
  "https://lh3.googleusercontent.com/d/1bHEqnU2yqsYPdS0s_Lf96-F-cUYBMxNA",
  "https://lh3.googleusercontent.com/d/1BXtDCghKotx2hfrVuGvouM6xQFcUhLYS",
  "https://lh3.googleusercontent.com/d/1hVxVtauJCad4ZB-fkm8q1VmRv1NJBVar"
];

const RITUALS = [
  { 
    id: 'oil', 
    title: 'يوم الزيت', 
    desc: 'طقس دمشقي عريق يرتبط بتجهيز زيت المصابيح لإنارة الحرمين الشريفين وقوافل الحج.',
    imageUrl: "https://lh3.googleusercontent.com/d/10VLduniaIIV9bUbbGD8Z5qL9A1IoHdh1"
  },
  { 
    id: 'wax', 
    title: 'يوم الشمع', 
    desc: 'تجهيز الشموع الكبيرة والمزينة التي كانت تتقدم موكب المحمل الشامي في لوحة فنية مهيبة.',
    imageUrl: "https://lh3.googleusercontent.com/d/1s83-oSDOP-sTMNgrmt2AYPuhhgCL7Dx0"
  },
  { 
    id: 'sanjak', 
    title: 'يوم الصنجق', 
    desc: 'مراسم رفع العلم النبوي الشريف (الصنجق) إيذاناً ببدء موسم الحج وانطلاق القافلة من الجامع الأموي.',
    imageUrl: "https://lh3.googleusercontent.com/d/14hs-5MGEKwLF_xg2q2US8Cu73iKUyO2s"
  },
  { 
    id: 'mahmal', 
    title: 'دورة محمل الحج', 
    desc: 'المسيرة الكبرى للمحمل في شوارع دمشق القديمة وسط احتفالات شعبية ورسمية مهيبة تودع قوافل الإيمان.',
    imageUrl: "https://lh3.googleusercontent.com/d/1TOb7JWxPpyGzvmF8-jA60VT2cgJIar6B"
  },
];

const CHANTS = [
  {
    title: "أهزوجة وداع القافلة",
    subtitle: "تُغنى عند خروج المحمل من باب الله",
    icon: <Mic2 size={40} />,
    lyrics: `يا رايحين لبيت الله.. فوزوا بنظرة لله
ادعولنا يا حجاج.. بوقفة عرفات بالله

يا خارجين من دمشق.. بقلوب فيها الشوق حق
زمزم شفا للعليل.. والكعبة نور ومستحق

ودعناكم بالسلامة.. والدمع هلّ غمامة
نرجو من الله لقاءً.. في ظل دار الكرامة`,
    color: "bg-amber-600"
  },
  {
    title: "عراضة المحمل الشامي",
    subtitle: "تُؤدى في شوارع دمشق القديمة (الميدان)",
    icon: <Music size={40} />,
    lyrics: `هذا المحمل من دمشق.. طالع لبيت الله بحق
شام يا أرض النبي.. فيها الوفا ما ينفتق

يا محملنا يا منصور.. عالدنيا بتنشر النور
رايح لزيارة طه.. وبقلبك أسرار وسرور

صلوا على هادينا.. من مكة بينادينا
يا ربي تقبل حجنا.. وبالخير دايم عطينا`,
    color: "bg-stone-800"
  },
  {
    title: "قصيدة استقبال الحجيج",
    subtitle: "تُقال عند عودة الركب بسلامة الله",
    icon: <Quote size={40} />,
    lyrics: `جينا نهنيكم يا حجاج.. بمغفرة من رب العرش
نور الهدى عجباهكم لاج.. وحب النبي بالقلب انفرش

حج مبرور وسعي مشكور.. وذنب مغفور بفضل الله
يا مية أهلاً بالزوار.. ومن زار طيبة نال مناه

نورت الشام بطلتكم.. يا ريتنا كنا بصحبتكم
شربنا من مية زمزم.. وتباركنا ببركتكم`,
    color: "bg-emerald-700"
  }
];

const HERITAGE_COMPONENTS = [
  {
    category: "الورد الدمشقي",
    icon: <Flower size={32} className="text-pink-600" />,
    color: "from-pink-50 to-white",
    images: [
      "https://lh3.googleusercontent.com/d/1mOAS26i_lwXQXyQjEV2n1_8tXjq_FLuw",
      "https://lh3.googleusercontent.com/d/1eRe5ilm1FDhQpqUHfQTO3os3rG5QHsPR",
      "https://lh3.googleusercontent.com/d/1pmXjLNhsekzJgvAeSS3ZV-VmkiMB4Urn",
      "https://lh3.googleusercontent.com/d/1G8bEjZyubRb3-1AkJs9CJmUov8FSn5ow"
    ]
  },
  {
    category: "زيت دمشق (كفرسوسة والغوطة ) زيت البركة",
    icon: <Droplets size={32} className="text-amber-600" />,
    color: "from-amber-50 to-white",
    images: [
      "https://lh3.googleusercontent.com/d/19Wj7wbCPrCCerXHEhrzeyydDi7xnpBkH",
      "https://lh3.googleusercontent.com/d/1e6b5YtQa6yopzGCO2zZhOjqxrNExvL_c",
      "https://lh3.googleusercontent.com/d/1fj2ie-3naDRCTbx5p6S9pWND6W62SZQB",
      "https://lh3.googleusercontent.com/d/1xweSDzvnZEAW6HtkE-lqlnUewAXrTOxa"
    ]
  },
  {
    category: "التمور والبلح (بركة الحجاز والشام)",
    icon: <Palmtree size={32} className="text-orange-800" />,
    color: "from-orange-50 to-white",
    images: [
      "https://lh3.googleusercontent.com/d/1IDk7FhpbocWccn1L3YvWXmN7mDFoJQ_x",
      "https://lh3.googleusercontent.com/d/1qe6u4iy1H6akGSW0oH5Se00U5D8EhBwq",
      "https://lh3.googleusercontent.com/d/1xxknySOjnvkvFdfYvOfyyrzir0nNdisp",
      "https://lh3.googleusercontent.com/d/177n0N8GOr_lkLpxvwjN-trf_6UlF7nv5"
    ]
  },
  {
    category: "قماش غطاء الكعبة (الذي يحاك بدمشق)",
    icon: <Scroll size={32} className="text-stone-800" />,
    color: "from-stone-200 to-white",
    images: [
      "https://lh3.googleusercontent.com/d/13CfWNLGq4l3vpUUv5MNpmAR48l5ohh-d",
      "https://lh3.googleusercontent.com/d/1u0ZUwP_Fxlw4vSGXMXplyMXxAluMCicL",
      "https://lh3.googleusercontent.com/d/1yRhYuLT6wWtxNjcRJ05KT_pbSGnfgnaR",
      "https://lh3.googleusercontent.com/d/1Cur2h4ND4qn8D6zbApyOCD3FntzT3Rnz"
    ]
  },
  {
    category: "الملبس والضيافة الدمشقية",
    icon: <UtensilsCrossed size={32} className="text-stone-600" />,
    color: "from-stone-100 to-white",
    images: [
      "https://lh3.googleusercontent.com/d/1ldYtd902TA5iAt6rs-jO1pahcP17nYzP",
      "https://lh3.googleusercontent.com/d/1GBucEmZNwMppbZXc4ndjL23Bs10NmwOK",
      "https://lh3.googleusercontent.com/d/18zo15R6ZuI0yfSa7BCVweJmAjTv0GBYh",
      "https://lh3.googleusercontent.com/d/164x_tiDXM1O9EUZpMCOGfR15TOS0d-d6"
    ]
  }
];

const IntangibleHeritage = () => {
  const [selectedChant, setSelectedChant] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-5xl font-amiri font-bold text-stone-800">التراث اللامادي بدمشق</h2>
        <div className="w-32 h-2 bg-amber-600 mx-auto rounded-full"></div>
        <p className="text-2xl text-stone-500 font-light leading-relaxed">
          لم تكن رحلة الحج مجرد انتقال مادي، بل كانت ظاهرة ثقافية واجتماعية أنتجت طقوساً وتقاليد فريدة ما زالت محفورة في ذاكرة دمشق "بوابة الله".
        </p>
      </div>

      {/* Interactive Chants Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 justify-center">
          <Mic2 className="text-amber-600" size={32} />
          <h3 className="text-3xl font-amiri font-bold text-stone-800">أهازيج وقصائد المسار</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHANTS.map((chant, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedChant(idx)}
              className="bg-white p-8 rounded-[3rem] shadow-xl border border-stone-100 hover:border-amber-200 transition-all group flex flex-col items-center text-center space-y-6"
            >
              <div className={`p-6 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform ${chant.color}`}>
                {chant.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-amiri font-bold text-stone-800">{chant.title}</h4>
                <p className="text-stone-400 text-sm font-medium">{chant.subtitle}</p>
              </div>
              <div className="text-amber-600 font-bold text-sm border-b border-amber-600 pb-1 opacity-0 group-hover:opacity-100 transition-opacity">إقرأ الكلمات</div>
            </button>
          ))}
        </div>

        {/* Modal for Lyrics */}
        {selectedChant !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative max-w-2xl w-full bg-[#f4ece1] rounded-[3rem] p-12 md:p-20 shadow-2xl border-8 border-white/50 overflow-hidden group">
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
              
              <button 
                onClick={() => setSelectedChant(null)}
                className="absolute top-8 left-8 p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500"
              >
                <X size={24} />
              </button>

              <div className="relative z-10 text-center space-y-10">
                <div className="space-y-2">
                  <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">كلمات التراث الشعبي</span>
                  <h3 className="text-4xl font-amiri font-bold text-stone-900">{CHANTS[selectedChant].title}</h3>
                  <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {CHANTS[selectedChant].lyrics.split('\n\n').map((strophe, sIdx) => (
                    <div key={sIdx} className="bg-white/40 p-6 rounded-2xl border border-white/50">
                       <p className="text-2xl font-amiri leading-relaxed text-stone-800 whitespace-pre-line italic">
                        {strophe}
                       </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex justify-center">
                   <div className="flex items-center gap-3 bg-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-xl">
                      <Sparkles size={20} />
                      <span>تراث دمشقي خالد</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Artistic Historical Gallery */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <ImageIcon className="text-amber-600" size={32} />
          <h3 className="text-3xl font-amiri font-bold text-stone-800">ذاكرة بصرية من التاريخ</h3>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {HISTORICAL_GALLERY.map((url, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all group border border-stone-100"
            >
              <img 
                src={url} 
                alt={`Historical Heritage ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-amiri text-xl border-b-2 border-amber-500">من أرشيف الحج الشامي</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rituals Detailed Cards */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <Sparkles className="text-amber-600" size={32} />
          <h3 className="text-3xl font-amiri font-bold text-stone-800">الطقوس الدمشقية الكبرى</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {RITUALS.map((ritual) => (
            <div key={ritual.id} className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-stone-100 hover:border-amber-200 transition-all group flex flex-col">
              <div className="relative overflow-hidden bg-stone-50/50">
                <img 
                  src={ritual.imageUrl} 
                  alt={ritual.title} 
                  className="w-full h-auto block transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 right-8 left-8">
                  <h3 className="text-4xl font-amiri font-bold text-white mb-2">{ritual.title}</h3>
                  <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="p-12 space-y-6 bg-white flex-1 flex flex-col justify-center">
                <p className="text-xl text-stone-600 leading-relaxed min-h-[100px]">
                  {ritual.desc}
                </p>
                <div className="pt-6 border-t border-stone-50 flex gap-6">
                  <div className="flex items-center gap-2 text-stone-400">
                    <Music size={18} />
                    <span className="text-sm font-bold">أهازيج شعبية</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <Users size={18} />
                    <span className="text-sm font-bold">تجمع مجتمعي</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artistic Heritage Components Gallery */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-amiri font-bold text-stone-800">مكونات الهوية الدمشقية في المسار</h3>
          <p className="text-stone-500 text-lg">معرض فني يستعرض الجماليات المرتبطة برحلة الإيمان</p>
        </div>

        <div className="space-y-24">
          {HERITAGE_COMPONENTS.map((group, gIdx) => (
            <div key={gIdx} className={`bg-gradient-to-b ${group.color} p-12 rounded-[4rem] shadow-xl border border-stone-100 space-y-10 animate-in fade-in duration-1000`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-stone-200 pb-8">
                <div className="flex items-center gap-6">
                   <div className="p-5 bg-white rounded-3xl shadow-md">
                     {group.icon}
                   </div>
                   <h4 className="text-3xl font-amiri font-bold text-stone-800">{group.category}</h4>
                </div>
                <span className="text-stone-400 font-bold uppercase tracking-tighter">Artistic Series {gIdx + 1}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.images.map((imgUrl, iIdx) => (
                  <div 
                    key={iIdx} 
                    className={`relative overflow-hidden rounded-[2.5rem] shadow-lg group aspect-[4/5] ${iIdx % 2 === 1 ? 'md:translate-y-6' : ''}`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${group.category} ${iIdx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Summary Section */}
      <section className="bg-stone-900 rounded-[4rem] p-16 text-white text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 pointer-events-none"></div>
         <div className="relative z-10 space-y-8">
            <h4 className="text-4xl font-amiri font-bold text-amber-500">صون التراث اللامادي</h4>
            <p className="text-2xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
              إن إعادة إحياء هذه الطقوس وتوثيقها بصرياً وتاريخياً هو جزء أساسي من ملف الترشيح لليونسكو, بوصفها قيمة ثقافية حية تتوارثها الأجيال في قلب دمشق.
            </p>
            <div className="flex justify-center gap-4">
               <div className="w-3 h-3 rounded-full bg-amber-600 animate-pulse"></div>
               <div className="w-3 h-3 rounded-full bg-amber-600 animate-pulse delay-75"></div>
               <div className="w-3 h-3 rounded-full bg-amber-600 animate-pulse delay-150"></div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default IntangibleHeritage;