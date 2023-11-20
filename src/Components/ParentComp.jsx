import { Component } from 'react';
import ChildComp from './ChildComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

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
        <PureComp value={this.state.name} />
        <MemoComp value={this.state.name} />
        <button onClick={() => this.setState({ name: 'Shanny' })}>
          Re render
        </button>
      </div>
    );
  }
}

export default ParentComp;
