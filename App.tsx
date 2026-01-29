
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Map, BookOpen, Scroll, Award, History, Info, Sparkles, Building2, X, Warehouse } from 'lucide-react';

import HomePage from './pages/HomePage';
import HajjGuide from './pages/HajjGuide';
import AncientRoutes from './pages/AncientRoutes';
import LevantinePath from './pages/LevantinePath';
import IntangibleHeritage from './pages/IntangibleHeritage';
import UnescoCriteria from './pages/UnescoCriteria';
import HajjStations from './pages/HajjStations';
import FutureRevival from './pages/FutureRevival';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'الرئيسية', icon: <Home size={18} /> },
    { path: '/hajj', label: 'الحج ومناسكه', icon: <Sparkles size={18} /> },
    { path: '/ancient-routes', label: 'طريق الحج قديماً', icon: <History size={18} /> },
    { path: '/levantine-path', label: 'الدرب الشامي', icon: <Map size={18} /> },
    { path: '/intangible', label: 'تراث لا مادي', icon: <BookOpen size={18} /> },
    { path: '/criteria', label: 'معايير اليونسكو', icon: <Award size={18} /> },
    { path: '/stations', label: 'منازل الحج', icon: <Warehouse size={18} /> },
    { path: '/revival', label: 'الإحياء المستقبلي', icon: <Building2 size={18} /> },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-amber-100 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center space-x-6 space-x-reverse whitespace-nowrap overflow-x-auto scrollbar-hide py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-200'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {item.icon}
              <span className="font-bold text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  const [showMap, setShowMap] = useState(false);
  const logoUrl = "https://lh3.googleusercontent.com/d/1WC2BRNvoOJYDrW7ZUWZmvYe6rUYBit00";
  const mapImageUrl = "https://lh3.googleusercontent.com/d/1zdBCjnBdlu1xEZZ6L-31ZfBK1NH29Ffu";

  return (
    <header className="bg-stone-900 text-white py-8 px-4 border-b-4 border-amber-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 border-2 border-amber-500 overflow-hidden">
              <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-right">
              <h1 className="text-4xl font-amiri font-bold text-amber-500 mb-2 tracking-wide">مسار الحج الشامي</h1>
              <p className="text-amber-100/80 text-lg font-medium">إعداد ملف التوثيق ضمن لائحة التراث العالمي</p>
              <div className="mt-2 text-stone-400 text-sm flex flex-col gap-1">
                 <span className="font-semibold text-stone-300">
                   إعداد: 
                   <a 
                     href="https://www.facebook.com/amir.aldeen.alhammami/?locale=ar_AR" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-amber-500 transition-colors mx-1"
                   >
                     م. أمير الدين الحمامي
                   </a>
                   - م. بيان عسلية - م. أيمن المنصوري
                 </span>
                 <span className="text-stone-400">
                   بإشراف 
                   <a 
                     href="https://www.facebook.com/arch.abir.arkawi?locale=ar_AR" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-amber-500 transition-colors mx-1 font-semibold"
                   >
                     الدكتورة عبير عرقاوي
                   </a>
                 </span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setShowMap(true)}
          className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center md:text-right max-w-md hover:bg-white/10 transition-all cursor-pointer group relative overflow-hidden active:scale-95"
        >
          <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-3xl font-amiri font-bold mb-2 relative z-10">رحلة الإيمان</h2>
          <p className="text-amber-500 italic text-xl relative z-10">من إسطنبول إلى مكة</p>
          <div className="mt-2 text-xs text-stone-500 opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center md:justify-start gap-1">
            <Map size={12} />
            <span>انقر لعرض الخارطة</span>
          </div>
        </button>
      </div>

      {showMap && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative max-w-5xl w-full bg-stone-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-stone-950">
              <h3 className="text-2xl font-amiri font-bold text-amber-500">خارطة رحلة الإيمان</h3>
              <button 
                onClick={() => setShowMap(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-stone-400"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-auto p-4 flex items-center justify-center bg-stone-800">
               <img src={mapImageUrl} alt="Faith Journey Map" className="max-w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-stone-950 text-white py-12 border-t-8 border-stone-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-amber-500 font-bold text-xl mb-4">مشروع رقمنة الدراسات العليا</p>
          <p className="text-stone-400 leading-relaxed text-lg">
            اقتراح: 
            <a 
              href="https://www.facebook.com/amir.aldeen.alhammami/?locale=ar_AR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-200 hover:text-amber-500 transition-colors mx-1 underline decoration-stone-700 underline-offset-4"
            >
              م. أمير الدين الحمامي
            </a>
          </p>
          <div className="flex items-center gap-3 text-stone-500 mt-6">
             <Info size={20} />
             <span>جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
        <div className="text-center md:text-left space-y-4 border-r md:border-r-0 md:border-l border-stone-800 pr-8 md:pr-0 md:pl-8">
          <p className="text-xl font-bold">جامعة دمشق</p>
          <p className="text-stone-300 text-lg">قسم التاريخ والنظريات</p>
          <p className="text-amber-600/80 font-medium">الدراسات العليا</p>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fdfaf5]">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hajj" element={<HajjGuide />} />
            <Route path="/ancient-routes" element={<AncientRoutes />} />
            <Route path="/levantine-path" element={<LevantinePath />} />
            <Route path="/intangible" element={<IntangibleHeritage />} />
            <Route path="/criteria" element={<UnescoCriteria />} />
            <Route path="/stations" element={<HajjStations />} />
            <Route path="/revival" element={<FutureRevival />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
