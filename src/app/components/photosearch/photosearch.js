import styles from "./photosearch.module.scss"

import PhotoGrid from "../photogrid/photogrid"
import PhotoCard from "../photocard/photocard"
import BtnPrimary from "../btn-primary/btn-primary"
import Pagination from "../pagination/pagination"
import { useState } from "react"

function PhotoSearch() {

    const [currentPage, SetCurrentPage] = useState(1);

    const onSearchClick = (e) => {
        console.log(e)
    }

    const onClearClick = (e) => {
        console.log(e)
    }

    const onChangePage = (pageNumber) => {
        console.log(pageNumber);
        SetCurrentPage(pageNumber)

    }

    return (
        <div className="lg:flex lg:flex-row lg:w-11/12 lg:mx-auto">
            <div className="lg:w-3/12 mx-7">
                <div className="flex flex-col h-auto w-full flex-shrink-0 justify-end pt-5 pb-4 ">
                    <nav className="mt-5 flex-1 h-auto">
                        <div>
                            <form>
                                <div className="mt-1 mb-4 flex flex-col rounded-md shadow-sm mt-3">
                                    <div className={styles.searchBar + " flex items-stretch flex-grow focus-within:z-10"}>
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className={styles.searchBarIcon + " h-5 w-5"}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="text" name="email" id="email" className={styles.searchBarInput + " border block w-full pl-10 sm:text-sm border-gray-300 rounded-lg shadow-sm hover:shadow-md"} placeholder="Search" value="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="flex lg:flex-col flex-row gap-3">
                                <div className="flex justify-center mt-3 w-full"><BtnPrimary text="Search" onClick={onSearchClick} /></div>
                                <div className="flex justify-center mt-3 w-full"><BtnPrimary text="Clear Search" onClick={onClearClick} /></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="lg:w-9/12">
                <section className={styles.gridSection}>
                    <PhotoGrid>
                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                        <PhotoCard />
                    </PhotoGrid>

                    <Pagination PageNumbers={67} selected={currentPage} changePage={onChangePage} />
                </section>
            </div>
        </div>
    )
}

export default PhotoSearch