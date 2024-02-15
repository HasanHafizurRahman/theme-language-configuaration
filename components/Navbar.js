"use client"
import { useTranslation } from 'react-i18next';
import { FaShoppingCart } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';

export default function Navbar({ cartCount }) {
  const { t } = useTranslation();

  return (
    <nav className="bg-primary-28 text-white py-4 flex justify-between px-5">
      <div className='flex gap-[35rem]'>
        <div><h2 className="font-bold">{t('navbar.title')}</h2></div>
        <div><LanguageSelector /></div>
      </div>
      <div>
        <div className="relative pt-1">
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <span className="absolute bottom-4 left-4 bg-primary-19 font-bold text-primary-28 rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
}

