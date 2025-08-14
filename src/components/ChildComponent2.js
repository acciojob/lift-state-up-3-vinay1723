import React from "react";

export default function ChildComponent2({ setOption }) {
  return (
    <div id="child-2">
      <h2>Child Component 2</h2>
      <button onClick={(e) => setOption(e.target.textContent)}>Option 2</button>
    </div>
  );
}
