import React from "react";
import "./assets/Login.css";
import UserData from "./data/data.json";
import {
    IAccountState,
    IBaseProps,
    IData
} from "./BaseInterface/BaseInterface"


const data: IData = UserData;

class Login extends React.Component<IBaseProps, IAccountState> {
    constructor(props: IBaseProps) {
        super(props);
        this.state = {
            _userName: "",
            _password: "",
        }
    }

    getUserInfo = (event: any) => {
        this.setState({
            _userName: event.target.value,
        })
    }

    getUserPassword = (event: any) => {
        this.setState({
            _password: event.target.value
        })
    }

    checkLogin = () => {
        let role = ""
        const userAcc = {
            userName: this.state._userName,
            password: this.state._password
        }       

        let flag = 0;
        for (let key in data) {
            for (let element of data[key].info)
                if (userAcc.password === element.password && userAcc.userName === element.userName) {                    role = 
                    role = key;
                    flag = 1;
                    break;
                }
            if (flag === 1) break;
        }
        if (flag === 0) {
            alert("Sai tên đăng nhập hoặc mật khẩu!!!");
            this.props.history.push("/login");
        }

        localStorage.setItem('role', role);
    }

    render() {
        return (
            <div className="loginBox">
                <div className="Box">
                    <div className="form-container">
                        <h2>Đăng nhập</h2>
                        <form action="/">
                            <div className="field">
                                <input
                                    autoFocus type="text"
                                    name="_userName"
                                    placeholder="Tên đăng nhập"
                                    value={this.state._userName}
                                    onChange={this.getUserInfo}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    name="_password"
                                    placeholder="Mật khẩu"
                                    value={this.state._password}
                                    onChange={this.getUserPassword}
                                    autoComplete="off"
                                />
                            </div>
                            <button className="submit" onClick={this.checkLogin}>Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;