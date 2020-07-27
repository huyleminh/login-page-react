import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";
import  {Switch} from "react-router-dom"
import PrivateRoute from "../PrivateRoute"



class Manager extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                    <PrivateRoute exact path="/manager"> <ManagerHome/> </PrivateRoute>
                    <PrivateRoute exact path="/manager/add-member"> <AddMember/> </PrivateRoute>
                    <PrivateRoute exact path="/manager/delete-member"> <DeleteMember/> </PrivateRoute>
                </Switch>
            </div>
        );
    }
}

export default Manager;

export function ManagerHome() {
    return(
        <h1>Manager home page</h1>
    );
}

export function AddMember() {
    return(
        <h1>Add member</h1>
    );
}

export function DeleteMember() {
    return(
        <h1>Delete member</h1>
    );
}