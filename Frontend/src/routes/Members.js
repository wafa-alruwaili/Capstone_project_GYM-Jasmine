import React from 'react';
import { Outlet,NavLink,useSearchParams } from "react-router-dom";
import { getMembers } from "./data";
 function Members() {
    let members = getMembers();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {members
            .map(Member => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                })}
                to={`/members/${Member.m_id}`}
                key={Member.m_id}
              >
                {Member.name}
              </NavLink>
            ))}
        </nav>
       
     <Outlet />
     
      </div>
    );
  }
  export default Members