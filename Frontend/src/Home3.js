import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios"
import Login from './routes/Login';



export default function Home3() {



  let loggedIn = localStorage.getItem("LogIn")
  if (loggedIn == "employees") {

    return (
      <div><ul className="ul-list">


        <Link to="/Home"><button className='FOF'>Home</button></Link>
        {/* <Link to="/Home"><button className='FOF'>Home </button></Link> */}
        {/* <Link to="/Login"><button className='FOF'>Login </button></Link> */}
        <Link to="/Register"><button className='FOF' >Register </button></Link>
        <Link to="/members"><button className='FOF'>Member </button></Link>
        <Link to="/lessons"><button className='FOF'>Lessons </button></Link>
        <Link to="/Lessons_details"><button className='FOF'>Lessons_details </button></Link>
        <Link to="/invoices"><button className='FOF'>Plan </button></Link>
        <Link to="/employe"><button className='FOF'>employe register </button></Link>
        <Link to="/Employee_details"><button className='FOF'>Employee_details </button></Link>
        <Link to="/employees"><button className='FOF'>Employees </button></Link>
        <Link to="/"> <button onClick={() => { localStorage.setItem("LogIn", "") }} className='FOF'> Log Out </button></Link>



      </ul>
        <Outlet />
      </div>
    )
  }
  else if (loggedIn == "member") {
    return (
      <div>
        <Link to="/Home"><button className='FOF'>Home</button></Link>
        <Link to="/Register"><button className='FOF' >Register </button></Link>
        <Link to="/members"><button className='FOF'>Member </button></Link>
        <Link to="/lessons"><button className='FOF'>Lessons </button></Link>
        <Link to="/Lessons_details"><button className='FOF'>Lessons_details </button></Link>
        <Link to="/invoices"><button className='FOF'>Plan </button></Link>
        <button onClick={() => { localStorage.setItem("LogIn", "") }} className='FOF'> Log Out </button>

      </div>
    )
  }
  else {
    return (
      <div>
        <h1>hellow</h1>




      </div>
    )
  }
}