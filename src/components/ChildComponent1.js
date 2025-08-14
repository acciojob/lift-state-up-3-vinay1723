import React from "react";
export default function ChildComponent1({ setOption }) {
  return (
    <div id="child-1">
      <h2>Child Component 1</h2>
      <button onClick={(e) => setOption(e.target.textContent)}>Option 1</button>
    </div>
  );
}
