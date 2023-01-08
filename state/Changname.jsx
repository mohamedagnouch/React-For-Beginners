import React from "react";

class Chang extends React.Component{
    constructor(props){
        super(props);
        this.state = {prenom:"Ali"} 
    }
    changPrenom=()=>{
        this.setState({prenom:"Ahmad"});
    }
    render(){
        return(
            <div>
                <h1>Bonjour,{this.state.prenom}</h1>
                <button type="button" onClick={this.changPrenom}>Change Prenom</button>
            </div>
        );
    }
}
export default Chang;