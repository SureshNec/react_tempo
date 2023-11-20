import { Component } from 'react';

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Suresh',
    };

    console.log('LifecycleB Constructor');
  }
  static getDerivedStateFromProps(state, props) {
    console.log('LifeCycleB getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate() {
    console.log('LifeCycleB shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log('LifeCycleB getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('LifeCycleB componentDidUpdate');
  }
  componentDidMount() {
    console.log('LifeCycleB componentDidMount');
  }
  render() {
    console.log('LifeCycleB Render');
    return (
      <div>
        <h3>LifeCycleB</h3>
      </div>
    );
  }
}

export default LifeCycleB;
