import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { get } from '../common/get';
import Search from '../common/search';
import Home from '../posts/home';

class Authors extends Component {
    constructor(props) {
        super(props);

        this.bindEventHandlers();
        this.initInstances();
        this.state = this.initState();
    }

    initState() {
        return {
            authors: [{
                name: []
            }],
            instant: true,
            query: ''
        }
    }

    bindEventHandlers() {
        this.updateState = this.updateState.bind(this);
    }

    initInstances() {
        this.home = new Home();
    }

    updateState(authorsData) {
        const authors = authorsData.map(({ id, name }) => {
            return { id: id, name: name }
        })

        this.setState({
            authors
        })
    }

    componentDidMount() {
        get.makeRequest(this.updateState, 'users');
    }

    render() {

        const { authors, instant, query } = this.state;

        return (
            <main className='container'>

                <p onClick={this.props.history.goBack} className='back btn-flat'> ↩ Back </p>

                <h2 className='teal-text' > Authors ({authors.length}) </h2>
                <Search
                    switchRequest={this.home.updateInstant.bind(this)}
                    searchRequest={this.home.updateQuery.bind(this)}
                    instant={instant}
                />
                <ul>
                    {this.home.filterItems(query, authors, 'name').map(({ name, id }) => {
                        return <li key={id}>
                            <Link to={`${this.props.match.url}/${id}`}>
                                {name}
                                <div className='divider'> </div>
                            </Link>
                        </li>
                    })}
                </ul>
            </main>
        );
    }
}

export default Authors;