import { useState } from "react"
import React from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


export default function Login() {

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")


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
      url: "https://w-gym-the-lion-backend.herokuapp.com/api/user/login",
      params: { username: username, password: password }
    })
      .then((res => {
        console.log(res.data)
        if (res.data == "authenticatedemployees") {
          localStorage.setItem("LogIn", "employees")
          navigate("/")
        }
        else if (res.data == "authenticatedmember") {
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
 <h1 style={{ fontsize: "2.5rem", color: "#ffcc00", textAlign: "left" }}>GYM The Lion</h1>
<div className='gog'><img src="logo.png" /></div>
      <h2 class="form-signin-heading" style={{ color: "#ffcc00", }}>Please login</h2>

      <form class="form-signin" onSubmit={handleSubmit}>

        <input
          type="text"
          value={username}
          username="username"
          placeholder=" username" class="form-control"
          onChange={handleUsername}
          required />
        <input
          type="text"
          value={password}
          username="password"
          placeholder=" password" class="form-control"
          onChange={handlePassword}
          required />
        <br />
        <label class="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
        </label>
        <br /> <br />

        <Link to="/member"><button className="FOF" onClick={handleSubmit}>Login</button></Link>
        <Link to="/"> <button onClick={() => { localStorage.setItem("LogIn", "") }} className='FOF'> Log Out </button></Link>
      </form>
    </div>
  )
}