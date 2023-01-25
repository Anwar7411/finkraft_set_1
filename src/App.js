import { useState } from "react";
import './App.css'

function App() {
  const[calu,setCalcu]=useState("");
  const[targetnum,setTargetNum]=useState("");
  const[ans,setAns]=useState([]);

  const handleInput=()=>{
   let listofnum=calu.split(",").map(Number);
   let targetnum2=Number(targetnum);
   console.log("ans",listofnum)
   for(let i=0;i<listofnum.length-1;i++){
    for(let j=i+1;j<listofnum.length;j++){
      if(listofnum[i]+listofnum[j]==targetnum){
       setAns([listofnum[i],listofnum[j]]);
       break;
      }
    }
    if(ans.length>0){
      break;
    }
   }
  }
  
  return (
    <div className="App">
     <input type="text" placeholder="Enter List of integers with ',' separated" value={calu} onChange={(e)=>setCalcu(e.target.value)}/><br />
     <input type="text" placeholder="Enter Target Number" value={targetnum} onChange={(e)=>setTargetNum(e.target.value)}/><br />
     <button onClick={handleInput}>Submit</button><br />
     <p>the Result is [{`${ans}`}]</p>
    </div>
  );
}

export default App;
