import { Component } from 'react';
import UncontrolledComp from './UnControlledComp';

class ControlComp extends Component {
  constructor() {
    super();
    this.state = {
      change: '',
      select: 'React',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      change: event.target.value,
    });
  }
  handleSelect(event) {
    this.setState({
      select: event.target.value,
    });
  }
  handleSubmit() {
    alert(`${this.state.change} ${this.state.select}`);
  }
  render() {
    const { change, select } = this.state;
    return (
      <div>
        <h3>Controlled Component</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={change} />
          <label>Topic</label>
          <select value={select} onChange={this.handleSelect}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <input type="reset" />
          <button type="submit">Submit</button>
        </form>
        <p>
          {change}
          {select}
        </p>
        <h3>Uncontrolled Component</h3>
        <UncontrolledComp />
      </div>
    );
  }
}

export default ControlComp;
