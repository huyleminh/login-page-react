import React from "react";
import {
  Switch, 
  Route
} from "react-router-dom";
import Manager from "./Layouts/Manager";
import Information from "./Layouts/Information";
import Products from "./Layouts/Products";
import Login from "./Login";
import DashBoard from "./Layouts/DashBoard";
import PageNotFound from "./Errors/PageNotFound";
import Forbidden from "./Errors/Forbidden";

class App extends React.Component {
  render() {
    return(
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/manager" component={Manager} />
          <Route path="/information" component={Information} />
          <Route path="/products" component={Products} />
          <Route path="/forbidden" component={Forbidden} />
          <Route exact path="/" component={DashBoard} />
          <Route component={PageNotFound} />
        </Switch>
    );
  }
}

export default App;