import { useState } from "react";
import useMedia from "./assets/hooks/use-media";

function App() {
  const [count, setCount] = useState(0);

  const isMobile = useMedia();

  return (
    <>
      <div>{isMobile ? "Mobile geçti" : "Mobilde değil"}</div>
    </>
  );
}

export default App;
