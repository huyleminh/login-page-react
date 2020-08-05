import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";


class DashBoard extends React.Component<IBaseProps, any> {
    componentWillMount() {
        const user = localStorage.getItem("user");
        if (user === null) {
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1>Home page</h1>
            </div>
        )
    }
}

export default DashBoard;