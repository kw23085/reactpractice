import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function App3() {

    let array = [3, 5, -4, 8, 11, 1, -1, 6]

    let targetSum = 10

    let twoNumSum = (array, targetSum) => {

        for(let i = 0; i < array.length - 1; i++) {
        
            var firstNum = array[i]
    
            for(let j = i + 1; j < array.length; j++) {
    
                var secondNum = array[j]
    
                if(firstNum + secondNum === targetSum) {
                    return [firstNum, secondNum]
                }
    
            }
    
        }

    }

    console.log(twoNumSum(array, targetSum))




    return(
        <React.Fragment>
            <div className="app3-header">
                <h1 className="app3-title">App3</h1>
            </div>
        </React.Fragment>
    )

}





export default App3