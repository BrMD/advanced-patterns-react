import "./App.css";
import DisplayMouseMovement from "./components/hoc/displayMouseMovement";
import withMousemove from "./components/hoc/withMousePosition";
import MousePosition from "./components/position";
import { DisplayMousePos } from "./components/render-props/display-mouse";
import { RenderMousePosition } from "./components/render-props/render-mouse";
function App() {
  const Wrapper = withMousemove(DisplayMouseMovement);
  return (
    <div className="container">
      <RenderMousePosition>
        {({ x, y }) => <DisplayMousePos x={x} y={y} />}
      </RenderMousePosition>
    </div>
  );
}

export default App;
