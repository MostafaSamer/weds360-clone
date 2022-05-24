import React from 'react';
import './App.scss';
import '../src/assets/styles/global.scss'

import BtnPrimary from "./app/components/btn-primary/btn-primary"
import Footer from "./app/components/footer/footer"

function App() {
  return (
    <div className="App">
      Mostafa Samir
      <div>
        {/* <BtnPrimary text="Click Me!" onClick={() => { alert("OK") }} /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
