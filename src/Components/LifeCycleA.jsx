import { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Suresh',
    };

    console.log('LifecycleA Constructor');
  }
  static getDerivedStateFromProps(state, props) {
    console.log('LifeCycleA getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate() {
    console.log('LifeCycleA shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log('LifeCycleA getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('LifeCycleA componentDidUpdate');
  }
  componentDidMount() {
    console.log('LifeCycleA componentDidMount');
  }
  handleChange() {
    this.setState({
      name: 'Amala Bea',
    });
  }
  render() {
    console.log('LifeCycleA Render');
    return (
      <div>
        <h3>LifeCycleA</h3>
        <button onClick={() => this.handleChange()}>Change</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
