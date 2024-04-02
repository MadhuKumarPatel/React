import { empdata } from "./empdata"

function Empfilter(){
       const filteredArray=(query)=>{
        return empdata.filter((value)=>{
            return value.designation===query
        })
       }
    return(
        <>
        <h2>reactDevelopers</h2>
        
        {
            
         filteredArray("reactDeveloper").map((item)=>{
            return (
                <>
                
                <h4>name : {item.name}</h4>
                <h4>designation : {item.designation}</h4>
                <h4>salary : {item.salary}</h4>
                </>
            )
         })
      
    }
     <h2>angularDevelopers</h2>
      {
         filteredArray("angularDeveloper").map((item)=>{
            return (
                <>
               
                <h4>name : {item.name}</h4>
                <h4>designation : {item.designation}</h4>
                <h4>salary : {item.salary}</h4>
                </>
            )
         })
      
    }
    
        </>
    )
}  
export default Empfilter;