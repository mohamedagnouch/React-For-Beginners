// import React from "react";

// class AddContact extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             note:"",
//         };
//     }
//     submitForm=(event)=>{
//         event.preventDefault();
//         const contact ={
//             note: this.state.note,
//         };
//         this.props.addContact(contact);
//         this.setState({note:""})
//     }
    
//  render(){
//        return (
//          <div className="row my-5">
//            <div className="col-md-8">
//              <form
//                onSubmit={(event) => this.submitForm(event)}
//                method="Post"
//                className="p-2"
//              >
//                <div className="form-group">
//               <p>   Notes keep : </p>
//                  <input
//                    type="text"
//                    name="name"
//                    autoComplete="off"
//                    className="form-control"
//                    value={this.state.note}
//                    placeholder="Note Keep"
//                    onChange={(event) =>
//                      this.setState({ note: event.target.value })
//                    }
//                  />
//                </div>
//                <br />
//                <div className="form-group ">
//                  <input
//                    type="submit"
//                    className="btn btn-outline-success"
//                    value="Valider"
//                  />
//                </div>
//              </form>
//            </div>
//          </div>
//        );
//  }
    
// }
// export default AddContact;