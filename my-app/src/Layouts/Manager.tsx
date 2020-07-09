import React from "react";
import NavBar from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";



class Manager extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <h1>Manager page</h1>
            </div>
        );
    }
}

export default Manager;