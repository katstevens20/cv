export const serviceCategories = [
  {
    id: 'administrative',
    name: 'Services Administratifs',
    nameAr: 'الخدمات الإدارية',
    services: [
      {
        id: 'passport-renewal',
        title: 'Renouvellement Passeport',
        titleAr: 'تجديد جواز السفر',
        description: 'Assistance complète pour renouvellement de passeport',
        descriptionAr: 'مساعدة كاملة لتجديد جواز السفر',
        price: '300 DH',
        priceAr: '300 درهم',
        duration: '5-7 jours',
        durationAr: '5-7 أيام',
        category: 'administrative',
        icon: 'FileText'
      },
      {
        id: 'cin-renewal',
        title: 'Renouvellement CIN',
        titleAr: 'تجديد البطاقة الوطنية',
        description: 'Service de renouvellement de carte nationale',
        descriptionAr: 'خدمة تجديد البطاقة الوطنية',
        price: '150 DH',
        priceAr: '150 درهم',
        duration: '3-5 jours',
        durationAr: '3-5 أيام',
        category: 'administrative',
        icon: 'CreditCard'
      }
    ]
  },
  {
    id: 'digital',
    name: 'Services Numériques',
    nameAr: 'الخدمات الرقمية',
    services: [
      {
        id: 'free-cv-creator',
        title: 'Créateur CV Gratuit',
        titleAr: 'منشئ السيرة الذاتية المجاني',
        description: 'Créez votre CV professionnel gratuitement',
        descriptionAr: 'أنشئ سيرتك الذاتية المهنية مجاناً',
        price: 'Gratuit',
        priceAr: 'مجاني',
        duration: '5 minutes',
        durationAr: '5 دقائق',
        category: 'digital',
        icon: 'FileText',
        featured: true
      },
      {
        id: 'website-design',
        title: 'Création Site Web',
        titleAr: 'إنشاء موقع إلكتروني',
        description: 'Design et développement de sites web professionnels',
        descriptionAr: 'تصميم وتطوير مواقع إلكترونية مهنية',
        price: '2500 DH',
        priceAr: '2500 درهم',
        duration: '2-3 semaines',
        durationAr: '2-3 أسابيع',
        category: 'digital',
        icon: 'Globe'
      }
    ]
  },
  {
    id: 'banking',
    name: 'Services Bancaires',
    nameAr: 'الخدمات المصرفية',
    services: [
      {
        id: 'money-transfer',
        title: 'Transfert d\'argent',
        titleAr: 'تحويل الأموال',
        description: 'Service DAMANE Cash - Transferts nationaux et internationaux',
        descriptionAr: 'خدمة ضمان كاش - تحويلات وطنية ودولية',
        price: '15-50 DH',
        priceAr: '15-50 درهم',
        duration: 'Instantané',
        durationAr: 'فوري',
        category: 'banking',
        icon: 'CreditCard'
      }
    ]
  }
];

export const featuredServices = serviceCategories
  .flatMap(category => category.services)
  .filter(service => service.featured);