import React, { Component } from 'react'
import'./form.css'
import Liste from './liste.js'

export default class Form extends Component {
    constructor(props){
    super(props);

    this.state = {
        value:{tache:"",
        isComplete:false},
        list: [],
      };}
    
    onChangeValue =(event) => {
      this.setState({value:{ tache: event.target.value, isComplete:false }});
    
    }

    onAddItem =()=> {
        this.setState(state => {
          const list = [...state.list,state.value];
          return {
            list,
            value: {tache:"",isComplete:false},
          };
        });
      };
      cancelCourse = () => { 
        this.setState({
          tache: "",
       
        });
      }
      
      onRemoveItem = i => {
        
        this.setState(state => {
          const list = state.list.filter((item, j) => i !== j);
          return {
            list
          };
        });
      };
      ///pour changer le bouton complete
      onUpdateItem = i => {
        this.setState(state => {
          const list = state.list.map((item, j) => {
            if (i === j) return { tache: item.tache, isComplete: !item.isComplete };
            else return item;
          });
          return { list };
        });
      };
    

    
    render() {
        return (
          <div>
            <div  className="box">
          <h1>TO-DO APP!</h1>
            <p>Add new to-do </p>
            <input id="inserer" name="inserer"  placeholder="Enter new task"
            
            type="text"
            
            onChange={this.onChangeValue} onClick={this.cancelCourse}/>
            <button id="add"
             type="button"
             onClick={this.onAddItem}
          
             >
             Add
             </button>
             </div>

             <div >
             <Liste list={this.state.list} removefunc={this.onRemoveItem} change={this.onUpdateItem}/>
        
                </div>
                </div>
        )
    }
}
