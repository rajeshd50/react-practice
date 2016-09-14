/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header data={this.props.header} />
            <Content data={this.props.content} funClick={this.props.testFun}/>
         </div>
      );
   }
}

App.propTypes = {
   "header": React.PropTypes.string,
   "content": React.PropTypes.string,
   "testFun": React.PropTypes.func,
   "testBool": React.PropTypes.bool.isRequired
}

App.defaultProps = {
   "header": "This is header",
   "content": "This is content",
   "testFun": function(){console.log('From fun!!')},
   "testBool": false
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.data}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <p>{this.props.data}</p>
            <button onClick={this.props.funClick}>Click me!</button>
         </div>
      );
   }
}

export default App;