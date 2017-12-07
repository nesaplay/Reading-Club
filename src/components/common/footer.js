import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'loading...'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date().toDateString()
            })
        }, 1000);
    }

    render() {
        return (
            <footer className='page-footer teal'>
                <div className='container'>
                    <div className='footer-copyright teal'>
                        © 2017 Copyright
                        <a className='grey-text text-lighten-4 right' href='http://radovanovic.me' target='_blank'>Nenad Radovanovic</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;