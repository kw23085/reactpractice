import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function App3() {

    let competitions = [
        ['HTML', 'c#'],
        ['c#', 'Python'],
        ['Python', 'HTML']
    ]

    let results = [0, 0, 1]

    function tournyWinner(competitions, results) {

        let HOME_TEAM_WON = 1

        let currentBestTeam = ''

        let scores = {[currentBestTeam]: 0}

        for(let i = 0; i < results.legth; i++) {
            
            let [homeTeam, awayTeam] = competitions[i]

            console.log(homeTeam, awayTeam)

        }
        

    }



    return(
        <React.Fragment>
            <div className="app3-header">
                <fieldset>
                    <legend>Hi</legend>
                </fieldset>
            </div>
        </React.Fragment>
    )

}



export default App3