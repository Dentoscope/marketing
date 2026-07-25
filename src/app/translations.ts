// Localized translation dictionaries for the marketing site
export const localTranslations = {
  en: {
    navFeatures: "Features",
    navGallery: "See It in Action",
    navLatency: "Live Stream",
    navSpecs: "Specifications",
    navDemo: "Book a Demo",
    ctaDashboard: "Enter Dashboard",
    heroTitle: "Dentoscope.",
    heroSubtitle: "One Platform. Every Tool Your Practice Needs.",
    heroDesc: "Patient records, live microscope feeds, 3D case presentation, scheduling, and prescriptions — unified in one system running inside your clinic.",

    // Latency simulator
    latencyTitle: "Real-Time Microscope Streaming",
    latencySubtitle: "Most streaming setups introduce 2–3 seconds of delay. During micro-surgery, that's the difference between precision and guesswork. Dentoscope streams your microscope feed with zero lag — so your screen and your lens are always perfectly in sync.",
    latencyRTC: "Dentoscope Live Stream",
    latencyRTSP: "Standard Network Stream",
    latencyRTCLag: "~0 seconds lag",
    latencyRTSPLag: "Buffered: ~3,200ms delay",
    latencyStart: "Resume Simulation",
    latencyPause: "Pause Simulation",

    // Screenshots Gallery Section
    galleryTitle: "Your Entire Workflow. One Screen.",
    gallerySubtitle: "From patient check-in to post-treatment reports — see how dentists are running their practices on Dentoscope every day.",

    screen1Title: "Live Capture & Patient Media",
    screen1Desc: "Stream your microscope or intraoral camera, capture diagnostic photos, and file them to the patient record — all without leaving the treatment screen.",

    screen2Title: "3D Case Presentation",
    screen2Desc: "Walk patients through their condition using interactive 3D dental models. Pinpoint decay, illustrate root canals, and present treatment options visually. Patients who understand say yes.",

    screen3Title: "Complete Patient History",
    screen3Desc: "Every appointment, every X-ray, every video, every prescription — organized in one chronological timeline per patient. Accessible from any device on your clinic network.",

    screen4Title: "Digital Prescriptions & Direct Printing",
    screen4Desc: "Draft digital prescriptions during the treatment session, attach them to the patient record, and send them directly to your clinic printer before the patient leaves the chair.",

    // Bento Grid Features
    bentoHeader: "A Complete System. Not Just Another Tool.",
    feat1Title: "Patient Records & Timeline",
    feat1Desc: "Photos, X-rays, videos, notes, and prescriptions — organized chronologically per patient. Everything you need in one view. No more scattered files.",
    feat2Title: "Appointment Management",
    feat2Desc: "Schedule visits, manage chair availability, and track your day — all built into the same system you use for treatment. No separate app needed.",
    feat3Title: "3D Treatment Presentation",
    feat3Desc: "Interactive dental arch models let you show patients exactly what's happening. Mark pathology, plan restorations, and get informed consent — visually.",
    feat4Title: "Digital Prescriptions",
    feat4Desc: "Write prescriptions during the session and attach them directly to the patient's chart. Print or save them before the patient stands up.",
    feat5Title: "Live Microscope Streaming",
    feat5Desc: "Zero-lag video feed from your dental microscope or intraoral camera. What's under your lens appears on screen instantly — perfect for precision procedures.",
    feat6Title: "Hands-Free Voice Control",
    feat6Desc: "Capture photos, start recordings, or navigate the system using voice commands. Useful during procedures when your hands are occupied.",
    feat7Title: "Auto-Import X-Rays & Scans",
    feat7Desc: "Your imaging devices save files to a folder. Dentoscope watches that folder and files everything to the active patient record automatically.",
    feat8Title: "Video Summaries for Patients",
    feat8Desc: "Record a quick video explaining today's treatment over diagnostic photos. Patients leave with a clear understanding of their care plan.",
    feat9Title: "Document Management",
    feat9Desc: "Lab reports, referral letters, insurance forms, medical histories — attach any PDF to the patient chart. One file, one place, always findable.",
    feat10Title: "Direct Clinic Printing",
    feat10Desc: "Print prescriptions, diagnostic reports, or patient summaries to any connected printer — standard or thermal — straight from the workstation.",
    feat11Title: "Works With Your Hardware",
    feat11Desc: "Plug in your existing microscope, intraoral camera, or any standard video device. Dentoscope recognizes and connects to your equipment instantly.",
    feat12Title: "100% Offline & Local",
    feat12Desc: "No cloud dependencies. No internet required. Your entire system runs on your local network — always available, always private, always yours.",

    // Specs
    specsTitle: "Technical Architecture",
    specsDb: "Data Architecture",
    specsDbVal: "Offline-first local database. All patient records, media, and documents stored securely on your practice hardware. No external servers.",
    specsVideo: "Video Pipeline",
    specsVideoVal: "Sub-second latency live streaming engine optimized for surgical microscope feeds and real-time hand-eye coordination.",
    specsTwain: "Imaging Integration",
    specsTwainVal: "Automatic folder monitoring that imports X-rays, sensor scans, and digital photos directly into the active patient record.",
    specsRtc: "Voice Engine",
    specsRtcVal: "Offline speech recognition that converts voice commands into system actions — capture, record, navigate, and print without touching a device.",
    specsNetwork: "Network Sharing",
    specsNetworkVal: "Mirror patient records and live feeds to iPads, clinic displays, and laptops across your local network. Zero internet usage.",

    // Easy Setup Walkthrough
    workflowHeader: "Up and Running in Under 10 Minutes",
    workflowStep1Title: "1. Install Dentoscope",
    workflowStep1Desc: "One download. One click. Installs locally on your clinic computer — no IT department, no server setup.",
    workflowStep2Title: "2. Connect Your Devices",
    workflowStep2Desc: "Plug in your microscope, intraoral camera, or imaging hardware. Dentoscope detects and configures them automatically.",
    workflowStep3Title: "3. Start Working",
    workflowStep3Desc: "Open a patient record and start your session. Schedule, capture, prescribe, and document — all from one place.",
    workflowStep4Title: "",
    workflowStep4Desc: "",

    hygieneHeader: "Designed Around How Dentists Actually Work.",
    hygieneDesc: "Dentoscope isn't a tool you work around — it's a system built to match the way your clinic already operates. From the moment a patient walks in to the moment they leave, every step is covered: scheduling, diagnostics, treatment documentation, prescriptions, and follow-up.",
    hygieneFeature1Title: "One System for Everything",
    hygieneFeature1Desc: "Stop switching between apps for scheduling, media, records, and prescriptions. Dentoscope handles it all from a single interface.",
    hygieneFeature2Title: "Hands-Free When You Need It",
    hygieneFeature2Desc: "During procedures, control the system by voice — capture, record, navigate. Outside procedures, use it like any other application.",

    sovereigntyHeader: "Your Clinic. Your Data. Your Rules.",
    sovereigntyDesc: "No monthly cloud subscriptions. No patient data leaving your building. No downtime when the internet drops. Dentoscope runs entirely on your local network — giving you full ownership of your practice data and zero dependency on external services.",
    sovereigntyFeature1Title: "Always On, Always Available",
    sovereigntyFeature1Desc: "Internet outage? Doesn't matter. Your patient database, video feeds, and scheduling system continue running without interruption.",
    sovereigntyFeature2Title: "Complete Data Ownership",
    sovereigntyFeature2Desc: "Patient records stay on your hardware, inside your clinic. No third-party cloud access. No data breach risk. Full compliance, full control.",

    demoCountry: "Country",

    // Demo Request Form
    demoTitle: "See What Dentoscope Can Do for Your Practice",
    demoSubtitle: "Book a free walkthrough with a product specialist. We'll show you the full system — patient management, live streaming, 3D presentation, scheduling, and more — tailored to your clinic's workflow.",
    demoName: "Full Name",
    demoClinic: "Clinic Name",
    demoEmail: "Email Address",
    demoPhone: "Phone Number",
    demoTime: "Best Time to Reach You",
    demoTimeMorning: "Morning (9 AM – 12 PM)",
    demoTimeAfternoon: "Afternoon (12 PM – 5 PM)",
    demoTimeEvening: "Evening (5 PM – 9 PM)",
    demoMessage: "Tell Us About Your Clinic",
    demoSubmit: "Book My Demo",
    demoSuccessTitle: "You're All Set!",
    demoSuccessDesc: "Thank you. A product specialist will reach out at your preferred time to walk you through a full live demonstration of the platform.",

    // Footer
    footerDesc: "The complete digital platform for dental clinics.",
    footerCopyright: "© 2026 Dentoscope. All rights reserved.",
  },
  ar: {
    navFeatures: "المميزات",
    navGallery: "شاهد النظام",
    navLatency: "البث المباشر",
    navSpecs: "المواصفات الفنية",
    navDemo: "احجز عرضاً تجريبياً",
    ctaDashboard: "دخول النظام",
    heroTitle: "دنتوسكوب.",
    heroSubtitle: "منصة واحدة. كل ما تحتاجه عيادتك.",
    heroDesc: "ملفات المرضى، البث المباشر للميكروسكوب، الشرح ثلاثي الأبعاد، الجدولة، والوصفات الطبية — في نظام موحد يعمل داخل عيادتك.",

    // Latency simulator
    latencyTitle: "بث ميكروسكوب فوري",
    latencySubtitle: "معظم أنظمة البث تضيف 2-3 ثوانٍ تأخير. أثناء الجراحة الدقيقة، هذا هو الفرق بين الدقة والتخمين. دنتوسكوب يبث صورة الميكروسكوب بدون أي تأخير — شاشتك وعدستك متزامنتان تماماً.",
    latencyRTC: "بث دنتوسكوب المباشر",
    latencyRTSP: "البث الشبكي التقليدي",
    latencyRTCLag: "تأخير ~0 ثانية",
    latencyRTSPLag: "بث متباطئ (~3200 مللي ثانية تأخير)",
    latencyStart: "تشغيل المحاكاة",
    latencyPause: "إيقاف مؤقت",

    // Screenshots Gallery Section
    galleryTitle: "سير عملك بالكامل. في شاشة واحدة.",
    gallerySubtitle: "من استقبال المريض إلى تقرير ما بعد العلاج — شاهد كيف يدير أطباء الأسنان عياداتهم على دنتوسكوب كل يوم.",

    screen1Title: "التقاط مباشر وأرشيف وسائط",
    screen1Desc: "ابث الميكروسكوب أو كاميرا الفحص، التقط صور التشخيص، وأرشفها في ملف المريض — كل ذلك دون مغادرة شاشة العلاج.",

    screen2Title: "عرض الحالة ثلاثي الأبعاد",
    screen2Desc: "امشِ المريض خلال حالته باستخدام مجسمات أسنان تفاعلية. حدد التسوس، وضّح علاج الجذور، واعرض خيارات العلاج بصرياً. المريض الذي يفهم يوافق.",

    screen3Title: "السجل الكامل للمريض",
    screen3Desc: "كل موعد، كل أشعة، كل فيديو، كل وصفة — مرتبة في سجل زمني واحد لكل مريض. تفتحه من أي جهاز على شبكة العيادة.",

    screen4Title: "الوصفات الطبية الرقمية والطباعة المباشرة",
    screen4Desc: "حرر الوصفة الطبية رقمياً أثناء الجلسة، أرفقها بملف المريض، واطبعها مباشرة على طابعة العيادة قبل مغادرة المريض للكرسي.",

    // Bento Grid Features
    bentoHeader: "نظام متكامل. مش مجرد أداة.",
    feat1Title: "سجلات المرضى والخط الزمني",
    feat1Desc: "صور، أشعة، فيديوهات، ملاحظات، ووصفات — مرتبة زمنياً لكل مريض. كل ما تحتاجه في عرض واحد. بدون ملفات متناثرة.",
    feat2Title: "إدارة المواعيد",
    feat2Desc: "جدوِل الزيارات، تابع حالة الكراسي، ونظّم يومك — كل ذلك مدمج في نفس النظام الذي تستخدمه للعلاج. بدون تطبيق منفصل.",
    feat3Title: "عرض العلاج ثلاثي الأبعاد",
    feat3Desc: "مجسمات فك تفاعلية تُري المريض بالضبط ما يحدث. حدد المشكلة، خطط الترميم، واحصل على موافقة مبنية على فهم — بصرياً.",
    feat4Title: "وصفات طبية رقمية",
    feat4Desc: "اكتب الوصفة أثناء الجلسة وأرفقها مباشرة بملف المريض. اطبعها أو احفظها قبل ما المريض يقوم.",
    feat5Title: "بث الميكروسكوب المباشر",
    feat5Desc: "بث فيديو فوري من الميكروسكوب أو كاميرا الفحص بدون أي تأخير. ما تحت العدسة يظهر على الشاشة لحظياً — مثالي للعمل الدقيق.",
    feat6Title: "تحكم صوتي بدون لمس",
    feat6Desc: "التقط صور، ابدأ التسجيل، أو تصفح النظام بالأوامر الصوتية. مفيد أثناء العمليات لما تكون يديك مشغولة.",
    feat7Title: "استيراد تلقائي للأشعة والصور",
    feat7Desc: "أجهزة التصوير تحفظ ملفاتها في مجلد. دنتوسكوب يراقب المجلد ويرفق كل شيء بملف المريض النشط تلقائياً.",
    feat8Title: "ملخصات فيديو للمريض",
    feat8Desc: "سجّل فيديو سريع تشرح فيه عمل اليوم فوق صور التشخيص. المريض يغادر وهو فاهم خطة العلاج بالكامل.",
    feat9Title: "إدارة المستندات",
    feat9Desc: "تقارير المختبر، رسائل التحويل، نماذج التأمين، التاريخ الطبي — أرفق أي PDF بملف المريض. ملف واحد، مكان واحد، دائماً موجود.",
    feat10Title: "طباعة مباشرة من العيادة",
    feat10Desc: "اطبع الوصفات والتقارير وملخصات المريض على أي طابعة متصلة — عادية أو حرارية — مباشرة من محطة العمل.",
    feat11Title: "يعمل مع أجهزتك الحالية",
    feat11Desc: "وصّل الميكروسكوب أو كاميرا الفحص أو أي جهاز تصوير لديك. دنتوسكوب يتعرف عليه ويتصل به فوراً.",
    feat12Title: "محلي 100% وبدون إنترنت",
    feat12Desc: "بدون اعتماد على السحابة. بدون حاجة للإنترنت. نظامك بالكامل يعمل على شبكتك المحلية — متاح دائماً، خاص دائماً، ملكك دائماً.",

    // Specs
    specsTitle: "البنية التقنية",
    specsDb: "هندسة البيانات",
    specsDbVal: "قاعدة بيانات محلية. كل سجلات المرضى والوسائط والمستندات محفوظة بأمان على أجهزة عيادتك. بدون خوادم خارجية.",
    specsVideo: "محرك البث المرئي",
    specsVideoVal: "محرك بث مباشر بتأخير أقل من ثانية مُحسّن لبث الميكروسكوب الجراحي وتنسيق اليد مع الشاشة.",
    specsTwain: "تكامل التصوير",
    specsTwainVal: "مراقبة تلقائية للمجلدات تستورد الأشعة وصور السنسور والصور الرقمية مباشرة لملف المريض النشط.",
    specsRtc: "محرك الصوت",
    specsRtcVal: "التعرف على الصوت يعمل محلياً بدون إنترنت ويحول أوامرك لإجراءات في النظام — التقاط، تسجيل، تصفح، وطباعة.",
    specsNetwork: "المشاركة عبر الشبكة",
    specsNetworkVal: "شارك سجلات المرضى والبث المباشر على الأيباد وشاشات العيادة واللابتوبات عبر شبكتك المحلية. صفر استهلاك إنترنت.",

    // Easy Setup Walkthrough
    workflowHeader: "جاهز للعمل خلال أقل من 10 دقائق",
    workflowStep1Title: "1. ثبّت دنتوسكوب",
    workflowStep1Desc: "تحميل واحد. ضغطة واحدة. يُثبّت محلياً على جهاز العيادة — بدون قسم تقنية، بدون إعداد خوادم.",
    workflowStep2Title: "2. وصّل أجهزتك",
    workflowStep2Desc: "وصّل الميكروسكوب أو كاميرا الفحص أو أجهزة التصوير. دنتوسكوب يكتشفها ويضبطها تلقائياً.",
    workflowStep3Title: "3. ابدأ العمل",
    workflowStep3Desc: "افتح ملف المريض وابدأ جلستك. جدوِل، التقط، اكتب الوصفة، ووثّق — كل ذلك من مكان واحد.",
    workflowStep4Title: "",
    workflowStep4Desc: "",

    hygieneHeader: "مصمم حول طريقة عمل طبيب الأسنان الفعلية.",
    hygieneDesc: "دنتوسكوب ليس أداة تتكيف أنت معها — إنه نظام بُني ليتوافق مع الطريقة التي تعمل بها عيادتك فعلاً. من لحظة دخول المريض إلى لحظة مغادرته، كل خطوة مغطاة: الجدولة، التشخيص، توثيق العلاج، الوصفات، والمتابعة.",
    hygieneFeature1Title: "نظام واحد لكل شيء",
    hygieneFeature1Desc: "توقف عن التنقل بين تطبيقات المواعيد والوسائط والسجلات والوصفات. دنتوسكوب يجمعها كلها في واجهة واحدة.",
    hygieneFeature2Title: "بدون لمس عند الحاجة",
    hygieneFeature2Desc: "أثناء العمليات، تحكم بالنظام بصوتك — التقاط، تسجيل، تصفح. خارج العمليات، استخدمه كأي تطبيق عادي.",

    sovereigntyHeader: "عيادتك. بياناتك. قواعدك.",
    sovereigntyDesc: "بدون اشتراكات سحابية شهرية. بدون خروج بيانات المرضى من مبنى العيادة. بدون توقف عند انقطاع الإنترنت. دنتوسكوب يعمل بالكامل على شبكتك المحلية — ملكية كاملة لبيانات عيادتك وصفر اعتماد على خدمات خارجية.",
    sovereigntyFeature1Title: "يعمل دائماً، متاح دائماً",
    sovereigntyFeature1Desc: "انقطع الإنترنت؟ لا يهم. قاعدة بيانات المرضى وبث الفيديو ونظام المواعيد يستمرون بالعمل بدون انقطاع.",
    sovereigntyFeature2Title: "ملكية كاملة لبياناتك",
    sovereigntyFeature2Desc: "سجلات المرضى تبقى على أجهزتك، داخل عيادتك. بدون وصول طرف ثالث. بدون خطر تسريب. تحكم كامل وامتثال كامل.",

    demoCountry: "الدولة",

    // Demo Request Form
    demoTitle: "شاهد ما يقدمه دنتوسكوب لعيادتك",
    demoSubtitle: "احجز جولة مجانية مع أحد مختصي المنتج. سنعرض لك النظام كاملاً — إدارة المرضى، البث المباشر، العرض ثلاثي الأبعاد، الجدولة، والمزيد — مخصص لسير عمل عيادتك.",
    demoName: "الاسم الكامل",
    demoClinic: "اسم العيادة",
    demoEmail: "البريد الإلكتروني",
    demoPhone: "رقم الهاتف",
    demoTime: "أفضل وقت للتواصل",
    demoTimeMorning: "صباحاً (9 ص – 12 م)",
    demoTimeAfternoon: "ظهراً (12 م – 5 م)",
    demoTimeEvening: "مساءً (5 م – 9 م)",
    demoMessage: "أخبرنا عن عيادتك",
    demoSubmit: "احجز العرض التجريبي",
    demoSuccessTitle: "تم الحجز بنجاح!",
    demoSuccessDesc: "شكراً لك. سيتواصل معك مختص المنتج في الوقت المفضل لعرض تجريبي مباشر وكامل للمنصة.",

    // Footer
    footerDesc: "المنصة الرقمية المتكاملة لعيادات الأسنان.",
    footerCopyright: "© 2026 دنتوسكوب. جميع الحقوق محفوظة.",
  }
};

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import arLocale from "i18n-iso-countries/langs/ar.json";

countries.registerLocale(enLocale);
countries.registerLocale(arLocale);

export interface CountryData {
  code: string;
  enName: string;
  arName: string;
}

export const countriesList: CountryData[] = Object.keys(countries.getNames("en"))
  .filter(code => code !== "IL")
  .map(code => {
    const enName = countries.getName(code, "en") || "";
    const arName = countries.getName(code, "ar") || enName;
    return {
      code,
      enName,
      arName
    };
  }).sort((a, b) => a.enName.localeCompare(b.enName));
