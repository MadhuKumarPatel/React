import { useContext, useState } from "react";
import { DataShare } from "../../navigationstack/navigationStack";
import Header from "./header";
import "./cart.css"

const CartItems=()=>{
    const {cartItems}=useContext(DataShare)
    const [data,setData]=useState(cartItems)
    // console.log(cartItems);

    const increCount=(i)=>{
        const newArray=data.map((eachitem,index)=>{
             if(index===i){
                eachitem.count+=1
                eachitem.price+=eachitem.fixedprice
                return eachitem
             }
             else{
                return eachitem
             }
        })
        setData(newArray)
    }
    const decreCount=(i)=>{
        const newArray=data.map((eachitem,index)=>{
             if(index===i&&eachitem.count>1){
                eachitem.count-=1
                eachitem.price-=eachitem.fixedprice
                return eachitem
             }
             else{
                return eachitem
             }
        })
        setData(newArray)
    }   
    // const deleteProduct=(i)=>{
    //     const newArray=data.filter((eachitem,index)=>{
    //        return i!==index
    //    })
    //    setData(newArray)
    // }



    return(
        <>
        <div className="md">
        <Header/>
       {
            data.length>0
            ?
            <div className="containerrr">
        {
         data.map((eachitem,i)=>{
            let{title,count,thumbnail,price,id}=eachitem
              return (
                <>
                <div className="Carditem" key={id}>
                {/* <h4 onClick={()=>deleteProduct(i)}>&#x3A7;</h4>  */}
                <div>
                <img src={thumbnail} alt={title}/>
                </div>
                <div className="title">
                <h2>{title}</h2>
                <p><span>Price : </span>&#8377; {price}</p>
                </div>
                <div className="count">
                <h5 onClick={()=>decreCount(i)}> &#8722;</h5>
                <span>  {count} </span> 
                <h5 onClick={()=>increCount(i)}> &#43;</h5>
                </div> 
           </div> 
           <h4> Total : {
              data.reduce((total,current)=>{
                    return total+current.price
                },0)
            }</h4>
           </>
              )
          })
        }
    </div>
            :
            <h1>no cart items</h1>
        } 
        </div>
        </>
    )
}
export default CartItems;
