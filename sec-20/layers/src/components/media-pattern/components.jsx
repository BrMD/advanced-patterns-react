import { Pad } from "../pad-pattern/start";
import { Center } from "../center/start";

export const Description = (props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);
