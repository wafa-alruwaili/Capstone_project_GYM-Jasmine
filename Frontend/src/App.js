import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios"



export default function App() {
    // const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", dob: "", start_date: "", end_date: "" })
let [langouge, setLangouge] = useState("");

function handleLangouge(event) { setLangouge((langouge = event.target.value)); }

    // //Member
    // useEffect(() => {
    //   axios.get("/api/member")
    //     .then(response => {
    //       console.log(response.data)
    //       setMyMember(response.data[1])
    //     })
    //   return () => { }
    // }, [])



    // // Member add
    // function handleClick() {
    //   axios({
    //     method: 'post',
    //     url: 'api/member/add',
    //     data: {
    //     newmember  
    //     }
    //   });
    // }

    // // Member delete 
    // function handleClickDel() {
    //   axios({
    //     method: 'delete',
    //     url: "/api/member/delete/1"
    //   })
    // }



    return (
        

<div link rel="stylesheet" href="index.css" 

link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">


            <h1 style={{ background: "#595959", fontsize: "2.5rem", color: "#f0ecec", textAlign: "center" }}>Welcome in GYM The Lione</h1>
            

            {/* <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "4rem",
                    padding: "1rem 9%",
                    background: "#f0ecec",
                    fontsize: "2.5rem",
                    boxshadow: " 0 .5rem 1rem rgba(0,0,0,.1)",
                    display: "flex",
                    flexwrap: "wrap",
                    border: "1rem solid #fff"


                }}
                style={{
                    background: "#f0ecec",
                    fontsize: "2.5rem",
                    color: "#f0ecec",
                    textAlign: 'left'
                }}

            ></nav> */}


            {/* header section starts */}
           
           
            <header>
                
            <a href="#" class="logo"><i class="fas fa-utensils"></i>GYM The Lion</a>
            
            <img scr="logo.png"/>
            <div id="menu-bar" class="fas fa-bars"></div>
            
                <nav class="navbar">
                <label style={{color:"#ffcc00"}}> Language  </label>  
                 <select  style={{background:"#ffffcc"}}id="f1" onChange={handleLangouge}> 
                <option disabled value="" selected>Selection</option> 
                <option value="male">Arabic</option>
                   <option value="femal">Einglish</option> 
                 </select> 
                 



                 <time  style={{color:"#ffcc00"}}>7:57Pm</time>
                <ul className="ul-list">
                    <Link to="/Home"><button style={{ width:"12%", background: "#ffcc00", color: "#000000" }}>Home </button></Link>
                    <Link to="/Register"><button style={{ width:"16%", background: "#ffcc00", color: "#000000" }}>Register </button></Link>
                    <Link to="/employe"><button style={{ width:"16%", background: "#ffcc00", color: "#000000" }}>employe register </button></Link>
                    <Link to="/members"><button style={{ width:"16%", background: "#ffcc00", color: "#000000" }}>Member </button></Link>
                    <Link to="/lessons"><button style={{ width:"16%", background: "#ffcc00", color: "#000000" }}>Lessons </button></Link>
                    <Link to="/invoices"><button style={{ width:"10%", background: "#ffcc00", color: "#000000" }}>Plan </button></Link>
                    <Link to="/employees"><button style={{ width:"21%", background: "#ffcc00", color: "#000000" }}>Employees </button></Link>
                </ul>
            
                


</nav>
            
            </header>
            


            
             {/* header section ends  */}

            {/* <h2>my Member details are:  </h2> */}
            {/* <button onClick={handleClick}>Post to Spring (Member)</button> */}
            {/* <button onClick={handleClickDel}>Delet to Spring (Member)</button>  */}
            <Outlet />
        
        </div>
    )
}