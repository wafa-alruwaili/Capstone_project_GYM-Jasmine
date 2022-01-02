import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios"



export default function Home() {
  // const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", dob: "", start_date: "", end_date: "" })
  let [username, setUserName] = useState("")
  let [passowrd, setPassowrd] = useState("")
  function handleUserName(event) { setUserName((username= event.target.value)); }
  function handlePassowrd(event) { setPassowrd((passowrd = event.target.value)); }
  function handleSubmit(event) {
    event.preventDefault();}
  
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
    <div >
     <br/><br/><br/><br/><h1 style={{ fontsize: "2.5rem", color: "#ffcc00", textAlign: "center" }}>Welcome in<span> GYM The Lion</span> </h1>

     <section class="home" id="home">
     <div class="image">
     <iframe width="560" height="315" src="V1.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  
<img src="about-img.png" alt=""/>
</div>
<div class="content">

    <h3>Benefit of sports</h3>
    <p>Among the benefits of sports is the prevention of heart disease and stroke, and regular exercise strengthens the heart muscle, improves its work, increases the efficiency of blood flow and blood circulation, and regulates the level of cholesterol in the blood in a healthy way. In addition to preventing and reducing the effects of diabetes and high blood pressure.</p>
    <Link to="/Register"  ><button style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>join us</button></Link>
    <br/><br/> <label style={{ width: "10%", color: "#ffcc00", }}>User Name</label>
                <input type="text" name="User Name" placeholder="User Name" size="15" onChange={handleUserName} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>Passowrd</label>
                <input type="text" name="Passowrd" placeholder="Passowrd" size="15" onChange={handlePassowrd} /><br/><br/>
                <Link to="/Employees"  ><hr/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>LogIn</button><br/><br/></Link >


</div>




</section>


<section class="footer">
            <div class="share">
    <a href="https://ar-ar.facebook.com/" class="button">facebook</a>
    <a href="https://twitter.com/hashtag/%D9%85%D8%B9%D8%B3%D9%83%D8%B1_%D8%B7%D9%88%D9%8A%D9%82_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A?lang=ar" class="button">twitter</a>
    <a href="https://www.instagram.com/accounts/login/" class="button">instagram</a>
    <a href="https://www.pinterest.com/" class="button">pinterest</a>
    <a href="https://www.linkedin.com/" class="button">linkedin</a>
</div>

<h1 class="credit"> Created by Programmer <span> Wafa Al-Ruwaili</span> | All rights reserved! </h1>

</section>

<a href="#home" class="fas fa-angle-up" id="scroll-top"></a>
{/* <a href="#home" class="fas fa-angle-up" id="scroll-top"></a> */}
{/* <div class="loader-container">
    <img src="sos.gif" alt=""/>
</div> */}
     <nav
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
        style={{ background: "#f0ecec",
         fontsize: "2.5rem",
          color: "#f0ecec", 
          textAlign: 'left' }}
 
      >
  
      </nav>

      <br></br>
      <br></br>

      {/* <h2>my Member details are:  </h2> */}
     {/* <button onClick={handleClick}>Post to Spring (Member)</button> */}
      {/* <button onClick={handleClickDel}>Delet to Spring (Member)</button>  */}
      <Outlet />
    </div>
  )
}