import { styled } from "styled-components";
import { Inline } from "../inline-pattern/start";
import { Pad } from "../pad-pattern/start";

const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  border: ${(props) =>
    props.primary ? "1px solid transparent" : "1px solid #0f1623"};
  background: ${(props) => (props.primary ? "#0f1623" : "white")};
  color: ${(props) => (props.primary ? "white" : "#0f1623")};
`;

const Buttons = () => {
  return (
    <Inline as={Pad} padding="l" gutter="l" justify="end">
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </Inline>
  );
};

export default Buttons;
