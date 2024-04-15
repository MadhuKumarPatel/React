import { useRef,useState } from "react";
import "./uncontrolled.css"


function UncontrolledEx1(){
    const userNameRef=useRef("")
    const password=useRef("")
    const [userDetails,setUserDetails]=useState([])
    const [error,setError]=useState(false)


   const submitHandler=(event)=>{
    event.preventDefault()

       const usernameInput=userNameRef.current.value
       const passwordInput=password.current.value

    //    console.log(usernameInput);
    //    console.log(passwordInput);
  
       const data={
        username:usernameInput,
        password:passwordInput,
       }

      if(data["username"].length<5){
        setError(true)
        return
      }
      else{
        setError(false)
      }

       const newUserDetails=[...userDetails,data]
       setUserDetails(newUserDetails)

       userNameRef.current.value=""
       password.current.value=""
    }
    const deleteHandler=(i)=>{
       const newUserDetails=userDetails.filter((eachitem,index)=>{
                return index!==i
        })
        setUserDetails(newUserDetails)
    }
    return(
        <>
        <div className="main">
            <form onSubmit={submitHandler}>
                <div className="username">
                    <label htmlFor="username">
                        <input type="text" id="username" placeholder="User Name" ref={userNameRef}/>
                    </label>
                    {error && <p>username must contain more than 5 characters</p>}
                </div>
                <div className="password">
                    <label htmlFor="password">
                        
                        <input type="password" id="password" placeholder="Password" ref={password}/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="table">
            {
                userDetails.length>0
                ?
                <table>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
               {
                userDetails.map((eachitem,i)=>{
                    const {username,password,id}=eachitem
                    return(
                        <tr>
                            <td>{i+1}</td>
                            <td>{username}</td>
                            <td>{password}</td>
                            <td className="delete" onClick={()=>deleteHandler(i)}>&#10005;</td>
                        </tr>
                    )
                })
               }
            </table>
            :
            null
            }
           
        </div>
        </>
    )
}
export default UncontrolledEx1;