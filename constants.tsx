
import React from 'react';
import { RouteInfo, Era, Station, HajjStats } from './types';

export const ROUTES: RouteInfo[] = [
  { 
    id: 'egyptian', 
    name: 'الطريق المصري', 
    description: 'كان الحجاج القادمون من المغرب والأندلس يتبعون الطرق البرية إلى القاهرة، وتتجمع القافلة في بركة الحج شمال القاهرة، ثم تتجه إلى أجرود شمال غرب السويس.', 
    importance: 'تاريخي وتجاري هام يربط المغرب بالمشرق.' 
  },
  { 
    id: 'iraqi', 
    name: 'الطريق العراقي', 
    description: 'كانت الكوفة نقطة الانطلاق الرئيسية للقافلة العراقية، مع قافلة ثانية أصغر تنطلق من البصرة، وتلتقي المجموعتان في ذات عرق قبل إكمال جولة الحج والعودة معاً.', 
    importance: 'هندسة معمارية ومائية فريدة (درب زبيدة).' 
  },
  { 
    id: 'yemeni', 
    name: 'الطريق اليمني', 
    description: 'كان حجاج اليمن يسلكون ثلاثة طرق رئيسية: الطريق الساحلي، والطريق الداخلي أو الأوسط، والطريق الأعلى، ولكل منها مساراته ومحطاته.', 
    importance: 'تواصل اجتماعي وثقافي عميق عبر تهامة والجبال.' 
  },
  { 
    id: 'omani', 
    name: 'الطريق العماني', 
    description: 'كان لحجاج عُمان طريقان، أحدهما يتجه إلى البحرين ومنها إلى اليمامة ثم إلى ضرية، أو الطريق الداخلي من اليمن إلى مكة.', 
    importance: 'طريق التحدي والصبر عبر الربع الخالي.' 
  },
  { 
    id: 'bahraini', 
    name: 'طريق البحرين - اليمامة', 
    description: 'يُعد رافداً مهماً لطريق الحج، وبعد التقائه بطريق البصرة في ضرية، يمر عبر محطات جديلة، وفلجة، ثم أوطاس، وذات عرق، حتى يصل إلى مكة المكرمة.', 
    importance: 'شريان حيوي لشرق الجزيرة العربية ورافد لطريق البصرة.' 
  },
  { 
    id: 'levantine', 
    name: 'الطريق الشامي', 
    description: 'موضوع بحثنا التفصيلي، ينطلق من دمشق (بوابة الله) جامعاً حجاج الأناضول والقوقاز ووسط آسيا في قافلة كبرى منظمة.', 
    importance: 'أهم الطرق وأكثرها تنظيماً تاريخياً ومركز اهتمام هذا الملف.' 
  },
];

