import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home';
import SinglePost from './singlePost';

class PostsInfo extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/posts' component={Home} />
                <Route path='/posts/:number' component={SinglePost}/>
            </Switch>
        );
    }
}

export default PostsInfo;