import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
    }

    initState() {
        return {
            title: '',
            body: ''
        }
    }

    bindEventHandlers() {
        this.collectFormData = this.collectFormData.bind(this);
        this.updateValue = this.updateValue.bind(this);

    }

    collectFormData(e) {
        e.preventDefault();

        const { title, body } = this.state;

        this.props.formData(title, body);
    }

    updateValue({ target }) {
        this.setState({
            [target.id]: target.value
        });
    }

    render() {
        return (
            <div className="row container">
                <form action='' className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                id="title" 
                                type="text" 
                                data-length="15" 
                                onChange={this.updateValue}
                                onPaste={this.updateValue}
                                value={this.state.title} />
                            <label htmlFor="title">TItle</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea 
                                id="body" 
                                className="materialize-textarea" 
                                data-length="120" 
                                onChange={this.updateValue}
                                onPaste={this.updateValue}
                                value={this.state.body}>
                            </textarea>
                            <label htmlFor="body">Post</label>
                        </div>
                    </div>
                   <button onClick={this.collectFormData} className="btn waves-effect waves-light" name="action">Save</button>
                </form>
            </div>


        );
    }
}

export default Form;