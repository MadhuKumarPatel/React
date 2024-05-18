import { useDispatch, useSelector } from "react-redux";
import Header from "../functionalComponents/components/header";
import todoActionAdd, { todoActionDelete } from "../redux/actions/action";
import { useState } from "react";



const AboutScreen=()=>{ 
    const {todos}=useSelector(state=>state)
    const [todoValue,settodoValue]=useState('')
    const dispatch=useDispatch()
    // console.log(todos);
    const inputHandle=(e)=>{
      settodoValue(e.target.value)
    }
    const addTodo=()=>{
       dispatch(todoActionAdd(todoValue))
       settodoValue("")
    }
    const deleteTodo=(i)=>{
        dispatch(todoActionDelete(i))
    }
   
    return(
        <>
        <Header/>
        <h2>Todos</h2>
 
            <input style={{border:"1px solid"}} type="text" value={todoValue} onChange={inputHandle}/>
        
        <button  onClick={addTodo}>Add Todo</button>
         {
            todos.map((todo,i)=>{
                return (
                <> 
                <h4 onClick={()=>deleteTodo(i)} style={{marginTop:"10px"}}>{todo}<span style={{backgroundColor:"gray",borderRadius:"10px",paddingRight:"6px",marginLeft:"10px"}}> &#x3A7;</span></h4>
                
                </>
                   
                )
            })
         }
        </>
    )
}
export default AboutScreen;