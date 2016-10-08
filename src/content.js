import React, {Component} from 'react';
import {connect} from 'react-redux';
const addNotification = {
  type: 'ADD_NOTIFICATION'
};
const changeName = newName => {
  return {
    type: 'CHANGE_NAME',
    name: newName
  }
};
class Content extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  submit(e){
    e.preventDefault();
    this.props.dispatch(changeName(this.state.name))
  }
  saveName(e){
    this.setState({name: e.target.value})
  }
  render(){
    return (<div>
        <span>My name is {this.props.name} and I have {this.props.notifications}</span>
        <button style={{display: 'block'}} onClick={() => this.props.dispatch(addNotification)}>Add notification!</button>
        <form onSubmit={this.submit.bind(this)}>
          <label>Enter your name!</label>
          <input onChange={this.saveName.bind(this)}/>
          <button type='submit'>Submit</button>
        </form>
      </div>);
  }
}

export default connect(i=>i)(Content);
