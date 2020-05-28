// ./src/js/app.js

 import React from 'react';
 import ReactDOM from 'react-dom';
 import { BrowserRouter as Router } from 'react-router-dom';
 import '../css/app.css';
 import Home from './components/Home';

 // Set jQuery
var $ = require('jquery');

// Popper included in .bundle.js
require('bootstrap/dist/js/bootstrap.bundle.js');

// SCSS style
require('../css/app.scss');

 ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));
