// import React from 'react';
// import { Outlet,NavLink,useSearchParams } from "react-router-dom";
// import { getLessonss } from "./data";
//  function Lessonss() {
//     let lessonss = getLessonss();
//     let [searchParams, setSearchParams] = useSearchParams();
//     return (
//       <div style={{ display: "flex" }}>
//         <nav
//           style={{
//             borderRight: "solid 1px",
//             padding: "1rem"
//           }}
//         >
//           <input
//             value={searchParams.get("filter") || ""}
//             onChange={event => {
//               let filter = event.target.value;
//               if (filter) {
//                 setSearchParams({ filter });
//               } else {
//                 setSearchParams({});
//               }
//             }}
//           />
//           {lessonss
//             .filter(lessons => {
//               let filter = searchParams.get("filter");
//               if (!filter) return true;
//               let name = lessons.name.toLowerCase();
//               return name.startsWith(filter.toLowerCase());
//             })
//             .map(lessons => (
//               <NavLink
//                 style={({ isActive }) => ({
//                   display: "block",
//                   margin: "1rem 0",
//                   color: isActive ? "red" : ""
//                 })}
//                 to={`/Lessons/${lessons.l_id}`}
//                 key={lessons.l_id}
//               >
//                 {lessons.l_Name}
//               </NavLink>
//             ))}
//         </nav>
//         <Outlet />
//       </div>
//     );
//   }
//   export default Lessonss
// //*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7



// import React from "react";
// import react, { useEffect, useState } from 'react'
// import axios from "axios"
// //import { Link } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";



// function Member() {

//     //let navigate = useNavigate();
//     let params = useParams();

//     let [m_id, setM_id] = useState("")
//     let [name, setName] = useState("")
//     let [gender, setGender] = useState("")
//     let [address, setAddress] = useState("")
//     let [date_of_birth, setDate_of_birth] = useState("")
//     let [heigh, setHeigh] = useState("")
//     let [weight, setWeight] = useState("")
//     let [start_date, setStart_date] = useState("")
//     let [end_date, setEnd_date] = useState("")
//     let [renewal, setRenwal] = useState("")
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
//     function handleCategory(event) { setCategory(Category = event.target.value); }
//     function handleNote(event) { setNote(note = event.target.value); }
//     function handleSubmit(event) { event.preventDefault(); }

//     function handleClickDel2() {

//         axios({
//             method: 'delete',
//             url: `api/member/delete/${del}`,

//         });
//     }


//     return (


//         <main id="main" style={{ padding: "1rem" }}>


//             <form onSubmit={handleSubmit} >
//                 <div className="log">
//                     {/* <img src="*" width="100%"></img> */}

//                     <hr />
//                     <label> M_id </label>
//                     <input type="text" name="m_id" placeholder="m_id" size="15" onChange={handleM_id} /><hr />
//                     <label> Name </label>
//                     <input type="text" name="name" placeholder="name" size="15" onChange={handleName} /><hr />
//                     <label> Gender  </label>
//                     {/* <select id="f1" onChange={handleGender}> */}
//                     {/* <option disabled value="" selected>Selection</option> */}
//                     {/* // <option value="male">Male</option>
//                   //  <option value="femal">Femal</option> */}
//                     {/* </select> */}
//                     <div id="f1" onChange={handleGender}>
//                         <input type="radio" value="male" />male
//                         <input type="radio" value="femal" />femal
//                     </div>

//                     {/* <input type="radio" value="male" checked={gender == 'male'}
//         onChange={handleGender} />Male
//         <input type="radio" value="femal" checked={gender == 'femal'}
//         onChange={handleGender} />Femal */}

//                     <br></br>
//                     <br></br>
//                     <label >Heigh</label>
//                     <input type="text" name="heigh" placeholder="heigh" size="15" onChange={handleHeigh} /><hr />
//                     <label >Weight</label>
//                     <input type="text" name="weight" placeholder="weight" size="15" onChange={handleWeight} /><hr />
//                     <label>date_of_birth</label>
//                     <input type="text" name="date_of_birth" size="10" onChange={handleDate_of_birth} />
//                     <br /><label> Address:</label>
//                     <br /><input placeholder="Address" onChange={handleAddress} />
//                     <label >Start_date</label>
//                     <input type="text" name="start_date" placeholder="start_date" size="15" onChange={handleStart_date} /><hr />
//                     <label >End_date</label>
//                     <input type="text" name="end_date" placeholder="end_date" size="15" onChange={handleEnd_date} /><hr />
//                     <label> Renewal </label>


//                     <input type="radio" value="yes" checked={renewal == 'yes'}
//                         onChange={handleRenewal} />Yes
//                     <input type="radio" value="no" checked={renewal == 'no'}
//                         onChange={handleRenewal} />No

//                     <br />
//                     <br />
//                     <button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}>submit</button>

//                     <input type="text" id="id" name="id" onChange={handleClickDel3} />
//                     <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input>

//                     <br />
//                     {/* <link to="/Member"></link> */}
//                 </div>






//                 <div class="container">
//                     <br /> <br /><label> Category:-</label><br /><br />
//                     <input type="radio" value="Swimming" checked={Category == 'Swimming'} onChange={handleCategory} name="Swimming" /> Swimming🏊<br />
//                     <img src="s1.jpg" width="50%"></img><br />

//                     <input type="radio" value="Boxing" checked={Category == 'Boxing'} onChange={handleCategory} name="Boxing" /> Boxing💪<br />
//                     <img src="x1.jpg" width="50%"></img><br />

//                     <input type="radio" value="Body building" checked={Category == 'Body building'} onChange={handleCategory} name="Body building" /> Body building🏋️‍♀️<br />
//                     <img src="b1.jpg" width="50%"></img><br />

//                     <input type="radio" value="Yoga" checked={Category == 'Yoga'} onChange={handleCategory} name="Yoga" /> Yoga🧘‍♀️<br />
//                     <img src="y1.jpg" width="50%"></img><br />

//                     <br /><label >Note</label><br /><textarea></textarea>
//                     <br /><br /><button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "50%", background: "#33cc33", color: "#FFFFFF", }}>submit</button>

//                 </div>
//             </form>
//         </main>


//     );
// }


// export default Member







///////////////////////////////////////////////////////////////////////////






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
//                             <th >m_id</th><br></br>
//                             <th >name</th><br></br>
//                             <th >gender</th><br></br>
//                             <th >address</th><br></br>
//                             <th >date_of_birth</th><br></br>
//                             <th >heigh</th><br></br>
//                             <th >weight</th><br></br>
//                             <th >start_date</th><br></br>
//                             <th >end_date</th><br></br>
//                             <th>renewal</th><br></br>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.MemberList.map((item => (
//                             <tr key={item.m_id}>
//                                 <td>{item.m_id}</td><br></br>
//                                 <td>{item.name}</td><br></br>
//                                 <td>{item.gender}</td><br></br>
//                                 {/* <td><img height="100" width="100" src={item.image} /></td> */}
//                                 <td>{item.address}</td><br></br>
//                                 <td>{item.date_of_birth}</td><br></br>
//                                 <td>{item.heigh}</td><br></br>
//                                 <td>{item.weight}</td><br></br>
//                                 <td>{item.start_date}</td><br></br>
//                                 <td>{item.end_date}</td><br></br>
//                                 <td>{item.renewal}</td><br></br>
//                                 <td><button >add</button></td>
//                                 <td><button onClick={(e) => this.deleteSpecialist(item.id, e)}>delete</button></td>
//                             </tr>
//                         )))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         )}}