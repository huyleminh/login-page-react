import React from "react";
import NavBar from "../NavBar";
import { IBaseProps } from "../BaseInterface/BaseInterface";
import Authenticated from "../Errors/Authenticated";


class Manager extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                { Authenticated(this.props) }
                <NavBar />
                <h1> Manager </h1>
            </div>
        );
    }
}

export default Manager;