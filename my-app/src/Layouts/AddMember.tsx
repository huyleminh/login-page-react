import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";


class AddMember extends React.Component<IBaseProps,any> {
    render() {
        return(
            <div>
                <NavBar />
                <h1>Add member</h1>
            </div>
        );
    }   
}

export default AddMember;