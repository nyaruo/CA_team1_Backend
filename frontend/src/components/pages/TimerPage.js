import React from "react";
import MyStopwatch from "../Timer/Timer";
import "../../stylesheets/timer.css";

const Timer = () => {
  return (
    <>
      <div className="RecordPage">
        <section>
          <h1 className='Timer'>LEARNING TIMER</h1>
          <MyStopwatch />
        </section>
      </div>
    </>
  );
}

export default Timer;