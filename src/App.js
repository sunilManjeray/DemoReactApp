import React, { Component } from 'react';
import './App.css';
//import SubComponent from '../SubComponent';
import _ from 'lodash';
import AddAppointment from "../src/components/adddata"
import FunctionalSubComponent from '../src/components/mainscreen';
import SearchData from '../src/components/searchdata';
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
    ],
    formVisibility : false,
    orderBy : "petName",
    orderDirec : "asc",
    queryText : ""
    
   
    
   }// checks for current state
  this.deleteMessage= this.deleteMessage.bind(this);
  this.addItem= this.addItem.bind(this);
  this.AddToggleDisplay = this.AddToggleDisplay.bind(this);
  this.searchApp = this.searchApp.bind(this);
 }
 AddToggleDisplay(){
   var tempFormVisibility = !this.state.formVisibility;
   this.setState({
     formVisibility : tempFormVisibility
   })
 }
 addItem(tempItem){
   var tempApt = this.state.data;
   tempApt.push(tempItem);
   this.setState({
     data : tempApt
   })
 }
 deleteMessage(item){
   var allData = this.state.data;
   var newData = _.without(allData,item);
  this.setState({
    data : newData
  });
 }
 searchApp(query){
  this.setState({
  queryText : query
  });
 }
  render() {
    let filteredApts = [];//variable declared to get data
    let orderBy = this.state.orderBy;
    let orderDirec = this.state.orderDirec;
    let queryText = this.state.queryText;
    let appointments = this.state.data;
    appointments.forEach(function(item){
      if ((item.petName.toLowerCase().indexOf(queryText) !== -1) || 
      (item.aptDate.toLowerCase().indexOf(queryText) !== -1) ||
      (item.aptNotes.toLowerCase().indexOf(queryText) !== -1) ||
      (item.ownerName.toLowerCase().indexOf(queryText) !== -1) )
      {
        filteredApts.push(item);
      }


    });
    filteredApts = _.orderBy(filteredApts,function(item){
      return item[orderBy].toLowerCase();
    },orderDirec);//orderBy
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
         <AddAppointment 
          bodyVisible = { this.state.formVisibility }
          handleToggle = { this.AddToggleDisplay }
          addApt = { this.addItem }/>
         <SearchData 
         orderBy = {this.state.orderBy}
         orderDirec = {this.state.orderDirec}
         onSearch = { this.searchApp }/>
          <ul >
            {filteredApts}
          </ul>
  
      </div>
    );
  }
}



export default App;
