import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

//const test = React.createElement('h1', {}, 'hello world');


// const currentDate = ()=>{
//     var date = new Date();
//     return date.toDateString();
// }
// const test = <h1> CURRENT DATE IS !! : {currentDate()}</h1>

ReactDOM.render(<App /> , document.getElementById('root'));
registerServiceWorker();
