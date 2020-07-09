import React from "react";
import {
  Switch, 
  Route
} from "react-router-dom";
import Manager from "./Layouts/Manager";
import Information from "./Layouts/Information";
import Products from "./Layouts/Products";
import Login from "./Layouts/Login";
import DashBoard from "./Layouts/DashBoard";
import PageNotFound from "./Errors/PageNotFound";
import Forbidden from "./Errors/Forbidden";
import PrivateRoute from "./PrivateRoute";

class App extends React.Component<any, any> {
  render() {
    return(
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/manager" component={Manager} />
          <PrivateRoute path="/information" component={Information} />
          <PrivateRoute path="/products" component={Products} />
          <Route path="/403" component={Forbidden} />
          <PrivateRoute exact path="/" component={DashBoard} />
          <Route component={PageNotFound} />
        </Switch>
    );
  }
}

export default App;