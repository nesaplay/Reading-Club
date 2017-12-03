import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import About from '../about/about';
import AuthorsInfo from '../authors/authorsInfo';
import PostsInfo from '../posts/postsInfo';
import Compose from '../posts/newPost';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/posts' /> 
                <Route path='/posts' component={PostsInfo} />               
                <Route path='/authors' component={AuthorsInfo} />
                <Route path='/about' component={About} />
                <Route path='/compose' component={Compose} />
            </Switch>
        );
    }
}

export default Main;