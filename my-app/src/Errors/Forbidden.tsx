import React from "react";
import "../assets/403.css";
import NavBar from "../NavBar"
import {IBaseProps} from "../BaseInterface/BaseInterface"


class Forbidden extends React.Component<IBaseProps, any> {
    render() {
        return (
            <div>
                <NavBar />
                <div className="bg-403"></div>
            </div>
        )
    }
}

export default Forbidden;