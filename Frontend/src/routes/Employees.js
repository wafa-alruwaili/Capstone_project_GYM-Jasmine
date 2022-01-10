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
            {/* <Link to="/invoices"  ><button  class="FOF">profail</button></Link> */}
            <Link to="/Home"  ><button  class="FOF">Back</button></Link>

               
                <br />
            </div>
        </form>



             
        
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