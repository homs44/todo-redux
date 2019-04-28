import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component{

    static defaultProps = {
        todos:[]
    }

    render(){
        const {todos, onItemDelete} = this.props;
        const list = todos.map((item, index) => {
            return <TodoItem key={index} id={index+1} index={index} content= {item} onClick={onItemDelete}/>
        })
        return list
    }
}

export default TodoList;