import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default class Lessons_details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LessonsdetailsList: [],
        };
    }
    componentDidMount() {
        axios.get("https://w-gym-the-lion-backend.herokuapp.com/api/lessons").then(res => {
            const LessonsdetailsList = res.data
            this.setState({ LessonsdetailsList })
        });
        console.log(this.state.LessonsdetailsList)
    }
    deleteSpecialist(l_id) {
        axios.delete(`https://w-gym-the-lion-backend.herokuapp.com/api/lessons/delete/${l_id}`)
            .then(res => {
                const LessonsdetailsList = this.state.LessonsdetailsList.filter(item => item.l_id!== l_id);
                this.setState({ LessonsdetailsList })
           })
    }
    render() {
        console.log(this.state.LessonsdetailsList)

        return (
            <div>
                    <section class="home1" id="home1">
        <div class="image1">
      <img src="u-1.png" alt="" /></div>
      </section>        

                <table >
                  <caption>

                    <h1 style={{ color: "#ffcc00"}}><b>Lessons detailsList</b></h1>
                    
                    </caption>
                    <thead>
                        <tr style={{ color: "#ffcc00"}}>
                            <th >number lesson </th>
                            <th >subject lesson </th>
                            <th >Note lesson</th>
                            <th >type lesson</th>
                            <th >date_time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.LessonsdetailsList.map((item => (
                            <tr key={item.l_id}>
                                <td>{item.l_name}</td>
                                <td>{item.l_description}</td>
                                <td>{item.l_type}</td>
                                <td>{item.l_date_time}</td>
                                

                                <td><button onClick={(e) => this.deleteSpecialist(item.l_id, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
                 <br></br><Link to="/lessons" ><button className="FOF" >back</button></Link><br></br>
                 {/* <br></br><Link to="/lessons" ><button  className="FOF">Choose the lesson</button></Link><br></br> */}

                 <Link to="/invoices" ><button  className="FOF">Want a monthly subscription?</button></Link>
            </div>
        )}}