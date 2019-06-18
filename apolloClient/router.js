import React from 'react';
import { Route, IndexRoute} from 'react-router';
import RootComponent from './components/root';
import Donation from './components/Donation/Donation';
import Home from './components/Home/Home';

export default(
    <Route path="/" component={RootComponent}>
       <IndexRoute component={Home}/>
       <Route path="donation" component={Donation}/>
    </Route>
);