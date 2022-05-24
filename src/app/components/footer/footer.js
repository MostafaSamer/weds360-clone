import styles from './Footer.module.scss';

function Footer() {

    return (
        <section className={styles.footerSection}>
            <footer className={styles.footer + ' mx-auto px-4 sm:px-8 block pt-4'}>
                <main className='block md:flex px-2 lg:px-20 pt-0  mt-5 pb-5'>
                    <section className='w-full md:w-1/3'>
                        <div className='block'>
                            <p className={styles.footerDesc + ' flex-1 mb-6'}>
                                Plan your wedding wherever and<br />
                                whenever you want on the Weds360 App
                            </p>
                            <ul className="flex gap-2 mt-2">
                                <li>
                                    <a href="https://apps.apple.com/us/app/weds360/id1437100880" title="App Store" className="flex-1 bg-white">
                                        <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Badge-1.png" alt="Apple Store" />
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.plus360.weds360" title="Google Play" className="flex-1" >
                                        <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-g4036.png" alt="Google Play" />
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="https://appgallery.huawei.com/app/C105048519" title="huawei" className="flex-1">
                                        <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Badge.png" alt="Huawei Store" className="max-h-10" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className='w-full md:w-2/3 md:flex ml-0 ml-0 md:ml-20'>
                        <section className='w-full'>
                            <p className={styles.footerHeadSection + ' font-semibold mb-2 sm:mb-2 mt-3 md:mt-0'}>
                                Support
                            </p>
                            <ul className="w-full">
                                <li className={styles.footerlink + ' font-light w-full my-2'}>
                                    <a href="/en/PrivacyPolicy">Privacy Policy</a>
                                </li>
                                <li className={styles.footerlink + ' font-light w-full my-2'}>
                                    <a href="/en/TermsAndConditions">Terms and Conditions</a>
                                </li>
                            </ul>
                        </section>
                        <section className='w-full'>
                            <div className='block mb-4 sm:mb-0'>
                                <header className={styles.footerHeadSection + ' font-semibold mb-2'}>Contact Us</header>
                                <ul>
                                    <li className='my-2'>
                                        <a href="mailto:lovetohelp@weds360.com" className={styles.footerContactInfo}>
                                            <span className="font-bold">Email: </span><span className={styles.footerContactInfoValue + ' font-light'}> lovetohelp@weds360.com</span>
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="https://www.google.com/maps/place/Weds360/@30.0554008,31.2084827,15z/data=!4m2!3m1!1s0x0:0x79c8f6df46489496?sa=X&amp;ved=2ahUKEwjomur9_PT1AhWPhP0HHav1DfYQ_BJ6BAgsEAU" className={styles.footerContactInfo} target="_blank">
                                            <span className="font-bold"> Address:  </span><span className={styles.footerContactInfoValue + ' font-light'}> 6B, 12 Aswan Square, Al Agouzah, Giza Governorate 12651</span>
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="tel:+201066776677" className={styles.footerContactInfo}>
                                            <span className="font-bold">Phone: </span><span className={styles.footerContactInfoValue + ' font-light'}> +201066776677</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </section>
                    <div className='sm:bottom-0 sm:right-0 sm:absolute p-5 md:mr-16'>
                        <ul className='flex justify-center sm:justify-end'>
                            <li>
                                <a href="https://www.facebook.com/Weds360/" title="Facebook" target="_blank" class="flex-1">
                                    <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Facebook.png" alt="Facebook" class="w-auto h-auto" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/weds360/" title="Instagram" target="_blank" class="flex-1">
                                    <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Instagram%20%28filled%29.png" alt="Instagram" class="w-auto h-auto ml-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </main>
            </footer>
        </section>
    );
}

export default Footer;