import { Link } from "react-router-dom";
import React from 'react'
import react, { useState } from "react";
import axios from "axios"


export default function Employees() {
    const [myEmployees, setmyEmployees] = useState({ e_id: "", password: "", full_name: "", user_name: "", type: "" })


    let [e_id, setE_id] = useState("")
    let [clickdel12, setClickDel12] = useState("")
    let [p_id, setP_id] = useState("")
    let [p_name, setP_name] = useState("")
    let [p_description, setP_description] = useState("")
    let [amount, setAmount] = useState("")
    let [active, setActive] = useState("")

    function handleE_id(event) { setE_id((e_id = event.target.value)); }
    function handleP_id(event) { setP_id((p_id = event.target.value)); }
    function handleP_name(event) { setP_name((p_name = event.target.value)); }
    function handleP_description(event) { setP_description((p_description = event.target.value)); }
    function handleAmount(event) { setAmount((amount = event.target.value)); }
    function handleActive(event) { setActive((active = event.target.value)); }
    function handleClickDel2(event) { setClickDel12((clickdel12 = event.target.value)) }

    let newemployees = {
        p_id: p_id,
        p_name: p_name,
        p_description: p_description,
        amount: amount,
        active: active,
        employees: {
            e_id: e_id
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://w-gym-the-lion-backend.herokuapp.com/api/plan/add',
            data: newemployees
        });
    }
    function handleClickDel2() {
        axios({
            method: 'delete',
            url: `https://w-gym-the-lion-backend.herokuapp.com/api/plan/delete/${p_id}`,

        });
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="log">

                <section class="home1" id="home1">
                    <div class="image1">
                        <img src="u-1.png" alt="" /></div>
                </section>

              <center> <h1 style={{ color: "#ffcc00", }}> Register Plan </h1> </center><br></br>


                <hr />
                <label style={{ width: "10%", color: "#ffcc00", }}> Number Employee</label>
                <input type="text" name="e_id" placeholder="e_id" size="15" onChange={handleE_id} /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}> Number plan </label>
                <input type="text" name="p_id" placeholder="p_id" size="15" onChange={handleP_id} /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}> Name plan </label>
                <input type="text" name="p_name" placeholder="p_name" size="15" onChange={handleP_name} /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}> Description plan </label>
                <input type="text" name="p_description" placeholder="p_description" size="15" onChange={handleP_description} /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}> Amount plan </label>
                <input type="text" name="amount" placeholder="amount" size="15" onChange={handleAmount} /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}> Active plan </label>
                <input type="text" name="active" placeholder="active" size="15" onChange={handleActive} /><br /><br />
                
                
                
                <Link to="/invoice" ><hr /><button type="submit" className="registerbutton" onClick={handleSubmit} class="FOF" >submit</button></Link>
                <button type="submit" className="registerbutton" onClick={handleClickDel2} class="FOF">Remove</button>
                <Link to="/invoices"  ><button class="FOF">Plan page</button></Link>
                <Link to="/Employee_details"  ><button class="FOF">Back</button></Link>


                <br />
            </div>
        </form>
    )
}