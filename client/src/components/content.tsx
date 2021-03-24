import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import thumbs_up from "../assets/images/contents/thumbs-up-regular.svg";
import thumbs_down from "../assets/images/contents/thumbs-down-regular.svg";
import like from "../assets/images/contents/heart-regular.svg";
import picture from "../assets/images/contents/meme1.jpeg";
import picture1 from "../assets/images/contents/페페1.jpeg";
import picture2 from "../assets/images/contents/페페2.png";
import picture3 from "../assets/images/contents/페페3.jpeg";
import picture4 from "../assets/images/contents/페페4.jpeg";

export default function Content(): ReactElement {
  const [meme, setMeme] = useState("picture1");
  const [text, setText] = useState("");
  const [font, setFont] = useState("궁서체");
  const [fontSize, setFontSize] = useState("50px");
  const [fontColor, setFontColor] = useState("Black");
  const [x, setX] = useState(20);
  const [y, setY] = useState(450);

  function selectMeme() {
    let meme: any = document.querySelector(".meme");
    let checkedMeme = meme.options[meme.selectedIndex].value;
    setMeme(checkedMeme);
  }

  function writeText(option: string) {
    let content = document.querySelector(".canvas") as HTMLCanvasElement;
    let ctx: any = content.getContext("2d");
    if (option === "write") {
      ctx.fillStyle = fontColor;
      ctx.font = `${fontSize} ${font}`;
      ctx.fillText(text, x, y);
    }
    if (option === "delete") {
      window.location.reload();
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
      <select name="job" className="meme" onChange={selectMeme}>
        <option value="pictrue1">페페 빡침</option>
        <option value="picture2">페페 슬픔</option>
        <option value="picture3">페페 주먹</option>
        <option value="picture4">페페 눈물</option>
      </select>
      <Main className="main">
        <Canvas className="canvas" width="770px" height="480px">
          {
            (window.onload = function (e: any) {
              let content = document.querySelector(".canvas") as HTMLCanvasElement;
              let ctx: any = content.getContext("2d");
              let img = new Image();
              img.src = picture3;
              img.onload = function (e: any) {
                ctx.drawImage(img, 0, 0, 775, 480);
              };
            })
          }
        </Canvas>
        <FontSet>
          <FontSetDescription>폰트 설정</FontSetDescription>
          <select name="job" className="font" onChange={changeFont}>
            <option value="궁서체">궁서체</option>
            <option value="굴림체">굴림체</option>
            <option value="Dotum">Dotum</option>
            <option value="Arial Black">Arial Black</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Papyrus">Papyrus</option>
          </select>
          <select name="job" className="fontSize" onChange={changeFontSize}>
            <option value="50px">50px</option>
            <option value="60px">60px</option>
            <option value="70px">70px</option>
            <option value="80px">80px</option>
            <option value="90px">90px</option>
            <option value="100px">100px</option>
          </select>
          <select name="job" className="fontColor" onChange={changeFontColor}>
            <option value="Black">Black</option>
            <option value="Aqua">Aqua</option>
            <option value="Chartreuse">Chartreuse</option>
            <option value="DarkBlue">DarkBlue</option>
            <option value="DeepPink">DeepPink</option>
            <option value="GreenYellow">GreenYellow</option>
            <option value="Yellow">Yellow</option>
            <option value="Red">Red</option>
            <option value="Lime">Lime</option>
          </select>
        </FontSet>
        <TextSet>
          <TextSetDescription>텍스트 위치</TextSetDescription>
          <RadioBox>
            <RadioDescription>가로</RadioDescription>
            <TextSetInput type="range" min="0" max="650" onChange={setXsection} />
            {x}
          </RadioBox>
          <RadioBox>
            <RadioDescription>세로</RadioDescription>
            <TextSetInput type="range" min="35" max="460" onChange={setYsection} />
            {y}
          </RadioBox>
        </TextSet>
        <input onChange={textHandler} placeholder="type here.."></input>
        <button onClick={() => writeText("write")}>삽입하기</button>
        <button onClick={() => writeText("delete")}>새로고침</button>
        <a href="#" className="download" download onClick={downloadImg}>
          다운로드
        </a>
      </Main>
    </>
  );
}

const Main = styled.div`
  border: 0.3rem solid black;
  width: 48rem;
  height: 30rem;
  margin-left: 20%;
  margin-top: 5rem;
  position: relative;
`;

const Canvas = styled.canvas``;
const FontSet = styled.div``;
const FontSetDescription = styled.span``;
const TextSet = styled.div`
  display: flex;
`;
const TextSetInput = styled.input`
  width: 3rem;
`;
const TextSetDescription = styled.span``;
const RadioBox = styled.span`
  border: 1px solid black;
  display: flex;
  align-items: center;
  width: 7rem;
`;
const RadioDescription = styled.span``;
