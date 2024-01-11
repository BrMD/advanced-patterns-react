import { styled } from "styled-components";

const Contaier = styled.div`
  display: flex;
`;
const Panel = styled.div`
  flex: ${(p) => p.flex};
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Contaier>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Contaier>
  );
};
