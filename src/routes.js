import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MyDog from './pages/MyDogs';

export default function Router() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/mydogs' component={MyDog} />
        </Switch>
    );
}
