import React from 'react';
import { useTranslation } from 'react-i18next';
import teamIcon from '../assets/teamIcon.svg';
import Counter from './Counter';
import i18n from '../i18n';

function Team() {
  const { t } = useTranslation();

  return (
    <div id='command' className='mt-20 bg-slate-100 p-5 lg:p-10'>
      <h2 className='text-[28px] lg:text-[63px] text-blue-600 ml-0 lg:ml-14 mt-10 mb-10 font-bold'>{t('team.title')}</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='order-2 lg:order-1'>
          <p className='ml-0 leading-7 lg:leading-10 font-semibold lg:ml-14 w-[360px] mt-5 text-[17px] lg:text-xl lg:w-[500px]'>
            {t('team.description')}
          </p>
          <Counter />
          <h3 className='ml-0 font-semibold text-[20px] lg:text-[40px] text-slate-700 lg:ml-14'>{t('team.dedicatedTeam')}</h3>
        </div>
        <div className='ml-0 lg:ml-14 max-w-xs lg:max-w-xl order-1 lg:order-2'>
          <img src={teamIcon} alt={t('alt.teamIcon')} />
        </div>
      </div>
    </div>
  );
}

export default Team;
