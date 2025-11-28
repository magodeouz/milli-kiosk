(function () {
  const STORAGE_KEY = "mk-lang";
  const DEFAULT_LANG = "tr";
  const SUPPORTED_LANGS = ["tr", "en", "ar"];

  const I18N_DICT = {
    tr: {
      "common.logoTitle": "Millî Kütüphane",
      "common.logoSubtitle": "Kütüphaneler ve Yayınlar GM",
      "common.menu.myReservations": "Rezervasyonlarım",
      "common.menu.createReservation": "Rezervasyonu Oluştur",
      "common.menu.breakTracking": "Mola Takibi",
      "common.menu.settings": "Ayarlar",
      "common.menu.logout": "Çıkış",
      "common.buttons.confirm": "Onayla",
      "common.buttons.back": "Geri Dön",
      "common.buttons.edit": "Düzenle",
      "common.buttons.cancel": "İptal Et",
      "common.buttons.viewDetails": "Detaylar",
      "common.buttons.newReservation": "Yeni Rezervasyon Oluştur",
      "common.buttons.viewReservations": "Rezervasyonlarımı Görüntüle",
      "common.buttons.seatChange": "Koltuk Değişimi",
      "common.status.active": "Aktif",
      "common.status.completed": "Tamamlandı",
      "common.status.cancelled": "İptal Edildi",
      "home.pageTitle": "Kütüphane Giriş Sistemi",
      "home.heroTitle": "Millî Kütüphaneye Hoş Geldiniz",
      "home.heroDescription": "Lütfen giriş yapmak için bir yöntem seçin.",
      "home.login.tc": "T.C. Kimlik ile Giriş",
      "home.login.ykn": "YKN/Pasaport ile Giriş",
      "home.login.digital": "Dijital Kimlik ile Giriş",
      "home.login.edevlet": "e-Devlet ile Giriş",
      "home.links.foreign": "Yeni Yabancı Üyelik Kaydı",
      "home.links.help": "Yardım & Destek",
      "home.links.kiosk": "Kiosk 24/7",
      "home.stats.activeSessionsLabel": "Aktif Oturum",
      "home.stats.activeSessionsDesc": "Bugün sisteme giriş yapan toplam kullanıcı.",
      "home.stats.occupancyLabel": "Salon Doluluğu",
      "home.stats.occupancyDesc": "Ana Çalışma Salonu şu anda orta yoğunlukta.",
      "home.stats.hoursLabel": "Çalışma Saatleri",
      "home.stats.hoursDesc": "Kiosk destek hattı kesintisiz hizmet verir.",
      "index.pageTitle": "Milli Kütüphane Arayüzleri",
      "index.subtitle": "Millî Kütüphane UI Kit",
      "index.title": "Sayfa Dizini",
      "index.description": "Aşağıdan ihtiyaç duyduğunuz ekranı seçerek doğrudan önizleyebilirsiniz.",
      "index.cards.home.label": "Giriş",
      "index.cards.home.title": "Kütüphane Girişi",
      "index.cards.home.description": "Ana login ekranı.",
      "index.cards.auth.label": "Doğrulama",
      "index.cards.auth.title": "Kimlik Doğrulama",
      "index.cards.auth.description": "Gelişmiş giriş seçenekleri.",
      "index.cards.break.label": "Mola",
      "index.cards.break.title": "Mola Takip",
      "index.cards.break.description": "Mola ve oturum yönetimi.",
      "index.cards.reservation.label": "Rezervasyon",
      "index.cards.reservation.title": "Masa Rezervasyonu",
      "index.cards.reservation.description": "Çalışma alanı seçimi.",
      "index.cards.foreign.label": "Üyelik",
      "index.cards.foreign.title": "Yabancı Üye Kaydı",
      "index.cards.foreign.description": "Yeni kayıt formu.",
      "index.cards.access.label": "Uyarı",
      "index.cards.access.title": "Erişim Uyarısı",
      "index.cards.access.description": "Yetkilendirme ekranı.",
      "index.cards.settings.label": "Ayarlar",
      "index.cards.settings.title": "Profil & Ayarlar",
      "index.cards.settings.description": "Kullanıcı tercihleri.",
      "index.cards.help.label": "Destek",
      "index.cards.help.title": "Yardım Merkezi",
      "index.cards.help.description": "SSS ve rehberler.",
      "index.footer": "Statik dosyalar Tailwind CDN ile çalışır. Geliştirme sunucusu için README'yi inceleyin.",
      "settings.pageTitle": "Ayarlar",
      "settings.heading": "Ayarlar",
      "settings.language.title": "Dil Seçimi",
      "settings.language.tr": "Türkçe",
      "settings.language.en": "English",
      "settings.language.ar": "العربية",
      "settings.accessibility.title": "Erişilebilirlik",
      "settings.accessibility.largeText": "Büyük Yazı Tipi",
      "settings.accessibility.highContrast": "Yüksek Kontrast",
      "settings.accessibility.screenReader": "Ekran Okuyucu",
      "settings.accessibility.voiceGuidance": "Sesli Yönlendirme",
      "reservation.pageTitle": "Kütüphane Rezervasyon Sistemi",
      "reservation.heroTitle": "Salon ve Masa Seçimi",
      "reservation.heroDescription": "Lütfen rezervasyon yapmak için filtreleri kullanın ve bir salon seçin.",
      "reservation.filters.title": "Filtreler",
      "reservation.filters.seatType": "Koltuk Tipi",
      "reservation.filters.seat.single": "Tekli",
      "reservation.filters.seat.group": "Grup",
      "reservation.filters.seat.silent": "Sessiz Alan",
      "reservation.filters.features.title": "Masa Özellikleri",
      "reservation.filters.features.outlet": "Priz",
      "reservation.filters.features.light": "Ayarlanabilir Işık",
      "reservation.filters.features.internet": "Yüksek Hızlı İnternet",
      "reservation.filters.features.space": "Geniş Çalışma Alanı",
      "reservation.filters.features.libraryAccess": "Kitaplık Erişimi",
      "reservation.occupancy.title": "Salon Doluluk Durumu",
      "reservation.occupancy.mainHall": "Ana Çalışma Salonu",
      "reservation.occupancy.mainHallDesc": "Zemin Kat",
      "reservation.occupancy.silentArea": "Sessiz Okuma Alanı",
      "reservation.occupancy.silentAreaDesc": "1. Kat",
      "reservation.occupancy.groupRooms": "Grup Çalışma Odaları",
      "reservation.occupancy.groupRoomsDesc": "Alt Kat",
      "reservation.map.title": "Ana Çalışma Salonu Haritası",
      "reservation.map.subtitle": "Zemin Kat",
      "reservation.map.legend.empty": "Boş",
      "reservation.map.legend.occupied": "Dolu",
      "reservation.map.legend.selected": "Seçili",
      "reservation.map.legend.accessible": "Engelli",
      "reservation.instructions": "Sistem kriterlerinize uygun koltuğu otomatik olarak atayacaktır.",
      "reservation.cta.confirm": "Rezervasyonu Onayla",
      "myReservations.pageTitle": "Rezervasyonlarım - Millî Kütüphane",
      "myReservations.heroTitle": "Rezervasyonlarım",
      "myReservations.heroDescription": "Geçmiş ve aktif rezervasyonlarınızı buradan görüntüleyebilirsiniz.",
      "myReservations.seatChangeRemaining": "Kalan değişim hakkınız: 2",
      "break.pageTitle": "Kütüphane Mola Takip Sistemi",
      "break.heroTitle": "Mola Takip ve Oturum Yönetimi",
      "break.breakRightsTitle": "Mola Haklarım",
      "break.breakType.short": "Kısa Mola (15 dk)",
      "break.breakType.long": "Uzun Mola (75 dk)",
      "break.status.available": "Kullanılabilir",
      "break.status.used": "Kullanıldı",
      "break.buttons.shortBreak": "Kısa Molaya Çık",
      "break.buttons.longBreak": "Uzun Molaya Çık",
      "break.buttons.exitLibrary": "Kütüphaneden Çıkış",
      "break.activeBreak.title": "Aktif Mola",
      "break.activeBreak.remainingTime": "Kalan Mola Süreniz",
      "break.activeBreak.description": "Şu anda 15 dakikalık kısa moladasınız.",
      "break.activeBreak.elapsedTime": "Geçen Süre",
      "break.activeBreak.elapsedTimeDesc": "3 dakika geçti"
    },
    en: {
      "common.logoTitle": "National Library",
      "common.logoSubtitle": "Directorate of Libraries & Publications",
      "common.menu.myReservations": "My Reservations",
      "common.menu.createReservation": "Create Reservation",
      "common.menu.breakTracking": "Break Tracking",
      "common.menu.settings": "Settings",
      "common.menu.logout": "Sign Out",
      "common.buttons.confirm": "Confirm",
      "common.buttons.back": "Go Back",
      "common.buttons.edit": "Edit",
      "common.buttons.cancel": "Cancel",
      "common.buttons.viewDetails": "Details",
      "common.buttons.newReservation": "Create New Reservation",
      "common.buttons.viewReservations": "View My Reservations",
      "common.buttons.seatChange": "Change Seat",
      "common.status.active": "Active",
      "common.status.completed": "Completed",
      "common.status.cancelled": "Cancelled",
      "home.pageTitle": "Library Login System",
      "home.heroTitle": "Welcome to the National Library",
      "home.heroDescription": "Please choose a method to sign in.",
      "home.login.tc": "Sign in with Turkish ID",
      "home.login.ykn": "Sign in with YKN / Passport",
      "home.login.digital": "Sign in with Digital ID",
      "home.login.edevlet": "Sign in with e-Government",
      "home.links.foreign": "New Foreign Membership",
      "home.links.help": "Help & Support",
      "home.links.kiosk": "Kiosk 24/7",
      "home.stats.activeSessionsLabel": "Active Sessions",
      "home.stats.activeSessionsDesc": "Total users signed in today.",
      "home.stats.occupancyLabel": "Hall Occupancy",
      "home.stats.occupancyDesc": "The Main Reading Hall is moderately busy.",
      "home.stats.hoursLabel": "Service Hours",
      "home.stats.hoursDesc": "The kiosk support line operates nonstop.",
      "index.pageTitle": "National Library Interfaces",
      "index.subtitle": "National Library UI Kit",
      "index.title": "Page Directory",
      "index.description": "Select any screen below to preview it instantly.",
      "index.cards.home.label": "Login",
      "index.cards.home.title": "Library Entry",
      "index.cards.home.description": "Primary login screen.",
      "index.cards.auth.label": "Verification",
      "index.cards.auth.title": "Identity Verification",
      "index.cards.auth.description": "Advanced sign-in options.",
      "index.cards.break.label": "Break",
      "index.cards.break.title": "Break Tracking",
      "index.cards.break.description": "Break and session management.",
      "index.cards.reservation.label": "Reservation",
      "index.cards.reservation.title": "Desk Reservation",
      "index.cards.reservation.description": "Select a workspace.",
      "index.cards.foreign.label": "Membership",
      "index.cards.foreign.title": "Foreign Member Registration",
      "index.cards.foreign.description": "New registration form.",
      "index.cards.access.label": "Warning",
      "index.cards.access.title": "Access Warning",
      "index.cards.access.description": "Authorization screen.",
      "index.cards.settings.label": "Settings",
      "index.cards.settings.title": "Profile & Preferences",
      "index.cards.settings.description": "User preferences.",
      "index.cards.help.label": "Support",
      "index.cards.help.title": "Help Center",
      "index.cards.help.description": "FAQs and guides.",
      "index.footer": "Static files run with Tailwind CDN. See the README for dev server details.",
      "settings.pageTitle": "Settings",
      "settings.heading": "Settings",
      "settings.language.title": "Language Selection",
      "settings.language.tr": "Turkish",
      "settings.language.en": "English",
      "settings.language.ar": "Arabic",
      "settings.accessibility.title": "Accessibility",
      "settings.accessibility.largeText": "Large Text",
      "settings.accessibility.highContrast": "High Contrast",
      "settings.accessibility.screenReader": "Screen Reader",
      "settings.accessibility.voiceGuidance": "Voice Guidance",
      "reservation.pageTitle": "Library Reservation System",
      "reservation.heroTitle": "Hall & Desk Selection",
      "reservation.heroDescription": "Please use the filters to make a reservation and choose a hall.",
      "reservation.filters.title": "Filters",
      "reservation.filters.seatType": "Seat Type",
      "reservation.filters.seat.single": "Single",
      "reservation.filters.seat.group": "Group",
      "reservation.filters.seat.silent": "Silent Area",
      "reservation.filters.features.title": "Desk Features",
      "reservation.filters.features.outlet": "Power Outlet",
      "reservation.filters.features.light": "Adjustable Lighting",
      "reservation.filters.features.internet": "High-Speed Internet",
      "reservation.filters.features.space": "Spacious Workspace",
      "reservation.filters.features.libraryAccess": "Library Access",
      "reservation.occupancy.title": "Hall Occupancy",
      "reservation.occupancy.mainHall": "Main Reading Hall",
      "reservation.occupancy.mainHallDesc": "Ground Floor",
      "reservation.occupancy.silentArea": "Silent Reading Area",
      "reservation.occupancy.silentAreaDesc": "1st Floor",
      "reservation.occupancy.groupRooms": "Group Study Rooms",
      "reservation.occupancy.groupRoomsDesc": "Lower Floor",
      "reservation.map.title": "Main Reading Hall Map",
      "reservation.map.subtitle": "Ground Floor",
      "reservation.map.legend.empty": "Available",
      "reservation.map.legend.occupied": "Occupied",
      "reservation.map.legend.selected": "Selected",
      "reservation.map.legend.accessible": "Accessible",
      "reservation.instructions": "The system will automatically assign the best seat that fits your criteria.",
      "reservation.cta.confirm": "Confirm Reservation",
      "myReservations.pageTitle": "My Reservations - National Library",
      "myReservations.heroTitle": "My Reservations",
      "myReservations.heroDescription": "View your past and active reservations here.",
      "myReservations.seatChangeRemaining": "Remaining change credits: 2",
      "break.pageTitle": "Library Break Tracking System",
      "break.heroTitle": "Break Tracking & Session Management",
      "break.breakRightsTitle": "My Break Rights",
      "break.breakType.short": "Short Break (15 min)",
      "break.breakType.long": "Long Break (75 min)",
      "break.status.available": "Available",
      "break.status.used": "Used",
      "break.buttons.shortBreak": "Take a Short Break",
      "break.buttons.longBreak": "Take a Long Break",
      "break.buttons.exitLibrary": "Exit Library",
      "break.activeBreak.title": "Active Break",
      "break.activeBreak.remainingTime": "Remaining Break Time",
      "break.activeBreak.description": "You are currently on a 15-minute short break.",
      "break.activeBreak.elapsedTime": "Elapsed Time",
      "break.activeBreak.elapsedTimeDesc": "3 minutes passed"
    },
    ar: {
      "common.logoTitle": "المكتبة الوطنية",
      "common.logoSubtitle": "المديرية العامة للمكتبات والنشر",
      "common.menu.myReservations": "حجوزاتي",
      "common.menu.createReservation": "إنشاء حجز",
      "common.menu.breakTracking": "متابعة الاستراحة",
      "common.menu.settings": "الإعدادات",
      "common.menu.logout": "تسجيل الخروج",
      "common.buttons.confirm": "تأكيد",
      "common.buttons.back": "عودة",
      "common.buttons.edit": "تعديل",
      "common.buttons.cancel": "إلغاء",
      "common.buttons.viewDetails": "التفاصيل",
      "common.buttons.newReservation": "إنشاء حجز جديد",
      "common.buttons.viewReservations": "عرض حجوزاتي",
      "common.buttons.seatChange": "تغيير المقعد",
      "common.status.active": "نشط",
      "common.status.completed": "مكتمل",
      "common.status.cancelled": "ملغي",
      "home.pageTitle": "نظام دخول المكتبة",
      "home.heroTitle": "مرحبًا بكم في المكتبة الوطنية",
      "home.heroDescription": "يرجى اختيار طريقة لتسجيل الدخول.",
      "home.login.tc": "تسجيل الدخول بالهوية التركية",
      "home.login.ykn": "تسجيل الدخول بـ YKN / جواز السفر",
      "home.login.digital": "تسجيل الدخول بالهوية الرقمية",
      "home.login.edevlet": "تسجيل الدخول عبر بوابة الحكومة الإلكترونية",
      "home.links.foreign": "تسجيل عضو أجنبي جديد",
      "home.links.help": "المساعدة والدعم",
      "home.links.kiosk": "الخدمة الذاتية 24/7",
      "home.stats.activeSessionsLabel": "الجلسات النشطة",
      "home.stats.activeSessionsDesc": "إجمالي المستخدمين الذين سجلوا دخولهم اليوم.",
      "home.stats.occupancyLabel": "نسبة إشغال القاعة",
      "home.stats.occupancyDesc": "قاعة المطالعة الرئيسية مزدحمة بشكل متوسط.",
      "home.stats.hoursLabel": "ساعات العمل",
      "home.stats.hoursDesc": "خط دعم الكشك متاح على مدار الساعة.",
      "index.pageTitle": "واجهات المكتبة الوطنية",
      "index.subtitle": "مجموعة واجهات المكتبة الوطنية",
      "index.title": "دليل الصفحات",
      "index.description": "اختر أي شاشة أدناه لفتحها مباشرة.",
      "index.cards.home.label": "دخول",
      "index.cards.home.title": "دخول المكتبة",
      "index.cards.home.description": "شاشة تسجيل الدخول الرئيسية.",
      "index.cards.auth.label": "تحقق",
      "index.cards.auth.title": "التحقق من الهوية",
      "index.cards.auth.description": "خيارات تسجيل دخول متقدمة.",
      "index.cards.break.label": "استراحة",
      "index.cards.break.title": "متابعة الاستراحة",
      "index.cards.break.description": "إدارة الاستراحات والجلسات.",
      "index.cards.reservation.label": "حجز",
      "index.cards.reservation.title": "حجز طاولة",
      "index.cards.reservation.description": "اختر مساحة العمل.",
      "index.cards.foreign.label": "عضوية",
      "index.cards.foreign.title": "تسجيل عضو أجنبي",
      "index.cards.foreign.description": "نموذج تسجيل جديد.",
      "index.cards.access.label": "تحذير",
      "index.cards.access.title": "تحذير وصول",
      "index.cards.access.description": "شاشة التفويض.",
      "index.cards.settings.label": "إعدادات",
      "index.cards.settings.title": "الملف الشخصي والتفضيلات",
      "index.cards.settings.description": "تفضيلات المستخدم.",
      "index.cards.help.label": "دعم",
      "index.cards.help.title": "مركز المساعدة",
      "index.cards.help.description": "الأسئلة الشائعة والأدلة.",
      "index.footer": "تعمل الملفات الثابتة مع Tailwind CDN. راجع ملف README لخادم التطوير.",
      "settings.pageTitle": "الإعدادات",
      "settings.heading": "الإعدادات",
      "settings.language.title": "اختيار اللغة",
      "settings.language.tr": "التركية",
      "settings.language.en": "الإنجليزية",
      "settings.language.ar": "العربية",
      "settings.accessibility.title": "إمكانية الوصول",
      "settings.accessibility.largeText": "نص كبير",
      "settings.accessibility.highContrast": "تباين عالٍ",
      "settings.accessibility.screenReader": "قارئ الشاشة",
      "settings.accessibility.voiceGuidance": "إرشاد صوتي",
      "reservation.pageTitle": "نظام حجز المكتبة",
      "reservation.heroTitle": "اختيار القاعة والطاولة",
      "reservation.heroDescription": "يرجى استخدام عوامل التصفية لإجراء حجز واختيار قاعة.",
      "reservation.filters.title": "عوامل التصفية",
      "reservation.filters.seatType": "نوع المقعد",
      "reservation.filters.seat.single": "مقعد فردي",
      "reservation.filters.seat.group": "مجموعة",
      "reservation.filters.seat.silent": "منطقة هادئة",
      "reservation.filters.features.title": "ميزات الطاولة",
      "reservation.filters.features.outlet": "مقبس كهرباء",
      "reservation.filters.features.light": "إضاءة قابلة للتعديل",
      "reservation.filters.features.internet": "إنترنت عالي السرعة",
      "reservation.filters.features.space": "مساحة عمل واسعة",
      "reservation.filters.features.libraryAccess": "وصول إلى المكتبة",
      "reservation.occupancy.title": "حالة إشغال القاعة",
      "reservation.occupancy.mainHall": "قاعة المطالعة الرئيسية",
      "reservation.occupancy.mainHallDesc": "الطابق الأرضي",
      "reservation.occupancy.silentArea": "منطقة القراءة الهادئة",
      "reservation.occupancy.silentAreaDesc": "الطابق الأول",
      "reservation.occupancy.groupRooms": "غرف الدراسة الجماعية",
      "reservation.occupancy.groupRoomsDesc": "الطابق السفلي",
      "reservation.map.title": "خريطة قاعة المطالعة الرئيسية",
      "reservation.map.subtitle": "الطابق الأرضي",
      "reservation.map.legend.empty": "متاح",
      "reservation.map.legend.occupied": "مشغول",
      "reservation.map.legend.selected": "محدد",
      "reservation.map.legend.accessible": "ذوي الاحتياجات الخاصة",
      "reservation.instructions": "سيقوم النظام بتعيين المقعد الأنسب وفقًا لمعاييرك تلقائيًا.",
      "reservation.cta.confirm": "تأكيد الحجز",
      "myReservations.pageTitle": "حجوزاتي - المكتبة الوطنية",
      "myReservations.heroTitle": "حجوزاتي",
      "myReservations.heroDescription": "يمكنك عرض حجوزاتك السابقة والحالية هنا.",
      "myReservations.seatChangeRemaining": "رصيد التغيير المتبقي: 2",
      "break.pageTitle": "نظام متابعة استراحة المكتبة",
      "break.heroTitle": "متابعة الاستراحة وإدارة الجلسات",
      "break.breakRightsTitle": "حقوق الاستراحة الخاصة بي",
      "break.breakType.short": "استراحة قصيرة (15 دقيقة)",
      "break.breakType.long": "استراحة طويلة (75 دقيقة)",
      "break.status.available": "متاح",
      "break.status.used": "مستخدَم",
      "break.buttons.shortBreak": "أخذ استراحة قصيرة",
      "break.buttons.longBreak": "أخذ استراحة طويلة",
      "break.buttons.exitLibrary": "الخروج من المكتبة",
      "break.activeBreak.title": "استراحة نشطة",
      "break.activeBreak.remainingTime": "الوقت المتبقي من الاستراحة",
      "break.activeBreak.description": "أنت الآن في استراحة قصيرة مدتها 15 دقيقة.",
      "break.activeBreak.elapsedTime": "الوقت المنقضي",
      "break.activeBreak.elapsedTimeDesc": "انقضت 3 دقائق"
    },
  };

  const I18N_TEXT_MAP = {
    "Millî Kütüphaneye Hoş Geldiniz": {
      en: "Welcome to the National Library",
      ar: "مرحبًا بكم في المكتبة الوطنية",
    },
    "Kütüphaneye Hoş Geldiniz": {
      en: "Welcome to the Library",
      ar: "مرحبًا بكم في المكتبة",
    },
    "Lütfen giriş yapmak için bir yöntem seçin.": {
      en: "Please choose a method to sign in.",
      ar: "يرجى اختيار طريقة لتسجيل الدخول.",
    },
    "Giriş için lütfen kimliğinizi doğrulayın.": {
      en: "Please verify your identity to continue.",
      ar: "يرجى التحقق من هويتك للمتابعة.",
    },
    "Kimlik Kartınızı Okutun": {
      en: "Scan Your ID Card",
      ar: "امسح بطاقة هويتك",
    },
    "Kimliğinizi buraya okutarak hızlıca giriş yapabilirsiniz.": {
      en: "Scan your ID here to sign in instantly.",
      ar: "امسح هويتك هنا للدخول فورًا.",
    },
    "veya": {
      en: "or",
      ar: "أو",
    },
    "Yabancı Kimlik No / Pasaport No": {
      en: "Foreign ID / Passport Number",
      ar: "رقم الهوية الأجنبية / جواز السفر",
    },
    "Doğrula": {
      en: "Verify",
      ar: "تحقق",
    },
    "Kimliğiniz doğrulanıyor, lütfen bekleyin...": {
      en: "Your identity is being verified, please wait...",
      ar: "يتم التحقق من هويتك، يرجى الانتظار...",
    },
    "Yabancı Uyruklu Kullanıcı Kaydı": {
      en: "Foreign National User Registration",
      ar: "تسجيل مستخدم من جنسية أجنبية",
    },
    "Bilgilerinizi taratarak veya manuel olarak girerek kaydınızı hızlıca tamamlayabilirsiniz.": {
      en: "Scan your documents or enter them manually to finish quickly.",
      ar: "يمكنك إنهاء التسجيل سريعًا عبر مسح المستندات أو إدخالها يدويًا.",
    },
    "Hızlı Kayıt (Belge Tarama)": {
      en: "Quick Registration (Document Scan)",
      ar: "تسجيل سريع (مسح الوثيقة)",
    },
    "Pasaport / Kimlik Tarat": {
      en: "Scan Passport / ID",
      ar: "مسح جواز السفر / الهوية",
    },
    "Kamerayı kullanarak belgenizin fotoğrafını çekin, bilgileriniz otomatik olarak doldurulsun.": {
      en: "Use the camera to capture your document and auto-fill your details.",
      ar: "استخدم الكاميرا لالتقاط وثيقتك وسيتم تعبئة البيانات تلقائيًا.",
    },
    "Kamerayı Aç": {
      en: "Open Camera",
      ar: "تشغيل الكاميرا",
    },
    "Manuel Kayıt": {
      en: "Manual Registration",
      ar: "تسجيل يدوي",
    },
    "Fotoğraf Çek / Yükle": {
      en: "Take / Upload Photo",
      ar: "التقاط / رفع صورة",
    },
    "Ad": {
      en: "First Name",
      ar: "الاسم",
    },
    "Soyad": {
      en: "Last Name",
      ar: "اسم العائلة",
    },
    "E-posta Adresi": {
      en: "Email Address",
      ar: "عنوان البريد الإلكتروني",
    },
    "Telefon Numarası": {
      en: "Phone Number",
      ar: "رقم الهاتف",
    },
    "Pasaport/Kimlik No": {
      en: "Passport / ID Number",
      ar: "رقم الجواز / الهوية",
    },
    "Doğum Tarihi": {
      en: "Date of Birth",
      ar: "تاريخ الميلاد",
    },
    "Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metnini okudum, anladım.": {
      en: "I have read and understood the Personal Data Protection Law (KVKK) notice.",
      ar: "لقد قرأت وفهمت إشعار قانون حماية البيانات الشخصية (KVKK).",
    },
    "Kullanıcı Sözleşmesini kabul ediyorum.": {
      en: "I accept the User Agreement.",
      ar: "أوافق على اتفاقية المستخدم.",
    },
    "Kaydı Tamamla": {
      en: "Complete Registration",
      ar: "إكمال التسجيل",
    },
    "Yardım ve Destek": {
      en: "Help & Support",
      ar: "المساعدة والدعم",
    },
    "Talep Türü": {
      en: "Request Type",
      ar: "نوع الطلب",
    },
    "Teknik Sorun": {
      en: "Technical Issue",
      ar: "مشكلة تقنية",
    },
    "Bilgisayar, yazıcı vb. sorunlar": {
      en: "Computer, printer and similar issues",
      ar: "مشكلات الكمبيوتر أو الطابعة وما شابهها",
    },
    "Üyelik Sorunu": {
      en: "Membership Issue",
      ar: "مشكلة في العضوية",
    },
    "Giriş, rezervasyon vb. sorunlar": {
      en: "Login, reservation and similar issues",
      ar: "مشكلات تسجيل الدخول أو الحجز وما شابهها",
    },
    "Kayıp Eşya": {
      en: "Lost Item",
      ar: "مفقودات",
    },
    "Kütüphanede unuttuğunuz eşyalar": {
      en: "Items you forgot in the library",
      ar: "الأشياء التي نسيتها في المكتبة",
    },
    "Görevli Çağır": {
      en: "Call Staff",
      ar: "استدعاء موظف",
    },
    "Acil yardım veya soru için": {
      en: "For urgent assistance or questions",
      ar: "للمساعدة العاجلة أو للاستفسار",
    },
    "Açıklama": {
      en: "Description",
      ar: "الوصف",
    },
    "Gönder": {
      en: "Submit",
      ar: "إرسال",
    },
    "Talebiniz alınmıştır.": {
      en: "Your request has been received.",
      ar: "تم استلام طلبك.",
    },
    "En kısa sürede ilgilenilecektir.": {
      en: "We will respond as soon as possible.",
      ar: "سيتم التعامل معه في أقرب وقت ممكن.",
    },
    "Kütüphane Mola Takip Sistemi": {
      en: "Library Break Tracking System",
      ar: "نظام متابعة الاستراحة في المكتبة",
    },
    "Mola Takip ve Oturum Yönetimi": {
      en: "Break Tracking & Session Management",
      ar: "متابعة الاستراحة وإدارة الجلسات",
    },
    "Mola Haklarım": {
      en: "My Break Rights",
      ar: "حقوق الاستراحة الخاصة بي",
    },
    "Kısa Mola (15 dk)": {
      en: "Short Break (15 min)",
      ar: "استراحة قصيرة (15 دقيقة)",
    },
    "Uzun Mola (75 dk)": {
      en: "Long Break (75 min)",
      ar: "استراحة طويلة (75 دقيقة)",
    },
    "Kısa Molaya Çık": {
      en: "Start Short Break",
      ar: "ابدأ استراحة قصيرة",
    },
    "Uzun Molaya Çık": {
      en: "Start Long Break",
      ar: "ابدأ استراحة طويلة",
    },
    "Kütüphaneden Çıkış": {
      en: "Check Out of Library",
      ar: "الخروج من المكتبة",
    },
    "Aktif Mola": {
      en: "Active Break",
      ar: "استراحة نشطة",
    },
    "Kalan Mola Süreniz": {
      en: "Remaining Break Time",
      ar: "الوقت المتبقي من الاستراحة",
    },
    "Şu anda 15 dakikalık kısa moladasınız.": {
      en: "You are currently on a 15-minute short break.",
      ar: "أنت الآن في استراحة قصيرة مدتها 15 دقيقة.",
    },
    "Geçen Süre": {
      en: "Elapsed Time",
      ar: "الوقت المنقضي",
    },
    "3 dakika geçti": {
      en: "3 minutes passed",
      ar: "انقضت 3 دقائق",
    },
    "Aktif": {
      en: "Active",
      ar: "نشط",
    },
    "Kullanılabilir": {
      en: "Available",
      ar: "متاح",
    },
    "Kullanıldı": {
      en: "Used",
      ar: "مستخدَم",
    },
    "Yeni Yabancı Üyelik Kaydı": {
      en: "New Foreign Membership",
      ar: "تسجيل عضو أجنبي جديد",
    },
    "Yardım & Destek": {
      en: "Help & Support",
      ar: "المساعدة والدعم",
    },
    "Kiosk 24/7": {
      en: "Kiosk 24/7",
      ar: "الخدمة الذاتية 24/7",
    },
    "Aktif Oturum": {
      en: "Active Sessions",
      ar: "الجلسات النشطة",
    },
    "Bugün sisteme giriş yapan toplam kullanıcı.": {
      en: "Total users signed in today.",
      ar: "إجمالي المستخدمين الذين سجلوا دخولهم اليوم.",
    },
    "Salon Doluluğu": {
      en: "Hall Occupancy",
      ar: "نسبة إشغال القاعة",
    },
    "Ana Çalışma Salonu şu anda orta yoğunlukta.": {
      en: "The Main Reading Hall is moderately busy.",
      ar: "قاعة العمل الرئيسية مزدحمة بشكل متوسط.",
    },
    "Çalışma Saatleri": {
      en: "Service Hours",
      ar: "ساعات العمل",
    },
    "Kiosk destek hattı kesintisiz hizmet verir.": {
      en: "The kiosk support line operates nonstop.",
      ar: "خط دعم الكشك يعمل على مدار الساعة.",
    },
    "Giriş Yapılamadı": {
      en: "Sign-in Failed",
      ar: "تعذر تسجيل الدخول",
    },
    "Gecikmiş kitap iadeniz bulunduğu için hesabınıza giriş yapamazsınız. Lütfen en yakın kütüphane şubesine başvurunuz.": {
      en: "You cannot sign in because you have overdue book returns. Please contact the nearest library branch.",
      ar: "لا يمكنك تسجيل الدخول لوجود كتب متأخرة لم يتم إرجاعها. يرجى مراجعة أقرب فرع للمكتبة.",
    },
    "Yardım Al": {
      en: "Get Help",
      ar: "الحصول على مساعدة",
    },
    "Ana Ekrana Dön": {
      en: "Return to Home",
      ar: "العودة إلى الرئيسية",
    }
  };

  const I18N_PLACEHOLDER_MAP = {
    "99 ile başlayan numaranızı girin": {
      en: "Enter the number starting with 99",
      ar: "أدخل الرقم الذي يبدأ بـ 99",
    },
    "Adınızı girin": {
      en: "Enter your first name",
      ar: "أدخل اسمك الأول",
    },
    "Soyadınızı girin": {
      en: "Enter your last name",
      ar: "أدخل اسم العائلة",
    },
    "ornek@eposta.com": {
      en: "example@email.com",
      ar: "example@email.com",
    },
    "+90 (555) 123 45 67": {
      en: "+90 (555) 123 45 67",
      ar: "+90 (555) 123 45 67",
    },
    "Belge numarasını girin": {
      en: "Enter the document number",
      ar: "أدخل رقم الوثيقة",
    },
    "Lütfen talebinizi kısaca açıklayınız.": {
      en: "Please describe your request briefly.",
      ar: "يرجى شرح طلبك بإيجاز.",
    }
  };

  function getCurrentLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }
    return DEFAULT_LANG;
  }

  function translateValue(key, lang) {
    return (
      (I18N_DICT[lang] && I18N_DICT[lang][key]) ||
      (I18N_DICT[DEFAULT_LANG] && I18N_DICT[DEFAULT_LANG][key]) ||
      null
    );
  }

  function prepareAutoNodes() {
    const elements = document.querySelectorAll(
      "body *:not(script):not(style):not(link):not(meta)"
    );
    elements.forEach((el) => {
      if (el.dataset.i18nOriginal || el.hasAttribute("data-i18n")) return;
      if (el.childElementCount > 0) return;
      const originalText = el.textContent.trim();
      if (!originalText) return;
      if (I18N_TEXT_MAP[originalText]) {
        el.dataset.i18nOriginal = originalText;
      }
    });
  }

  function applyAutoTranslations(lang) {
    document.querySelectorAll("[data-i18n-original]").forEach((el) => {
      const original = el.dataset.i18nOriginal;
      const translations = I18N_TEXT_MAP[original];
      if (!translations) return;

      if (lang === DEFAULT_LANG) {
        el.textContent = original;
        return;
      }

      const translated = translations[lang];
      if (translated) {
        el.textContent = translated;
      }
    });
  }

  function preparePlaceholderNodes() {
    document.querySelectorAll("[placeholder]").forEach((el) => {
      const original = el.getAttribute("placeholder");
      if (!original) return;
      if (I18N_PLACEHOLDER_MAP[original]) {
        el.dataset.i18nPlaceholderOriginal = original;
      }
    });
  }

  function applyPlaceholderTranslations(lang) {
    document
      .querySelectorAll("[data-i18n-placeholder-original]")
      .forEach((el) => {
        const original = el.dataset.i18nPlaceholderOriginal;
        const translations = I18N_PLACEHOLDER_MAP[original];
        if (!translations) return;

        if (lang === DEFAULT_LANG) {
          el.setAttribute("placeholder", original);
          return;
        }

        const translated = translations[lang];
        if (translated) {
          el.setAttribute("placeholder", translated);
        }
      });
  }

  function applyTranslations(forceLang) {
    const lang = forceLang || getCurrentLanguage();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (!key) return;
      const attr = node.getAttribute("data-i18n-attr");
      const value = translateValue(key, lang);
      if (!value) return;

      if (attr) {
        node.setAttribute(attr, value);
      } else {
        node.textContent = value;
      }
    });

    document
      .querySelectorAll("[data-i18n-placeholder]")
      .forEach((node) => {
        const key = node.getAttribute("data-i18n-placeholder");
        const value = translateValue(key, lang);
        if (value) {
          node.setAttribute("placeholder", value);
        }
      });

    document
      .querySelectorAll("[data-language-option]")
      .forEach((input) => {
        const optionLang = input.getAttribute("data-language-option");
        input.checked = optionLang === lang;
      });

    applyAutoTranslations(lang);
    applyPlaceholderTranslations(lang);
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
      lang = DEFAULT_LANG;
    }
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    prepareAutoNodes();
    preparePlaceholderNodes();
    applyTranslations();

    document
      .querySelectorAll("[data-language-option]")
      .forEach((input) => {
        input.addEventListener("change", (event) => {
          if (event.target.checked) {
            const lang = event.target.getAttribute("data-language-option");
            setLanguage(lang);
          }
        });
      });
  });

  window.mkI18n = {
    setLanguage,
    getLanguage: getCurrentLanguage,
    applyTranslations,
  };
})();

