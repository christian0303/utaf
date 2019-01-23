import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './routes';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<MainRouter />, document.getElementById('root'));
serviceWorker.unregister();
