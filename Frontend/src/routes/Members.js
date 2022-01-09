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
            
            <div className="CR">
               <p></p>
                    {this.state.MemberList.map((item => (
                        <tr key={item.m_id}>


                       
                        {/* {for (let i =0, < 10, i++)} {
                            
                            
                        } */}
                    
                    <br/><br/><br/><br/><br/>
                        <div class="cardtext">
                        <p>name:{item.name} </p>
                        <p> gender : {item.gender}</p>
                        <p>dob:{item.dob} </p>
                        <p> address : {item.address}</p>
                        <p>height:{item.height} </p>
                        <p> weight : {item.weight}</p>
                        <p>renewal:{item.renewal} </p>
                        <p> start_date : {item.start_date}</p>
                        <p>end_date :{item.end_date} </p>
                        <p>l_name:{item.lessons[0].l_name} </p>
                        <p>l_type:{item.lessons[0].l_type} </p>
                        <p>l_description :{item.lessons.l_description} </p>
                        <p>l_date_time:{item.lessons.l_date_time} </p>
                        <p> note:{item.lessons.note} </p>
                        
                        </div>
                       
<button button  onClick={(e) => this. deleteSpecialist(item.m_id, e)}>delete</button>



                 
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