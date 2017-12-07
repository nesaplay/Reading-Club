import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Header extends Component {
    
    componentDidMount() {
        var elem = document.querySelector('.sidenav');
        new M.Sidenav(elem, { edge: 'right' });
    }

    render() {
        return (
            <header className='container logo-config'>
                <nav className='z-depth-0 transparent'>
                    <div className='nav-wrapper'>
                        <Link to='/' href="#" className="brand-logo teal-text left">
                            <span className="btn btn-floating btn-large pulse">
                                <i className="material-icons">library_books</i>
                            </span>
                            <span className='title'>Reading club</span>
                        </Link>
                        <a href="" data-target="mobile" className='sidenav-trigger button-collapse right'><i className="material-icons teal-text">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li className='waves-effect waves-teal'><Link className='teal-text' to='/'>Home</Link></li>
                            <li className='waves-effect waves-teal'><Link className='teal-text' to='/authors'>Authors</Link></li>
                            <li className='waves-effect waves-teal'><Link className='teal-text' to='/about'>About</Link></li>
                            <li className='waves-effect waves-teal'><Link className='teal-text' to='/compose'>Compose</Link></li>
                        </ul>
                        <ul id="mobile" className="sidenav">
                            <li className='waves-teal sidenav-close'><Link className='teal-text' to='/'>Home</Link></li>
                            <li className='waves-teal sidenav-close'><Link className='teal-text' to='/authors'>Authors</Link></li>
                            <li className='waves-teal sidenav-close'><Link className='teal-text' to='/about'>About</Link></li>
                            <li className=' waves-teal sidenav-close'><Link className='teal-text' to='/compose'>Compose</Link></li>
                        </ul>
                        <ul className='sidenav'></ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;