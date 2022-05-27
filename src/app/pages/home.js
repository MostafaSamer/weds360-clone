import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
import PhotoSearch from "../components/photosearch/photosearch";
import TreeView from "../components/treeview/treeview";

import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesFetch } from '../../actions'
import { useEffect } from "react";

function Home() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoriesReducer.categories);

    useEffect(() => {
        dispatch(getCategoriesFetch());
    }, [])

    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "All Categories", state: "https://weds360.com/" }
                    ]} />

                    <PhotoSearch data={categories}/>
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default Home;