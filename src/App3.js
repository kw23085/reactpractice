import React, { useEffect, useState } from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
// let BASE_URL = 'https://jsonplaceholder.typicode.com/todos/2'

function App3() {

    const [todos, setTodos] = useState([])

    function fetchTodos(num) {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(users => setTodos(users))
    }

    function createTodo() {
        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                completed: true,
                id: 201,
                title: "new todos",
                userId: 201
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }

    useEffect(() => {
        fetchTodos()
        createTodo()
    }, [])

    console.log(todos)

    return(
        <React.Fragment>
            <div className="app3-header">
                {/* {
                    todos.map(todo => {
                        return <div>
                                    <h1>{todo.title}</h1>
                                    <p>Completed: {todo.completed.toString()}</p>
                                </div>
                    })
                } */}
            </div>
            <button onClick={createTodo()}>Create</button>
        </React.Fragment>
    )

}



export default App3