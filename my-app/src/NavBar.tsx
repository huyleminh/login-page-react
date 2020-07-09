import React from "react";
import { NavLink } from "react-router-dom";
import "./assets/NavBar.css"
import { IData } from "./BaseInterfaces/BaseInterface";
import Data from "./Data/data.json"


const role = localStorage.getItem('role');
const data: IData = Data;

class NavBar extends React.Component<any, any> {
    handleLogOut = () => {
        localStorage.clear();
    }

    createTitle = (path: string) => {
        return (path[1].toUpperCase() + path.slice(2, path.length))
    }

    render() {
        if(role !== null) {
            const listItem = data[role].path.map((element: string) => {
                if (element === "/")
                    return (
                        <li className="nav-li"> <NavLink id="nav-link" exact to="/" activeClassName="selected">Home</NavLink> </li>
                    )
                else if (element === "/login")
                    return (
                        <li className="nav-li"> <NavLink id="nav-link" to="/login" onClick={this.handleLogOut}>Log out</NavLink></li>
                    )
                else {
                    return (
                        <li className="nav-li" > <NavLink id="nav-link" exact to={element} activeClassName="selected">{this.createTitle(element)}</NavLink> </li>
                    )
                }
            })
            return (
                <div className="layout-header"> <ul className="nav-container-right">{listItem}</ul> </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default NavBar;