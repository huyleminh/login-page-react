import React from "react";
import NavBar from "../NavBar";
import { IBaseProps } from "../BaseInterface/BaseInterface";
import Authenticated from "../Errors/Authenticated"


class DashBoard extends React.Component<IBaseProps, any> {
    render() {
        return (
            <div>
                {Authenticated(this.props)} 
                <NavBar />
                <h1>WELLCOME</h1>
            </div>
        )
    } //check coi thử cái path khi truyền vào đúng với path được quy định trong role hay k 
}

export default DashBoard;