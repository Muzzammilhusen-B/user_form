import React from "react";
import Login from "./Login";
import Registration from "./Regitration";
import Forgotpwd from "./Forgotpwd";
import LoginHome from "./LoginHome";
import Registered from "./Registered";
import ProductHome from "./ProductHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
// import Login from "./test";
// import Registration from "./testregi";
=======
//import Login from "./test";
>>>>>>> 7a6b5d9864146eb7ed33a3d898f0ee6443039d2c

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
          <Route path="/producthome" exact component={ProductHome} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
