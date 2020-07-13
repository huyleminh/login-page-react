import React from "react";
import "../assets/Login.css";
import UserData from "../Data/data.json";
import {
    IAccountState,
    IBaseProps,
    IData
} from "../BaseInterfaces/BaseInterface";



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
            <div className="login-container">
                <div className="login-box">
                    <h3 id="login-title">Log In</h3>
                    <form className="form-control" action="/">
                        <input autoFocus type="text" placeholder="Username" name="_userName" value={this.state._userName} onChange={this.getUserInfo}/><br/>
                        <input type="password" placeholder="Password" autoComplete="off" name="_password" value={this.state._password} onChange={this.getUserPassword}/>
                        <div>
                            <button className="btn-group-lg" type="submit" onClick={this.checkLogin}>Log in</button>
                        </div>
                    </form>
                </div>
            </div>                    
        );
    }
}

export default Login;