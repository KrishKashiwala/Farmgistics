import Homepage from './components/Homepage';
import Landing from './components/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/home/:id' component={Homepage} />
                    <Route exact path="/" component={Landing} />
                    <Route path="/" render={() => <div>404</div>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
