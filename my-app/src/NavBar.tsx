import React from "react";
import { NavLink } from "react-router-dom";
import "./assets/NavBar.css";
import Logout from "./Logout"

class NavBar extends React.Component<any, any> {
    render() {
        return (
            <div>
                <ul>
                    <li> <NavLink className="nav-link" to="/information" activeClassName="selected">Information</NavLink> </li>
                    <li> <NavLink className="nav-link" to="/manager" activeClassName="selected">Manager</NavLink> </li>
                    <li> <NavLink className="nav-link" to="/products" activeClassName="selected">Products</NavLink> </li>
                    <li> <NavLink className="nav-link" to="/" > {Logout} Logout </NavLink></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;