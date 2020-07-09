import React from "react";
import "../assets/404.css";
import { IBaseProps } from "../BaseInterfaces/BaseInterface"



class PageNotFound extends React.Component<IBaseProps, any> {
    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="bg-404">
                <div className="btn-block">
                    <button className="nav-button" onClick={this.handleClick}>Trang chủ</button>
                </div>
            </div>
        )
    }
}

export default PageNotFound;