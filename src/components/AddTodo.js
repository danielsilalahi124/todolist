import React, { Component } from 'react';

class AddTodo extends Component{
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.timeExpected);
        this.setState({title:''});
        this.setState({timeExpected: '0'});
    }

    onTitleChange = (e) => this.setState({ title: e.target.value});
    onTimeExpectedChange = (e) => this.setState({ timeExpected: e.target.value})

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display:'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{ flex:'10', padding:'5px'}}
                    placeholder="Add Todo Item..."  
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    required
                />
                <input 
                    type="number" 
                    name="timeExpected" 
                    placeholder="0 hours..."
                    step="0.5"
                    style={{flex:'1'}}
                    onChange={this.onTimeExpectedChange}
                    required
                />
                <input  
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex:'1'}}
                />
            </form>
        )
    }
    
}

export default AddTodo;