import React from 'react';
import ReactDOM from 'react-dom';

import { getPlayer } from '../api/index';

console.log('test');

getPlayer('donut').then(data => console.dir(data));

ReactDOM.render(
  <p>Hello, world!</p>,
  document.getElementById('app')
)
