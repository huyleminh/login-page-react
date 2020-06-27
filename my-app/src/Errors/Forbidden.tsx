import React from "react";
import "../assets/403.css";
import NavBar from "../NavBar"


class Forbidden extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="bg-403"></div>
            </div>
        )
    }
}

export default Forbidden;