import { motion } from 'framer-motion';
import cspace from '../assets/Slider/cspace.svg';
import akfaMedline from '../assets/Slider/akfaMedline.svg';
import delever from '../assets/Slider/delever.svg';
import fonon from '../assets/Slider/fonon.svg';
import goodzone from '../assets/Slider/goodzone.svg';
import hamkorbank from '../assets/Slider/hamkorbank.svg';
import hoshimov from '../assets/Slider/hoshimov.svg';
import iman from '../assets/Slider/iman.svg';
import maxtract from '../assets/Slider/maxtract.svg';
import mytaxi from '../assets/Slider/mytaxi.svg';
import rabota from '../assets/Slider/rabota.svg';
import shefBerger from '../assets/Slider/shefBurger.svg';
import sms from '../assets/Slider/sms.svg';
import workly from '../assets/Slider/workly.svg';

import bgImage from '../assets/bgIcons.jpeg';

import adminPanel from '../assets/delever/adminPanel.svg';
import crossplatform from '../assets/delever/crossplatform.svg';
import mobile from '../assets/delever/mobile.svg';
import webDesign from '../assets/delever/webDesign.svg';
import website from '../assets/delever/website.svg';

import deleverImg from '../assets/delever/delever_app.png';
import deliver from '../assets/delever/deliver.svg';
import smsuz from '../assets/delever/smsuz.png';
import notification from '../assets/delever/notification.svg';

import goodzoneImg from '../assets/delever/goodzone_app.png';
import goodzoreIcon from '../assets/delever/goodzoreIcon.png';
import ecommerse from '../assets/delever/ecommerse.svg';

import imanApp from '../assets/delever/imanApp.png';
import imanicon from '../assets/delever/imanIcon.svg';

import chart from '../assets/work/chart.svg';
import folder from '../assets/work/folder.svg';
import off from '../assets/work/off.svg';
import people from '../assets/work/people.svg';
import phone from '../assets/work/phone.svg';

import finance from '../assets/delever/finance.svg';








const slides = [
    { icon: cspace },
    { icon: akfaMedline },
    { icon: delever },
    { icon: fonon },
    { icon: goodzone },
    { icon: hamkorbank },
    { icon: hoshimov },
    { icon: iman },
    { icon: maxtract },
    { icon: mytaxi },
    { icon: rabota },
    { icon: shefBerger },
    { icon: sms },
    { icon: workly },
];

const deliverData = [
    { src: adminPanel, description: "Admin Panel" },
    { src: crossplatform, description: "Cross Platform" },
    { src: mobile, description: " Mobile design" },
    { src: webDesign, description: " Web Design" },
    { src: website, description: " Website" },

];

const smsData = [
    { src: adminPanel, description: "Admin Panel" },
    { src: crossplatform, description: "Cross Platform" },
    { src: website, description: " Website" },

];

const ImanData = [
    { src: adminPanel, description: "Admin Panel" },
    { src: crossplatform, description: "Cross Platform" },
    { src: mobile, description: " Mobile design" },
]

const workData = [
    { src: chart, title: "Analysis" , description: "We will contact you to clarify your project requirements." },
    { src: folder, title: "Offer" , description: "We will provide you with our free, non-binding application." },
    { src: people, title: "Team", description: "We provide a team for your requirements." },
    { src: phone, title: "Сontact", description: "Send us your project request or project idea." },
    { src: off, title: "Start", description: "You will get to know the team and we'll get started." },
    
];

