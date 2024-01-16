import { useState } from "react";
import { HeavyComponent } from "./components/heavy-component";
import { useDeferredValue } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const deferredKeyboard = useDeferredValue(keyword);
  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HeavyComponent keyword={deferredKeyboard} />
    </>
  );
}

export default App;