export const ERAS: Era[] = [
  { 
    id: 'rashidun', 
    name: 'الخلافة الراشدية', 
    startYear: 632, 
    endYear: 661, 
    color: '#0d9488', 
    lane: 0,
    description: 'بدأ الاهتمام بطرق الحج في هذا العصر مع اتساع رقعة الدولة الإسلامية. تميزت هذه الفترة بوضع اللبنات الأولى لتأمين المسارات وتوفير مصادر المياه للحجيج القادمين من الأقاليم المفتوحة حديثاً.',
    mapUrl: 'https://lh3.googleusercontent.com/d/1v0QsnEnOsk0OlJGPbLVOGLypkhuT1zWK'
  },
  { 
    id: 'umayyad', 
    name: 'العصر الأموي', 
    startYear: 661, 
    endYear: 750, 
    color: '#0ea5e9', 
    lane: 0,
    description: 'شهد الطريق في هذا العصر عمليات تطوير واسعة شملت ترميم البرك، وبناء المساجد، وإقامة علامات المسافة، ومنارات الإرشاد. كما تم تجديد مسجد تبوك وأنشئت محطات متقدمة على امتداد الصحراء. وقد ضم الطريق حجاج بلاد الشام والأناضول والقرم والقوقاز.',
    mapUrl: 'https://lh3.googleusercontent.com/d/1v0QsnEnOsk0OlJGPbLVOGLypkhuT1zWK'
  },
  { 
    id: 'abbasid', 
    name: 'العصر العباسي', 
    startYear: 750, 
    endYear: 1174, 
    color: '#10b981', 
    lane: 0,
    description: 'في هذا العصر تحول الاهتمام إلى طريق العراق. إلا أنه وفي فترات ضعف الدولة العباسية، تحول حجاج العراق إلى درب الحاج الشامي. ونتيجة لذلك، ازداد عدد المحطات ومواضع الإمداد بالماء والطعام. كما حرص الخلفاء العباسيون على تأمين الطريق وبناء الخانات والمساجد الصغيرة فيه.',
    mapUrl: 'https://lh3.googleusercontent.com/d/1LQCvByncN1svQWSgM9YV-ybjrM_CYRhW'
  },
  { 
    id: 'seljuk', 
    name: 'العصر السلجوقي', 
    startYear: 1037, 
    endYear: 1194, 
    color: '#6366f1', 
    lane: 1,
    description: 'اهتم السلجوقيون بتنظيم الطريق وتحديد محطاته.',
    mapUrl: 'https://lh3.googleusercontent.com/d/1kpZCCAMKYvGQXNaZKpYAMGrUW7sGr6bJ'
  },
  { 
    id: 'crusader', 
    name: 'الاحتلال الصليبي', 
    startYear: 1096, 
    endYear: 1291, 
    color: '#ef4444', 
    lane: 2,
    description: 'فترة حرجة شهدت اضطرابات في مسارات الحج؛ حيث أعاد صلاح الدين الأيوبي لاحقاً الأمن إلى الطريق بعد هذه الاضطرابات.',
    mapUrl: 'https://lh3.googleusercontent.com/d/1kpZCCAMKYvGQXNaZKpYAMGrUW7sGr6bJ' // Linked to Seljuk image as requested
  },
  { 
    id: 'zengid', 
    name: 'الدولة الزنكية', 
    startYear: 1127, 
    endYear: 1250, 
    color: '#d946ef', 
    lane: 3,
    description: 'عني الزنكيون بحماية الطريق من المخاطر وتأمينه للقوافل.',
    mapUrl: 'https://lh3.googleusercontent.com/d/128Z6PSm3lLp3Imh2TzFjTNuSrWf4W5Dn'
  },
  { 
    id: 'ayyubid', 
    name: 'العصر الأيوبي', 
    startYear: 1174, 
    endYear: 1250, 
    color: '#f59e0b', 
    lane: 1,
    description: 'أعاد صلاح الدين الأيوبي الأمن إلى الطريق بعد الاضطرابات التي حدثت حينها. واستمر هذا العمل من خلفه المعظم عيسى بن العادل، الذي أعاد تأهيل المرافق الحيوية.',
    mapUrl: 'https://lh3.googleusercontent.com/d/128Z6PSm3lLp3Imh2TzFjTNuSrWf4W5Dn'
  },
  { 
    id: 'mamluk', 
    name: 'العصر المملوكي', 
    startYear: 1258, 
    endYear: 1517, 
    color: '#84cc16', 
    lane: 0,
    description: 'تنافس المماليك على تطوير طريق الحج، وشهد الطريق الشامي محطات حراسة وقلاعاً كبيرة ومراكز خدمية جديدة.',
    mapUrl: 'https://lh3.googleusercontent.com/d/128Z6PSm3lLp3Imh2TzFjTNuSrWf4W5Dn'
  },
  { 
    id: 'ottoman', 
    name: 'العصر العثماني', 
    startYear: 1291, 
    endYear: 1900, 
    color: '#dc2626', 
    lane: 3,
    description: 'عنى العثمانيون بتحسين الطريق، فشيدوا القلاع والحصون لحراسته، وحفروا الآبار، وبنوا البرك والخزانات. وكان يتم الاتفاق في البداية على خدمة الحجاج، والتي تشمل الركوب والإقامة والطعام والخيم والتخوت، مع وجود العكامة والغلمان والطباخين والمهاترة والسقاية. وكان كل والٍ مسؤولاً عن حماية القافلة حتى تصل إلى حدود الولاية الأخرى.',
    mapUrl: 'https://lh3.googleusercontent.com/d/1bt2TNb7vlL1f_aE1UaxbeIXhy9sutfn-'
  },
  { 
    id: 'modern', 
    name: 'القرن العشرين', 
    startYear: 1900, 
    endYear: 2025, 
    color: '#71717a', 
    lane: 0,
    description: 'تم مد خط سكة حديد الحجاز بين دمشق والمدينة المنورة، وكان هذا الخط تطويراً للدرب يهدف إلى راحة الحجاج وتسهيلاً لأداء الفريضة. وبذلك، كانت القطارات تصل في أربعة أيام. وكانت المحطات متتبعة لمسار الحج، ولكنها اختلفت في بعض المواضع نتيجة لظروف فنية أو اقتصادية أو عمرانية أو عقبات.',
    mapUrl: 'https://lh3.googleusercontent.com/d/1pmJscbFiGgXv-U8P0v4LQ9BRmQii87Gb'
  }
];

export const STATIONS: Station[] = [
  { id: 'damascus', name: 'دمشق (المنطلق)', description: 'بوابة الله ومحطة التجمع الكبرى.', coords: { lat: 33.5138, lng: 36.2765 } },
  { id: 'deraa', name: 'درعا', description: 'محطة هامة في سهل حوران.', coords: { lat: 32.6136, lng: 36.1039 } },
  { id: 'amman', name: 'عمان', description: 'محطة استراحة مركزية في بلاد الشام.', coords: { lat: 31.9454, lng: 35.9284 } },
  { id: 'maaan', name: 'معان', description: 'بوابة الصحراء الأردنية.', coords: { lat: 30.1944, lng: 35.7333 } },
  { id: 'tabuk', name: 'تبوك', description: 'أولى المحطات الكبرى في الجزيرة العربية.', coords: { lat: 28.3835, lng: 36.5662 } },
  { id: 'madinah', name: 'المدينة المنورة', description: 'مقصد الزيارة النبوية الشريفة.', coords: { lat: 24.5247, lng: 39.5692 } },
  { id: 'makkah', name: 'مكة المكرمة', description: 'الوجهة النهائية وبيت الله الحرام.', coords: { lat: 21.4225, lng: 39.8262 } },
];

export const HAJJ_HISTORY_STATS: HajjStats[] = [
  { century: 'القرن 1هـ', count: 100000 },
  { century: 'القرن 3هـ', count: 250000 },
  { century: 'القرن 5هـ', count: 400000 },
  { century: 'القرن 7هـ', count: 550000 },
  { century: 'القرن 9هـ', count: 700000 },
  { century: 'القرن 11هـ', count: 850000 },
  { century: 'القرن 13هـ', count: 1200000 },
  { century: 'القرن 15هـ', count: 2500000 },
];