const Clients = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
      <div id='clients'>
          <div>
            <h2 className="text-[28px] lg:text-[63px] text-blue-600 ml-5 lg:ml-24 mt-10 mb-10 font-bold">Our Clients</h2>
            <div className="h-full overflow-hidden py-12 mx-auto relative">
                <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:to-transparent after:filter after:blur-3"></div>

                <motion.div
                    className="flex gap-5  lg:gap-10 w-[1000px] lg:w-[1500px]"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            ease: 'linear',
                            duration: 70,
                            repeat: Infinity,
                        },
                    }}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${200 / slides.length}%` }}>
                            <div className="flex items-center justify-center h-full">
                                <img className="w-[200px] lg:w-[300px] shadow-2xl rounded-3xl transition-transform transform hover:scale-105" src={slide.icon} alt={`Client logo ${index}`} />
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex gap-5 mt-5 lg:gap-10 lg:mt-10 w-[1000px] lg:w-[1500px]"
                    animate={{
                        x: ['-100%', '0%'],
                        transition: {
                            ease: 'linear',
                            duration: 70,
                            repeat: Infinity,
                        },
                    }}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${200 / slides.length}%` }}>
                            <div className="flex items-center justify-center h-full">
                                <img className="w-[200px] lg:w-[300px] shadow-2xl rounded-3xl transition-transform transform hover:scale-105" src={slide.icon} alt={`Client logo ${index}`} />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>

        <div id='portfolio'>
 <div id='deliver' className='delever'>
      <div className='mt-20  p-5 lg:p-10  w-full bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh' }}>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='ml-0 lg:ml-20 max-w-xs lg:max-w-xl mt-0  lg:mt-28  lg:mb-0' >
            <img className='max-w-[370px] lg:max-w-[550px] w-full' src={deleverImg} alt='Team Icon' />
          </div>
        <div className=''>
      <h2 className='text-[28px] lg:text-[63px] font-extrabold text-orange-600 w-[200px] lg:w-[400px] ml-0 lg:ml-14'>Delever</h2>
     <div className='flex w-32 pl-4 py-1 ml-0 lg:ml-14 mb-5 items-center bg-orange-100  rounded-2xl'>
<img className='pr-2' src={deliver}></img>
<p className='text-orange-600 font-semibold text-sm'>Delivery</p>
     </div>
          <p className='ml-0 text-slate-600 mb-3 font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[20px] lg:w-[600px]'>
          Delever - Delivery service automation targeted at both consumers and restaurants.
          </p>
          <p  className='ml-0  font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[25px] lg:w-[500px]' >What we did?</p>
       <div>
       <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {deliverData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-100 rounded-lg p-3 lg:p-3'>
    <img className='w-8 lg:w-14 mb-5' src={item.src} alt="Icon" />
    <h3 className='text-[13px] lg:text-[17px] text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
         </div>
       </div>
        </div>
      </div>
    </div>
      </div>
        </div>
 <div id='smsuz'>
 <div className='sms uz'>
      <div className='mt-5 lg:mt-20  p-5 lg:p-10  w-full bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh' }}>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
     
        <div className='order-2 lg:order-1'>
      <h2 className='text-[28px] lg:text-[65px] font-extrabold text-blue-600 w-[200px] lg:w-[400px] ml-0 lg:ml-14'>Smsuz.uz</h2>
     <div className='flex w-36 pl-1 py-1 ml-0 lg:ml-14 mb-5 items-center bg-blue-100  rounded-2xl'>
<img className='pl-2 py-1 pr-1 w-8 ' src={notification}></img>
<p className='text-blue-600 font-semibold text-sm'>Notification</p>
     </div>
          <p className='ml-0 text-slate-600 mb-3 font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[20px] lg:w-[600px]'>
          Smsuz.uz - It is a platform for bulk SMS messaging.
          </p>
          <p  className='ml-0  font-semibold lg:ml-14 w-[360px]  mb-5 text-[17px] lg:text-[25px] lg:w-[500px]' >What we did?</p>
       <div>
       <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {smsData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-100 rounded-lg p-3 lg:p-3'>
    <img className='w-8 lg:w-14 mb-5' src={item.src} alt="Icon" />
    <h3 className='text-[13px] lg:text-[17px]  text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
         </div>
       </div>
        </div>
        <div className='ml-0 lg:ml-10  max-w-xs lg:max-w-xl mt-0 order-1 lg:order-2 lg:mt-20  lg:mb-0' >
            <img className='max-w-[370px] rounded-2xl lg:max-w-[550px] w-full ' src={smsuz} alt='Team Icon' />
          </div>
      </div>
    </div>
 </div>
 </div>

 <div id='goodzone'>
 <div className='goodzone'>
      <div className='mt-0 lg:mt-10 order-2 lg:order-1 p-5 lg:p-10  w-full bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh' }}>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='ml-0 lg:ml-20 max-w-xs lg:max-w-xl mt-0 rounded-2xl  lg:mt-24  lg:mb-0' >
            <img className='max-w-[370px] lg:max-w-[550px] w-full' src={goodzoneImg} alt='Team Icon' />
          </div>
        <div className=''>
      <h2 className='text-[28px] lg:text-[63px] font-extrabold text-orange-600 w-[200px] lg:w-[400px] ml-0 lg:ml-14'>
        <img className='mt-5 lg:mt-0' src={goodzoreIcon}></img>
      </h2>
     <div className='flex w-36 pl-4 py-1 ml-0 lg:ml-14 mb-5 items-center bg-red-200  rounded-2xl'>
