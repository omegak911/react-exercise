import React, { Component } from 'react';
import List from './List';
import Create from './Create';
import ListItem from './ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      mostLiked: { likes: 0 }
    }
  }

  addItem = (item) => {
    this.setState({ items: [...this.state.items, item]});
  }

  deleteItem = (index) => {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }

  updateItem = (index) => {
    let items = [...this.state.items];
    let { mostLiked } = this.state;
    let itemToUpdate = items[index];
    
    itemToUpdate.likes += 1;
    mostLiked = mostLiked.likes >= itemToUpdate.likes ? mostLiked : itemToUpdate;
    
    this.setState({ items, mostLiked }, () => console.log(items));
  }

  render() {
    let { mostLiked } = this.state;
    return (
      <div id="mainApp" className="center vertical">
        {mostLiked.likes > 0 && <div id="mostLiked"><div>Most Liked:</div><ListItem number={'hey'} item={mostLiked}/></div>}
        <Create addItem={this.addItem}/>
        <List items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
      </div>
    )
  }
}

export default App;