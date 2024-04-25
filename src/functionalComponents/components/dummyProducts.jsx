import axios from "axios"
import { useContext, useEffect, useState } from "react"
import "./dummyProducts.css"
import { DataShare } from "../../navigationstack/navigationStack"


const ProductsProducts=()=>{

    const [data,setData]=useState([])
    // const [filterdata,setFilterData]=useState([])
    const {addToCart}=useContext(DataShare)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData=async()=>{
       let result= await axios("https://dummyjson.com/products")
        
        let data=result.data.products.map((eachobj)=>{
             let newobj={...eachobj,count:1,fixedprice:eachobj.price}
             return newobj
        })
         
        setData(data)   
        // setFilterData(data)
        // console.log(data);
    }
    const deleteProduct=(i)=>{
        let newProducts=data.filter((eachitem,index)=>{
            return index!==i
        })
        setData(newProducts)
     }
     const increCount=(i)=>{
        let newProducts=data.map((eachitem,index)=>{
            if(index===i){
                eachitem.count+=1
                eachitem.price+=eachitem.fixedprice
                return eachitem
            }
            else{
                return eachitem
            }
        })
        setData(newProducts)
    }
    const decreCount=(i)=>{
        let newProducts=data.map((eachitem,index)=>{
            if(index===i && eachitem.count>1){
                eachitem.count-=1
                eachitem.price-=eachitem.fixedprice
                return eachitem
            }
            else{
                return eachitem
            }
        })
        setData(newProducts)
    }
    // const lowToHigh=()=>{
    //     let newArray=filterdata.sort((a,b)=>a.price-b.price)

    //     setData(newArray)

    // }
    // const highToLow=()=>{
    //     let newArray=filterdata.sort((a,b)=>b.price-a.price)
    //     console.log(newArray);
    //     setData(newArray)
    // }
    // const  priceRange=()=>{
    //     let newArray=filterdata.filter((eachitem)=>{
    //          return eachitem.price<=500;
    //     })
    //     console.log(newArray);
    //     setData(newArray)
    // }
  
        return(
           <>
            {/* <div className="sorting">
            <button onClick={lowToHigh}>Low to High</button>
            <button onClick={highToLow}>High to Low</button>
            <button onClick={priceRange}>0-500</button>
        </div> */}

        <div className="price">
            <h1>Total Price</h1>
            <h2>&#8377;{" "}
            {
              data.reduce((total,current)=>{
                    return total+current.price
                },0)
            }
            </h2>
        </div>
    <div className="containerr">
        {
         data.map((eachitem,i)=>{
            let{title,count,thumbnail,price,id}=eachitem
              return (
                <div className="productcard" key={id}>
                <h4 onClick={()=>deleteProduct(i)}>&#x3A7;</h4> 
                <img src={thumbnail} alt={title}/>
                <h2>{title}</h2>
                <div className="count">
                <h5 onClick={()=>decreCount(i)}> &#8722;</h5>
                <span>  {count} </span> 
                <h5 onClick={()=>increCount(i)}> &#43;</h5>
                </div> 
                <p><span>Price : </span>&#8377; {price}</p>
                <button onClick={()=>addToCart(eachitem)}>Add To Cart</button>
           </div> 
              )
          })
        }
    </div>
           </> 
        )
    }

export default ProductsProducts;
