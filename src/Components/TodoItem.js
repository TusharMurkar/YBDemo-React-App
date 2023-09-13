import React from 'react'

export default function TodoItem({todo , onDelete}) {
    return (
        <div>
            <h4>{todo.name}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-primary" onClick={()=>onDelete(todo)}>Delete</button>
            <br /><br />
        </div>
    )
}
