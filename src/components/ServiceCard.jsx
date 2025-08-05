import React from 'react';
import { Clock, CreditCard, Star } from 'lucide-react';

const ServiceCard = ({ service, isArabic, onBook }) => {
  const IconComponent = {
    'FileText': Clock,
    'CreditCard': CreditCard,
    'Globe': Star,
  }[service.icon] || Clock;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {isArabic ? service.titleAr : service.title}
          </h3>
          <p className="text-sm text-gray-600">
            {isArabic ? service.priceAr : service.price}
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">
        {isArabic ? service.descriptionAr : service.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {isArabic ? service.durationAr : service.duration}
        </span>
        <button
          onClick={() => onBook(service)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isArabic ? 'احجز الآن' : 'Réserver'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;