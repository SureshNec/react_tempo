import React, { Component } from 'react';
const higherOrderComp = (OriComp, value) => {
  class UpdatedComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleCount = () => {
      this.setState(prevState => ({ count: prevState.count + value }));
    };
    render() {
      return (
        <OriComp
          count={this.state.count}
          handleCount={this.handleCount}
          {...this.props}
        />
      );
    }
  }
  return UpdatedComp;
};
export default higherOrderComp;
