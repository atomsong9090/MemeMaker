import React, { ReactElement, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import picture1 from "../assets/images/contents/페페1.jpeg";
import picture2 from "../assets/images/contents/페페2.png";
import picture3 from "../assets/images/contents/페페3.jpeg";
import picture4 from "../assets/images/contents/페페4.jpeg";
import picture5 from "../assets/images/contents/페페5.jpeg";
import picture6 from "../assets/images/contents/페페6.png";
import picture7 from "../assets/images/contents/페페7.jpeg";
import picture8 from "../assets/images/contents/페페8.jpeg";
import picture9 from "../assets/images/contents/페페9.jpeg";
import picture10 from "../assets/images/contents/페페10.png";
import picture11 from "../assets/images/contents/페페11.png";
import picture12 from "../assets/images/contents/페페12.jpeg";

export default function Content(): ReactElement {
  const [picture, setCurrentPic] = useState(picture12);
  const [text, setText] = useState("");
  const [font, setFont] = useState("굴림체");
  const [fontSize, setFontSize] = useState("50px");
  const [fontColor, setFontColor] = useState("white");
  const [refresh, setRefresh] = useState(true);
  const [x, setX] = useState(20);
  const [y, setY] = useState(450);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function selectMeme() {
    let meme: any = document.querySelector(".meme");
    let checkedMeme = meme.options[meme.selectedIndex].value;
    setCurrentPic(checkedMeme);
  }
  useEffect(() => {
    let content = document.querySelector(".canvas") as HTMLCanvasElement;
    let ctx: any = content.getContext("2d");
    function renderImg() {
      let img = new Image();
      img.src = picture;
      img.onload = function (e: any) {
        ctx.drawImage(img, 0, 0, 775, 480);
      };
    }
    renderImg();
    function writeText() {
      ctx.fillStyle = fontColor;
      ctx.strokeStyle = "white";
      ctx.font = `${fontSize} ${font}`;
      ctx.fillText(text, x, y);
      ctx.font = `1px ${font}`;
      ctx.strokeText(text, x, y);
    }
    writeText();
  }, [picture, text, font, fontSize, fontColor, x, y, refresh]);

  function writeText(option: string) {
    let content = document.querySelector(".canvas") as HTMLCanvasElement;
    let ctx: any = content.getContext("2d");
    if (option === "write") {
      ctx.fillStyle = fontColor;
      ctx.strokeStyle = "black";
      ctx.font = `${fontSize} ${font}`;
      ctx.fillText(text, x, y);
      ctx.strokeText(text, x, y);
    }
    if (option === "delete") {
      if (refresh) {
        setRefresh(false);
      }
      if (!refresh) {
        setRefresh(true);
      }
    }
  }
  function setXsection(e: any) {
    setX(e.target.value);
  }
  function setYsection(e: any) {
    setY(e.target.value);
  }
  function downloadImg() {
    let canvas: any = document.querySelector(".canvas");
    let el: any = document.querySelector(".download");
    let img = canvas.toDataURL("image/jpg");
    el.href = img;
  }

  function changeFont() {
    let font: any = document.querySelector(".font");
    let fontValue = font.options[font.selectedIndex].text;
    setFont(fontValue);
  }
  function changeFontSize() {
    let size: any = document.querySelector(".fontSize");
    let font_size = size.options[size.selectedIndex].text;
    setFontSize(font_size);
  }
  function changeFontColor() {
    let color: any = document.querySelector(".fontColor");
    let font_color = color.options[color.selectedIndex].text;
    setFontColor(font_color);
  }

  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <SelectBox>
        <MemeSelector name="job" className="meme" onChange={selectMeme}>
          <option value=""> 짤을 선택해주세요 </option>
          <option value={picture1}>[페페] 혼자있고싶어 저리가!@#$@%@#$% </option>
          <option value={picture2}>[페페] 넌 이 기분 몰라 ㅡ_ㅡ ㅠㅠㅠㅠㅠ</option>
          <option value={picture3}>[페페] 님 몇대 맞을래요? 1대? 괘씸죄 추가</option>
          <option value={picture4}>[페페] 나 안울어😭😭😭😭😭 안운다고😭😭</option>
          <option value={picture5}>[페페] 데헷 ^ ㅇ ^, 나 귀엽지??????? :) </option>
          <option value={picture6}>[페페] 아아... 그럴수도있죠... 용서할게요 :)</option>
          <option value={picture7}>[페페] 존버 155일차... 10년뒤에 봅시다.</option>
          <option value={picture8}>[페페] 추매???? 달려볼까....??? 🤔</option>
          <option value={picture9}>[페페] 풀매수????? 가즈아아아아아아아 !!!!</option>
          <option value={picture10}>[페페] 조금만 잘께요... 저 못일어나요 😪</option>
          <option value={picture11}>[페페] 흐으으으으음 :) 그렇군요??</option>
          <option value={picture12}>[페페] 따봉 하나 드릴게요 :) </option>
        </MemeSelector>
      </SelectBox>
      <Main className="main">
        <Canvas ref={canvasRef} className="canvas" width="770px" height="480px">
          현재 접속하신 브라우저는 canvas 이용이 불가합니다.
        </Canvas>
        <FontSet>
          <FontSetDescription>폰트 설정</FontSetDescription>
          <FontSetting name="font" className="font" onChange={changeFont}>
            <option value="굴림체">굴림체</option>
            <option value="궁서체">궁서체</option>
            <option value="Dotum">Dotum</option>
            <option value="Arial Black">Arial Black</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Papyrus">Papyrus</option>
          </FontSetting>
          <FontSetting name="font" className="fontSize" onChange={changeFontSize}>
            <option value="50px">50px</option>
            <option value="60px">60px</option>
            <option value="70px">70px</option>
            <option value="80px">80px</option>
            <option value="90px">90px</option>
            <option value="100px">100px</option>
          </FontSetting>
          <FontSetting name="font" className="fontColor" onChange={changeFontColor}>
            <option value="white">white</option>
            <option value="Black">Black</option>
            <option value="Aqua">Aqua</option>
            <option value="Chartreuse">Chartreuse</option>
            <option value="DarkBlue">DarkBlue</option>
            <option value="DeepPink">DeepPink</option>
            <option value="GreenYellow">GreenYellow</option>
            <option value="Yellow">Yellow</option>
            <option value="Red">Red</option>
            <option value="Lime">Lime</option>
          </FontSetting>
        </FontSet>
        <TextSet>
          <TextSetDescription>텍스트 위치</TextSetDescription>
          <ControllerBox>
            <RadioBox>
              <RadioDescription>가로</RadioDescription>
              <TextSetInput type="range" min="0" max="650" onChange={setXsection} />X : {x}
            </RadioBox>
            <RadioBox>
              <RadioDescription>세로</RadioDescription>
              <TextSetInput type="range" min="35" max="460" onChange={setYsection} />Y : {y}
            </RadioBox>
          </ControllerBox>
        </TextSet>
        <ContentController>
          <InputText onChange={textHandler} placeholder="type here.."></InputText>
          <TextBtn onClick={() => writeText("write")}>삽입하기</TextBtn>
          <TextBtn onClick={() => writeText("delete")}>뒤로가기</TextBtn>
          <DownloadBtn href="#" className="download" download onClick={downloadImg}>
            짤 다운로드 😌👍
          </DownloadBtn>
        </ContentController>
        <ServiceDescription>
          글자를 먼저 쓰고 텍스트 위치와 폰트를 조절하시면 사용이 편리합니다. 삽입하기 후 다운로드하세요
        </ServiceDescription>
      </Main>
    </>
  );
}

