import React, {Component} from 'react'; 
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask"
import {Provider} from 'react-redux'
import {createStore} from 'redux'

//============= action =====================
export const add = () => ({type: 'ADD'})
export const TodoReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD':
        return state.concat([action.data]);
    default:
        return state
  }
}


export const store = createStore(TodoReducer)
class App extends Component {
   render() {   
       return (
           <div className="App">
               <h1>Todo</h1>
               <Provider store={store}>
               <TaskList/>
               <InputTask/>
               </Provider>
               <br/>
           </div>
       );
   }
}

export default App;
