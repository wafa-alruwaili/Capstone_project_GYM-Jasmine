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
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";





export default function Lessons() {
const [myLessons, setMyLessons] = useState({ l_id: "", l_name: "", l_type: "", l_description: "", l_date_time: "",m_id:"" })

    

    let [l_id, setL_id] = useState("")
    let [l_name, setL_name] = useState("")
    let [l_type, setL_type] = useState("")
    let [l_description, setL_description] = useState("")
    let [l_date_time, setL_date_time] = useState("")
    let [m_id, setM_id] = useState("")
    let [del, setdel] = useState("")
    let [note, setNote] = useState("");
    


    function handleL_id(event) { setL_id((l_id = event.target.value)); }
    function handleL_name(event) { setL_name((l_name = event.target.value)); }
    function handleL_type(event) { setL_type((l_type = event.target.value)); }
    function handleL_description(event) { setL_description((l_description = event.target.value)); }
    function handleL_date_time(event) { setL_date_time((l_date_time = event.target.value)); }
    function handleM_id(event) { setM_id((m_id = event.target.value)); }

    
    function handleClickDel3(event) { setdel((del = event.target.value)) }
         function handleNote(event) {setNote(note = event.target.value);}
    
    function handleSubmit(event) {
        event.preventDefault();
        axios({

            method: 'post',
            url: 'api/lessons/add',
            data: newlessons,

        });
    }

function handleClickDel2() {

        axios({
            method: 'delete',
            url: `api/member/delete/${del}`,

        });

    }

    let newlessons = {
        l_id: l_id,
        l_name: l_name,
        l_type: l_type,
        l_description: l_description,
        l_date_time: l_date_time,
        m_id:m_id

    }



    return (
        <form onSubmit={handleSubmit} >
            <div className="box-container">
                {/* <img src="x1.jpg" width="100%"/> */}
                <section class="gallery" id="gallery">
                <br/><br/><h1 class="heading" style={{color: "#ffcc00" }}> Lessons </h1>



                 {/* <center> <h1>  Lessons</h1> </center> */}

<div class="box">
            <img src="sa.jpg" alt=""/>
            <div class="content">
                <h3 style={{  color: "#ffcc00" }}>Swimming</h3>
                <p>Swimming is considered one of the most popular sports and the most practiced by athletes, as some consider it a sport of utmost pleasure, and a sport that always provides them with activity and vitality. Swimming is classified as the basis of the movement that aquatic organisms move without reaching the bottom of the water surface or the water pool.</p>
                {/* <Link to="/invoices/1"  ><button  style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
                {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>add</button><br/> */}
                {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}

                </div>
                <h1>----------------------------------------------------------------------------------------</h1>

                <img src="x1.jpg" alt=""/>
            <div class="content">
                <h3 style={{  color: "#ffcc00" }}>Boxing</h3>
                <p>Kickboxing can help you transform your body and build muscle mass, it boosts your metabolism and causes your body to lose weight faster, moreover, it is a great cardio exercise, which means it can help improve your body tone faster than other forms of exercise.</p>
                {/* <Link to="/invoices/2"  ><button  style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
                {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>add</button><br/> */}
                {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}

</div>
<h1>---------------------------------------------------------------------------------------</h1>

<img src="mah.jpg" alt=""/>
            <div class="content">
                <h3 style={{  color: "#ffcc00" }}>Body building</h3>
                <p>Prevention of heart disease, as bodybuilding reduces the risk of developing coronary heart disease, by engaging in physical activities such as weight training with aerobic exercises, you have a greater chance of lowering high blood pressure, reducing obesity and lowering harmful cholesterol in the blood, all of which are risk factors for heart disease.</p>
                {/* <Link to="/invoices/3"  ><button  style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
                {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>add</button><br/> */}
                {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}

                </div>
                <h1>--------------------------------------------------------------------------------------</h1>

                <img src="yy.jpg" alt=""/>
            <div class="content"></div>
                <h3 style={{  color: "#ffcc00" }}>Yoga</h3>
                <p>Practicing yoga improves flexibility, mobility and balance Yoga will give you general fitness and Helps lose weight It increases your energyIt helps reduce stress and helps you breathe better Practicing yoga to be happier.</p>
                {/* <Link to="/invoices/4"  ><button   style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
                {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>register</button><br/> */}
                {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}


            </div>

            
        
                
                 <label> number lesson</label>
                 <input type="text" name="l_id" placeholder="l_id" size="15" onChange={handleL_id} /><br /><br />
                  {/* <label> subject lesson </label> */}
                 {/* <input type="text" name="l_name" placeholder="l_name" size="15" onChange={handleL_name} /><hr />  */}
                 <label> subject lesson </label><br></br><br></br>
                 <input type="radio" value="Swimming" checked={l_type == 'Swimming'} onChange={handleL_type} name="Swimming" /> Swimming🏊<br />
                     {/* <img src="s1.jpg" width="10%"></img><br /> */}

                     <input type="radio" value="Boxing" checked={l_name == 'Boxing'} onChange={handleL_name} name="Boxing" /> Boxing💪<br />
                     {/* <img src="x1.jpg" width="10%"></img><br /> */}

                     <input type="radio" value="Body building" checked={l_name == 'Body building'} onChange={handleL_name} name="Body building" /> Body building🏋️‍♀️<br />
                     {/* <img src="b1.jpg" width="10%"></img><br /> */}

                     <input type="radio" value="Yoga" checked={l_name == 'Yoga'} onChange={handleL_name} name="Yoga" /> Yoga🧘‍♀️<br />
                     {/* <img src="y1.jpg" width="10%"></img><br /> */}
                 <br></br>
                 <label >Note lesson</label>
                 <br /><textarea placeholder="L_description" onChange={handleL_description} >
                 </textarea>
                 <br />               
                 <label >time lesson</label>
                 <br /><input type="radio" value="am" checked={l_type == 'am'} onChange={handleL_type} name="am" /> am<br />
                     {/* <img src="x1.jpg" width="10%"></img><br /> */}

                     <input type="radio" value="pm" checked={l_type == 'pm'} onChange={handleL_type} name="pm" /> pm<br />
                     {/* <img src="b1.jpg" width="10%"></img><br /> */}
                     <label> date_time</label>
                 <input type="text" name="l_date_time" placeholder="l_date_time" size="15" onChange={handleL_date_time} /><br /><br />
<h1>---------------------------------------------------------------------------------------</h1>
                 <button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>submit</button><br/>
                 <Link to="/invoices"  ><button  style={{ width: "20%", background:"#ffcc00", color: "#000000", }}>Monthly subscription</button></Link> 

                 {/* <input type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input> */}

                
        
                 <br />
                 </section>
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




