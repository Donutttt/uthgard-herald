import React from 'react';
import ReactDOM from 'react-dom';

import { getPlayer, getGuild } from '../api/index';

getPlayer('donut').then(data => console.dir(data));
getGuild('inc').then(data => console.dir(data));

ReactDOM.render(
  <p>Hello, world!</p>,
  document.getElementById('app')
)
