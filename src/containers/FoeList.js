import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFoe } from '../actions/index';
import { bindActionCreators } from 'redux'

class FoeList extends Component {
  foeList() {
    return this.props.foes.map(foe => {
      return (
        <li
          key={foe.name}
          onClick={() => this.props.selectFoe(foe)}
          className="list-group-item">{foe.name}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.foeList()}
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return {
    //foes came from /src/reducers/index.js
    foes: state.foes
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFoe: selectFoe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FoeList);