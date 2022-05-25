import styles from './featuredvendors.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useLayoutEffect, useState } from 'react';

function FeaturedVendors() {

    const [slidesPerView, setSlidesPerView] = useState(4);

    function useWindowSize() {
        useLayoutEffect(() => {
          function updateSize() {
            setSlidesPerView(window.innerWidth < 768? 1 : 4);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener(window.innerWidth < 768? 1 : 4, updateSize);
        }, []);
        return [0, 0];
      }

    const [width, height] = useWindowSize();

    return (
        <div>
            <div className="py-5">
                <div className="w-full lg:w-9/12 mx-auto mt-6 mb-6"></div>
                <h4 className="text-2xl lg:text-4xl font-bold text-center mb-2 ">Featured Vendors</h4>

                <div className='mx-auto w-full lg:w-8/12 py-5 px-5 overflow-hidden'>
                    <section className={styles.FeaturedVendorSwiper}>
                        <div className='container px-5 mx-auto'>
                            <div className='flex flex-wrap flex-row -m-4'>
                                <div className='swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-autoheight swiper'>
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={slidesPerView}
                                    >
                                        <SwiperSlide>
                                            <div className='p-4 hover:pointer'>
                                                <a href='https://weds360.com/en/service/61898cec2c5c8629f4951e78/sheraton-miramar-resort-el-gouna'>
                                                    <div className={styles.swipeCard + ' h-80 border-2 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img className="h-60 lg:h-60 md:h-36 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951df3/webp/large-591ef7ae8f4d9175c8864358b0df5f27.webp" alt="Cocoa by: Ohoud" />
                                                        <div className="p-1">
                                                            <h2 className={styles.swipeCardSubHeader + " tracking-widest text-xs font-normal mb-1"}>
                                                                Cocoa by: Ohoud
                                                            </h2>
                                                            <h1 className={styles.swipeCardHeader + " font-normal text-gray-900"}>
                                                                Cocoa by: Ohoud
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='p-4 hover:pointer'>
                                                <a href='https://weds360.com/en/service/61898cec2c5c8629f4951e78/sheraton-miramar-resort-el-gouna'>
                                                    <div className={styles.swipeCard + ' h-80 border-2 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img className="h-60 lg:h-60 md:h-36 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951df3/webp/large-591ef7ae8f4d9175c8864358b0df5f27.webp" alt="Cocoa by: Ohoud" />
                                                        <div className="p-1">
                                                            <h2 className={styles.swipeCardSubHeader + " tracking-widest text-xs font-normal mb-1"}>
                                                                Cocoa by: Ohoud
                                                            </h2>
                                                            <h1 className={styles.swipeCardHeader + " font-normal text-gray-900"}>
                                                                Cocoa by: Ohoud
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='p-4 hover:pointer'>
                                                <a href='https://weds360.com/en/service/61898cec2c5c8629f4951e78/sheraton-miramar-resort-el-gouna'>
                                                    <div className={styles.swipeCard + ' h-80 border-2 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img className="h-60 lg:h-60 md:h-36 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951df3/webp/large-591ef7ae8f4d9175c8864358b0df5f27.webp" alt="Cocoa by: Ohoud" />
                                                        <div className="p-1">
                                                            <h2 className={styles.swipeCardSubHeader + " tracking-widest text-xs font-normal mb-1"}>
                                                                Cocoa by: Ohoud
                                                            </h2>
                                                            <h1 className={styles.swipeCardHeader + " font-normal text-gray-900"}>
                                                                Cocoa by: Ohoud
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='p-4 hover:pointer'>
                                                <a href='https://weds360.com/en/service/61898cec2c5c8629f4951e78/sheraton-miramar-resort-el-gouna'>
                                                    <div className={styles.swipeCard + ' h-80 border-2 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img className="h-60 lg:h-60 md:h-36 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951df3/webp/large-591ef7ae8f4d9175c8864358b0df5f27.webp" alt="Cocoa by: Ohoud" />
                                                        <div className="p-1">
                                                            <h2 className={styles.swipeCardSubHeader + " tracking-widest text-xs font-normal mb-1"}>
                                                                Cocoa by: Ohoud
                                                            </h2>
                                                            <h1 className={styles.swipeCardHeader + " font-normal text-gray-900"}>
                                                                Cocoa by: Ohoud
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='p-4 hover:pointer'>
                                                <a href='https://weds360.com/en/service/61898cec2c5c8629f4951e78/sheraton-miramar-resort-el-gouna'>
                                                    <div className={styles.swipeCard + ' h-80 border-2 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img className="h-60 lg:h-60 md:h-36 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951df3/webp/large-591ef7ae8f4d9175c8864358b0df5f27.webp" alt="Cocoa by: Ohoud" />
                                                        <div className="p-1">
                                                            <h2 className={styles.swipeCardSubHeader + " tracking-widest text-xs font-normal mb-1"}>
                                                                Cocoa by: Ohoud
                                                            </h2>
                                                            <h1 className={styles.swipeCardHeader + " font-normal text-gray-900"}>
                                                                Cocoa by: Ohoud
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='p-4 hover:pointer'>
                                                <a href='https://weds360.com/en/service/61898cec2c5c8629f4951e78/sheraton-miramar-resort-el-gouna'>
                                                    <div className={styles.swipeCard + ' h-80 border-2 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img className="h-60 lg:h-60 md:h-36 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951df3/webp/large-591ef7ae8f4d9175c8864358b0df5f27.webp" alt="Cocoa by: Ohoud" />
                                                        <div className="p-1">
                                                            <h2 className={styles.swipeCardSubHeader + " tracking-widest text-xs font-normal mb-1"}>
                                                                Cocoa by: Ohoud
                                                            </h2>
                                                            <h1 className={styles.swipeCardHeader + " font-normal text-gray-900"}>
                                                                Cocoa by: Ohoud
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default FeaturedVendors