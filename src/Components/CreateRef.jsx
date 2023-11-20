import React, { Component } from 'react';

class CreateRef extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
    this.focus = React.createRef();
  }

  componentDidMount() {
    this.focus.current.focus();
  }
  handleChange() {
    this.setState({
      name: this.focus.current.value,
    });
  }
  render() {
    return (
      <div>
        <h3>Create Ref</h3>
        <input
          type="text"
          ref={this.focus}
          placeholder="autofocus"
          onChange={() => this.handleChange()}
        />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default CreateRef;
