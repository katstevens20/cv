import React, { useState } from 'react';
import { Download, Upload, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';

const FreeCVCreator = ({ isArabic }) => {
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      profileImage: null
    },
    experience: [
      { company: '', position: '', duration: '', description: '' }
    ],
    education: [
      { school: '', degree: '', year: '', description: '' }
    ],
    skills: [''],
    languages: ['']
  });

  const [activeSection, setActiveSection] = useState('personal');

  const handleInputChange = (section, field, value, index = null) => {
    setCvData(prev => {
      if (index !== null) {
        return {
          ...prev,
          [section]: prev[section].map((item, i) => 
            i === index ? { ...item, [field]: value } : item
          )
        };
      } else if (section === 'personalInfo') {
        return {
          ...prev,
          personalInfo: { ...prev.personalInfo, [field]: value }
        };
      } else {
        return {
          ...prev,
          [section]: prev[section].map((item, i) => i === index ? value : item)
        };
      }
    });
  };

  const addSection = (section) => {
    setCvData(prev => ({
      ...prev,
      [section]: section === 'experience' 
        ? [...prev[section], { company: '', position: '', duration: '', description: '' }]
        : section === 'education'
        ? [...prev[section], { school: '', degree: '', year: '', description: '' }]
        : [...prev[section], '']
    }));
  };

  const generatePDF = () => {
    // Simplified PDF generation simulation
    const element = document.createElement('a');
    const file = new Blob([
      `CV - ${cvData.personalInfo.fullName || 'Mon CV'}\n\n` +
      `Nom: ${cvData.personalInfo.fullName}\n` +
      `Email: ${cvData.personalInfo.email}\n` +
      `Téléphone: ${cvData.personalInfo.phone}\n` +
      `Adresse: ${cvData.personalInfo.address}\n\n` +
      `EXPÉRIENCE:\n${cvData.experience.map(exp => 
        `${exp.position} chez ${exp.company} (${exp.duration})\n${exp.description}\n`
      ).join('\n')}\n` +
      `FORMATION:\n${cvData.education.map(edu => 
        `${edu.degree} - ${edu.school} (${edu.year})\n${edu.description}\n`
      ).join('\n')}\n` +
      `COMPÉTENCES:\n${cvData.skills.filter(skill => skill).join(', ')}\n\n` +
      `LANGUES:\n${cvData.languages.filter(lang => lang).join(', ')}`
    ], { type: 'text/plain' });
    
    element.href = URL.createObjectURL(file);
    element.download = `CV_${cvData.personalInfo.fullName || 'MonCV'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const sections = [
    { id: 'personal', name: isArabic ? 'المعلومات الشخصية' : 'Informations Personnelles', icon: User },
    { id: 'experience', name: isArabic ? 'الخبرة المهنية' : 'Expérience Professionnelle', icon: Briefcase },
    { id: 'education', name: isArabic ? 'التعليم' : 'Formation', icon: GraduationCap },
    { id: 'skills', name: isArabic ? 'المهارات' : 'Compétences', icon: Award }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">
            {isArabic ? 'أقسام السيرة الذاتية' : 'Sections du CV'}
          </h3>
          <div className="space-y-2">
            {sections.map(section => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{section.name}</span>
                </button>
              );
            })}
          </div>
          
          <button
            onClick={generatePDF}
            className="w-full mt-6 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>{isArabic ? 'تحميل PDF' : 'Télécharger PDF'}</span>
          </button>
        </div>

        {/* Form Content */}
        <div className="lg:col-span-2">
          {activeSection === 'personal' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                {isArabic ? 'المعلومات الشخصية' : 'Informations Personnelles'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={isArabic ? 'الاسم الكامل' : 'Nom complet'}
                  value={cvData.personalInfo.fullName}
                  onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="email"
                  placeholder={isArabic ? 'البريد الإلكتروني' : 'Adresse email'}
                  value={cvData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="tel"
                  placeholder={isArabic ? 'رقم الهاتف' : 'Numéro de téléphone'}
                  value={cvData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="text"
                  placeholder={isArabic ? 'العنوان' : 'Adresse'}
                  value={cvData.personalInfo.address}
                  onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isArabic ? 'الصورة الشخصية (اختياري)' : 'Photo de profil (optionnel)'}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">
                    {isArabic ? 'اسحب صورة أو انقر للرفع' : 'Glissez une image ou cliquez pour télécharger'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {isArabic ? 'الخبرة المهنية' : 'Expérience Professionnelle'}
                </h3>
                <button
                  onClick={() => addSection('experience')}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  {isArabic ? 'إضافة خبرة' : 'Ajouter expérience'}
                </button>
              </div>
              
              {cvData.experience.map((exp, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder={isArabic ? 'اسم الشركة' : 'Nom de l\'entreprise'}
                      value={exp.company}
                      onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder={isArabic ? 'المنصب' : 'Poste occupé'}
                      value={exp.position}
                      onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={isArabic ? 'المدة (مثال: 2020-2023)' : 'Durée (ex: 2020-2023)'}
                    value={exp.duration}
                    onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder={isArabic ? 'وصف المهام والإنجازات' : 'Description des tâches et réalisations'}
                    value={exp.description}
                    onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          )}

          {activeSection === 'education' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {isArabic ? 'التعليم' : 'Formation'}
                </h3>
                <button
                  onClick={() => addSection('education')}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  {isArabic ? 'إضافة تعليم' : 'Ajouter formation'}
                </button>
              </div>
              
              {cvData.education.map((edu, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder={isArabic ? 'اسم المؤسسة' : 'Nom de l\'établissement'}
                      value={edu.school}
                      onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder={isArabic ? 'الشهادة/الدرجة' : 'Diplôme/Degré'}
                      value={edu.degree}
                      onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={isArabic ? 'السنة' : 'Année'}
                    value={edu.year}
                    onChange={(e) => handleInputChange('education', 'year', e.target.value, index)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder={isArabic ? 'وصف التخصص أو الإنجازات' : 'Description spécialisation ou réalisations'}
                    value={edu.description}
                    onChange={(e) => handleInputChange('education', 'description', e.target.value, index)}
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {isArabic ? 'المهارات' : 'Compétences'}
                  </h3>
                  <button
                    onClick={() => addSection('skills')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    {isArabic ? 'إضافة مهارة' : 'Ajouter compétence'}
                  </button>
                </div>
                
                {cvData.skills.map((skill, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={isArabic ? 'مهارة...' : 'Compétence...'}
                    value={skill}
                    onChange={(e) => handleInputChange('skills', index, e.target.value, index)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {isArabic ? 'اللغات' : 'Langues'}
                  </h3>
                  <button
                    onClick={() => addSection('languages')}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    {isArabic ? 'إضافة لغة' : 'Ajouter langue'}
                  </button>
                </div>
                
                {cvData.languages.map((language, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={isArabic ? 'لغة (مستوى)...' : 'Langue (niveau)...'}
                    value={language}
                    onChange={(e) => handleInputChange('languages', index, e.target.value, index)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeCVCreator;