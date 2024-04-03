import './App.css';
import BootstrapCard from './functionalComponents/bootstrap/card';
import { Footer } from './functionalComponents/bootstrap/footer';
import Headerbootstrap from './functionalComponents/bootstrap/header';
import BootstrapModal from './functionalComponents/bootstrap/modal';
import BootstrapSpinners from './functionalComponents/bootstrap/spinners';

function App() {
  return (
   <>
  
   <Headerbootstrap/>
   <div className='main'>
   <BootstrapCard header={"React"} title={"Bootstrapcard"}/>
   </div>
   <div className='modall'>
   <BootstrapModal modalname={"bootstrap modal"}/>
   </div>
   <div className='spinnerss'>
   <BootstrapSpinners/>
   </div>
   <Footer/>
   
   
   
   
   </>
  );
}

export default App;
