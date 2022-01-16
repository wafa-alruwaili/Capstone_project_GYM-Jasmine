import React from "react";
import react, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
// import Navbar3 from "./Navbar3";



export default function Lessons() {
const [myLessons, setMyLessons] = useState({ l_id: "", l_name: "", l_type: "", l_description: "", l_date_time: "",m_id:"" ,p_id:""})

    

    let [l_id, setL_id] = useState("")
    let [l_name, setL_name] = useState("")
    let [l_type, setL_type] = useState("")
    let [l_description, setL_description] = useState("")
    let [l_date_time, setL_date_time] = useState("")
    let [note, setNote] = useState("");
    let [m_id, setM_id] = useState("")
    let [p_id, setP_id] = useState("")
    


    function handleL_id(event) { setL_id((l_id = event.target.value)); }
    function handleL_name(event) { setL_name((l_name = event.target.value)); }
    function handleL_type(event) { setL_type((l_type = event.target.value)); }
    function handleL_description(event) { setL_description((l_description = event.target.value)); }
    function handleL_date_time(event) { setL_date_time((l_date_time = event.target.value)); }
    function handleNote(event) { setNote((note = event.target.value)); }
    function handleM_id(event) { setM_id((m_id = event.target.value)); }
    function handleP_id(event) { setP_id((p_id = event.target.value)); }
     

function handleSubmit(event) {
    event.preventDefault();

    // let n=localStorage.getItem("login2");//n
    // if(n=="welcome"){//n
     
    axios({
        method: 'post',
        url: 'api/lessons/add',
        data: newlessons,

    });
// }//n
}



// function handleClickDel2() {

//         axios({
//             method: 'delete',
//             url: `api/lessons/delete/${del}`,

//         });

//     }

    let newlessons = {
        l_id: l_id,
         l_name: l_name,
        l_type: l_type,
         l_description: l_description,
         l_date_time: l_date_time,
         m_id:m_id,
         p_id:p_id
    }


    



    return (
        <form onSubmit={handleSubmit} >
            <div className="box-container">
            <section class="home1" id="home1">
        <div class="image1">
      <img src="u-1.png" alt="" /></div>
      </section>
                {/* <Navbar3/> */}
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

 <img src="ba.jpg" alt=""/>
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
                  <input type="checkbox" value="Swimming" l_type = 'Swimming' onChange={handleL_name} name="Swimming" /> Swimming🏊<br />
                      {/* <img src="s1.jpg" width="10%"></img><br /> */}

                      <input type="checkbox" value="Boxing" l_name = 'Boxing' onChange={handleL_name} name="Boxing" /> Boxing💪<br />
                      {/* <img src="x1.jpg" width="10%"></img><br /> */}

                      <input type="checkbox" value="Body building" l_name = 'Body building' onChange={handleL_name} name="Body building" /> Body building🏋️‍♀️<br />
                      {/* <img src="b1.jpg" width="10%"></img><br /> */}

                      <input type="checkbox" value="Yoga" l_name ='Yoga' onChange={handleL_name} name="Yoga" /> Yoga🧘‍♀️<br />
                      {/* <img src="y1.jpg" width="10%"></img><br /> */}
                  <br></br>
                  <label >Note lesson</label>
                  <br /><textarea placeholder="L_description" onChange={handleL_description} >
                  </textarea>
                  <br />               
                  <label >type lesson</label>
                  <br /><input type="radio" value="am" checked={l_type == 'am'} onChange={handleL_type} name="am" /> am<br />
                      {/* <img src="x1.jpg" width="10%"></img><br /> */}

                      <input type="radio" value="pm" checked={l_type == 'pm'} onChange={handleL_type} name="pm" /> pm<br />
                      {/* <img src="b1.jpg" width="10%"></img><br /> */}
                      <label> date_time</label>
                  <input type="text" name="l_date_time" placeholder="l_date_time" size="15" onChange={handleL_date_time} /><br /><br />
                  <label> number MEMBER</label>
                  <input type="text" name="m_id" placeholder="m_id" size="15" onChange={handleM_id} /><br /><br />
                 
                  <label> number Plan</label>
                  <input type="text" name="p_id" placeholder="p_id" size="15" onChange={handleP_id} /><br /><br />
 <h1>---------------------------------------------------------------------------------------</h1>
                  <button type="submit" className="registerbutton" onClick={handleSubmit}  class="FOF">submit</button><br/>
                  {/* <button type="submit" className="registerbutton" onClick={handleOnchang}  class="FOF">post</button><br/> */}

                  <Link to="/lessons_details"  ><button  class="FOF">profail</button></Link> 
                  <Link to="/Members"  ><button   class="FOF">Back</button></Link>

                  {/* <input type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input> */}

           
        
                  <br />
                  </section>
              </div>
          </form>

     );
 }

