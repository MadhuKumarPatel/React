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
    deleteFruits=()=>{
        let newArray2=this.state.arr.slice();
        newArray2.pop()
        this.setState(
            {
               arr:newArray2,
               input:""
            }
        )
    }
   render(){
    return(
        <>
        <h2>{this.state.arr.join(" , ")}</h2>
        <input type="text" value={this.state.input} onChange={this.addValue}></input>
        <button onClick={this.addFruits}>Add Fruits</button>
        <button onClick={this.deleteFruits}>Remove</button>
        
        </>
    )
   }
}
export default ArrayOfFruits;