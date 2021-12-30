import React from "react";
import react, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import axios from 'axios'
import { Link } from "react-router-dom";


export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  const [myPlan, setMyPlan] = useState({ p_id: "", p_name: "", description: "", amount: "", active: "" })

  let [p_id, setP_id] = useState("{invoice.p_id}")
let [p_name, setP_name] = useState("{invoice.p_name}")
let [description, setDescription] = useState("{invoice.description}")
let [amount, setAmount] = useState("{invoice.p_name}")
let [active, setActive] = useState("{invoice.active}")
let [del, setdel] = useState("")


function handleP_id(event) { setP_id((p_id = event.target.value)); }
function handleP_name(event) { setP_name((p_name = event.target.value)); }
function handleDescription(event) { setDescription((description = event.target.value)); }
function handleAmount(event) { setAmount((amount = event.target.value)); }
function handleActive(event) { setActive((active = event.target.value)); }
 function handleClickDel3(event) { setdel((del = event.target.value)) }

 
   function handleSubmit(event) {
   }
//     event.preventDefault();
//     axios({

//         method: 'post',
//         url: 'api/plan/add',
//         data: newplan

//     });
// }


//Member
  useEffect(() => {
    axios.get("/api/plan")
      .then(response => {
        console.log(response.data)
        setMyPlan(response.data[1])
      })
    return () => { }
  }, [])
   




function handlesetP_id(){setP_id({p_id: invoice.p_id})}
function handlesetP_name(){setP_name({p_name: invoice.p_name})}
function handlesetDescription(){setDescription({description: invoice.description})}
function handlesetAmount(){setAmount({amount: invoice.amount})}
function handlesetActive(){setActive({active: invoice.active})}


 function handleClickDel2() {

        axios({
            method: 'delete',
            url: `api/plan/delete/${del}`,

        });

    }
 
let newplan = {
      p_id: p_id,
      p_name: p_name,
      description: description,
      amount: amount,
      active:active,
  }
  
  
  return (
    <main style={{ padding: "1rem" }}>
      <h2>الأشتــراكــات</h2>
      <p>
        {invoice.p_name}
      </p>
      {/* <p>p_name {invoice.active}</p> */}
<p>{invoice.Link}</p>
      <form>
      <tr>
    <th>رقم الاشتراك</th>
    <th>عنوان الاشتراك</th>
    <th>وصف الاشتراك</th>
  </tr>
  <tr>
    <th>{invoice.p_id}</th>
    <th>{invoice.p_name}</th>
    <th>{invoice.description}</th>
  </tr>
  
        <table border="1">
          <td>سعر الاشتراك</td>
          <td>{invoice.amount}</td>

        </table>
        <tr>
  </tr>
        <br/>
        <br/><br/>
       <br/><button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "50%", background: "#595959", color: "#FFFFFF", }}>submit</button><br/>
        
        
       <br/><input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "50%", background: "#595959", color: "#FFFFFF", }}></input><br/><br/><br/>

      </form>
    </main>
   );
}













// import React from 'react'
// import react, { useEffect, useState } from 'react'
// import axios from "axios"


// export default function Plan() {

// let [p_id, setP_id] = useState("")
// let [p_name, setP_name] = useState("")
// let [description, setDescription] = useState("")
// let [amount, setAmount] = useState("")
// let [active, setActive] = useState("")
// let [del, setdel] = useState("")


// function handleP_id(event) { setP_id((p_id = event.target.value)); }
// function handleP_name(event) { setP_name((p_name = event.target.value)); }
// function handleDescription(event) { setDescription((description = event.target.value)); }
// function handleAmount(event) { setAmount((amount = event.target.value)); }
// function handleActive(event) { setActive((active = event.target.value)); }
// function handleClickDel3(event) { setdel((del = event.target.value)) }

// function handleSubmit(event) {
//     event.preventDefault();
//     axios({

//         method: 'post',
//         url: 'api/plan/add',
//         data: newplan,

//     });
// }

//  function handleClickDel2() {

//         axios({
//             method: 'delete',
//             url: `api/plan/delete/${del}`,

//         });

//     }


// let newplan = {
//     p_id: p_id,
//     p_name: p_name,
//     description: description,
//     amount: amount,
//     active:active,
// }
//     return (
//         <form onSubmit={handleSubmit}>
//         <div className="log">
//              <h1>plan</h1>
//                  <label> number plan</label>
//                  <input type="text" name="p_id" placeholder="p_id" size="15" onChange={handleP_id} /><br /><br />
//                  <label> name Plan</label>
//                  <input type="text" name="p_name" placeholder="p_name" size="15" onChange={handleP_name} /><br /><br />
//                  <label> description plan</label>
//                  <input type="text" name="description" placeholder="description" size="15" onChange={handleDescription} /><br /><br />
//                  <label> amount Plan</label>
//                  <input type="text" name="amount" placeholder="amount" size="15" onChange={handleAmount} /><br /><br />
//                  <label> active plan</label>
//                  <input type="text" name="p_id" placeholder="p_id" size="15" onChange={handleActive} /><br /><br />
//                  <button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#595959", color: "#FFFFFF", }}>submit</button>
//                  <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#595959", color: "#FFFFFF", }}></input><br/><br/> 

//         </div>
//         </form>
//     );
// }
