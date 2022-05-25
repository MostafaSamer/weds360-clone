import styles from './navbar.module.scss';

function Navbar() {
    return (
        <div className='sticky top-0 left-0 right-0 pb-8'>
            <div>
                <nav className={styles.NavbarNav + ' px-2 sm:px-4 py-2.5 rounded'}>
                    <div className='container flex flex-wrap items-center mx-auto lg:w-11/12'>
                        <a className='flex' href="/en">
                            <span className='self-center text-lg font-semibold whitespace-nowrap md:mt-5'>
                                <img className="h-6 xl:h-16 w-auto 2xl:mr-20" src="logo.png" alt="Workflow" style={{marginLeft: "10px"}} />
                            </span>
                        </a>
                        <div className='flex items-center md:order-3 mx-auto'>
                            <div className='block lg:hidden w-1/3 md:mr-0 ml-1' style={{width: "400px"}}>
                                <div className='hidden sm:flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'></div>
                                <input type="text" id="email-adress-icon" className={styles.NavBarInput + ' block p-2 pl-10 w-11/12 rounded-lg border sm:text-sm '} placeholder="Search" />
                            </div>
                            <button className='flex text-sm rounded-full md:mr-0 disabled' id='user-menu-button'>
                                <span className='sr-only'>Open user menu</span>
                                <a href="/en/Login">
                                    <i className="fas fa-user-plus step11"></i>
                                </a>
                                
                                <i className='mx-1'></i>
                                <button className={styles.NavbarLanguage + ' ml-7 absolute flex items-center mx-2 text-sm rounded-full text-gray-600 hover:text-gray-500'} style={{color: "rgb(2, 77, 76)"}}>
                                    <i className="mx-1"></i>\
                                    <span className={styles.NavbarLanguageText + ' rounded font-semibold text-xs step12'}>ع </span>
                                </button>
                            </button>
                            {/* <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100" id="dropdownEN">
                                <div className="py-3 px-4">
                                    <span className="block text-sm text-gray-900 dark:text-white"></span>
                                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"></span>
                                </div>
                            </div> */}
                        </div>
                        <div className="flex md:order-2 items-center justify-center mx-auto">
                            <div className={styles.SearchBar + ' hidden mr-3 md:mr-0 lg:block'} style={{width: "300px"}}>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className={styles.searchBarIcon + ' w-5 h-5'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" autocomplete="off" id="email-adress-icon" className={styles.searchBarInput + ' block p-2 pl-10 w-10/12 bg-gray-50 rounded-lg border sm:text-sm step10'} placeholder="Search" />
                            </div>
                            <button type="button" className={styles.NavbarColapseMenu + ' inline-flex items-center p-2 text-sm rounded-lg md:hidden '} aria-controls="mobile-menu-3" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="w-6 h-6 ml-10"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>
                        
                        <div className={styles.NAvBarMenu + ' justify-between items-center w-full md:flex md:w-auto md:order-1 hidden'}>
                            <a className='en' href='https://weds360.com/en/photos'>
                                <div className='flex flex-col mt-4 md:flex-row md:space-x-2 xl:space-x-2 md:mt-2 md:text-sm md:font-medium mx-3 mb-2 '>
                                    <button className='flex mr-3 text-sm rounded-full md:mr-0'></button>
                                    <div className=' z-50 my-0 md:my-4 text-base list-none bg-white justify-center items-center ml-6'>
                                        <ul className={styles.NavBarMenuDrop + ' z-10 absolute hidden'}>
                                            <li>
                                                <a>
                                                    <span className={styles.NavBarMenuDropText + ' block py-2 px-4 font-normal text-sm hover:border-t hover:border-b'}>
                                                        Check List
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar