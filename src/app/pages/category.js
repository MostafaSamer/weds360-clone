import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
import PhotoSearch from "../components/photosearch/photosearch";
import TreeView from "../components/treeview/treeview";

import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesFetch, getImagesFetch } from '../../actions';

function Category() {

    const dispatch = useDispatch();
    let images = useSelector(state => state.imageReducer.images);
    let categories = useSelector(state => state.categoriesReducer.categories);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getCategoriesFetch());
        categories = categories
        .filter(cat => cat.id == id);


        dispatch(getImagesFetch());
        // console.log({images})
        // images = images
        // .filter(image => image.category == id);
        // console.log({images})
    }, [])

    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "All Categories", state: "/" },
                        { name: categories[0]?.name, state: "#" },
                    ]} />

                    <PhotoSearch data={images} />
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default Category;