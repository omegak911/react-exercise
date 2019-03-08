import React from 'react';

const ListItem = (props) =>
  <div className="item">
    <div>
      <span>Name: {props.item.name}<br></br>{props.index}</span>
      <div>Likes: {props.item.likes}</div>
    </div>
    <div>
      <button type="button" onClick={() => props.deleteItem(props.index)}>remove</button>
      <button type="button" onClick={() => props.updateItem(props.index)}>like</button>
    </div>
  </div>

export default ListItem;