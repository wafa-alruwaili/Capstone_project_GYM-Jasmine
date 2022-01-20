import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";



export default class Employee_details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Employee_detailsList: [],
        };
    }


    componentDidMount() {
        axios.get("api/employees").then(res => {
            const Employee_detailsList = res.data
            this.setState({ Employee_detailsList })
        });
        console.log(this.state.Employee_detailsList)
    }




    deleteSpecialist(e_id) {
        axios.delete(`api/employees/delete/${e_id}`)
            .then(res => {
                const Employee_detailsList = this.state.Employee_detailsList.filter(item => item.e_id !== e_id);
                this.setState({ Employee_detailsList })
            })
    }


    render() {
        console.log(this.state.Employee_detailsList)

        return (


            <div>
                <section class="home1" id="home1">
                    <div class="image1">
                        <img src="u-1.png" alt="" /></div>
                </section>
                <table >
                    <caption>

                        <h1 style={{ color: "#ffcc00" }}> Employees Details </h1>

                    </caption>
                    <thead>
                        <tr>
                            <th >Full_name </th>
                            <th >Username </th>
                            <th >Type</th>


                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Employee_detailsList.map((item => (
                            <tr key={item.e_id}>
                                <td>{item.full_name}</td>
                                <td>{item.username}</td>
                                <td>{item.type}</td>
                                <td><button style={{ background: "#ffcc00", color: "#000000" }} onClick={(e) => this.deleteSpecialist(item.e_id, e)}>delete</button></td>
                            </tr>
                        )))




                        }  </tbody>

                </table>


                <br></br><Link to="/Employees" ><button className="FOF">Register_plan</button></Link><br></br>

                <br></br><Link to="/Register_employe" ><button  className="FOF">Back</button></Link><br></br>

            </div>
        )
    }
}