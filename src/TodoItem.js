import React from 'react';

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#b0b4b5",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;