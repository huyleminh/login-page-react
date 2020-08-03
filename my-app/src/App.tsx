import React from "react";
import {
  Switch, 
  Route
} from "react-router-dom";
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


class App extends React.Component<any, any> {
  render() {
    return(
        <Switch>
          <Route path="/login" component={Login}/>

          <Route exact path="/manager" component={Manager}/>
          <Route path="/manager/add-member" component={AddMember}/>
          <Route path="/manager/delete-member" component={DeleteMember}/> 

          <Route exact path="/information" component={Information}/>
          <Route path="/information/view-notification" component={Notification}/>
          <Route path="/information/add-notification" component={AddNotification}/>

          <Route exact path="/products" component={Products}/>
          <Route path="/products/add-new" component={AddProduct}/>
          <Route path="/products/view-products" component={ViewProducts}/>

          <Route path="/403" component={Forbidden}/>
          <Route exact path="/" component={DashBoard}/>
          <Route component={PageNotFound}/>
        </Switch>
    );
  }
}

export default App;