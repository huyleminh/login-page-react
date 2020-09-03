import {  RouteComponentProps } from "react-router-dom";


export interface IBaseProps extends  RouteComponentProps {
}

export interface IAccountState {
    _username ?: string,
    _password ?: string,
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

export interface IAddMemberForm {
    [index: string] : any,
    _name ?: string,
    _gender ?: string,
    _email ?: string,
    _phone ?: string,
    _username?: string,
    _password?: string,
    _confirm?: string,
    _role?: string,
}

export interface IValidatedStatus {
    [index: string] : any,
    isEmpty: boolean,
    _name : boolean,
    _email : boolean,
    _phone : boolean,
    _username: boolean,
    _password: boolean,
    _confirm: boolean
}