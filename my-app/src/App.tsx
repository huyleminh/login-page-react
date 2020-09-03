import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
//Manager components
import Manager from "./Layouts/Manager";
import AddMember from "./Layouts/AddMember";
import DeleteMember from "./Layouts/DeleteMember";
//Information components
import Information from "./Layouts/Information";
import Notification from "./Layouts/Notification";
import AddNotification from "./Layouts/AddNotification";
//Products components
import Products from "./Layouts/Products";
import AddProduct from "./Layouts/AddProduct";
import ViewProducts from "./Layouts/ViewProducts";

import Login from "./Layouts/Login";
import DashBoard from "./Layouts/DashBoard";
import PageNotFound from "./Errors/PageNotFound";
import Forbidden from "./Errors/Forbidden";
import { GlobalEvent } from "./events";
import { IBaseProps } from "./BaseInterfaces/BaseInterface";

class App extends React.Component<IBaseProps, any> {
  constructor(props: IBaseProps) {
    super(props);

    GlobalEvent.Init.baseOn("goHome", (props: IBaseProps) => {
      if (!localStorage.getItem("user")) {
        localStorage.clear();
        props.history.push("/login");
      } else {
        props.history.push("/");
      }
    });

    GlobalEvent.Init.baseOn("logout", (props: IBaseProps) => {
      localStorage.clear();
      props.history.push("/login");
    });

    GlobalEvent.Init.baseOn("forbidden", (props: IBaseProps) => {
      props.history.push("/403")
    })
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />

        <Route exact path="/manager" component={Manager} />
        <Route path="/manager/add-member" component={AddMember} />
        <Route path="/manager/delete-member" component={DeleteMember} />

        <Route exact path="/information" component={Information} />
        <Route path="/information/view-notification" component={Notification} />
        <Route path="/information/add-notification" component={AddNotification} />

        <Route exact path="/products" component={Products} />
        <Route path="/products/add-new" component={AddProduct} />
        <Route path="/products/view-products" component={ViewProducts} />

        <Route path="/403" component={Forbidden} />
        <Route path="/404" component={PageNotFound} />
        <Route exact path="/" component={DashBoard} />
        <Route>
          <Redirect to="/404">
            <PageNotFound />
          </Redirect>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(App);
