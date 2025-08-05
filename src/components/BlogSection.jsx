import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = ({ isArabic }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'Guide complet pour renouveler votre passeport',
      titleAr: 'دليل شامل لتجديد جواز السفر',
      excerpt: 'Découvrez les étapes simplifiées pour renouveler votre passeport rapidement.',
      excerptAr: 'اكتشف الخطوات المبسطة لتجديد جواز سفرك بسرعة.',
      author: 'Équipe DIGIMARRAKECH',
      authorAr: 'فريق ديجي مراكش',
      date: '15 Mars 2024',
      dateAr: '15 مارس 2024',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Les avantages du créateur de CV gratuit',
      titleAr: 'مزايا منشئ السيرة الذاتية المجاني',
      excerpt: 'Pourquoi utiliser notre outil gratuit pour créer votre CV professionnel.',
      excerptAr: 'لماذا تستخدم أداتنا المجانية لإنشاء سيرتك الذاتية المهنية.',
      author: 'Équipe DIGIMARRAKECH',
      authorAr: 'فريق ديجي مراكش',
      date: '10 Mars 2024',
      dateAr: '10 مارس 2024',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Services DAMANE Cash : transferts simplifiés',
      titleAr: 'خدمات ضمان كاش: تحويلات مبسطة',
      excerpt: 'Comment effectuer vos transferts d\'argent en toute sécurité.',
      excerptAr: 'كيفية إجراء تحويلاتك المالية بأمان.',
      author: 'Équipe DIGIMARRAKECH',
      authorAr: 'فريق ديجي مراكش',
      date: '5 Mars 2024',
      dateAr: '5 مارس 2024',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {isArabic ? 'مدونتنا' : 'Notre Blog'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isArabic 
              ? 'نصائح وإرشادات مفيدة حول خدماتنا وأحدث التطورات الرقمية'
              : 'Conseils utiles et guides sur nos services et les dernières évolutions numériques'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={post.image} 
                alt={isArabic ? post.titleAr : post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{isArabic ? post.dateAr : post.date}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{isArabic ? post.authorAr : post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isArabic ? post.titleAr : post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {isArabic ? post.excerptAr : post.excerpt}
                </p>
                
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  {isArabic ? 'اقرأ المزيد' : 'Lire la suite'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;