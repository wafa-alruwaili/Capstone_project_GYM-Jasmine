import React, { Component } from "react";
import axios from 'axios'
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
        });
    }
    deleteSpecialist(m_id) {
        axios.delete(`api/member/delete/${m_id}`)
            .then(res => {
                const MemberList = this.state.MemberList.filter(item => item.m_id!== m_id);
                this.setState({ MemberList })
           })
    }
    render() {
        return (
            <div>
                <table >
                  <caption>

                    <h1><b>My Page</b></h1>
                    
                    </caption>
                    <thead>
                        <tr>
                            <th >name </th><br></br>
                            <th >gender </th><br></br>
                            <th >date_of_birt</th><br></br>
                            <th >address</th><br></br>
                            <th >height</th><br></br>
                            <th >weight </th><br></br>
                            <th >renewal</th><br></br>
                            <th >start_date</th><br></br>
                            <th >end_date</th><br></br>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.MemberList.map((item => (
                            <tr key={item.m_id}>
                                <td>{item.name}</td><br></br>
                                <td>{item.gender}</td><br></br>
                                <td>{item.dob}</td><br></br>
                                {/* <td><img height="100" width="100" src={item.image} /></td> */}
                                <td>{item.address}</td><br></br>
                                <td>{item.height}</td><br></br>
                                <td>{item.weight}</td><br></br>
                                <td>{item.renewal}</td><br></br>
                                <td>{item.start_date}</td><br></br>
                                <td>{item.end_date}</td><br></br>
                                <td><button >confirm</button></td>
                                <td><button onClick={(e) => this.deleteSpecialist(item.m_id, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            </div>
        )}}











// import React from 'react';
// import react, { useEffect, useState } from 'react'
// import axios from "axios"
// import { Outlet, NavLink, useSearchParams } from "react-router-dom";
// //import { getMembers } from "./data";




// export default function Members() {

//   let [del, setdel] = useState("")
//   let [Category, setCategory] = useState("");
//   let [note, setNote] = useState("");


//   const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", dob: "", start_date: "", end_date: "" })

//   function handleClickDel3(event) { setdel((del = event.target.value)) }
//   function handleCategory(event) { setCategory(Category = event.target.value); }
//   function handleNote(event) { setNote(note = event.target.value); }
//   function handleSubmit(event) { event.preventDefault(); }

//   function handleClickDel2() {

//     axios({
//       method: 'delete',
//       url: `api/member/delete/${del}`,

//     });
//   }

//   //Member
//   useEffect(() => {
//     axios.get("/api/member")
//       .then(response => {
//         console.log(response.data)
//         setMyMember(response.data[1])
//       })
//     return () => { }
//   }, [])



//   return (
//  <h1>wafa</h1>  
      
//  );
// }




