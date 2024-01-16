import "./App.css";
import { Child } from "./child";
import { ErrorBoundry } from "./error-boundries";

function App() {
  return (
    <ErrorBoundry fallback={<h2>Error in Child Level</h2>}>
      <h1>Parent Component</h1>
      <Child />
    </ErrorBoundry>
  );
}

export default App;
