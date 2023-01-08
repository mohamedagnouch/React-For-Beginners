import React from "react";

class Conter extends React.Component{
    constructor(props){
        super(props);
        this.state={num:0};
    }
    inc=()=>{
        this.setState({ num: this.state.num + 1});
    }
    dec =()=>{
        this.setState({num: this.state.num -1});
    }
    render(){
        return(
            <div className="App">
                <p>{this.state.num}</p>
                <button onClick={this.inc}>Increment</button>
                <br /><br />
                <button onClick={this.dec}>Decrementer</button>
            </div>
        )
    }
}
export default Conter;