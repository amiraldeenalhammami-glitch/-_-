
import React from 'react';
import { Warehouse, MapPin, Store, Building2, Globe2 } from 'lucide-react';

const HajjStations = () => {
  const images = [
    "https://lh3.googleusercontent.com/d/1wp_QMaXc1G7R5sl4UBXps3U94Gqd0y25",
    "https://lh3.googleusercontent.com/d/1V9kMJmUiypo_OQG9kBKP-OTlYzLDxIT4",
    "https://lh3.googleusercontent.com/d/1J-DXpcI-1Y6nkYpjyzS-04XcE2gKTdT8",
    "https://lh3.googleusercontent.com/d/1piZf7eRFGCPjxRmfMjuPXFQmbJFvjLLS",
    "https://lh3.googleusercontent.com/d/1l6VaJJYCv-fB-jRja4X4RtNV-ppmkWwW",
    "https://lh3.googleusercontent.com/d/1pohbtMiIjqz9KxJDKNcjTw2K-fuKSR8h",
    "https://lh3.googleusercontent.com/d/1qjRcOoi_9NWEImaOocmzgZlgv2tB7MFS"
  ];

  const syriaCaravanImages = [
    "https://lh3.googleusercontent.com/d/1NM4y5ZP9x0yc2pwL8dwh53Xtml_FlSsj",
    "https://lh3.googleusercontent.com/d/1e8LLVHNDJmUe6Ii0zrBdWBUAj9P5ceu0"
  ];

  const tekiyyaData = [
    { name: "الخسروية", city: "حلب", desc: "يضم جامعا ومدرسة وتكية ومدفنا ومطبخا." },
    { name: "المولوية", city: "حلب", desc: "تضم ميدانا وتربة ومطبخ ومطعم وغرف للدراويش." },
    { name: "المولاخانة", city: "", desc: "-" },
    { name: "الوفائية", city: "حلب", desc: "قبلية وميدان كان يكسو جدرانه قاشاني وغرفة ضريح وسبيل ومدفن وتربة وليوان والعديد من الدور." },
    { name: "الإخلاصية الرفاعية", city: "حلب", desc: "على النمط العثماني قبلية تضم خلوات خشبية للاعتكاف وميدان وغرف للمتصوفة." },
    { name: "الصيبانية", city: "حلب", desc: "تضم عدة أجنحة ومسجدا ومدفنا وإيوانا وغرفا وصالات." },
    { name: "محي الدين", city: "دمشق", desc: "بني ليكون تكية فيها مسجد ومئذنة وصحن واسع محاط بعدد من الغرف، مع قبة وتربة دفن فيها الوالي وكان مكان الإقامة الحجاج والدراويش الذين قدموا لدمشق من أجل الحج." },
    { name: "التكية المولوية", city: "دمشق", desc: "محطة لحجاج مكة من الأتراك ومكانا لإقامة طلبة العلوم الدينية." },
    { name: "تكية العسالي", city: "دمشق", desc: "إقامة الحجيج وتقديم الخدمات لهم ولغيرهم من عابري السبيل." },
    { name: "التكية السليمية", city: "دمشق", desc: "وتتألف من تكية مستقلة لطبخ الطعام وتوزيعه على الفقراء، ومن جامع، وتربة على ضريح الشيخ محي الدين." },
  ];

  const marketData = [
    { name: "أسواق حلب", city: "حلب", role: "-" },
    { name: "أسواق حماة", city: "حماة", role: "يشترون منها الإحرامات والبياضات لأنها مشهورة بصناعة المنسوجات القطنية." },
    { name: "أسواق حمص", city: "حمص", role: "أول استراحة رئيسية بعد مغادرة حلب." },
    { name: "سوق المزيريب", city: "درعا", role: "سوق موسمي، حيث يسافر الباعة والمتعيشة مع قافلة الحج، ويقيمون فيه أسواقًا مؤقتة." },
    { name: "سوق الدرويشية", city: "دمشق", role: "ينطلق منه موكب الحج." },
    { name: "سوق الميدان", city: "دمشق", role: "كان موسم خروج قافلة الحج وعودتها من المراسم الرائعة التي يشهدها السوق في كل عام." },
    { name: "سوق الجزماتية", city: "دمشق", role: "سوق متخصص بالجزمات." },
    { name: "سوق باب المصلى", city: "دمشق", role: "-" },
    { name: "سوق السويقة", city: "دمشق", role: "سوق تخصصي بصناعة النحاسيات وأدوات الزراعة." },
    { name: "سوق السنانية", city: "دمشق", role: "سوق متخصص بالفرو والصوف." },
  ];

  const internationalStations = [
    { country: "تركيا", station: "اسكودار", desc: "مدينة الانطلاق." },
    { country: "تركيا", station: "كارتال", desc: "بعد المرور بها، تقضي القافلة ليلتها في بنديك، حيث تقع تكية." },
    { country: "تركيا", station: "جبزة", desc: "فيها حمامان وثلاثة مساجد، أحدها مسجد المصطفى. وتتميز ببيوتها وسوقها ومتاجرها." },
    { country: "تركيا", station: "هرسك", desc: "يعبر الحجاج بالقوارب ديل ليصلوا إليها، حيث يوجد مسجد وحمام وتكيات." },
    { country: "تركيا", station: "إزنيق", desc: "تحوي قلعة وتكيات وأسواق ممتازة بحيث توفر كل الحاجيات الأساسية، وتحوي ستة مساجد وحمامين وضريح." },
    { country: "تركيا", station: "يني شهير", desc: "يوجد فيها تكية كبيرة وثلاثة مساجد." },
    { country: "تركيا", station: "بازارييري", desc: "يوجد فيها مسجد وحمام وتكيتان." },
    { country: "تركيا", station: "بوزويك", desc: "فيها مسجد وحمام وبعض التكيات." },
    { country: "تركيا", station: "إسكيشهير", desc: "فيها مسجدان وتعتبر أسواقها وتكياتها ممتازة، وتتوقف القافلة فيها ليوم." },
    { country: "تركيا", station: "سيدي بطل غازي", desc: "فيها ضريح السيد غازي ويلحق به مسجد، ويوجد ضريحان آخران يعود أحدهما لوالدة السلطان علاء الدين." },
    { country: "تركيا", station: "حسرف باشا", desc: "تكيتها ضخمة جداً ومتوفر بقربها المؤن الأساسية، وفيها مسجد كان بالأصل كنيسة." },
    { country: "تركيا", station: "بايات", desc: "قرية فيها مسجد صغير دون مئذنة وحمام صغير وتكيتان." },
    { country: "تركيا", station: "بولفادين", desc: "بلدة فيها سوق وتكيات ممتازة وفيها ثلاثة مساجد وحمامان." },
    { country: "تركيا", station: "أكشهير", desc: "مدينة كبيرة بها بازار (سوق) وسوق مغطى ومستشفيات وخمسة حمامات وثلاثة مساجد." },
    { country: "تركيا", station: "إلغن", desc: "قرية بها بازار وسوق مغطى وحمام ومسجدين وتكيتان." },
    { country: "تركيا", station: "لاديك", desc: "يمر طريق القوافل بقرية أرسلانلي ويصل إليها، وفيها مسجد وحمام وتكية." },
    { country: "تركيا", station: "قونية", desc: "فيها حصن ضخم يغطي جزءًا منها، وسوقها المغطى داخل المدينة. يوجد بها العديد من المساجد وستة حمامات عامة، وتشتهر بمحلات الحلويات." },
    { country: "تركيا", station: "إسماعيل", desc: "تحتوي على مسجد بمئذنتين وحمام وتكية." },
    { country: "تركيا", station: "كاربينار", desc: "مسجد وحمامان عامان وتكية وبازار وحدائق ونهر يتدفق في الداخل. توجد بها المؤن الأساسية." },
    { country: "تركيا", station: "أريجلي", desc: "تحتوي على دار تكية كبيرة بناها محمد باشا ومسجد وحمام. توجد بها السلع الضرورية." },
    { country: "تركيا", station: "أولوقيشلة", desc: "فيها تكيتان." },
    { country: "تركيا", station: "جفتهان", desc: "فيها تكية وخان يضم مسجد ويمر قربها نهر تشاكيت." },
    { country: "تركيا", station: "رمضان أوغلو", desc: "فيها قصر وثلاثة مساجد وحمامين وبازار وسوق مغطى وحدائق." },
    { country: "تركيا", station: "أضنة", desc: "تقع بالقرب من نهر جيجون." },
    { country: "تركيا", station: "ميسيس", desc: "فيها مسجد وتكية." },
    { country: "تركيا", station: "كورتكولاغي", desc: "فيها مسجد وحمام وتكيات ومتاجر وحدائق." },
    { country: "تركيا", station: "إسكندرون", desc: "تمر القافلة بها لكنها لا تقف فيها." },
    { country: "تركيا", station: "بيلين", desc: "فيها تكية ومسجد وحمام." },
    { country: "تركيا", station: "أنطاكية", desc: "تقع داخل حصن فيه 366 برج، تكياتها ومساجدها وأسواقها وحماماتها ممتازة." },
    { country: "تركيا", station: "دمير كوبرو", desc: "فيها تكية." },
    { country: "---", station: "---", desc: "---" },
    { country: "الأردن", station: "خان المفرق", desc: "تصل إليها القوافل مروراً بالرمثا، ويوجد فيها حمامات وقصر ومسجد." },
    { country: "الأردن", station: "الزرقاء", desc: "يتم فيها تبادل تجاري بين الحجاج، وهي مركز للمراقبة والحراسة وفيها قصر شبيب." },
    { country: "الأردن", station: "البلقاء", desc: "فيها بركة وعيون وقلعة." },
    { country: "الأردن", station: "القطرانة", desc: "فيها بركة ماء وخان وحصن." },
    { country: "الأردن", station: "الحسا", desc: "فيها قلعة قديمة." },
    { country: "الأردن", station: "عنيزة", desc: "فيها بركة كبيرة." },
    { country: "الأردن", station: "معان", desc: "عيون جارية وقلعة وبها حمام الحجاج." },
    { country: "الأردن", station: "المدورة", desc: "آخر منازل الحج في الأردن وفيها بئر سرغ." },
  ];

  return (
    <div className="space-y-0 bg-white">
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-6 pt-16 text-center space-y-6">
        <h2 className="text-5xl font-amiri font-bold text-stone-800">منازل الحج (الخانات والمنازل)</h2>
        <div className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full mb-12"></div>
      </div>

      {/* 1. Main Images Section - Full Width Vertical */}
      <section className="w-full space-y-16 pb-16">
        {images.map((url, idx) => (
          <div key={idx} className="w-full relative group">
            <img 
              src={url} 
              alt={`Hajj Station Image ${idx + 1}`} 
              className="w-full h-auto block shadow-lg"
            />
            {/* Elegant Separator between images */}
            {idx < images.length - 1 && (
              <div className="h-24 flex items-center justify-center">
                 <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                 <div className="mx-6 text-amber-600 opacity-30"><Warehouse size={24} /></div>
                 <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 2. Tables Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* Table 1: Tekiyyas */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 border-r-4 border-amber-600 pr-6">
            <Building2 className="text-amber-600" size={36} />
            <h3 className="text-4xl font-amiri font-bold text-stone-800">التكايا (أماكن الراحة والاعتكاف) ودورها المرتبط بمسار الحج الشامي</h3>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden">
            <table className="w-full text-right border-collapse">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800">اسم التكية</th>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800">المدينة</th>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800">الوصف والخدمات المقدمة</th>
                </tr>
              </thead>
              <tbody>
                {tekiyyaData.map((row, idx) => (
                  <tr key={idx} className="border-b border-stone-50 hover:bg-amber-50/20 transition-colors">
                    <td className="px-8 py-6 font-bold text-amber-900">{row.name}</td>
                    <td className="px-8 py-6 text-stone-600">{row.city}</td>
                    <td className="px-8 py-6 text-stone-500 leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Table 2: Markets */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 border-r-4 border-emerald-600 pr-6">
            <Store className="text-emerald-600" size={36} />
            <h3 className="text-4xl font-amiri font-bold text-stone-800">الأسواق المرتبطة بمسار الحج الشامي في سورية</h3>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden">
            <table className="w-full text-right border-collapse">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800 text-center">اسم السوق</th>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800 text-center">المدينة</th>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800 text-center">الدور أو التخصص</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((row, idx) => (
                  <tr key={idx} className="border-b border-stone-50 hover:bg-emerald-50/20 transition-colors">
                    <td className="px-8 py-6 font-bold text-emerald-900 text-center">{row.name}</td>
                    <td className="px-8 py-6 text-stone-600 text-center">{row.city}</td>
                    <td className="px-8 py-6 text-stone-500 text-center">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Table 3: International Stations */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 border-r-4 border-blue-600 pr-6">
            <Globe2 className="text-blue-600" size={36} />
            <h3 className="text-4xl font-amiri font-bold text-stone-800">محطات مسار الحج الشامي خارج سورية (تركيا والأردن)</h3>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden">
            <table className="w-full text-right border-collapse">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800 text-center">الدولة</th>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800 text-center">المحطة</th>
                  <th className="px-8 py-6 font-bold text-xl text-stone-800 text-center">الوصف / الميزة</th>
                </tr>
              </thead>
              <tbody>
                {internationalStations.map((row, idx) => (
                  <tr key={idx} className={`border-b border-stone-50 hover:bg-blue-50/20 transition-colors ${row.country === '---' ? 'bg-stone-200' : ''}`}>
                    <td className="px-8 py-6 font-bold text-blue-900 text-center">{row.country}</td>
                    <td className="px-8 py-6 font-bold text-stone-700 text-center">{row.station}</td>
                    <td className="px-8 py-6 text-stone-500 text-center leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>

      {/* 3. Syria Caravan Stations Images */}
      <section className="w-full space-y-0 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-amiri font-bold text-stone-800">منازل القوافل في سوريا</h2>
          <div className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full mt-6"></div>
        </div>
        
        {syriaCaravanImages.map((url, idx) => (
          <div key={idx} className="w-full relative group">
            <img 
              src={url} 
              alt={`Syria Caravan Station ${idx + 1}`} 
              className="w-full h-auto block"
            />
            {idx < syriaCaravanImages.length - 1 && (
               <div className="h-16 bg-white"></div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default HajjStations;
