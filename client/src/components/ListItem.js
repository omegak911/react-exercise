import React from 'react';

const ListItem = (props) =>
  <div className="item">
    <div>
      <span>{`${props.number}: ${props.item.name}`}</span>
      <div>Likes: {props.item.likes}</div>
    </div>
    <div>
      <button type="button" onClick={() => props.deleteItem(props.number)}>remove</button>
      <button type="button" onClick={() => props.updateItem(props.number)}>like</button>
    </div>
  </div>

export default ListItem;