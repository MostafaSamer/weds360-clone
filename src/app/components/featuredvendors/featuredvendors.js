import styles from './featuredvendors.module.scss'

import ErrDataEmpty from '../errdataempty/errdataempty';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVendorsFetch } from '../../../actions'

function FeaturedVendors() {
    const dispatch = useDispatch();
    const vendors = useSelector(state => state.vendorsReducer.vendors);
    const [slidesPerView, setSlidesPerView] = useState(4);

    function useWindowSize() {
        useLayoutEffect(() => {
            function updateSize() {
                setSlidesPerView(window.innerWidth < 768 ? 1 : 4);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener(window.innerWidth < 768 ? 1 : 4, updateSize);
        }, []);
        return [0, 0];
    }
    const [width, height] = useWindowSize();

    useEffect(() => {
        dispatch(getVendorsFetch())
    }, [])

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
                                        {
                                            vendors.length > 0?
                                            vendors.map((vendor, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className='p-4 hover:pointer'>
                                                        <a href={vendor.state}>
                                                            <div className={styles.swipeCard + ' h-80 border-2 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                                <img className="h-60 lg:h-60 md:h-36 w-full object-cover object-center" src={vendor.image} alt="Cocoa by: Ohoud" />
                                                                <div className="p-1">
                                                                    <h2 className={styles.swipeCardSubHeader + " tracking-widest text-xs font-normal mb-1"}>
                                                                        {vendor.title}
                                                                    </h2>
                                                                    <h1 className={styles.swipeCardHeader + " font-normal text-gray-900"}>
                                                                        {vendor.subTitle}
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                            )) : <ErrDataEmpty />
                                        }
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