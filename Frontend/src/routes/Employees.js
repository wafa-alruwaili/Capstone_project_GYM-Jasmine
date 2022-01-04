import { Link } from "react-router-dom";
import React from 'react'
import react, { useState } from "react";
import axios from "axios"

export default function Employees() {
    const [myEmployees, setmyEmployees] = useState({ e_id: "", password: "", full_name: "", user_name: "",type :"" })

    
    let [e_id, setE_id] = useState("")
    let [password, setPassword] = useState("")
    let [full_name, setFull_name] = useState("")
    let [user_name, setUser_name] = useState("")
    let [type, setType] = useState("")
    let [clickdel12, setClickDel12] = useState("")




    function handleE_id(event) { setE_id((e_id = event.target.value)); }
    function handlePassword(event) { setPassword((password = event.target.value)); }
    function handleFull_name(event) { setFull_name((full_name = event.target.value)); }
    function handleUser_name(event) { setUser_name((user_name = event.target.value)); }
    function handleType (event) { setType ((type  = event.target.value)); }
    function handleClickDel12(event) { setClickDel12((clickdel12 = event.target.value)) }



    let newemployees = {
        e_id: e_id,
        password: password,
        full_name: full_name,
        user_name: user_name,
        type: type
    }



    function handleSubmit(event) {
        event.preventDefault();
        axios({

            method: 'post',
            url: 'api/employees/add',
            data: newemployees

        });
    }

    function handleClickDel2() {

        axios({
            method: 'delete',
            url: `api/member/delete/${clickdel12}`,

        });

    }

    
    
    
    return (
        <div>
<br/><br/>
<br/>
<br/>
<br/>

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

<form onSubmit={handleSubmit} >
            <div className="log">



            <br/><br/> <br/><br/><center> <h1  style={{ color: "#ffcc00", }}>  Employe Member</h1> </center><br></br>


                <hr />
                <label style={{ width: "10%", color: "#ffcc00", }}> e_id </label>
                <input type="text" name="e_id" placeholder="e_id" size="15" onChange={handleE_id} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> password </label>
                <input type="text" name="name" placeholder="name" size="15" onChange={handlePassword} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>full_name</label>
                <input type="text" name="full_name" placeholder="full_name" size="15" onChange={handleFull_name} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> user_name</label>
                <input type="text" name="user_name" onChange={handleUser_name} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>type </label>
                <input type="text" name="type " placeholder="type " size="15" onChange={handleType } /><br/><br/>

            
            
            <hr/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>submit</button><br/><br/>
            <hr/><button type="submit" className="registerbutton" onClick={handleClickDel12} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>Remove</button><br/><br/>
            <Link to="/employe"  ><button  style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>profail</button></Link><br/><br/>
            <Link to="/Home"  ><button  style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>Back</button></Link>

               
                <br />
            </div>
        </form>



             
        </div>
    )
}
