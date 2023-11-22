import { Component } from 'react';
import higherOrderComp from './higherOrderComp';

class ClickCount extends Component {
  render() {
    return (
      <div>
        <h3>Higer Order Component</h3>
        <button onClick={this.props.handleCount}>
          {this.props.name} Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default higherOrderComp(ClickCount, 5);
