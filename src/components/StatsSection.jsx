import React from 'react';
import { Users, Clock, Star, Shield } from 'lucide-react';

const StatsSection = ({ isArabic }) => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: isArabic ? 'عميل راضي' : 'Clients Satisfaits',
      color: 'blue'
    },
    {
      icon: Clock,
      number: '20+',
      label: isArabic ? 'سنة خبرة' : 'Années d\'Expérience',
      color: 'green'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: isArabic ? 'تقييم العملاء' : 'Note Clients',
      color: 'yellow'
    },
    {
      icon: Shield,
      number: '100%',
      label: isArabic ? 'خدمة آمنة' : 'Service Sécurisé',
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic ? 'إحصائياتنا' : 'Nos Statistiques'}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {isArabic 
              ? 'أرقام تتحدث عن تميزنا وثقة عملائنا بخدماتنا'
              : 'Des chiffres qui témoignent de notre excellence et de la confiance de nos clients'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${colorClasses[stat.color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'انضم إلى عائلة DIGIMARRAKECH' : 'Rejoignez la famille DIGIMARRAKECH'}
            </h3>
            <p className="text-lg opacity-90 mb-6">
              {isArabic 
                ? 'استفد من خدماتنا المتميزة وكن جزءاً من قصة نجاحنا'
                : 'Profitez de nos services d\'excellence et faites partie de notre histoire de succès'
              }
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {isArabic ? 'ابدأ الآن' : 'Commencer maintenant'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;