import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value }, () => console.log(this.state.item));
  }

  handleInput = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.item);
  }

  render() {
    return (
      <div className="center">
        <form action="" onSubmit={this.handleInput}>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

export default Create;