import React from "react";
import "./assets/NavBar.css"
import { IBaseProps, IDataElementBar } from "./BaseInterfaces/BaseInterface";
import data from "./Data/data.json";
import {withRouter} from "react-router"



class NavBar extends React.Component<IBaseProps, any> {
    goHome = () => {
        this.props.history.push("/") 
    }

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push("/login")
    }

    componentDidMount = () => {
        const user = localStorage.getItem('user');
        let userObj = {role: "", id: ""}
        if (user !== null) {
            userObj = JSON.parse(user);   
        }

        let contents = [] as Array<any>;
        function getData(data: Array<IDataElementBar>, contents: Array<any>) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (element.role.includes(userObj.role) === false) {      
                    continue
                }
                if (element.member.includes(userObj.id) === false)
                    continue;

                switch (element.type) {
                    case "bar":
                        contents.push(`<button class="nav-dropdown-btn">${element.title}</button>`)
                        break;
                    case "content":
                        contents.push(`<a class="nav-dropdown-content-NavLink" href=${element.path}>${element.title}</a>`)
                        break;
                }

                if (element.hasChild === true) {
                    getData(element.child, contents)
                }
            }
        }

        //Call to get data from data.json
        getData(data, contents);

        //Filter button
        const navBar = contents.filter((element) => {
            if (element.indexOf("button") === 1)
                return element
        })

        //Filter NavLink
        const navContent = contents.filter((element) => {
            if (element.indexOf("a") === 1)
                return element
        })

        //Inner data to navigation bar
        for (let i = 0; i < navBar.length; i++) {
            let target = document.getElementById("nav-dropdown-" + `${i + 1}`)
            if (target)
                target.innerHTML = navBar[i] + `<div class="nav-dropdown-content" id="nav-dropdown-content-${i + 1}"></div>`

            let targetContent = document.getElementById("nav-dropdown-content-" + `${i + 1}`) 
            let token = navBar[i].slice(navBar[i].indexOf('>') + 1, navBar[i].indexOf('<', 2));
            
            const content = navContent.filter(element => {
                if (element.includes(token.toLowerCase()))
                    return element
            })

            if (targetContent)
                targetContent.innerHTML = content.join("")
        }
    }

    render() {
        return(
            <div className="nav-container">
                <div className="nav-dropdown">
                    <button className="nav-dropdown-btn" >Home</button>
                </div>

                <div className="nav-dropdown" id="nav-dropdown-1"></div>

                <div className="nav-dropdown" id="nav-dropdown-2"></div>

                <div className="nav-dropdown" id="nav-dropdown-3"></div>

                <div className="nav-dropdown"><button className="nav-dropdown-btn" onClick={this.handleLogOut}>Logout</button></div>
            </div>
        )
    }
}

export default withRouter(NavBar);
