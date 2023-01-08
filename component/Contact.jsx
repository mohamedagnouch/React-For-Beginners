// import React from "react";
// import ContactItem from "./ContactItem";
// import AddContact from "./AddContact";

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: [
//         {
//           note: "Mohamed",
//         },
//         {
//           note: "Yahya",
//         },
//         {
//           note: "Adnane",
//         },
//       ],
//     };
//   }
//   addContact = (contact) => {
//     let updateContact = this.state.contacts;
//     updateContact.push(contact);
//     this.setState({ contacts: updateContact });
//   };
//   deleteContact = (note) => {
//     let DelContact = this.state.contacts;
//     let updateContact = DelContact.filter(contact =>contact.note !==note);
//     this.setState({ contacts: updateContact });
//   };
//   render() {
//     return (
//       <div>
//         <div className="container">
//           <AddContact addContact={this.addContact} />
//           <div className="row my-5">
//             <div className="col md-6 mx-auto">
//               <div className="card ">
//                 <table className="table">
//                    <thead>
//                     <tr>
//                       <th>Notes</th>
//                       <th>Delete</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {this.state.contacts.map((contact, index) => (
//                       <ContactItem
//                         deleteContact={this.deleteContact}
//                         key={index}
//                         contact={contact}
//                       />
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

//export default Contact;