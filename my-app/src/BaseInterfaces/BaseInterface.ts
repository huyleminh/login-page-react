import {  RouteComponentProps } from "react-router-dom";


export interface IBaseProps extends  RouteComponentProps {
}

export interface IAccountState {
    _username: string,
    _password: string,
}

export interface IData {
    [key: string]: any
}

export interface IDataElementBar {
    title: string,
    role: Array<string>,
    member: Array<string>,
    path: string,
    type: string,
    hasChild: boolean,
    child: IDataElementBar[]
}