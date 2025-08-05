import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = ({ isArabic }) => {
  const testimonials = [
    {
      name: 'Ahmed Benali',
      nameAr: 'أحمد بن علي',
      text: 'Service excellent et rapide. Mon passeport a été renouvelé en quelques jours.',
      textAr: 'خدمة ممتازة وسريعة. تم تجديد جواز سفري في بضعة أيام.',
      rating: 5,
      service: 'Renouvellement Passeport'
    },
    {
      name: 'Fatima Zahra',
      nameAr: 'فاطمة الزهراء',
      text: 'Équipe professionnelle et accueillante. Je recommande vivement!',
      textAr: 'فريق مهني ومرحب. أنصح بشدة!',
      rating: 5,
      service: 'Services DAMANE Cash'
    },
    {
      name: 'Youssef Alami',
      nameAr: 'يوسف العلمي',
      text: 'Le créateur de CV gratuit est fantastique. Design professionnel!',
      textAr: 'منشئ السيرة الذاتية المجاني رائع. تصميم مهني!',
      rating: 5,
      service: 'Créateur CV'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {isArabic ? 'آراء عملائنا' : 'Témoignages Clients'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isArabic 
              ? 'اكتشف تجارب عملائنا الراضين عن خدماتنا المتميزة'
              : 'Découvrez les expériences de nos clients satisfaits de nos services d\'excellence'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              
              <p className="text-gray-700 mb-4 italic">
                "{isArabic ? testimonial.textAr : testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {isArabic ? testimonial.nameAr : testimonial.name}
                </p>
                <p className="text-sm text-blue-600">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;