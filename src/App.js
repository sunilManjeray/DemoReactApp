import React, { Component } from 'react';
import './App.css';
//import SubComponent from './SubComponent';
import _ from 'lodash';
import FunctionalSubComponent from './FunctionalSubComponent';
class App extends Component {
 constructor(){
   super();
   this.state = {
     data :[
      {
        "petName": "Buffy",
        "ownerName": "Hassum Harrod",
        "aptDate": "2016-06-20 15:30",
        "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
      },
      {
        "petName": "Spot",
        "ownerName": "Constance Smith",
        "aptDate": "2016-06-24 08:30",
        "aptNotes": "This German Shepherd is having some back pain"
      },
      {
        "petName": "Goldie",
        "ownerName": "Barot Bellingham",
        "aptDate": "2016-06-22 15:50",
        "aptNotes": "This Goldfish has some weird spots in the belly"
      },
      {
        "petName": "Mitten",
        "ownerName": "Hillary Goldwyn",
        "aptDate": "2016-06-21 9:15",
        "aptNotes": "Cat has excessive hairballs"
      }
    ]
    
   }// checks for current state
  this.deleteMessage= this.deleteMessage.bind(this);
 }
 deleteMessage(item){
   var allData = this.state.data;
   var newData = _.without(allData,item);
  this.setState({
    data : newData
  });
 }
  render() {
    let filteredApts = this.state.data;//variable declared to get data
    filteredApts = filteredApts.map(function(item,index){ //map function to load data and return sub component
      return(
      <FunctionalSubComponent key = { index } itemName = { item } whichItem = { item } onDelete = {this.deleteMessage} />
      )
    }.bind(this));//filteredApts.map function

    // let title = "engineer";
    // if(this.state.show){
    //   title = "architect"
    // }
    // var displayProperty = {
    //   color : this.state.show ? 'red' : 'blue'
    // }
    return (
      
      <div className="App">
        
         {/* <h1 style={displayProperty}>{title} {this.state.title} </h1> */}
         <div className="item-list media-list">
           <ul className="item-list media-list" >
            {filteredApts}
              </ul>

          
      </div>
  
      </div>
    );
  }
}



export default App;
