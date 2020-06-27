import React from "react";
import NavBar from "../NavBar";
import { IBaseProps } from "../BaseInterface/BaseInterface";
import Authenticated from "../Errors/Authenticated"


class DashBoard extends React.Component<IBaseProps, any> {
    componentWillMount() {
        Authenticated(this.props);
    }

    render() {
        return (
            <div>
                
                <NavBar />
                <h1>WELLCOME</h1>
            </div>
        )
    }
}

export default DashBoard;