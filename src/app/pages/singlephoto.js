import FeaturedVendors from "../components/featuredvendors/featuredvendors";
import NewNotable from "../components/newandnotable/newandnotable";
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

                    {/* Photo Details */}
                    {/* Related Photo */}
                </div>
                <FeaturedVendors />
                <NewNotable />
            </div>
        </div>
    )
}

export default SingilePhoto;