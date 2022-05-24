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
                            <button className='flex text-sm rounded-full md:mr-0 disabled'>
                                {/* span */}
                                {/* a */}
                                {/* i */}
                                {/* button */}
                            </button>
                            {/* div */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar