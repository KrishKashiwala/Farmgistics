import { useState } from 'react';
import Homepage from './components/Homepage';
import Landing from './components/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Spices from './components/pages/Spices';
import Vegetables from './components/pages/Vegetables';
import Fruits from './components/pages/Fruits';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/pages/ContactUs';
import UserContext from './Context/UserContext';
import Product from './components/pages/Product';

const App = () => {

    const [userId, setUserId] = useState(null);
    const [userToken, setUserToken] = useState(null);

    const Add = ( Id, Token ) => {
        setUserId(Id);
        setUserToken(Token);
    }

    const Remove = () => {
        setUserId(null);
        setUserToken(null);
    }

    return (
        <div>
            <BrowserRouter>
            <UserContext.Provider value={{
                Id: userId, 
                Token: userToken, 
                setUser: Add, 
                removeUser: Remove,
                }}>
                <Navbar/>
                <Switch>
                    <Route exact path="/home/:id" component={Homepage} />
                    <Route exact path="/home/profile/:id" component={Profile} />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/fruits" component={Fruits} />
                    <Route exact path="/vegetables" component={Vegetables} />
                    <Route exact path="/spices" component={Spices} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/" render={() => <div>404</div>} />
                </Switch>
                <Footer/>
            </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
