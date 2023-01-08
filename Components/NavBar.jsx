import { NavLink } from "react-router-dom";

export const Navbar =()=>{
   const navLinkStyle=(isActive)=>{
    return{
        fontWeight:isActive? 'bold':'normal',
        textDecoration:isActive?'none':'underline',
    };
   }
return (
  <nav>
    <NavLink style={navLinkStyle} to="/">
      Home
    </NavLink>
    <NavLink style={navLinkStyle} to="/About">
      About
    </NavLink>
    <NavLink style={navLinkStyle} to="/DataUser">
      Information
    </NavLink >
    <NavLink style={navLinkStyle} to="/AddUser">
  AddUser
    </NavLink>
  </nav>
);
}
