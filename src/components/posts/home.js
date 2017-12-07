import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from '../common/constants';

import { get } from '../common/get';
import Post from './post';
import Search from '../common/search';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
    }

    initState() {
        return {
            posts: [],
            newPosts: [],
            query: '',
            instant: true
        }
    }

    bindEventHandlers() {
        this.fillStateWithData = this.fillStateWithData.bind(this);
        this.filterItems = this.filterItems.bind(this);
    }

    fillStateWithData(posts) {

        if (localStorage.getItem(LOCAL_STORAGE_KEY)) {

            let localPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
            let newPosts = JSON.parse(localPosts);

            this.setState({
                newPosts
            });
        }

        this.setState({
            posts: posts.slice(0, 100)
        });
    }


    componentDidMount() {
        get.makeRequest(this.fillStateWithData, 'posts');
    }

    updateQuery(param) {
        this.setState({
            query: param
        })
    }

    updateInstant(param) {
        this.setState({
            instant: param
        })
    }

    filterItems(query, array, param) {
        return array.filter(elem => {
            return elem[param].includes(query);
        });
    }

    render() {

        return (
            <main className='container margina'>
                <div className='main-title'>
                    <h2 className='teal-text' > Posts </h2>
                    <Search
                        switchRequest={this.updateInstant.bind(this)}
                        searchRequest={this.updateQuery.bind(this)}
                        instant={this.state.instant}
                    />
                </div>
                {
                    this.filterItems(this.state.query, [...this.state.newPosts, ...this.state.posts], 'title').map(post =>
                        <Link to={`/posts/${post.id}`} key={post.id}>
                            <Post post={post} />
                        </Link>
                    )
                }
            </main>
        )
    }
}

export default Home;