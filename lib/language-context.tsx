"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.insights": "Insights Platform",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",

    // Hero
    "hero.title": "Cyber Security Experts You Can Trust",
    "hero.subtitle":
      "Global cyber security consultancy providing comprehensive penetration testing and compliance services across the UK, USA, and UAE",
    "hero.cta1": "Request Penetration Test",
    "hero.cta2": "View Our Services",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "Comprehensive security solutions tailored to protect your business from evolving cyber threats",
    "services.pentest.title": "Penetration Testing",
    "services.pentest.desc":
      "Comprehensive security assessments to identify vulnerabilities in your systems before attackers do.",
    "services.compliance.title": "Compliance & Auditing",
    "services.compliance.desc":
      "Expert guidance to help your organization meet industry standards and regulatory requirements.",
    "services.consulting.title": "Security Consulting",
    "services.consulting.desc":
      "Strategic advice and implementation support to strengthen your overall security posture.",
    "services.vulnerability.title": "Vulnerability Management",
    "services.vulnerability.desc":
      "Ongoing identification, classification, and remediation of security vulnerabilities.",

    // About
    "about.title": "About Us",
    "about.subtitle":
      "Founded in 2021 in the Outer Hebrides of Scotland, we bring world-class cyber security expertise to organizations globally with offices in the UK, USA, and UAE.",
    "about.certifications": "Our Certifications",

    // Global Offices
    "offices.title": "Global Presence",
    "offices.uk": "United Kingdom",
    "offices.uk.location": "Outer Hebrides, Scotland",
    "offices.usa": "United States",
    "offices.usa.location": "Des Moines, IA",
    "offices.uae": "United Arab Emirates",
    "offices.uae.location": "Dubai, UAE",

    // Contact
    "contact.title": "Ready to improve your security posture?",
    "contact.subtitle":
      "Get in touch with our team of experts to discuss your security needs and how we can help protect your business.",
    "contact.form.title": "Contact Us",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.schedule": "Schedule a Call",
    "contact.book": "Book a consultation",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.insights": "منصة الرؤى",
    "nav.contact": "اتصل بنا",
    "nav.getQuote": "احصل على عرض سعر",

    // Hero
    "hero.title": "خبراء الأمن السيبراني الذين يمكنك الوثوق بهم",
    "hero.subtitle":
      "استشارات الأمن السيبراني العالمية التي تقدم خدمات شاملة لاختبار الاختراق والامتثال عبر المملكة المتحدة والولايات المتحدة الأمريكية والإمارات العربية المتحدة",
    "hero.cta1": "طلب اختبار اختراق",
    "hero.cta2": "عرض خدماتنا",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "حلول أمنية شاملة مصممة لحماية عملك من التهديدات السيبرانية المتطورة",
    "services.pentest.title": "اختبار الاختراق",
    "services.pentest.desc": "تقييمات أمنية شاملة لتحديد نقاط الضعف في أنظمتك قبل أن يستغلها المهاجمون.",
    "services.compliance.title": "الامتثال والتدقيق",
    "services.compliance.desc": "إرشادات خبيرة لمساعدة مؤسستك على تلبية معايير الصناعة والمتطلبات التنظيمية.",
    "services.consulting.title": "استشارات الأمان",
    "services.consulting.desc": "نصائح استراتيجية ودعم التنفيذ لتعزيز وضعية الأمان الشاملة لديك.",
    "services.vulnerability.title": "إدارة نقاط الضعف",
    "services.vulnerability.desc": "تحديد وتصنيف ومعالجة نقاط الضعف الأمنية بشكل مستمر.",

    // About
    "about.title": "من نحن",
    "about.subtitle":
      "تأسست في عام 2021 في جزر هبريدس الخارجية في اسكتلندا، نحن نقدم خبرة الأمن السيبراني عالمية المستوى للمؤسسات حول العالم مع مكاتب في المملكة المتحدة والولايات المتحدة الأمريكية والإمارات العربية المتحدة.",
    "about.certifications": "شهاداتنا",

    // Global Offices
    "offices.title": "الحضور العالمي",
    "offices.uk": "المملكة المتحدة",
    "offices.uk.location": "جزر هبريدس الخارجية، اسكتلندا",
    "offices.usa": "الولايات المتحدة الأمريكية",
    "offices.usa.location": "دي موين، آيوا",
    "offices.uae": "الإمارات العربية المتحدة",
    "offices.uae.location": "دبي، الإمارات",

    // Contact
    "contact.title": "هل أنت مستعد لتحسين وضعية الأمان لديك؟",
    "contact.subtitle": "تواصل مع فريق خبرائنا لمناقشة احتياجاتك الأمنية وكيف يمكننا مساعدتك في حماية عملك.",
    "contact.form.title": "اتصل بنا",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "عنوان البريد الإلكتروني",
    "contact.form.company": "الشركة",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.schedule": "جدولة مكالمة",
    "contact.book": "احجز استشارة",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
