import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typist from 'react-typist';
import logo from '../assets/logo.svg';
import hero from '../assets/hero.svg';
import bgImage from '../assets/bgIcons.jpeg';
import i18n from '../i18n';

import iNterface from '../assets/interface.svg';
import settings from '../assets/settings.svg';
import team from '../assets/team.svg';
import kompyuter from '../assets/kompyuter.svg';
import telephone from '../assets/telephone.svg';
import develop from '../assets/develop.svg';

const dataArray = [
  { src: team, descriptionKey: "services.team" },
  { src: iNterface, descriptionKey: "services.interface" },
  { src: settings, descriptionKey: "services.optimization" },
  { src: kompyuter, descriptionKey: "services.consulting" },
  { src: telephone, descriptionKey: "services.mobileDevelopment" },
  { src: develop, descriptionKey: "services.erpDevelopment" },
];

const Hero = () => {
  const { t } = useTranslation();
  
  const texts = [
    t("hero.itConsulting"),
    t("hero.mobileDevelopment"),
    t("hero.erpDevelopment"),
    t("hero.uiUxDesign"),
    t("hero.optimizationConsulting")
  ];
  
  const [typing, setTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const resetTyping = () => {
    setTyping(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setTyping(true);
    }, 600);
  };

  return (
    <div className='w-full overflow-x-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-2  text-center lg:text-left place-content-center w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh', }}>
        <div className='mt-16 ' >
        <div className='ml-24 lg:ml-0 w-full lg:w-1/2'>
        <img className='w-40  lg:w-64' src={logo} alt={t("alt.logo")} />
        </div>
          <h2 className='text-[28px] w-full lg:text-[43px] text-slate-600 mt-8 font-semibold'>{t("hero.title")}</h2>
          <div className='flex flex-col mt-5 textgroup text-[30px] lg:text-[40px] text-blue-600 font-semibold mb-3'>
            {typing ? (
              <Typist onTypingDone={resetTyping}>
                <span>{texts[currentIndex]}</span>
                <Typist.Backspace count={texts[currentIndex].length} delay={1000} />
              </Typist>
            ) : (
              <div style={{ minHeight: '48px' }}></div>
            )}
          </div>
          <button className='btn btn-primary px-20 text-white text-xl mt-5 hidden lg:flex'>{t("hero.contactUs")}</button>
        </div>
        <div className='mt-5'>
          <img className='w-[600px] lg:w-[750px]' src={hero} alt={t("alt.hero")} />
        </div>
      </div>

      <div id='direction' className='mx-auto'>
        <h2 className='text-[28px] w-full lg:text-[63px] text-blue-600 ml-24 lg:ml-0 mt-10 font-semibold'>{t("hero.ourServices")}</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          {dataArray.map((item, index) => (
            <div className='mt-10' key={index}>
              <div className='w-full h-full ml-1 lg:ml-5 max-w-[170px] max-h-xs lg:max-w-[350px] lg:max-h-xl bg-slate-100 rounded-lg p-5 lg:p-10'>
                <img className='w-7 lg:w-10 mb-5' src={item.src} alt={t(item.descriptionKey)} />
                <h3 className='text-[15px] lg:text-[20px] text-slate-900 font-semibold'>{t(item.descriptionKey)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
