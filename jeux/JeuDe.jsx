// import React from "react";

// class JeuDe extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={face:null, compteur:0, end:false}
//     }
//     jouer=()=>{
//         let faceval = Math.floor(Math.random()*6+1);
      
//             this.setState({
//               face: faceval,
//               compteur: this.state.compteur + 1,
//               end: false,
//             });
//               if (faceval == this.props.cache)
//                 this.setState({
//                   end: true,
//                 });
//     }
//     init=()=>{
//         this.setState({face:null, compteur:0, end:false})
//     }
//     render(){
//         return (
//           <div>
//             <img
//               src={
//                 this.state.face == null
//                   ? "imges/init.png"
//                   : `imges/face${this.state.face}.png`
//               }
//             />
//             <h1>Jeu de De...</h1>
//             <p>face :{this.state.face}</p>
//             <p>Nombre d' essais :{this.state.compteur}</p>
//             {this.state.end ? (
//               <dir>
//                 <p>Bravo !Vous Avez Trouver la Face cache </p>
//                 <button onClick={this.init}>Inisialiser</button>
//               </dir>
//             ) : (
//               <button onClick={this.jouer}>Jouer</button>
//             )}
//           </div>
//         );
//     }
// }
// export default JeuDe;