<img className='pr-2' src={ecommerse}></img>
<p className='text-red-600 font-semibold text-sm'>E-commerce</p>
     </div>
          <p className='ml-0 text-slate-600 mb-3 font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[20px] lg:w-[600px]'>
          Goodzone - Internet shop of household appliances in Uzbekistan.
          </p>
          <p  className='ml-0  font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[25px] lg:w-[500px]' >What we did?</p>
       <div>
       <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {deliverData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-100 rounded-lg p-3 lg:p-3'>
    <img className='w-8 lg:w-14 mb-5' src={item.src} alt="Icon" />
    <h3 className='text-[13px] lg:text-[17px] text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
         </div>
       </div>
        </div>
      </div>
    </div>
      </div>
 </div>

 <div id='iman'>
 <div className='Iman'>
      <div className='mt-5 lg:mt-20  p-5 lg:p-10  w-full bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh' }}>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
    
        <div className='order-2 lg:order-1'>
      <h2 className='text-[28px] lg:text-[65px] mb-5 font-extrabold text-green-600 w-[200px] lg:w-[400px] ml-0 lg:ml-14'>
        <img className='mt-5 lg:mt-0' src={imanicon}></img>
      </h2>
     <div className='flex w-32 pl-3 py-1 ml-0 lg:ml-14 mb-5 items-center bg-green-100  rounded-2xl'>
<img className='pl-2 py-1 pr-1 w-8 ' src={finance}></img>
<p className='text-green-600 font-semibold text-sm'>Finance</p>
     </div>
          <p className='ml-0 text-slate-600 mb-3 font-semibold leading-10 lg:ml-14 w-[360px]  text-[17px] lg:text-[20px] lg:w-[500px]'>
          Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.
          </p>
          <p  className='ml-0  font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[25px] lg:w-[500px]' >What we did?</p>
       <div>
       <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {ImanData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-100 rounded-lg p-3 lg:p-3'>
    <img className='w-8 lg:w-14 mb-5' src={item.src} alt="Icon" />
    <h3 className='text-[13px] lg:text-[17px] text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
         </div>
       </div>
        </div>
        <div className='ml-0 lg:ml-10 max-w-xs lg:max-w-xl mt-0 order-1 lg:order-2 lg:mt-28  lg:mb-0' >
            <img className='max-w-[370px] lg:max-w-[550px] rounded-2xl w-full ' src={imanApp} alt='Team Icon' />
          </div>
      </div>
    </div>
 </div>
 </div>

 <div>
 <div className='how-we-work'>
      <h2 className='text-[25px] mt-10 lg:text-[70px] font-extrabold text-blue-600 w-[200px] lg:w-[600px] ml-5 lg:ml-24'>How we work!</h2>
      <div className='mt-20 px-5 text-center items-center grid lg:grid-cols-5 grid-cols-1'>
        {workData.map((item, index) => {
          return (
            <div className='mb-10 ' key={index}>
              <div className='items-center w-60 grid grid-cols-2 lg:grid-cols-1 ml-10 lg:ml-0'>
              <div>
             <img className=' w-20 max-w-xs ml-0 lg:ml-20' src={item.src} alt='Icon' />
              </div>
              <div>
              <h3 className='text-[17px] lg:text-[17px] font-semibold text-slate-900'>{item.title}</h3>
              <p className='text-[13px] lg:text-[14px] text-slate-600'>{item.description}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
 </div>

      </div>
    );
};

export default Clients;
