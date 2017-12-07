import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, LOCAL_STORAGE_KEY } from '../common/constants';

import { get } from '../common/get';

class SinglePost extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
    }

    initState() {
        return {
            link: '',
            post: {
                title: 'loading...',
                body: 'loading...',
                id: 0
            },
            author: {
                name: 'loading...'
            },
            total: [
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
                { title: 'loading...' },
            ]
        }
    }

    bindEventHandlers() {
        this.fillStateWithPost = this.fillStateWithPost.bind(this);
        this.fillStateWithAuthor = this.fillStateWithAuthor.bind(this);
        this.fillStateWithAuthorPosts = this.fillStateWithAuthorPosts.bind(this);
        this.custom404request = this.custom404request.bind(this);
    }

    custom404request(handler) {
        fetch(`${BASE_URL}posts/${this.props.match.params.number}`)
            .then(response => {
                if (response.status !== 404) {
                    return {};
                }
                let storagePosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

                let filteredPosts = storagePosts.filter(post => 
                     parseInt(post.id, 10) === parseInt(this.props.match.params.number, 10)
                )
                return filteredPosts.length ? filteredPosts[0] : {};
            })
            .then(data => handler(data))
    }


    fetchData() {
        if (this.props.match.params.number > 100) {
            this.custom404request(this.fillStateWithPost);
            return;
        }
        get.makeRequest(this.fillStateWithPost, `posts/${this.props.match.params.number}`);

    }

    fillStateWithPost(data) {
        if (!data.hasOwnProperty('title')) {
            return;
        }

        this.setState({
            post: data
        });

        get.makeRequest(this.fillStateWithAuthor, `users/${this.state.post.userId}`);
    }

    fillStateWithAuthorPosts(data) {
        this.setState({
            total: data
        })
    }

    fillStateWithAuthor(data) {
        this.setState({
            author: data
        })
        get.makeRequest(this.fillStateWithAuthorPosts, `posts?userId=${this.state.post.userId}`)
    }

    componentWillReceiveProps(nextProps) {
        if (Number(nextProps.match.params.number) !== Number(this.props.match.params.number)) {
            get.makeRequest(this.fillStateWithPost, `posts/${nextProps.match.params.number}`);
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const { post, author, total } = this.state;

        return (
            <main className='container'>
                <Link to='/'> <p className='back btn-flat'> ↩ Back </p></Link>

                <section className='center-align'>
                    <h3 className='teal-text'> {post.title} </h3>
                    <Link to={`/authors/${post.userId}`}> <h5>{author.name}</h5> </Link>
                    <br />

                    <p className='flow-text'> {post.body} </p>
                    <div className='divider'> </div>
                </section>

                <section>
                    <h5> 3 more posts from the same author:</h5>

                    <ul>
                        {total.slice(-3).map((e, i) => {
                            return <li key={i}> <Link to={`${e.id}`} > {e.title} </Link> </li>
                        })}
                    </ul>
                </section>
            </main>
        );
    }
}

export default SinglePost;
