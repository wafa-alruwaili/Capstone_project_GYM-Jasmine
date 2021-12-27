import React, { useState } from "react";
import axios from "axios"




export default function Register() {
    //const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", date_of_birth: "", start_date: "", end_date: "" })

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
    function handleSubmit(event) {
        event.preventDefault();
        axios({

            method: 'post',
            url: 'api/member/add',
            data: newmember

        });
    }



    let [del, setdel] = useState("")
    function handleClickDel3(event) { setdel((del = event.target.value)) }
    function handleClickDel2() {

        axios({
            method: 'delete',
            url: `api/delete/{memberId}/${del}`,

        });
    }



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



    return (
        <form onSubmit={handleSubmit} >
            <div className="log">
                {/* <img src="*" width="100%"></img> */}



                <center> <h1 style={{ background: "#ff3399", fontsize: "2.5rem", color: "#f0ecec", textAlign: "center" }}>  Register</h1> </center>


                <hr />
                <label> M_id </label>
                <input type="text" name="m_id" placeholder="m_id" size="15" onChange={handleM_id} /><hr />
                <label> Name </label>
                <input type="text" name="name" placeholder="name" size="15" onChange={handleName} /><hr />
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
        onChange={handleGender} />Femal

                <br></br>
                <br></br>
                <label >Heigh</label>
                <input type="text" name="heigh" placeholder="heigh" size="15" onChange={handleHeigh} /><hr />
                <label >Weight</label>
                <input type="text" name="weight" placeholder="weight" size="15" onChange={handleWeight} /><hr />
                <label>date_of_birth</label>
                <input type="text" name="date_of_birth" size="10" onChange={handleDate_of_birth} />
                <br /><label> Address:</label>
                <br /><textarea placeholder="Address" onChange={handleAddress} >
                </textarea>
                <br />
                <label >Start_date</label>
                <input type="text" name="start_date" placeholder="start_date" size="15" onChange={handleStart_date} /><hr />
                <label >End_date</label>
                <input type="text" name="end_date" placeholder="end_date" size="15" onChange={handleEnd_date} /><hr />
                <label> Renewal </label>



                {/* <div id="f1" onChange={handleRenewal}>
                    <input type="radio" value="yes" />yes
                    <input type="radio" value="no" />no
                </div> */}


<input type="radio" value="yes" checked={ renewal== 'yes'}
        onChange={handleRenewal} />Yes
        <input type="radio" value="no" checked={renewal == 'no'}
        onChange={handleRenewal} />No

                <br />
                <br />
                <button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}>submit</button>

                <input type="text" id="m_id" name="m_id" onChange={handleClickDel3} />
                <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input>

                <br />
            </div>
        </form>

    );
}

