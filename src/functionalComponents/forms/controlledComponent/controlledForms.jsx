import { useState } from "react"
import "./controlledForms.css"

const ControlledForms=()=>{
    const [userName,setuserName]=useState("")
    const [password,setpassword]=useState("")
    const [confirmPassword,setconfirmPassword]=useState("")
    const [userDetails,setuserDetails]=useState([])

    const usernameHandler=(e)=>{
        const username=e.target.value
        setuserName(username)
    }
    const passwordHandler=(e)=>{
        const password=e.target.value
        setpassword(password)
    }
    const conPassword=(e)=>{
        const confirmPassword=e.target.value
        setconfirmPassword(confirmPassword)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const obj={
            username:userName,
            password:password,
            confirmpassword:confirmPassword
        }
        const newArray=[...userDetails,obj]
        setuserDetails(newArray)
    }
    return(
        <>
        <div className="container">
        <form className="formdetails" onSubmit={submitHandler}>
           <input type="text" value={userName} onChange={usernameHandler} placeholder="User Name"/>
           <input type="password" value={password} onChange={passwordHandler} placeholder="Password"/>
           <input type="password" value={confirmPassword} onChange={conPassword} placeholder="Confirm Password"/>
           <button type="submit">Register</button>
        </form>
        </div>

        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>User Namme</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                </tr>
           
        {
            userDetails.map((eachitem,index)=>{
                return(
                    <>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{eachitem.username}</td>
                        <td>{eachitem.password}</td>
                        <td>{eachitem.confirmpassword}</td>
                    </tr>
                    </>
                )
            })
        }
        </tbody>
         </table>


        </>

    )
}
export default ControlledForms;