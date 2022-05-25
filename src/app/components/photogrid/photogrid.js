// import styles from "./photogrid.module.scss"

function PhotoGrid({ children }) {
    return (
        <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 ">
                {children.map((el, index) => {
                    return (
                        <div key={index} className="p-4 md:w-1/3 hover:pointer">
                            <a href="https://weds360.com/en/photo/616cbb89f37e6443c8340e88/irresistible-appetizers%E2%80%99-corner">
                                {el}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PhotoGrid;