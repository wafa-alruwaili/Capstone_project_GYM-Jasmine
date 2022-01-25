import React from 'react';
import { useParams, Link } from "react-router-dom";
import { getInvoice } from "../data";
import axios from 'axios'
import react, { useEffect, useState } from 'react'



export default function Plan() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  const [myPlan, setMyPlan] = useState({ p_id: "", p_name: "", description: "", amount: "", active: "" })


  let [p_id, setP_id] = useState("")
  let [p_name, setP_name] = useState("")
  let [description, setDescription] = useState("")
  let [amount, setAmount] = useState("")
  let [active, setActive] = useState("")
  let [clickDel2, setClickDel2] = useState("")

  function handleP_id(event) { setP_id((p_id = event.target.value)); }
  function handleP_name(event) { setP_name((p_name = event.target.value)); }
  function handleDescription(event) { setDescription((description = event.target.value)); }
  function handleAmount(event) { setAmount((amount = event.target.value)); }
  function handleActive(event) { setActive((active = event.target.value)); }
  function handleClickDel2(event) { setClickDel2((clickDel2 = event.target.value)) }

  function handleSubmit(event) {




    event.preventDefault();
    axios({

      method: 'post',
      url: 'https://w-gym-the-lion-backend.herokuapp.com/api/plan/add',
      data: newplan
    });
  }
  function handleClickDel2() {

    axios({
      method: 'delete',
      url: `https://w-gym-the-lion-backend.herokuapp.com/api/plan/delete/${clickDel2}`,

    });

  }
  let newplan = {
    p_id: p_id,
    p_name: p_name,
    description: description,
    amount: amount,
    active: active,
  }


  return (//هنا يطلع لي في صفحة البلان اللي بالنص


    <div class="card">
      <div class="container">



        <main style={{ padding: "1rem" }}><br /><br />
          <h1 style={{ color: "#ffcc00" }}>Subscriptions</h1>

          <h1 className="button2">{invoice.p_name}</h1>
          <p style={{ background: "#ffcc00", color: "#000000" }}>Subscription number:-{invoice.p_id}</p>
          <p style={{ background: "#ffcc00", color: "#000000" }}>Subscription name:-{invoice.p_name}</p>
          <p style={{ background: "#ffcc00", color: "#000000" }}>Subscription description:-{invoice.p_description}</p>
          <p style={{ background: "#ffcc00", color: "#000000" }}>Subscription price:-{invoice.amount}</p>
          <p style={{ background: "#ffcc00", color: "#000000" }}>description active:-{invoice.active}</p>
        </main>
      </div>
      <br></br><Link to="/lessons_details" ><button className="FOF" >back</button></Link><br></br>
      <hr /><button type="submit" className="registerbutton" onClick={handleSubmit} class="FOF" >submit</button>
      <button type="submit" className="registerbutton" onClick={handleClickDel2} class="FOF">Remove</button>
      <Link to="/home" > <button onClick={() => { localStorage.setItem("LogIn", "") }} className="FOF"> Log Out </button></Link>


      {/* <br/> <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "50%", background: "#ffcc00", color: "#000000", }}></input><br/><br/><br/> */}
    </div>
  );
}