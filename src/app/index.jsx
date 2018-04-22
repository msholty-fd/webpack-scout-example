import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';

const reactRoot = document.getElementById('root');
ReactDOM.render(<HelloWorld />, reactRoot);