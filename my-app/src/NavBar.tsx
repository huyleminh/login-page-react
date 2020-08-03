import React from "react";
import "./assets/NavBar.css";
import { IBaseProps, IDataElementBar } from "./BaseInterfaces/BaseInterface";
import data from "./data/data.json";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";


const user = localStorage.getItem("user");
let userObj = { role: "", id: "" };
if (user !== null) {
    userObj = JSON.parse(user);
}


class NavBarView extends React.Component<IBaseProps, any> {   
    private path : Array<string>;
    constructor(props: IBaseProps) {
        super(props);
        this.state = {
            path: ["/"]
        };
        this.path = ["/"];
    }

    goHome = () => {
        this.props.history.push("/");
    };

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push("/login");
    };

    dynamicNavBar = (data: Array<IDataElementBar>) => {
        let result = data.map((item: IDataElementBar) => {
            if (item.role.includes(userObj.role)) {
                if (item.member.includes(userObj.id)) {
                    if (item.hasChild) {
                        this.path.push(item.path)
                        return (
                            <div className="nav-dropdown">
                                <button className="nav-dropdown-btn">
                                <Link className="nav-dropdown-btn-a" to={item.path}>
                                    {item.title}
                                </Link>
                                </button>
                            <div className="nav-dropdown-content">
                                {this.dynamicNavBar(item.child)}
                            </div>
                        </div>
                        );
                    } else {
                        this.path.push(item.path)
                        return (
                            <Link className="nav-dropdown-content-NavLink" to={item.path}>
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
        if (!this.path.includes(this.props.location.pathname))
            this.props.history.push("/403")
    }

    render() {
        this.path = ["/"]
        return (
            <div className="nav-container">
                <div className="nav-dropdown">
                    <button className="nav-dropdown-btn" onClick={this.goHome}>
                        Home
                    </button>
                </div>

                {this.dynamicNavBar(data).map((element) => element)}

                <div className="nav-dropdown">
                    <button className="nav-dropdown-btn" onClick={this.handleLogOut}>
                        Logout
                    </button>
                </div>
            </div>
        );
    }
}

export const NavBar = withRouter(NavBarView);
