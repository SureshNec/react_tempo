import { Component } from 'react';
import ChildComp from './ChildComp';

class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Shanny',
    };
    this.handleChild = this.handleChild.bind(this);
  }
  handleChild(value) {
    this.setState({
      name: 'Joker' + value,
    });
  }

  render() {
    return (
      <div>
        <h3>This is Parent {this.state.name}</h3>
        <button onClick={() => this.handleChild()}>test</button>
        <ChildComp func={this.handleChild} />
      </div>
    );
  }
}

export default ParentComp;
