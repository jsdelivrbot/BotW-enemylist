import React, { Component } from 'react';

import FoeList from '../containers/FoeList';
import FoeDetail from '../containers/FoeDetail';

export default class App extends Component {
  render() {
    return (
      <div>
       <FoeList />
       <FoeDetail />
      </div>
    );
  }
}
