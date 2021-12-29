// import React from 'react';
// import { useParams , Link } from "react-router-dom";
// import { getLessons } from "./data";
// export default function Lessons() {
//     let params = useParams();
//     let lessons = getLessons(parseInt(params.lessonsId, 10));
//     return (
//         <main style={{ padding: "1rem" , backgroundColor:"unset" }}>
//           <Link to={`/Lessons/${lessons.id}`}
//                 key={lessons.l_id}>
//               <img src={lessons.src} width="500" height="300"/>
//               </Link>
//           {/* <p>Type: {lessons.l_type}</p> */}
//           <p> Name: {lessons.l_Name}</p>
//           {/* <p>Location: {lessons.location}</p> */}
//           {/* <p>Time:  {lessons.time} </p> */}
//           <p>Details:  {lessons.details} </p>
//         </main>
//       );
//     }


//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
import React from "react";
import react, { useEffect, useState } from 'react'
import axios from "axios"
//import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";





export default function Lessons() {
    // const [myLessons, setMyLessons] = useState({ l_id: "", l_name: "", l_type: "", l_description: "", l_date_time: "" })

    function handleClick() {

    }

    let [l_id, setL_id] = useState("")
    let [l_name, setL_name] = useState("")
    let [l_type, setL_type] = useState("")
    let [l_description, setL_description] = useState("")
    let [l_date_time, setL_date_time] = useState("")
    let [del, setdel] = useState("")
    let [Category, setCategory] = useState("");
    let [note, setNote] = useState("");
    


    function handleL_id(event) { setL_id((l_id = event.target.value)); }
    function handleL_name(event) { setL_name((l_name = event.target.value)); }
    function handleL_type(event) { setL_type((l_type = event.target.value)); }
    function handleL_description(event) { setL_description((l_description = event.target.value)); }
    function handleL_date_time(event) { setL_date_time((l_date_time = event.target.value)); }
    function handleClickDel3(event) { setdel((del = event.target.value)) }
    // function handleCategory(event) {setCategory(Category = event.target.value);}
         function handleNote(event) {setNote(note = event.target.value);}
    
    function handleSubmit(event) {
        event.preventDefault();
        axios({

            method: 'post',
            url: 'api/lessons/add',
            data: newlessons,

        });
    }



    let newlessons = {
        l_id: l_id,
        l_name: l_name,
        l_type: l_type,
        l_description: l_description,
        l_date_time: l_date_time,
    }



    return (
        <form onSubmit={handleSubmit} >
            <div className="log">
                {/* <img src="*" width="100%"></img> */}



                 <center> <h1 style={{ background: "#33cc33", fontsize: "2.5rem", color: "#f0ecec", textAlign: "center" }}>  Lessons</h1> </center>


                <hr />
                 <label> number lesson</label>
                 <input type="text" name="l_id" placeholder="l_id" size="15" onChange={handleL_id} /><hr />
                 <label> subject lesson </label>
                 <input type="text" name="l_name" placeholder="l_name" size="15" onChange={handleL_name} /><hr />
                 <label> type lesson :-</label><br></br><br></br>
                 <input type="radio" value="Swimming" checked={l_type == 'Swimming'} onChange={handleL_type} name="Swimming" /> Swimming🏊<br />
                     <img src="s1.jpg" width="10%"></img><br />

                     <input type="radio" value="Boxing" checked={l_type == 'Boxing'} onChange={handleL_type} name="Boxing" /> Boxing💪<br />
                     <img src="x1.jpg" width="10%"></img><br />

                     <input type="radio" value="Body building" checked={l_type == 'Body building'} onChange={handleL_type} name="Body building" /> Body building🏋️‍♀️<br />
                     <img src="b1.jpg" width="10%"></img><br />

                     <input type="radio" value="Yoga" checked={l_type == 'Yoga'} onChange={handleL_type} name="Yoga" /> Yoga🧘‍♀️<br />
                     <img src="y1.jpg" width="10%"></img><br />
                 <br></br>
                 <br></br>
                 <label >description lesson</label>
                 <br /><textarea placeholder="L_description" onChange={handleL_description} >
                 </textarea>
                 <br />               
                 <label >date_time lesson</label>
                 <input type="text" name="l_date_time" placeholder="l_date_time" size="15" onChange={handleL_date_time} /><hr />


                 <button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#33cc33", color: "#FFFFFF", }}>submit</button>
                 {/* <input type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input> */}

                
        
                 <br />
             </div>
         </form>

     );
 }
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""


// function Lessons() {

//     let [del, setdel] = useState("")
//     let [Category, setCategory] = useState("");
//     let [note, setNote] = useState("");



//     function handleM_id(event) { setM_id((m_id = event.target.value)); }
//     function handleName(event) { setName((name = event.target.value)); }
//     function handleGender(event) { setGender((gender = event.target.value)); }
//     function handleDate_of_birth(event) { setDate_of_birth((date_of_birth = event.target.value)); }
//     function handleAddress(event) { setAddress((address = event.target.value)); }
//     function handleHeigh(event) { setHeigh((heigh = event.target.value)); }
//     function handleWeight(event) { setWeight((weight = event.target.value)); }
//     function handleStart_date(event) { setStart_date((start_date = event.target.value)); }
//     function handleEnd_date(event) { setEnd_date((end_date = event.target.value)); }
//     function handleRenewal(event) { setRenwal((renewal = event.target.value)); }
//     function handleClickDel3(event) { setdel((del = event.target.value)) }
//     function handleCategory(event) {setCategory(Category = event.target.value);}
//     function handleNote(event) {setNote(note = event.target.value);}
//     function handleSubmit(event) {event.preventDefault();}
            
