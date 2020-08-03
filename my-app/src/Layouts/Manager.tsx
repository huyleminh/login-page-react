import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";
import  {Switch} from "react-router-dom"
import Route from "../PrivateRoute"



class Manager extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/manager"> <ManagerHome/> </Route>
                    <Route exact path="/manager/add-member"> <AddMember/> </Route>
                    <Route exact path="/manager/delete-member"> <DeleteMember/> </Route>
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