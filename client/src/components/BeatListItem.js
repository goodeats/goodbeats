import React from 'react';

const BeatListItem = ({ beat }) =>
  <li className="Beats-list-item" key={beat.id}>
    <h4>{beat.title}</h4>
    <p>{beat.description}</p>
  </li>

export default BeatListItem;
