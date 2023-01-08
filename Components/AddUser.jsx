import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function AddUser() {
    const [nom,setNom]=useState();
    const [prenom,setPrenom]=useState()
    const [date, setDate] = useState();
    const [ville, setVille] = useState();

const formSbmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/stagiaire",{
        nom,
        prenom,
        date,
        ville,
    }).then((data)=>{
        console.log(data)
    });
}

  return (
    <>
      <h1>Add User</h1>
      <form action="" onSubmit={formSbmit}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e) => setNom(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Prenom</label>
          <input type="text" onChange={(e) => setPrenom(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Date</label>
          <input type="Date" onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Ville</label>
          <input type="Dattext" onChange={(e) => setVille(e.target.value)} />
        </div>
        <div>
            <button type='submit'>Add user</button>
        </div>
      </form>
    </>
  );
}

export default AddUser
