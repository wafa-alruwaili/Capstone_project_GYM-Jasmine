import React, { Component } from "react";
import axios, { Axios } from "axios"
export default class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MemberList: [],
        };
    }
    componentDidMount() {
        axios.get("api/member").then(response => {
            const MemberList = response.data
            this.setState({ MemberList });
        });
    }
    deleteSpecialist(id) {
        axios.delete(`/api/member/delete/${id}`)
            .then(res => {
                const MemberList = this.state.MemberList.filter(item => item.id !== id);
                this.setState({ MemberList });
           })
    }
    render() {
        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            <th >Lesson_id</th><br></br>
                            <th >lesson name </th><br></br>
                            <th >L_type</th><br></br>
                            <th >L_description</th><br></br>
                            <th >L_date_time</th><br></br>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.MemberList.map((item => (
                            <tr key={item.l_id}>
                                <td>{item.l_id}</td><br></br>
                                <td>{item.L_name}</td><br></br>
                                <td>{item.L_type}</td><br></br>
                                {/* <td><img height="100" width="100" src={item.image} /></td> */}
                                <td>{item.L_description}</td><br></br>
                                <td>{item.L_date_time}</td><br></br>
                                <td><button >add</button></td>
                                <td><button onClick={(e) => this.deleteSpecialist(item.id, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            </div>
        )}}



// import React, { useState } from "react";
// import react from "react";
// import axios from "axios";




// export default function Lessons() {
//     // const [myLessons, setMyLessons] = useState({ l_id: "", l_name: "", l_type: "", l_description: "", l_date_time: "" })

//     function handleClick() {

//     }

//     let [l_id, setL_id] = useState("")
//     let [l_name, setL_name] = useState("")
//     let [l_type, setL_type] = useState("")
//     let [l_description, setL_description] = useState("")
//     let [l_date_time, setL_date_time] = useState("")



//     function handleL_id(event) { setL_id((l_id = event.target.value)); }
//     function handleL_name(event) { setL_name((l_name = event.target.value)); }
//     function handleL_type(event) { setL_type((l_type = event.target.value)); }
//     function handleL_description(event) { setL_description((l_description = event.target.value)); }
//     function handleL_date_time(event) { setL_date_time((l_date_time = event.target.value)); }
//     function handleSubmit(event) {
//         event.preventDefault();
//         axios({

//             method: 'post',
//             url: 'api/lessons/add',
//             data: newlessons,

//         });
//     }



//     let newlessons = {
//         l_id: l_id,
//         l_name: l_name,
//         l_type: l_type,
//         l_description: l_description,
//         l_date_time: l_date_time,
//     }



//     return (
//         <form onSubmit={handleSubmit} >
//             <div className="log">
//                 {/* <img src="*" width="100%"></img> */}



//                 <center> <h1 style={{ background: "#ff3399", fontsize: "2.5rem", color: "#f0ecec", textAlign: "center" }}>  Lessons</h1> </center>


//                 <hr />
//                 <label> L_id </label>
//                 <input type="text" name="l_id" placeholder="l_id" size="15" onChange={handleL_id} /><hr />
//                 <label> L_name </label>
//                 <input type="text" name="l_name" placeholder="l_name" size="15" onChange={handleL_name} /><hr />
//                 <label> L_type </label>
//                 <select id="f1">
//                     <option disabled value="" selected>Selection</option>
//                     <option value="apple">swimming</option>
//                     <option value="orange">boxing</option>
//                     <option value="lemon">body building</option>
//                 </select>
//                 <br></br>
//                 <br></br>
//                 <label >L_description</label>
//                 <br /><textarea placeholder="L_description" onChange={handleL_description} >
//                 </textarea>
//                 <br />               
//                 <label >L_date_time</label>
//                 <input type="text" name="l_date_time" placeholder="l_date_time" size="15" onChange={handleL_date_time} /><hr />


//                 <button type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}>submit</button>
//                 {/* <input type="submit" className="registerbtn" onClick={handleSubmit} style={{ width: "10%", background: "#ff3399", color: "#FFFFFF", }}></input> */}

                
        
//                 <br />
//             </div>
//         </form>

//     );
// }

