import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import logo from '../assets/logo.svg';
import Rus from '../assets/Rus.svg';
import Eng from '../assets/Eng.svg';
import menuIcon from '../assets/menu.png';
import closeIcon from '../assets/close.png';
import dropdownIcon from '../assets/dropdownIcon.svg';

import consulting from '../assets/servicesIcon/consulting.svg';
import development from '../assets/servicesIcon/development.svg';
import interfacE from '../assets/servicesIcon/interface.svg';
import mobile from '../assets/servicesIcon/mobile.svg';
import optimizing from '../assets/servicesIcon/optimizing.svg';

import deliver from '../assets/servicesIcon/deliver.svg';
import goodzone from '../assets/servicesIcon/goodzone.svg';
import iman from '../assets/servicesIcon/iman.svg';
import smsuz from '../assets/servicesIcon/smsuz.svg';
import i18n from '../i18n';

import twitter from '../assets/contact/twitter.png'
import youtube from '../assets/contact/youtube.png'
import instagram from '../assets/contact/instagram.png'

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 items-center font-bold">
      <div className="navbar px-5 py-3 lg:px-[60px] bg-base-100 border-b">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl" href="/">
            <img src={logo} alt="logo" className="w-24" />
          </a>
        </div>
        <div className="navbar-center text-slate-700 hidden font-bold lg:flex gap-5">
          <ul className="menu menu-horizontal px-1">
            <li className='hover:border-b-blue-500'><a href="#direction">{t('navbar.direction')}</a></li>
            <li className='hover:border-b-blue-500'><a href="#command">{t('navbar.command')}</a></li>
            <li className='hover:border-b-blue-500 dropdown dropdown-hover'>
              <a href='#services'>{t('navbar.services')} <img src={dropdownIcon} alt="dropdown icon" /></a>
              <ul tabIndex={0} className="dropdown-content rounded menu bg-base-100 z-[1] w-72 p-1 shadow">
                <li className='hover:bg-blue-500 hover:text-white'><a href='#erp' className='text-[13px]'><img src={development} alt="icon" /> {t('navbar.development')}</a></li>
                <li className='hover:bg-blue-500 hover:text-white'><a href='#consulting' className='text-[13px]'><img src={consulting} alt="icon" /> {t('navbar.consulting')}</a></li>
                <li className='hover:bg-blue-500 hover:text-white'><a href='#interface' className='text-[13px]'><img src={interfacE} alt="icon" /> {t('navbar.interface')}</a></li>
                <li className='hover:bg-blue-500 hover:text-white'><a href='#mobile' className='text-[13px]'><img src={mobile} alt="icon" /> {t('navbar.mobile')}</a></li>
                <li className='hover:bg-blue-500 hover:text-white'><a href='#optimizing' className='text-[13px]'><img src={optimizing} alt="icon" /> {t('navbar.optimizing')}</a></li>
              </ul>
            </li>
            <li className='hover:border-b-blue-500'><a href="#tools">{t('navbar.tools')}</a></li>
            <li className='hover:border-b-blue-500'><a href="#clients">{t('navbar.clients')}</a></li>
            <li className='hover:border-b-blue-500 dropdown dropdown-hover'>
              <a href='#portfolio'>{t('navbar.portfolio')} <img src={dropdownIcon} alt="dropdown icon" /></a>
              <ul tabIndex={0} className="dropdown-content rounded menu bg-base-100 z-[1] w-64 p-2 shadow">
                <li className='hover:bg-blue-500 hover:text-white'><a href='#deliver'   className='text-[13px]'><img src={deliver} alt="icon" /> {t('navbar.deliver')}</a></li>
                <li className='hover:bg-blue-500 hover:text-white'><a href='#goodzone' className='text-[13px]'><img src={goodzone} alt="icon" /> {t('navbar.goodzone')}</a></li>
                <li className='hover:bg-blue-500 hover:text-white'><a href='#smsuz'    className='text-[13px]'><img src={smsuz} alt="icon" /> {t('navbar.smsuz')}</a></li>
                <li className='hover:bg-blue-500 hover:text-white'><a href='#iman'     className='text-[13px]'><img src={iman} alt="icon" /> {t('navbar.iman')}</a></li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover">
              <a tabIndex={0} className="">{t('navbar.language')} <img src={dropdownIcon} alt="dropdown icon" /></a>
              <ul tabIndex={0} className="dropdown-content rounded menu bg-base-100 z-[1] w-34 p-2 shadow">
                <li className='hover:bg-blue-500 hover:text-white' onClick={() => changeLanguage('ru')}><a className='text-[13px]'><img className='w-7' src={Rus} alt="Russian flag" /> Рус </a></li>
                <li className='hover:bg-blue-500 hover:text-white' onClick={() => changeLanguage('en')}><a className='text-[13px]'><img className='w-7' src={Eng} alt="English flag" /> Eng </a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <a href='#contact' className="btn btn-primary ml-5 font-bold w-full text-white max-w-[300px]">{t('navbar.contactUs')}</a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost ml-28">
            <img src={menuOpen ? closeIcon : menuIcon} className='w-6 h-6' alt="menu icon" />
          </button>
        </div>
      </div>
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit

      >
        <div className="fixed  top-0 left-0 right-0 bottom-0 bg-slate-100 z-40 flex flex-col pt-2">
       <div className='navbar mb-20'>
       <div className="navbar-start">
          <a className="btn btn-ghost text-xl" href="/">
            <img src={logo} alt="logo" className="w-24" />
          </a>
        </div>
        <div className="navbar-end lg:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost ml-28">
            <img src={menuOpen ? closeIcon : menuIcon} className='lg:w-5 lg:h-5 w-4 h-4' alt="menu icon" />
          </button>
        </div>
       </div>
          <ul className="flex flex-col mt-10 items-center  text-center  text-xl">
            <li className='text-3xl'><a href="#services" onClick={closeMenu}>{t('navbar.services')}</a></li>
            <li className='text-3xl my-5'><a href="#clients" onClick={closeMenu}>{t('navbar.clients')}</a></li>
            <li className='text-3xl mb-40'><a href="#command" onClick={closeMenu}>{t('navbar.command')}</a></li>
            <li className='w-full max-w-4xl'><a href='#contact'  onClick={closeMenu} className="btn btn-primary  font-bold w-full text-white text-xl max-w-[360px]">{t('navbar.contactUs')}</a></li>
          </ul>
          <div className='flex mt-10 gap-4 justify-center  lg:gap-5 cursor-pointer '>
            
            <a className='bg-blue-100 rounded-full p-3 text-white hover:bg-blue-300 '>
            <img className='w-7' src={twitter} alt="twitter icon" />
            </a>
             <a className='bg-blue-100 rounded-full p-3 text-white hover:bg-blue-300 '>
             <img className='w-7' src={youtube} alt="youtube icon" />
             </a>
             <a className='bg-blue-100 rounded-full p-3 text-white hover:bg-blue-300 '>
             <img className='w-7' src={instagram} alt="instagram icon" />

             </a>
           </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Navbar;
