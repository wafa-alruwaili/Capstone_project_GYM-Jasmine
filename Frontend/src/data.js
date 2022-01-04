import axios from "axios"
 let invcc = [];
 axios.get("api/plan")
            .then(result => {
                invcc = result.data;
                // this.setState({ MyArr });
            });
  export function getInvoices() {
    return invcc;
  }
  export function getInvoice(id) {
    return invcc.find(
      invoice => invoice.p_id === id
    );
  }




// import  React from 'react'
// import { Link } from 'react-router-dom'
// let invoices = [
// //   axios.get("/api/restauants")
// //   .then(response=>{
// //     console.log(response.data)
// //     setMyRestauants(response.data[1])
// //  }),
//     {
//       p_id: 1,
//       p_name: "Swimming",
//       description: "afternoon",
//       amount: "650 SRA",
//       active:"on",
//     //  Link:<Link to="/payment" ><button>payment</button></Link>
//     },
//     {
//       p_id: 2,
//                p_name: "Boxing",
//                description: "evening",
//                amount: "300 SRA",
//                active:"on",
//     },
//     {
//       p_id: 3,
//         p_name: "Bodybuilding",
//         description: "morning",
//         amount:" 800 SRA",
//         active:"on",
//     },
//     {
//       p_id: 4,
//         p_name: "Yoga",
//         description: "afternoon",
//         amount:" 250 SRA",
//         active:"on",
//     },

//   ];
//   export function getInvoices() {
//     return invoices;
//   }
//   export function getInvoice(p_id) {
//     return invoices.find(
//       invoice => invoice.p_id === p_id
//     );
//   }





// // import  React from 'react'
// // import { Link } from 'react-router-dom'
// // let invoices = [

// //     {
// //         p_id: 1,
// //         p_name: "Swimming",
// //         description: "hello",
// //         amount: 220,
// //         active:"on",
// //     //  Link:<Link to="/payment" ><button>payment</button></Link>
// //     },
// //     {
// //         p_id: 2,
// //         p_name: "Boxing",
// //         description: "hello",
// //         amount: 100,
// //         active:"on",
// //     },
// //     {
// //         p_id: 3,
// //         p_name: "Body building",
// //         description: "hello",
// //         amount: 150,
// //         active:"on",
// //     },
// //     {
// //         p_id: 4,
// //         p_name: "Yoga",
// //         description: "hello",
// //         amount: 250,
// //         active:"on",
// //     },

// //   ];
// //   export function getInvoices() {
// //     return invoices;
// //   }
// //   export function getInvoice(number) {
// //     return invoices.find(
// //       invoice => invoice.number === number
// //     );
// //   }