//?????????????????????????????????????????????????????????????????????????????????????
// import React from "react";
// import react, { useEffect, useState } from 'react'
// import axios from "axios"
// import { Link } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar3 from "./Navbar3";



// export default function Lessons() {
// const [myLessons, setMyLessons] = useState({ l_id: "", l_name: "", l_type: "", l_description: "", l_date_time: "",m_id:"" })
// const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", dob: "", start_date: "", end_date: "" })

    

//     let [l_id, setL_id] = useState("")
//     let [l_name, setL_name] = useState("")
//     let [l_type, setL_type] = useState("")
//     let [l_description, setL_description] = useState("")
//     let [l_date_time, setL_date_time] = useState("")
//     let [note, setNote] = useState("");
//     let [m_id, setM_id] = useState("")
//     let [p_id, setP_id] = useState("")
//     let [name, setName] = useState("")
//     let [gender, setGender] = useState("")
//     let [address, setAddress] = useState("")
//     let [dob, setDob] = useState("")
//     let [height, setHeight] = useState("")
//     let [weight, setWeight] = useState("")
//     let [start_data, setStart_date] = useState("")
//     let [end_date, setEnd_date] = useState("")
//     let [renewal, setRenwal] = useState("")
//     let [username, setUsername] = useState("")
//     let [password, setPassword] = useState("")
//     let [del, setdel] = useState("")
//     let [indData, setIndData] = useState("")
//     console.log(m_id)


//     function handleL_id(event) { setL_id((l_id = event.target.value)); }
//     function handleL_name(event) { setL_name((l_name = event.target.value)); }
//     function handleL_type(event) { setL_type((l_type = event.target.value)); }
//     function handleL_description(event) { setL_description((l_description = event.target.value)); }
//     function handleL_date_time(event) { setL_date_time((l_date_time = event.target.value)); }
//     function handleM_id(event) { setM_id((m_id = event.target.value)); }
//     function handleP_id(event) { setP_id((p_id = event.target.value)); }
//     function handleM_id(event) { setM_id((m_id = event.target.value)); }
//     function handleName(event) { setName((name = event.target.value)); }
//     function handleGender(event) { setGender((gender = event.target.value)); }
//     function handleDob(event) { setDob((dob = event.target.value)); }
//     function handleAddress(event) { setAddress((address = event.target.value)); }
//     function handleHeight(event) { setHeight((height = event.target.value)); }
//     function handleWeight(event) { setWeight((weight = event.target.value)); }
//     function handleStart_date(event) { setStart_date((start_data = event.target.value)); }
//     function handleEnd_date(event) { setEnd_date((end_date = event.target.value)); }
//     function handleRenewal(event) { setRenwal((renewal = event.target.value)); }
//     function handleUsername(event) { setUsername((username = event.target.value)); }
//     function handlePassword(event) { setPassword((password = event.target.value)); }

    
//     function handleClickDel3(event) { setdel((del = event.target.value)) }
//     function handleNote(event) {setNote(note = event.target.value);}
    
