import React from 'react';
import { Outlet,NavLink,useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    
    
    
    return (

      <div style={{ display: "flex" }}>
        
        <br/><br/>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          <br/><br/>
          <input
            value={searchParams.get("filter") || ""}
            onChange={event => {
              
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter(invoice => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let p_name = invoice.p_name.toLowerCase();
              return p_name.startsWith(filter.toLowerCase());
            })
            .map(invoice => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "white" : "yellow"
                })}
                to={`/invoices/${invoice.p_id}`}
                key={invoice.p_id}
              ><br/> 
                {invoice.p_name}
                
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }
  export default Invoices