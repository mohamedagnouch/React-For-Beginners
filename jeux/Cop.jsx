import React from "react";

class Jeux extends React.Component{
    constructor(props){
        super(props)
        this.state ={face:null,competur:0,end:false}
    }
    jouer =()=>{
        let facee = Math.floor(Math.random()*6+1);
        this.setState({
          face: facee,
          competur: this.state.competur+1,
        });
        if (facee === this.props.cach)
        this.setState({end:true})

    }
    init =()=>{
        this.setState({ face: null, competur: 0, end: false });
    }
    render(){
        return (
          <div>
            <img
              src={
                this.state.face == null
                  ? "imges/init.png"
                  : `imges/face${this.state.face}.png`
              }
              alt=""
            />
            <h1>Jeux De</h1>
            <p>face:{this.state.face}</p>
            <p>Number d' essey :{this.state.competur}</p>
            {this.state.end ? (
              <div>
                <p>Bravo ! vous aver trouver face cache </p>
                <button onClick={this.init}>Renesialser</button>
              </div>
            ) : (
              <button onClick={this.jouer}>jouer</button>
            )}
          </div>
        );
    }
}
export default Jeux;