//     function handleOnchang(event) {
//         event.preventDefault();
//         // axios({

//         //     method: 'get',
//         //     url: `api/member/${m_id}`,
//         //     // data: newlessons,

//         // });
//         axios.get(`api/member/${m_id}`)
//         .then(res=>{
//             setIndData(res.data)
//             console.log(res.data)

            
        
//         })
//     }


//     console.log(indData)


//     function handleSubmit(event) {
//         event.preventDefault();
//         indData.lessons[0]= {"l_id":l_id}
//         axios({

//             method: 'post',
//             url: 'api/member/add/',
//             data: indData,

//         });

//     }

// function handleClickDel2() {

//         axios({
//             method: 'delete',
//             url: `api/lessons/delete/${del}`,

//         });

//     }

//     let newlessons = {
//         l_id: l_id,
//         // l_name: l_name,
//         // l_type: l_type,
//         // l_description: l_description,
//         // l_date_time: l_date_time,
//         // m_id:m_id,
//         // p_id:p_id
//     }

//     let  newmember ={
//             m_id:m_id,
//             height:height,
//             weight:weight, 
//             name:name, 
//             gender:gender, 
//             address:address, 
//             renewal:renewal,
//             dob:dob,
//             start_data :start_data,
//             end_date:end_date,
//             username:username,
//             password:password,
//             lessons:[
            
//                 {
//                     l_id:l_id
//                 }
//                 ]
            
//             }
    



//     return (
//         <form onSubmit={handleSubmit} >
//             <div className="box-container">
//                 <Navbar3/>
//                 {/* <img src="x1.jpg" width="100%"/> */}
//                 <section class="gallery" id="gallery">
//                 <br/><br/><h1 class="heading" style={{color: "#ffcc00" }}> Lessons </h1>



//                  {/* <center> <h1>  Lessons</h1> </center> */}

// <div class="box">
//             <img src="sa.jpg" alt=""/>
//             <div class="content">
//                 <h3 style={{  color: "#ffcc00" }}>1-Swimming</h3>
//                 <p>Swimming is considered one of the most popular sports and the most practiced by athletes, as some consider it a sport of utmost pleasure, and a sport that always provides them with activity and vitality. Swimming is classified as the basis of the movement that aquatic organisms move without reaching the bottom of the water surface or the water pool.</p>
//                 {/* <Link to="/invoices/1"  ><button  style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
//                 {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>add</button><br/> */}
//                 {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}

//                 </div>
//                 <h1>----------------------------------------------------------------------------------------</h1>

//                 <img src="x1.jpg" alt=""/>
//             <div class="content">
//                 <h3 style={{  color: "#ffcc00" }}>2-Boxing</h3>
//                 <p>Kickboxing can help you transform your body and build muscle mass, it boosts your metabolism and causes your body to lose weight faster, moreover, it is a great cardio exercise, which means it can help improve your body tone faster than other forms of exercise.</p>
//                 {/* <Link to="/invoices/2"  ><button  style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
//                 {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>add</button><br/> */}
//                 {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}

// </div>
// <h1>---------------------------------------------------------------------------------------</h1>

// <img src="ba.jpg" alt=""/>
//             <div class="content">
//                 <h3 style={{  color: "#ffcc00" }}>3-Body building</h3>
//                 <p>Prevention of heart disease, as bodybuilding reduces the risk of developing coronary heart disease, by engaging in physical activities such as weight training with aerobic exercises, you have a greater chance of lowering high blood pressure, reducing obesity and lowering harmful cholesterol in the blood, all of which are risk factors for heart disease.</p>
//                 {/* <Link to="/invoices/3"  ><button  style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
//                 {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>add</button><br/> */}
//                 {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}

//                 </div>
//                 <h1>--------------------------------------------------------------------------------------</h1>

