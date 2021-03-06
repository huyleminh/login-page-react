import React from "react";
import "../assets/Login.css";
import UserData from "../data/users.json";
import {
    IAccountState,
    IBaseProps,
    IData
} from "../BaseInterfaces/BaseInterface";
import { GlobalEvent, LoginEvent } from "../events";


const data: IData = UserData;

class Login extends React.Component<IBaseProps, IAccountState> {
    constructor(props: IBaseProps) {
        super(props);
        this.state = {
            _username: "",
            _password: "",
        }
        
        LoginEvent.Init.baseOn("checkLogin", (props: IBaseProps) => {
            if (localStorage.getItem("user")) {
                props.history.push("/")
            }
            else {
                localStorage.clear();
                props.history.push("/login")
            }
        })
    }

    componentDidMount() {
        LoginEvent.Init.baseEmit("checkLogin", this.props)
    }

    handleChange = (event: any) => {
        const name: string = event.target.name;
        const value: IAccountState = event.target.value;
        this.setState({
            [name]: value
        });
    }

    checkLogin = () => {
        if (this.state._username === "" || this.state._password === "") {
            alert("Vui lòng điền đầy đủ thông tin")
            return
        }
        let user = {
            role: "",
            id: ""
        }
        const userAcc = {
            username: this.state._username,
            password: this.state._password
        }       

        let flag = 0;
        for (let key in data) {
            for (let element of data[key])
                if (userAcc.password === element.password && userAcc.username === element.username) {
                    user.role = key;
                    user.id = element.id;
                    flag = 1;
                    break;
                }
            if (flag === 1) break;
        }
        if (flag === 0) {
            alert("Sai tên đăng nhập hoặc mật khẩu.\nVui lòng nhập lại thông tin.");
            GlobalEvent.Init.baseEmit("login", this.props)
        }
        else {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-box">
                    <h3 id="login-title">Log In</h3>
                    <form className="form-control" action="/">
                        <input autoFocus type="text" placeholder="username" name="_username" value={this.state._username} onChange={this.handleChange}/><br/>
                        <input type="password" placeholder="Password" autoComplete="off" name="_password" value={this.state._password} onChange={this.handleChange}/>
                        <div>
                            <button className="btn-group-lg" type="submit" onClick={this.checkLogin} >Log in</button>
                        </div>
                    </form>
                </div>
            </div>                
        );
    }
}

export default Login;