import React from "react";
import "../assets/403.css";
import {IBaseProps} from "../BaseInterfaces/BaseInterface";



class Forbidden extends React.Component<IBaseProps, any> {
    goHome = () => {
        this.props.history.push("/");
    }

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push("/login")
    }

    render() {
        return (
            <div className="bg-403">
                <button className="btn-error" onClick={this.goHome}>Trang chủ</button>
                <button className="btn-error" onClick={this.handleLogout}>Đăng nhập</button>
            </div>
        )
    }
}

export default Forbidden;