import React from 'react';
import Route from 'react-router-dom/Route';

import IndexView from './views/Index.jsx';

import api from '../api/index.js';

export default props => {
  return (
    <div>
      <Route exact path="/" render={() => <IndexView api={api} />} />
    </div>
  )
};
