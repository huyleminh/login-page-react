import React from "react";
import {NavBar} from "../NavBar";
import { IBaseProps } from "../BaseInterfaces/BaseInterface"
import  {Switch} from "react-router-dom"
import Route from "../PrivateRoute"


class Products extends React.Component<IBaseProps, any> {
    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/products"> <ProductsHome/> </Route>
                    <Route exact path="/products/view-products"> <ViewProducts/> </Route>
                    <Route exact path="/products/add-new"> <AddNew/> </Route>
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