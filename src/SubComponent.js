import React, { Component } from 'react';

class  SubComponent extends Component {
  constructor(){
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.onDelete(this.props.whichItem)
  }
  render(){
    return(
        <li className="media-body">
          <div><button onClick = {this.handleDelete}>Delete</button></div>
        <div>
        <span>{this.props.itemName.petName} </span>
        <span>{this.props.itemName.aptDate}</span>
        </div>
        <div>
        <span>Owner name : {this.props.itemName.ownerName}</span>
        </div>
        <div>
        <span>App notes : {this.props.itemName.aptNotes}</span>
        </div>

        </li>

    )
  }
};
  


export default SubComponent;