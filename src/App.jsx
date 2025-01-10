import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        Click Me!! {count}
      </Button>
    </>
  );
}

export default App;
