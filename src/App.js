import React from 'react';
import Task from './Task';
import './index.css';
class App extends React.Component {
  
    state = {
        items : [],
        text : ""
    }
    
    handleChange =(e) =>{
          this.setState ({text:e.target.value})
    }

    handleAdd = () =>{
      if (this.state.text !== ""){
        const items = [...this.state.items, this.state.text];
        this.setState ({items: items , text : ""});
      }
    }

    handleDelete = (id) =>{
      const Nitems = [...this.state.items];
      const items = Nitems.filter((element,i)=>{
        return i!== id
      })
      this.setState({items: items});
    }
    render () {
  return (
    <div className="container-fluid my-5">
      <div className="row">
         <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
               <h1 className="text-center">To Do List</h1>
               <div className="row">
                  <div className="col-9">
                     <input type="text" className="form-control " value={this.state.text} onChange={this.handleChange} placeholder="Write your task"/>
                  </div>
                <div className="col-2">
                    <button className="btn btn-warning px-4 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
                <div className="container-fluid">
                   <ul className="list-unstyled row m-5">
                       {this.state.items.map ((value,i)=>{
                         return <Task key ={i} id={i} value = {value} sendData={this.handleDelete}/>
                       })}
                   </ul>
                </div>
               </div>
         </div>
      </div>
 
    </div>
  );
}
}
export default App;
