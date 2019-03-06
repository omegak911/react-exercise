import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  handleInput = (e) => {
    this.setState({ item: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem({ name: this.state.item, likes: 0 });
    this.setState({ item: '' });
  }

  render() {
    return (
      <div className="center">
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} value={this.state.item}/>
          <button type="submit">add</button>
        </form>
      </div> 
    )
  }
}

export default Create;