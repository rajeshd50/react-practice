import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
   constructor() {
      super();
      
      this.state = {
         data: []
      }
   
      this.setStateHandler = this.setStateHandler.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray})
   };

   forceUpdateHandler() {
      this.forceUpdate();
   }

   findDomNodeHandler() {
      var colorArr = ['green','red','blue','black','yellow'];
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = colorArr[Math.floor(Math.random()*colorArr.length)];
   }

   render() {
      let myUl = {
         "listStyle": "none"
      };
      let myLi = {
         "background": "#AAA",
         "margin": "5px 0"
      };
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <button onClick = {this.forceUpdateHandler}>Force Update</button>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id="myDiv">{Math.random()}</div>
            <ul style={myUl}>
               {this.state.data.map((obj,i)=> <li style={myLi} key={i}>{obj}</li>)}
            </ul>
         </div>
      );
   }
}

export default App;