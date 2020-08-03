import React from "react";
import {NavBar} from "../NavBar";
import "../assets/NavBar.css";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";


class Information extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <h1>Information home page</h1>
            </div>
        );
    }
}

export default Information; 