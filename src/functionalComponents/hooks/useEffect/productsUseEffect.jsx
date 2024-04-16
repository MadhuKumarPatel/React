import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./productsUseEffect.css"

const UseEffectEx1=()=>{
    useEffect(()=>{
         fetchDetails()
    },[])

    const [data,setData]=useState([])
    const [product,setproduct]=useState({})
    const [count,setCount]=useState(1)

    useEffect(()=>{
        // productDetails()
           (async()=>{
                const result=await axios.get(`https://dummyjson.com/products/${count}`)
                setproduct(result.data)
                console.log(result.data);
            })();
    },[count])

    const countIncre=(i)=>{
        setCount(i)
    }

    const fetchDetails=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        // console.log(response.data.products);
        setData(response.data.products)
    }
    // const productDetails=async()=>{
    //     const result=await axios.get(`https://dummyjson.com/products/${count}`)
    //     setproduct(result.data)
    //     console.log(result.data);
    // }
    return(
        <>
       <h1>Products</h1>
        <div className="button">
        {
          data.map((eachitem,index)=>{
             const i=index+1
             return(
                    <span key={eachitem.id} onClick={()=>countIncre(i)}><p>{i}</p></span>
             )
          })
        }
        </div>
        { Object.keys(product).length>0 && (
             <div className="card">
             <div className="cardimg">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>Rating : {product.rating}</h4>
                <h3>Price : &#8377; {product.price}</h3>
                <button>Buy Now</button>
            </div>
         </div>
     )}
        </>
    )
     
}
export default UseEffectEx1;