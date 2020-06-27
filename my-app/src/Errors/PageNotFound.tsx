import React from "react";
import "../assets/404.css";
import { IBaseProps } from "../BaseInterface/BaseInterface"



class PageNotFound extends React.Component<IBaseProps, any> {
    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="bg-404">
                <button className="go-back-button" onClick={this.handleClick}>Trang chủ</button>
            </div>
        )
    }
}

export default PageNotFound;