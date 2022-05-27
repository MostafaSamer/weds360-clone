import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
import PhotoSearch from "../components/photosearch/photosearch";
import TreeView from "../components/treeview/treeview";

import { useDispatch, useSelector } from 'react-redux';
import { getImagesFetch } from '../../actions';

function Category() {

    const dispatch = useDispatch();
    const images = useSelector(state => state.imageReducer.images);
    console.log({images})

    const { id } = useParams();

    useEffect(() => {
        dispatch(getImagesFetch());
    }, [id])

    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "All Categories", state: "https://weds360.com/" },

                    ]} />

                    {id && <PhotoSearch data={images}/>}
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default Category;