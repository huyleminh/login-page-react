import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import { IBaseProps, IData } from "./BaseInterfaces/BaseInterface";
import UserData from "./Data/data.json"


const role = localStorage.getItem('role');
const data: IData = UserData;
const listRole = Object.keys(data);
const fakeAuth = {
    isAuthenticated: true
}

export default function PrivateRoute({ component: Component, ...rest }: any) {
    return (
        <div>
            <Route
                {...rest}
                 render={(props: IBaseProps) => {
                    if (fakeAuth.isAuthenticated) {
                        if (role === null || !listRole.includes(role)) {
                            return (<Redirect to="/login"/>)
                        }
                        if (!data[role].path.includes(props.location.pathname)) {
                            return (<Redirect to="/403"/>)
                        }
                        else {
                            return (<Component {...props}/>)
                        }
                    }
                    else {
                        return (<Redirect to="/login"/>)
                    }
                }}
            />
        </div>
    );
}