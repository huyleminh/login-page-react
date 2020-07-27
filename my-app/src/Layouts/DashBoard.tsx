import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";



class DashBoard extends React.Component<IBaseProps, any> {
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