import React from "react";
import {NavBar} from "../NavBar";
import "../assets/NavBar.css";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";
import {Switch} from "react-router-dom"
import PrivateRoute from "../PrivateRoute"



class Information extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                    <PrivateRoute exact path="/information"> <InformationHome/> </PrivateRoute>
                    <PrivateRoute exact path="/information/view-notification"> <Notifications/> </PrivateRoute>
                    <PrivateRoute exact path="/information/add-notification"> <AddNotifications/> </PrivateRoute>
                </Switch>
            </div>
        );
    }
}

export default Information; 

export function InformationHome() {
    return(
        <h1>Information home page</h1>
    );
}

export function Notifications() {
    return(
        <h1>View notifications</h1>
    );
}

export function AddNotifications() {
    return(
        <h1>Add notifications</h1>
    );
}