import React, { Component } from 'react';
import { BASE_URL, LOCAL_STORAGE_KEY } from '../common/constants';

import Form from './form';

class Compose extends Component {
    constructor(props) {
        super(props);

        this.collectedInfo = this.collectedInfo.bind(this);
    }

    savePost(post) {
        // iniciramo prazan niz unutar localStorage
        if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
        }
        // vadimo niz i parsiramo ga
        let array = localStorage.getItem(LOCAL_STORAGE_KEY);
        let parseArray = JSON.parse(array);

        // indeksiranje novih postova
        if (parseArray.length > 0) {
            post.id = Number(parseArray[parseArray.length - 1].id) + 1;
        }

        // dodajemo post i vracamo ga u storage
        parseArray.unshift(post);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parseArray))
    }

    collectedInfo(title, body) {

        const post = {
            title: title,
            body: body,
            userId: 6
        }

        const config = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }

        fetch(`${BASE_URL}posts`, config)
            .then(response => response.json())
            .then(post => {
                return new Promise((resolve, reject) => {
                    this.savePost(post);
                    resolve()
                }) 
            })
            .then(() => this.props.history.push('/'))
            .catch((error) => new Error(error));
    }

    render() {
        return (
            <main className='container'>
                <h1 className='teal-text'> Create New Brog </h1>
                <Form formData={this.collectedInfo} />
            </main>
        );
    }
}

export default Compose;


