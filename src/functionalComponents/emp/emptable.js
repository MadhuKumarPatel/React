import { empdata } from "./empdata"
import Emplist from "./emplist";

function Emptable(){

    return(
        <>
        <table >
            <tr>
                <th>name</th>
                <th>designation</th>  
                <th>salary</th>
            </tr>
            {
            empdata.map((eachobj)=>{
               return(
               <Emplist data={eachobj}/>
               )
            })
        }
        </table>
        </>
      
    )
}  
export default Emptable;