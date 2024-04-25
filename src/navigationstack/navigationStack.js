import { createContext, useState } from "react";
import AboutScreen from "../pages/aboutUs";
import ContactScreen from "../pages/contact";
import CartScreen from "../pages/addToCart";
const { BrowserRouter, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("../pages/homeScreen")


 export const DataShare=createContext()


    const NavigationStack=()=>{

    const [cartItems,setCartItems]=useState([])

    const addToCart=(eachobj)=>{
       const result=cartItems.find((eachitem)=>{
              return eachitem.id===eachobj.id
        })
        if(result){
            alert("already in cart")
        }
        else{
        setCartItems([...cartItems,eachobj])
        }
    }
    
     return(
        <DataShare.Provider value={{
            cartItems,
            addToCart
        }}>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/contact" Component={ContactScreen}/>
            <Route path="/aboutUs" Component={AboutScreen}/>
            <Route path="/Cart" Component={CartScreen}/>
        </Routes>
        </BrowserRouter>
        </DataShare.Provider>
     )
}
export default NavigationStack;