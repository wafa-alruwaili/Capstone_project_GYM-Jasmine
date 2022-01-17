import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
// import Navbar7 from "./Navbar7";



export default function Employe() {
const [myEmployees, setmyEmployees] = useState({ e_id: "", password: "", full_name: "", user_name: "",type :"" })

    

    let [e_id, setE_id] = useState("")
    let [password, setPassword] = useState("")
    let [full_name, setFull_name] = useState("")
    let [user_name, setUser_name] = useState("")
    let [type, setType] = useState("")
    let [ClickDel2, setClickDel2] = useState("")




    function handleE_id(event) { setE_id((e_id = event.target.value)); }
    function handlePassword(event) { setPassword((password = event.target.value)); }
    function handleFull_name(event) { setFull_name((full_name = event.target.value)); }
    function handleUser_name(event) { setUser_name((user_name = event.target.value)); }
    function handleType (event) { setType ((type  = event.target.value)); }
    function handleClickDel2(event) { setClickDel2((ClickDel2 = event.target.value)) }



    let newemployees = {
        e_id: e_id,
        password: password,
        full_name: full_name,
        user_name: user_name,
        type: type
    }

    

    function handleSubmit(event) {
        event.preventDefault();
let n=localStorage.getItem("login");//n
    if(n=="authenticated"){//n

        axios({

            method: 'post',
            url: 'api/employees/add',
            data: newemployees

        });
        }//n

    }

    function handleClickDel2() {

        axios({
            method: 'delete',
            url: `api/employees/delete/${ClickDel2}`,

        });

    }







    return (
        <form onSubmit={handleSubmit} >
            <div className="log">
            {/* <Navbar7/> */}
            <section class="home1" id="home1">
        <div class="image1">
      <img src="u-1.png" alt="" /></div>
      </section>

            <br/><br/> <br/><br/><center> <h1  style={{ color: "#ffcc00", }}>  Employee register</h1> </center><br></br>


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

            
            
            <hr/><button type="submit" className="registerbutton" onClick={handleSubmit} className="FOF">submit</button>
            <button type="submit" className="registerbutton" onClick={handleClickDel2} className="FOF">Delete</button>
            <hr/> <Link to="/Employee_details"  ><button  className="FOF">profail empolyees</button></Link>
            <Link to="/Home"  ><button  className="FOF">Back</button></Link>

               
                <br />
            </div>
        </form>

    );
}

