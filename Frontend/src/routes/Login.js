
// import { Link } from "react-router-dom";
// import React,{useEffect,useState,params} from "react";
// import axios from "axios";


// export default function Expenses() {
//     const [user_name, setUser_name] = useState('')
//     const [password, setPassword] = useState('')
//     const[ out,setOut]=useState('')
//   function handleUser_name(event){
//     setUser_name((user_name=event.target.value));
//   }
//   function handlePassword(event){
//     setPassword((password=event.target.value));
//   }
//   function handleSubmit(event){
//     event.preventDefault();
//     axios({
//       method:"get",
//       url:'api/employees/login',
//       params:{username:user_name,password:password}
//     })
//     .then((res =>{window.alert(res.data)}))
//   }
//     return (
//       <div>
//       <form onSubmit={handleSubmit}>
//           <ul>
//           </ul>
//           <label>
//           user_name:
// </label>
// <input type="text"Name="user_name" value={user_name} onChange={handleUser_name} />
// <label>
// pasword:
// </label>
// <input type="text"pasword="password" value={password} onChange={handlePassword}/>
//  <input type="Submit" value="outIn"  />
// </form>
//       <button>login</button>
//   </div>
//     );
//   }


import { Link } from "react-router-dom";
import React,{useState,useContext} from 'react'
import { Route, Redirect } from 'react-router'
// import { Form, Button } from 'react-bootstrap'
import axios from "axios"
// import './styleForm.css'

export default function Login() {
    const [user_name, setUser_name] = useState('')
    const [password, setPassword] = useState('')
    const[ out,setOut]=useState('')
   /*  const authContext = useContext(AuthContext) */
    function login(e) {
        let employees = {
            user_name: user_name,
            password: password,
        }
        e.preventDefault();
        console.log({ user_name, password });
        //Send Api request to validate data and get token
        axios({
            method: 'post',
            url: 'api/employees/login',
            data: employees
        }).then((response)=> alert(response.data));
    }


    function handleSubmit(event){
        event.preventDefault();
        axios({
          method:"get",
          url:"api/employees/login",
          params:{username:user_name,password:password}
        })
        .then((res =>{setOut(res.data)}))
      }
    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>Login</h2>
         <h1> {out}</h1>
          <form >
        <hr />
       <div>

           <br/>           <br/>
           <br/>
           <br/>

                <label> User Name </label>
                <input type="email" id="#{label}" required="required" onChange={ e=>setUser_name(e.target.value)}/>
                <hr />
                <label> Password</label>
                <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>
                <hr />
                <div class="button-container">
                           <Link to="/login"></Link> <button type="submit" onClick={login}><span>login</span></button>
                        </div>
             </div>
             </form>
      </main>
    )
} 




// import React, { useEffect, useState, params } from "react";
// import axios from "axios"
// import Employe from "./routes/Employe";
// export default function Login() {
    
    
//     let [user_name, setUser_name] = useState("")
//     let [password, setPassword] = useState("")
//     let [sing, setSing] = useState("")
    
    
//     function handleSetuser_name(event) {
//         setUser_name((user_name = event.target.value));
//     }
    
    
    
//     function handlePassword(event) {
//         setPassword((password = event.target.value));
//     }
    
    
//     function handleSubmit(event) {
//         event.preventDefault();
//         axios({
//             method: "get",
//             url: "api/employees/login",
//             params: { username: user_name , password: password}
//         })
//         .then((res => {setSing(res.data)}))
//     }
   
   
   
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={user_name}
//                     name="user_name"
//                     placeholder=" user_name"
//                     onChange={handleSetuser_name}
//                 />
//                 <input type="text" value={password} name="password" placeholder=" password" onChange={handlePassword}/>
//                 <br />
//                 <input type="submit"
//                     value="submit"
//                 />
//             </form>
// <h1>{sing}</h1>
//         </div>
//     )
// }  
// //let users = { "username": username, "password": password } //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق
