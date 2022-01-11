import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";




export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MemberList: [],
           
        };
    }
    componentDidMount() {
        axios.get("api/member").then(res => {
            const MemberList = res.data
            this.setState({ MemberList })
            console.log(MemberList)

        });
    }



    deleteSpecialist(m_id) {
        console.log(this.state.MemberList)

        axios.delete(`api/member/delete/${m_id}`)
            .then(res => {
                const MemberList = this.state.MemberList.filter(item => item.m_id!== m_id);
                this.setState({ MemberList })
           })
    }

    render() {
       
        return (
           
 
             
            <div class="m1">
                    {this.state.MemberList.map((item => (
                        <tr key={item.m_id}>
                        
                    
                        <br/><br/><br/><br/><br/>
                        <p style={{ width: "10%", color: "#ffcc00", }}>name: </p>{item.name}
                        <p style={{ width: "10%", color: "#ffcc00", }}> gender: </p>{item.gender}
                        <p style={{ width: "10%", color: "#ffcc00", }}>dob: </p>{item.dob}
                        <p style={{ width: "10%", color: "#ffcc00", }}> address : </p>{item.address}
                        <p style={{ width: "10%", color: "#ffcc00", }}>height: </p>{item.height}
                        <p style={{ width: "10%", color: "#ffcc00", }}> weight : </p>{item.weight}
                        <p style={{ width: "10%", color: "#ffcc00", }}>renewal: </p>{item.renewal}
                        <p style={{ width: "10%", color: "#ffcc00", }}> start_date : </p>{item.start_date}
                        <p style={{ width: "10%", color: "#ffcc00",float: "left" }}>end_date :</p>{item.end_date} 
                        <p style={{ width: "10%", color: "#ffcc00", }}>l_name: </p>{item.lessons.l_name}
                        {/* <p style={{ width: "10%", color: "#ffcc00", }}>l_type: </p> {item.lessons[0].l_type} */}
                        <p style={{ width: "10%", color: "#ffcc00", }}>l_description : </p>{item.lessons.l_description}
                        <p style={{ width: "10%", color: "#ffcc00", }}>l_date_time: </p>{item.lessons.l_date_time}
                        <p style={{ width: "10%", color: "#ffcc00", }}> note:</p>{item.lessons.note} 
                        
            
                       
<button className="FOF"  onClick={(e) => this. deleteSpecialist(item.m_id, e)}>delete</button>



                 
                        </tr>
                    )))
                    }
  </div>

        
       
  )
}
}
                   
        


           
                


// import React, { Component } from "react";
// import axios from 'axios'
// import { Link } from "react-router-dom";




// export default class Member extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             MemberList: [],
//             LessonsList:[],
//         };
//     }
//     componentDidMount() {
//         axios.get("api/member").then(res => {
//             const MemberList = res.data
//             this.setState({ MemberList })
//         });
//         console.log(this.state.MemberList)
//     }

//     componentDidMount() {
//         axios.get("api/lessons").then(res => {
//             const LessonsList = res.data
//             this.setState({ LessonsList })
//         });
//         console.log(this.state.LessonsList)
//     }



//     // componentDidUpdate() {
//     //     axios.post("api/member/add").then(res => {
//     //         const MemberList = res.data
//     //         this.setState({ MemberList })
//     //     });
//     //     console.log(this.state.MemberList)
//     // }

//     deleteSpecialist(m_id) {
//         axios.delete(`api/member/delete/${m_id}`)
//             .then(res => {
//                 const MemberList = this.state.MemberList.filter(item => item.m_id!== m_id);
//                 this.setState({ MemberList })
//            })
//     }

//     deleteSpecialist(l_id) {
//         axios.delete(`api/lessons/delete/${l_id}`)
//             .then(res => {
//                 const LessonsList = this.state.LessonsList.filter(item => item.l_id!== l_id);
//                 this.setState({ LessonsList })
//            })
//     }
//     render() {
//         console.log(this.state.MemberList)
//         console.log(this.state.LessonsList)
//         return (
//             <div>
//                 <table >
//                   <caption>

//                   <br/><br/><h1  style={{color: "#ffcc00" }}> My Page </h1>
                    
//                     </caption>
//                     <thead>
//                         <tr>
//                             <th >name </th><br></br>
//                             <th >gender </th><br></br>
//                             <th >date_of_birt</th><br></br>
//                             <th >address</th><br></br>
//                             <th >height</th><br></br>
//                             <th >weight </th><br></br>
//                             <th >renewal</th><br></br>
//                             <th >start_date</th><br></br>
//                             <th >end_date</th><br></br>
//                             <th >l_id </th><br></br>
//                             <th >l_name </th><br></br>
//                             <th >l_type</th><br></br>
//                             <th >l_description</th><br></br>
//                             <th >l_date_time</th><br></br>
//                             <th >note </th><br></br>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.MemberList.map((item => (
//                             <tr key={item.member.m_id}>
//                                 <td>{item.name}</td><br></br>
//                                 <td>{item.gender}</td><br></br>
//                                 <td>{item.dob}</td><br></br>
//                                 <td>{item.address}</td><br></br>
//                                 <td>{item.height}</td><br></br>
//                                 <td>{item.weight}</td><br></br>
//                                 <td>{item.renewal}</td><br></br>
//                                 <td>{item.start_date}</td><br></br>
//                                 <td>{item.end_date}</td><br></br>
//                                 <td>{item.lessons.l_name}</td><br></br>
//                                 <td>{item.l_type}</td><br></br>
//                                 <td>{item.l_description}</td><br></br>
//                                 <td>{item.l_date_time}</td><br></br>
//                                 <td>{item.note}</td><br></br>     
//                             </tr>
//                         )))
//                         }
                   
//         {this.state.LessonsList.map((item => (
//             <tr key={item.l_id}>
                


//                 <td><Link to="/invoice" ><button  style={{background: "#ffcc00", color: "#000000"}}>Want a monthly subscription?</button></Link></td>


//                                 {/* <td><button style={{ background: "#ffcc00", color: "#000000"}}onClick={(e) => this.componentDidUpdate(item.m_id, e)}>post</button></td> */}

//                                 <td><button style={{ background: "#ffcc00", color: "#000000"}}onClick={(e) => this.deleteSpecialist(item.m_id, e)}>delete</button></td>
//                 </tr> 
//         )))
        
//         } </tbody>
        
//                 </table>



//                 <br></br><Link to="/Home" ><button  style={{width:50,background: "#ffcc00", color: "#000000"}}>Logoff</button></Link><br></br>

//             </div>
//         )}}