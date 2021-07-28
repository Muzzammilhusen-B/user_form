import React from "react";
import Login from "./Login";
import Registration from "./Regitration";
import Forgotpwd from "./Forgotpwd";
import LoginHome from "./LoginHome";
import Registered from "./Registered";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoginHome from "./lhome";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/forgotpwd" exact component={Forgotpwd} />
          <Route path="/loginhome" exact component={LoginHome} />
          <Route path="/registered" exact component={Registered} />
          <Route path="/loginhome/:id" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
