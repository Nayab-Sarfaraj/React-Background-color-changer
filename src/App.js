import { useState } from "react";
import ColorBar from "./componenta/ColorBar";
function App() {
  const [color,setColor]=useState('red-600')
  return (
    <div className={`flex bg-${color}  items-end justify-center h-screen w-screen pb-20`}>
       <ColorBar  onClick={setColor}/>
    </div>
  );
}

export default App;
