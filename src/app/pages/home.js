import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
import PhotoSearch from "../components/photosearch/photosearch";
import TreeView from "../components/treeview/treeview";

function Home() {
    return (
        <div>
            <div>
                <div>
                    <TreeView element={[
                        { name: "All", state: "https://weds360.com/" }
                    ]} />

                    <PhotoSearch />
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default Home;