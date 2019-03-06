import React from 'react';

const ListItem = (props) =>
  <div className="item">
    <div>
      <span>DISPLAY INDEX LOCATION AND ITEM NAME</span>
      <div>DISPLAY NUMBER OF LIKES</div>
    </div>
    <div>
      <button type="button">remove</button>
      <button type="button">like</button>
    </div>
  </div>

export default ListItem;