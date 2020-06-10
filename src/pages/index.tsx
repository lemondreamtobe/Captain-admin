import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createLoadable from '../helpers/loadable';
// import Home from './Home';
// import Login from './Login';
const Login = createLoadable(() => import('./Login'));
const Home = createLoadable(() => import('./Home'));

console.log('!!!', Home)
const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;