import { Component } from 'react';

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hi',
      count: 0,
    };
  }

  handleMessage() {
    this.setState({
      message: 'Beauty is',
    });
  }

  handleCount(value) {
    this.setState(prevState => ({
      count: prevState.count + value,
    }));
  }

  render() {
    return (
      <div>
        <h1 style={{ color: 'skyblue' }}>
          {this.state.message}
          <span style={{ color: 'pink' }}> {this.props.name}</span>
        </h1>
        <button onClick={() => this.handleMessage()}>Message</button>
        <button onClick={() => this.setState({ message: 'Hi' })}>Reset</button>
        <br />
        <h2>{this.state.count}</h2>
        <button onClick={() => this.handleCount(+1)}>Increase</button>
        <button onClick={() => this.handleCount(-1)}>Decrease</button>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}

export default ClassComp;
