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
            console.log(res.data)
            console.log(this.state.MemberList)

        });
        // console.log(this.state.MemberList)
    }
    deleteSpecialist(m_id) {
        axios.delete(`api/member/delete/${m_id}`)
            .then(res => {
                const MemberList = this.state.MemberList.filter(item => item.m_id!== m_id);
                this.setState({ MemberList })
           })
    }
    render() {
        // console.log(this.state.MemberList)
        return (
            <div>

                <table >
                  <caption>

                    <h1 style={{ color: "#ffcc00"}}><b>My Page</b></h1>
                    
                    </caption>
                    <thead>
                        <tr style={{ color: "#ffcc00"}}>
                            <th  >name </th>
                            <th >gender </th>
                            <th >date_of_birt</th>
                            <th >address</th>
                            <th >height</th>
                            <th >weight </th>
                            <th >renewal</th>
                            <th >start_date</th>
                            <th >end_date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.MemberList.map((item => (
                            <tr key={item.m_id}>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.dob}</td>
                                {/* <td><img height="100" width="100" src={item.image} /></td> */}
                                <td>{item.address}</td>
                                <td>{item.height}</td>
                                <td>{item.weight}</td>
                                <td>{item.renewal}</td>
                                <td>{item.start_date}</td>
                                <td>{item.end_date}</td>

                                <td><button onClick={(e) => this.deleteSpecialist(item.m_id, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
                 <br></br><Link to="/register" ><button className="FOF" >back</button></Link><br></br>
                 <br></br><Link to="/lessons" ><button  className="FOF">Choose the lesson</button></Link><br></br>

                    <Link to="/invoices" ><button  className="FOF">Want a monthly subscription?</button></Link>
            </div>
        )}}