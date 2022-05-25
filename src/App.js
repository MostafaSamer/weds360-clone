import React from 'react';
import './App.scss';
import '../src/assets/styles/global.scss'

import Navbar from "./app/components/navbar/navbar"
import TreeView from "./app/components/treeview/treeview"
import PhotoSearch from './app/components/photosearch/photosearch';
import FeaturedVendors from './app/components/featuredvendors/featuredvendors';
import Footer from "./app/components/footer/footer"

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div>
          <div>
            <div>
              <TreeView element={[
                {name: "Galary", state: "https://weds360.com/en/moreWeddings/"},
                {name: "Wedding Ideas", state: "#"}
              ]} />

              <PhotoSearch />
            </div>
            <FeaturedVendors />
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
