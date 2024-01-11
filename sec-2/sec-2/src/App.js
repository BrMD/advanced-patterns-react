import "./App.css";
import { SplitScreen } from "./components/Split-screen";

const LeftSideComp = ({ title }) => {
  return <h2>I m {title}!</h2>;
};
const RightSideComp = ({ title }) => {
  return <h2>I m {title}!</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title={"Left"} />
      <RightSideComp title={"Right"} />
    </SplitScreen>
  );
}

export default App;
