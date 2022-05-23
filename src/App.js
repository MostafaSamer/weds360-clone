import React from 'react';
import './App.scss';
import '../src/assets/styles/global.scss'

import BtnPrimary from "./app/components/btn-primary/btn-primary"

function App() {
  return (
    <div className="App">
      Mostafa Samir
      <div style={{width: "33%"}}>
        <BtnPrimary text="Click Me!" onClick={() => { alert("OK") }} />
      </div>
    </div>
  );
}

export default App;
