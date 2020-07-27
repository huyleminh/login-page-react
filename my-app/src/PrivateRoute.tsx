import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import { IBaseProps } from "./BaseInterfaces/BaseInterface";
import getData from "./GetData";
import data from "./Data/data.json"


const user = localStorage.getItem('user');
let userObj = {role: "", id: ""}
if (user !== null) {
    userObj = JSON.parse(user);   
}
let contents = [] as Array<any>;
let paths = [] as Array<any>;   
let ids = [] as Array<any>;
let roles = [] as Array<any>;
getData(data, contents, paths, ids, roles);

const listId = Array.from(new Set(ids.reduce((acc, cur) => {
    return acc.concat(cur)
}, [])))

const listRole = Array.from((roles.reduce((acc, cur) => {
    return acc.concat(cur)
}, [])))


export default function PrivateRoute({ component: Component, ...rest }: any) {
    return (
        <div>
            <Route
                {...rest}
                 render={(props: IBaseProps) => {
                    if (listRole.includes(userObj.role) && listId.includes(userObj.id)) {
                         if (paths.includes(props.location.pathname)) {
                            return <Component {...props}/> 
                         }
                        else { 
                            return <Redirect to="/403"/>
                        }
                    }
                    else 
                        return <Redirect to="/login"/>
                }}
            />
        </div>
    );
}