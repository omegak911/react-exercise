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

  /*TODO

  add item: which creates a new item in the state items array
    - format needs to be { name: name, likes: 0}

  delete item: removes one of the clicked items from the array
  */

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
        {mostLiked.likes > 0 && <div id="mostLiked"><div>Most Liked:</div><ListItem number={'hey'} item={mostLiked}/></div>}
        <div>SHOULD DISPLAY CREATE</div>
        <div>SHOULD DISPLAY LIST</div>
      </div>
      )
  }
}
