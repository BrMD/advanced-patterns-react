import { styled } from "styled-components";
import { Layers } from "../layers/start";
import { InlineBundle } from "../inline-bundle/start";
import { Pad } from "../pad-pattern/start";
import { spaceSchema } from "../common/spaces";
import { Button } from "./components";

export const Cover = styled.div.attrs(({ children, top, bottom }) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
})`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  min-block-size: ${(props) => props.minHeight ?? "100vh"};
  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
      ? "auto 1fr"
      : bottom
      ? "1fr auto"
      : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;

const Top = () => {
  return (
    <InlineBundle gutter="xl" justify="end">
      <span>Home</span>
      <span>Products</span>
      <span>Blog</span>
      <span>Contact Us</span>
    </InlineBundle>
  );
};

const Bottom = () => {
  return (
    <InlineBundle gutter="xl" justify="center">
      <a href="/#">Terms and Rules</a>
    </InlineBundle>
  );
};

const HeroPage = () => {
  return (
    <Cover as={Pad} padding="l" top={<Top />} bottom={<Bottom />}>
      <Layers gutter="l">
        <h1>CodeLicks</h1>
        <span>Learn and grow</span>
        <InlineBundle gutter="l">
          <Button primary>Enroll now</Button>
          <Button>Register</Button>
        </InlineBundle>
      </Layers>
    </Cover>
  );
};

export default HeroPage;
