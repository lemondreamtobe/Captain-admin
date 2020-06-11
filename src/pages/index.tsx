import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import createLoadable from '../helpers/loadable';
import Home from './Home';
import Login from './Login';
import {routesUrl} from '../routes/const';
// const Home = createLoadable(() => import('./Home'));
// const Login = createLoadable(() => import('./Login'));

// console.log('!!!', Home)
const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={routesUrl.LOGIN} component={Login}/>
            <Route path={routesUrl.HOME} component={Home}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;