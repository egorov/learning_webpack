import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('container');
const app = React.createElement(App);
ReactDOM.render(app, root);