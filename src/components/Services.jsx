import android from '../assets/services/android.svg';
import dart from '../assets/services/dart.svg';
import Ios from '../assets/services/Ios.svg';
import kotlin from '../assets/services/kotlin.svg';
import mobileServices from '../assets/services/mobileServices.svg';
import swift from '../assets/services/swift.svg';
import mobileDevs from '../assets/services/mobileDevs.png';
import bgImage from '../assets/bgIcons.jpeg';
import patternBg from '../assets/services/patternBg.png';
import desktop from '../assets/services/desktop.png';

import designUx from '../assets/UiUx/designUx.png';

import crm from '../assets/Erp/crm.svg'
import Ecommerse from '../assets/Erp/Ecommerse.svg'
import email from '../assets/Erp/email.svg'
import house from '../assets/Erp/house.svg'
import learn from '../assets/Erp/learn.svg'
import pos from '../assets/Erp/pos.svg'


import anatomicDesign from '../assets/UiUx/anatomicDesign.svg'
import mobileDesign from '../assets/UiUx/mobileDesign.svg'
import protopype from '../assets/UiUx/prototype.svg'
import Ui from '../assets/UiUx/Ui.svg'
import Ux from '../assets/UiUx/Ux.svg'
import webDesign from '../assets/UiUx/webDesign.svg'

import figma from '../assets/UiUx/figma.svg'
import sketch from '../assets/UiUx/skecht.svg'
import lottie from '../assets/UiUx/lottie.webp'
import ai from '../assets/UiUx/ai.svg'

import architectur from '../assets/Structure/architectur.svg'
import autoTesting from '../assets/Structure/autoTesting.svg'
import Cd from '../assets/Structure/Cd.svg'
import cloud from '../assets/Structure/cloud.svg'
import devOps from '../assets/Structure/devOps.svg'
import loadTesting from '../assets/Structure/loadTesting.svg'
import stressTesting from '../assets/Structure/stressTesting.svg'


import consulting from '../assets/Structure/consulting.svg'


import architecture from '../assets/consulting/architecture.svg'
import backend from '../assets/consulting/backend.svg'
import frontend from '../assets/consulting/frontend.svg'
import devops from '../assets/consulting/devops.svg'
import qa from '../assets/consulting/qa.svg'
import ux from '../assets/consulting/Ux.svg'

const UiUxData = [
    { src: anatomicDesign, description: "Atomic Design" },
    { src: mobileDesign, description: "Mobile Design" },
    { src: protopype, description: "Prototyping" },
    { src: Ui, description: "Ui" },
    { src: Ux, description: "Ux" },
    { src: webDesign, description: "Web Design" },
];

const ErpData = [
    { src: crm, description: "CRM" },
    { src: Ecommerse, description: "E-Commerce" },
    { src: email, description: "Sms / Email" },
    { src: house, description: "Warehouse" },
    { src: learn, description: "eLearning" },
    { src: pos, description: "POS" },
];

const ImgData = [
    { src: android, description: "Android" },
    { src: Ios, description: "iOS" },
    { src: mobileServices, description: "Crossplatform" },
];

const texData = [
    { src: kotlin, description: "Kotlin" },
    { src: swift, description: "Swift" },
    { src: dart, description: "Flutter" },
];

const UiTexnology = [
    { src: figma, description: "Figma" },
    { src: sketch, description: "Sketch" },
    { src: lottie, description: "Lottie" },
    { src: ai, description: "Illustrator" },

];

const ServicesData = [
    { src: architectur, description: "Architecture" },
    { src: autoTesting, description: "Auto Testing" },
    { src: Cd, description: "CI / CD" },
    { src: cloud, description: "Cloud" },
    { src: devOps, description: "DevOps" },
    { src: loadTesting, description: "Load Testing" },
    { src: stressTesting, description: "Stress Testing" },
];

const consultingData = [
    { src: frontend, description: "Frontend" },
    { src: backend, description: "Backend" },
    { src: architectur, description: "Architecture" },
    { src: devOps, description: "DevOps" },
    { src: qa, description: "QA" },
    { src: ux, description: "Ux / Ui" },
];


function Services() {
  return (
    <div id='services'>
      <div id='mobile' className='mt-20 p-5 lg:p-10 w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh' }}>
        <h2 className='text-[28px] lg:text-[63px] text-blue-600 ml-0 lg:ml-14 mt-10 mb-14 font-bold max-w-xs lg:max-w-3xl'>Development of mobile applications</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <p className='ml-0 leading-7 lg:leading-10 font-semibold lg:ml-14 w-[360px] mt-3 text-[17px] lg:text-[25px] lg:w-[500px]'>
            In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.
            </p>
         <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {ImgData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-100 rounded-lg p-3 lg:p-3'>
    <img className='w-8 lg:w-14 mb-5' src={item.src} alt="Icon" />
    <h3 className='text-[13px] lg:text-[17px] text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
         </div>

        
        <div >
          <h2 className='text-[20px] lg:text-[33px] text-slate-700 ml-0 lg:ml-14 mt-10  font-bold max-w-xs lg:max-w-3xl'>Technologies</h2>
        <div className='grid grid-cols-3 ml-0 lg:ml-14 mx-10 lg:mx-20'>
        {texData.map((item, index) => (
    <div className=' mt-10 ' key={index}>
    <div className='w-full h-full  max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs'>
    <img className='w-8 lg:w-14 mb-2' src={item.src} alt="Icon" />
    <h3 className='text-[14px] lg:text-[17px] text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
        </div>
        </div>
          </div>
          <div className='ml-0 lg:ml-14 max-w-xs lg:max-w-xl order-1 lg:order-2 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${patternBg})`,  width: '500px', borderRadius: '20px', paddingTop: '30px' }}>
            <img src={mobileDevs} alt='Team Icon' />
          </div>
        </div>
      </div>

      <div>
      <div id='erp' className='mt-20 bg-slate-100 p-5 lg:p-10'>
      <h2 className='text-[28px] lg:text-[63px] text-blue-600 ml-0 lg:ml-14 mt-10 mb-5 lg:mb-14 font-bold'>ERP systems</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='ml-0 lg:ml-14 max-w-xs lg:max-w-xl mb-5 lg:mb-0  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${patternBg})`,  width: '550px', borderRadius: '20px', paddingTop: '40px',   paddingLeft:"10px" }}>
            <img className='max-w-[300px] lg:max-w-[500px] ' src={desktop} alt='Team Icon' />
          </div>
        <div className=''>
          <p className='ml-0  font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[25px] lg:w-[500px]'>
          IT Systems of any level of complexity at a convenient time for you
          </p>
       <div>
       <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {ErpData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-200 rounded-lg p-3 lg:p-3'>
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


      <div id='interface' className='UI-UX'>
      <div className='mt-20 p-5 lg:p-10 w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh' }}>
        <h2 className='text-[28px] lg:text-[63px] text-blue-600 ml-0 lg:ml-14 mt-10 mb-14 font-bold max-w-xs lg:max-w-3xl'>UI / UX design</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <p className='ml-0 leading-7 lg:leading-10 font-semibold lg:ml-14 w-[360px] mt-3 text-[17px] lg:text-[25px] lg:w-[500px]'>
            Our company takes a human-centered approach to design
            </p>
         <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {UiUxData.map((item, index) => (
    <div className='mt-3 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-100 rounded-lg p-3 lg:p-3'>
    <img className='w-8 lg:w-14 mb-2' src={item.src} alt="Icon" />
    <h3 className='text-[13px] lg:text-[17px] text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
         </div>

        
        <div >
          <h2 className='text-[20px] lg:text-[33px] text-slate-700 ml-0 lg:ml-14 mt-5  font-bold max-w-xs lg:max-w-3xl'>Technologies</h2>
        <div className='grid grid-cols-4 ml-0 lg:ml-14 mx-10 lg:mx-20'>
        {UiTexnology.map((item, index) => (
    <div className=' mt-5 ' key={index}>
    <div className='w-full h-full  max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs'>
    <img className='w-full max-w-14 lg:w-14 mb-2' src={item.src} alt="Icon" />
    <h3 className='text-[14px] lg:text-[17px] text-slate-900 font-bold'>{item.description}</h3>
    </div>
    </div>
  ))
}
        </div>
        </div>
          </div>
          <div className='ml-0 lg:ml-14 max-w-xs lg:max-w-xl order-1 lg:order-2 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${patternBg})`,  width: '500px', borderRadius: '20px', paddingTop: '30px' }}>
            <img src={designUx} alt='Team Icon' />
          </div>
        </div>
      </div>
      </div>


      <div id='optimizing' className='Optimization Infrastructure'>
      <div className='mt-20 bg-slate-100 p-5 lg:p-10'>
      <h2 className='text-[28px] lg:text-[63px] text-blue-600 w-[200px] lg:w-[400px] ml-0 lg:ml-14 mt-10 mb-5 lg:mb-14 font-bold'>Optimization Infrastructure</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='ml-0 lg:ml-14 max-w-xs lg:max-w-xl mb-5 lg:mb-0  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${patternBg})`,  width: '550px', borderRadius: '20px', paddingTop: '40px',   paddingLeft:"10px" }}>
            <img className='max-w-[300px] lg:max-w-[500px] ' src={desktop} alt='Team Icon' />
          </div>
        <div className=''>
          <p className='ml-0  font-semibold lg:ml-14 w-[360px]  text-[17px] lg:text-[25px] lg:w-[500px]'>
          IT Systems of any level of complexity at a convenient time for you
          </p>
       <div>
       <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {ServicesData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full  lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-200 rounded-lg p-3 lg:p-3'>
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


      <div id='consulting' className='IT consulting'>
      <div className='UI-UX'>
      <div className='mt-20 p-5 lg:p-10 w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh' }}>
        <h2 className='text-[28px] lg:text-[63px] text-blue-600 ml-0 lg:ml-14 mt-10 mb-14 font-bold max-w-xs lg:max-w-3xl'>IT consulting</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <p className='ml-0 leading-7 lg:leading-10 font-semibold lg:ml-14 w-[360px] mt-3 text-[17px] lg:text-[25px] lg:w-[500px]'>
            We can improve the qualifications of your employees thereby increasing the efficiency of your company
            </p>
         <div className='grid grid-cols-3  mx-0 lg:mx-10'>
         {consultingData.map((item, index) => (
    <div className='mt-5 ' key={index}>
    <div className='w-full h-full lg:ml-5 max-w-[113px] max-h-xs lg:max-w-[150px] lg:max-h-xs bg-slate-100 rounded-lg p-3 lg:p-3'>
    <img className='w-8 lg:w-14 mb-2' src={item.src} alt="Icon" />
    <h3 className='text-[13px] lg:text-[17px] text-slate-900 font-semibold'>{item.description}</h3>
    </div>
    </div>
  ))
}
         </div>
          </div>
          <div className='ml-0 lg:ml-14 max-w-xs lg:max-w-xl order-1 lg:order-2' >
            <img src={consulting} alt='Team Icon' />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Services;
