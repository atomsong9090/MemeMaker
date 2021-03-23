import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import home from "../assets/images/navbar/home-solid.svg";
import heart from "../assets/images/navbar/heart-regular.svg";
import avatar from "../assets/images/navbar/pngegg.png";

export default function NavBar(): ReactElement {
  return (
    <>
      <Main>
        <Title>Meme Maker</Title>
        <Info>
          <Icons>
            <Home src={home} />
            <Heart src={heart} />
            <Mypage>My</Mypage>
          </Icons>
        </Info>
        <UserInfo>
          <Avatar src={avatar} />
          <UserName>Jerry</UserName>
          <LoginHandler>logout</LoginHandler>
        </UserInfo>
      </Main>
    </>
  );
}

const Main = styled.div`
  border-bottom: 0.15rem solid grey;
  height: 5rem;
  display: flex;
`;

const Title = styled.h2`
  height: 100%;
  font-size: 2rem;
  display: flex;
  align-items: flex-end;
  margin: 0rem 20%;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Icons = styled.div`
  width: 7rem;
  display: flex;
  justify-content: space-between;
`;
const Home = styled.img`
  width: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const Heart = styled.img`
  width: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const Mypage = styled.span`
  font-size: 1.8rem;
  &:hover {
    cursor: pointer;
  }
`;
const UserInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 2%;
`;
const Avatar = styled.img`
  width: 2.5rem;
  border-radius: 50%;
  border: 2px solid black;
`;
const UserName = styled.div`
  font-size: 1.5rem;
  margin-left: 2%;
`;

const LoginHandler = styled.button`
  border: 0px;
  background-color: white;
`;
