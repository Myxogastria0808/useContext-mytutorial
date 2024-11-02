import { useState } from "react";
import { default as Child } from "./_components/Child";
import "./App.css";
import { createContext } from "react";

// Define the context type
export const MyContext = createContext<number>(0);

function App() {
  const [value, setValue] = useState<number>(0);
  const handleSetValue = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <MyContext.Provider value={value}>
      <Child />
      <button onClick={handleSetValue}>set value</button>
    </MyContext.Provider>
  );
}

export default App;
