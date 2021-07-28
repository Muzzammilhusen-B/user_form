import React from "react";
import Login from "./Login";
import Registration from "./Regitration";
import Forgotpwd from "./Forgotpwd";
import LoginHome from "./LoginHome";
import Registered from "./Registered";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
// import LoginHome from "./lhome";
import ProductDetails from "./ProductDetails";
=======
// import Login from "./test";
// import Registration from "./testregi";
>>>>>>> b58ef08b82ab1d7f7f132af9da7f5f170b568cc1

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
