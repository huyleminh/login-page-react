import React from "react";
import "../assets/404.css";
import { IBaseProps } from "../BaseInterfaces/BaseInterface"
import { GlobalEvent } from "../events";
import {withRouter} from "react-router-dom"



class PageNotFound extends React.Component<IBaseProps, any> {
    goHome = () => {
        GlobalEvent.Init.baseEmit("home", this.props)
    }

    render() {
        return (
            <div className="bg-404">
                <div className="btn-block">
                    <button className="nav-button" onClick={this.goHome}>Trang chủ</button>
                </div>
            </div>
        )
    }
}

export default withRouter(PageNotFound);