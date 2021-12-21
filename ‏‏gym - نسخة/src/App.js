import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios"


export default function App() {
  // const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", dob: "", start_date: "", end_date: "" })


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
    <div>
     <h1 style={{ background: "#ff3399", fontsize: "2.5rem", color: "#f0ecec", textAlign: "center" }}>Welcome in GYM JASMINE </h1>


     <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          padding: "1rem 9%",
          background: "#f7f7f7",
          fontsize: "2.5rem",
          boxshadow: " 0 .5rem 1rem rgba(0,0,0,.1)",
          display: "flex",
          flexwrap: "wrap",
          border: "1rem solid #fff"




        }}

      >

        <Link to="/Register"><button>Register |</button></Link>
        <Link to="/member"><button>Member |</button></Link>
        <Link to="/lesson"><button>Lesson |</button></Link>
        <Link to="/employees"><button>Employees </button>|</Link>
        <Link to="/plan"><button>Plan </button>|</Link>
      </nav>

      <br></br>
      <br></br>
      {/* <h2>my Member details are:  </h2>
      <button onClick={handleClick}>Post to Spring (Member)</button>
      <button onClick={handleClickDel}>Delet to Spring (Member)</button> */}
      <Outlet />
    </div>
  )
}