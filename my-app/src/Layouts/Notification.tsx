import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";


class Notifications extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <h1>View notifications</h1>
            </div>
        );
    }
}

export default Notifications;