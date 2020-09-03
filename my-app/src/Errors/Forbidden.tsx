import React from "react";
import "../assets/403.css";
import {IBaseProps} from "../BaseInterfaces/BaseInterface";
import { GlobalEvent } from "../events";



class Forbidden extends React.Component<IBaseProps, any> {
    goHome = () => {
        GlobalEvent.Init.baseEmit("goHome", this.props)
    }

    handleLogout = () => {
        GlobalEvent.Init.baseEmit("logout", this.props)
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