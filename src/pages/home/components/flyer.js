import React, { useEffect, useState } from "react";
import flyerImg from "../../../assets/img/flyer.png"
export const Flyer = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const call = () => {
      setTimeout(() => {
        setVisible(true);
        console.log("completed");
      }, 1000);
    };
    call();
  }, []);
  return (
    <div className={`flyer ${visible ? "open" : "close"}`}>
      <div className="toggler">
        <button onClick={() => setVisible(!visible)}>
          {visible ? "x" : "<"}
        </button>
        <div></div>
      </div>
      <div className={`content ${visible ? '' : 'hide'}`}>
       <div className="one">
        <div className="left"><span>Alphas Mint</span></div>
        <div className="right"> <span>1:06:21:08</span> </div>
       </div>
       <div className="two">
        <a href="https://google.com">
            <img src={flyerImg} alt="flyer banner" />
        </a>
       </div>
      </div>
    </div>
  );
};
