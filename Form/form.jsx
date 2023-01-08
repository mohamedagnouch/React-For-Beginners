import React from "react";
import Checkbox from "./checkBox";

class Formu extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      adresse: "",
      Ville: "Marrakech",
    };
    
   
  }
  handelUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handelAdresseChange = (e) => {
    this.setState({
      adresse: e.target.value,
    });
  };
  handelChange=(e)=>{
    this.setState({
        sexe:e.target.value
    })
  }
  handelVilleChange = (e) => {
    this.setState({
      Ville: e.target.value,
    });
  };
  

  hendleSubmit = (e)=>{
    e.preventDefault();
    alert(`My name is ${this.state.username} Adresse ${this.state.adresse} my City ${this.state.Ville} `)
  }


  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <div>
          <label htmlFor="">Username :</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handelUsernameChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Adresse :</label>
          <textarea
            value={this.state.adresse}
            onChange={this.handelAdresseChange}
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="">Ville</label>
          <select
            value={this.state.Ville}
            onChange={this.handelVilleChange}
          >
            <option value="marrakech">Marrakech</option>
            <option value="Rabat">Rabat</option>
            <option value="agadir">Agadir</option>
          </select>
        </div>
        <br />
        <div>
          <Checkbox />
        </div>

        <button type="submit">submit</button>
      </form>
    );
    

  }
}
export default Formu;