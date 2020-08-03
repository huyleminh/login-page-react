import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";


class AddNotification extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <h1>Add notification</h1>
            </div>
        );
    }
}

export default AddNotification;