import axios from "axios"


let invcc = [];
axios.get("https://w-gym-the-lion-backend.herokuapp.com/api/plan")
  .then(result => {
    invcc = result.data;
  });


export function getInvoices() {



  return invcc;
}
export function getInvoice(id) {

  return invcc.find(
    invoice => invoice.p_id === id
  );
}