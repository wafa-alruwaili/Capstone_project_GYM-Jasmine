import { Link } from "react-router-dom";
import React from 'react'
import react, { useState } from "react";
import axios from "axios"

export default function Employees() {
    const [myEmployees, setmyEmployees] = useState({ e_id: "", password: "", full_name: "", user_name: "",type :"" })

    
    let [e_id, setE_id] = useState("")
    // let [password, setPassword] = useState("")
    // let [full_name, setFull_name] = useState("")
    // let [user_name, setUser_name] = useState("")
    // let [type, setType] = useState("")
    let [clickdel12, setClickDel12] = useState("")
    let [p_id, setP_id] = useState("")
    let [p_name, setP_name] = useState("")
    let [p_description, setP_description] = useState("")
    let [amount, setAmount] = useState("")
    let [active, setActive] = useState("")



    function handleE_id(event) { setE_id((e_id = event.target.value)); }
    // function handlePassword(event) { setPassword((password = event.target.value)); }
    // function handleFull_name(event) { setFull_name((full_name = event.target.value)); }
    // function handleUser_name(event) { setUser_name((user_name = event.target.value)); }
    // function handleType (event) { setType ((type  = event.target.value)); }
    function handleClickDel12(event) { setClickDel12((clickdel12 = event.target.value)) }
    function handleP_id(event) { setP_id((p_id = event.target.value)); }
    function handleP_name(event) { setP_name((p_name = event.target.value)); }
    function handleP_description(event) { setP_description((p_description = event.target.value)); }
    function handleAmount(event) { setAmount((amount = event.target.value)); }
    function handleActive(event) { setActive((active = event.target.value)); }

    let newemployees = {
      p_id: p_id,
        p_name: p_name,
         p_description: p_description,
         amount: amount,
          active: active,   
//   employees: {
//                  e_id: e_id
//          }  
         }

    function handleSubmit(event) {
        event.preventDefault();
        axios({

            method: 'post',
            url: 'api/plan/add',
            data: newemployees

        });
    }

    function handleClickDel2() {

        axios({
            method: 'delete',
            url: `api/plan/delete/${p_id}`,

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
           
        </div>
        <p>Sherine El-Baz is the young girl behind the Woman Up and The Mala Instagram page. She is a sports enthusiast and is interested in fitness, as well as a yoga and Pilates instructor. And certainly when you follow her page, it will help you a lot in exercising at home.</p>
        <td><Link to="/invoices/1" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td>

    </div>
    <div class="box">
        <img src="pic2.png" alt=""/>
        <h3  style={{color: "#ffcc00" }}>Abdulrahman Abdullah</h3>
        <div class="stars">
            
        </div>
        <p>Abdel Rahman Abdullah is a pharmacist, athlete, and also the founder of Hit Egypt. And certainly when you follow it, it will motivate you to exercise regularly and follow a healthy diet that will help you get rid of excess weight.</p>
        <td><Link to="/invoices/4" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td>

    </div>
    <div class="box">
        <img src="pic4.png" alt=""/>
        <h3 style={{color: "#ffcc00" }}>Farah Ehsan</h3>
        <div class="stars">
            
        </div>
        <p>Farah is one of the most popular yoga instructors who can help you do it and you can do it yourself at home. It also helps you in facing specific problems such as headaches, increasing immunity, treating neck pain, etc.</p>
        <td><Link to="/invoices/3" ><button  style={{background: "#ffcc00", color: "#000000" }}>Choose lesson</button></Link></td>

    </div>

    <div class="box">
        <img src="pic3.png" alt=""/>
        <h3 style={{color: "#ffcc00" }}>Hala Alhamrani</h3>
        <div class="stars">
            
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
                {/* <label style={{ width: "10%", color: "#ffcc00", }}> password </label>
                <input type="text" name="name" placeholder="name" size="15" onChange={handlePassword} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>full_name</label>
                <input type="text" name="full_name" placeholder="full_name" size="15" onChange={handleFull_name} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> user_name</label>
                <input type="text" name="user_name" onChange={handleUser_name} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>type </label>
                <input type="text" name="type " placeholder="type " size="15" onChange={handleType } /><br/><br/> */}
                <label style={{ width: "10%", color: "#ffcc00", }}> p_id </label>
                <input type="text" name="p_id" placeholder="p_id" size="15" onChange={handleP_id} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> p_name </label>
                <input type="text" name="p_name" placeholder="p_name" size="15" onChange={handleP_name} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> p_description </label>
                <input type="text" name="p_description" placeholder="p_description" size="15" onChange={handleP_description} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> amount </label>
                <input type="text" name="amount" placeholder="amount" size="15" onChange={handleAmount} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> active </label>
                <input type="text" name="active" placeholder="active" size="15" onChange={handleActive} /><br/><br/>
               
               
               
               
               
                <Link to="/invoice" ><hr/><button type="submit" className="registerbutton" onClick={handleSubmit} class="FOF" >submit</button></Link>
            <button type="submit" className="registerbutton" onClick={handleClickDel2} class="FOF">Remove</button>
            <Link to="/invoice"  ><button  class="FOF">profail</button></Link>
            <Link to="/Home"  ><button  class="FOF">Back</button></Link>

               
                <br />
            </div>
        </form>



             
        </div>
    )
}
// "p_id": 1,
//         "p_name": "qaqa",
//         "p_description": "w",
//         "amount": "hello",
//         "active": "yes",
//         "employees": {
//             "e_id": 80,
//             "password": 1234,
//             "full_name": "w",
//             "user_name": "hello",
//             "type": "yes"
//         }
//     }
// ]