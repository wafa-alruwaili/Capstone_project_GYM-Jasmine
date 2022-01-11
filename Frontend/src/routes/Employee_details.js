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
                const Employee_detailsList = this.state.Employee_detailsList.filter(item => item.e_id!== e_id);
                this.setState({ Employee_detailsList })
           })
    }

   
    render() {
        console.log(this.state.Employee_detailsList)
      
        return (


    <div>
                <table >
                  <caption>
                  <br/><br/><br/><br/>
                  <br/><br/><h1  style={{color: "#ffcc00" }}> Employees Details </h1>
                    
                    </caption>
                    <thead>
                        <tr>
                            <th >Full_name </th><br></br>
                            <th >User_name </th><br></br>
                            <th >Type</th><br></br>


                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Employee_detailsList.map((item => (
                            <tr key={item.e_id}>
                                <td>{item.full_name}</td><br></br>
                                <td>{item.user_name}</td><br></br>
                                <td>{item.type}</td><br></br>
                                <td><button style={{ background: "#ffcc00", color: "#000000"}}onClick={(e) => this.deleteSpecialist(item.e_id, e)}>delete</button></td>                 
                            </tr>
                        )))
                       
                   
     
               
                          }  </tbody>
        
                </table>



                <br></br><Link to="/Home" ><button  style={{width:50,background: "#ffcc00", color: "#000000"}}>Logoff</button></Link><br></br>

            </div>
        )}}















// import React, { Component } from "react";
// import axios from 'axios'
// import { Link } from "react-router-dom";




// export default class Dataemployees extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             DataemployeesList: [],
//         };
//     }
//     componentDidMount() {
//         axios.get("api/employees").then(res => {
//             const DataemployeesList = res.data
//             this.setState({ DataemployeesList })
//         });
//         console.log(this.state.DataemployeesList)
//     }
    

//     deleteSpecialist(e_id) {
//         axios.delete(`api/employees/delete/${e_id}`)
//             .then(res => {
//                 const DataemployeesList = this.state.DataemployeesList.filter(item => item.e_id!== e_id);
//                 this.setState({ DataemployeesList })
//            })
//     }
//     render() {
//         console.log(this.state.DataemployeesList)
//         return (
//             <div>
//                 <table >
//                   <caption>

//                   <br/><br/><h1  style={{color: "#ffcc00" }}> My Page Employees </h1>
                    
//                     </caption>
//                     <thead>
//                         <tr>
//                             <th >full_name </th><br></br>
//                             <th >user_name</th><br></br>
//                             <th >type</th><br></br>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.DataemployeesList.map((item => (
//                             <tr key={item.e_id}>
//                                 <td>{item.full_name}</td><br></br>
//                                 <td>{item.user_name}</td><br></br>
//                                 <td>{item.type}</td><br></br>
//                                 {/* <td><img height="100" width="100" src={item.image} /></td> */}       
//                             </tr>
//                         )))
//                         }
                   
//            <td><Link to="/employees" ><button  className="FOF">profail employe</button></Link></td>


//                                 {/* <td><button style={{ background: "#ffcc00", color: "#000000"}}onClick={(e) => this.componentDidUpdate(item.m_id, e)}>post</button></td> */}

//                                 <td><button className="FOF" onClick={(e) => this.deleteSpecialist(item.e_id, e)}>delete</button></td>
            
    
        
//      </tbody>
        
//                 </table>



//                 <br></br><Link to="/Home" ><button className="FOF">Logoff</button></Link><br></br>

//             </div>
//         )}}