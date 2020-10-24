import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Pictures from './pages/Pictures';
import Members from './pages/Members';
import Contribute from './pages/Contribute';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/pictures" component={Pictures} />
                <Route path="/members" component={Members} />
                <Route path="/contribute" component={Contribute} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
