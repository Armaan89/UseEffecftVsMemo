import { useState, useEffect, useMemo } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // useEffect(() => {
  // incre= () => setCount(count+1)
  // });
  const noRender = useMemo(() => {
    return (
      <div>
        <h1 style={{ color: "red" }}>
          No render it again {count} --{name}
        </h1>
        <h1 style={{ color: "red" }}>useEffect vs useMemo</h1>
      </div>
    );
  }, [name]);
  return (
    <div className="App">
      {noRender}
      <h1>render again and again {count}</h1>
      <h1>useEffect vs useMemo</h1>

      {count}
      {/* <button onClick={() => incre()}>Increament</button> */}
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setName("code updated")}>click</button>
    </div>
  );
}
