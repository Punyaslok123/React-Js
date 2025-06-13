import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green");

  

  document.body.style.backgroundColor=color;
  return (
    <>
      <div className="container">
        <button class="green" onClick={() => setColor("green")}>
          Green
        </button>
        <button class="yellow" onClick={() => setColor("yellow")}>
          Yellow
        </button>
        <button class="white" onClick={() => setColor("white")}>
          White
        </button>
        <button class="black" onClick={() => setColor("black")}>
          Black
        </button>
        <button class="blue" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button class="orange" onClick={() => setColor("orange")}>
          Orange
        </button>
        <button class="red" onClick={() => setColor("red")}>
          Red
        </button>
        <button class="purple" onClick={() => setColor("purple")}>
          Purple
        </button>
        <button class="olive" onClick={() => setColor("olive")}>
          Olive
        </button>
      </div>
    
    </>
  );
}

export default App
