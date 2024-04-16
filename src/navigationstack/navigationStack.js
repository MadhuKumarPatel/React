const { BrowserRouter, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("../pages/homeScreen")



const NavigationStack=()=>{
     return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            {/* <Route path="/contact" Component={}/> */}

        </Routes>
        </BrowserRouter>
     )
}
export default NavigationStack;