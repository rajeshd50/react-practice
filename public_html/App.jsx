/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...',
         checkBox: true,
         radioOptions: ['One','Two','Three'],
         radioSelected: '',
         multiSelectOptions: ['Files','Folder','Empty','Directory'],
         selectedMulti: [],
         selectedOption: ''
      }

      this.state.selectedOption = this.state.multiSelectOptions[0];
      this.state.radioSelected = this.state.radioOptions[0];
      this.state.selectedMulti.push(this.state.multiSelectOptions[1]);

      this.updateState = this.updateState.bind(this);
      this.radioBoxChange = this.radioBoxChange.bind(this);
      this.onRadioChange = this.onRadioChange.bind(this);
      this.multiSelect = this.multiSelect.bind(this);
      this.selectChange = this.selectChange.bind(this);
   };

   multiSelect(e) {
      var val = e.target.value;
      var myState = this.state;
      var changed = false;
      if(e.target.checked) {
         if(myState.selectedMulti.indexOf(val)<0) {
            myState.selectedMulti.push(val);
            changed = true;
         }
      } else {
         if(myState.selectedMulti.indexOf(val)>=0) {
            changed = true;
            myState.selectedMulti.splice(myState.selectedMulti.indexOf(val), 1);
         }
      }
      if(changed) {
         this.setState(myState);
      }
   }

   selectChange(e) {
      var myState = this.state;
      myState.selectedOption = e.target.value;
      this.setState(myState);
   }

   radioBoxChange(e) {
      var myState = this.state;
      myState.checkBox = !myState.checkBox;
      this.setState(myState);
   }

   onRadioChange(e) {
      var myState = this.state;
      myState.radioSelected = e.target.value;
      this.setState(myState);
   }

   updateState(e) {
      var myState = this.state;
      myState.data = e.target.value;
      this.setState(myState);
   }

   render() {
      var divStyle = {
         "display": "inline-block",
         "width": "50%"
      };
      return (
         <div>
            <div style={divStyle}>
               <Content myDataProp = {this.state.data} 
                  updateStateProp = {this.updateState}></Content>
               <label>
                  <input type="checkbox" checked={this.state.checkBox?"checked":""} onChange={this.radioBoxChange} name="isallfine"/>
                   Check Me!!
               </label>
               {/* radio button example */}
               <div>
                  {this.state.radioOptions.map((rad,i)=> <RadioButton key={i} radioChange={this.onRadioChange} data={rad} dataSelected={this.state.radioSelected} />)}
               </div>
               {/* multi select example */}
               <p>Multi option checkbox</p>
               <MultiOpt data={this.state.multiSelectOptions} selected={this.state.selectedMulti} onSelect={this.multiSelect} />
               {/* select option */}
               <p>Select</p>
               <select name="select" value={this.state.selectedOption} onChange={this.selectChange}>
                  {this.state.multiSelectOptions.map((sel,i)=><option key={i} value={sel}>
                     {sel}
                  </option>)}
               </select>
            </div>
            <div style={divStyle}>
               <Result data={this.state}/>
            </div>
         </div>
      );
   }
}

class MultiOpt extends React.Component {
   isChecked(val) {
      return this.props.selected.indexOf(val)>=0;
   }

   render() {
      return (
         <div>
            {this.props.data.map((el,i)=><label key={i}>
               <input type="checkbox" value={el} checked={this.isChecked(el)?"checked":""} onChange={this.props.onSelect}/>{el}
            </label>)}
         </div>
      );
   }
}

class RadioButton extends React.Component {
   render() {
      return (
         <label>
            <input type="radio" onChange={this.props.radioChange} checked={this.props.dataSelected==this.props.data?"checked":""} name="radioOptions" value={this.props.data}/>
            {this.props.data}
         </label>
      );
   }
}

class Content extends React.Component {

   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
         </div>
      );
   }
}

class Result extends React.Component {
   render() {
      return (
         <div>
            <p>Input text value: {this.props.data.data}</p>
            <p>Check box status: {this.props.data.checkBox?'True':'False'}</p>
            <p>Radio box status: {this.props.data.radioSelected}</p>
            <p>
               In Multiselect: {this.props.data.selectedMulti.map((el,i)=> <span key={i}>{el}&nbsp;</span>)}
            </p>
            <p>Selected   value: {this.props.data.selectedOption}</p>
         </div>
      );
   }
}


export default App;