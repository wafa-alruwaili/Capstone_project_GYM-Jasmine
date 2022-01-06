import { useState } from "react"
import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Login(props) {
    
    let [user_name, setUser_name] = useState("")
    let [password, setpassword] = useState("")
    
    function handleUser_name(event) {
        setUser_name((user_name = event.target.value));
    }
   
    function handlepassword(event) {
        setpassword((password = event.target.value));
    }
    
    
    
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={user_name}
                    user_name="user_name"
                    placeholder=" user_name"
                    onChange={handleUser_name}
                />
                <input
                    type="text"
                    value={password}
                    user_name="password"
                    placeholder=" password"
                    onChange={handlepassword}
                />
                <br />
            <input type="submit"
                    value="submit"
                />
            </form>
        </div>
    )
}