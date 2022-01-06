import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";




export default function Register() {
const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", dob: "", start_date: "", end_date: "" })

    

    let [m_id, setM_id] = useState("")
    let [name, setName] = useState("")
    let [gender, setGender] = useState("")
    let [address, setAddress] = useState("")
    let [dob, setDob] = useState("")
    let [height, setHeight] = useState("")
    let [weight, setWeight] = useState("")
    let [start_date, setStart_date] = useState("")
    let [end_date, setEnd_date] = useState("")
    let [renewal, setRenwal] = useState("")
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [del, setdel] = useState("")




    function handleM_id(event) { setM_id((m_id = event.target.value)); }
    function handleName(event) { setName((name = event.target.value)); }
    function handleGender(event) { setGender((gender = event.target.value)); }
    function handleDob(event) { setDob((dob = event.target.value)); }
    function handleAddress(event) { setAddress((address = event.target.value)); }
    function handleHeight(event) { setHeight((height = event.target.value)); }
    function handleWeight(event) { setWeight((weight = event.target.value)); }
    function handleStart_date(event) { setStart_date((start_date = event.target.value)); }
    function handleEnd_date(event) { setEnd_date((end_date = event.target.value)); }
    function handleRenewal(event) { setRenwal((renewal = event.target.value)); }
    function handleUsername(event) { setUsername((username = event.target.value)); }
    function handlePassword(event) { setPassword((password = event.target.value)); }

    
    // function handleClickDel3(event) { setdel((del = event.target.value)) }



    let newmember = {
        m_id: m_id,
        name: name,
        gender: gender,
        address: address,
        dob: dob,
        height: height,
        weight: weight,
        start_date: start_date,
        end_date: end_date,
        renewal: renewal,
        username:username,
        password:password
    }



    function handleSubmit(event) {
        event.preventDefault();
        axios({

            method: 'post',
            url: 'api/member/add',
            data: newmember

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



            <br/><br/> <br/><br/><center> <h1  style={{ color: "#ffcc00", }}>  Register Member</h1> </center><br></br>


                <hr />
                <label style={{ width: "10%", color: "#ffcc00", }}> M_id </label>
                <input type="text" name="m_id" placeholder="m_id" size="15" onChange={handleM_id} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> Name </label>
                <input type="text" name="name" placeholder="name" size="15" onChange={handleName} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> Gender  </label>
                {/* <select id="f1" onChange={handleGender}> */}
                {/* <option disabled value="" selected>Selection</option> */}
                {/* // <option value="male">Male</option>
                  //  <option value="femal">Femal</option> */}
                {/* </select> */}
                {/* <div id="f1" onChange={handleGender}>
                    <input type="radio" value="male" />male
                    <input type="radio" value="femal" />femal
                </div> */}

                <input  style={{ width: "10%", color: "#ffcc00", }}type="radio" value="male" checked={gender == 'male'}
                    onChange={handleGender} />Male
                <input style={{ width: "10%", color: "#ffcc00", }} type="radio" value="femal" checked={gender == 'femal'}
                    onChange={handleGender} />Femal<br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>Height</label>
                <input type="text" name="height" placeholder="height" size="15" onChange={handleHeight} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>Weight</label>
                <input type="text" name="weight" placeholder="weight" size="15" onChange={handleWeight} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>dob</label>
                <input type="text" name="dob" size="10" onChange={handleDob} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> Address</label>
                <input type="text" name="Address" onChange={handleAddress} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>Start_date</label>
                <input type="text" name="start_date" placeholder="start_date" size="15" onChange={handleStart_date} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}>End_date</label>
                <input type="text" name="end_date" placeholder="end_date" size="15" onChange={handleEnd_date} /><br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> Renewal </label>
                <input  style={{ width: "10%", color: "#ffcc00", }}type="radio" value="yes" checked={renewal == 'yes'}
                    onChange={handleRenewal} />Yes
                <input style={{ width: "10%", color: "#ffcc00", }}type="radio" value="no" checked={renewal == 'no'}
                    onChange={handleRenewal} />No<br/><br/>
                <label style={{ width: "10%", color: "#ffcc00", }}> username </label>
                <input type="text" name="username" placeholder="username" size="15" onChange={handleUsername} /><br/><br/>

                <label style={{ width: "10%", color: "#ffcc00", }}> password </label>
                <input type="password" name="password" placeholder="password" size="15" onChange={handlePassword} /><br/><br/>

            
            
            <hr/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>submit</button><br/><br/>
            <Link to="/members"  ><button  style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>profail</button></Link><br/><br/>
            <Link to="/Home"  ><button  style={{ width: "10%", background: "#ffcc00", color: "#000000", }}>Back</button></Link>

                {/* <input type="text" id="id" name="id" onChange={handleClickDel3} /> */}
                {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#33cc33", color: "#FFFFFF", }}></input><br/><br/> */}

                <br />
                {/* <link to="/Member"></link> */}
            </div>
        </form>

    );
}