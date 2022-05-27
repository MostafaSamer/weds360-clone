import { useEffect, useState } from "react";
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

    const [imagesCat, SetImagesCat] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getImagesFetch());
        SetImagesCat(
            images
            .filter(image => image.category == id)
        )
    }, [id])

    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "All Categories", state: "https://weds360.com/" },

                    ]} />

                    {id && <PhotoSearch data={imagesCat}/>}
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default Category;