import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function App3() {

    let arr = [3, 5, -4, 8, 11, 1, -1, 6]

    console.log('length' + arr.length)

    for(let i = 0; i < arr.length - 1; i++) {
        console.log(i)
    }


    return(
        <React.Fragment>
            <div className="app3-header">
                <h1 className="app3-title">App3</h1>
            </div>
        </React.Fragment>
    )

}





export default App3