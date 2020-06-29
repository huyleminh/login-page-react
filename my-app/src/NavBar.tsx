import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./assets/NavBar.css";
import Logout from "./Logout"
import { IBaseProps } from "./BaseInterface/BaseInterface";


class NavBar extends React.Component<any, any> {
    // constructor(props: IBaseProps) {
    //     super(props);
    // }

    handleLogOut = () => {
        localStorage.clear();
        // this.props.history.push("/login")
    }

    render() {
        return (
            <div>
                <ul>
                    <li> <NavLink className="nav-link" exact to="/" activeClassName="selected">Home</NavLink> </li>
                    <li> <NavLink className="nav-link" to="/information" activeClassName="selected">Information</NavLink> </li>
                    <li> <NavLink className="nav-link" to="/manager" activeClassName="selected">Manager</NavLink> </li>
                    <li> <NavLink className="nav-link" to="/products" activeClassName="selected">Products</NavLink> </li>
                    <li style={{ float: "right" }}> <NavLink to="/login" onClick={this.handleLogOut}>Logout</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;