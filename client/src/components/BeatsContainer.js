import React, { Component } from 'react';
import axios from 'axios';
import BeatListItem from './BeatListItem';

class BeatsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      beats: []
    }
  }

  componentDidMount(){
    axios.get('api/v1/beats.json')
      .then(response => {
        console.log("😎" + response.data);
        this.setState({
          beats: response.data
        })
      })
      .catch(error => console.log("😭" + error) + "😭")
  }

  render() {
    return (
      <div className="Beats-container">
        <p>Beats</p>
        <ul className="Beats-list">
          {this.state.beats.map(beat => {
            return (
              <BeatListItem
                key={beat.id}
                beat={beat}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BeatsContainer;
