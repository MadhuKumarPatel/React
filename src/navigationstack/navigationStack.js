import AboutScreen from "../pages/aboutUs";
import ContactScreen from "../pages/contact";
const { BrowserRouter, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("../pages/homeScreen")

const NavigationStack=()=>{
     return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/contact" Component={ContactScreen}/>
            <Route path="/aboutUs" Component={AboutScreen}/>
        </Routes>
        </BrowserRouter>
     )
}
export default NavigationStack;