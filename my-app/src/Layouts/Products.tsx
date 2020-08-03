import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface";


class Products extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <h1>Products home page</h1>
            </div>
        );
    }
}

export default Products;