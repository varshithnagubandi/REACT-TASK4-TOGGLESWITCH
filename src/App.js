import React, { useState } from "react";
import "./App.css";

function App() {
  const [toggle, Settoggle] = useState(false);
  const handleinput = () => {
    Settoggle(!toggle);
  };
  return (
    <div>
      <div>
        <label>
          <input type="checkbox" onChange={handleinput} />
        </label>
      </div>
      <div>{toggle ? <h1>ON</h1> : <h1>OFF</h1>}</div>
    </div>
  );
}

export default App;
