import React from 'react';
import './App.scss';
import '../src/assets/styles/global.scss'

import Navbar from "./app/components/navbar/navbar"
import PhotoCard from "./app/components/photocard/photocard"
// import BtnPrimary from "./app/components/btn-primary/btn-primary"
import Footer from "./app/components/footer/footer"

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        {/* <BtnPrimary text="Click Me!" onClick={() => { alert("OK") }} /> */}
        <PhotoCard />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
