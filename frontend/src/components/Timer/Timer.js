// import { callStaticConstructors } from "igniteui-react-core";
import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  // days消した
  const { seconds, minutes, hours, isRunning, start, pause} =
    useStopwatch({});

  // ボタン表示切り替え（スタートを押したらポーズに、ポーズを押したらスタートに）
  const [action, changeAction] = useState("START");
  const handleOnClick = () => {
    if(action === "START"){
      changeAction("PAUSE");
      start();
    }else{
      changeAction("START");
      pause();
    }
  };

  // 分・秒の時間表示を常に2桁にする関数
  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  };

  // 勉強時間の表示
  const done = () => {
    console.log(`勉強時間：${hours}時間${minutes}分${seconds}秒`);
  };

  return (
    <div className="TimerComponent">
      <div className="selectLanguage">
        <h3>Now Study</h3>
        <div className="cp_ipselect">
          <select className="cp_sl06" required>
            <option value="C/C++">C/C++</option>
            <option value="JavaScript">JavaScript</option>
            <option value="C#">C#</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
          <span className="cp_sl06_highlight"></span>
          <span className="cp_sl06_selectbar"></span>
          {/* <label class="cp_sl06_selectlabel">Choose</label> */}
        </div>
      </div>

      <div className="TimerCycle">
        <div className="DisplayTime">
          <span>{hours}</span>:<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
      </div>

      {/* <button onClick={reset} className="reset-btn">RESET</button> */}
      <button onClick={handleOnClick} className="start-btn">{action}</button>
      <button onClick={done} className="done-btn">DONE</button>
    </div>
  );
}

export default function Timer() {
  return (
    <>
      <div>
        <MyStopwatch />
      </div>
    </>
  );
}
