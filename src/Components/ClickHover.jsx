import { Component } from 'react';
import higherOrderComp from './higherOrderComp';

class ClickHover extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.handleCount}>
          {this.props.name} Hovered {this.props.count} times
        </button>
      </div>
    );
  }
}

export default higherOrderComp(ClickHover, 3);
