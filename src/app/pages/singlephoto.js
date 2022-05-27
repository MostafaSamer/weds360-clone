import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
import PhotoDetails from "../components/photodetails/photodetails";
import RelatedPhoto from "../components/relatedphoto/relatedphoto";
import TreeView from "../components/treeview/treeview";

function SingilePhoto() {
    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "Galary", state: "https://weds360.com/en/moreWeddings/" },
                        { name: "Wedding Ideas", state: "#" },
                        { name: "Irresistible appetizers’ corner", state: "#" }
                    ]} />

                    <div className="container px-5 mx-auto">
                        <div className="lg:w-4/5 py-5 mx-auto flex flex-wrap">
                            <PhotoDetails />
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