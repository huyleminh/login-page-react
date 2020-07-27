import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface"
import  {Switch} from "react-router-dom"
import PrivateRoute from "../PrivateRoute"


class Products extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                    <PrivateRoute exact path="/products"> <ProductsHome/> </PrivateRoute>
                    <PrivateRoute exact path="/products/view-products"> <ViewProducts/> </PrivateRoute>
                    <PrivateRoute exact path="/products/add-new"> <AddNew/> </PrivateRoute>
                </Switch>
            </div>
        );
    }
}

export default Products;

export function ProductsHome() {
    return(
        <h1>Products home page</h1>
    );
}

export function ViewProducts() {
    return(
        <h1>View products</h1>
    );
}

export function AddNew() {
    return(
        <h1>Add new product</h1>
    );
}