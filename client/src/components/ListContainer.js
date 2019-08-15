import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import NewListForm from './NewListForm';

class ListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
    this.addNewList = this.addNewList.bind(this)
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

  addNewList(title, description){
    axios.post('/api/v1/beats', { beat: {title, description} })
    .then(response => {
      console.log(response)
      const list = [ ...this.state.list, response.data]
      this.setState({list})
    })
  }

  render() {
    return (
      <div className="ListContainer">
        <h1 className="ListContainer-header">Beats</h1>
        <NewListForm onNewList={this.addNewList} />
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
