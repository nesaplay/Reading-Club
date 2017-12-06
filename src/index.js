import { render } from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import './css/main.css';
import "materialize-css";
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('app'));

registerServiceWorker();