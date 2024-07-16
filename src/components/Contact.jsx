import email from '../assets/contact/email.svg'
import location from '../assets/contact/location.svg'
import tel from '../assets/contact/tel.svg'
import telegram from '../assets/contact/telegram.png'

import facebook from '../assets/contact/facebook.png'
import twitter from '../assets/contact/twitter.png'
import youtube from '../assets/contact/youtube.png'
import instagram from '../assets/contact/instagram.png'

function Contact() {
    return (
      <div id='contact' className='overflow-hidden'>
        <h2 className='text-[28px] lg:text-[63px] text-blue-600 ml-5 lg:ml-20 mt-10 mb-14 font-bold max-w-xs lg:max-w-3xl'>Contact us</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-0 lg:my-14 py-5 ml-0 lg:ml-20 lg:py-20 px-10 lg:px-20 w-[1200px] shadow-xl'>
          <div>
            <form className="form-control mb-10 ml-0 lg:ml-10">
              <h2 className='text-xl font-bold mb-10'>Leave us a message</h2>
              <input type="text" placeholder="Name" className="custom-input w-full max-w-[300px] lg:max-w-[380px]" />
              <input type="email" placeholder="Your Email" className="custom-input max-w-[300px] w-full lg:max-w-[380px] my-10" />
              <textarea className="custom-textarea w-full max-w-[300px] lg:max-w-[380px]" placeholder="Briefly describe your project"></textarea> 
              <button type='button' className="btn btn-primary w-full max-w-[150px] lg:max-w-[200px] mt-5">Send</button>
            </form>
          </div>
          <div className="yandex-embed-container">
            <div className='mb-5'>
              <div className='flex mb-7'>
                <img src={location} alt="location icon" />
                <a className='w-72 lg:w-96 text-sm ml-3' href='https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor'>Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</a>
              </div>
              <div className='flex mb-7'>
                <img src={tel} alt="telephone icon" />
                <a className='w-96 ml-3' type='tel' href='tel:+998336600999'>+998 33 66 00 999</a>
              </div>
              <div className='flex mb-7'>
                <img src={email} alt="email icon" />
                <a className='w-96 ml-3' href='mailto:azizbek.b@udevs.io'>azizbek.b@udevs.io</a>
              </div>
              <div className='flex mb-7'>
                <img className='w-5' src={telegram} alt="telegram icon" />
                <a className='w-96 ml-3 font-bold text-blue-700' href='https://t.me/azizbekbakhodirov'>t.me/azizbekbakhodirov</a>
              </div>
              <div>
                <div className='flex mb-7 gap-5 cursor-pointer'>
                <a>
                <img className='w-5' src={facebook} alt="facebook icon" />
                </a>
                 <a>
                 <img className='w-5' src={twitter} alt="twitter icon" />
                 </a>
                  <a>
                  <img className='w-5' src={youtube} alt="youtube icon" />
                  </a>
                  <a>
                  <img className='w-5' src={instagram} alt="instagram icon" />

                  </a>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[200px] hidden lg:flex" style={{ position: 'relative', overflow: 'hidden' }}>
              <a href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Tashkent</a>
              <a href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.301295%2C41.334570&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_medium=mapframe&utm_source=maps&z=15.4" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Yandex Maps: search for places, transport, and routes</a>
              <iframe src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.301295%2C41.334570&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_source=mapframe&z=15.4" width="400" height="400" frameBorder="1" allowFullScreen={true} style={{ position: 'relative' }}></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Contact;
