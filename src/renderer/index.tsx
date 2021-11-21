import ReactDOM from 'react-dom';

import { App } from './App';

import { receiveEvent } from './utils';

receiveEvent('log', (data) => console.log(data));

ReactDOM.render(<App />, document.getElementById('root'));
