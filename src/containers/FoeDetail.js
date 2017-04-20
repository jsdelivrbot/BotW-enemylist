import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoeDetail extends Component {
  render() {
    if (!this.props.foe) {
      return <div>Select a foe to get started.</div>
    }

    return (
      <div>
        <h3>Details for: {this.props.foe.name}</h3>
        <div>Name: {this.props.foe.name}</div>
        <div>Weapon: {this.props.foe.weapon}</div>
        <div>Drop: {this.props.foe.drop}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foe: state.activeFoe
  };
}

export default connect(mapStateToProps)(FoeDetail);