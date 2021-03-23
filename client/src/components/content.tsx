import React, { ReactElement } from "react";
import styled from "styled-components";
import avatar from "../assets/images/navbar/pngegg.png";
import thumbs_up from "../assets/images/contents/thumbs-up-regular.svg";
import thumbs_down from "../assets/images/contents/thumbs-down-regular.svg";
import like from "../assets/images/contents/heart-regular.svg";
import picture from "../assets/images/contents/meme1.jpeg";

export default function Content(): ReactElement {
  return (
    <MemeContent>
      <Meme>
        <DescriptionBox>
          <Description>무한도전 짤 생성기</Description>
          <LikesBox>
            <Like src={thumbs_up} />
            <LikesCount>x 59 people like this Meme</LikesCount>
          </LikesBox>
          <Icons>
            <ThumbsUp src={thumbs_up} />
            <ThumbsDown src={thumbs_down} />
            <Like src={like} />
          </Icons>
        </DescriptionBox>
        <ContentBox>
          <MemeImg src={picture} />
        </ContentBox>
        <LogicBox>
          <Input placeholder="type here..." />
          <DownloadBtn>Get</DownloadBtn>
        </LogicBox>
      </Meme>
    </MemeContent>
  );
}
const MemeContent = styled.div`
  border: 1px solid red;
`;
const Meme = styled.div`
  border: 0.3rem solid black;
  width: 48rem;
  height: 30rem;
  margin-left: 20%;
  margin-top: 5rem;
  position: relative;
`;
const DescriptionBox = styled.div`
  border-bottom: 1px solid black;
  height: 2.5rem;
  display: flex;
  align-items: flex-end;
`;
const ContentBox = styled.div`
  margin-left: 4rem;
  //margin-left: 4rem;
`;
const MemeImg = styled.img`
  width: 40rem;
  height: 27rem;
`;
const LogicBox = styled.div`
  position: absolute;
  margin-top: -4rem;
  display: flex;
`;
const Input = styled.input`
  width: 39.3rem;
  height: 3.3rem;
  margin-left: 4rem;
  font-size: 1.5rem;
  background-color: white;
  text-align: center;
`;
const Description = styled.div`
  font-size: 1.5rem;
  margin-left: 2%;
`;

const Icons = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  margin-left: 5rem;
`;
const ThumbsUp = styled.img`
  width: 2rem;
`;
const ThumbsDown = styled.img`
  width: 2rem;
`;
const Like = styled.img`
  width: 2rem;
`;
const LikesBox = styled.div`
  width: 15rem;
  display: flex;
  align-items: flex-end;
  margin-left: 3rem;
`;
const LikesCount = styled.div``;
const DownloadBtn = styled.button`
  height: 3.7rem;
  width: 4rem;
`;
