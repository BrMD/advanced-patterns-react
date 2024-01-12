import { RedButton, SmallRedButton } from "./components/partial";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      <RedButton text="red button" />
      <SmallRedButton text="red button" />
    </>
  );
}

export default App;
