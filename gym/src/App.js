import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
  const [myMember, setMyMember] = useState({ m_id: "", name: "", weight: "", height: "", gender: "", address: "", renewal: "", dob: "", start_date: "", end_date: "" })


  //Member
  useEffect(() => {
    axios.get("/api/member")
      .then(response => {
        console.log(response.data)
        setMyMember(response.data[1])
      })
    return () => { }
  }, [])


  
  // Member add
  function handleClick() {
    axios({
      method: 'post',
      url: 'api/member/add',
      data: {
        m_id: 1,
        name: "wafa",
        height:157,
        weight:57,
        gender:"f",
        address:"aljouf",
        renewal:"yes",
        dob:33,
        start_date:12,
        end_date:30,
      }
    });
  }

  // Member delete 
  function handleClickDel() {
    axios({
      method: 'delete',
      url: "/api/member/delete/1"
    })
  }


  return (
    <div>
      <br></br>
      <br></br>
      <h2>my Member details are:  </h2>
      <button onClick={handleClick}>Post to Spring (Member)</button>
      <button onClick={handleClickDel}>Delet to Spring (Member)</button>

    </div>
  )
}