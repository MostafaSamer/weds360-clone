import styles from "./pagination.module.scss"

function Pagination({ PageNumbers, selected, changePage }) {
    return (
        <ul className="w-9/12 list-none flex justify-center mx-auto mb-10 mt-16 lg:mt-5">
            
            <li  onClick={() => { selected != 1 && changePage(selected - 1) }} className="previous disabled">
                <a className="p-2 m-1 lg:m-2 rounded cursor-pointer shadow-md hover:shadow-lg" tabIndex="0" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">Previous</a>
            </li>
            
            {Array.from(Array(PageNumbers).keys())
            .map(el => el+1)
            .filter((el) => {
                return (
                    el == 1 ||
                    el == selected ||
                    el == (selected-1) ||
                    el == (selected+1) ||
                    el == PageNumbers
                )
            })
            .map((el, index, arr) => {
                return (
                    <>
                        <li onClick={() => { changePage(el) }}>
                            <a role="button" className={"p-2 m-1 lg:m-2 rounded cursor-pointer shadow-md hover:shadow-lg " + (selected === el? styles.SelectedPage : '')} tabIndex="0" aria-label={"Page " + el}>{el}</a>
                        </li>
                        {((el == 1 && selected - 1 > 2) ||
                         (el - selected == 1 && PageNumbers - el > 1)) && <li className="break"><a role="button" tabindex="0">...</a></li>}
                    </>
                )
            })}
            

            <li  onClick={() => { selected != PageNumbers && changePage(selected + 1) }} className="next">
                <a className="p-2 m-1 lg:m-2 rounded cursor-pointer shadow-md hover:shadow-lg" tabIndex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">Next</a>
            </li>
        </ul>
    )
}

export default Pagination