import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Root from './components/Root';
import store from './store';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<div><Root name={"Polya"} action={"Eat"} /></div>, document.getElementById('content'));

registerServiceWorker();
