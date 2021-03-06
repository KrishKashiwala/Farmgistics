import { useState } from 'react'
import Homepage from "./components/Homepage";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Spices from "./components/pages/Spices";
import Vegetables from "./components/pages/Vegetables";
import Fruits from "./components/pages/Fruits";
import ContactUs from "./components/pages/ContactUs";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import ReLogin from './components/ReLogin'
import Pulses from "./components/pages/Pulses";

import { FilterValue } from './components/Context'

const App = () => {
  const [price, setPrice] = useState('')
  const [city, setCity] = useState()
  const stateValue = (p, c) => {
    setPrice(p)
    setCity(c)
  }
  return (
    <div>
      <BrowserRouter>
        <FilterValue.Provider value={{
          price: price,
          city: city,
          // @ts-ignore
          changeValue: stateValue
        }}>
          <Switch>
            <Route exact path='/home/' component={Homepage} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/fruits' component={Fruits} />
            <Route exact path='/vegetables' component={Vegetables} />
            <Route exact path='/spices' component={Spices} />
            <Route exact path='/pulses' component={Pulses} />
            <Route exact path='/contactus' component={ContactUs} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:cropType/:id' component={Product} />
            <Route path='/not-found' render={ReLogin} />
          </Switch>
        </FilterValue.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
