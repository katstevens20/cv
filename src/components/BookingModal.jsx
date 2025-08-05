import React from 'react';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, service, isArabic }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {isArabic ? 'حجز الخدمة' : 'Réservation Service'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">
            {isArabic ? service.titleAr : service.title}
          </h3>
          <p className="text-gray-600 mb-2">
            {isArabic ? service.descriptionAr : service.description}
          </p>
          <p className="text-blue-600 font-semibold">
            {isArabic ? service.priceAr : service.price}
          </p>
        </div>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder={isArabic ? 'الاسم الكامل' : 'Nom complet'}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder={isArabic ? 'رقم الهاتف' : 'Numéro de téléphone'}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder={isArabic ? 'البريد الإلكتروني' : 'Adresse email'}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
            {isArabic ? 'تأكيد الحجز' : 'Confirmer la réservation'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;