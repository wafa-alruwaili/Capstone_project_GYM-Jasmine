import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios"
import Login from './routes/Login';


export default function Home() {






  return (
    <div >
        <h1 style={{ fontsize: "2.5rem", color: "#ffcc00", textAlign: "left" }}>GYM The Lion</h1>
<div className='gog'><img src="logo.png" /></div>
<h1 style={{ fontsize: "2.5rem", color: "#ffcc00", textAlign: "center" }}>Welcome in<span> GYM The Lion</span> </h1>

      <section class="home" id="home">
        <div class="image">
          <iframe width="560" height="315" src="V1.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


          <img src="about-img.png" alt="" />
        </div>
        <div class="content">

          <h3>Benefit of sports</h3>
          <p>Among the benefits of sports is the prevention of heart disease and stroke, and regular exercise strengthens the heart muscle, improves its work, increases the efficiency of blood flow and blood circulation, and regulates the level of cholesterol in the blood in a healthy way. In addition to preventing and reducing the effects of diabetes and high blood pressure.</p>
          <Link to="/Register"  ><button style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>join us</button></Link><br />
          {/* <Link to="/Login"  ><hr /><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>LogIn</button><br /><br /></Link > */}
          <Link to="/login"  ><button style={{ width: "10%", background: "#ffcc00", color: "#000000", }} >LogIn </button></Link><br />
          {/* <Link to="/Login2"><button style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>Login member </button></Link> */}

        </div>


      </section>
      <section class="home1" id="home1">
        <div class="image1">
          <img src="u-1.png" alt="" /></div>
      </section>

      <section class="review" id="review">
        {/* <br/><br/><h1 class="heading"  style={{color: "#ffcc00" }}> Our Employees </h1><br/><br/> */}

        <div class="box-container">

          <div class="box">
            <img src="pic1.png" alt="" />
            <h3 style={{ color: "#ffcc00" }}>Sherine El-Baz</h3>
            <div class="stars">

            </div>
            <p>Sherine El-Baz is the young girl behind the Woman Up and The Mala Instagram page. She is a sports enthusiast and is interested in fitness, as well as a yoga and Pilates instructor. And certainly when you follow her page, it will help you a lot in exercising at home.</p>
            {/* <td><Link to="/invoices/1" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td> */}

          </div>
          <div class="box">
            <img src="pic2.png" alt="" />
            <h3 style={{ color: "#ffcc00" }}>Abdulrahman Abdullah</h3>
            <div class="stars">

            </div>
            <p>Abdel Rahman Abdullah is a pharmacist, athlete, and also the founder of Hit Egypt. And certainly when you follow it, it will motivate you to exercise regularly and follow a healthy diet that will help you get rid of excess weight.</p>
            {/* <td><Link to="/invoices/4" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td> */}

          </div>
          <div class="box">
            <img src="pic4.png" alt="" />
            <h3 style={{ color: "#ffcc00" }}>Farah Ehsan</h3>
            <div class="stars">

            </div>
            <p>Farah is one of the most popular yoga instructors who can help you do it and you can do it yourself at home. It also helps you in facing specific problems such as headaches, increasing immunity, treating neck pain, etc.</p>
            {/* <td><Link to="/invoices/3" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td> */}

          </div>

          <div class="box">
            <img src="pic3.png" alt="" />
            <h3 style={{ color: "#ffcc00" }}>Hala Alhamrani</h3>
            <div class="stars">

            </div>
            <p>More than 15,000 people follow the account of Hala Al-Hamrani, the young Saudi woman who is fascinated by the sport of boxing. She is the first and only Saudi Arabian to play boxing and train it as well. Hala Al-Hamrani's account is centered on many videos and she does the sport of boxing and martial arts, and it also includes many ideas for how to exercise at home with your children to push women to achieve their dreams and enhance their abilities and strength.</p>
            {/* <td><Link to="/invoices/2" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td> */}

          </div>

        </div>

      </section>
      <section class="home1" id="home1">
        <div class="image1">
          <img src="u-1.png" alt="" /></div>
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
        style={{
          background: "#f0ecec",
          fontsize: "2.5rem",
          color: "#f0ecec",
          textAlign: 'left'
        }}
      >
      </nav>
      <br></br>
      <br></br>
      <Outlet />
    </div>
  )
}