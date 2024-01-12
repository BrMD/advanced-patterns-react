import { useState } from "react";
import { ControlledForm } from "./components/controlled-form";
import { ControlledModal } from "./components/controlled-modal";
import { ControlledFlow } from "./components/controlled-flow";
import { UncontrolledForm } from "./components/uncontrolled-form";
import { UncontrolledFlow } from "./components/uncontrolled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1 Enter your name</h1>
      <button onClick={() => goNext({ name: "MyName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => (
  <>
    <h1>Step #2 Enter your age</h1>
    <button onClick={() => goNext({ name: 23 })}>Next</button>
  </>
);
const StepThree = ({ goNext }) => (
  <>
    <h1>Step #3 Enter your country</h1>
    <button onClick={() => goNext({ country: "Brazil pai" })}>Next</button>
  </>
);
function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };
  return (
    <>
      <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledFlow>
    </>
  );
}

export default App;
