import React from "react";
import styled from "styled-components";
import { Pad } from "../pad-pattern/start";
import { Split } from "../split/start";
import { Center } from "../center/start";
import { Layers } from "../layers/start";
import RightSide from "./right-side";
import SideBar from "./side-bar";

const ContentArea = styled(Pad).attrs(() => ({ padding: "xl" }))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const SettingsHeader = styled.div`
  color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;

const Content = () => {
  return (
    <ContentArea>
      <Center as={Layers} gutter="l" maxWidth="105rem">
        <SettingsHeader>
          <h1>Profile Settings</h1>
        </SettingsHeader>
        <SettingsPane>
          <SideBar />
          <RightSide />
        </SettingsPane>
      </Center>
    </ContentArea>
  );
};

export default Content;
