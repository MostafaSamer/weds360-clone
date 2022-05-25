import React from 'react';
import './App.scss';
import '../src/assets/styles/global.scss'

import Navbar from "./app/components/navbar/navbar"
import PhotoCard from "./app/components/photocard/photocard"
import PhotoGrid from "./app/components/photogrid/photogrid"
import TreeView from "./app/components/treeview/treeview"
// import BtnPrimary from "./app/components/btn-primary/btn-primary"
import Footer from "./app/components/footer/footer"

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        {/* <BtnPrimary text="Click Me!" onClick={() => { alert("OK") }} /> */}
        {/* <PhotoGrid>
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </PhotoGrid> */}
        <div>
          <div>
            <div><TreeView element={[
              {name: "Galary", state: "https://weds360.com/en/moreWeddings/"},
              {name: "Wedding Ideas", state: "#"}
            ]} /></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
