import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Spices from "./components/pages/Spices";
import Vegetables from "./components/pages/Vegetables";
import Fruits from "./components/pages/Fruits";
import ContactUs from "./components/pages/ContactUs";
import UserContext from "./Context/UserContext";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import ReLogin from './components/ReLogin'
const App = () => {
  const [id, setId] = useState(null);
  const [token, setToken] = useState(null);

  const Value = (I: string, T: string) => {
    setId(I);
    setToken(T);
  };

  useEffect(() => {
    if (
      id !== localStorage.getItem("id") &&
      token !== localStorage.getItem("jwt-token")
    ) {
      Value(localStorage.getItem("id"), localStorage.getItem("jwt-token"));
    }
    console.log("Context Updated");
  }, []);

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ Id: id, Token: token, setValue: Value }}>
          <Switch>
            <Route exact path='/home/' component={Homepage} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/fruits' component={Fruits} />
            <Route exact path='/vegetables' component={Vegetables} />
            <Route exact path='/spices' component={Spices} />
            <Route exact path='/contactus' component={ContactUs} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/cart' component={Cart} />
            <Route path='/not-found' render={ReLogin} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
