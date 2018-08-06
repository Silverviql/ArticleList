import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Hello from './components/Hello';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
        <Hello name={"Polya"} action={"Eat"} />
    </div>,
    document.getElementById('content')
    );


registerServiceWorker();
