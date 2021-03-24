import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import git from "../assets/images/navbar/github-brands.svg";
import heart from "../assets/images/navbar/heart-regular.svg";
import avatar from "../assets/images/navbar/pngegg.png";

export default function NavBar(): ReactElement {
  return (
    <>
      <Main>
        <Title>Meme Maker</Title>
        <Info>
          <GitLink href="https://github.com/atomsong9090">
            <Git src={git} />
          </GitLink>
        </Info>
        <GitLink href="https://github.com/atomsong9090">버그제보 / 깃허브</GitLink>
      </Main>
    </>
  );
}

const Main = styled.div`
  border-bottom: 0.15rem solid grey;
  height: 3rem;
  display: flex;
  background-color: white;
`;
const Title = styled.h2`
  height: 100%;
  font-size: 2rem;
  display: flex;
  align-items: flex-end;
  margin: 0rem 20rem;
`;
const Info = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Git = styled.img`
  width: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const GitLink = styled.a`
  display: flex;
  align-items: flex-end;
  margin-left: 0.5rem;
  color: black;
  &:link {
    text-decoration: none;
  }
`;
