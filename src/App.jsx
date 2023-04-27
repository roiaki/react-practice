import React, { useEffect, useState } from "react";
import { ColorfulMessaga } from "./components/ColorfulMessage";

export const App = () => {
  console.log("start");
  // stateの変更、propsの中身が変更、親コンポーネントが再レンダリングした時、
  // 検知して再読みこみをする
  const [num, setNum]   = useState(0);
  const [flag, setFlag] = useState(false);

  const onClickButton = () => {
    alert();
  };

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFlag(!flag);
  };

  // Too many re-renders
  // if (num % 3 === 0) {
  //   // state更新、再レンダリング
  //   flag || setFlag(true);
  // } else {
  //   flag && setFlag(false);
  // }

  // []最初の1回だけ走らせる, [num]num変更ある時走る 関心の分離
  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        flag || setFlag(true);
      } else {
        flag && setFlag(false);
      }
    }
  // eslint-disable-next-line
  }, [num]);

  
  return (
    <>
      <h1 style={{color: 'red' }}>こんにちは</h1>
      <ColorfulMessaga color="green" message="Hi"/>
      <ColorfulMessaga color="red" message="HiHiHi"/>
      <ColorfulMessaga color="blue">お元気ですか？</ColorfulMessaga>
      {/* <p style={contentStyle}>あああ</p> */}
      <button onClick={ onClickButton }>ボタン</button>
      <button onClick={ onClickCountUp }>カウントアップ</button>
      <br/>
      <button onClick={ onClickSwitchShowFlag }>ON/OFF</button>
      <p>{num}</p>
      {flag && <p>(^^)/</p> }
    </>
  );
};


