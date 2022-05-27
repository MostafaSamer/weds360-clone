import { useState } from 'react';
import styles from './navbar.module.scss';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Navbar() {
    const [dropdownStyle, setDropdownStyle] = useState({ display: 'none' });
    const [mobileNavStyle, setMobileNavStyle] = useState({ display: 'none' });

    const ChangeMenuStyle = () => {
        setMobileNavStyle(
            mobileNavStyle.display == 'none' ?
                { display: 'block' } :
                { display: 'none' }
        )
    }

    return (
        <div className='sticky top-0 left-0 right-0 pb-8' style={{ "zIndex": 1000000 }}>
            <div>
                <nav className={styles.NavbarNav + ' px-2 sm:px-4 py-2.5 rounded'}>
                    <div className='container flex flex-wrap items-center mx-auto lg:w-11/12'>
                        <a className='flex' href="/en">
                            <span className='self-center text-lg font-semibold whitespace-nowrap md:mt-5'>
                                <img className="h-6 xl:h-16 w-auto 2xl:mr-20" src="https://weds360.com/logo.png" alt="Workflow" style={{ marginLeft: "10px" }} />
                            </span>
                        </a>
                        <div className='flex items-center md:order-3 mx-auto'>

                            {/* Search Mobile */}
                            {/* <div className='block lg:hidden w-1/3 md:mr-0 ml-1' style={{width: "400px"}}>
                                <div className='hidden sm:flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'></div>
                                <input type="text" id="email-adress-icon" className={styles.NavBarInput + ' block p-2 pl-10 w-11/12 rounded-lg border sm:text-sm '} placeholder="Search" />
                            </div> */}
                            <button className='flex text-sm rounded-full md:mr-0 disabled' id='user-menu-button'>
                                <span className='sr-only'>Open user menu</span>
                                <a href="/en/Login">
                                    <i className="fas fa fa-user-plus step11"></i>
                                </a>

                                <i className='mx-1'></i>
                                <button className={styles.NavbarLanguage + ' ml-7 absolute flex items-center mx-2 text-sm rounded-full text-gray-600 hover:text-gray-500'} style={{ color: "rgb(2, 77, 76)" }}>
                                    <i className="mx-1"></i>
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
                            <div className={styles.SearchBar + ' hidden mr-3 md:mr-0 lg:block'} style={{ width: "300px" }}>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className={styles.searchBarIcon + ' w-5 h-5'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" autoComplete="off" id="email-adress-icon" className={styles.searchBarInput + ' block pl-10 py-2 pr-2 w-10/12 bg-gray-50 rounded-lg border sm:text-sm step10'} placeholder="Search" />
                            </div>
                            <button type="button" className={styles.NavbarColapseMenu + ' inline-flex items-center p-2 text-sm rounded-lg md:hidden '} aria-controls="mobile-menu-3" aria-expanded="false" onClick={ChangeMenuStyle}>
                                <span className="sr-only">Open main menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="w-6 h-6 ml-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>

                        <div className={styles.NAvBarMenu + ' ' + styles.NAvBarMenuWeb + ' justify-between items-center w-full md:flex md:w-auto md:order-1'}>
                            <a className='en' href='https://weds360.com/en/photos'>
                                <div className='flex flex-col mt-4 md:flex-row md:space-x-2 xl:space-x-2 md:mt-2 md:text-sm md:font-medium mx-3 mb-2 '>
                                    <button
                                        className={styles.NavBarMenuButton + ' flex mr-3 text-sm rounded-full md:mr-0'}>360 Planner</button>
                                </div>
                            </a>
                            <a className='en' href='https://weds360.com/en/photos'>
                                <div className='flex flex-col mt-4 md:flex-row md:space-x-2 xl:space-x-2 md:mt-2 md:text-sm md:font-medium mx-3 mb-2 '>
                                    <button
                                        className={styles.NavBarMenuButton + ' flex mr-3 text-sm rounded-full md:mr-0'}
                                        onMouseEnter={() => { setDropdownStyle({ display: 'block' }); }}
                                        onMouseLeave={() => { setDropdownStyle({ display: 'none' }); }}>Dropdown here</button>
                                    <div className=' z-50 my-0 text-base list-none bg-white justify-center items-center'>
                                        <ul
                                            onMouseEnter={() => { setDropdownStyle({ display: 'block' }); }}
                                            onMouseLeave={() => { setDropdownStyle({ display: 'none' }); }}
                                            className={styles.NavBarMenuDrop + ' z-10 absolute'} style={dropdownStyle}>
                                            <li><a><span className={styles.NavBarMenuDropText + ' block py-2 px-4 font-normal text-sm hover:border-t hover:border-b'}>Check List</span></a></li>
                                            <li><a><span className={styles.NavBarMenuDropText + ' block py-2 px-4 font-normal text-sm hover:border-t hover:border-b'}>Check List</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <a className='en' href='https://weds360.com/en/photos'>
                                <div className='flex flex-col mt-4 md:flex-row md:space-x-2 xl:space-x-2 md:mt-2 md:text-sm md:font-medium mx-3 mb-2 '>
                                    <button
                                        className={styles.NavBarMenuButton + ' flex mr-3 text-sm rounded-full md:mr-0'}>360 Planner</button>
                                </div>
                            </a>
                            <a className='en' href='https://weds360.com/en/photos'>
                                <div className='flex flex-col mt-4 md:flex-row md:space-x-2 xl:space-x-2 md:mt-2 md:text-sm md:font-medium mx-3 mb-2 '>
                                    <button
                                        className={styles.NavBarMenuButton + ' flex mr-3 text-sm rounded-full md:mr-0'}>360 Planner</button>
                                </div>
                            </a>
                            <a className='en' href='https://weds360.com/en/photos'>
                                <div className='flex flex-col mt-4 md:flex-row md:space-x-2 xl:space-x-2 md:mt-2 md:text-sm md:font-medium mx-3 mb-2 '>
                                    <button
                                        className={styles.NavBarMenuButton + ' flex mr-3 text-sm rounded-full md:mr-0'}>360 Planner</button>
                                </div>
                            </a>
                            <a className='en' href='https://weds360.com/en/photos'>
                                <div className='flex flex-col mt-4 md:flex-row md:space-x-2 xl:space-x-2 md:mt-2 md:text-sm md:font-medium mx-3 mb-2 '>
                                    <button
                                        className={styles.NavBarMenuButton + ' flex mr-3 text-sm rounded-full md:mr-0'}>360 Planner</button>
                                </div>
                            </a>
                        </div>

                        <div className={styles.NAvBarMenu + ' ' + styles.NAvBarMenuMobile + ' justify-between items-center w-full md:flex md:w-auto md:order-1'} style={mobileNavStyle}>
                            <Accordion allowZeroExpanded={true}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            360 Planner
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Dropdown Here
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>CheckList</p>
                                    </AccordionItemPanel>
                                    <AccordionItemPanel>
                                        <p>CheckList</p>
                                    </AccordionItemPanel>
                                    <AccordionItemPanel>
                                        <p>CheckList</p>
                                    </AccordionItemPanel>
                                    <AccordionItemPanel>
                                        <p>CheckList</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            360 Planner
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            360 Planner
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            360 Planner
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            360 Planner
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar