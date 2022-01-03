import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";




export default function Employe() {
const [myEmployees, setmyEmployees] = useState({ e_id: "", password: "", full_name: "", user_name: "",type :"" })

    

    let [e_id, setE_id] = useState("")
    let [password, setPassword] = useState("")
    let [full_name, setFull_name] = useState("")
    let [user_name, setUser_name] = useState("")
    let [type, setType] = useState("")
    let [del, setdel] = useState("")




    function handleE_id(event) { setE_id((e_id = event.target.value)); }
    function handlePassword(event) { setPassword((password = event.target.value)); }
    function handleFull_name(event) { setFull_name((full_name = event.target.value)); }
    function handleUser_name(event) { setUser_name((user_name = event.target.value)); }
    function handleType (event) { setType ((type  = event.target.value)); }
    // function handleClickDel3(event) { setdel((del = event.target.value)) }



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

    // function handleClickDel2() {

    //     axios({
    //         method: 'delete',
    //         url: `api/member/delete/${del}`,

    //     });

    // }







    return (
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
            <Link to="/employe"  ><button  style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>profail</button></Link><br/><br/>
            <Link to="/Home"  ><button  style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>Back</button></Link>

               
                <br />
            </div>
        </form>

    );
}

