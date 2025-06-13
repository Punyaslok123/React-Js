import { useState } from "react"
import Accordian from "./components/Accordian"
import data from "./components/Data";
import "./App.css"

function App() {
    
  const [selected,setSelected]=useState(null);

  const [enablemultiSelection,setEnableSelection]=useState(false);  // use for to hold enable multiple selection button  

  const [multiple,setMultiple]=useState([])  // hold all the accordian answer

  function handleSingleSelection(currentId){
    // console.log(currentId);
    // setSelected(currentId);  // means selected is that current Id 
    // now when we click second time in the question answer should not displayed 

    if(selected===currentId) {
        setSelected(null);
    }
    else setSelected(currentId);
  } 

  // function handling multiple accordian answer 

  function handleMultipleSelection(currentId){
            let cpyMultiple=[...multiple];  // hold all the accordians 

            // now if current id is not present in the cpyMultiple then we add it

            let index=cpyMultiple.indexOf(currentId);

            

            if(index==-1) {
                   cpyMultiple.push(currentId);
            }
            else {
              // already present , so we need to remove it

              cpyMultiple.splice(index,1);
            }

            // multiple set 
            setMultiple(cpyMultiple);

  }

  console.log(multiple);


  return (
    <div className="wrapper">
         {/* button for enable multiple selection  */}
        <button  onClick={()=> setEnableSelection(!enablemultiSelection)}>
          {enablemultiSelection?'disable multiple selection':'enable multiple selection'}
          
        </button>
         <div className="accordian">{
             data && data.length>0? 
             data.map((dataItem)=>(
                  <div className="Item">
                      <div className="title" onClick={enablemultiSelection?()=>handleMultipleSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.Question}</h3>
                        <span>+</span>
                      </div>
                      {
                        enablemultiSelection?
                        multiple.indexOf(dataItem.id)!=-1 &&  <div className="content">{dataItem.answer}</div>
                        :
                        selected===dataItem.id && <div className="content">{dataItem.answer}</div>
                      }
                      {/* {
                        selected===dataItem.id?
                        <div className="content">
                          {dataItem.answer}
                        </div>
                        :
                        null
                      } */}
                  </div>
             ))
             :<div>Non data found</div>

          
          }

         </div>
    
    </div>
  )
}

export default App


