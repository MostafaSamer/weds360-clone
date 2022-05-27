import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
import PhotoSearch from "../components/photosearch/photosearch";
import TreeView from "../components/treeview/treeview";

function Category() {

    const { id } = useParams();

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "All Categories", state: "https://weds360.com/" },

                    ]} />

                    {/* {id && <PhotoSearch category={photos}/>} */}
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default Category;