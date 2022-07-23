import React, { useState,useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poemForm, setPoemForm] = useState(false)
  const [poems, setPoems] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetch("http://localhost:8004/poems")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setPoems(data);
      });
  }, []);

  function handleClick(e) {
    setPoemForm((poemForm) => !poemForm);
    console.log("handleClick: ")
  }
  function onAddPoem(newPoem) {
    setPoems([ ...poems,newPoem]);
    console.log("new poems :", newPoem);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick} >Show/hide new poem form</button>
        {poemForm ? <NewPoemForm onAddPoem={onAddPoem}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
