import React from 'react';
import { useParams , Link } from "react-router-dom";
import { getInvoice } from "../data";



export default function Plan() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.p_id, 10));
  
  
  return (
    <main style={{ padding: "1rem" }}>
     <br/><br/><br/> <h2>:- {invoice.eventP_name}</h2><br/><br/><br/>
      <p>
        : {invoice.p_id}:{invoice.p_name} : {invoice.p_description} :{invoice.amount} :{invoice.active}
      </p>
    </main>
  );
}




