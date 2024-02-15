import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaLanguage } from 'react-icons/fa';
import i18n from '../lib/I18n';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <div className="relative">
      <FaLanguage className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white pointer-events-none" />
      <select
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none border border-gray-300 bg-primary-36 pl-8 pr-4 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
        <option value="en">English</option>
        <option value="bn">Bangla</option>
      </select>
    </div>
  );
}
