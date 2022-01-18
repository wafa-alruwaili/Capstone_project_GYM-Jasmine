import { useState } from "react"
import React from "react"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"


export default function Login() {

let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  // let myservice = getMyservice();
  // localStorage.setItem(“myPa”, JSON.stringify(myservice));
  // console.log(“In App “, myservice)
  function handleUsername(event) {
    setUsername((event.target.value));
  }
  function handlePassword(event) {
    setPassword((event.target.value));
  }
  let lestuser = {
    username: username,
    password: password,
    
  }
  let navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "get",
      url: "api/user/login",
      params: { username: username, password: password }
    })
      .then((res => {
        console.log(res.data)
        if (res.data == "authenticatedemployees") {
          // props.handleLogin(res.data );
          localStorage.setItem("LogIn", "employees")
          navigate("/")
        }
        else if (res.data == "authenticatedmember") {
          // props.handleLogin(res.data );
          localStorage.setItem("LogIn", "member")
          navigate("/")
        }
        else {
          alert(res.data)
        }
      }))
  }
  return (
        

            <div class="wrapper">
               
              <h2 class="form-signin-heading" style={{ color: "#ffcc00", }}>Please login</h2>
    
                <form class="form-signin" onSubmit={handleSubmit}>
                
                    <input
                        type="text"
                        value={username}
                        username="username"
                        placeholder=" username" class="form-control"
                        onChange={handleUsername}
                        required/>
                    <input
                        type="text"
                        value={password}
                        username="password"
                        placeholder=" password" class="form-control"
                        onChange={handlePassword}
                    required/>
                    <br />
                    <label class="checkbox"> 
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                    </label>
                    <br /> <br />
                {/* <input className="FOF" type="submit"
                       class="btn btn-lg btn-primary btn-block" value="submit"
                    /> */}
                    <Link to="/employees"><button  className="FOF" onClick={handleSubmit}>Login</button></Link>
                    <Link to="/Home"><button className="FOF">logoff</button></Link>
                </form>
            </div>
        )
    }


// import { useState } from "react"
// import React from "react"
// import axios from "axios"
// import { Link,useNavigate } from "react-router-dom"


// export default function Login(props) {
    
//     let [user_name, setUser_name] = useState("")
//     let [password, setpassword] = useState("")
//     const navigate = useNavigate();

//     function handleUser_name(event) {
//         setUser_name((user_name = event.target.value));
//     }
   
//     function handlepassword(event) {
//         setpassword((password = event.target.value));
//     }
    

    
//     function handleSubmit(event) {
//         event.preventDefault();
//         axios({
//             method: "get",
//             url: "api/employees/login",
//             params: { user_name: user_name, password: password }
//         })
//             .then((res => {
//                 console.log(res.data)
//                 if (res.data == "authenticated") {
//                     props.handleLogin();
//                     localStorage.setItem("logined","yes")
//                      navigate("/Employee_details")
//                 }
//                 else {
//                     alert(res.data)
//                 }
//             }))
//     }

    

//     return (
//         <form class="form">
//             <h1>LogIn</h1>
//                 <input
//                     type="text"
//                     class="textbox"
//                     value={user_name}
//                     name="username"
//                     placeholder=" username"
//                     onChange={handleUser_name}
//                 />
//                 < br/>  < br/>
//                 <input id="form_signin"
//                     type="text"
//                     class="textbox"
//                     value={password}
//                     name="password"
//                     placeholder=" password"
//                     onChange={handlepassword}
//                 />
//                 <br />
//                 <Link to="/"><button onClick={handleSubmit} className='FOF'>Login</button></Link>
//                 <Link to="/Register"><button className='FOF'>Register</button></Link>
//             </form>
//     )
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>هنا
// import { useState } from "react"
// import React from "react"
// import axios from "axios"
// import { Link,useNavigate } from "react-router-dom"


// export default function Login(props) {
    
//     let [user_name, setUser_name] = useState("")
//     let [password, setpassword] = useState("")
//     let info=[user_name,password];
//     const navigate = useNavigate();

//     function handleUser_name(event) {
//         setUser_name((user_name = event.target.value));
//     }
   
//     function handlepassword(event) {
//         setpassword((password = event.target.value));
//     }
    

    
//     function handleSubmit(event) {
//         event.preventDefault();
//         axios({
//             method: "get",
//             url: "api/employees/login",
//             params: { user_name: user_name, password: password }
//         })
//             .then((res => {
//                 console.log(res.data)
//                 if (res.data == "authenticated") {
//                     props.handleLogin();
//                     localStorage.setItem("login","authenticated")//n
//                 }
//                 else {
//                     alert(res.data)
//                 }
//             }))
//     }

    

//     return (
        

//         <div class="wrapper">
           
//           <h2 class="form-signin-heading" style={{ color: "#ffcc00", }}>Please login</h2>

//             <form class="form-signin" onSubmit={handleSubmit}>
            
//                 <input
//                     type="text"
//                     value={user_name}
//                     user_name="user_name"
//                     placeholder=" user_name" class="form-control"
//                     onChange={handleUser_name}
//                 />
//                 <input
//                     type="text"
//                     value={password}
//                     user_name="password"
//                     placeholder=" password" class="form-control"
//                     onChange={handlepassword}
//                 />
//                 <br />
//                 <label class="checkbox"> 
//                 <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
//                 </label>
//                 <br /> <br />
//             {/* <input className="FOF" type="submit"
//                    class="btn btn-lg btn-primary btn-block" value="submit"
//                 /> */}
//                 <Link to="/employees"><button  className="FOF" onClick={handleSubmit}>Login</button></Link>
//                 <Link to="/Home"><button className="FOF">logoff</button></Link>
//             </form>
//         </div>
//     )
// }