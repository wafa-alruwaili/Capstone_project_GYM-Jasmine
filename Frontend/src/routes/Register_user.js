// import React, { useState } from "react";
// import axios from "axios"
// import { Link } from "react-router-dom";

// export default function Register_user() {
//     const [myMyUsers, setMyUsers] = useState({username:"",password:"",role:"" })


//     let [username, setUsername] = useState("")
//     let [password, setPassword] = useState("")
//     let [role, setRole] = useState("")
//     let [m_id, setM_id] = useState("")
//     let [name, setName] = useState("")
//     let [gender, setGender] = useState("")
//     let [address, setAddress] = useState("")
//     let [dob, setDob] = useState("")
//     let [height, setHeight] = useState("")
//     let [weight, setWeight] = useState("")
//     let [start_date, setStart_date] = useState("")
//     let [end_date, setEnd_date] = useState("")
//     let [renewal, setRenwal] = useState("")


//     function handleUsername(event) { setUsername((username = event.target.value)); }
//     function handlePassword(event) { setPassword((password = event.target.value)); }
//     function handleRole(event) { setRole((role = event.target.value)) }
//     function handleM_id(event) { setM_id((m_id = event.target.value)); }
//     function handleName(event) { setName((name = event.target.value)); }
//     function handleGender(event) { setGender((gender = event.target.value)); }
//     function handleDob(event) { setDob((dob = event.target.value)); }
//     function handleAddress(event) { setAddress((address = event.target.value)); }
//     function handleHeight(event) { setHeight((height = event.target.value)); }
//     function handleWeight(event) { setWeight((weight = event.target.value)); }
//     function handleStart_date(event) { setStart_date((start_date = event.target.value)); }
//     function handleEnd_date(event) { setEnd_date((end_date = event.target.value)); }
//     function handleRenewal(event) { setRenwal((renewal = event.target.value)); }

//     let newusers = {
//         username:username,
//         password:password,
//         role:role,
//     }

//     let newmember = {
//         m_id: m_id,
//         name: name,
//         gender: gender,
//         address: address,
//         dob: dob,
//         height: height,
//         weight: weight,
//         start_date: start_date,
//         end_date: end_date,
//         renewal: renewal,
    
//     }


//     function handleSubmit(event) {
//         event.preventDefault();
        
        
        
//         axios({

//             method: 'post',
//             url: 'api/users/add',
//             data: newusers

//         });   
//          axios({

//             method: 'post',
//             url: 'api/member/add',
//             data: newmember

//         });
//     }

//     return (
//         <form onSubmit={handleSubmit} >
//             <div className="log">
// {/* <Navbar2/> */}
// <section class="home1" id="home1">
//         <div class="image1">
//       <img src="u-1.png" alt="" /></div>
//       </section>

//             <br/><br/> <br/><br/><center> <h1  style={{ color: "#ffcc00", }}>  Register users</h1> </center><br></br>


//                 <hr />
                

                
                
//                 <label style={{ width: "10%", color: "#ffcc00", }}> username </label>
//                 <input type="text" name="username" placeholder="username" size="15" onChange={handleUsername} /><br/><br/>

//                 <label style={{ width: "10%", color: "#ffcc00", }}> password </label>
//                 <input type="password" name="password" placeholder="password" size="15" onChange={handlePassword} /><br/><br/>

//                 <section class="home1" id="home1">
//         <div class="image1">
//       <img src="u-1.png" alt="" /></div>
//       </section>
            
//             <hr/><button type="submit" className="registerbutton" onClick={handleSubmit}  class="FOF">submit</button>
//             <Link to="/members"  ><button   class="FOF">details</button></Link>
//             <Link to="/Home"  ><button   class="FOF">Back</button></Link>

//                 {/* <input type="text" id="id" name="id" onChange={handleClickDel3} /> */}
//                 {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#33cc33", color: "#FFFFFF", }}></input><br/><br/> */}

//                 <br />
//                 {/* <link to="/Member"></link> */}
//             </div>
//         </form>

//     );
// }