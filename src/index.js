import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'

Bugsnag.start({
  apiKey: '85ebec6b5603348f8d8a6a2b1d2d2213',
  plugins: [new BugsnagPluginReact()]
})


const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)
  
ReactDOM.render(
  <ErrorBoundary>
  <Router>
    <App />
  </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
