import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

class ListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    // TODO: pass in url as props
    axios.get('api/v1/beats.json')
      .then(response => {
        console.log("😎" + response.data);
        this.setState({
          list: response.data
        })
      })
      .catch(error => console.log("😭" + error))
  }

  render() {
    return (
      <div className="ListContainer">
        <h1 className="ListContainer-header">Beats</h1>
        <ul className="List">
          {this.state.list.map(listItem => {
            return (
              <ListItem
                key={listItem.id}
                listItem={listItem}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ListContainer;
