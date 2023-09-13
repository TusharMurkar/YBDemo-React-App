import React from 'react'
import TodoItem from './TodoItem'

export default function todos(props) {
    let style={
        background: '#000',
        color: '#f1f1f1'
    }
    return (
        <div style={style}>
            {props.todos.length === 0 ? <h4>No data to show</h4> :
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
            })}
        </div>
    )
}
