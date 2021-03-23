import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBar from "../components/navBar";

export default function Main(): ReactElement {
  return (
    <Page>
      <NavBar />
    </Page>
  );
}

const Page = styled.div``;
