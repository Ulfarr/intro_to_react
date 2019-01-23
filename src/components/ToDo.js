import React, { Component } from 'react';


class ToDo extends Component {
    render() {
        return (
          <li>{ this.props.description }</li>
          <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <span>{ this.props.description }</span>
        </li>  
        );
      }
}
 
export default ToDo;