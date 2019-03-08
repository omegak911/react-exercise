import React, { Component } from 'react';
import List from './List';
import Create from './Create';
import ListItem from './ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: 'Fred', likes: 0},
        {name: 'Harrison', likes: 0}
      ],
      mostLiked: { likes: 0 }
    }

  }

  addItem = (item) => {
    var newArr = this.state.items.slice();
    newArr.push({name: item, likes: 0});
    this.setState({items: newArr});
  }

  deleteItem = (index) => {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }

  //accepts and index, will increase like count for that item and also determine who has the most likes
  updateItem = (index) => {  
    let items = [...this.state.items];
    let { mostLiked } = this.state;
    let itemToUpdate = items[index];
    
    itemToUpdate.likes += 1;
    mostLiked = mostLiked.likes >= itemToUpdate.likes ? mostLiked : itemToUpdate;
    
    this.setState({ items, mostLiked });
  }

  render() {
    let { mostLiked } = this.state;
    return (
      <div id="mainApp" className="center vertical">
        {mostLiked.likes > 0 && <div id="mostLiked"><div>Most Liked:</div><ListItem index={'hey'} item={mostLiked}/></div>}
        <Create addItem={this.addItem}/>
        <List name={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
      </div>
      )
  }
}

export default App;