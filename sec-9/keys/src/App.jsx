import { useState } from "react";
import "./App.css";
import Counter from "./counter";

function App() {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
      {changeShirts ? (
        <span>Shirts counts: </span>
      ) : (
        <span>Shoes counts: </span>
      )}
      <br />
      <input type="number" key={changeShirts ? "shirts" : "shoes"} />
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default App;
