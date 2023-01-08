import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function DataUser() {
    const[user,setUser]=useState([{}])
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/stagiaire")
        .then((res)=>{
            console.log(res)
            setUser(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    const deleteUser =()=>{
      fetch(`http://localhost:3000/api/stagiaire`,{
        method:"DELETE"
      }).then((res)=>res.json())
        .then((data)=>{
          console.log(data)
        })
      
    }
  return (
    <div>
      <table className="table table-striped mt-5 ">
        <thead >
          <tr>
            <td><h3>Nom</h3></td>
            <td><h3>Prenom</h3></td>
            <td><h3>Date Inscription</h3></td>
            <td><h3>Adresse</h3></td>
            <td><h3>Action</h3></td>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => {
            return (
              <tr>
                <td>{users.nom}</td>
                <td>{users.prenom}</td>
                <td>{users.date}</td>
                <td>{users.ville}</td>
                <td>
                  <button onClick={()=>deleteUser(users.code)}>
                    Delete 
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataUser
//  <ul>
//         {
//             user.map(users=>(
//                 <li key={users.code}>{users.nom} {users.prenom} {users.ville} {users.date}</li>
//             ))
//         }
//       </ul>

