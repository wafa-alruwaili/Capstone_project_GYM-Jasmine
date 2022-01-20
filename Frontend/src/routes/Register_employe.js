import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";



export default function Employe() {
    const [myEmployees, setmyEmployees] = useState({ e_id: "", password: "", full_name: "", username: "", type: "" })



    let [e_id, setE_id] = useState("")
    let [password, setPassword] = useState("")
    let [full_name, setFull_name] = useState("")
    let [username, setUsername] = useState("")
    let [type, setType] = useState("")
    let [ClickDel2, setClickDel2] = useState("")
    let [role, setRole] = useState("")



    function handleE_id(event) { setE_id((e_id = event.target.value)); }
    function handlePassword(event) { setPassword((password = event.target.value)); }
    function handleFull_name(event) { setFull_name((full_name = event.target.value)); }
    function handleUsername(event) { setUsername((username = event.target.value)); }
    function handleType(event) { setType((type = event.target.value)); }
    function handleClickDel2(event) { setClickDel2((ClickDel2 = event.target.value)) }
    function handleRole(event) { setRole((role = event.target.value)) }


    let newusers = {
        username: username,
        password: password,
        role: "employees",
        // employees: {
        //     e_id: e_id,
        // }
    }


    let newemployees = {
        e_id: e_id,
        password: password,
        full_name: full_name,
        username: username,
        type: type,
    }



    function handleSubmit(event) {
        event.preventDefault();


        axios({

            method: 'post',
            url: 'api/employees/add',
            data: newemployees

        });


        axios({

            method: 'post',
            url: 'api/user/add',
            data: newusers

        });


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

                <br /><br /> <br /><br /><center> <h1 style={{ color: "#ffcc00", }}>  Employee register</h1> </center><br></br>


                <hr />
                <label style={{ width: "10%", color: "#ffcc00", }}> e_id </label>
                <input type="text" name="e_id" placeholder="e_id" size="15" onChange={handleE_id} required /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}> password </label>
                <input type="text" name="name" placeholder="name" size="15" onChange={handlePassword} required /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}>full_name</label>
                <input type="text" name="full_name" placeholder="full_name" size="15" onChange={handleFull_name} required /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}> username</label>
                <input type="text" name="username" onChange={handleUsername} /><br /><br />
                <label style={{ width: "10%", color: "#ffcc00", }}>type </label>
                <input type="text" name="type " placeholder="type " size="15" onChange={handleType} required /><br /><br />



                <hr /><button type="submit" className="registerbutton" onClick={handleSubmit} className="FOF">submit</button>
                <button type="submit" className="registerbutton" onClick={handleClickDel2} className="FOF">Delete</button>
                <hr /> <Link to="/Employee_details"  ><button className="FOF">profail empolyees</button></Link>
                <Link to="/invoices"  ><button className="FOF">Back</button></Link>


                <br />
            </div>
        </form>

    );
}

