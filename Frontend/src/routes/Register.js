import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";




export default function Register() {
const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", date_of_birth: "", start_date: "", end_date: "" })

    function handleClick() {

    }

    let [m_id, setM_id] = useState("")
    let [name, setName] = useState("")
    let [gender, setGender] = useState("")
    let [address, setAddress] = useState("")
    let [date_of_birth, setDate_of_birth] = useState("")
    let [heigh, setHeigh] = useState("")
    let [weight, setWeight] = useState("")
    let [start_date, setStart_date] = useState("")
    let [end_date, setEnd_date] = useState("")
    let [renewal, setRenwal] = useState("")
    let [del, setdel] = useState("")

    function handleM_id(event) { setM_id((m_id = event.target.value)); }
    function handleName(event) { setName((name = event.target.value)); }
    function handleGender(event) { setGender((gender = event.target.value)); }
    function handleDate_of_birth(event) { setDate_of_birth((date_of_birth = event.target.value)); }
    function handleAddress(event) { setAddress((address = event.target.value)); }
    function handleHeigh(event) { setHeigh((heigh = event.target.value)); }
    function handleWeight(event) { setWeight((weight = event.target.value)); }
    function handleStart_date(event) { setStart_date((start_date = event.target.value)); }
    function handleEnd_date(event) { setEnd_date((end_date = event.target.value)); }
    function handleRenewal(event) { setRenwal((renewal = event.target.value)); }
    // function handleClickDel3(event) { setdel((del = event.target.value)) }


    let newmember = {
        m_id: m_id,
        name: name,
        gender: gender,
        address: address,
        date_of_birth: date_of_birth,
        heigh: heigh,
        weight: weight,
        start_date: start_date,
        end_date: end_date,
        renewal: renewal,

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
            {/* <img src="t1.jpg" width="100%"/> */}



                <center> <h1>  Register Member</h1> </center>


                <hr />
                <label> M_id </label>
                <input type="text" name="m_id" placeholder="m_id" size="15" onChange={handleM_id} /><br/><br/>
                <label> Name </label>
                <input type="text" name="name" placeholder="name" size="15" onChange={handleName} /><br/><br/>
                <label> Gender  </label>
                {/* <select id="f1" onChange={handleGender}> */}
                {/* <option disabled value="" selected>Selection</option> */}
                {/* // <option value="male">Male</option>
                  //  <option value="femal">Femal</option> */}
                {/* </select> */}
                {/* <div id="f1" onChange={handleGender}>
                    <input type="radio" value="male" />male
                    <input type="radio" value="femal" />femal
                </div> */}

                <input type="radio" value="male" checked={gender == 'male'}
                    onChange={handleGender} />Male
                <input type="radio" value="femal" checked={gender == 'femal'}
                    onChange={handleGender} />Femal<br/><br/>
                <label>Heigh</label>
                <input type="text" name="heigh" placeholder="heigh" size="15" onChange={handleHeigh} /><br/><br/>
                <label >Weight</label>
                <input type="text" name="weight" placeholder="weight" size="15" onChange={handleWeight} /><br/><br/>
                <label>Age</label>
                <input type="text" name="date_of_birth" size="10" onChange={handleDate_of_birth} /><br/><br/>
                <label> Address</label>
                <input type="text" name="Address" onChange={handleAddress} /><br/><br/>
                <label >Start_date</label>
                <input type="text" name="start_date" placeholder="start_date" size="15" onChange={handleStart_date} /><br/><br/>
                <label >End_date</label>
                <input type="text" name="end_date" placeholder="end_date" size="15" onChange={handleEnd_date} /><br/><br/>
                <label> Renewal </label>
                <input type="radio" value="yes" checked={renewal == 'yes'}
                    onChange={handleRenewal} />Yes
                <input type="radio" value="no" checked={renewal == 'no'}
                    onChange={handleRenewal} />No<br/><br/>

            
            
            <hr/><button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#595959", color: "#FFFFFF", }}>submit</button><br/><br/>
            <Link to="/members"  ><button  style={{ width: "10%", background: "#595959", color: "#FFFFFF", }}>profail</button></Link><br/><br/>
            <Link to="/"  ><button  style={{ width: "10%", background: "#595959", color: "#FFFFFF", }}>Back</button></Link>

                {/* <input type="text" id="id" name="id" onChange={handleClickDel3} /> */}
                {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#33cc33", color: "#FFFFFF", }}></input><br/><br/> */}

                <br />
                {/* <link to="/Member"></link> */}
            </div>
        </form>

    );
}

