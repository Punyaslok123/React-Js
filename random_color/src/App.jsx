import { useState } from "react";


function App() {

     const [isrgb,setRgb]=useState(false);
     const [color,setColor]=useState('');
      
    function handlergbColor(){
         setRgb(true);
         let r=Math.floor(Math.random()*255);
         let g=Math.floor(Math.random()*255);
         let b=Math.floor(Math.random()*255);
         
        document.body.style.backgroundColor=`rgb(${r},${g},${b})`;

          setColor(`rgb(${r},${g},${b})`);
        }

      

   function handleHexadecimal(){
          setRgb(false);
          let color="";
          let str="0123456789abcdef";

          for(let i=0;i<6;i++)  {
              let random_index = Math.floor(Math.random() * 15);
              color+=str[random_index];
          }
          document.body.style.backgroundColor=`#${color}`;
          setColor(`#${color}`);
   }

   


  return (
    <div className="container">
      <button onClick={() => handlergbColor()}>generate rgb color</button>
      <button onClick={() => handleHexadecimal()}>
        generate hexaedecimal color
      </button>
      <br />
      <div className="footer">
        <div className="color_type">
          {isrgb ? "RGB COLOR" : "HEXADECIMAL COLOR"}
        </div>

        <div className="color">{color}</div>
      </div>
    </div>
  );
}

export default App
