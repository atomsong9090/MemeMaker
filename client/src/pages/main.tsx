import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBar from "../components/navBar";
import Content from "../components/content";

export default function Main(): ReactElement {
  return (
    <Page>
      <NavBar />
      <Content />
    </Page>
  );
}

const Page = styled.div``;
