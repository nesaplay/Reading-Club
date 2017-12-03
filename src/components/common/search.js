import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
    }

    initState() {
        return {
            inputValue: '',
            buttonClass: '',
        }
    }

    bindEventHandlers() {

        this.valueHandler = this.valueHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    valueHandler({ target }) {
        this.setState({
            inputValue: target.value
        })

        if (this.props.instant) {
            this.buttonHandler();
        }
    }

    buttonHandler() {
        let param = this.state.inputValue;
        this.props.searchRequest(param);
    }

    switcher() {
        let switchState = document.getElementById('switch').checked;
        this.props.switchRequest(switchState);
        switchState
            ? this.setState({ buttonClass: 'scale-out' })
            : this.setState({ buttonClass: '' })
    }

    // Interface that enables you to go from instant search to search per button click

    displaySwitch() {
        return (
            <div className='col s3 input-field switch'>
                <label htmlFor='switch'>
                    Off
                <input id='switch' onChange={() => this.switcher()} type='checkbox' />
                    <span className='lever'></span>
                    On
                </label>
            </div>
        )
    }

    displayButton() {
        return (
            <div className='col s3 input-field'>
                <button
                    id='button'
                    className={`waves-effect waves-light btn teal scale-transition  ${this.state.buttonClass}`}
                    onClick={this.buttonHandler}>
                Search now
                </button>
            </div>
        )
    }

    render() {
        return (
            <div className='row'>
                <div className='input-field col s6'>
                    <input
                        id='search'
                        type="text"
                        className='validate teal-text'
                        value={this.state.inputValue}
                        onChange={this.valueHandler}
                        onKeyUp={this.valueHandler}
                        onPaste={this.valueHandler}
                    />
                    <label htmlFor='search'>Filter...</label>
                </div>
            </div>
        );
    }
}

export default Search;