//                 <img src="yy.jpg" alt=""/>
//             <div class="content"></div>
//                 <h3 style={{  color: "#ffcc00" }}>4-Yoga</h3>
//                 <p>Practicing yoga improves flexibility, mobility and balance Yoga will give you general fitness and Helps lose weight It increases your energyIt helps reduce stress and helps you breathe better Practicing yoga to be happier.</p>
//                 {/* <Link to="/invoices/4"  ><button   style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>Join now</button></Link>  */}
//                 {/* <br/><button type="submit" className="registerbutton" onClick={handleSubmit} style={{ width: "10%", background:"#ffcc00", color: "#000000", }}>register</button><br/> */}
//                 {/* <input type="submit" value="Remove" onClick={handleClickDel2} style={{ width: "10%", background: "#ffcc00", color: "#000000", }}></input><br/><br/> */}


//             </div>

            
        
                
//                  <label> number lesson</label>
//                  <input type="text" name="l_id" placeholder="l_id" size="15" onChange={handleL_id} /><br /><br />
//                   {/* <label> subject lesson </label> */}
//                  {/* <input type="text" name="l_name" placeholder="l_name" size="15" onChange={handleL_name} /><hr />  */}
//                  <label> subject lesson </label><br></br><br></br>
//                  <input type="checkbox" value="Swimming" l_type = 'Swimming' onChange={handleL_name} name="Swimming" /> Swimming🏊<br />
//                      {/* <img src="s1.jpg" width="10%"></img><br /> */}

//                      <input type="checkbox" value="Boxing" l_name = 'Boxing' onChange={handleL_name} name="Boxing" /> Boxing💪<br />
//                      {/* <img src="x1.jpg" width="10%"></img><br /> */}

//                      <input type="checkbox" value="Body building" l_name = 'Body building' onChange={handleL_name} name="Body building" /> Body building🏋️‍♀️<br />
//                      {/* <img src="b1.jpg" width="10%"></img><br /> */}

//                      <input type="checkbox" value="Yoga" l_name ='Yoga' onChange={handleL_name} name="Yoga" /> Yoga🧘‍♀️<br />
//                      {/* <img src="y1.jpg" width="10%"></img><br /> */}
//                  <br></br>
//                  <label >Note lesson</label>
//                  <br /><textarea placeholder="L_description" onChange={handleL_description} >
//                  </textarea>
//                  <br />               
//                  <label >time lesson</label>
//                  <br /><input type="radio" value="am" checked={l_type == 'am'} onChange={handleL_type} name="am" /> am<br />
//                      {/* <img src="x1.jpg" width="10%"></img><br /> */}

//                      <input type="radio" value="pm" checked={l_type == 'pm'} onChange={handleL_type} name="pm" /> pm<br />
//                      {/* <img src="b1.jpg" width="10%"></img><br /> */}
//                      <label> date_time</label>
//                  <input type="text" name="l_date_time" placeholder="l_date_time" size="15" onChange={handleL_date_time} /><br /><br />
//                  <label> number MEMBER</label>
//                  <input type="text" name="m_id" placeholder="m_id" size="15" onChange={handleM_id} /><br /><br />
                 
//                  <label> number Plan</label>
//                  <input type="text" name="p_id" placeholder="p_id" size="15" onChange={handleP_id} /><br /><br />
// <h1>---------------------------------------------------------------------------------------</h1>
//                  <button type="submit" className="registerbutton" onClick={handleSubmit}  class="FOF">submit</button><br/>
//                  {/* <button type="submit" className="registerbutton" onClick={handleOnchang}  class="FOF">post</button><br/> */}

//                  <Link to="/members"  ><button  class="FOF">profail</button></Link> 
//                  <Link to="/Register"  ><button   class="FOF">Back</button></Link>

//                  {/* <input type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input> */}

           
        
//                  <br />
//                  </section>
//              </div>
//          </form>

//      );
//  }