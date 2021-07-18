import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import NewImage from '../pages/NewImage/NewImage'
import Collections from "../pages/Collections/Collections"
import Collection from "../pages/Collection/Collection"
const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/new-image" component={NewImage}/>  
         <Route exact path="/singup" component={SignUp}/> 
         <Route exact path="/login" component={Login}/> 
         <Route exact path="/collections" component={Collections}/>
         <Route exact path="/collections/:id" component={Collection}/>

        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;