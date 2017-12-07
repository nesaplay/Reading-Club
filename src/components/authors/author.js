import React, { Component } from 'react';
import { get } from '../common/get';
import Map from './map';

class Author extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
    }

    initState() {
        return {
            author: {
                username: 'loading',
                website: 'loading',
                email: 'loading',
                phone: 'loading',
                address: {
                    city: 'loading...',
                    street: 'loading...',
                    suite: 'loading...',
                    zipcode: 'loading...',
                    geo: {
                        lat: '',
                        lng: ''
                    }
                },
                company: {
                    bs: 'loading...',
                    catchPhrase: 'loading...',
                    name: 'loading...'
                }
            }
        }
    }

    bindEventHandlers() {
        this.updateState = this.updateState.bind(this);
    }

    updateState(author) {
        this.setState({
            author
        })
    }

    componentDidMount() {
        get.makeRequest(this.updateState, `users/${this.props.match.params.number}`)
    }

    render() {
        const { author } = this.state;

        return (
            <main className='container'>
                <p onClick={this.props.history.goBack} className='back btn-flat'> ↩ Back </p>
                <section className='row'>
                    <div className='col s6'>
                        <img src='http://via.placeholder.com/150x150' alt='' className='profile-image responsive-img' />
                    </div>
                    <div className='col s6'>
                        <div className=''>
                            <h4 className='author-name'><span className='teal-text'>{author.name}</span></h4>
                            <ul>
                                <li>username: <span className='teal-text'> {author.username} </span></li>
                                <li>email: <span className='teal-text'> {author.email} </span></li>
                                <li>phone: <span className='teal-text'> {author.phone} </span></li>
                            </ul>

                        </div>
                    </div>
                </section>
                <div className='divider'></div>
                <section className='row'>
                    <div className='col s6'>
                        <h4 className='teal-text'> Address </h4>
                        <ul>
                            <li>street: <span className='teal-text'> {author.address.street} </span></li>
                            <li>city: <span className='teal-text'> {author.address.city} </span></li>
                            <li>zipcode: <span className='teal-text'> {author.address.zipcode} </span></li>
                        </ul>
                    </div>
                    <div className='col s6 map'>
                        <Map geo={author.address.geo} />
                    </div>
                </section>
                <div className='divider'></div>
                <section className='row'>
                    <div className='col s12'>
                        <h4 className='teal-text'>Company</h4>
                        <ul>
                            <li>name: <span className='teal-text'> {author.company.name} </span></li>
                            <li>suite: <span className='teal-text'> {author.address.suite} </span></li>
                            <li>catchPhrase: <span className='teal-text'> {author.company.catchPhrase} </span></li>
                        </ul>
                    </div>
                    <div className='divider'> </div>
                </section>
            </main>
        );
    }
}

export default Author;