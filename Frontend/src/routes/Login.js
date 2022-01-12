import { useState } from "react"
import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Login(props) {
    
    let [user_name, setUser_name] = useState("")
    let [password, setpassword] = useState("")
    // let [Authentication,setAuthentication]= useState(false);

    function handleUser_name(event) {
        setUser_name((user_name = event.target.value));
    }
   
    function handlepassword(event) {
        setpassword((password = event.target.value));
    }
    
//       function handleLogin(){
//     setAuthentication(true);
// }
// if(!Authentication){
//     return<Login handleLogin = {handleLogin} />
// }
    
    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "get",
            url: "api/employees/login",
            params: { user_name: user_name, password: password }
        })
            .then((res => {
                console.log(res.data)
                if (res.data == "authenticated") {
                    props.handleLogin();
                }
                else {
                    alert(res.data)
                }
            }))
    }

    

    return (
        

        <div class="wrapper">
            
          <h2 class="form-signin-heading">Please login</h2>



            <br/>  <br/>  <br/>  <br/>
            <form class="form-signin" onSubmit={handleSubmit}>
            
                <input
                    type="text"
                    value={user_name}
                    user_name="user_name"
                    placeholder=" user_name" class="form-control"
                    onChange={handleUser_name}
                />
                <input
                    type="text"
                    value={password}
                    user_name="password"
                    placeholder=" password" class="form-control"
                    onChange={handlepassword}
                />
                <br />
                <label class="checkbox"> 
                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                </label>
            <input type="submit"
                   class="btn btn-lg btn-primary btn-block" value="submit"
                />
            </form>
        </div>
    )
}