const Main = styled.div`
  border: 0.2rem solid skyblue;
  width: 48rem;
  height: 30rem;
  margin: auto;
  margin-top: 0.5rem;
  @media screen and (max-width: 776px) {
    width: 30.5rem;
    height: 19rem;
  }
  @media screen and (max-width: 480px) {
    width: 22rem;
    height: 13.7rem;
  }
`;

const Canvas = styled.canvas`
  @media screen and (max-width: 776px) {
    width: 30.5rem;
  }
  @media screen and (max-width: 480px) {
    width: 22rem;
  }
`;
const FontSet = styled.div`
  border: 0.3rem solid black;
  margin: 0.5rem 0rem;
  @media screen and (max-width: 776px) {
    width: 30rem;
  }
  @media screen and (max-width: 480px) {
    width: 21.5rem;
  }
`;
const FontSetDescription = styled.span`
  @media screen and (max-width: 776px) {
    display: none;
  }
`;
const TextSet = styled.div`
  display: flex;
  border: 0.3rem solid black;
  margin: 0.5rem 0rem;
  @media screen and (max-width: 776px) {
    width: 30rem;
    justify-content: start;
  }
  @media screen and (max-width: 480px) {
    width: 21.5rem;
  }
`;
const TextSetInput = styled.input`
  width: 13rem;
  height: 2rem;
  @media screen and (max-width: 776px) {
    width: 7rem;
    justify-content: start;
  }
`;
const TextSetDescription = styled.span`
  display: flex;
  align-items: center;
  @media screen and (max-width: 776px) {
    display: none;
  }
`;
const RadioBox = styled.span`
  border: 1px solid black;
  display: flex;
  align-items: center;
  width: 19rem;
  margin-left: 1.5rem;
  @media screen and (max-width: 776px) {
    width: 12.6rem;
  }
  @media screen and (max-width: 480px) {
    width: 10.6rem;
    margin-left: 0.1rem;
  }
`;
const RadioDescription = styled.span``;
const MemeSelector = styled.select`
  margin-top: 5px;
  width: 48.5rem;
  height: 3rem;
  font-size: 1.5rem;
  border: 1px solid skyblue;
  @media screen and (max-width: 776px) {
    width: 31.15rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
  }
`;
const ControllerBox = styled.div`
  display: flex;
`;
const FontSetting = styled.select`
  width: 12rem;
  height: 2rem;
  margin-left: 2rem;
  font-size: 1.2rem;
  @media screen and (max-width: 776px) {
    width: 8rem;
    margin-left: 1.5rem;
  }
`;
const InputText = styled.input`
  width: 20rem;
  height: 2rem;
  font-size: 1.3rem;
  @media screen and (max-width: 480px) {
    width: 10.5rem;
    height: 4rem;
  }
`;
const TextBtn = styled.button`
  width: 5rem;
  height: 2.35rem;
  font-size: 1.05rem;
  background-color: #d3d3e9;
  &:hover {
    background-color: grey;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 776px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 480px) {
    height: 4.5rem;
    &:hover {
      background-color: grey;
      color: white;
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;
const ContentController = styled.div`
  display: flex;
  @media screen and (max-width: 776px) {
    width: 30rem;
    border: 0.3rem solid black;
  }
  @media screen and (max-width: 480px) {
    width: 21.5rem;
    height: 4.3rem;
  }
`;
const DownloadBtn = styled.a`
  border: 0.15rem solid skyblue;
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background-color: #cce8fc;
  &:link {
    text-decoration: none;
  }
  &:hover {
    background-color: grey;
    color: white;

    cursor: pointer;
  }
  @media screen and (max-width: 776px) {
    font-size: 1rem;
  }
`;
const Background = styled.div`
  width: 100rem;
  height: 44rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;
const SelectBox = styled.div`
  display: flex;
  justify-content: center;
`;
const ServiceDescription = styled.div`
  margin-top: 1rem;
  width: 48rem;
  height: 2.5rem;
  font-size: 1.2rem;
  background-color: #979797;
  color: white;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 776px) {
    width: 30rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    width: 22rem;
  }
`;
