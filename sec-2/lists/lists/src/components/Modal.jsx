import { useState } from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #0000004b;
  width: 100%;
  height: 100%;
`;
const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: #fff;
  width: 50%;
`;

export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};
