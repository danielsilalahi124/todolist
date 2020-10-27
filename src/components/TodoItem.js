import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through': 'none'
        } 
    }

    render() {
        const {id, title, timeExpected} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange={this.props.toggleComplete.bind(this, id)}/> 
                    {' '} {title} {', '} {timeExpected} {' hours'}
                    <button style={btnStyle} onClick={this.props.deleteItem.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
//btnStle
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
