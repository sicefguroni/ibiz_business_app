import React from 'react';
import locationImage from '../assets/location-image.svg';
import bikeImage from '../assets/bike-image.svg';
import batteryImage from '../assets/battery-image.svg';
import basketIcon from '../assets/basket-icon.svg';
import locationIcon from '../assets/location-icon.svg';
import batteryIcon from '../assets/battery-icon.svg';
import heartIcon from '../assets/heart-icon.svg';

function MainSection() {
  return (
    <section className='main-section'>
      <div className='main-section-container'>
        <div className='main-section-text'>
          <h1 className='main-section-text-title'>Smart E-bike</h1>
          <p className='main-section-text-description'>
            Discover the next-gen smart e-bike with <br />
            GPS tracking and built for the modern commuter.
          </p>
        </div>
        <div className='main-section-cards'>
          <div className='main-section-card'>
            <div className='flex items-center shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] gap-3 bg-white rounded-full p-1 pr-4 cursor-pointer'>
              <div className="w-[40px] h-[40px] bg-[radial-gradient(54.27%_54.77%_at_45%_50.25%,_#fff_62.5%,_#d5d1d1_96.15%)] rounded-full shadow-lg flex items-center justify-center">
                <img src={locationIcon} alt='Location Icon' className='w-6 h-6'/>
              </div>
              <p>Built-in GPS</p>
            </div>
            <img src={locationImage} alt='Location Icon' className='w-[200px] h-[200px]'/>
            <p className='main-section-card-text'>Track your rides in real time and <br />
            locate your bike anytime, anywhere.</p>
          </div>
          <div className='main-section-product-card'>
            <div className='absolute top-4 right-4 bg-primary-400 rounded-full p-2 cursor-pointer'>
              <img src={heartIcon} alt='Heart Icon' className='w-6 h-6'/>
            </div>
            <div className='flex items-center justify-center w-full h-full mt-10'>
              <img src={bikeImage} alt='Bike Icon' className='w-[300px] h-[221px]'/>
            </div>
            <div className="flex flex-col items-center justify-between w-full h-full">
              <div className='flex flex-col items-center justify-center'>
                <h2 className="text-2xl">Nikoru</h2>
                <p className='main-section-card-text'>E-bike with better GPS & battery life</p>
                
              </div>
              <h1 className="text-3xl">$1,999</h1>
              <div className='flex w-full'>
                <button className='product-button'>Order Now</button>
                <button className='product-button-basket'>
                  <img src={basketIcon} alt='Basket Icon' className='w-6 h-6'/>
                </button>
              </div>
            </div>
          </div>
          <div className='main-section-card'>
            <div className='flex items-center shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] gap-3 bg-white rounded-full p-1 pr-4 cursor-pointer'>
              <div className="w-[40px] h-[40px] bg-[radial-gradient(54.27%_54.77%_at_45%_50.25%,_#fff_62.5%,_#d5d1d1_96.15%)] rounded-full shadow-lg flex items-center justify-center">
                <img src={batteryIcon} alt='Battery Icon' className='w-6 h-6'/>
              </div>
              <p>250W Integrated Battery</p>
            </div>
            <img src={batteryImage} alt='Battery Icon' className='w-[200px] h-[200px]'/>
            <p className='main-section-card-text'>Powerful and discreet— <br />
              ride up to 80 miles on a single charge.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;