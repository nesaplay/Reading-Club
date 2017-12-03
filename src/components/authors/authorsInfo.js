import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Authors from './authors';
import Author from './author';

export default class AuthorsInfo extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/authors' component={Authors} />
                <Route path='/authors/:number' component={Author} />
            </Switch>
        );
    }
}
