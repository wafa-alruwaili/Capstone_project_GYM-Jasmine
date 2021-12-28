import Members from "./Members";

let members = [  
{
m_id: 1,
name: "wafa",
gender: "f",
address: "dammam",
date_of_birth: 33,
heigh: 160,
weight: 55,
start_date: 12,
end_date: 30,
renewal: "yes",

   },

   {
    m_id: 2,
    name: "sara",
    gender: "f",
    address: "dammam",
    date_of_birth: 23,
    heigh: 160,
    weight: 55,
    start_date: 20,
    end_date: 30,
    renewal: "no",
    
       },

]
export function getMembers() {
return members;
}


export function getMember(m_Id) {
return Members.find(
Member => Member.m_Id === m_Id
);
}