import React from "react";
import ClassClickCounter from "./components/ClassClickCounter";
import FunctionalClickCounter from "./components/FunctionalClickCounter";

function App() {
  return (
    <div>
      <FunctionalClickCounter initialValue={6} />
      <FunctionalClickCounter initialValue={10} />
      <FunctionalClickCounter initialValue={4} />
      <hr/>
      <ClassClickCounter initialValue={12} />
    </div>
  );
}

export default App;
