import React, {Component}  from 'react'
import { connect } from 'react-redux'

class InputTask extends Component {

   handleChange = (e) => {
       e.preventDefault();
       const task = this.gettask.value;
       const place = this.getplace.value;
       const data = {
        id: new Date(),
        task,
        place
       }
       this.props.dispatch({
          type:'ADD',
          data
       });
       this.gettask.value="";
       this.getplace.value="";
   }

   render() {
       return (
           <div>
               <form onSubmit={this.handleChange}>
               <input type="text" name="task" ref={(input)=>this.gettask=input}/><br/>
               <input type="text" name="place" ref={(input)=>this.getplace=input} /><br/>
               <button>Add</button>
               </form>
           </div>
       )
   }
}

const mapStateToProps = (state) => {
  return {todo: state.todo}
}

export default connect(mapStateToProps)(InputTask);