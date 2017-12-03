import { render } from 'react-dom';
import React from 'react';
import 'babel-polyfill';
import "../node_modules/materialize-css/dist/js/materialize.js";
import { HashRouter } from 'react-router-dom';

import App from './components/app';

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('app'));