//     function handleClickDel2() {

//         axios({
//             method: 'delete',
//             url: `api/member/delete/${del}`,

//         });}


//     return (

        
//         <main id="main" style={{ padding: "1rem" }}>


// <form onSubmit={handleSubmit} >
//             <div className="log">
//                 {/* <img src="*" width="100%"></img> */}

//                  <hr />
//                 <label> M_id </label>
//                 <input type="text" name="m_id" placeholder="m_id" size="15" onChange={handleM_id} /><hr />
//                 <label> Name </label>
//                 <input type="text" name="name" placeholder="name" size="15" onChange={handleName} /><hr />
//                 <label> Gender  </label>  
//                 {/* <select id="f1" onChange={handleGender}> */}
//                 {/* <option disabled value="" selected>Selection</option> */}
//                 {/* // <option value="male">Male</option>
//                   //  <option value="femal">Femal</option> */}
//                 {/* </select> */}
//                 <div id="f1" onChange={handleGender}>
//                     <input type="radio" value="male" />male
//                     <input type="radio" value="femal" />femal
//                 </div> 

//                 {/* <input type="radio" value="male" checked={gender == 'male'}
//         onChange={handleGender} />Male
//         <input type="radio" value="femal" checked={gender == 'femal'}
//         onChange={handleGender} />Femal */}

//                 <br></br>
//                 <br></br>
//                 <label >Heigh</label>
//                 <input type="text" name="heigh" placeholder="heigh" size="15" onChange={handleHeigh} /><hr />
//                 <label >Weight</label>
//                 <input type="text" name="weight" placeholder="weight" size="15" onChange={handleWeight} /><hr />
//                 <label>date_of_birth</label>
//                 <input type="text" name="date_of_birth" size="10" onChange={handleDate_of_birth} />
//                 <br /><label> Address:</label>
//                 <br /><input placeholder="Address" onChange={handleAddress} />
//                 <label >Start_date</label>
//                 <input type="text" name="start_date" placeholder="start_date" size="15" onChange={handleStart_date} /><hr />
//                 <label >End_date</label>
//                 <input type="text" name="end_date" placeholder="end_date" size="15" onChange={handleEnd_date} /><hr />
//                 <label> Renewal </label> 


// <input type="radio" value="yes" checked={ renewal== 'yes'}
//         onChange={handleRenewal} />Yes
//         <input type="radio" value="no" checked={renewal == 'no'}
//         onChange={handleRenewal} />No 

//                 <br />
//                 <br />
//                 <button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}>submit</button>

//                 <input type="text" id="id" name="id" onChange={handleClickDel3} />
//                 <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input>

//                 <br />
//                 {/* <link to="/Member"></link> */}
//              </div>
      

    



//             <div class="container">
//                 <br /> <br /><label> Category:-</label><br /><br />
//                 <input type="radio" value="Swimming"checked={Category == 'Swimming'} onChange={handleCategory} name="Swimming" /> Swimming🏊<br/>
//                 <img src="s1.jpg" width="50%"></img><br /> 

//                 <input type="radio" value="Boxing"checked={Category == 'Boxing'}onChange={handleCategory} name="Boxing" /> Boxing💪<br />
//                 <img src="x1.jpg" width="50%"></img><br /> 

//                 <input type="radio" value="Body building"checked={Category == 'Body building'}onChange={handleCategory} name="Body building" /> Body building🏋️‍♀️<br />
//                 <img src="b1.jpg" width="50%"></img><br />

//                 <input type="radio" value="Yoga"checked={Category == 'Yoga'}onChange={handleCategory} name="Yoga" /> Yoga🧘‍♀️<br />
//                 <img src="y1.jpg" width="50%"></img><br />

//                 <br/><label >Note</label><br /><textarea></textarea>
//                 <br/><br/><button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "50%", background: "#33cc33", color: "#FFFFFF", }}>submit</button>

//             </div>
//             </form>
//         </main>


//     );
// }


// export default Lessons




























// import React, { Component } from "react";
// import axios, { Axios } from "axios"
// export default class Member extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             MemberList: [],
//         };
//     }
//     componentDidMount() {
//         axios.get("api/member").then(response => {
//             const MemberList = response.data
//             this.setState({ MemberList });
//         });
//     }
//     deleteSpecialist(id) {
//         axios.delete(`/api/member/delete/${id}`)
//             .then(res => {
//                 const MemberList = this.state.MemberList.filter(item => item.id !== id);
//                 this.setState({ MemberList });
//            })
//     }
//     render() {
//         return (
//             <div>
//                 <table >
//                     <thead>
//                         <tr>
//                             <th >Lesson_id</th><br></br>
//                             <th >lesson name </th><br></br>
//                             <th >L_type</th><br></br>
//                             <th >L_description</th><br></br>
//                             <th >L_date_time</th><br></br>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.MemberList.map((item => (
//                             <tr key={item.l_id}>
//                                 <td>{item.l_id}</td><br></br>
//                                 <td>{item.L_name}</td><br></br>
//                                 <td>{item.L_type}</td><br></br>
//                                 {/* <td><img height="100" width="100" src={item.image} /></td> */}
//                                 <td>{item.L_description}</td><br></br>
//                                 <td>{item.L_date_time}</td><br></br>
//                                 <td><button >add</button></td>
//                                 <td><button onClick={(e) => this.deleteSpecialist(item.id, e)}>delete</button></td>
//                             </tr>
//                         )))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         )}}



// // import React, { useState } from "react";
// // import react from "react";
// // import axios from "axios";




