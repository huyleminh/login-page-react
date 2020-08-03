import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";


class DeleteMember extends React.Component<IBaseProps,any> {
    render() {
        return(
            <div>
                <NavBar />
                <h1>Delete member</h1>
            </div>
        );
    }
}

export default DeleteMember;