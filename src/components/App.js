import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import "./../styles/App.css";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  function handleSelectedOption(Option) {
    setSelectedOption(Option);
  }
  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <ChildComponent1 setOption={handleSelectedOption} />
      <ChildComponent2 setOption={handleSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
