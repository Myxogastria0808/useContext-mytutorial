import { default as GrandChild } from "../GrandChild";

const Child = () => {
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      <GrandChild />
    </div>
  );
};

export default Child;
