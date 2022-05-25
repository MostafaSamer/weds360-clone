import styles from "./newandnotable.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function NewNotable() {
    return (
        <div>
            <div className={styles.NewNotable + ' py-5'}>
                <div className="w-full border-0 lg:w-9/12 mx-auto mb-4"></div>
                <h4 className="text-2xl lg:text-4xl font-bold text-center mb-2 ">New and Notable</h4>
                <div className="mx-auto py-5 px-5 w-full lg:w-3/4 overflow-hidden">
                    <section className={styles.NewNotableSection}>
                        <div className="container px-5 mx-auto">
                            <div className="flex flex-wrap flex-row -m-4">
                                <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-autoheight swiper">
                                <Swiper
                                        className={styles.mySwiper}
                                        spaceBetween={10}
                                        slidesPerView={6}
                                        // Autoplay={true}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        >
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="p-4 hover:pointer">
                                                <a target="_blank" href="/en/service/61898cec2c5c8629f4951dcf/hoxton-house">
                                                    <div class={styles.NewNotableSwiperSlideContainer + ' h-48 border-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg'}>
                                                        <img class="h-32 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/VENDOR_SERVICES/61898cec2c5c8629f4951dcf/webp/large-2092600109bec3b00995810b7ab56aa5.webp" alt="Hoxton House" />
                                                        <div class="p-2">
                                                            <h2 class={styles.NewNotableSubHeader + ' tracking-widest text-xs font-medium text-gray-400 mb-1'}>Hoxton House</h2>
                                                            <h1 class={styles.NewNotableHeader + ' title-font text-xs font-medium'}>Hoxton House</h1>
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

export default NewNotable;