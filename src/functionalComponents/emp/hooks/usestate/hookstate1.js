import { useState } from "react"
import "./hookstate1.css"


function HookstateEx1(){
   const [fruits,setFruits]=useState(["mango","apple"])

   const addFruit=()=>{
    const newFruit=[...fruits,"orange"]
    setFruits(newFruit)
   }
   const deleteFruit=(i)=>{
      const newFruit=fruits.filter((eachitem,index)=>{
           return index!=i
      })
      setFruits(newFruit)
   }
   const updateFruit=(i)=>{
    const newFruit=fruits.map((eachitem,index)=>{
         if(index==i){
            return "banana"
         }
         else{
            return eachitem
         }
    })
    setFruits(newFruit)
 }
    return(
        <>
        <div className="main">
         <button onClick={addFruit}>Add Fruit</button>
          {
            fruits.map((eachitem,i)=>{
                return (
                    <>
                <h2>{eachitem}</h2>
                <button onClick={()=>deleteFruit(i)}>Remove</button>
                <button onClick={()=>updateFruit(i)}>Update</button>
         </>
            )
            })
          }
          </div>
          </>
    )
}
export default HookstateEx1;
