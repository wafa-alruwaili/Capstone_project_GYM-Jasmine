// import { useState } from "react"
// import React from "react"
// import axios from "axios"
// import { Link,useNavigate } from "react-router-dom"


// export default function Login(props) {
    
//     let [username, setUsername] = useState("")
//     let [password, setpassword] = useState("")
//     const navigate = useNavigate();

//     function handleUsername(event) {
//         setUsername((username = event.target.value));
//     }
   
//     function handlepassword(event) {
//         setpassword((password = event.target.value));
//     }
    

    
//     function handleSubmit(event) {
//         event.preventDefault();
//         axios({
//             method: "get",
//             url: "api/member/login",
//             params: { username: username, password: password }
//         })
//             .then((res => {
//                 console.log(res.data)
//                 if (res.data == "authenticated") {
//                     props.handleLogin();
//                     localStorage.setItem("logined","yes")
//                      navigate("/Members")
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
//                     value={username}
//                     name="username"
//                     placeholder=" username"
//                     onChange={handleUsername}
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
//                 <Link to="/"><button onClick={handleSubmit} className='FOF'>Login2</button></Link>
//                 <Link to="/lessons"><button className='FOF'>Choose your Lessons</button></Link>
//             </form>
//     )
// }