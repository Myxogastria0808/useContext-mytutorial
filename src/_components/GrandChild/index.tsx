import { useContext } from "react";
import { MyContext } from "../../App";

const GrandChild = () => {
  // プロバイダーに渡した値を呼び出す
  const value = useContext(MyContext);

  return <div style={{ border: "1px solid black" }}>{value}</div>;
};

export default GrandChild;
