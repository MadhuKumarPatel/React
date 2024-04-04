import { Component } from "react"


class ArrayOfFruits extends Component{
    state={
        arr:[],
        input:""
    }
    addValue=(e)=>{
        this.setState({
            input:e.target.value
        })
    }
    addFruits=()=>{
        let newArray=this.state.arr
        newArray.push(this.state.input)
        this.setState(
            {
               arr:newArray,
               input:""
            }
        )
    }
    deleteFruits=(i)=>{
       let newArray=this.state.arr.filter((eachitem,index)=>{
        return index!=i
       })
        this.setState(
            {
               arr:newArray,
               input:""
            }
        )
    }
    updateFruit=(i)=>{
        let newArray=this.state.arr.map((eachitem,index)=>{
            if(index==i){
                return this.state.input
            }
            else{
                return eachitem
            }
        })
        this.setState(
            {
                arr:newArray,
                input:""
            }
        )
    }
   render(){
    return(
        <>
        <input type="text" value={this.state.input} onChange={this.addValue}></input>
        <button onClick={this.addFruits}>Add Fruits</button>
        <ul>
         {
         this.state.arr.map((eachitem,i)=>{
            return (<>
            <li>{eachitem} <button onClick={()=>this.deleteFruits(i)}>Remove</button>  <button onClick={()=>this.updateFruit(i)}>Update</button></li>
            
            </>
            )
         })
         } 
          </ul>
        </>
    )
   }
}
export default ArrayOfFruits;