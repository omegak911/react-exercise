import React from 'react';
import ListItem from './ListItem';

const List = (props) =>
  <div className="center vertical" id="list">
    {props.items.map((item, i) =>
      <ListItem item={item} key={i} number={i} deleteItem={props.deleteItem} updateItem={props.updateItem}/>
    )}
  </div>

export default List;