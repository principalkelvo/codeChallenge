import React, { useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poemForm, setPoemForm] = useState(false)

  function handleClick(e) {
    setPoemForm((poemForm) => !poemForm);
    console.log("handleClick: ")
  }
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick} >Show/hide new poem form</button>
        {poemForm ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;
