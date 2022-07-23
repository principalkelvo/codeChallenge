import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      <Poem poems={poems}/>
    </div>
  );
}

export default PoemsContainer;
