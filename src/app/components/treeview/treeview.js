import styles from "./treeview.module.scss"

function TreeView({ element }) {
    return (
        <div className="lg:w-9/12 lg:mx-auto pt-5 px-10 lg:pl-0">
            <nav className="MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root css-o3d33y" aria-label="breadcrumb">
                <ol className="MuiBreadcrumbs-ol css-nhb8h9">
                    {element.map((el, index) => {
                        return (
                            <>
                                {index != element.length-1 ?
                                    <>
                                        <li className="MuiBreadcrumbs-li">
                                            <a href={el.state} className={styles.TreeElementAnchor + " font-bold text-lg"}>{el.name}</a>
                                        </li>
                                        <li aria-hidden="true" className="MuiBreadcrumbs-separator css-3mf706">›</li>
                                    </> : 
                                    <li className="MuiBreadcrumbs-li">
                                        <p className={styles.TreeElementPara + " MuiTypography-root MuiTypography-body1 css-9l3uo3"}>{el.name}</p>
                                    </li>
                                }
                            </>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}

export default TreeView;