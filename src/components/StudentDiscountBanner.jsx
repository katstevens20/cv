import React from 'react';
import { GraduationCap, Percent, Gift } from 'lucide-react';

const StudentDiscountBanner = ({ isArabic }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <GraduationCap className="w-6 h-6 text-yellow-300" />
            <span className="font-bold text-lg">
              {isArabic ? '🎓 خصومات خاصة للطلاب!' : '🎓 OFFRES SPÉCIALES ÉTUDIANTS!'}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? 'خصم 50% للطلاب' : 'Réduction 50% Étudiants'}
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            {isArabic 
              ? 'نؤمن بدعم الطلاب! احصل على خصومات حصرية تصل إلى 50% على جميع خدماتنا الرقمية والإدارية'
              : 'Nous croyons au soutien des étudiants! Obtenez des réductions exclusives jusqu\'à 50% sur tous nos services numériques et administratifs'
            }
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Percent className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-semibold">
                {isArabic ? 'خصم 50% على CV' : '50% OFF Création CV'}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Gift className="w-6 h-6 text-green-300" />
              <span className="text-lg font-semibold">
                {isArabic ? 'خصم 30% إداري' : '30% OFF Services Administratifs'}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <GraduationCap className="w-6 h-6 text-blue-300" />
              <span className="text-lg font-semibold">
                {isArabic ? 'استشارة مجانية' : 'Consultation Gratuite'}
              </span>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'كيفية الحصول على الخصم؟' : 'Comment obtenir la réduction?'}
            </h3>
            <div className="space-y-3 text-lg">
              <p>
                {isArabic 
                  ? '1. أحضر بطاقة الطالب الخاصة بك'
                  : '1. Présentez votre carte d\'étudiant'
                }
              </p>
              <p>
                {isArabic 
                  ? '2. اختر الخدمة المطلوبة'
                  : '2. Choisissez le service souhaité'
                }
              </p>
              <p>
                {isArabic 
                  ? '3. احصل على خصمك الفوري!'
                  : '3. Obtenez votre réduction immédiate!'
                }
              </p>
            </div>
            
            <button className="mt-6 bg-white text-green-600 px-8 py-3 rounded-lg text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl">
              {isArabic ? '📞 اتصل بنا الآن' : '📞 Contactez-nous maintenant'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDiscountBanner;