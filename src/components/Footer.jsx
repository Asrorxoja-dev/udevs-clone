import logo from '../assets/logo.svg';
import twitter from '../assets/contact/twitter.png'
import youtube from '../assets/contact/youtube.png'
import instagram from '../assets/contact/instagram.png'

function Footer() {
  return (
    <div className='mt-20 bg-slate-100 p-5 lg:p-10   '>
<div>
    <img src={logo} alt="logo" className="w-32 mx-auto "/>
</div>
<div className= 'border-b border-blue-200'>
<div className='grid grid-cols-1 lg:grid-cols-3 mt-10  ml-0 lg:ml-10'>
  <div className='about us  mb-10 lg:mb-0 '>
    <h2 className='text-xs lg:text-xl font-bold'>
    About Us
    </h2>
 <div className='flex flex-col  gap-3 mt-4'>
 <a href="#direction" className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>Direction</a>
  <a href="#command" className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>Command</a>
  <a  href="#tools" className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>Tools</a>
  <a href="#clients" className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>Clients</a>
 </div>
    </div>
    <div className='Services  mb-10 lg:mb-10 mr-0 lg:mr-20 order-3 lg:order-1'>
    <h2 className='text-xs  lg:text-xl font-bold'>
    Services
    </h2>
 <div className='flex flex-col  gap-3 mt-4'>
 <a href='#mobile' className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>Development of mobile applications</a>
  <a href='#erp' className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>Development and implementation ERP systems</a>
  <a href='#interface' className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>User interface, User experience design</a>
  <a href='#consulting' className='text-sm cursor-pointer lg:text-[18px]  text-blue-600'>Optimization IT consulting infrastructure</a>
 </div>
    </div>

    <div className='Portfolio mb-10 ml-0 lg:ml-60 lg:mb-0  order-1 lg:order-3'>
    <h2 className='text-xs lg:text-xl font-bold'>
    Portfolio
    </h2>
 <div className='flex flex-col  gap-3 mt-4'>
 <a   href='#deliver'  className='text-sm cursor-pointer lg:text-[18px]   text-blue-600'>Delever</a>
  <a   href='#smsuz'   className='text-sm cursor-pointer lg:text-[18px]   text-blue-600'>Sms.uz</a>
  <a   href='#goodzone'   className='text-sm cursor-pointer lg:text-[18px]   text-blue-600'>Goodzone</a>
  <a  href='#iman'      className='text-sm cursor-pointer lg:text-[18px]   text-blue-600'>Iman</a>
 </div>
    </div>
  </div>
</div>
<div className='flex justify-between'>
    <div>
        <h2 className='text-xs text-blue-600 lg:text-[14px] font-semibold mt-5'>
        © 2024 Udevs. All rights reserved
        </h2>
    </div>
    <div>
    <div className='flex mt-3 gap-2 lg:gap-5 cursor-pointer '>
            
                 <a className='bg-blue-100 rounded-full p-2 text-white hover:bg-blue-300 '>
                 <img className='w-5' src={twitter} alt="twitter icon" />
                 </a>
                  <a className='bg-blue-100 rounded-full p-2 text-white hover:bg-blue-300 '>
                  <img className='w-5' src={youtube} alt="youtube icon" />
                  </a>
                  <a className='bg-blue-100 rounded-full p-2 text-white hover:bg-blue-300 '>
                  <img className='w-5' src={instagram} alt="instagram icon" />

                  </a>
                </div>
    </div>
</div>
    </div>
  )
}

export default Footer