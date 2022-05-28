import { useParams } from "react-router-dom";
import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
import PhotoDetails from "../components/photodetails/photodetails";
import RelatedPhoto from "../components/relatedphoto/relatedphoto";
import TreeView from "../components/treeview/treeview";

import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesFetch, getImagesFetch } from '../../actions';
import { useEffect } from "react";

function SingilePhoto() {

    const dispatch = useDispatch();
    let images = useSelector(state => state.imageReducer.images);
    let categories = useSelector(state => state.categoriesReducer.categories);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getImagesFetch());
        dispatch(getCategoriesFetch());
    }, [id])

    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "All Categories", state: "/" },
                        { name: categories[0]?.name, state: categories[0]?.state },
                        { name: images[0]?.name, state: "#" }
                    ]} />

                    <div className="container px-5 mx-auto">
                        <div className="lg:w-4/5 py-5 mx-auto flex flex-wrap">
                        {images.length > 0 && <PhotoDetails data={images[0]}/>}
                            <RelatedPhoto />
                        </div>
                    </div>
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default SingilePhoto;