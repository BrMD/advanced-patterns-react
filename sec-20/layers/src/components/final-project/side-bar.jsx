import styled from "styled-components";
import { Layers } from "../layers/start";
import { Logo } from "./logo";
import { Inline } from "../inline-pattern/start";
import { Pad } from "../pad-pattern/start";

const Item = styled(Inline).attrs(() => ({
  as: Pad,
  gutter: "l",
  padding: ["m", "l"],
  align: "center",
}))`
  border-inline-start: 0.25rem solid transparent;
  ${(props) =>
    props.active && "border-inline-start-color:#324972;background: #1f29371c"}
`;

const SideMenu = styled(Layers).attrs(() => ({
  as: "ul",
  gutter: "",
}))`
  list-style-type: none;
  padding-left: 0;
`;

const SideBar = () => {
  return (
    <Pad as="nav" padding={["l", "none"]}>
      <SideMenu>
        <Item active>
          <Logo square inverse size="1rem" />
          Profile
        </Item>
        <Item>
          <Logo square inverse size="1rem" />
          Settings
        </Item>
        <Item>
          <Logo inverse size="1rem" />
          Authentication
        </Item>
        <Item>
          <Logo inverse size="1rem" />
          Email
        </Item>
        <Item>
          <Logo square inverse size="1rem" />
          Plans
        </Item>
        <Item>
          <Logo inverse size="1rem" />
          APIs
        </Item>
      </SideMenu>
    </Pad>
  );
};
export default SideBar;
