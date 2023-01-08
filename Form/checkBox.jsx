import React from "react";
import { useState } from "react";

function Checkbox(){
    const[homme,setHomme]=useState(true);
    const[femme,setFemme]=useState(true);
    const handleChangee =(data)=>{
        if(data ==='homme')
        {
            if (homme ===true) {
                console.log(data,"our value")
            }
            setHomme(!homme)
        }
        if (data === "femme") {
          if (femme === true) {
            console.log(data, "our value");
          }
          setFemme(!femme)
        }
    }

    return (
      <div>
        <label htmlFor="homme">Homme</label>
        <input
          type="checkbox"
          value={homme}
          onChange={() => handleChangee("homme")}
        />
        <label htmlFor="femme">Femme</label>
        <input
          type="checkbox"
          value={femme}
          onChange={() => handleChangee("femme")}
        />
      </div>
    );
}
export default Checkbox;