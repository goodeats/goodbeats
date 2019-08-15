import React from 'react';

const ListItem = ({ listItem }) =>
  <li className="list-item" key={listItem.id}>
    <h4>{listItem.title}</h4>
    <p>{listItem.description}</p>
  </li>

export default ListItem;
