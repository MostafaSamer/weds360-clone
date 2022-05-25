import styles from "./pagination.module.scss"

function Pagination({ PageNumbers, selected, changePage }) {
    return (
        <ul className="w-9/12 list-none flex justify-center mx-auto mb-10 mt-16 lg:mt-5">
            
            <li className="previous disabled">
                <a className="p-2 m-1 lg:m-2 rounded cursor-pointer shadow-md hover:shadow-lg" tabIndex="0" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">Previous</a>
            </li>
            
            {Array.from(Array(PageNumbers).keys())
            .map(el => el+1)
            .map((el, index) => {
                return (
                    <li key={index} onClick={() => { changePage(el) }}>
                        <a role="button" className={"p-2 m-1 lg:m-2 rounded cursor-pointer shadow-md hover:shadow-lg " + (selected === el? styles.SelectedPage : '')} tabIndex="0" aria-label={"Page " + el}>{el}</a>
                    </li>
                )
            })}
            

            <li className="next">
                <a className="p-2 m-1 lg:m-2 rounded cursor-pointer shadow-md hover:shadow-lg" tabIndex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">Next</a>
            </li>
        </ul>
    )
}

export default Pagination