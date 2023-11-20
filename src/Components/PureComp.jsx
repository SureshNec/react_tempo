import { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    console.log('Rendering');
    return (
      <div>
        <h3>Pure Component</h3>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default PureComp;
