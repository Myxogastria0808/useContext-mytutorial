import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Hello from "../Hello";
import Uho from "../Uho/Uho";

const GrandChild = () => {
  // プロバイダーに渡した値を呼び出す
  const value = useContext(MyContext);
  //useStateでアニメーションの始まりを管理
  const [isFinishedEndAnimation, setIsFinishedEndAnimation] =
    useState<number>(0);
  let state = value % 2;
  //ここの秒数は、エンドアニメーションの時間
  useEffect(() => {
    setTimeout(() => {
      setIsFinishedEndAnimation(state);
    }, 2000);
  }, [value]);

  return (
    <div style={{ border: "1px solid black" }}>
      {value}
      {isFinishedEndAnimation === 0 ? (
        <Hello state={state} isFinishedEndAnimation={isFinishedEndAnimation} />
      ) : (
        <Uho state={state} isFinishedEndAnimation={isFinishedEndAnimation} />
      )}
    </div>
  );
};

export default GrandChild;
