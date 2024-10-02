import Image from 'next/image';
import React from 'react';
import Slider, { Settings } from 'react-slick';

interface CarouselProps {
  title: string;
  description: string;
  images: string[];
  technologies?: string[];
  index: number;
  colaboration?: boolean;
  appStoreLink?: string;
  playStoreLink?: string;

}


const CarouselComponent: React.FC<CarouselProps> = ({ title, description, images=[], index, colaboration = false, appStoreLink, playStoreLink, technologies=[] }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    rtl: index % 2 === 0,
    autoplay: true,

  };

  return (
    <section className="pt-10 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className={`w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex py-10 ${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'
            }`}>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <div className='flex justify-between w-full items-center
              '>
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  {title}
                </h2>
                <p className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  {
                    colaboration
                      ? <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                      </svg>

                      : <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="1" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>

                  }
                </p>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                {description}
              </p>
              {technologies != null ? <div className='flex gap-2'>
                <h3 className="text-gray-900 mr-3 text-lg font-bold font-manrope leading-normal lg:text-start text-center">
                  Technologies:
                </h3>
                <div className="flex gap-2 justify-center items-center flex-wrap">
                  {technologies.map((technology, index) => (
                    <span
                      key={index}
                      className={`text-gray-900 text-sm font-normal leading-normal bg-gray-200 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
                : null}
            </div>
            <div className='flex'>
              { appStoreLink != null && <a href={appStoreLink} className="bg-transparent transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <Image src={'/images/appleStore.png'} alt="playstore" width={100} height={30} className="object-contain w-32 h-8" />
              </a>}
              {playStoreLink != null &&   <a href={playStoreLink} className="transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <Image src={'/images/playStoreImage.png'} alt="playstore" width={100} height={32} className="object-contain w-32 h-8"  />
              </a>}

            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-full lg:mx-0 mx-auto h-full rounded-3xl overflow-hidden border-none">
            <Slider {...settings} >
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    className="h-full rounded-3xl object-cover"
                    src={image}
                    alt={`carousel image ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
