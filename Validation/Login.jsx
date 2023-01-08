import React from "react";
import { useState } from "react";

function Login() {
    const [Name,setName]=useState("")
    const [Adesse, setAdresse] = useState("")
    const [error,setError]=useState(false)
    const handlesubmit=(e)=>{
        e.preventDefault();
        if (Name.length === 0 || Adesse.length === 0) {
            setError(true)
        }
        if (Name && Adesse) {
            console.log("Name: ",Name,"\nAdresse: ",Adesse)
        }
        
       
    }
    return (
      <div>
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            id="Name"
            name="Name"
          />

          <div>
            {error && Name.length <= 0 ? <p>Name no Valid</p> : ""}
          </div>

          <label htmlFor="Adresse">Adresse</label>
          <input
            type="text"
            placeholder="Adresse"
            onChange={(e) => setAdresse(e.target.value)}
            id="Adresse"
            name="Adresse"
          />
          <div>
            {error && Adesse.length <= 0 ? <p>Adresse no Valid</p> : ""}
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
}
export default Login;