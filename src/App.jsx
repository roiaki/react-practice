import React from "react";
import { ColorfulMessaga } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };
  // const contentStyle = {
  //   color: 'blue',
  //   fontSize: '30px'
  // };
  return (
    <>
      <h1 style={{color: 'red' }}>こんにちは</h1>
      <ColorfulMessaga color="green" message="Hi"/>
      <ColorfulMessaga color="red" message="HiHiHi"/>
      <ColorfulMessaga color="blue">お元気ですか？</ColorfulMessaga>
      {/* <p style={contentStyle}>あああ</p> */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};


