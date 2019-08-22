import React, { Component } from "react";
import "./App.css";

class App extends Component {

  state = {
    objList: ""
  };

  componentDidMount() {

    var obj = JSON.parse( localStorage.getItem('testObject') ) || {};
    obj['company'] = '';
    obj['email'] = 'leo@lendified.com';
    obj['name'] = 'Leonel API2';
    localStorage.setItem('testObject', JSON.stringify(obj));
    // var testObject ={name:"leonel", time:"Date 2017-02-03T08:38:04.449Z"};
    // localStorage.setItem('testObject', JSON.stringify(testObject));

    var myObj2 = JSON.parse(localStorage.getItem('testObject'));
    if(obj){
      this.setState({objList:myObj2});
    }    
  }
  render() {
    return (
      <div className="App">
        <h1>localStorage Demo</h1>
        <p>{this.state.objList.name}</p>
        <p>{this.state.objList.email}</p>
        <p>{this.state.objList.company}</p>
      </div>
    );
  }
}
export default App;