import MenuBasis from "./menu";
import styled from "styled-components";
import { spaceSchema } from "../common/spaces";

const justifySchema = {
    start:"flex-start",
    end:"flex-end",
    center:"flex-center"
}
const alignSchema = {
    start:"start",
    end:"end",
    center:"center"
}


export const InlineBundle = styled.div`
    --gutter: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
    display: flex;
    flex-wrap: wrap;
    gap: var(--gutter);
    justify-content: ${(props) => justifySchema[props.justify] ?? justifySchema.start};
    align-items: ${(props) => alignSchema[props.align] ?? alignSchema.center};
`

const Menu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter="l" align="center" justify="end">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default Menu;
