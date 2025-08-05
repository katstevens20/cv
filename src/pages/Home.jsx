/**
 * Page d'accueil complète de DIGIMARRAKECH avec créateur CV gratuit et espaces publicitaires
 * Plateforme professionnelle avec tous les services pour le marché de Marrakech
 */
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Star, 
  Users,
  Computer,
  FileText,
  Globe,
  Search,
  Filter,
  Menu,
  X,
  GraduationCap,
  CreditCard,
  Percent,
  Gift,
  Zap,
  TrendingUp,
  Heart,
  ExternalLink,
  Megaphone,
  Facebook,
  Instagram,
  Twitter,
  Video
} from 'lucide-react';
import { serviceCategories, featuredServices } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import BookingModal from '../components/BookingModal';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import StatsSection from '../components/StatsSection';
import StudentDiscountBanner from '../components/StudentDiscountBanner';
import FreeCVCreator from '../components/FreeCVCreator';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isArabic, setIsArabic] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCVCreator, setShowCVCreator] = useState(false);

  const filteredServices = selectedCategory
    ? serviceCategories.find(cat => cat.id === selectedCategory)?.services || []
    : serviceCategories.flatMap(cat => cat.services);

  const searchedServices = filteredServices.filter(service =>
    (isArabic ? service.titleAr : service.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
    (isArabic ? service.descriptionAr : service.description).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookService = (service) => {
    if (service.id === 'free-cv-creator') {
      setShowCVCreator(true);
      return;
    }
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              {/* NOUVEAU LOGO DIGIMARRAKECH */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 p-3 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 animate-pulse"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Computer className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  DIGIMARRAKECH
                </h1>
                <p className="text-gray-600 text-sm">
                  {isArabic ? 'حلول رقمية شاملة لجميع احتياجاتك' : 'Solutions numériques complètes pour tous vos besoins'}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setIsArabic(!isArabic)}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                {isArabic ? 'Français' : 'العربية'}
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{isArabic ? 'مفتوح 24/7' : 'Ouvert 24h/24'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+212 700 152 009</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden border-t py-4 space-y-4">
              <button
                onClick={() => setIsArabic(!isArabic)}
                className="block w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                {isArabic ? 'Français' : 'العربية'}
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-4">
                <Clock className="w-4 h-4" />
                <span>{isArabic ? 'مفتوح 24/7' : 'Ouvert 24h/24'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-4">
                <Phone className="w-4 h-4" />
                <span>+212 700 152 009</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ESPACE PUBLICITAIRE HEADER */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-white">
            <Megaphone className="w-5 h-5 animate-bounce" />
            <p className="font-semibold">
              {isArabic ? '🎉 إعلان: خصم 20% على جميع الخدمات للعملاء الجدد!' : '🎉 PROMO: 20% de réduction pour nouveaux clients!'}
            </p>
            <button className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-100">
              {isArabic ? 'اكتشف المزيد' : 'Découvrir'}
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {isArabic ? 'DIGIMARRAKECH - مركز الحلول الرقمية' : 'DIGIMARRAKECH - Centre Solutions Numériques'}
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              {isArabic 
                ? 'من الخدمات الإدارية إلى الإبداع الرقمي، نقدم لك حلولاً متكاملة بتقنيات حديثة وخدمة متميزة' 
                : 'Des services administratifs à la création digitale, nous vous offrons des solutions intégrées avec technologies modernes et service d\'excellence'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">{isArabic ? '+20 سنة خبرة' : '+20 ans d\'expérience'}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="text-sm font-semibold">{isArabic ? 'منذ 2004' : 'Depuis 2004'}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-semibold">{isArabic ? 'معتمد ISO' : 'Certifié ISO'}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-purple-300" />
                <span className="text-sm font-semibold">{isArabic ? 'خصومات طلابية' : 'Réductions étudiants'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                alt="Services administratifs"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                {isArabic ? 'خدمات إدارية' : 'Services Administratifs'}
              </h3>
              <p className="opacity-90">
                {isArabic ? 'جميع الخدمات الإدارية المغربية بسهولة' : 'Tous les services administratifs marocains facilement'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
                alt="Services DAMANE Cash"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                {isArabic ? 'خدمات ضمان كاش' : 'Services DAMANE Cash'}
              </h3>
              <p className="opacity-90">
                {isArabic ? 'تحويل الأموال والخدمات البنكية' : 'Transferts d\'argent et services bancaires'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Création digitale"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                {isArabic ? 'إبداع رقمي' : 'Création Digitale'}
              </h3>
              <p className="opacity-90">
                {isArabic ? 'تصميم مواقع، شعارات، وحلول رقمية' : 'Design web, logos, et solutions numériques'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
                alt="Tarifs étudiants"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                {isArabic ? 'خصومات الطلاب' : 'Tarifs Étudiants'}
              </h3>
              <p className="opacity-90">
                {isArabic ? 'خصومات تصل إلى 50% للطلاب' : 'Réductions jusqu\'à 50% pour étudiants'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESPACE PUBLICITAIRE SERVICES */}
      <section className="py-8 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              📢 {isArabic ? 'مساحة إعلانية مخصصة لشركائنا' : 'Espace Publicitaire Partenaires'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <div className="w-full h-32 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold">{isArabic ? 'إعلان 1' : 'PUBLICITÉ 1'}</span>
                </div>
                <p className="text-sm">{isArabic ? 'مساحة متاحة للإيجار' : 'Espace disponible à la location'}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <div className="w-full h-32 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold">{isArabic ? 'إعلان 2' : 'PUBLICITÉ 2'}</span>
                </div>
                <p className="text-sm">{isArabic ? 'مساحة متاحة للإيجار' : 'Espace disponible à la location'}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <div className="w-full h-32 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold">{isArabic ? 'إعلان 3' : 'PUBLICITÉ 3'}</span>
                </div>
                <p className="text-sm">{isArabic ? 'مساحة متاحة للإيجار' : 'Espace disponible à la location'}</p>
              </div>
            </div>
            <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {isArabic ? '📞 اتصل للإعلان معنا' : '📞 Contactez-nous pour vos publicités'}
            </button>
          </div>
        </div>
      </section>

      {/* FREE CV Creator Banner */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Gift className="w-6 h-6 text-yellow-300" />
              <span className="font-bold text-lg">
                {isArabic ? '🎁 خدمة مجانية جديدة من DIGIMARRAKECH!' : '🎁 NOUVEAU SERVICE GRATUIT DIGIMARRAKECH!'}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? 'أنشئ سيرتك الذاتية مجاناً!' : 'Créez votre CV gratuitement!'}
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              {isArabic 
                ? 'أداة مجانية 100% من DIGIMARRAKECH لإنشاء سيرة ذاتية احترافية مع صورة شخصية وتخطيط حديث وتحميل فوري'
                : 'Outil 100% gratuit de DIGIMARRAKECH pour créer un CV professionnel avec photo de profil, mise en page moderne et téléchargement instantané'
              }
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span>{isArabic ? 'إنشاء في 5 دقائق' : 'Création en 5 min'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Shield className="w-5 h-5 text-green-300" />
                <span>{isArabic ? 'بدون تسجيل' : 'Sans inscription'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Star className="w-5 h-5 text-blue-300" />
                <span>{isArabic ? 'تصميم احترافي' : 'Design professionnel'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>{isArabic ? 'تحميل فوري PDF' : 'Téléchargement PDF'}</span>
              </div>
            </div>

            <button
              onClick={() => setShowCVCreator(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              {isArabic ? '🚀 ابدأ إنشاء سيرتك الذاتية الآن' : '🚀 Commencer mon CV maintenant'}
            </button>
          </div>
        </div>
      </section>

      {/* Show CV Creator Modal */}
      {showCVCreator && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {isArabic ? 'إنشاء سيرة ذاتية مجانية' : 'Créateur de CV Gratuit'}
              </h2>
              <button
                onClick={() => setShowCVCreator(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <FreeCVCreator isArabic={isArabic} />
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {isArabic ? 'خدماتنا المتخصصة' : 'Nos Services Spécialisés'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نقدم مجموعة شاملة من الخدمات الرقمية والإدارية المصممة خصيصاً لتلبية احتياجاتك'
                : 'Découvrez notre gamme complète de services numériques et administratifs conçus pour répondre à tous vos besoins'
              }
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isArabic ? 'جميع الخدمات' : 'Tous les services'}
            </button>
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isArabic ? category.nameAr : category.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={isArabic ? 'ابحث عن خدمة...' : 'Rechercher un service...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                isArabic={isArabic}
                onBook={handleBookService}
              />
            ))}
          </div>

          {searchedServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {isArabic ? 'لم يتم العثور على خدمات تطابق بحثك' : 'Aucun service trouvé pour votre recherche'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Student Discount Banner */}
      <StudentDiscountBanner isArabic={isArabic} />

      {/* Experience & Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isArabic ? 'خبرة وثقة منذ عقدين' : 'Expérience et Confiance depuis 20 ans'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'رواد الخدمات الرقمية في مراكش منذ 2004 مع شهادات الجودة العالمية'
                : 'Pionniers des services numériques à Marrakech depuis 2004 avec certifications qualité internationales'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">20+</h3>
              <p className="text-gray-700 font-semibold">
                {isArabic ? 'سنة خبرة' : 'Années d\'expérience'}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">2004</h3>
              <p className="text-gray-700 font-semibold">
                {isArabic ? 'سنة التأسيس' : 'Année de création'}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-2">ISO</h3>
              <p className="text-gray-700 font-semibold">
                {isArabic ? 'شهادة الجودة' : 'Certification Qualité'}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-red-600 mb-2">50K+</h3>
              <p className="text-gray-700 font-semibold">
                {isArabic ? 'عميل راضي' : 'Clients satisfaits'}
              </p>
            </div>
          </div>

          {/* Certifications Details */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {isArabic ? 'شهاداتنا ومعاييرنا' : 'Nos Certifications et Standards'}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ISO 9001</h4>
                    <p className="text-sm text-gray-600">{isArabic ? 'إدارة الجودة' : 'Management Qualité'}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {isArabic 
                    ? 'معايير الجودة العالمية في جميع خدماتنا'
                    : 'Standards qualité internationaux pour tous nos services'
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Computer className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ISO 27001</h4>
                    <p className="text-sm text-gray-600">{isArabic ? 'أمن المعلومات' : 'Sécurité Information'}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {isArabic 
                    ? 'حماية متقدمة لبياناتك وخصوصيتك'
                    : 'Protection avancée de vos données et confidentialité'
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{isArabic ? 'جائزة التميز' : 'Excellence Award'}</h4>
                    <p className="text-sm text-gray-600">{isArabic ? 'مراكش 2023' : 'Marrakech 2023'}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {isArabic 
                    ? 'تميز في خدمة العملاء والابتكار التقني'
                    : 'Excellence en service client et innovation technique'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection isArabic={isArabic} />

      {/* Testimonials */}
      <TestimonialsSection isArabic={isArabic} />

      {/* Blog Section */}
      <BlogSection isArabic={isArabic} />

      {/* ESPACE PUBLICITAIRE FOOTER */}
      <section className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">
              🎯 {isArabic ? 'اعرض إعلانك هنا!' : 'Votre Publicité Ici!'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {isArabic ? 'وصل إلى آلاف العملاء المحتملين يومياً' : 'Atteignez des milliers de clients potentiels quotidiennement'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="w-full h-40 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">{isArabic ? 'مساحة إعلانية كبيرة' : 'GRAND FORMAT'}</span>
                </div>
                <p>{isArabic ? 'إعلان مميز بحجم كبير' : 'Publicité premium grand format'}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="w-full h-40 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">{isArabic ? 'مساحة متوسطة' : 'FORMAT MOYEN'}</span>
                </div>
                <p>{isArabic ? 'إعلان بحجم متوسط' : 'Publicité format moyen'}</p>
              </div>
            </div>
            <button className="mt-8 bg-white text-purple-600 px-8 py-3 rounded-lg text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl">
              {isArabic ? '📞 احجز مساحتك الإعلانية' : '📞 Réservez votre espace publicitaire'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 p-2 rounded-lg">
                  <Computer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">DIGIMARRAKECH</h3>
              </div>
              <p className="text-gray-400 mb-4">
                {isArabic 
                  ? 'شريكك الموثوق للحلول الرقمية والخدمات الإدارية في مراكش منذ 2004'
                  : 'Votre partenaire de confiance pour solutions numériques et services administratifs à Marrakech depuis 2004'
                }
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-blue-500 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-400 cursor-pointer" />
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {isArabic ? 'خدماتنا' : 'Nos Services'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  {isArabic ? 'خدمات إدارية' : 'Services Administratifs'}
                </li>
                <li className="hover:text-white cursor-pointer">
                  {isArabic ? 'إنشاء CV مجاني' : 'Création CV Gratuit'}
                </li>
                <li className="hover:text-white cursor-pointer">
                  {isArabic ? 'تصميم مواقع' : 'Design Web'}
                </li>
                <li className="hover:text-white cursor-pointer">
                  {isArabic ? 'ضمان كاش' : 'DAMANE Cash'}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {isArabic ? 'اتصل بنا' : 'Contact'}
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+212 700 152 009</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>contact@digimarrakech.ma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>{isArabic ? 'مراكش، المغرب' : 'Marrakech, Maroc'}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {isArabic ? 'ساعات العمل' : 'Horaires'}
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>{isArabic ? 'الاثنين - الجمعة: 8:00 - 18:00' : 'Lun - Ven: 8h00 - 18h00'}</p>
                <p>{isArabic ? 'السبت: 9:00 - 15:00' : 'Samedi: 9h00 - 15h00'}</p>
                <p className="text-green-400 font-semibold">
                  {isArabic ? 'خدمة الطوارئ 24/7' : 'Service urgence 24h/24'}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              © 2024 DIGIMARRAKECH. {isArabic ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        service={selectedService}
        isArabic={isArabic}
      />
    </div>
  );
}