// import styles from "./photogrid.module.scss"

function PhotoGrid({ children }) {
    console.log(children)
    return (
        <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 ">
                {children.length > 0 && children.map((el, index) => {
                    return (
                        <div key={index} className="p-4 md:w-1/3 hover:pointer">
                            {el}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PhotoGrid;