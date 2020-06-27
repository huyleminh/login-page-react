import {  RouteComponentProps } from "react-router-dom";


export interface IBaseProps extends  RouteComponentProps {
}

export interface IAccountState {
    _userName: string,
    _password: string,
}

export interface IData {
    [key: string]: any
}

