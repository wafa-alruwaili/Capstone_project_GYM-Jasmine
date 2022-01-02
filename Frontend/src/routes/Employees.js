import { Link } from "react-router-dom";
import React from 'react'

export default function Employees() {
    return (
        <div>

             <section class="review" id="review">
             <br/><br/><h1 class="heading"  style={{color: "#ffcc00" }}> Our Employees </h1><br/><br/>

<div class="box-container">

    <div class="box">
        <img src="pic1.png" alt=""/>
        <h3 style={{color: "#ffcc00" }}>Sherine El-Baz</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>Sherine El-Baz is the young girl behind the Woman Up and The Mala Instagram page. She is a sports enthusiast and is interested in fitness, as well as a yoga and Pilates instructor. And certainly when you follow her page, it will help you a lot in exercising at home.</p>
        <td><Link to="/invoices/1" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td>

    </div>
    <div class="box">
        <img src="pic2.png" alt=""/>
        <h3  style={{color: "#ffcc00" }}>Abdulrahman Abdullah</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>Abdel Rahman Abdullah is a pharmacist, athlete, and also the founder of Hit Egypt. And certainly when you follow it, it will motivate you to exercise regularly and follow a healthy diet that will help you get rid of excess weight.</p>
        <td><Link to="/invoices/4" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td>

    </div>
    <div class="box">
        <img src="pic4.png" alt=""/>
        <h3 style={{color: "#ffcc00" }}>Farah Ehsan</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>Farah is one of the most popular yoga instructors who can help you do it and you can do it yourself at home. It also helps you in facing specific problems such as headaches, increasing immunity, treating neck pain, etc.</p>
        <td><Link to="/invoices/3" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td>

    </div>

    <div class="box">
        <img src="pic3.png" alt=""/>
        <h3 style={{color: "#ffcc00" }}>Hala Alhamrani</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>More than 15,000 people follow the account of Hala Al-Hamrani, the young Saudi woman who is fascinated by the sport of boxing. She is the first and only Saudi Arabian to play boxing and train it as well. Hala Al-Hamrani's account is centered on many videos and she does the sport of boxing and martial arts, and it also includes many ideas for how to exercise at home with your children to push women to achieve their dreams and enhance their abilities and strength.</p>
        <td><Link to="/invoices/2" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td>

    </div>

</div>

</section>





             
        </div>
    )
}
