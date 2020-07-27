import React from "react";
import "./assets/NavBar.css"
import { IBaseProps } from "./BaseInterfaces/BaseInterface";
import data from "./Data/data.json";
import {withRouter} from "react-router"
import getData from "./GetData"



class NavBarView extends React.Component<IBaseProps, any> {
    goHome = () => {
        this.props.history.push("/") 
    }

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push("/login")
    }

    componentDidMount = () => {
        //Call to get data from data.json
        let contents = [] as Array<any>;
        let paths = [] as Array<any>;
        let ids = [] as Array<any>;
        let roles = [] as Array<any>;
        getData(data, contents, paths, ids, roles);

        //Filter button
        const navBar = contents.filter((element) => {
            return (element.indexOf("button") === 1)
        })
        
        //Filter NavLink
        const navContent = contents.filter((element) => {
            return (element.indexOf("a") === 1)
        })
        
        //Inner data to navigation bar
        for (let i = 0; i < navBar.length; i++) {
            let target = document.getElementById("nav-dropdown-" + `${i + 1}`)
            if (target) {
                target.innerHTML = navBar[i] + `<div class="nav-dropdown-content" id="nav-dropdown-content-${i + 1}"></div>`
            }

            let targetContent = document.getElementById("nav-dropdown-content-" + `${i + 1}`) 
            let token = navBar[i].slice(navBar[i].indexOf('/>') + 2, navBar[i].indexOf('</'));
            
            const content = navContent.filter(element => {
                    return (element.includes(token.toLowerCase()))
            })

            if (targetContent)
                targetContent.innerHTML = content.join("")
        }
    }

    render() {
        return(
            <div className="nav-container">
                <div className="nav-dropdown">
                    <button className="nav-dropdown-btn" onClick={this.goHome}>Home</button>
                </div>

                <div className="nav-dropdown" id="nav-dropdown-1" ></div>

                <div className="nav-dropdown" id="nav-dropdown-2" ></div>

                <div className="nav-dropdown" id="nav-dropdown-3" ></div>

                <div className="nav-dropdown"><button className="nav-dropdown-btn" onClick={this.handleLogOut}>Logout</button></div>
            </div>
        )
    }
}

export const NavBar = withRouter(NavBarView);
