import React,{Component} from 'react'
import { connect } from 'react-redux'

class TaskList extends Component {
   render() {
           return (
            <div>
              <ul > {this.props.todo.map((item) => (
                    <p  key={item.id}>
                        Name: {item.task} <br/>
                      	Surname: {item.place}
                    <br/></p>
                   ))
               }
           </ul>
            </div> 
                       							
        )
   }
}

const mapStateToProps = (state) => {
  return {todo: state}
}

export default connect(mapStateToProps)(TaskList);