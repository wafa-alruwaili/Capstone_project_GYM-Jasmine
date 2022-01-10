import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios"
import Login from './routes/Login';


export default function App() {
    //  let [Authentication,setAuthentication]= useState(false);



  
    // function handleLogin(){
    //     setAuthentication(true);
    // }
    // if(!Authentication){
    //     return<Login handleLogin = {handleLogin} />
    // }

    return (



        <div link rel="stylesheet" href="index.css"

            link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">


            <h1 style={{ background: "#595959", fontsize: "2.5rem", color: "#f0ecec", textAlign: "center" }}>Welcome in GYM The Lione</h1>




            <header>

                <a href="#" class="logo"><i class="fas fa-utensils"></i>GYM The Lion</a>

                <img scr="logo.png" />
                <div id="menu-bar" class="fas fa-bars"></div>

                <nav class="navbar">
                    


                   

                    <ul className="ul-list">
                        <Link to="/Home"><button className='FOF'>Home </button></Link>
                        {/* <Link to="/Login"><button className='FOF'>Login </button></Link> */}
                        <Link to="/Register"><button className='FOF' >Register </button></Link>
                        <Link to="/lessons"><button className='FOF'>Lessons </button></Link>
                        <Link to="/members"><button className='FOF'>Member </button></Link>
                        <Link to="/invoices"><button className='FOF'>Plan </button></Link>
                        <Link to="/employe"><button className='FOF'>employe register </button></Link>
                        <Link to="/Employee_details"><button className='FOF'>Employee_details </button></Link>
                        <Link to="/employees"><button className='FOF'>Employees </button></Link>

                   
                    </ul>




                </nav>

            </header>




           
            <Outlet />

        </div>
    )
}