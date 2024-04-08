import { Component } from "react";
import axios from "axios";
import "./dummyjson.css"

class DummyProducts extends Component{
    state={
        products:[]
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData=async()=>{
       let result= await axios("https://dummyjson.com/products")
        // console.log(result.data.products);
        
        let data=result.data.products.map((eachobj)=>{
             let newobj={...eachobj,count:1,fixedprice:eachobj.price}
             return newobj
        })
         
            this.setState({
                products:data,
            })
        console.log(data);
    }
    deleteRecipe=(i)=>{
        let newProducts=this.state.products.filter((eachitem,index)=>{
            return index!=i
        })
        this.setState({
            products:newProducts
        })
     }
    increCount=(i)=>{
        let newProducts=this.state.products.map((eachitem,index)=>{
            if(index===i){
                eachitem.count+=1
                eachitem.price+=eachitem.fixedprice
                return eachitem
            }
            else{
                return eachitem
            }
        })
        this.setState({
            products:newProducts
        })
    }
    decreCount=(i)=>{
        let newProducts=this.state.products.map((eachitem,index)=>{
            if(index===i && eachitem.count>1){
                eachitem.count-=1
                eachitem.price-=eachitem.fixedprice
                return eachitem
            }
            else{
                return eachitem
            }
        })
        this.setState({
            products:newProducts
        })
    }
    render(){
        return(
            <>
                <div className="price">
                    <h1>Total Price</h1>
                    <h2>&#8377;{" "}
                    {
                      this.state.products.reduce((total,current)=>{
                            return total+current.price
                        },0)
                    }
                    </h2>
                </div>
            <div className="container">
                {
                  this.state.products.map((eachitem,i)=>{
                    let{title,count,thumbnail,price}=eachitem
                      return (
                        <div className="productcard">
                        <h4 onClick={()=>this.deleteRecipe(i)}>&#x3A7;</h4> 
                        <img src={thumbnail} alt={title}/>
                        <h2>{title}</h2>
                        <div className="count">
                        <h5 onClick={()=>this.increCount(i)}> &#43;</h5>
                        <span>  {count} </span> 
                        <h5 onClick={()=>this.decreCount(i)}> &#8722;</h5>
                        </div> 
                        <p><span>Price : </span>&#8377; {price}</p>
                   </div> 
                      )
                  })
                }
            </div>
            </>
        )
    }
}
export default DummyProducts;