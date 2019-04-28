import React, {Component} from 'react'

class TodoItem extends Component{

    onClick = ()=>{
        this.props.onClick(this.props.index);
    }

    render(){
        const {id, content} = this.props;
        return <div className="todo" onClick={this.onClick} >{id} {content}</div>
    }
}

export default TodoItem;