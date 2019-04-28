import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: "",
        message:"",
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = () => {
        if(this.state.content){
            this.props.add(this.state.content);
            this.setState({
                message:""
            })
        }else{
            this.setState({
                message:"내용을 입력하세요"
            })
        }
    }

    onAddShower = ()=>{
        this.props.add("씻기");
    }

    render() {

        const { content,message } = this.state;
        
        return <div>
            <p>
                {message}
            </p>
            <input className="input-content" name="content" value={content} onChange={this.onChange} />
            <button className="bt" onClick={this.onClick}>추가</button>
            <button className="bt" onClick={this.onAddShower}>씻기 추가</button>
        </div>
    }
}

export default AddTodo;