import React from "react";
import "./assets/NavBar.css";
import { IBaseProps, IDataElementBar } from "./BaseInterfaces/BaseInterface";
import data from "./data/data.json";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {GlobalEvent} from "./events"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUserCircle} from "@fortawesome/free-solid-svg-icons"


const user = localStorage.getItem("user");
let userObj = { role: "", id: "" };
if (user !== null) {
    userObj = JSON.parse(user);
}

class NavBarView extends React.Component<IBaseProps, any> {   
    private _path : Array<string>;
    private _status: boolean;
    constructor(props: IBaseProps) {
        super(props);
        this._path = ["/"];
        this._status = false;
    }

    goHome = () => {
        GlobalEvent.Init.baseEmit("goHome", this.props)
    }

    handleLogOut = () => {
        GlobalEvent.Init.baseEmit("logout", this.props)
    };

    dynamicNavBar = (data: Array<IDataElementBar>) => {
        let result = data.map((item: IDataElementBar) => {
            if (item.role.includes(userObj.role)) {
                if (item.member.includes(userObj.id)) {
                    this._status = true;
                    if (item.hasChild) {
                        this._path.push(item.path)
                        return (
                            <div className="nav-middle-item">
                                <Link to={item.path} className="nav-link-item" >{item.title}</Link>
                                <div className="nav-submenu">
                                    {this.dynamicNavBar(item.child)}
                                </div>
                        </div>
                        );
                    } else {
                        this._path.push(item.path)
                        return (
                            <Link className="nav-link-item item" to={item.path}>
                                {item.title}
                            </Link>
                        );
                    }
                } else {
                    return <></>;
                }
            } else {
                return <></>;
            }
        });      
        return result;
    };

    componentDidMount() {
        if (this._status === false){
            GlobalEvent.Init.baseEmit("logout", this.props)
        }
        else if (!this._path.includes(this.props.location.pathname))
            GlobalEvent.Init.baseEmit("forbidden", this.props)
    }

    render() {
        this._path = ["/"]
        return (
            <div className="nav-container">
                <div className="nav-left">
                    <div className="nav-link-item" onClick={this.goHome}>   
                        <FontAwesomeIcon icon={faHome} style={{fontSize: "25px"}}/> 
                    </div>
                </div>

                <div className="nav-middle">
                    {this.dynamicNavBar(data).map((element) => element)}
                </div>

                <div className="nav-right">
                    <div className="nav-right-item">
                        <div className="nav-link-item">
                            <FontAwesomeIcon icon={faUserCircle} style={{fontSize: "25px"}}/> 
                        </div>
                        <div className="nav-right-sub">
                            <Link to="/login" onClick={this.handleLogOut} className="nav-link-item">Log out</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const NavBar = withRouter(NavBarView);
