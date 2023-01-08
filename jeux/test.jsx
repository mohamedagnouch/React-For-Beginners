// import React from "react";

// class Test extends React.Component{
//     constructor(props){
//         super(props);
// this.state ={face:null, compteur:0 , end:false}

//     }
//     jouer=()=>{
//         let facee =Math.floor(Math.random()*6+1);
//         this.setState({ face: facee, compteur:+1, end: false });
//         if(facee===this.props.cach)
//         this.setState({end:true});
//     }
//     init=()=>{
//         this.setState({ face: null, compteur: 0, end: false });
//     }
//     render(){
//         return (
//           <div>
//             <img  src={
//                 this.state.face == null
//                   ? "imges/init.png"
//                   : `imges/face${this.state.face}.png`
//               }
//               alt=""/>
//             <h1>Jeu de De</h1>
//             <p>face :{this.state.face}</p>
//             <p>number d'essais :{this.state.compteur}</p>
//             {this.state.end ? (
//               <div>
//                 <p>Bravo ! vous aver trouver face cache </p>
//                 <button onClick={this.init}>Renesialser</button>
//               </div>
//             ) : (
//               <button onClick={this.jouer}>jouer</button>
//             )}
//           </div>
//         );
//     }
// }
// export default Test;